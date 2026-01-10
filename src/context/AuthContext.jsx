import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  const [admin, setAdmin] = useState(() => JSON.parse(localStorage.getItem("admin")));

  const loginUser = (userData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const loginAdmin = (adminData, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("admin", JSON.stringify(adminData));
    setAdmin(adminData);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth", { replace: true });
  };

  const logoutAdmin = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setAdmin(null);
    navigate("/admin-login", { replace: true });
  };

  // ✅ Listen for auto logout (401)
  useEffect(() => {
    const handleAutoLogout = () => {
      if (user) logoutUser();
      else if (admin) logoutAdmin();
    };

    window.addEventListener("logout", handleAutoLogout);
    return () => window.removeEventListener("logout", handleAutoLogout);
  }, [user, admin]);

  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        loginUser,
        loginAdmin,
        logoutUser,
        logoutAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
