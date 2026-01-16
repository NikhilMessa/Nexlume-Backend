import express from "express";
import { enrollTeam } from "../controllers/teamController.js";

const router = express.Router();

router.post("/enroll", enrollTeam);

export default router;
