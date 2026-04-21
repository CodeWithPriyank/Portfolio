const base = import.meta.env.BASE_URL;

const projects = [
  {
    slug: "PJContext",
    title: "PJContext",
    description: "Capture and restore AI coding context across sessions.",
    details: "Built a full-stack marketplace connecting travelers with group departure experiences. The platform enables hosts to list group trips and travelers to discover, book, and manage their departures — all through a seamless, modern interface.",
    tags: ["Python", "Redis", "Node.js"],
    highlights: [
      "Real-time booking system with availability tracking",
      "Payment integration for secure transactions",
      "Server-side rendering with Next.js for SEO",
      "Redis caching for fast search results",
      "AWS S3 for media storage and delivery"
    ],
    accentColor: "#049EF4",
    link: "",
    image: `${base}f1.jpg`
  },
  // {
  //   slug: "learnio",
  //   title: "Learnio",
  //   description: "A page where students can study with notes, quizzes and more",
  //   details: "Developed an interactive learning platform where students can access study materials, take quizzes, and track their progress. Focused on creating a clean, distraction-free UI for effective studying.",
  //   tags: ["HTML", "CSS", "React"],
  //   highlights: [
  //     "Interactive quiz system with instant feedback",
  //     "Organized note sections by subject",
  //     "Responsive design for mobile studying",
  //     "Clean, minimal UI for focus"
  //   ],
  //   accentColor: "#02c21b",
  //   link: "",
  //   image: `${base}learnio.png`
  // },
  // {
  //   slug: "portfolio-template",
  //   title: "Portfolio Template",
  //   description: "Your custom devfolio!",
  //   details: "Designed and built a reusable portfolio template that developers can clone and customize for their own personal sites. Features smooth animations and a modern, professional look.",
  //   tags: ["HTML", "CSS", "React"],
  //   highlights: [
  //     "Easily customizable sections and colors",
  //     "Smooth scroll animations",
  //     "Fully responsive across devices",
  //     "Clean component architecture for easy modification"
  //   ],
  //   accentColor: "#A259FF",
  //   link: "",
  //   image: `${base}ptemplate.png`
  // },
  // {
  //   slug: "simple-landing-page",
  //   title: "Simple Landing Page",
  //   description: "Frontend landing page of an AI Image generator",
  //   details: "Created a polished frontend landing page for an AI image generation product. Focused on visual appeal, clear CTAs, and a modern aesthetic that showcases the product effectively.",
  //   tags: ["HTML", "CSS", "React"],
  //   highlights: [
  //     "Eye-catching hero section with gradient effects",
  //     "Feature showcase with animated cards",
  //     "Responsive layout for all screen sizes",
  //     "Optimized performance and load time"
  //   ],
  //   accentColor: "#FF6347",
  //   link: "",
  //   image: `${base}aihero.png`
  // },
  {
    slug: "clipboard-history-extension",
    title: "Clipboard History for Devs",
    description: "A browser extension that tracks your copied code snippets with syntax highlighting.",
    details: "Built a privacy-first Chrome extension that maintains a history of your snippets (configurable) with automatic syntax highlighting and smart language detection. All data stays local — no servers, no tracking. Accessible via Ctrl+Shift+V.",
    tags: ["JavaScript", "Chrome Extension", "Manifest V3", "Prism.js"],
    highlights: [
      "Tracks copied snippets with automatic syntax highlighting via Prism.js",
      "Smart language detection — auto-tags commands, JSON, TypeScript, Go, Rust, and more",
      "Persistent storage using Chrome Storage API — survives browser restarts",
      "100% privacy-first: all data stored locally, no external servers",
      "Supports Chrome, Edge, Brave, and Firefox with keyboard navigation"
    ],
    accentColor: "#A259FF",
    link: "https://github.com/CodeWithPriyank/Extension/tree/main/clipboard_snippet",
    image: `${base}Mentormap.png`
  },
  {
    slug: "sip-detection-ml",
    title: "Sip Detection ML Model",
    description: "ML model to classify sip-taking behavior from bottle-mounted sensor data.",
    details: "Built an end-to-end machine learning pipeline to detect and classify sip-taking behavior using time-series data from sensors mounted on a bottle. Handled sensor signal preprocessing, feature engineering, model training, and evaluation entirely from scratch.",
    tags: ["Python", "Scikit-learn", "Signal Processing", "ESP32 Sensor"],
    highlights: [
      "Preprocessed raw time-series sensor signals for noise reduction and normalization",
      "Engineered features using peak detection, windowing, and statistical aggregations",
      "Benchmarked SVM, Random Forest, and Decision Tree classifiers",
      "Selected best-performing model for real-time sip prediction",
      "End-to-end pipeline from raw data to deployable model"
    ],
    accentColor: "#4CAF50",
    link: "",
    image: `${base}bottlehand.png`
  },
  {
    slug: "more-projects",
    title: "More Projects",
    description: "Click here to explore my work✨",
    tags: ["My GitHub Profile"],
    accentColor: "#ffd700",
    link: "https://github.com/CodeWithPriyank",
    image: `${base}more.svg`,
    skipModal: true
  },
  {
    slug: "coming-up",
    title: "Coming up",
    description: "More cool projects are on the way",
    tags: ["Python", "Machine Learning", "Artificial Intelligence"],
    accentColor: "rgb(149, 174, 255)",
    link: "#",
    image: `${base}stay_tuned.jpg`,
    skipModal: true
  }
];

export default projects;
