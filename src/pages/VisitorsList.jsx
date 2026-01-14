import React, { useEffect, useState, useMemo } from "react";
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const VisitorsDetails = () => {
  const [visitors, setVisitors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  const API_BASE =
    import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

  // -----------------------------
  // Helpers
  // -----------------------------
  const splitStack = (value) =>
    value
      ? String(value)
          .split("|")
          .map((v) => v.trim())
          .filter(Boolean)
      : [];

  const renderVisitSlots = (checkIn, checkOut) => {
    const ins = splitStack(checkIn);
    const outs = splitStack(checkOut);

    if (ins.length === 0 && outs.length === 0) return "—";

    const max = Math.max(ins.length, outs.length);

    return (
      <div className="flex flex-col gap-1 text-xs">
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className={`flex items-center gap-1 ${
              i > 0 ? "border-t pt-1 text-orange-600" : ""
            }`}
          >
            <span>{ins[i] || "—"}</span>
            <span className="text-gray-400">→</span>
            <span>{outs[i] || "—"}</span>
          </div>
        ))}
      </div>
    );
  };

  const totalAmount = (value) =>
    splitStack(value).reduce((sum, v) => sum + (Number(v) || 0), 0);

  // -----------------------------
  // Fetch Visitors
  // -----------------------------
  useEffect(() => {
    if (!userId) {
      toast.error("User not logged in");
      setLoading(false);
      return;
    }

    const fetchVisitors = async () => {
      try {
        const res = await axios.post(
          `${API_BASE}/get_visitors.php`,
          { user_id: userId },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true, // ✅ Send HttpOnly cookie
          }
        );

        if (!res.data.success) {
          throw new Error(res.data.message || "Failed to load visitors");
        }

        setVisitors(res.data.visitors);
      } catch (err) {
        if (err.response?.status === 401) {
          window.dispatchEvent(new Event("logout"));
        }
        toast.error(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
  }, [userId, API_BASE]);

  // -----------------------------
  // Search (Optimized)
  // -----------------------------
  const filteredVisitors = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return visitors.filter((v) =>
      `${v.name} ${v.contact} ${v.email} ${v.company_name} ${v.reason}`
        .toLowerCase()
        .includes(term)
    );
  }, [searchTerm, visitors]);

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Visitors Details
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow text-sm">
        {loading ? (
          <div className="text-center py-8 text-gray-500">
            Loading visitor records…
          </div>
        ) : (
          <>
            {/* Search */}
            <div className="flex justify-end mb-4">
              <input
                type="text"
                placeholder="Search visitors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm w-64"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-orange-100 text-gray-700">
                  <tr>
                    {[
                      "S.No.",
                      "Name",
                      "Contact",
                      "Workspace",
                      "Attendees",
                      "Visit Slots",
                      "Reason",
                      "Payment",
                      "Added On",
                    ].map((col) => (
                      <th key={col} className="p-2 border text-left">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredVisitors.length === 0 ? (
                    <tr>
                      <td colSpan="9" className="text-center p-6 text-gray-500">
                        No visitors found
                      </td>
                    </tr>
                  ) : (
                    filteredVisitors.map((v, index) => (
                      <tr key={v.id} className="hover:bg-gray-50 transition">
                        <td className="p-2 border text-center">{index + 1}</td>

                        <td className="p-2 border font-medium">{v.name}</td>

                        <td className="p-2 border">{v.contact}</td>

                        <td className="p-2 border text-orange-600 font-semibold">
                          {v.workspace || "—"}
                        </td>

                        <td className="p-2 border text-center">
                          {v.attendees || 1}
                        </td>

                        {/* Visit Slots */}
                        <td className="p-2 border">
                          {renderVisitSlots(v.check_in_time, v.check_out_time)}
                        </td>

                        {/* Reason */}
                        <td
                          className="p-2 border truncate max-w-[150px]"
                          title={v.reason}
                        >
                          {v.reason || "—"}
                        </td>

                        {/* Payment */}
                        <td className="p-2 border">
                          {totalAmount(v.amount_paid) > 0 ? (
                            <div className="flex flex-col">
                              <span className="text-green-600 text-xs font-bold uppercase">
                                Paid
                              </span>
                              <span className="font-semibold">
                                ₹{totalAmount(v.amount_paid)}
                              </span>
                            </div>
                          ) : (
                            <span className="text-red-500 italic text-xs">
                              Unpaid
                            </span>
                          )}
                        </td>

                        {/* Added On */}
                        <td className="p-2 border text-[11px] text-gray-500">
                          {new Date(v.added_on).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="mt-4 text-gray-600 text-sm">
              Showing {filteredVisitors.length} of {filteredVisitors.length} entries
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default VisitorsDetails;
