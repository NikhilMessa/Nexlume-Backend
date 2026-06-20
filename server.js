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
import teamMemberRoutes from "./routes/teamMember.js";


const app = express();

/* =========================
   GLOBAL MIDDLEWARE
========================= */

// Body parser
app.use(express.json({ limit: "1mb" }));

// CORS (dev + prod) - Updated to support multiple origins
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
  : [
      'http://localhost:5173',
      'https://nexlume-xyxr.onrender.com',
      'https://nexlume.netlify.app',
      'http://localhost:3000',
      'http://127.0.0.1:5173',
      'https://nexlume-dev.netlify.app',
      'http://192.168.29.84:5173/',

    ];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, Postman, or curl)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.warn(`⚠️  CORS blocked origin: ${origin}`);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
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
   STATIC FILES
========================= */

app.use(
  "/uploads",
  helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }),
  express.static("public")
);
/* =========================
   ROUTES
========================= */

// Health check
app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true });
});

// API routes
app.use("/api/projects", projectsRouter);
app.use("/api/team", teamRouter);       // email enroll
app.use("/api/teams", teamRouter);      // old support
app.use("/api/contact", contactRouter);
app.use("/api/team-members", teamMemberRoutes); // team cards

/* =========================
   DATABASE & SERVER START
========================= */

const PORT = process.env.PORT || 5001;

console.log("ENV CHECK (RESEND):", process.env.RESEND_API_KEY);
console.log("🌐 Allowed CORS Origins:", allowedOrigins);

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

