// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// Routes
import projectsRouter from "./routes/projects.js";
import teamRouter from "./routes/team.js";

// Load environment variables
dotenv.config();

const app = express();

/* =========================
   GLOBAL MIDDLEWARE (TOP)
========================= */

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

const PORT = process.env.PORT || 5000;

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
