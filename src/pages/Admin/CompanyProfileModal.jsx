import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

const CompanyProfileModal = ({ userId, onClose, isAdmin = false }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    gstNo: "",
    email: "",
    contact: "",
    address: "",
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!userId) return;

    const fetchCompanyProfile = async () => {
      try {
        const res = await axios.get(`${API_BASE}/get_user_company_profile.php?user_id=${userId}`, {
          headers: { Authorization: token ? `Bearer ${token}` : "" }
        });
        const data = res.data;

        if (data.success && data.profile) {
          const profile = data.profile;
          setFormData({
            companyName: profile.company_name || "",
            gstNo: profile.gst_no || "",
            email: profile.email || "",
            contact: profile.contact || "",
            address: profile.address || "",
          });
          if (profile.logo) setPreview(profile.logo);
        } else {
          toast.error(data.message || "Company profile not found");
        }
      } catch (error) {
        console.error("Error fetching company profile:", error);
        const errorMsg = error.response?.data?.message || "Failed to load company profile";
        toast.error(errorMsg);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyProfile();
  }, [userId, token]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600">Loading company profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-3 bg-orange-50">
          <h2 className="text-lg font-semibold text-gray-700">Company Profile</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-orange-500 text-2xl leading-none">×</button>
        </div>

        {/* Form */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Logo */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center mb-4">
            <div
              className="relative w-28 h-28 rounded-full border-2 border-orange-400 flex items-center justify-center bg-gray-50 text-gray-400 text-5xl cursor-not-allowed"
            >
              {preview ? (
                <img src={preview} alt="Logo Preview" className="w-full h-full rounded-full object-cover" />
              ) : (
                "🏢"
              )}
            </div>
          </div>

          {/* Company Name */}
          <div className="flex flex-col col-span-1 md:col-span-2">
            <label className="text-sm font-medium text-gray-600 mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              readOnly
              className="border border-orange-400 rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* GST No */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">GST No</label>
            <input
              type="text"
              name="gstNo"
              value={formData.gstNo}
              readOnly
              className="border border-orange-400 rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Company Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">Company Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="border border-orange-400 rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              readOnly
              className="border border-orange-400 rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">Address</label>
            <textarea
              name="address"
              rows="2"
              value={formData.address}
              readOnly
              className="border border-orange-400 rounded px-3 py-2 bg-gray-100 text-gray-500 cursor-not-allowed resize-none"
            />
          </div>

          {/* Close Button */}
          <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileModal;
