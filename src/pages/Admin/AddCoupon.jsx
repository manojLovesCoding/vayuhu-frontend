import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

const AddCoupon = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    coupon_code: "",
    valid_from: "",
    valid_to: "",
    user_type: "ALL Users",
    space_type: "ALL Spaces",
    discount: "",
    min_price: "",
    max_price: "",
    pack_type: "ALL Spaces",
    email: "",
    mobile: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.coupon_code.trim()) return toast.error("Coupon Code is required");
    if (!form.valid_from) return toast.error("Valid From date is required");
    if (!form.valid_to) return toast.error("Valid To date is required");
    if (!form.discount || isNaN(form.discount)) return toast.error("Enter valid discount percentage");
    if (form.user_type === "Particular User (Email)" && !form.email.trim()) return toast.error("Enter user's email ID");
    if (form.user_type === "Particular User (Mobile)" && !form.mobile.trim()) return toast.error("Enter user's mobile number");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const payload = new FormData();
      Object.entries(form).forEach(([key, value]) => payload.append(key, value));

      // ✅ Send request WITHOUT Authorization header. Cookie is sent automatically
      const res = await axios.post(`${API_URL}/add_coupon.php`, payload, {
        withCredentials: true, // ✅ Important to send cookies
      });

      const data = res.data;

      if (data.success) {
        toast.success("Coupon Added Successfully!");
        setTimeout(() => navigate("/admin/coupon-list"), 700);
      } else {
        toast.error(data?.message || "Failed to create coupon");
      }
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || "Error adding coupon";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-orange-600">Create Coupon Code</h1>
        <button onClick={() => navigate("/admin/coupon-list")} className="px-3 py-1 border border-orange-400 text-orange-500 rounded hover:bg-orange-50 transition">
          View Coupon Codes
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Coupon Code */}
          <div>
            <label className="block text-sm mb-1 font-medium">Coupon Code *</label>
            <input name="coupon_code" value={form.coupon_code} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2" placeholder="Enter Coupon Code..." />
          </div>

          {/* Valid From / To */}
          <div className="flex gap-4">
            <div className="w-full">
              <label className="block text-sm mb-1 font-medium">Valid From *</label>
              <input type="date" name="valid_from" value={form.valid_from} onChange={handleChange} min={today} className="w-full border border-orange-400 rounded px-3 py-2" />
            </div>
            <div className="w-full">
              <label className="block text-sm mb-1 font-medium">Valid To *</label>
              <input type="date" name="valid_to" value={form.valid_to} onChange={handleChange} min={form.valid_from || today} className="w-full border border-orange-400 rounded px-3 py-2" />
            </div>
          </div>

          {/* User Type */}
          <div>
            <label className="block text-sm mb-1 font-medium">Select User Type *</label>
            <select name="user_type" value={form.user_type} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2">
              <option>ALL Users</option>
              <option>First Time Users</option>
              <option>Particular User (Email)</option>
              <option>Particular User (Mobile)</option>
            </select>
          </div>

          {form.user_type === "Particular User (Email)" && (
            <div>
              <label className="block text-sm mb-1 font-medium">Enter User Email *</label>
              <input name="email" value={form.email} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2" placeholder="Enter Email ID" />
            </div>
          )}

          {form.user_type === "Particular User (Mobile)" && (
            <div>
              <label className="block text-sm mb-1 font-medium">Enter Mobile Number *</label>
              <input name="mobile" value={form.mobile} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2" placeholder="Enter Mobile No." />
            </div>
          )}

          {/* Space Type */}
          <div>
            <label className="block text-sm mb-1 font-medium">Select Space Type *</label>
            <select name="space_type" value={form.space_type} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2">
              <option>ALL Spaces</option>
              <option>Workspace</option>
              <option>Group Workspace</option>
              <option>Team Lead Cubicle</option>
              <option>Manager Cubicle</option>
              <option>Video Conferencing</option>
              <option>Executive Cabin</option>
              <option>CEO Cabin</option>
            </select>
          </div>

          {/* Discount */}
          <div>
            <label className="block text-sm mb-1 font-medium">Enter Discount in Percentage (%) *</label>
            <input name="discount" value={form.discount} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2" placeholder="Enter Discount (%)" />
          </div>

          {/* Price Range */}
          <div className="flex gap-4">
            <input name="min_price" value={form.min_price} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2" placeholder="Min Price" />
            <input name="max_price" value={form.max_price} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2" placeholder="Max Price" />
          </div>

          {/* Pack Type */}
          <div>
            <label className="block text-sm mb-1 font-medium">Select Pack Type *</label>
            <select name="pack_type" value={form.pack_type} onChange={handleChange} className="w-full border border-orange-400 rounded px-3 py-2">
              <option>ALL Spaces</option>
              <option>Per Hour</option>
              <option>Per Day</option>
              <option>One Week</option>
              <option>Two Week</option>
              <option>Three Week</option>
              <option>Per Month</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button type="submit" disabled={loading} className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition disabled:opacity-60">
            {loading ? "Saving..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoupon;
