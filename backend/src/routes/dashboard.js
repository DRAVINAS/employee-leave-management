import express from "express";
import { authMiddleware, roleMiddleware } from "../middleware/auth.js";
import { employeeDashboard, managerDashboard } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/employee", authMiddleware, roleMiddleware("employee"), employeeDashboard);
router.get("/manager", authMiddleware, roleMiddleware("manager"), managerDashboard);

export default router;