import React from "react";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Correct import for React Router
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const navigate = useNavigate();  // Corrected variable name
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");  // Corrected variable name
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="navbar bg-base-200 shadow-lg p-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl font-semibold hover:text-primary transition duration-300">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {user && (
          <div className="dropdown dropdown-end mx-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:scale-105 transition duration-200"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img alt="user photo" src={user.photoUrl} className="object-cover w-full h-full" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-56 p-3 shadow-xl"
            >
              <div className="text-center text-xl font-medium mb-2">Welcome, {user.firstName}👋</div>
              <li>
                <Link to="/profile" className="flex justify-between">
                  Profile
                  <span className="badge badge-secondary">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections" className="flex justify-between">
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/requests" className="flex justify-between">
                  Requests
                </Link>
              </li>
              <li>
                <a onClick={handleLogout} className="text-red-500">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
