import React, { useEffect, useState } from "react";
import API from "../../api/axios";

const EmployeeDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    API.get("/dashboard/employee").then(res => setStats(res.data));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <p>Total Requests: {stats.totalRequests}</p>
      <p>Approved: {stats.approved}</p>
      <p>Rejected: {stats.rejected}</p>
      <p>Pending: {stats.pending}</p>
      <h3>Leave Balance</h3>
      <p>Sick: {stats.leaveBalance.sickLeave}</p>
      <p>Casual: {stats.leaveBalance.casualLeave}</p>
      <p>Vacation: {stats.leaveBalance.vacation}</p>
    </div>
  );
};

export default EmployeeDashboard;