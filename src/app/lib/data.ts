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
    title: "Project Alpha",
    description: "A full-stack social media application with real-time updates and a modern, responsive user interface. Built with the MERN stack and Socket.io.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    image: getImage("project-1"),
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform featuring product management, a shopping cart, and Stripe integration for payments. Focused on performance and scalability.",
    technologies: ["Next.js", "TypeScript", "Redux", "Node.js", "PostgreSQL", "Stripe API"],
    image: getImage("project-2"),
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "A travel booking SPA that allows users to search for flights and hotels, with an interactive map view. Leveraged third-party APIs for data.",
    technologies: ["Vue.js", "Vuex", "Node.js", "Firebase", "Leaflet.js", "Google Maps API"],
    image: getImage("project-3"),
    githubUrl: "https://github.com",
    liveUrl: "#",
  },
];

export const SKILLS = [
  { name: "JavaScript (ES6+)", proficiency: 95 },
  { name: "React & Next.js", proficiency: 90 },
  { name: "Node.js & Express", proficiency: 90 },
  { name: "MongoDB", proficiency: 85 },
  { name: "TypeScript", proficiency: 80 },
  { name: "HTML5 & CSS3", proficiency: 95 },
  { name: "GraphQL", proficiency: 75 },
  { name: "Docker", proficiency: 70 },
];

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Senior Software Engineer",
    company: "Tech Innovators Inc.",
    description: "Leading the development of a new fintech platform, focusing on scalability and security. Mentoring junior developers and driving architectural decisions.",
    achievements: [
      "Reduced API response times by 40% through performance optimization.",
      "Led the migration of a monolithic backend to a microservices architecture.",
      "Implemented a CI/CD pipeline, decreasing deployment time by 75%.",
    ],
  },
  {
    year: "2018 - 2021",
    role: "Software Engineer",
    company: "Creative Solutions LLC",
    description: "Developed and maintained several client-facing web applications using the MERN stack. Collaborated with designers and product managers to deliver high-quality features.",
    achievements: [
      "Shipped over 20 features for a major e-commerce client.",
      "Improved application test coverage from 60% to 95%.",
      "Contributed to a component library used across multiple projects.",
    ],
  },
  {
    year: "2016 - 2018",
    role: "Junior Developer",
    company: "Digital Start Co.",
    description: "Started my career building responsive websites and learning the fundamentals of full-stack development in a fast-paced startup environment.",
    achievements: [
       "Assisted in the launch of three new web products.",
       "Gained proficiency in React, Node.js, and agile methodologies.",
    ],
  },
];
