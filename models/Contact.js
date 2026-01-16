// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: String,
    businessName: String,
    email: String,
    phone: String,
    countryCode: String,
    socialMedia: String,
    budget: String,
    services: [String],
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
