import LeaveRequest from "../models/LeaveRequest.js";
import User from "../models/User.js";

export const applyLeave = async (req, res) => {
  try {
    const { leaveType, startDate, endDate, totalDays, reason } = req.body;
    const leave = await LeaveRequest.create({
      userId: req.user.id,
      leaveType,
      startDate,
      endDate,
      totalDays,
      reason
    });
    res.status(201).json(leave);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const myRequests = async (req, res) => {
  const requests = await LeaveRequest.find({ userId: req.user.id });
  res.json(requests);
};

export const cancelRequest = async (req, res) => {
  await LeaveRequest.findByIdAndDelete(req.params.id);
  res.json({ message: "Request cancelled" });
};

export const approveLeave = async (req, res) => {
  const leave = await LeaveRequest.findByIdAndUpdate(req.params.id, { status: "approved" }, { new: true });
  res.json(leave);
};

export const rejectLeave = async (req, res) => {
  const leave = await LeaveRequest.findByIdAndUpdate(req.params.id, { status: "rejected", managerComment: req.body.comment }, { new: true });
  res.json(leave);
};