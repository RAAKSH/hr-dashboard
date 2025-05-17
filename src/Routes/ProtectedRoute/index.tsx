import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/index";

// Protected Routes based on Roles Component

interface Props {
  children: React.ReactNode;
  allowedRoles?: ("admin" | "employee")[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { isAuthenticated, role } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(role!)) return <Navigate to="/unauthorized" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
