import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const API_BASE = import.meta.env.VITE_API_URL;

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${API_BASE}/get_reservations.php`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setReservations(response.data.reservations || []);
      } else {
        toast.error("Failed to load reservations");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong while fetching reservations!",
      );
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const filteredReservations = reservations.filter((res) => {
    const term = search.toLowerCase();
    return (
      res.name?.toLowerCase().includes(term) ||
      res.mobile_no?.includes(term) ||
      res.space?.toLowerCase().includes(term) ||
      res.space_code?.toLowerCase().includes(term) ||
      res.seat_codes?.toLowerCase().includes(term)
    );
  });

  const indexOfLast = currentPage * entriesPerPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentReservations = filteredReservations.slice(
    indexOfFirst,
    indexOfLast,
  );
  const totalPages = Math.ceil(filteredReservations.length / entriesPerPage);

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    return new Date(dateStr).toLocaleDateString("en-GB");
  };

  return (
    <div className="p-4 md:p-6 mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h2 className="text-2xl font-semibold">Reservations</h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <select
              className="border rounded px-2 py-1"
              value={entriesPerPage}
              onChange={(e) => {
                setEntriesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
            <span>entries</span>
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-1 rounded w-full sm:w-64"
            placeholder="Search name, mobile, or code..."
          />
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden space-y-4">
        {currentReservations.length ? (
          currentReservations.map((res, index) => (
            <div
              key={res.id || index}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{res.name}</h3>
                <span className="text-sm text-gray-500">
                  #{indexOfFirst + index + 1}
                </span>
              </div>

              <div className="text-sm space-y-1">
                <p><b>Mobile:</b> {res.mobile_no}</p>
                <p><b>Space:</b> {res.space}</p>
                <p><b>Code:</b> {res.seat_codes || res.space_code}</p>
                <p><b>Pack:</b> {res.pack}</p>
                <p>
                  <b>Dates:</b>{" "}
                  {res.date && res.end_date
                    ? `${formatDate(res.date)} - ${formatDate(res.end_date)}`
                    : "-"}
                </p>
                <p><b>Time:</b> {res.timings}</p>
                <p><b>Amount:</b> ₹{res.amount}</p>
                <p className="text-green-600">
                  <b>Discount:</b>{" "}
                  {Number(res.discount) > 0 ? `-₹${res.discount}` : "₹0"}
                </p>
                <p className="font-bold">
                  <b>Total:</b> ₹{res.final_total}
                </p>
                <p className="text-xs text-gray-500">
                  Booked on: {res.booked_on}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reservations found.</p>
        )}
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto border rounded-lg">
        <table className="min-w-full bg-white text-sm">
          <thead>
            <tr className="bg-orange-50 text-gray-700">
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Mobile</th>
              <th className="border px-4 py-2">Space</th>
              <th className="border px-4 py-2">Code</th>
              <th className="border px-4 py-2 hidden lg:table-cell">Pack</th>
              <th className="border px-4 py-2">Dates</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2 text-right">Amount</th>
              <th className="border px-4 py-2 hidden lg:table-cell text-right">
                Discount
              </th>
              <th className="border px-4 py-2 text-right">Total</th>
              <th className="border px-4 py-2">Booked</th>
            </tr>
          </thead>

          <tbody>
            {currentReservations.length ? (
              currentReservations.map((res, index) => (
                <tr
                  key={res.id || index}
                  className="hover:bg-orange-50 text-center"
                >
                  <td className="border px-4 py-2">
                    {indexOfFirst + index + 1}
                  </td>
                  <td className="border px-4 py-2 font-medium">{res.name}</td>
                  <td className="border px-4 py-2">{res.mobile_no}</td>
                  <td className="border px-4 py-2">{res.space}</td>
                  <td className="border px-4 py-2">
                    {res.seat_codes || res.space_code}
                  </td>
                  <td className="border px-4 py-2 hidden lg:table-cell">
                    {res.pack}
                  </td>
                  <td className="border px-4 py-2">
                    {res.date && res.end_date
                      ? `${formatDate(res.date)} - ${formatDate(res.end_date)}`
                      : "-"}
                  </td>
                  <td className="border px-4 py-2">{res.timings}</td>
                  <td className="border px-4 py-2 text-right">₹{res.amount}</td>
                  <td className="border px-4 py-2 hidden lg:table-cell text-green-600 text-right">
                    {Number(res.discount) > 0 ? `-₹${res.discount}` : "₹0"}
                  </td>
                  <td className="border px-4 py-2 text-right font-bold">
                    ₹{res.final_total}
                  </td>
                  <td className="border px-4 py-2 text-xs text-gray-500">
                    {res.booked_on}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="12" className="text-center py-4 text-gray-500">
                  No reservations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2 text-sm">
        <p>
          Showing {indexOfFirst + 1} to{" "}
          {Math.min(indexOfLast, filteredReservations.length)} of{" "}
          {filteredReservations.length}
        </p>

        <div className="flex flex-wrap gap-1 justify-center">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-orange-500 text-white"
                  : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
