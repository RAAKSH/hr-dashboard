import React from "react";
import hr from "../../assets/hr.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slice/authSlice";

export const MainHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const role = useSelector((state: any) => state.auth.role);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="ml-40 top-0 left-0 flex items-center space-x-4 relative">
      <img
        src={hr}
        alt="Sample Image"
        className="rounded-lg  h-[100px] w-[100px] object-fill"
      />
      <h1 className="text-4xl my-6 p-4 uppercase text-blue-900 font-bold text-center tracking-wide font-sans">
        HR Dashboard
      </h1>

      <nav className="flex items-center justify-end ml-auto mr-10 relative">
        <div className="relative   inline-block text-left">
          <button
            onClick={handleLogout}
            className="bg-blue-700 text-white px-4 py-2 font-medium capitalize rounded-full"
          >
            {role}, Logout
          </button>

          {/* {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )} */}
        </div>
      </nav>
    </div>
  );
};
