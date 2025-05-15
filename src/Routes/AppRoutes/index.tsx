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
    <div className="text-white font-serif">
      {!isLogin && (
        <div className="relative h-[100px]">
          <MainHeaderBackground />
          <MainHeader />
        </div>
      )}

      <main className={`${!isLogin ? "pt-40 relative z-10" : ""} px-4`}>
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
