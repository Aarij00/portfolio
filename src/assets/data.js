import drumSenseImage from './images/drumsense.png';
import pulseLinkImage from './images/pulselink.png';
import lumiSphereImage from './images/lumisphere2.jpg';
import redactImage from './images/redact.jpg';
import rateFlixImage from './images/rateflix.png';
import portfolioImage from './images/portfolio2.png';

export const introduction = {
  part1: `I'm a Final Year Computer Science student at the University of Calgary, minoring in Data Science, with graduation anticipated in May 2025. I'm passionate about solving complex problems and creating impactful solutions at the intersection of software development, data engineering, and Human-Computer Interaction (HCI).`,
  
  part2: `I'm currently seeking entry-level opportunities that allow me to combine my software development and data engineering skills while continuing to explore innovative approaches to HCI. Feel free to explore my portfolio and let's connect to discuss how we can create something great together!`
};

export const projects = [
  {
    cover: redactImage,
    title: "Redact",
    description: " A modern web app designed to eliminate hiring bias by automatically redacting personally identifiable and potentially discriminatory information from job applications.",
    tech: ["React", "Axios", "Node.js", "Express", "MongoDB", "JWT", "Python", "Flask", "Selenium", "Langchain", "OpenAI"],
    github: "https://github.com/Aarij00/Redact",
  },
  {
    cover: rateFlixImage,
    title: "RateFlix",
    description: "A web app aggregating Netflix movie catalogs with IMDB ratings, powered by React, Clerk, GraphQL, Redis, and Express.",
    tech: ["React", "Axios", "Clerk", "Express", "Node.js", "Redis", "Docker", "EC2", "Apollo", "GraphQL", "PostgreSQL", "Prisma"],
    github: "https://github.com/Aarij00/RateFlix",
  },
  {
    cover: portfolioImage,
    title: "Personal Website",
    description: "Built with React, Tailwind, and Vite, featuring a responsive design and smooth animations. Deployed on Render with continuous integration from GitHub.",
    tech: ["React", "Tailwind", "Vite", "JavaScript", "Render"],
    github: "https://github.com/Aarij00/portfolio",
  },
  {
    cover: lumiSphereImage,
    title: "LumiSphere",
    description: "A smart LED lamp that uses an Arduino Leonardo to control the brightness of a light bulb based on the ambient light level.",
    tech: ["Arduino Leonardo", "Arduino IDE", "C", "Tinkercad"],
    github: "https://aarij00.github.io/aarij-portfolio/project.html?project=1",
  },
  {
    cover: drumSenseImage,
    title: "DrumSense",
    description: "Portable, 3D printed drumsticks designed for convenience, allowing you to play drums anywhere, whether at home or on the go.",
    tech: ["Arduino Leonardo", "Arduino IDE", "C", "MIDI", "3D Printing", "IMU (MPU6050)"],
    github: "https://aarij00.github.io/aarij-portfolio/project.html?project=2",
  },
  {
    cover: pulseLinkImage,
    title: "PulseLink",
    description: "3D-printed bracelets that provide haptic feedback through a vibrating motor, fostering a sense of physical connection across distances.",
    tech: ["ESP 32", "ESP-NOW", "Arduino IDE", "C", "3D Printing", "Fusion 360"],
    github: "https://aarij00.github.io/aarij-portfolio/project.html?project=4",
  },
  
];
