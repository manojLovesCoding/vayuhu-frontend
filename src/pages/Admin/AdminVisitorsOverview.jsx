import React, { useEffect, useState } from "react";
// Add "Users" to this list
import { X, Plus, Search, IndianRupee, Users, RefreshCw } from "lucide-react";
import axios from "axios";
import { Download } from "lucide-react";
import { exportVisitorsToCSV } from "../../components/VisitorExport";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

const AdminVisitorsOverview = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // Search state

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ✅ Get Auth Data from LocalStorage
  const token = localStorage.getItem("token");
  const adminData = JSON.parse(localStorage.getItem("admin") || "{}");
  const CURRENT_ADMIN_ID = adminData.id || 3;

  const initialFormState = {
    name: "",
    contact: "",
    email: "",
    company_name: "",
    visiting_date: new Date().toISOString().split("T")[0], // Default to today
    check_in_time: "",
    check_out_time: "",
    reason: "",
    amount_paid: "", // ✅ Added field
    attendees: "1", // ✅ New field: Default to 1 attendee
  };

  const [formData, setFormData] = useState(initialFormState);

  // -----------------------------
  // Fetch Visitors
  // -----------------------------
  const fetchVisitors = async () => {
    if (visitors.length === 0) setLoading(true);

    try {
      const res = await axios.get(`${API_URL}/get_all_visitors.php`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      const data = res.data;

      if (!data.success) {
        setMessage(data.message || "Failed to load visitors");
        setLoading(false);
        return;
      }
      setVisitors(data.visitors);
    } catch (err) {
      console.error("Error fetching visitors:", err);
      const errorMsg =
        err.response?.data?.message ||
        "Something went wrong while fetching visitors.";
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  // -----------------------------
  // Form Handlers
  // -----------------------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const payload = {
        ...formData,
        admin_id: CURRENT_ADMIN_ID,
        user_id: null,
      };

      const res = await axios.post(
        `${API_URL}/admin_add_visitor.php`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const result = res.data;

      if (result.success) {
        setIsModalOpen(false);
        setFormData(initialFormState);
        fetchVisitors();
        setMessage("Visitor added successfully!");
        setTimeout(() => setMessage(""), 3000);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error adding visitor:", error);
      const errorMsg =
        error.response?.data?.message || "Failed to connect to server.";
      alert(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  // -----------------------------
  // Render Helpers
  // -----------------------------
  const filteredVisitors = visitors.filter(
    (v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (v.company_name &&
        v.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalVisitors = visitors.length;

  const totalRevenue = visitors.reduce(
    (sum, v) => sum + (Number(v.amount_paid) || 0),
    0
  );

  const uniqueUsers = new Set(
    visitors.map((v) => v.user_id).filter((id) => id !== null)
  ).size;

  const formatDate = (dateStr) =>
    dateStr ? new Date(dateStr).toLocaleDateString() : "-";
  const formatTime = (timeStr) => (timeStr ? timeStr.slice(0, 5) : "-");

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative font-sans">
      {/* Header & Add Button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-800">
            Admin Visitors Overview
          </h1>
          <p className="text-sm text-gray-500">
            Manage all visitor entries and payments
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={fetchVisitors}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition shadow-sm"
            title="Refresh Data"
          >
            <RefreshCw
              size={18}
              className={
                loading ? "animate-spin text-orange-600" : "text-gray-600"
              }
            />
          </button>
          {/* ✅ Integrated Export Button */}
          <button
            onClick={() => exportVisitorsToCSV(filteredVisitors)}
            className="flex items-center gap-2 bg-white border border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            <Download size={18} /> Export CSV
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition shadow-sm"
          >
            <Plus size={18} />
            Add Visitor
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-sm border border-orange-100 rounded-2xl p-4 flex flex-col justify-center">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Total Visitors
          </h2>
          <p className="text-2xl font-bold text-orange-600">{totalVisitors}</p>
        </div>
        <div className="bg-white shadow-sm border border-green-100 rounded-2xl p-4 flex flex-col justify-center">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Total Revenue
          </h2>
          <p className="text-2xl font-bold text-green-600">₹{totalRevenue}</p>
        </div>
        <div className="bg-white shadow-sm border border-purple-100 rounded-2xl p-4 flex flex-col justify-center">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Staff Users
          </h2>
          <p className="text-2xl font-bold text-purple-600">{uniqueUsers}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by visitor name or company..."
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Status Message */}
      {message && (
        <div
          className={`mb-4 p-3 rounded-lg text-sm text-center font-medium ${
            message.toLowerCase().includes("success")
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {message}
        </div>
      )}

      {/* Visitors Table */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden">
        {loading ? (
          <p className="text-center py-12 text-gray-500 flex flex-col items-center gap-2">
            <RefreshCw className="animate-spin text-orange-500" />
            Loading visitor data...
          </p>
        ) : filteredVisitors.length === 0 ? (
          <p className="text-center py-12 text-gray-500">
            No visitor records found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-bold">
                <tr>
                  {[
                    "S.No",
                    "Visitor Name",
                    "Attendees",
                    "Contact",
                    "Email",
                    "Company",
                    "Date",
                    "Check-In",
                    "Check-Out",
                    "Amount Paid",
                    "Reason",
                    "Added By",
                  ].map((col) => (
                    <th key={col} className="p-4 border-b border-gray-100">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredVisitors.map((v, i) => (
                  <tr
                    key={v.id}
                    className="hover:bg-orange-50/50 transition duration-150"
                  >
                    <td className="p-4 text-gray-400">{i + 1}</td>
                    <td className="p-4 font-bold text-gray-800">{v.name}</td>
                    <td className="p-4 text-center">
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">
                        {v.attendees || 1}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{v.contact}</td>
                    <td className="p-4 text-gray-500">{v.email || "-"}</td>
                    <td className="p-4 text-gray-500">
                      {v.company_name || "-"}
                    </td>
                    <td className="p-4 text-gray-500">
                      {formatDate(v.visiting_date)}
                    </td>
                    <td className="p-4 text-gray-500">
                      {formatTime(v.check_in_time)}
                    </td>
                    <td className="p-4 text-gray-500">
                      {formatTime(v.check_out_time)}
                    </td>
                    <td className="p-4">
                      <span
                        className={`font-bold ${
                          v.amount_paid > 0 ? "text-green-600" : "text-gray-400"
                        }`}
                      >
                        {v.amount_paid ? `₹${v.amount_paid}` : "-"}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500 truncate max-w-[150px]">
                      {v.reason || "-"}
                    </td>
                    <td className="p-4">
                      {v.user_name ? (
                        <span className="text-blue-600 font-medium px-2 py-1 bg-blue-50 rounded text-xs">
                          {v.user_name}
                        </span>
                      ) : (
                        <span className="text-purple-600 font-bold px-2 py-1 bg-purple-50 rounded text-xs">
                          Admin
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* --- POPUP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-orange-50">
              <h3 className="text-lg font-bold text-gray-800">
                Add New Visitor (Admin)
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition p-1 hover:bg-white rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                    Contact No *
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* ✅ New Attendee Input */}
                <div>
                  <label className="text-xs font-bold text-gray-400">Attendees</label>
                  <div className="relative">
                    <Users className="absolute left-2 top-2 text-gray-400" size={16} />
                    <input type="number" name="attendees" value={formData.attendees} onChange={handleInputChange} className="border pl-8 p-2 rounded-lg w-full" min="1" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                    Date
                  </label>
                  <input
                    type="date"
                    name="visiting_date"
                    value={formData.visiting_date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                    Check-In
                  </label>
                  <input
                    type="time"
                    name="check_in_time"
                    value={formData.check_in_time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                    Check-Out
                  </label>
                  <input
                    type="time"
                    name="check_out_time"
                    value={formData.check_out_time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 text-sm"
                  />
                </div>
              </div>

              {/* ✅ Amount Paid Integrated Field */}
              <div className="bg-orange-50 p-3 rounded-xl border border-orange-100">
                <label className="block text-xs font-bold text-orange-700 mb-1 uppercase">
                  Amount Paid (₹)
                </label>
                <div className="relative">
                  <IndianRupee
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"
                    size={16}
                  />
                  <input
                    type="number"
                    name="amount_paid"
                    placeholder="0"
                    value={formData.amount_paid}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm font-bold text-orange-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1 uppercase">
                  Reason for Visit
                </label>
                <textarea
                  name="reason"
                  rows="2"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm resize-none"
                  placeholder="e.g. Business Meeting, Maintenance..."
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-bold hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-200 disabled:opacity-50"
                >
                  {submitting ? "Saving Entry..." : "Save Visitor"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminVisitorsOverview;
