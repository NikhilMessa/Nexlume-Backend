import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // MUST be first

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import projectsRouter from "./routes/projects.js";
import teamRouter from "./routes/team.js";


// Load environment variables
dotenv.config();

const app = express();

/* =========================
   GLOBAL MIDDLEWARE (TOP)
========================= */

// Body parser
app.use(express.json({ limit: "1mb" }));

// CORS – must be FIRST
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// Handle preflight requests
app.options("*", cors());

// Security headers
app.use(helmet());

// Logger
app.use(morgan("dev"));

// Body parser
app.use(express.json({ limit: "1mb" }));

/* =========================
   ROUTES
========================= */

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});

// API routes
app.use("/api/projects", projectsRouter);
app.use("/api/team", teamRouter);

/* =========================
   DATABASE & SERVER START
========================= */

const PORT = process.env.PORT || 5001;

console.log("ENV CHECK:", process.env.RESEND_API_KEY);


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 API running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
