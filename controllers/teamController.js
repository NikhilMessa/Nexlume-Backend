import Team from "../models/team.js";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resendApiKey = process.env.RESEND_API_KEY?.trim();

const resend = resendApiKey ? new Resend(resendApiKey) : null;

if (!resend) {
  console.warn("⚠️ RESEND_API_KEY missing. Team email notification disabled.");
}

async function sendEnrollmentNotification(email) {
  try {
    if (!resend) {
      console.warn("⚠️ Skipping email notification. Resend not configured.");
      return;
    }

    await resend.emails.send({
      from: "NexLume <onboarding@resend.dev>",
      to: "nexlume.co@gmail.com",
      subject: "👥 New Team Enrollment",
      html: `<p>New team enrollment email:</p><p><strong>${email}</strong></p>`,
    });
  } catch (error) {
    console.error("⚠️ TEAM EMAIL NOTIFICATION FAILED:", error.message);
  }
}

export const enrollTeam = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Please enter a valid email" });
    }

    const savedTeam = await Team.create({ email });

    void sendEnrollmentNotification(email);

    return res.status(200).json({
      message: "Thanks! We’ll reach out soon.",
      data: savedTeam,
    });
  } catch (error) {
    console.error("❌ TEAM ERROR:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        message: "This email is already registered.",
      });
    }

    return res.status(500).json({
      message: "Failed to enroll team",
    });
  }
};