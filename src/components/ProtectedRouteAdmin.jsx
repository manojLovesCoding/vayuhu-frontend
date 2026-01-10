import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


const ProtectedRouteAdmin = ({ children }) => {
  const { admin } = useAuth(); // ✅ use context instead of localStorage

  if (!admin) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRouteAdmin;
