// AppRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Dashboard } from "../../Components/Dashboard/index";
import { MainHeaderBackground } from "../../Components/Background";
import { MainHeader } from "../../Components/MainHeader";
import ProtectedRoute from "../ProtectedRoute/index";
import Login from "../../Components/Login";

const AppRoutes = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-blue-100 text-white font-serif">
      {!isLogin && (
        <>
          <MainHeaderBackground />
          <MainHeader />
        </>
      )}

      <main className={`${!isLogin ? "pt-40" : ""} px-4`}>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute allowedRoles={["admin", "employee"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/unauthorized"
            element={
              <div className="font-black text-4xl flex justify-center">
                Not authorized
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRoutes;
