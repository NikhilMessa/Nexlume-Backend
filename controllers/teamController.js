import Team from "../models/team";
import { Resend } from "resend";

export const enrollTeam = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    console.log("📩 TEAM EMAIL RECEIVED:", email);

    // 1️⃣ SAVE TO MONGODB
    const savedTeam = await Team.create({ email });
    console.log("✅ TEAM SAVED:", savedTeam._id);

    // 2️⃣ OPTIONAL: notify ONLY YOU (FREE MODE)
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "NexLume <onboarding@resend.dev>",
      to: "nexlume.co@gmail.com",
      subject: "👥 New Team Enrollment",
      html: `<p>New team enrollment email:</p><p><strong>${email}</strong></p>`,
    });

    return res.status(200).json({
      message: "Thanks! We’ll reach out soon.",
    });

  } catch (error) {
    console.error("❌ TEAM ERROR:", error);

    // Handle duplicate email
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
