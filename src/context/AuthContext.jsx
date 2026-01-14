import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );
  const [admin, setAdmin] = useState(() =>
    JSON.parse(localStorage.getItem("admin"))
  );

  {
    /*const loginUser = (userData, token) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };*/
  }

  const loginUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  {
    /*const loginAdmin = (adminData, token) => {
    localStorage.setItem("adminToken", token);
    localStorage.setItem("admin", JSON.stringify(adminData));
    setAdmin(adminData);
  };*/
  }

  const loginAdmin = (adminData) => {
    localStorage.setItem("admin", JSON.stringify(adminData));
    setAdmin(adminData);
  };

  const logoutUser = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/auth", { replace: true });
  };

  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");
    localStorage.removeItem("adminSidebarState"); // ✅ ADD THIS
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
