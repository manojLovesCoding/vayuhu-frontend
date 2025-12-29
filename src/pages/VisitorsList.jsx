import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const VisitorsDetails = () => {
  const [visitors, setVisitors] = useState([]);
  const [filteredVisitors, setFilteredVisitors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;
  const token = localStorage.getItem("token");

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

  useEffect(() => {
    if (!userId) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    const fetchVisitors = async () => {
      try {
        const response = await axios.post(`${API_BASE}/get_visitors.php`, 
          { user_id: userId },
          {
            headers: { 
              "Content-Type": "application/json",
              Authorization: token ? `Bearer ${token}` : "" 
            },
          }
        );

        const data = response.data;

        if (!data.success) {
          throw new Error(data.message || "Failed to load visitors.");
        }

        setVisitors(data.visitors);
        setFilteredVisitors(data.visitors);
      } catch (err) {
        console.error(err);
        const errorMessage = err.response?.data?.message || err.message;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitors();
  }, [userId, token, API_BASE]);

  useEffect(() => {
    const filtered = visitors.filter((v) =>
      [v.name, v.contact, v.email, v.company_name, v.reason, v.payment_id, v.workspace]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredVisitors(filtered);
  }, [searchTerm, visitors]);

  return (
    <Layout>
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Visitors Details
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow text-sm">
        {loading && <p className="text-center p-4">Loading visitors...</p>}
        {error && <p className="text-center p-4 text-red-500">{error}</p>}

        {!loading && !error && (
          <>
            <div className="flex justify-between mb-4">
              <select className="border rounded-lg p-2 text-sm">
                <option>Show 10 entries</option>
                <option>Show 25 entries</option>
                <option>Show 50 entries</option>
              </select>

              <input
                type="text"
                placeholder="Search name, space, or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm w-64"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-orange-100 text-gray-700">
                  <tr>
                    {["S.No.", "Name", "Contact No", "Visited Workspace", "Visit Date/Time", "Reason", "Payment Status", "Added On"].map((col) => (
                      <th key={col} className="p-2 border text-left">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredVisitors.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="text-center p-4 text-gray-500">
                        No visitors found
                      </td>
                    </tr>
                  ) : (
                    filteredVisitors.map((visitor, index) => (
                      /* 🟢 Using visitor.id as the key is critical for proper React tracking */
                      <tr key={visitor.id} className="hover:bg-gray-50">
                        <td className="p-2 border">{index + 1}</td>
                        <td className="p-2 border font-medium">{visitor.name}</td>
                        <td className="p-2 border">{visitor.contact}</td>
                        
                        {/* ✅ Displaying the specific Workspace linked to this record */}
                        <td className="p-2 border font-semibold text-orange-600">
                          {visitor.workspace}
                        </td>

                        <td className="p-2 border">
                          {visitor.visiting_date} <br />
                          <span className="text-xs text-gray-500">
                            {visitor.visiting_time ? visitor.visiting_time.slice(0, 5) : "—"}
                          </span>
                        </td>
                        <td className="p-2 border truncate max-w-[150px]" title={visitor.reason}>
                          {visitor.reason || "—"}
                        </td>
                        
                        <td className="p-2 border">
                          {visitor.payment_id ? (
                            <div className="flex flex-col">
                              <span className="text-green-600 font-bold text-[10px] uppercase">Paid</span>
                              <span className="text-gray-700 font-semibold">₹{visitor.amount_paid}</span>
                              <span className="text-[10px] text-gray-400 select-all font-mono">{visitor.payment_id}</span>
                            </div>
                          ) : (
                            <span className="text-red-500 italic text-xs font-medium">Unpaid</span>
                          )}
                        </td>

                        <td className="p-2 border text-gray-500 text-[11px]">
                          {new Date(visitor.added_on).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-4 text-gray-600">
              <p>
                Showing {filteredVisitors.length > 0 ? 1 : 0} to{" "}
                {filteredVisitors.length} of {filteredVisitors.length} entries
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded-lg hover:bg-orange-100">
                  Previous
                </button>
                <button className="px-3 py-1 border rounded-lg hover:bg-orange-100">
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default VisitorsDetails;