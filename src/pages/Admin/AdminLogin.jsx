import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios.js";
import { useAuth } from "../../context/AuthContext.jsx";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { loginAdmin } = useAuth(); // ✅ Use centralized auth

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost/vayuhu_backend";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await api.post(`${API_BASE}/admin_login.php`, { email, password });
      const result = response.data;

      setMessage(result.message);

      if (result.status === "success" && result.admin) {
        loginAdmin(result.admin); // ✅ Save admin in context
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login 👨‍💼</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mb-3 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
            required
          />
          <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
            Login
          </button>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </form>
        <p className="text-center text-sm mt-6 text-gray-600">
          Back to{" "}
          <span
            onClick={() => navigate("/")}
            className="text-orange-500 font-medium cursor-pointer hover:underline"
          >
            main site
          </span>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
