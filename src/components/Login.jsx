import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
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

  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center mt-20 ">
      <div className="card bg-base-100 image-full w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title flex justify-center mr-4">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>

          {!isLoginForm && (
            <>
              <label className="floating-label">
                <span>First Name</span>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter your First Name"
                  className="input input-md mt-1"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <br />

              <label className="floating-label">
                <span>Last Name</span>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter your Last Name"
                  className="input input-md mt-1"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <br />
            </>
          )}
          <label className="floating-label">
            <span>Your Email</span>
            <input
              type="email"
              value={emailId}
              placeholder="Enter your Email"
              className="input input-md mt-1"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>
          <br />

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
          <div className="card-actions justify-center mt-5">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignup}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            className="cursor-pointer flex justify-center font-bold mt-5  text-gray-400 "
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
