import React, { useEffect, useState } from "react";
import API from "../../api/axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    // Fetch user details
    API.get("/auth/me")
      .then(res => setUser(res.data))
      .catch(err => console.error(err));

    // Fetch leave balance
    API.get("/leaves/balance")
      .then(res => setBalance(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!user || !balance) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>My Profile</h2>
      <div style={{ marginBottom: "20px" }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>

      <h3>Leave Balance</h3>
      <ul>
        <li>Sick Leave: {balance.sickLeave}</li>
        <li>Casual Leave: {balance.casualLeave}</li>
        <li>Vacation Leave: {balance.vacation}</li>
      </ul>
    </div>
  );
};

export default Profile;