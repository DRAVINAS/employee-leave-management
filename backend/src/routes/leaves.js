import express from "express";
import { authMiddleware, roleMiddleware } from "../middleware/auth.js";
import {
  applyLeave,
  myRequests,
  cancelRequest,
  approveLeave,
  rejectLeave
} from "../controllers/leaveController.js";

const router = express.Router();

// ✅ Employee routes
// Apply for leave
router.post("/apply", authMiddleware, roleMiddleware("employee"), applyLeave);

// View my leave requests
router.get("/my-requests", authMiddleware, roleMiddleware("employee"), myRequests);

// Cancel a leave request
router.delete("/:id", authMiddleware, roleMiddleware("employee"), cancelRequest);

// ✅ Manager routes
// Approve a leave request
router.put("/:id/approve", authMiddleware, roleMiddleware("manager"), approveLeave);

// Reject a leave request
router.put("/:id/reject", authMiddleware, roleMiddleware("manager"), rejectLeave);

export default router;