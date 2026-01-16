import Contact from "../models/Contact.js";
import { Resend } from "resend";

export const submitContact = async (req, res) => {
  try {
    const data = req.body;

    // 1️⃣ Save to MongoDB
    const saved = await Contact.create(data);

    // 2️⃣ OPTIONAL: email ONLY to yourself
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "NexLume <onboarding@resend.dev>", // test mode is OK
      to: "nexlume.co@gmail.com",              // ONLY YOU
      subject: "📩 New Contact Form Submission",
      html: `
        <h3>New Contact Received</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.countryCode} ${data.phone}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Services:</strong> ${data.services?.join(", ")}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return res.status(200).json({
      message: "Thanks for contacting NexLume. Our team will reach out soon.",
      id: saved._id,
    });
  } catch (error) {
    console.error("❌ Contact submit error:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
};
