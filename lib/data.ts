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
