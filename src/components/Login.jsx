import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
// import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("virat@gmail.com");
  const [password, setPassword] = useState("Virat@123");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async () => {
    if (!emailId || !password) {
      alert("Please enter both email and password!");
      return;
    }
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
      
    }
  };
  return (
    <div className="flex justify-center mt-36">
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Login</h2>
          <div className="mt-3">
            <h1 className="text-gray-700">Email ID</h1>
          </div>
          <label className="floating-label">
            <span>Your Email</span>
            <input
              type="text"
              value={emailId}
              placeholder="Enter your Email"
              className="input input-md mt-1"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>
          <div className="mt-3">
            <h1 className="text-gray-700">Password</h1>
          </div>
          <label className="floating-label">
            <span>Password</span>
            <input
              type="password"
              value={password}
              placeholder="Password"
              className="input input-md mt-1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center mt-10">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
