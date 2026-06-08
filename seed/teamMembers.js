import mongoose from "mongoose";
import dotenv from "dotenv";
import TeamMember from "../models/TeamMember.js";

dotenv.config();

const members = [
  {
    image: "/uploads/team/messa.jpg",
    title: "Nikhil Messa",
    role: "Tech Lead",
    handle: "@nikhilmessa",
    bio: "Leading technical strategy and scalable system architecture.",
    url: "https://www.linkedin.com/in/nikhil-messa/",
  },
  {
    image: "/uploads/team/Pk.jpg",
    title: "Prajwal Kolure",
    role: "Creative Director",
    handle: "@prajwalkolure",
    bio: "Driving creative vision through impactful design, branding, and visual storytelling.",
    url: "https://www.linkedin.com/in/prajwal-k-956865328/",
  },
  {
    image: "/uploads/team/aman.jpg",
    title: "Aman Mishra",
    role: "Project Manager",
    handle: "@amanmishra",
    bio: "Ensuring smooth execution of projects by managing timelines, teams, and deliverables.",
    url: "https://www.linkedin.com/in/amanmishra107/",
  },
  {
    image: "/uploads/team/Mansi.jpeg",
    title: "Mansi Kumbhar",
    role: "Product Manager",
    handle: "@mansikumbhar",
    bio: "Defining product goals and coordinating successful project delivery.",
    url: "https://www.linkedin.com/in/mansi-kumbhar-b60252248/",
    imagePosition: "center 35%",
  },
  {
    image: "/uploads/team/ravi.jpg",
    title: "Ravindra Patil",
    role: "Product Engineer",
    handle: "@ravindrapatil",
    bio: "Building end-to-end product features efficiently and scalability.",
    url: "https://www.linkedin.com/in/ravindra-patil-3a2876250/",
  },
  {
    image: "/uploads/team/sanju.jpg",
    title: "Sanjit Prajapati",
    role: "UI/UX Specialist",
    handle: "@sanjitprajapati",
    bio: "Transforming ideas into stunning digital experiences.",
    url: "https://www.linkedin.com/in/sanjit-prajapati-5420a9222/",
  },
  {
    image: "/uploads/team/anna.jpg",
    title: "Sanath Shetty",
    role: "Full Stack Developer",
    handle: "@sanathshetty",
    bio: "Developing end-to-end solutions with a focus on performance and scalability.",
    url: "#",
  },
  {
    image: "/uploads/team/Shraddha.jpeg",
    title: "Shraddha Chauhan",
    role: "Creative Strategist",
    handle: "@shraddhachauhan",
    bio: "Using creative strategies for brand growth, enhancing client engagement and reach.",
    url: "https://www.linkedin.com/in/shraddha-chauhan017-532044223/",
    imagePosition: "center 42%",
  },
];

const seedTeamMembers = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ MongoDB Connected");

    await TeamMember.deleteMany();

    console.log("🗑️ Existing Team Members Deleted");

    await TeamMember.insertMany(members);

    console.log(`✅ ${members.length} Team Members Seeded Successfully`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Seed Error:", error);
    process.exit(1);
  }
};

seedTeamMembers();