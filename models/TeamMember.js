import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    role: { type: String, required: true },
    handle: { type: String },
    bio: { type: String },
    url: { type: String, default: "#" },
    imagePosition: { type: String, default: "center 30%" },

    order: {
      type: Number,
      default: 999,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TeamMember", teamMemberSchema);