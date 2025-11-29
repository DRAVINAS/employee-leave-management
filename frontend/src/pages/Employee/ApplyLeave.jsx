import React, { useState } from "react";
import API from "../../api/axios";

const ApplyLeave = () => {
  const [leaveType, setLeaveType] = useState("sick");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalDays = Math.ceil(
      (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
    ) + 1;

    try {
      const res = await API.post("/leaves", {
        leaveType,
        startDate,
        endDate,
        totalDays,
        reason,
      });
      setMessage("Leave request submitted successfully!");
    } catch (err) {
      setMessage("Error submitting leave request");
    }
  };

  return (
    <div>
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <label>Leave Type:</label>
        <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
          <option value="sick">Sick</option>
          <option value="casual">Casual</option>
          <option value="vacation">Vacation</option>
        </select>

        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

        <label>Reason:</label>
        <textarea value={reason} onChange={(e) => setReason(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ApplyLeave;