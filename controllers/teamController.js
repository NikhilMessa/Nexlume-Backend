import nodemailer from "nodemailer";

export const enrollTeam = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Extract candidate name from email
  const candidateName = email
    .split("@")[0]
    .replace(/[._]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  try {
    // ✅ Brevo SMTP Transporter (FREE)
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "apikey", // MUST be exactly "apikey"
        pass: process.env.BREVO_SMTP_PASS, // Brevo API key
      },
    });

    const subject = "🚀 Exciting Team Opportunities at NexLume";

    const html = `
      <p>Dear ${candidateName},</p>

      <p>
        Thank you for showing interest in <strong>NexLume</strong>!
        We are excited to offer internship opportunities for passionate
        individuals eager to gain hands-on experience in a fast-growing
        startup environment.
      </p>

      <h3>🌟 How to Apply?</h3>
      <p>
        <a href="https://forms.gle/guHb8ZoeM1ybnSe98"
           style="color:#0073e6;">
          Apply Here
        </a>
      </p>

      <h3>💡 Why Intern at NexLume?</h3>
      <ul>
        <li>Work on real projects</li>
        <li>Practical experience</li>
        <li>Mentorship & growth</li>
      </ul>

      <p>
        Best regards,<br>
        <strong>The NexLume Team</strong>
      </p>

      <img
        src="https://res.cloudinary.com/da2ufcgyv/image/upload/v1738524093/jutgcwfol612xoxfgfnh.jpg"
        alt="NexLume Logo"
        style="width:150px; margin-top:10px;"
      />

      <p style="font-size:12px; color:#777;">
        This is an automated email. Please do not reply.
      </p>
    `;

    await transporter.sendMail({
      from: `"NexLume Team" <noreply@nexlume.co>`, // must be verified in Brevo
      to: email,
      subject,
      html,
    });

    return res.status(200).json({
      message: "Internship email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error.message);

    return res.status(500).json({
      message: "Failed to send internship email",
    });
  }
};
