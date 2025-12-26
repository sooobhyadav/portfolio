import { ResumeData } from "./types";

// Helper to generate a minimal Vercel-style SVG image for projects
const generateProjectImage = (name: string, color: string = "#3b82f6") => {
  const svg = `
    <svg width="800" height="450" viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#050505"/>
      <defs>
        <radialGradient id="grad-${name.replace(
          /\s/g,
          ""
        )}" cx="50%" cy="50%" r="50%" fx="80%" fy="20%">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#050505" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="450" fill="url(#grad-${name.replace(
        /\s/g,
        ""
      )})"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="42" font-weight="800" letter-spacing="-0.05em" fill="#ffffff">${name.toUpperCase()}</text>
      <rect x="350" y="245" width="100" height="1" fill="${color}" fill-opacity="0.3"/>
    </svg>
  `
    .trim()
    .replace(/"/g, "'")
    .replace(/>\s+</g, "><");

  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const RESUME_DATA: ResumeData = {
  name: "Shubham Yadav",
  summary:
    "I am a committed full-stack developer with a passion for delivering high-quality, impactful solutions. Leveraging a strong command of different technologies. I design and implement interactive front-end experiences and dependable back-end systems with great attention to detail.",
  socials: {
    github: "https://github.com/sooobhyadav",
    linkedin: "https://www.linkedin.com/in/sooobhyadav/",
    email: "shubham@phleebs.tech",
    portfolio: "http://shubham.phleebs.tech",
    phone: "+919004617992",
  },
  skills: {
    Frontend: [
      "JavaScript (ES5, ES6+)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GreenSock Animation Platform (GSAP)",
    ],
    Backend: ["Node.js", "Express", "MongoDB"],
    Design: ["Figma", "Canva"],
    "Cloud & Deployment": [
      "Cloudflare",
      "GitHub",
      "Netlify",
      "Vercel",
      "Hostinger",
      "Notion",
    ],
  },
  experience: [
    {
      role: "Software Developer Intern",
      company: "American Nexus Trading Inc.",
      period: "Feb 2025 - April 2025",
      highlights: [
        "Worked on filtering out data sets for staffing and recruitment related tasks from a web dashboard on the Turso platform using different SQL query statements",
        "Created AI explanation videos for different services expanding AI agent offerings for potential clients",
        "Created engaging AI based podcasts for different service offerings and published them using Spotify Creators platform",
        "Worked on curating different Gen AI platforms covering different use-cases to be used by our internal team for productivity and work performance boost",
      ],
    },
  ],
  projects: [
    {
      title: "Fiber Jobs",
      description:
        "Designed & developed a fully responsive job board application using the modern React 19 and Tailwind CSS technologies. Implemented full CRUD functionality for managing job listings, utilizing React Router for seamless navigation and JSON Server for a mock backend REST API deployed live using industry grade platform.",
      link: "https://fiber-jobs.now.sh",
      tech: ["React 19", "Tailwind CSS", "React Router", "JSON Server"],
      image: generateProjectImage("Fiber Jobs", "#3b82f6"),
    },
    {
      title: "Iulia Istrati",
      description:
        "Built a digital profile showcasing different programs and services for a Romanian mental health expert Iulia Istrati. The webapp features appointment booking, adaptive design, easy to navigate UX fulfilling all the client requirements. Built responsive UI using Bootstrap 5 and Sass.",
      link: "https://iulia-istrati.now.sh",
      tech: ["Bootstrap 5", "Sass", "JavaScript"],
      image: generateProjectImage("Iulia Istrati", "#a855f7"),
    },
    {
      title: "Quant",
      description:
        "Built a native Node.js REST API without external frameworks to handle CRUD operations for a product inventory. Implemented custom URL parsing and dynamic routing to process GET, POST, and PUT requests. Designed a file-based fixed layer using the module to ensure data integrity. Deployed using real world docker containers on GPU powered infrastructure.",
      link: "https://quant-sooobhyadav.hf.space",
      tech: ["Node.js", "Docker", "GPU-Infrastructure"],
      image: generateProjectImage("Quant", "#22c55e"),
    },
    {
      title: "Cafe de fuego",
      description:
        "An e-commerce landing page promoting a premium coffee product, 'The Maestro Blend.' Features high-intensity roast focus, marketing strategy with limited-time offers, and clear calls-to-action.",
      link: "http://cafe-de-feugo.pages.dev/",
      tech: ["Marketing Strategy", "Responsive UI", "Product Design"],
      image: generateProjectImage("Cafe de fuego", "#f97316"),
    },
  ],
  certifications: [
    {
      title: "Working with Version Control",
      issuer: "University of Leeds",
      link: "https://www.coursera.org/account/accomplishments/verify/XL6SP1FQPQCG",
      skills: ["Git", "GitHub", "Collaborative Software"],
    },
    {
      title: "APIs in Node.js: Write a RESTful API Backend Application",
      issuer: "Coursera / IBM",
      link: "https://www.coursera.org/account/accomplishments/verify/S1IDG9QILLI1",
      skills: ["RESTful API", "Node.js", "Backend Development"],
    },
    {
      title: "Gemini Certified Student",
      issuer: "Google",
      link: "https://edu.google.accredible.com/1d56e47c-958e-4cf5-9cdf-0321e9b1fb42",
      skills: ["Gen AI", "Prompting Techniques", "Gemini"],
    },
  ],
};
