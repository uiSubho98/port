import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

function getImage(id: string): ImagePlaceholder {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id ${id} not found`);
  }
  return image;
}

export const PROJECTS = [
  {
    title: "Rudraganga Talk To Customer",
    description: "Astrology consultation platform clone with ~100+ daily active users and 1000+ downloads. Full-featured mobile app connecting customers with astrologers for live consultations, chat, and payment services.",
    technologies: ["Flutter", "Node.js", "Express", "MongoDB", "Socket.io", "Agora", "AWS", "Razorpay"],
    image: getImage("project-1"),
    githubUrl: "https://github.com",
    liveUrl: "https://play.google.com/store/apps/details?id=com.rudraganga.customer&hl=en_IN",
    metrics: ["100+ daily active users", "1000+ downloads", "Real-time chat & video calls"]
  },
  {
    title: "Rudraganga For Astrologers",
    description: "Astrologer-facing companion app to manage consultations, appointments, and earnings. Part of the Rudraganga ecosystem serving 50+ verified astrologers with scheduling and payment management.",
    technologies: ["Flutter", "Node.js", "Express", "MongoDB", "Socket.io", "Agora", "AWS", "Push Notifications"],
    image: getImage("project-2"),
    githubUrl: "https://github.com",
    liveUrl: "https://play.google.com/store/apps/details?id=com.rg.astrologer&hl=en_IN",
    metrics: ["50+ verified astrologers", "Scheduling system", "Earnings dashboard"]
  },
  {
    title: "ReachFinder.io",
    description: "Email marketing SaaS platform with 4M+ contact database for lead generation. Built for sales teams with advanced filtering, campaign management, and analytics dashboard. Uses AWS Lambda for serverless functions and EC2 for core services.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AWS Lambda", "EC2", "S3", "SendGrid", "Redis"],
    image: getImage("project-3"),
    githubUrl: "https://github.com",
    liveUrl: "https://reachfinder.io/",
    metrics: ["4M+ contact database", "AWS serverless architecture", "Real-time analytics"]
  },
  {
    title: "Easy Toto Operator",
    description: "Lottery and cab booking platform with 5000+ active users in West Bengal. React Native mobile app for customers with MERN backend for operators. Features real-time booking, payment integration, and admin dashboard.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Redux", "WebSocket", "VPS", "Nginx"],
    image: getImage("project-2"),
    githubUrl: "https://github.com",
    liveUrl: "https://play.google.com/store/apps/details?id=com.etodevifi&hl=en_IN",
    metrics: ["5000+ active users", "Real-time tracking", "Payment gateway integration"]
  },
];

export const SKILLS = [
  { name: "JavaScript (ES6+)", proficiency: 95 },
  { name: "React & React Native", proficiency: 90 },
  { name: "Node.js & Express", proficiency: 90 },
  { name: "MongoDB", proficiency: 85 },
  { name: "Flutter", proficiency: 80 },
  { name: "AWS (EC2, Lambda, S3)", proficiency: 75 },
  { name: "Socket.io & Real-time", proficiency: 85 },
  { name: "Docker & Nginx", proficiency: 70 },
];

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Senior Software Developer",
    company: "CommentSold",
    description: "Developing and deploying full-stack applications for various clients with focus on scalability, real-time features, and production deployments.",
    achievements: [
      "Built 4 production applications with 10K+ combined users",
      "Implemented real-time features (chat, notifications) using Socket.io",
      "Deployed applications on AWS, VPS with Nginx reverse proxy",
      "Optimized MongoDB queries improving response times by 60%",
    ],
  },
  {
    year: "2024 - 2025",
    role: "Software Developer",
    company: "NLB Services",
    description: "Worked with Delta Airlines implementing full-stack solutions from concept to deployment.",
    achievements: [
      "Developed RESTful APIs handling 10K+ daily requests",
      "Created responsive mobile apps using React Native and Flutter",
      "Integrated third-party APIs (payment gateways, SMS, email)",
      "Set up CI/CD pipelines for automated deployments",
    ],
  },
  {
    year: "2020 - 2024",
    role: "Software Developer",
    company: "Softsensor.ai",
    description: "Started career building web applications and worked on Healthcare industry.",
    achievements: [
      "Built 10+ client websites and web applications",
      "Learned MERN stack fundamentals and best practices",
      "Gained experience in responsive design and cross-browser compatibility",
    ],
  },
];