import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import EmployeeDashboard from "./pages/Employee/Dashboard";
import ManagerDashboard from "./pages/Manager/Dashboard";
import ApplyLeave from "./pages/Employee/ApplyLeave";
import PendingRequests from "./pages/Manager/PendingRequests";
import MyRequests from "./pages/Employee/MyRequests";
import AllRequests from "./pages/Manager/AllRequests";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Employee/Profile";

import Navbar from "./components/Navbar";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/employee/apply-leave" element={<ApplyLeave />} />
        <Route path="/employee/my-requests" element={<MyRequests />} />
        <Route path="/manager/all-requests" element={<AllRequests />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employee/profile" element={<Profile />} />

        <Route path="/manager/pending" element={<PendingRequests />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;