import express from "express";

const router = express.Router();

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Example: validate user (replace with real DB logic)
  if (email === "dravinasdravina@gmail.com" && password === "test123") {
    return res.json({
      token: "FAKE_JWT_TOKEN",
      role: "employee"
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

// POST /api/auth/register
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  // Save user to DB here
  return res.json({ message: "User registered successfully" });
});

export default router;