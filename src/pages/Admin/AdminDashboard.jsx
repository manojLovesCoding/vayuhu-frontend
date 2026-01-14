import React, { useEffect, useMemo, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

// Helper Functions
const formatDate = (dateStr) =>
  dateStr ? new Date(dateStr).toLocaleDateString("en-GB") : "-";
const formatCurrency = (val) => `₹${Number(val || 0).toLocaleString()}`;

// Reservations Table (Memoized)
const ReservationsTable = React.memo(({ reservations }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left border-collapse">
      <thead className="bg-orange-50 uppercase text-xs sticky top-0">
        <tr>
          {[
            "S.No",
            "Name",
            "Mobile No",
            "Space",
            "Space Code",
            "Pack",
            "Date",
            "Timings",
            "Amount",
            "Discount",
            "Final Total",
            "Booked On",
          ].map((h) => (
            <th key={h} className="p-2 border">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {reservations.map((r, i) => (
          <tr key={r.id} className="hover:bg-orange-50">
            <td className="p-2 border">{i + 1}</td>
            <td className="p-2 border">{r.name}</td>
            <td className="p-2 border">{r.mobile_no}</td>
            <td className="p-2 border">{r.space}</td>
            <td className="p-2 border">{r.space_code}</td>
            <td className="p-2 border">{r.pack}</td>
            <td className="p-2 border">{formatDate(r.date)}</td>
            <td className="p-2 border">{r.timings}</td>
            <td className="p-2 border">{formatCurrency(r.amount)}</td>
            <td className="p-2 border">{formatCurrency(r.discount)}</td>
            <td className="p-2 border font-medium text-orange-600">
              {formatCurrency(r.final_total)}
            </td>
            <td className="p-2 border">{formatDate(r.booked_on)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

// Main Component
const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);
  const [revenue, setRevenue] = useState({ categories: [], data: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);

        const authHeaders = {
          withCredentials: true, // <-- IMPORTANT: send cookies
        };

        const [resReservations, resRevenue] = await Promise.all([
          axios.get(`${API_URL}/get_reservations.php`, authHeaders),
          axios.get(`${API_URL}/get_monthly_revenue.php`, authHeaders),
        ]);

        if (resReservations.data.success) {
          setReservations(resReservations.data.reservations || []);
        }

        if (resRevenue.data.success) {
          setRevenue({
            categories: resRevenue.data.revenue.map((r) => r.month),
            data: resRevenue.data.revenue.map((r) =>
              Number(r.total_revenue)
            ),
          });
        }
      } catch (error) {
        if (error.response?.status === 401) {
          toast.error("Session expired. Please login again.");
          window.dispatchEvent(new Event("logout"));
        } else {
          toast.error("Failed to load dashboard data");
        }
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  // Summary Stats (Memoized)
  const stats = useMemo(() => {
    const now = new Date();
    const last7Days = new Date();
    last7Days.setDate(now.getDate() - 7);

    const newReservations = reservations.filter(
      (r) => new Date(r.booked_on) >= last7Days
    ).length;

    const completedReservations = reservations.filter(
      (r) => new Date(r.date) < now
    ).length;

    const ongoingReservations = reservations.filter(
      (r) => new Date(r.date) >= now
    ).length;

    return [
      { label: "New Reservations", value: newReservations },
      { label: "Ongoing Reservations", value: ongoingReservations },
      { label: "Completed Reservations", value: completedReservations },
    ];
  }, [reservations]);

  // Chart Options (Memoized)
  const chartOptions = useMemo(
    () => ({
      chart: { id: "monthly-revenue", toolbar: { show: true } },
      xaxis: {
        categories: revenue.categories,
        labels: { rotate: -45 },
      },
      yaxis: {
        labels: { formatter: (val) => `₹${val.toLocaleString()}` },
      },
      plotOptions: { bar: { borderRadius: 6, columnWidth: "50%" } },
      colors: ["#f97316"],
      dataLabels: { enabled: false },
    }),
    [revenue.categories]
  );

  // Render
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-orange-600">Dashboard</h1>
        <p className="text-sm text-gray-500">
          Vayuhu: Elevate Your Workday, Where Collaboration Meets Innovation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-orange-100 rounded-2xl p-4"
          >
            <h2 className="text-sm text-gray-500">{stat.label}</h2>
            <p className="text-2xl font-bold text-orange-600">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-orange-100 rounded-2xl p-4 mb-8">
        <h2 className="text-lg font-semibold text-center text-orange-600 mb-4">
          Monthly Revenue
        </h2>
        {loading ? (
          <p className="text-center text-gray-500 py-10">Loading revenue data...</p>
        ) : (
          <Chart
            options={chartOptions}
            series={[{ name: "Revenue", data: revenue.data }]}
            type="bar"
            height={380}
          />
        )}
      </div>

      <div className="bg-white border border-orange-100 rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-4 text-orange-600">
          Reservations
        </h2>
        {loading ? (
          <p className="text-center text-gray-500 py-10">Loading reservations...</p>
        ) : reservations.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No reservations found.</p>
        ) : (
          <ReservationsTable reservations={reservations} />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
