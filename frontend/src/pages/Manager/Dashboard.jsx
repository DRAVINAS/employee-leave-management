import React, { useEffect, useState } from "react";
import API from "../../api/axios";

const ManagerDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    API.get("/dashboard/manager").then(res => setStats(res.data));
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h2>Manager Dashboard</h2>
      <p>Total Requests: {stats.totalRequests}</p>
      <p>Approved: {stats.approved}</p>
      <p>Rejected: {stats.rejected}</p>
      <p>Pending: {stats.pending}</p>
      <p>Total Employees: {stats.employees}</p>
    </div>
  );
};

export default ManagerDashboard;