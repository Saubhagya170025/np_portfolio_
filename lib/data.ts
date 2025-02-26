import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiTailwindcss,
  SiDjango,
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiTelegram,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IconType } from "react-icons";
import { text } from "stream/consumers";
import { Anchor } from "lucide-react";
import { log } from "console";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiPython,
    text: "Python",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiDjango,
    text: "Django",
  },
  {
    icon: BiLogoPostgresql,
    text: "PostgreSQL",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    text: "Jenkins",
  },
  {
    text: "aws",
  },
  {
    text: "Ansible",
  },
  {
    text: "Gitlab",
  },
];

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: "Forked and Found",
    description:
      "Developed a multi-functional web platform that suggests recipes based on user-inputted ingredients, reducing food wastage and promoting sustainable living.Integrated a food donation feature, allowing users to contribute surplus food to the needy through nearby food banks and charitable organizations",
    link: "https://github.com/Saubhagya170025",
    tags: ["JavaScript", "Firebase", "Tailwind", "Maps APIs"],
  },
  {
    title: "Mentality",
    description:
      "Developed a real-time mental health assessment platform that analyzes user inputs to predict potential mental health issues. Designed an interactive questionnaire and real-time analytics dashboard to offer personalized recommendations for mental well-being. Built using Python (Flask), TensorFlow for ML predictions, and a React-based frontend for a user-friendly experience",
    link: "https://github.com/Saubhagya170025",
    tags: ["JavaScript", "Firebase", "Tailwind", "Flask", "Pyhton", "TensorFlow"],
  },
  {
    title: "URL- Shortner",
    description:
      "Developed a high-performance URL shortening service using Go (Golang) with efficient routing and database management.Implemented URL hashing and storage using a key-value database to ensure fast and reliable lookups",
    link: "https://github.com/Saubhagya170025",
    tags: ["Go", "Gorilla Mux", "Docker"],
  },
  {
    title: "Mastered CRUD APIs in Go-Lang",
    description:
      "Developed a RESTful CRUD API in Go (Golang) for managing and storing movie information efficiently.Implemented endpoints for creating, reading, updating, and deleting movie records using Gorilla Mux for routing.",
    link: "https://github.com/Saubhagya170025",
    tags: ["Go", "Gorilla Mux"],
  },
  {
    title: "CI/CD pipeline with Jenkins",
    description:
      " Created a CI/CD pipeline of an app through Jenkins that automates CI/CD process.User makes changes on GitHub repository and commits the changes, which automatically triggers Jenkins build and changes are deployed without any error to server.",
    link: "https://github.com/Saubhagya170025",
    tags: ["Jenkins", "Docker", "GitHub", "AWS"],
  },
  {
    title: "Real Estate Valuation",
    description:
      "A Machine Learning model for predicting house prices based on real estate data. This project analyzes various features of properties to estimate their market value, offering insights for buyers, sellers, and investors.",
    link: "https://github.com/Saubhagya170025",
    tags: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn"],
  },
  {
    title: "Heart Patient Analyzer",
    description:
      "This project is a machine learning-based heart disease predictor. The model takes in several health features such as age, cholesterol level, blood sugar level, blood pressure, and other key indicators, and predicts whether a person is likely to be diagnosed with heart disease.",
    link: "https://github.com/Saubhagya170025",
    tags: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn", "Streamlit"],
  },
  
];

export interface Social {
  name: string;
  link: string;
  icon: IconType;
}

export const socials: Social[] = [
  {
    name: "Twitter",
    link: "https://x.com/SaubhagyaS28141",
    icon: SiTwitter,
  },
  {
    name: "GitHub",
    link: "https://github.com/Saubhagya170025",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/saubhagya-srivastava-5a7a49263/",
    icon: SiLinkedin,
  },
  {
    name: "Telegram",
    link: "#",
    icon: SiTelegram,
  },
];

//     company: "Catoff Gaming",
//     logo: "/catoff.png",
//     position: "Backend Developer",
//     description:
//       "Building backend services for Catoff Gaming, a gaming platform. Technologies used: Nest.js, Typescript, Cron, Redis, Queue, Solana Actions, Next.js.",
//     years: "Oct, 2024 - Present",
//   },
//   {
//     company: "Innogeeks",
//     logo: "/innogeeks.jpg",
//     position: "Core Team | Blockchain Lead",
//     description:
//       "Managing and leading the blockchain division, organizing workshops, and conducting hackathons to promote blockchain technology.",
//     years: "Oct, 2024 - Present",
//   },
//   {
//     company: "Superteam",
//     logo: "/superteam.jpg",
//     position: "Member",
//     description:
//       "Building web3 based startups, and contributing to Solana Ecosystem.",
//     years: "Oct, 2024 - Present",
//   },
//   {
//     company: "TimeOnSolana",
//     logo: "/timeonsolana.jpg",
//     position: "Backend Developer",
//     description:
//       "Fixed authentication and authorization issues with twitter and fixed other bugs in platform.",
//     years: "June, 2024 - July, 2024",
//   },
//   {
//     company: "Superteam",
//     logo: "/superteam.jpg",
//     position: "Contributor",
//     description:
//       "Contributed to OSS Projects under Superteam. Helping me develop my web3 based startups.",
//     years: "June, 2024 - Oct, 2024",
//   },
//   {
//     company: "Freelance",
//     logo: "/skeleton.jpg",
//     position: "Blockchain Developer",
//     description:
//       "Worked on Liquidity Pool, DEX utilizing UniswapV2 on EVM based L2 blockchain.",
//     years: "May, 2024 - June, 2024",
//   },
//   {
//     company: "FOSSCU",
//     logo: "/fosscu.png",
//     position: "Core Member",
//     description:
//       "Contributing and Maintaining Open Source Projects under FOSSCU, a student-run community.",
//     years: "Nov, 2023 - Present",
//   },
//   {
//     company: "Freelance",
//     logo: "/skeleton.jpg",
//     position: "Python Developer",
//     description:
//       "Engineered python based web scraper bypassing Cloudflare bot protection, while streamlining deployment with Docker and earning 5-star reviews.",
//     years: "May, 2023 - June, 2024",
//     link: "https://www.upwork.com/freelancers/~015e68d4915ac74f75?mp_source=share",
//   },
//   {
//     company: "Innogeeks",
//     logo: "/innogeeks.jpg",
//     position: "ML Coordinator",
//     description:
//       "Led the ML division to increase membership and participation, conducted numerous data science and machine learning training sessions, and fostered peer-to-peer learning among members.",
//     years: "Dec, 2022 - Oct, 2024",
//   },
//   {
//     company: "KIET",
//     logo: "/kiet.png",
//     position: "Student",
//     description:
//       "Pursuing Computer Science Engineering degree from KIET Group of Institutions, Ghaziabad.",
//     years: "Nov, 2022 - July, 2026",
//   },
// ];

export const aboutYou = {
  name: "Saubhagya Srivastava",
  description:
    "I am a backend developer with strong skills in creating APIs and secure servers. Also have good touch with frontend. I have also practiced my hands on DevOps and mastering cloud to create automated and scalable pipelines.",
  yearsOfExperience: "2+ years",
  location: "Delhi, India",
  email: "saubhagya1520@gmail.com",
  twitter: "SaubhagyaS28141",
};

export const logoText = "@SS";

export const marketingHeadlines = {
  mainHeadline: "Hi There 👋",
  subHeadline: "Living on Clouds ☁️",
};

export const websiteMetadata = {
  title: "Saubhgya | Developer",
  description: "👋 Hello, Saubhagya here. Welcome to my portfolio.",
  url: "#",
  image_url: "#",
  logo_url: "#",
  twitterSite: "#",
  keywords: [
    "Saubhagya ",
    "Developer",
    "DevOps",
    "Python",
    "KIET",
  ],
};
