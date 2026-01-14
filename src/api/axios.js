import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// -----------------------------
// Request Interceptor
// -----------------------------
api.interceptors.request.use(
  (config) => {
    

    return config;
  },
  (error) => Promise.reject(error)
);

// -----------------------------
// Response Interceptor
// -----------------------------
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    // Logout ONLY if token existed and session was active
    if (status === 401) {
      const hasAdmin = localStorage.getItem("admin");
      const hasUser = localStorage.getItem("user");

      if (hasAdmin || hasUser) {
        
        localStorage.removeItem("admin");
        localStorage.removeItem("user");

        // notify app (AuthContext)
        window.dispatchEvent(new Event("logout"));
      }
    }

    return Promise.reject(error);
  }
);

export default api;
