// seed/seed.js
import "dotenv/config";
import mongoose from "mongoose";
import Project from "../models/Project.js";

const seedData = [
  // ===========================
  // 1️⃣ SAFARNAMA - Tours and Travel
  // ===========================
  {
    id: 1,
    slug: "safarnama",
    title: "SAFARNAMA",
    subtitle:
      "Embark on extraordinary journeys with Safarnama, where every trip is crafted to perfection. From breathtaking landscapes to cultural wonders, we curate seamless itineraries and exclusive experiences tailored for modern explorers. Whether it's a solo adventure, a romantic getaway, or a group expedition, we ensure hassle-free travel, unforgettable memories, and stories worth sharing. Let's turn your travel dreams into reality! 🌍✈️",
    description: [
      "Built with React and MongoDB for seamless booking experience.",
      "Responsive design using Bootstrap and custom CSS.",
      "Integrated payment gateway and user authentication.",
    ],
    image: "https://picsum.photos/id/1015/1200/800",
    screenshots: [
      "https://picsum.photos/id/1016/1200/800",
      "https://picsum.photos/id/1017/1200/800",
      "https://picsum.photos/id/1018/1200/800",
    ],
    gradient: "linear-gradient(135deg, #00a8ff, #0097e6)",
    color: "#001a2e",
    glowColor: "0, 168, 255",
    tags: [
      "React",
      "MongoDB",
      "Node.js",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    palette: ["#001a2e", "#00a8ff", "#0097e6", "#ffffff"],
    typography: {
      headings: "Montserrat",
      body: "Open Sans",
      align: "left",
      google: true,
    },
    links: {
      demo: "https://safarnama-demo.vercel.app",
      repo: "https://github.com/nikhilmessa/safarnama",
    },
    role: "Full-stack Developer",
    timeline: "Jan 2025 – Mar 2025",
    cards: [
      {
        type: "overview",
        label: "Overview",
        title: "SAFARNAMA",
        description:
          "Travel booking platform connecting travelers with curated tour packages and seamless booking experiences.",
      },
      {
        type: "list",
        label: "Features",
        title: "Core Highlights",
        items: [
          "Tour package browsing and booking",
          "User dashboard and booking management",
          "Secure payment integration",
        ],
      },
      {
        type: "tech",
        label: "Tech Stack",
        items: ["React", "MongoDB", "Node.js", "Bootstrap", "HTML", "CSS"],
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
          { label: "Lighthouse", value: "95%" },
          { label: "SEO Score", value: "92%" },
          { label: "Uptime", value: "99%" },
        ],
      },
      {
        type: "richtext",
        label: "Learnings",
        html: "<ul><li>Improved state management in React</li><li>Enhanced MongoDB query optimization</li></ul>",
      },
    ],
  },

  // ===========================
  // 2️⃣ NEXSHOW - Movie Booking
  // ===========================
  {
    id: 2,
    slug: "nexshow",
    title: "NEXSHOW",
    subtitle:
      "Book your favorite movies effortlessly with NexShow, your one-stop destination for seamless movie ticket booking. Discover the latest blockbusters, explore showtimes, and secure the best seats—all with a few clicks. Whether it's an action-packed thriller, a heartwarming romance, or a family-friendly film, NexShow ensures a hassle-free booking experience. Enjoy the magic of cinema like never before! 🎬🍿",
    description: [
      "Built with React and MongoDB for dynamic movie booking.",
      "Responsive design using Bootstrap and custom CSS.",
      "Real-time seat selection and secure payment integration.",
    ],
    image: "https://picsum.photos/id/1025/1200/800",
    screenshots: [
      "https://picsum.photos/id/1026/1200/800",
      "https://picsum.photos/id/1027/1200/800",
      "https://picsum.photos/id/1028/1200/800",
    ],
    gradient: "linear-gradient(135deg, #e74c3c, #c0392b)",
    color: "#1a0000",
    glowColor: "231, 76, 60",
    tags: [
      "React",
      "MongoDB",
      "Node.js",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    palette: ["#1a0000", "#e74c3c", "#c0392b", "#ffffff"],
    typography: {
      headings: "Oswald",
      body: "Roboto",
      align: "left",
      google: true,
    },
    links: {
      demo: "https://nexshow-demo.vercel.app",
      repo: "https://github.com/nikhilmessa/nexshow",
    },
    role: "Full-stack Developer",
    timeline: "Apr 2025 – Jun 2025",
    cards: [
      {
        type: "overview",
        label: "Overview",
        title: "NEXSHOW",
        description:
          "Movie ticket booking platform with seat selection and showtime management.",
      },
      {
        type: "list",
        label: "Features",
        title: "Core Highlights",
        items: [
          "Interactive seat selection",
          "Movie browsing and showtimes",
          "Secure booking and payment",
        ],
      },
      {
        type: "tech",
        label: "Tech Stack",
        items: ["React", "MongoDB", "Node.js", "Bootstrap", "HTML", "CSS"],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          "https://picsum.photos/id/1029/1200/800",
          "https://picsum.photos/id/1030/1200/800",
          "https://picsum.photos/id/1031/1200/800",
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
          { label: "Lighthouse", value: "94%" },
          { label: "SEO Score", value: "91%" },
          { label: "Uptime", value: "98%" },
        ],
      },
      {
        type: "richtext",
        label: "Learnings",
        html: "<ul><li>Implemented seat selection system</li><li>Enhanced real-time booking features</li></ul>",
      },
    ],
  },

  // ===========================
  // 3️⃣ STYLORA - E-commerce
  // ===========================
  {
    id: 3,
    slug: "stylora",
    title: "STYLORA",
    subtitle:
      "Step into a world of trendsetting fashion with Stylora, your go-to destination for the latest styles and timeless classics. From chic casuals to elegant formals, we bring you a curated collection of apparel that blends quality, comfort, and sophistication. Shop effortlessly, stay ahead of trends, and express your unique style with Stylora—where fashion meets convenience! 👗🛍️",
    description: [
      "Built with React and MongoDB for interactive shopping experience.",
      "Responsive design using Bootstrap and custom CSS.",
      "Shopping cart and secure checkout with payment integration.",
    ],
    image: "https://picsum.photos/id/1035/1200/800",
    screenshots: [
      "https://picsum.photos/id/1036/1200/800",
      "https://picsum.photos/id/1037/1200/800",
      "https://picsum.photos/id/1038/1200/800",
    ],
    gradient: "linear-gradient(135deg, #9b59b6, #e91e63)",
    color: "#1a0a1a",
    glowColor: "155, 89, 182",
    tags: [
      "React",
      "MongoDB",
      "Node.js",
      "Bootstrap",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    palette: ["#1a0a1a", "#9b59b6", "#e91e63", "#ffffff"],
    typography: {
      headings: "Playfair Display",
      body: "Lato",
      align: "left",
      google: true,
    },
    links: {
      demo: "https://stylora-demo.vercel.app",
      repo: "https://github.com/nikhilmessa/stylora",
    },
    role: "Full-stack Developer",
    timeline: "Jul 2025 – Sep 2025",
    cards: [
      {
        type: "overview",
        label: "Overview",
        title: "STYLORA",
        description:
          "Fashion e-commerce platform with product catalog and seamless shopping experience.",
      },
      {
        type: "list",
        label: "Features",
        title: "Core Highlights",
        items: [
          "Product catalog and filtering",
          "Shopping cart and checkout",
          "User accounts and order management",
        ],
      },
      {
        type: "tech",
        label: "Tech Stack",
        items: ["React", "MongoDB", "Node.js", "Bootstrap", "HTML", "CSS"],
      },
      {
        type: "gallery",
        label: "Gallery",
        images: [
          "https://picsum.photos/id/1039/1200/800",
          "https://picsum.photos/id/1040/1200/800",
          "https://picsum.photos/id/1041/1200/800",
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
          { label: "Lighthouse", value: "93%" },
          { label: "SEO Score", value: "90%" },
          { label: "Uptime", value: "97%" },
        ],
      },
      {
        type: "richtext",
        label: "Learnings",
        html: "<ul><li>Enhanced e-commerce cart management</li><li>Improved product filtering and search</li></ul>",
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
