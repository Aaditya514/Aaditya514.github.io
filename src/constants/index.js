import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  // typescript,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  express,
  mongodb,
  git,
  sql,
  postgres,
  java,
  pandas,
  python,
  cpp,
  meta,
  starbucks,
  tesla,
  shopify,
  Projectjob,
  Dashboard,
  notification,
  // carrent,
  // postman,
  // figma,
  // docker,
  // jobit,
  // tripguide,
  // threejs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Works",
  // },
  {
    id: "projects", // <--- new link
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "AI-Driven PERN Application Developer",
    icon: web,
  },
  {
    title: "Scalable Backend Engineer",
    icon: backend,
  },
  {
    title: "Data Analytics Enthusiast",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "CSS 3",
    icon: css,
  },
  // {
  //   name: "JWT",
  //   icon: jwt, // Add JWT logo to your icons
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express, // Make sure `express` icon is imported or added in your assets
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SQL",
    icon: sql, // Add an icon for SQL (e.g., MySQL or PostgreSQL)
  },
  // {
  //   name: "Postman",
  //   icon: postman, // Add Postman logo to your icons
  // },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Pandas",
    icon: pandas, // Add pandas logo
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp, // Add a C++ logo/icon
  },
];


const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI-Job Analyser",
    description:
      "An AI-powered platform built with React and Node.js that helps job seekers analyze job descriptions, detect workplace red flags, and receive personalized interview strategies. It features real-time insights using Google Gemini, a modern UI, and efficient data storage with PostgreSQL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "Google Gemini AI",
        color: "pink-text-gradient",
      },
    ],
    image: Projectjob,
    source_code_link: "https://github.com/Aaditya514/job-savvy-ai-guide",
  },
  {
    name: "Notification Service Backend",
    description:
      " A scalable backend notification system developed with Node.js and Express, this service efficiently manages real-time alerts across multiple platforms. It features RESTful API endpoints and leverages MongoDB for seamless and reliable data management.",
    tags: [
      {
        name: " nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: " redis",
        color: "pink-text-gradient",
      },
    ],
    image: notification,
    source_code_link: "https://github.com/Aaditya514/Notification-Service-Backend",
  },
  {
    name: "Data-Professional-Survey-Dashboard",
    description:
      "An interactive dashboard built with Power BI that visualizes data from a professional survey of the data industry. This project transforms complex survey results into clear, actionable insights with dynamic charts and graphs, enabling users to explore trends, compensation, and skills across the data profession.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "DAX",
        color: "green-text-gradient",
      },
      {
        name: " Data Visualization",
        color: "pink-text-gradient",
      },
    ],
    image: Dashboard,
    source_code_link: "https://github.com/Aaditya514/Data-Professional-Survey-Dashboard",
  },
];

export { services, technologies,experiences, testimonials, projects };
// 
