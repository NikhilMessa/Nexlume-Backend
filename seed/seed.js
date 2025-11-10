// seed/seed.js
import "dotenv/config";
import mongoose from "mongoose";
import Project from "../models/Project.js";

const seedData = [
  // ===========================
  // 1️⃣ Next Ventures
  // ===========================
  {
    id: 1,
    slug: "next-ventures",
    title: "Next Ventures",
    subtitle:
      "A platform designed for early-stage entrepreneurs to pitch, browse, and engage with startup ideas. It's built to impress both users and investors with blazing speed, compelling visuals, and a modern tech stack.",
    description: [
      "Leveraged Partial Prerendering and After for faster loading.",
      "Simplified idea submission with a clean, intuitive design.",
      "Enhanced browsing with seamless performance optimization.",
    ],
    image: "https://picsum.photos/id/1015/1200/800",
    screenshots: [
      "https://picsum.photos/id/1016/1200/800",
      "https://picsum.photos/id/1017/1200/800",
      "https://picsum.photos/id/1018/1200/800",
    ],
    gradient: "linear-gradient(135deg, #ff0077, #ff4dc4)",
    color: "#060010",
    glowColor: "132, 0, 255",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Motion.dev",
      "Sanity CMS",
      "Auth.js",
      "Markdown",
      "GROQ",
      "Sentry",
    ],
    palette: ["#060010", "#ff0077", "#ff4dc4", "#ffffff"],
    typography: {
      headings: "Poppins",
      body: "Inter",
      align: "left",
      google: true,
    },
    links: {
      demo: "https://nextventures-demo.vercel.app",
      repo: "https://github.com/nikhilmessa/next-ventures",
    },
    role: "Full-stack Developer",
    timeline: "Aug 2025 – Oct 2025",
    cards: [
      {
        type: "overview",
        label: "Overview",
        title: "Next Ventures",
        description:
          "Pitch platform connecting founders and investors with real-time analytics and collaboration.",
      },
      {
        type: "list",
        label: "Features",
        title: "Core Highlights",
        items: [
          "Startup idea submission and feedback",
          "Founder–Investor matching algorithm",
          "AI-powered pitch analysis",
        ],
      },
      {
        type: "tech",
        label: "Tech Stack",
        items: ["Next.js", "TypeScript", "Sanity CMS", "Auth.js"],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          "https://picsum.photos/id/1019/1200/800",
          "https://picsum.photos/id/1020/1200/800",
          "https://picsum.photos/id/1021/1200/800",
        ],
      },
      {
        type: "links",
        label: "Links",
      },
      {
        type: "metrics",
        label: "Performance",
        metrics: [
          { label: "Lighthouse", value: "99%" },
          { label: "SEO Score", value: "98%" },
          { label: "Uptime", value: "100%" },
        ],
      },
      {
        type: "richtext",
        label: "Learnings",
        html: "<ul><li>Improved UI composition with modular design</li><li>Enhanced SEO optimization with Next.js</li></ul>",
      },
    ],
  },

  // ===========================
  // 2️⃣ CodeVerse
  // ===========================
  {
    id: 2,
    slug: "codeverse",
    title: "CodeVerse",
    subtitle:
      "A collaborative platform for developers to share, learn, and grow through interactive coding sessions and challenges.",
    description: [
      "Real-time code sharing with live sessions.",
      "Gamified challenges with leaderboard integration.",
      "Enhanced collaboration using WebSockets and cloud storage.",
    ],
    image: "https://picsum.photos/id/1025/1200/800",
    screenshots: [
      "https://picsum.photos/id/1026/1200/800",
      "https://picsum.photos/id/1027/1200/800",
      "https://picsum.photos/id/1028/1200/800",
    ],
    gradient: "linear-gradient(135deg, #0077ff, #8a2be2)",
    color: "#080022",
    glowColor: "0, 119, 255",
    tags: [
      "React",
      "Node.js",
      "Tailwind CSS",
      "Socket.io",
      "MongoDB",
      "Framer Motion",
      "Firebase",
    ],
    palette: ["#080022", "#0077ff", "#8a2be2", "#ffffff"],
    typography: {
      headings: "Fira Code",
      body: "Inter",
      align: "left",
      google: true,
    },
    links: {
      demo: "https://codeverse-demo.vercel.app",
      repo: "https://github.com/nikhilmessa/codeverse",
    },
    role: "Frontend Engineer",
    timeline: "May 2025 – Jul 2025",
    cards: [
      {
        type: "overview",
        title: "CodeVerse Overview",
        description:
          "A multiplayer coding playground enabling collaborative sessions, code-sharing, and challenges.",
      },
      {
        type: "list",
        label: "Features",
        items: [
          "Real-time WebSocket collaboration",
          "Gamified ranking system",
          "Team-based hack sessions",
        ],
      },
      {
        type: "tech",
        items: ["React", "Node.js", "Socket.io", "Firebase"],
      },
      {
        type: "gallery",
        label: "Snapshots",
        images: [
          "https://picsum.photos/id/1029/1200/800",
          "https://picsum.photos/id/1030/1200/800",
          "https://picsum.photos/id/1031/1200/800",
        ],
      },
      {
        type: "metrics",
        metrics: [
          { label: "Active Users", value: "5k+" },
          { label: "Sessions Hosted", value: "12k+" },
        ],
      },
    ],
  },

  // ===========================
  // 3️⃣ FluxLura Converter
  // ===========================
  {
    id: 3,
    slug: "fluxlura-converter",
    title: "FluxLura Converter",
    subtitle:
      "A free online converter tool for seamless multimedia conversion. Effortlessly transform images, audio, and videos with a sleek, modern design.",
    description: [
      "Built with Next.js and optimized with Media.dev for file conversion.",
      "Leveraged FFmpeg for powerful media processing.",
      "Responsive and intuitive UI for a smooth user experience.",
    ],
    image: "https://picsum.photos/id/1035/1200/800",
    screenshots: [
      "https://picsum.photos/id/1036/1200/800",
      "https://picsum.photos/id/1037/1200/800",
      "https://picsum.photos/id/1038/1200/800",
    ],
    gradient: "linear-gradient(135deg, #00ffaa, #00ccff)",
    color: "#001b1b",
    glowColor: "0, 255, 170",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "FFmpeg", "Node.js", "Vercel"],
    palette: ["#001b1b", "#00ffaa", "#00ccff", "#ffffff"],
    typography: {
      headings: "Montserrat",
      body: "Roboto",
      align: "center",
      google: true,
    },
    links: {
      demo: "https://fluxlura.vercel.app",
      repo: "https://github.com/nikhilmessa/fluxlura",
    },
    role: "Full-stack Developer",
    timeline: "Mar 2025 – Apr 2025",
    cards: [
      {
        type: "overview",
        description:
          "Built an efficient multimedia converter using FFmpeg and Next.js for cross-platform performance.",
      },
      {
        type: "tech",
        items: ["FFmpeg", "Next.js", "Tailwind CSS", "TypeScript"],
      },
      {
        type: "gallery",
        images: [
          "https://picsum.photos/id/1039/1200/800",
          "https://picsum.photos/id/1040/1200/800",
        ],
      },
      {
        type: "links",
      },
    ],
  },

  // ===========================
  // 4️⃣ AI StarForge
  // ===========================
  {
    id: 4,
    slug: "ai-starforge",
    title: "AI StarForge",
    subtitle:
      "A sleek AI SaaS landing page with a user-friendly design that enhances engagement.",
    description: [
      "Optimized landing flow for high conversion rates.",
      "Integrated with OpenAI for dynamic chat experiences.",
      "Modern layout powered by Next.js and Framer Motion.",
    ],
    image: "https://picsum.photos/id/1045/1200/800",
    screenshots: [
      "https://picsum.photos/id/1046/1200/800",
      "https://picsum.photos/id/1047/1200/800",
      "https://picsum.photos/id/1048/1200/800",
    ],
    gradient: "linear-gradient(135deg, #ff6600, #ff0080)",
    color: "#0a0010",
    glowColor: "255, 0, 128",
    tags: [
      "Next.js",
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "OpenAI API",
      "TypeScript",
    ],
    palette: ["#0a0010", "#ff6600", "#ff0080", "#ffffff"],
    typography: {
      headings: "Manrope",
      body: "Inter",
      align: "left",
      google: true,
    },
    links: {
      demo: "https://aistarforge.vercel.app",
      repo: "https://github.com/nikhilmessa/aistarforge",
    },
    role: "Frontend Engineer",
    timeline: "Jan 2025 – Feb 2025",
    cards: [
      {
        type: "overview",
        description:
          "AI SaaS landing page integrating OpenAI APIs for dynamic content generation and user interaction.",
      },
      {
        type: "list",
        items: [
          "OpenAI API Integration",
          "Animated UI with Framer Motion",
          "High conversion optimized landing flow",
        ],
      },
      {
        type: "gallery",
        images: [
          "https://picsum.photos/id/1049/1200/800",
          "https://picsum.photos/id/1050/1200/800",
        ],
      },
      {
        type: "links",
      },
    ],
  },
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Project.deleteMany({});
    await Project.insertMany(seedData);
    console.log("🌱 Seed complete — Projects inserted successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed error:", err);
    process.exit(1);
  }
})();
