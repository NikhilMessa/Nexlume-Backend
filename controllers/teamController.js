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
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    const subject = "🚀 Exciting Internship Opportunities at NexLume";

    const html = `
      <p>Dear ${candidateName},</p>

      <p>
        Thank you for showing interest in <strong>NexLume</strong>!
        We are excited to offer internship opportunities for passionate
        individuals eager to gain hands-on experience in a fast-growing
        startup environment.
      </p>

      <p>
        At <strong>NexLume</strong>, we believe in empowering fresh talent
        by providing real-world exposure, mentorship, and the chance to work
        on impactful projects.
      </p>

      <h3>🌟 How to Apply?</h3>
      <p>
        📌 <strong>Fill out our Internship Application Form:</strong>
        <a href="https://forms.gle/guHb8ZoeM1ybnSe98"
           style="color:#0073e6; text-decoration:none;">
          Apply Here
        </a>
      </p>
      <p>
        It only takes a few minutes! Once submitted, our team will review
        your application and reach out to you.
      </p>

      <h3>💡 Why Intern at NexLume?</h3>
      <ul>
        <li>✅ Work on <strong>real projects</strong> with industry professionals</li>
        <li>✅ Gain <strong>practical experience</strong> in a dynamic startup environment</li>
        <li>✅ Receive <strong>mentorship</strong> and career growth opportunities</li>
        <li>✅ Potential for <strong>full-time placement</strong> based on performance</li>
      </ul>

      <h3>📞 Need Assistance? We're Here to Help!</h3>
      <p style="font-size:14px;">
        📞 <strong>Phone:</strong> +91 9834248447<br>
        📧 <strong>Email:</strong>
        <a href="mailto:nexlume.co@gmail.com" style="color:#0073e6;">
          nexlume.co@gmail.com
        </a><br>
        ⏰ <strong>Business Hours:</strong> Monday – Saturday | 9 AM – 6 PM IST
      </p>

      <p>
        Follow us on Instagram:
        <a href="https://www.instagram.com/nexlume/"
           style="color:#0073e6;">
          @nexlume
        </a>
      </p>

      <p>
        We look forward to reviewing your application and potentially
        welcoming you to the NexLume team!
      </p>

      <p>
        Best regards,<br>
        <strong>The NexLume Team</strong>
      </p>

      <img
        src="https://res.cloudinary.com/da2ufcgyv/image/upload/v1738524093/jutgcwfol612xoxfgfnh.jpg"
        alt="NexLume Logo"
        style="width:150px; height:auto; margin-top:10px;"
      />

      <p style="font-size:12px; color:#777;">
        Note: This is an automated email. Please do not reply.
      </p>
    `;

    await transporter.sendMail({
      from: `"NexLume Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject,
      html,
    });

    res.status(200).json({
      message: "Internship email sent successfully",
    });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({
      message: "Failed to send internship email",
    });
  }
};