import { Resend } from "resend";
import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
  try {
    const {
      name,
      businessName,
      email,
      phone,
      countryCode,
      socialMedia,
      budget,
      services,
      message,
    } = req.body;

    // 1️⃣ Basic validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "Required fields are missing",
      });
    }

    // 2️⃣ Save to MongoDB
    const savedContact = await Contact.create({
      name,
      businessName,
      email,
      phone,
      countryCode,
      socialMedia,
      budget,
      services,
      message,
    });

    // 3️⃣ Send email to USER
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "NexLume <onboarding@resend.dev>", // change after domain verify
      to: email,
      subject: "We received your details – NexLume 🚀",
      html: `
        <p>Hi ${name},</p>

        <p>Thank you for contacting <strong>NexLume</strong>.</p>

        <p>Here are the details you submitted:</p>

        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Business:</strong> ${businessName || "N/A"}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${countryCode} ${phone}</li>
          <li><strong>Budget:</strong> ${budget || "N/A"}</li>
          <li><strong>Services:</strong> ${
            services?.length ? services.join(", ") : "N/A"
          }</li>
        </ul>

        <p><strong>Your message:</strong></p>
        <p>${message}</p>

        <p>Our team will contact you shortly.</p>

        <p>— NexLume Team</p>
      `,
    });

    return res.status(200).json({
      message: "Details submitted successfully",
      id: savedContact._id,
    });

  } catch (error) {
    console.error("❌ Contact submit error:", error);
    return res.status(500).json({
      message: "Failed to submit contact form",
    });
  }
};
