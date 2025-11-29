import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"; // ✅ import cors
import authRoutes from "./routes/auth.js";
import leaveRoutes from "./routes/leaves.js";
import dashboardRoutes from "./routes/dashboard.js";

dotenv.config();
const app = express();

// Enable CORS before routes
app.use(cors({
  origin: "http://localhost:3000", // allow your React frontend
  credentials: true                // allow cookies/headers if needed
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/dashboard", dashboardRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));