import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Parth Parmar",
  initials: "",
  
  location: "Ahmedabad, Gujarat",
  locationLink: "",
  description:
    "Web developer on a mission to make the internet faster, cleaner and a little more fun.",
  summary1:
    "I started coding just 5 months ago and for the last 3 months I’ve been taking it seriously and putting in consistent effort every single day.",
  summary2:
    "Initially, coding wasn’t my first plan but once I started, I completely fell in love with building things and solving problems. Now I’m fully committed to becoming a great programmer.",
  summary3:
    "I enjoy both the creative side of frontend and the problem-solving side of backend, which is why I’m aiming to grow as a fullstack developer.",
    avatarUrl: "/MyPic.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "OOPs",
    "DBMS",
    "DSA",
    "Git",
    "POSTMAN",
    "Vercel",
    "Python",
    "Java",
    "C",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "parthparmar8905@gmail.com",
    tel: "+91-8905382636",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ParthParmar88",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parth-parmar-01668b345",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Parthstwt_?t=uCZt7XGyZFEfqPlEt26CMw&s=09",
        icon: Icons.x,

        navbar: true,
      },
    
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Government Engineering College, Gandhinagar",
      degree: "Bachelor of Engineering in Information Technology",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Drawly – Collaborative Drawing App ( In Progress ) ",
      href: "",
      dates: "August 2025 -Current",
      active: true,
      description:
        "Developing real-time collaborative drawing application supporting both solo and multi-user drawing modes. Built with Turborepo monorepo setup using Next.js.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Turborepo",
      ],
      links: [
        {
          type: "In Progress",
          href: "",
          icon: ""
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "CareerGPT – AI Powered Career Coach",
      href: "https://career-gpt-three.vercel.app/",
      dates: "July 2025 – August 2025",
      active: true,
      description:
        "Built an AI-powered web-site providing personalized industry insights, Interview prep and cover letter generation.",
      technologies: [
        "Next.js",
        "Javascript",
        "Prisma",
        "TailwindCSS",
        "Clerk",
        "Gemini AI",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://career-gpt-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ParthParmar88/CareerGPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CareerGPT.png",
      video: "",
    },
    {
      title: "Investo – Full-Stack Stock Market Platform ",
      href: "",
      dates: "July 2025 – August 2025",
      active: true,
      description:
        "Developed a full-stack trading platform inspired by Zerodha, featuring user authentication, stock tracking, and portfolio management",
      technologies: [
        "React.js",
        "Javascript",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Material UI",
      ],
      links: [
        {
          type: "soon",
          href: "",
          icon: "",
        },
        
      ],
      image: "/Investo.png",
      video: "",
    },
   
  ],
  
} as const;
