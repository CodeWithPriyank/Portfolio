const projects = [
  {
    slug: "wondrr",
    title: "Wondrr",
    description: "A marketplace for group departures",
    details: "Built a full-stack marketplace connecting travelers with group departure experiences. The platform enables hosts to list group trips and travelers to discover, book, and manage their departures — all through a seamless, modern interface.",
    tags: ["NextTS", "MongoDB", "Redis", "AWS", "Express"],
    highlights: [
      "Real-time booking system with availability tracking",
      "Payment integration for secure transactions",
      "Server-side rendering with Next.js for SEO",
      "Redis caching for fast search results",
      "AWS S3 for media storage and delivery"
    ],
    accentColor: "#049EF4",
    link: "https://wondrr.in/",
    image: "/f1.jpg"
  },
  {
    slug: "learnio",
    title: "Learnio",
    description: "A page where students can study with notes, quizzes and more",
    details: "Developed an interactive learning platform where students can access study materials, take quizzes, and track their progress. Focused on creating a clean, distraction-free UI for effective studying.",
    tags: ["HTML", "CSS", "React"],
    highlights: [
      "Interactive quiz system with instant feedback",
      "Organized note sections by subject",
      "Responsive design for mobile studying",
      "Clean, minimal UI for focus"
    ],
    accentColor: "#02c21b",
    link: "https://learnio-zeta.vercel.app/",
    image: "/learnio.png"
  },
  {
    slug: "portfolio-template",
    title: "Portfolio Template",
    description: "Your custom devfolio!",
    details: "Designed and built a reusable portfolio template that developers can clone and customize for their own personal sites. Features smooth animations and a modern, professional look.",
    tags: ["HTML", "CSS", "React"],
    highlights: [
      "Easily customizable sections and colors",
      "Smooth scroll animations",
      "Fully responsive across devices",
      "Clean component architecture for easy modification"
    ],
    accentColor: "#A259FF",
    link: "https://portfolio-template-beta-olive.vercel.app/",
    image: "/ptemplate.png"
  },
  {
    slug: "simple-landing-page",
    title: "Simple Landing Page",
    description: "Frontend landing page of an AI Image generator",
    details: "Created a polished frontend landing page for an AI image generation product. Focused on visual appeal, clear CTAs, and a modern aesthetic that showcases the product effectively.",
    tags: ["HTML", "CSS", "React"],
    highlights: [
      "Eye-catching hero section with gradient effects",
      "Feature showcase with animated cards",
      "Responsive layout for all screen sizes",
      "Optimized performance and load time"
    ],
    accentColor: "#FF6347",
    link: "https://progenix-ai.vercel.app/",
    image: "/aihero.png"
  },
  {
    slug: "more-projects",
    title: "More Projects",
    description: "Click here to explore my work✨",
    tags: ["My GitHub Profile"],
    accentColor: "#ffd700",
    link: "https://github.com/CodeWithPriyank",
    image: "/more.svg",
    skipModal: true
  },
  {
    slug: "coming-up",
    title: "Coming up",
    description: "More cool projects are on the way",
    tags: ["Python", "Machine Learning", "Artificial Intelligence"],
    accentColor: "rgb(149, 174, 255)",
    link: "#",
    image: "/stay_tuned.jpg",
    skipModal: true
  }
];

export default projects;
