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
      "Embark on extraordinary journeys with Safarnama, where every trip is crafted to perfection.Let's turn your travel dreams into reality! 🌍✈️",
    description: [
      "Built with React and MongoDB for seamless booking experience.",
      "Responsive design using Bootstrap and custom CSS.",
      "Integrated payment gateway and user authentication.",
    ],
    image: "https://res.cloudinary.com/da2ufcgyv/image/upload/v1767291964/safarnama_1_ycg0p7.png",
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
      "Book your favorite movies effortlessly with NexShow, your one-stop destination for seamless movie ticket booking.Enjoy the magic of cinema like never before! 🎬🍿",
    description: [
      "Built with React and MongoDB for dynamic movie booking.",
      "Responsive design using Bootstrap and custom CSS.",
      "Real-time seat selection and secure payment integration.",
    ],
    image: "https://res.cloudinary.com/da2ufcgyv/image/upload/v1767291962/nexshow_1_dwprxc.png",
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
      "Step into a world of trendsetting fashion with Stylora, your go-to destination for the latest styles and timeless classics.Stylora—where fashion meets convenience! 👗🛍️",
    description: [
      "Built with React and MongoDB for interactive shopping experience.",
      "Responsive design using Bootstrap and custom CSS.",
      "Shopping cart and secure checkout with payment integration.",
    ],
    image: "https://res.cloudinary.com/da2ufcgyv/image/upload/v1767291809/stylora1_bhqqli.png",
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

    {
      id: 4,
      slug: "kenzo-fitness",
      title: "KENZO FITNESS",
      subtitle:
        "Transform your fitness brand’s online presence with Kenzo Fitness — a modern, animated, and fully responsive gym website.💪🔥",
      description: [
        "Built using HTML, CSS, and JavaScript for a fast and lightweight experience.",
        "Modern UI with glassmorphism, animations, and responsive layouts.",
        "Interactive sections including sliders, flip cards, and modal-based contact form.",
      ],
      image:
        "https://res.cloudinary.com/da2ufcgyv/image/upload/v1767291523/GYM_xiwrgu.png",
      screenshots: [
        "https://picsum.photos/id/1050/1200/800",
        "https://picsum.photos/id/1051/1200/800",
        "https://picsum.photos/id/1052/1200/800",
      ],
      gradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
      color: "#0b0f14",
      glowColor: "193, 255, 0",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Animations",
        "UI/UX",
      ],
      palette: ["#0b0f14", "#c1ff00", "#ffffff", "#1f2933"],
      typography: {
        headings: "Montserrat",
        body: "Montserrat",
        align: "left",
        google: true,
      },
      links: {
        demo: "https://kenzo-fitness.vercel.app/",
        repo: "https://github.com/AmanMishra107/kenzo-fitness",
      },
      role: "Frontend Developer",
      timeline: "May 2025 – Jun 2025",
      cards: [
        {
          type: "overview",
          label: "Overview",
          title: "KENZO FITNESS",
          description:
            "A modern, animated, and responsive gym & fitness website designed to showcase training programs, testimonials, and brand identity.",
        },
        {
          type: "list",
          label: "Features",
          title: "Core Highlights",
          items: [
            "Glassmorphism header with smooth navigation",
            "Hero section with animated floating metrics",
            "Training plans with interactive flip cards",
            "Testimonials and brand slider",
            "Responsive layout with mobile-first design",
          ],
        },
        {
          type: "tech",
          label: "Tech Stack",
          items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
        },
        {
          type: "gallery",
          label: "Gallery",
          images: [
            "https://picsum.photos/id/1053/1200/800",
            "https://picsum.photos/id/1054/1200/800",
            "https://picsum.photos/id/1055/1200/800",
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
            { label: "Mobile Friendly", value: "100%" },
            { label: "Load Speed", value: "Fast" },
          ],
        },
        {
          type: "richtext",
          label: "Learnings",
          html:
            "<ul><li>Improved animation performance using pure CSS</li><li>Enhanced responsive layouts for fitness-focused UI</li><li>Built reusable UI components without frameworks</li></ul>",
        },
      ],
    },
    {
      id: 5,
      slug: "real-estate-property",
      title: "REAL ESTATE PROPERTY",
      subtitle:
        "A full-featured real estate property management platform designed to simplify property listings, client interactions, and administrative workflows.🏠📊",
      description: [
        "Developed using Angular CLI for a dynamic and modular frontend.",
        "Backend powered by ASP.NET with SQL Server for secure data handling.",
        "End-to-end property listing, inquiry, and management workflow.",
      ],
      image:
        "https://res.cloudinary.com/da2ufcgyv/image/upload/v1767293532/real_sf4u6j.png",
      screenshots: [
        "https://picsum.photos/id/1060/1200/800",
        "https://picsum.photos/id/1061/1200/800",
        "https://picsum.photos/id/1062/1200/800",
      ],
      gradient: "linear-gradient(135deg, #1e3c72, #2a5298)",
      color: "#0f1b2d",
      glowColor: "30, 60, 114",
      tags: [
        "Angular",
        "ASP.NET",
        "SQL Server",
        "TypeScript",
        "REST API",
        "Enterprise App",
      ],
      palette: ["#0f1b2d", "#2a5298", "#ffffff", "#eaeaea"],
      typography: {
        headings: "Poppins",
        body: "Roboto",
        align: "left",
        google: true,
      },
      links: {
        demo: "#",
        repo: "#",
      },
      role: "Full-stack Developer",
      timeline: "Aug 2025 – Oct 2025",
      cards: [
        {
          type: "overview",
          label: "Overview",
          title: "REAL ESTATE PROPERTY",
          description:
            "A scalable real estate property management system enabling listing, search, inquiry handling, and administrative control.",
        },
        {
          type: "list",
          label: "Features",
          title: "Core Highlights",
          items: [
            "Property listing with advanced filters",
            "User roles for admin, agents, and customers",
            "Inquiry and contact management",
            "Secure authentication and authorization",
            "Dashboard for property and user management",
          ],
        },
        {
          type: "tech",
          label: "Tech Stack",
          items: [
            "Angular CLI",
            "ASP.NET",
            "SQL Server",
            "TypeScript",
            "RESTful APIs",
          ],
        },
        {
          type: "gallery",
          label: "Gallery",
          images: [
            "https://picsum.photos/id/1063/1200/800",
            "https://picsum.photos/id/1064/1200/800",
            "https://picsum.photos/id/1065/1200/800",
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
            { label: "API Reliability", value: "98%" },
            { label: "Database Integrity", value: "High" },
            { label: "Scalability", value: "Enterprise Ready" },
          ],
        },
        {
          type: "richtext",
          label: "Learnings",
          html:
            "<ul><li>Built enterprise-grade Angular components</li><li>Designed REST APIs with ASP.NET</li><li>Optimized SQL queries for large datasets</li><li>Implemented role-based access control</li></ul>",
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
