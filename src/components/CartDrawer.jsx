import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import axios from "axios";
import { Trash2, X, Calendar, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

const CartDrawer = ({ open, onClose }) => {
  const { cart, removeFromCart, clearCart, totalAmount } = useCart();
  const token = localStorage.getItem("userToken");

  // Rounded breakdown
  const subtotalTotal = Math.round(totalAmount / 1.18);
  const gstTotal = Math.round(totalAmount - subtotalTotal);

  // State to track price breakdown open for each item by ID
  const [breakdowns, setBreakdowns] = useState({});

  // Sync breakdowns when cart changes (persist open state for existing items)
  useEffect(() => {
    const newBreakdowns = {};
    cart.forEach((item) => {
      newBreakdowns[item.id] = breakdowns[item.id] || false;
    });
    setBreakdowns(newBreakdowns);
  }, [cart]);

  const toggleBreakdown = (id) => {
    setBreakdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    if (cart.length === 0) return toast.error("Your cart is empty!");

    const loaded = await loadRazorpayScript();
    if (!loaded) return toast.error("Razorpay SDK failed to load.");

    try {
      const createOrderRes = await axios.post(
        `${API_URL}/create_razorpay_order.php`,
        { amount: totalAmount },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      const orderData = createOrderRes.data;
      if (!orderData.success) return toast.error(orderData.message || "Failed to create order.");

      const options = {
        key: orderData.key,
        amount: totalAmount * 100,
        currency: "INR",
        name: "Vayuhu Workspaces",
        description: "Cart Checkout",
        order_id: orderData.order_id,
        theme: { color: "#F97316" },
        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              `${API_URL}/verify_payment.php`,
              response,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token ? `Bearer ${token}` : "",
                },
              }
            );

            const verifyData = verifyRes.data;
            if (!verifyData.success) return toast.error("Payment verification failed!");

            const user = JSON.parse(localStorage.getItem("user"));
            const userId = user?.id || null;

            const bulkBookingData = cart.map((booking) => {
              const final = Math.round(booking.final_amount);
              const base = Math.round(final / 1.18);
              const gst = final - base;

              return {
                user_id: userId,
                space_id: booking.id,
                workspace_title: booking.title,
                plan_type: booking.plan_type,
                start_date: booking.start_date,
                end_date: booking.end_date,
                start_time: booking.start_time,
                end_time: booking.end_time,
                total_days: booking.total_days,
                total_hours: booking.total_hours,
                num_attendees: booking.num_attendees,
                base_amount: base,
                gst_amount: gst,
                final_amount: final,
                price_per_unit: Math.round(booking.price_per_unit || 0),
                coupon_code: booking.coupon_code || null,
                referral_source: booking.referral || null,
                terms_accepted: 1,
                payment_id: response.razorpay_payment_id,
                seat_codes: booking.seat_codes || "",
              };
            });

            const bookingRes = await axios.post(
              `${API_URL}/add_bulk_bookings.php`,
              { bookings: bulkBookingData },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token ? `Bearer ${token}` : "",
                },
              }
            );

            if (!bookingRes.data.success) {
              throw new Error(bookingRes.data.message);
            }

            const emailPayload = {
              user_id: userId,
              user_email: user?.email,
              total_amount: totalAmount,
              subtotal: subtotalTotal,
              gst_amount: gstTotal,
              bookings: cart,
            };

            await axios.post(`${API_URL}/send_booking_email.php`, emailPayload, {
              headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
              },
            });

            toast.success("🎉 All bookings confirmed!");
            clearCart();
            onClose();
          } catch (error) {
            console.error("Booking Process Error:", error);
            const msg =
              error.response?.data?.message ||
              "Payment successful, but booking failed. Contact support.";
            toast.error(msg);
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Checkout Initialization Error:", error);
      toast.error("Failed to initialize checkout.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white w-full max-w-md h-full shadow-2xl rounded-l-3xl flex flex-col overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Review Booking</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {cart.length} {cart.length === 1 ? "Item" : "Items"} in Cart
                </p>
              </div>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center mt-10 space-y-3">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <Trash2 size={36} className="text-gray-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Your cart is empty</h4>
                  <p className="text-gray-500 text-sm">Looks like you haven't added any workspaces yet.</p>
                </div>
              ) : (
                cart.map((item, idx) => {
                  const base = Math.round(item.final_amount / 1.18);
                  const gst = item.final_amount - base;

                  return (
                    <motion.div
                      key={idx}
                      layout
                      className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md relative group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold uppercase rounded tracking-wide">
                          {item.plan_type}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <h4 className="font-bold text-gray-900 text-base mb-2">{item.title}</h4>

                      <div className="grid grid-cols-1 gap-1 text-gray-500 text-sm">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-2 text-gray-400" />
                          {item.start_date} {item.end_date !== item.start_date && `→ ${item.end_date}`}
                        </div>
                        {item.seat_codes && (
                          <div className="flex items-center text-blue-600 font-medium">
                            <MapPin size={14} className="mr-2 text-blue-400" /> Seats: {item.seat_codes}
                          </div>
                        )}
                        {item.plan_type === "hourly" && (
                          <div className="flex items-center">
                            <Clock size={14} className="mr-2 text-gray-400" />
                            {item.start_time?.slice(0, 5)} - {item.end_time?.slice(0, 5)}
                          </div>
                        )}
                      </div>

                      {/* Price */}
                      <div
                        className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleBreakdown(item.id)}
                      >
                        <p className="text-sm text-gray-500">Price Breakdown</p>
                        {breakdowns[item.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                      {breakdowns[item.id] && (
                        <div className="mt-2 text-gray-600 text-sm space-y-1 pl-2">
                          <div className="flex justify-between">
                            <span>Base Amount</span>
                            <span>₹{base}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>GST (18%)</span>
                            <span>₹{gst}</span>
                          </div>
                          <div className="flex justify-between font-bold text-gray-900">
                            <span>Total</span>
                            <span>₹{item.final_amount}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* Footer Summary */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-gradient-to-t from-white to-gray-50 shadow-inner">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Base Amount</span>
                    <span>₹{subtotalTotal}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>GST (18%)</span>
                    <span>₹{gstTotal}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-2">
                    <span className="font-bold text-gray-900 text-lg">Grand Total</span>
                    <span className="font-black text-2xl text-orange-600">₹{totalAmount}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={clearCart}
                    className="py-3 px-4 border border-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 active:scale-95 transition-all text-sm"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="py-3 px-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 active:scale-95 transition-all text-sm"
                  >
                    Pay & Confirm
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
