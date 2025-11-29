import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <h3>Leave Management System</h3>
      <div style={{ display: "flex", gap: "15px" }}>
        {!user && (
          <>
            <Link to="/">Login</Link>
          </>
        )}

        {user?.role === "employee" && (
          <>
            <Link to="/employee/dashboard">Dashboard</Link>
            <Link to="/employee/apply-leave">Apply Leave</Link>
            <Link to="/employee/my-requests">My Requests</Link>
          </>
        )}

        {user?.role === "manager" && (
          <>
            <Link to="/manager/dashboard">Dashboard</Link>
            <Link to="/manager/pending">Pending Requests</Link>
            <Link to="/manager/all-requests">All Requests</Link>
          </>
        )}

        {user && (
          <button onClick={() => dispatch(logout())}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;