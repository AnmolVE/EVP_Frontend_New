import React from "react";
import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes({ requiredRole }) {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  const accessToken = loginData?.access;

  const userRole = loginData?.role;

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/home" />;
  }

  return <Outlet />;
}

export default PrivateRoutes;
