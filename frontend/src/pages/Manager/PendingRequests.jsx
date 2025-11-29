import React, { useEffect, useState } from "react";
import API from "../../api/axios";

const PendingRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get("/leaves/pending").then(res => setRequests(res.data));
  }, []);

  const handleApprove = async (id) => {
    await API.put(`/leaves/${id}/approve`);
    setRequests(requests.filter(r => r._id !== id));
  };

  const handleReject = async (id) => {
    const comment = prompt("Enter rejection comment:");
    await API.put(`/leaves/${id}/reject`, { comment });
    setRequests(requests.filter(r => r._id !== id));
  };

  return (
    <div>
      <h2>Pending Leave Requests</h2>
      {requests.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Type</th>
              <th>Dates</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id}>
                <td>{req.userId?.name}</td>
                <td>{req.leaveType}</td>
                <td>{req.startDate.slice(0,10)} → {req.endDate.slice(0,10)}</td>
                <td>{req.reason}</td>
                <td>
                  <button onClick={() => handleApprove(req._id)}>Approve</button>
                  <button onClick={() => handleReject(req._id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingRequests;