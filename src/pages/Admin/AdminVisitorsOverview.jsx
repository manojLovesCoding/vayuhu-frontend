import React, { useEffect, useState } from "react";
import {
  X,
  Plus,
  Search,
  IndianRupee,
  Users,
  RefreshCw,
  Download,
  Clock,
} from "lucide-react";
import axios from "axios";
import { exportVisitorsToCSV } from "../../components/VisitorExport";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

const AdminVisitorsOverview = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedVisitorId, setSelectedVisitorId] = useState(null);

  const adminData = JSON.parse(localStorage.getItem("admin") || "{}");
  const CURRENT_ADMIN_ID = adminData.id || 3;

  const initialFormState = {
    name: "",
    contact: "",
    email: "",
    company_name: "",
    visiting_date: new Date().toISOString().split("T")[0],
    check_in_time: "",
    check_out_time: "",
    reason: "",
    amount_paid: "",
    attendees: "1",
  };

  const [formData, setFormData] = useState(initialFormState);

  const fetchVisitors = async () => {
    if (visitors.length === 0) setLoading(true);
    try {
      const res = await axios.get(
        `${API_URL}/get_all_visitors.php`,
        { withCredentials: true } // ✅ cookie sent automatically
      );

      if (res.data.success) {
        setVisitors(res.data.visitors);
      } else {
        setMessage(res.data.message || "Failed to load visitors");
      }
    } catch (err) {
      console.error("Error fetching visitors:", err);
      setMessage("Authentication failed or session expired.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVisitors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openExtendModal = (v) => {
    setIsEditing(true);
    setSelectedVisitorId(v.id);
    setFormData({
      ...initialFormState,
      name: v.name,
      contact: v.contact,
      email: v.email || "",
      company_name: v.company_name || "",
      visiting_date: v.visiting_date,
      attendees: v.attendees || "1",
      reason: v.reason + " | (Added hour by Admin)",
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const endpoint = isEditing
      ? `${API_URL}/admin_update_visitor.php`
      : `${API_URL}/admin_add_visitor.php`;

    try {
      const payload = {
        ...formData,
        id: selectedVisitorId,
        admin_id: CURRENT_ADMIN_ID,
        user_id: null,
        append_mode: isEditing,
      };

      const res = await axios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // ✅ required
      });

      if (res.data.success) {
        setIsModalOpen(false);
        setIsEditing(false);
        setFormData(initialFormState);
        fetchVisitors();
        setMessage(
          isEditing
            ? "New payment slot added to row!"
            : "Visitor added successfully!"
        );
        setTimeout(() => setMessage(""), 3000);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("Session expired. Please login again.");
    } finally {
      setSubmitting(false);
    }
  };

  const filteredVisitors = visitors.filter(
    (v) =>
      v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (v.company_name &&
        v.company_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (v.email && v.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalVisitors = visitors.length;

  const totalRevenue = visitors.reduce((sum, v) => {
    const amounts = String(v.amount_paid).split(/[|]/);
    const rowTotal = amounts.reduce((s, a) => s + (Number(a.trim()) || 0), 0);
    return sum + rowTotal;
  }, 0);

  const uniqueUsers = new Set(
    visitors.map((v) => v.user_id).filter((id) => id !== null)
  ).size;

  const renderStackedCell = (value, isCurrency = false) => {
    if (!value) return "-";
    const items = String(value).split(/[|]/);
    return (
      <div className="flex flex-col gap-1">
        {items.map((item, idx) => (
          <span
            key={idx}
            className={
              idx > 0
                ? "border-t border-gray-100 pt-1 text-orange-600 font-medium"
                : ""
            }
          >
            {isCurrency && item.trim() !== "" ? `₹${item.trim()}` : item.trim()}
          </span>
        ))}
      </div>
    );
  };

  const renderVisitSlots = (checkIn, checkOut) => {
    const ins = String(checkIn || "")
      .split("|")
      .map((v) => v.trim());
    const outs = String(checkOut || "")
      .split("|")
      .map((v) => v.trim());
    const max = Math.max(ins.length, outs.length);
    if (!max) return "-";

    return (
      <div className="flex flex-col gap-1 text-xs">
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className={
              i > 0 ? "border-t border-gray-100 pt-1 text-orange-600" : ""
            }
          >
            {ins[i] || "-"} → {outs[i] || "-"}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative font-sans">
      {/* Header */}
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
          >
            <RefreshCw
              size={18}
              className={
                loading ? "animate-spin text-orange-600" : "text-gray-600"
              }
            />
          </button>
          <button
            onClick={() => exportVisitorsToCSV(filteredVisitors)}
            className="flex items-center gap-2 bg-white border border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            <Download size={18} /> Export CSV
          </button>
          <button
            onClick={() => {
              setIsEditing(false);
              setFormData(initialFormState);
              setIsModalOpen(true);
            }}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition shadow-sm"
          >
            <Plus size={18} /> Add Visitor
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-sm border border-orange-100 rounded-2xl p-4">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Total Visitors
          </h2>
          <p className="text-2xl font-bold text-orange-600">{totalVisitors}</p>
        </div>
        <div className="bg-white shadow-sm border border-green-100 rounded-2xl p-4">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Total Revenue
          </h2>
          <p className="text-2xl font-bold text-green-600">₹{totalRevenue}</p>
        </div>
        <div className="bg-white shadow-sm border border-purple-100 rounded-2xl p-4">
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
          placeholder="Search by visitor name, email, company..."
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {message && (
        <div
          className={`mb-4 p-3 rounded-lg text-sm text-center font-medium ${
            message.toLowerCase().includes("success")
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {message}
        </div>
      )}

      {/* Visitors Table */}
      <div className="bg-white shadow-sm border border-gray-200 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-bold">
              <tr>
                {[
                  "S.No",
                  "space code",
                  "Visitor Name",
                  "Attendees",
                  "Contact",
                  "Email",
                  "Company",
                  "Date",
                  "Visit Slots",
                  "Amount Paid",
                  "Reason",
                  "Added By",
                  "Action",
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
                  <td className="p-4 font-semibold text-orange-700">
                    {v.space_code || "VC01"}
                  </td>

                  <td className="p-4 font-bold text-gray-800">{v.name}</td>
                  <td className="p-4 text-center">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">
                      {v.attendees || 1}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">{v.contact}</td>
                  <td className="p-4 text-gray-600">{v.email || "-"}</td>
                  <td className="p-4 text-gray-600">{v.company_name || "-"}</td>
                  <td className="p-4 text-gray-500">{v.visiting_date}</td>
                  <td className="p-4 text-gray-500">
                    {renderVisitSlots(v.check_in_time, v.check_out_time)}
                  </td>
                  <td className="p-4 font-bold text-green-600">
                    {renderStackedCell(v.amount_paid, true)}
                  </td>
                  <td className="p-4">{renderStackedCell(v.reason)}</td>
                  <td className="p-4">{renderStackedCell(v.user_name)}</td>
                  <td className="p-4">
                    <button
                      onClick={() => openExtendModal(v)}
                      className="flex items-center gap-1 text-orange-600 hover:bg-orange-100 px-2 py-1 rounded transition border border-orange-200 text-xs font-bold"
                    >
                      <Clock size={14} /> + Hour
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Extend Visitor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-orange-50">
              <h3 className="text-lg font-bold text-gray-800">
                {isEditing
                  ? `Extend Stay: ${formData.name}`
                  : "Add New Visitor"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name & Contact */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={isEditing}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Contact
                  </label>
                  <input
                    type="text"
                    name="contact"
                    required
                    disabled={isEditing}
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm disabled:bg-gray-100"
                  />
                </div>
              </div>

              {/* Email & Company */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>

              {/* Date, Check-In, Check-Out */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Date
                  </label>
                  <input
                    type="date"
                    name="visiting_date"
                    value={formData.visiting_date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Check-In
                  </label>
                  <input
                    type="time"
                    name="check_in_time"
                    required
                    value={formData.check_in_time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm border-orange-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Check-Out
                  </label>
                  <input
                    type="time"
                    name="check_out_time"
                    required
                    value={formData.check_out_time}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg text-sm border-orange-300"
                  />
                </div>
              </div>

              {/* Reason */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase">
                  Reason
                </label>
                <textarea
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded-lg text-sm resize-none"
                  rows={2}
                />
              </div>

              {/* Amount */}
              <div className="bg-orange-50 p-3 rounded-xl border border-orange-200">
                <label className="block text-xs font-bold text-orange-700 mb-1 uppercase">
                  Amount for this slot (₹)
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
                    required
                    value={formData.amount_paid}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border-orange-200 border rounded-lg text-sm font-bold text-orange-800"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-bold hover:bg-orange-700 shadow-lg disabled:opacity-50"
                >
                  {submitting
                    ? "Processing..."
                    : isEditing
                    ? "Confirm Extension"
                    : "Save Visitor"}
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
