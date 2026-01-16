import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // REQUIRED for HttpOnly cookies
});

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      const hasAdmin = localStorage.getItem("admin");
      const hasUser = localStorage.getItem("user");

      if (hasAdmin || hasUser) {
        localStorage.removeItem("admin");
        localStorage.removeItem("user");
        window.dispatchEvent(new Event("logout"));
      }
    }

    return Promise.reject(error);
  }
);

export default api;
