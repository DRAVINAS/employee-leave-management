import React, { useEffect, useState } from "react";
import API from "../../api/axios";

const AllRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get("/leaves/all").then(res => setRequests(res.data));
  }, []);

  return (
    <div>
      <h2>All Leave Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Type</th>
              <th>Dates</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Manager Comment</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id}>
                <td>{req.userId?.name}</td>
                <td>{req.leaveType}</td>
                <td>{req.startDate.slice(0,10)} → {req.endDate.slice(0,10)}</td>
                <td>{req.reason}</td>
                <td>{req.status}</td>
                <td>{req.managerComment || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllRequests;