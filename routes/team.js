import express from "express";
import { enrollTeam } from "../controllers/teamController.js";

const router = express.Router();

// POST only (email trigger)
router.post("/enroll", enrollTeam);

// Optional GET for browser test
router.get("/enroll", (req, res) => {
  res.send("Enroll route is working. Use POST to send email.");
});

export default router;
