import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); // MUST be first

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import projectsRouter from "./routes/projects.js";
import teamRouter from "./routes/team.js";
import contactRouter from "./routes/contact.js";

const app = express();

/* =========================
   GLOBAL MIDDLEWARE
========================= */

// Body parser
app.use(express.json({ limit: "1mb" }));

// CORS (dev + prod)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Preflight
app.options("*", cors());

// Security
app.use(helmet());

// Logger
app.use(morgan("dev"));

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
app.use("/api/contact", contactRouter); // ✅ IMPORTANT

/* =========================
   DATABASE & SERVER START
========================= */

const PORT = process.env.PORT || 5001;

console.log("ENV CHECK (RESEND):", process.env.RESEND_API_KEY);

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
