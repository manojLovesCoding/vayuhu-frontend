import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; // ✅ Imported Axios

const Visitors = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const token = localStorage.getItem("token");

  const API_BASE =
    import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    companyName: "",
    visitingDate: "",
    visitingTime: "",
    reason: "",
  });

  const [hasReservation, setHasReservation] = useState(false);
  const [userBookings, setUserBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState("");
  const [guestFee, setGuestFee] = useState(0);

  // Fetch active bookings
  useEffect(() => {
    if (!userId) return;

    const fetchActiveReservations = async () => {
      try {
        const response = await axios.post(
          `${API_BASE}/get_active_bookings.php`,
          { user_id: userId },
          { headers: { Authorization: token ? `Bearer ${token}` : "" } }
        );

        if (response.data.success) {
          setUserBookings(response.data.bookings);
          setHasReservation(response.data.bookings.length > 0);
        }
      } catch (err) {
        console.error("Error fetching active reservations:", err);
      }
    };

    fetchActiveReservations();
  }, [userId, token, API_BASE]);

  // Fetch company profile
  useEffect(() => {
    if (!userId) return;

    axios
      .get(`${API_BASE}/get_company_profile.php`, {
        params: { user_id: userId },
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      })
      .then((res) => {
        const data = res.data;
        if (data.success && data.profile) {
          setFormData((prev) => ({
            ...prev,
            companyName: data.profile.company_name || "",
          }));
        } else {
          toast.warning("No company profile found for this user");
        }
      })
      .catch(() => toast.error("Error fetching company name"));
  }, [userId, token, API_BASE]);

  const handleBookingChange = (e) => {
    const bookingId = e.target.value;
    setSelectedBooking(bookingId);

    const booking = userBookings.find((b) => b.booking_id == bookingId);

    if (booking) {
      setGuestFee(parseFloat(booking.price_per_unit) || 0);
    } else {
      setGuestFee(0);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ---------------- BASIC CHECKS ----------------
    if (!selectedBooking) {
      toast.error("Please select an active booking first!");
      return;
    }

    if (!formData.name || !formData.contact) {
      toast.error("Name and Contact No are required!");
      return;
    }

    if (!formData.visitingDate || !formData.visitingTime) {
      toast.error("Visiting Date and Time are required!");
      return;
    }

    // ---------------- BACKEND PRE-VALIDATION ----------------
    try {
      const validateRes = await axios.post(
        `${API_BASE}/validate_visitor_date.php`,
        {
          user_id: userId,
          booking_id: selectedBooking,
          visitingDate: formData.visitingDate,
        },
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      if (!validateRes.data.success) {
        toast.error(validateRes.data.message);
        return; // ❌ STOP — DO NOT OPEN PAYMENT
      }
    } catch (error) {
      toast.error("Unable to validate visiting date. Please try again.");
      return;
    }

    // ---------------- PAYMENT STARTS ----------------
    const toastId = toast.loading("Initializing payment...");

    try {
      const orderRes = await axios.post(
        `${API_BASE}/create_razorpay_order.php`,
        { amount: guestFee },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );

      if (!orderRes.data.success) {
        throw new Error(orderRes.data.message || "Failed to create order");
      }

      const options = {
        key: orderRes.data.key,
        amount: guestFee * 100,
        currency: "INR",
        name: "Vayuhu Workspaces",
        description: `Visitor Pass for ${formData.name}`,
        order_id: orderRes.data.order_id,

        handler: async (response) => {
          toast.update(toastId, {
            render: "Verifying payment...",
            type: "info",
            isLoading: true,
          });

          try {
            const verifyRes = await axios.post(
              `${API_BASE}/verify_payment.php`,
              response,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token ? `Bearer ${token}` : "",
                },
              }
            );

            if (!verifyRes.data.success) {
              throw new Error("Payment verification failed");
            }

            const saveResponse = await axios.post(
              `${API_BASE}/add_visitor.php`,
              {
                ...formData,
                user_id: userId,
                booking_id: selectedBooking,
                payment_id: response.razorpay_payment_id,
                amount_paid: guestFee,
              },
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token ? `Bearer ${token}` : "",
                },
              }
            );

            if (saveResponse.data.success) {
              toast.update(toastId, {
                render: "Visitor Registered Successfully!",
                type: "success",
                isLoading: false,
                autoClose: 2000,
              });

              setTimeout(() => navigate("/visitors-details"), 1500);
            } else {
              throw new Error(saveResponse.data.message);
            }
          } catch (err) {
            toast.update(toastId, {
              render: err.message || "Something went wrong!",
              type: "error",
              isLoading: false,
              autoClose: 3000,
            });
          }
        },

        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: formData.contact,
        },

        theme: { color: "#F97316" },

        modal: {
          ondismiss: () => {
            toast.dismiss(toastId);
            toast.warn("Payment cancelled by user");
          },
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      toast.update(toastId, {
        render: error.message || "Something went wrong!",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Visitors</h1>
        <button
          onClick={() => navigate("/visitors-details")}
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all px-4 py-2 rounded-md text-sm font-medium"
        >
          Visitors Details
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <form
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          {/* Booking Selector */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Your Active Workspace Booking{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full border border-gray-300 rounded-md p-2"
              value={selectedBooking}
              onChange={handleBookingChange}
              required
            >
              <option value="">-- Select an Upcoming Booking --</option>
              {userBookings.map((b) => (
                <option key={b.booking_id} value={b.booking_id}>
                  {b.workspace_title} ({b.start_date_display}) - Rate: ₹
                  {b.price_per_unit}/hr
                </option>
              ))}
            </select>
            <p className="mt-1 text-xs text-gray-500">
              Visitor fee is based on the selected workspace rate.
            </p>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact No <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter Your Contact No"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Id
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email Id"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              readOnly
              className="w-full border border-gray-300 rounded-md p-2 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
          </div>

          {/* Visiting Date & Time */}
          {hasReservation && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Visiting Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="visitingDate"
                  value={formData.visitingDate}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500"
                  required
                />
                <p className="text-[10px] text-gray-500 mt-1">
                  You can select any date for visiting.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Visiting Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="visitingTime"
                  value={formData.visitingTime}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-orange-500"
                  required
                />
              </div>
            </>
          )}

          {/* Reason */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason
            </label>
            <textarea
              name="reason"
              rows="3"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Enter Reason"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
            />
          </div>

          {/* Submit */}
          <div className="sm:col-span-2 mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-lg shadow transition-all"
            >
              Pay ₹{guestFee} for Hourly Visitor Pass
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Visitors;
