import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Sahil Mor - Full Stack Developer",
  author: "Sahil Mor",
  description:
    "Software Engineer based in Gohana, Haryana. I specialize in UI design, full stack web application development and maintenance.",
  lang: "en",
  siteLogo: "/pfp.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Services", href: "/services" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/sahilmor05" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/sahilmor/" },
    { text: "Github", href: "https://github.com/sahilmor" },
  ],
  socialImage: "/pfp.png",
  canonicalURL: "https://sahilmor.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Sahil Mor",
    specialty: "Full-Stack Developer | MERN Stack & Next.js",
    summary:
      "Final-year Computer Science student specializing in building high-performance web applications. I have hands-on experience developing scalable dashboards for 5,000+ clients and a passion for creating seamless, responsive user experiences.",
    email: "mor.sahil05.28@gmail.com",
  },
  experience: [
    {
      company: "Pronnel",
      position: "Member of Technical Staff - Intern",
      startDate: "June 2025",
      endDate: "Sep 2025",
      summary: [
        "Forged front-end architecture for a new customer dashboard using Angular.js and Bootstrap, leading to a 20% faster page load time for 5,000+ clients.",
        "Assisted in designing and building APIs using Angular's HTTP Client Module.",
        "Participated in code reviews, debugging sessions, and daily stand-ups, aligning with agile development practices.",
      ],
    },
    {
      company: "Geeta Technical Hub",
      position: "Web Intern",
      startDate: "Feb 2025",
      endDate: "May 2025",
      summary: [
        "Helped in developing and managing the official college website using Next.js and Tailwind CSS.",
        "Resolved daily bugs and client-side issues to ensure a smooth flow for web pages.",
        "Worked with Git and GitHub for version control and resolved client issues based on weekly reports.",
      ],
    },
    {
      company: "NAAI India",
      position: "Frontend Developer",
      startDate: "Oct 2024",
      endDate: "Jan 2025",
      summary: [
        "Developed and helped in building POS system.",
        "Learned new state management and debug skills by experts",
        "Worked with next js to provide a faster and smooth bugs free experince to the users",
      ]
    },
  ],
  projects: [
    {
      "name": "NomadX: AI-Powered Travel Planner (Gen-Z Focus)",
      "summary": "A full-stack, collaborative travel planning application built for budget adventurers. It features AI-powered trip generation,customized plans including optimal routes, accommodation, food, and over 30% off-beat locations.",
      "linkPreview": "https://x-nomad.vercel.app",
      "linkSource": "https://github.com/sahilmor/NomadX",
      "image": "/nx.png"
    },
        {
      name: "Trello-lite: Real-Time Kanban Board",
      summary: "Full-stack collaborative project management tool with the MERN stack. Features real-time updates using Socket.IO, drag-and-drop, and JWT authentication.",
      linkPreview: "#",
      linkSource: "https://github.com/sahilmor",
      image: "/tt.jpeg",
    },
    {
      name: "NHCC Website",
      summary: "Developed a responsive portfolio website for New Hindustan Construction Co. Optimized mobile usability and conversion rates by implementing fluid layouts and resolving critical UI issues.",
      linkPreview: "https://www.nhccworld.com",
      linkSource: "https://github.com/sahilmor/nhcc",
      image: "/nhcc.png",
    },
    {
      name: "Prime tv",
      summary: "Full-stack movie streaming platform using the MERN stack. Implemented protected routes with JWT and integrated external open APIs to stream movie and show data.",
      linkPreview: "https://prime-tv-two.vercel.app",
      linkSource: "https://github.com/sahilmor/Prime.tv",
      image: "/pt.png",
    },
  ],
  about: {
    description: `
      I'm a B.Tech Computer Science student at Geeta University, graduating in 2026. 
    My journey in tech has been driven by a passion for building, which led 
    me to become the CTO of my college's coding society.

      I have a strong foundation in Data Structures, Algorithms, and core CS 
    fundamentals like OOPS and DBMS. I thrive in agile environments, 
    participating in daily stand-ups and code reviews, and I'm eager 
    to bring my skills in both frontend and backend development to a 
    challenging full-time role.
    `,
    image: "/pfp.png",
  },
  services: [
    {
      title: "Web Application Development",
      description: "Building scalable, high-performance web applications using modern stacks like MERN and Next.js. I focus on creating responsive and intuitive user experiences.",
      image: "/wd.png", 
    },
    {
      title: "UI/UX Implementation",
      description: "Translating complex design requirements into pixel-perfect, interactive interfaces. I ensure cross-browser compatibility and mobile responsiveness.",
      image: "/ud.png", 
    },
    {
      title: "API Design & Integration",
      description: "Developing robust RESTful APIs and integrating third-party services. I focus on security, data validation, and efficient data handling.",
      image: "/ad.png", 
    },
    {
      title: "Website Optimization",
      description: "Auditing and improving website performance, SEO, and accessibility to ensure your site loads fast and reaches the widest possible audience.",
      image: "/wo.png", 
    },
  ],
};
