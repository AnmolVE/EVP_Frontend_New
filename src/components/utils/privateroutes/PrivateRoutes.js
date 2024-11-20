import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes({ requiredRole }) {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const accessToken = tokens?.access;

  const userRole = tokens?.role;

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
