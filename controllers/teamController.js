import { Resend } from "resend";

export const enrollTeam = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // 🔥 CREATE Resend HERE (not at import time)
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "NexLume <onboarding@resend.dev>",
      to: email,
      subject: "🚀 Internship Opportunity at NexLume",
      html: `
        <p>Thank you for your interest in <strong>NexLume</strong>.</p>
        <p>We will contact you soon.</p>
      `,
    });

    return res.status(200).json({
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("❌ Resend error:", error);
    return res.status(500).json({
      message: "Failed to send email",
    });
  }
};
