import React, { useEffect, useState } from "react";
import API from "../../api/axios";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    API.get("/leaves/my-requests").then(res => setRequests(res.data));
  }, []);

  const handleCancel = async (id) => {
    try {
      await API.delete(`/leaves/${id}`);
      setRequests(requests.filter(r => r._id !== id));
    } catch (err) {
      alert("Error cancelling request");
    }
  };

  return (
    <div>
      <h2>My Leave Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Dates</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req._id}>
                <td>{req.leaveType}</td>
                <td>{req.startDate.slice(0,10)} → {req.endDate.slice(0,10)}</td>
                <td>{req.reason}</td>
                <td>{req.status}</td>
                <td>
                  {req.status === "pending" && (
                    <button onClick={() => handleCancel(req._id)}>Cancel</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyRequests;