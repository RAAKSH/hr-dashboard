import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { validCredentials } from "../../utils/constants";

//Login Component

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [role, setRole] = useState<"admin" | "employee">("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      username === validCredentials[role].username &&
      password === validCredentials[role].password
    ) {
      dispatch(login(role));
      navigate("/");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-100 mx-auto   bg-white shadow-md rounded-xl p-6  text-gray-800">
        <h2 className="text-2xl font-bold text-center">Login</h2>

        <div className="flex justify-center space-x-4">
          {["admin", "employee"].map((r) => (
            <button
              key={r}
              onClick={() => {
                setRole(r as "admin" | "employee");
                setError("");
                setUsername("");
                setPassword("");
              }}
              className={`px-4 py-2 rounded-full font-medium ${
                role === r
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
