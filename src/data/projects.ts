import type { Project } from "./types";
import bugSnipperDemoVideo from "../assets/projects-bugsnipper.mp4";
import hotpotDemoVideo from "../assets/projects-hotpot.mp4";
import isItAIDemoVideo from "../assets/projects-isitai.mp4";

export const projects: Project[] = [
  {
    id: "project-five",
    name: "Bug Snipper",
    description:
      "A browser extension that lets anonymous visitors screenshot a region of an organization's website and submit it as a bug report. A dashboard is also built-in and allows the organization to then manage these reports.",
    tags: ["TypeScript", "React", "Tailwind CSS", "Express", "Supabase", "WXT"],
    link: "https://github.com/nsmangat/Bug-Snipper",
    video: bugSnipperDemoVideo,
  },
  {
    id: "project-four",
    name: "IsItAI",
    description:
      "An interactive quiz-based web app tests users to identify if an image is real or AI-generated for the purpose of educating them on common signs of AI-generated images to teach about scam prevention.",
    tags: [
      "Python",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "FastAPI",
      "Supabase",
      "Google Gemini Vision",
      "Pollinations.ai",
    ],
    link: "https://github.com/nsmangat/IsItAI",
    video: isItAIDemoVideo,
  },
  {
    id: "project-three",
    name: "HotPot",
    description:
      "A pothole tracking mobile app that lets users report pothole locations. The reporting was gamified to encourage reports and provides data visualizations to show users their contributions.  This project was developed as part of my fourth-year capstone project, where we placed second place at the capstone symposium.",
    tags: [
      "JavaScript",
      "React Native",
      "Express",
      "PostgreSQL",
      "Flask",
      "Google Gemini",
      "Firebase",
      "Selenium",
      "Pandas",
      "Matplotlib",
    ],
    link: "https://github.com/nsmangat/HotPot-Capstone-Project",
    video: hotpotDemoVideo,
  },
  {
    id: "project-two",
    name: "Price Scraper",
    description: "A web app that allows users to track Amazon product prices.",
    tags: [
      "JavaScript",
      "Python",
      "React",
      "Express",
      "MongoDB",
      "Flask",
      "Beautiful Soup",
    ],
    link: "https://github.com/nsmangat/Price-Scraper",
    // image: '/screenshots/project-three.png',
  },
  {
    id: "project-one",
    name: "EARN Banking System",
    description:
      "A desktop app to simulate a banking interface to teach the basics of personal banking.",
    tags: ["C++", "QT", "MySQL", "Windows Sockets"],
    link: "https://github.com/nsmangat/nsmangat-COMP72070-Section1-Group3-EARNBankingSystem",
    // image: '/screenshots/project-three.png',
  },
];
