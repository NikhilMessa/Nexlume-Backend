// models/Project.js
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    // keep numeric id so /projects/:id matches your frontend routes
    id: { type: Number, required: true, unique: true, index: true },

    title: { type: String, required: true },
    subtitle: { type: String, required: true },

    // bullet points shown in UI
    description: { type: [String], default: [] },

    // public URL to the image (CDN, Cloudinary, GitHub raw, or your own static path)
    image: { type: String, required: true },

    // CSS gradient string used by your UI
    gradient: { type: String, required: true },

    // tags shown with icons in UI
    tags: { type: [String], default: [] },

    // optional field for future use
    slug: { type: String, index: true, sparse: true }
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
