import LeaveRequest from "../models/LeaveRequest.js";
import User from "../models/User.js";

// Employee Dashboard: show leave balance + summary of requests
export const employeeDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const requests = await LeaveRequest.find({ userId: req.user.id });

    const stats = {
      totalRequests: requests.length,
      approved: requests.filter(r => r.status === "approved").length,
      rejected: requests.filter(r => r.status === "rejected").length,
      pending: requests.filter(r => r.status === "pending").length,
      leaveBalance: user.leaveBalance
    };

    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Manager Dashboard: show team stats
export const managerDashboard = async (req, res) => {
  try {
    const requests = await LeaveRequest.find().populate("userId", "name email role");

    const stats = {
      totalRequests: requests.length,
      approved: requests.filter(r => r.status === "approved").length,
      rejected: requests.filter(r => r.status === "rejected").length,
      pending: requests.filter(r => r.status === "pending").length,
      employees: [...new Set(requests.map(r => r.userId.name))].length
    };

    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};