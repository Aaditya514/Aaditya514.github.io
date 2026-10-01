import {
  backend,
  creator,
  web,
  javascript,
  css,
  angular,
  tailwind,
  nodejs,
  express,
  mongodb,
  git,
  sql,
  postgres,
  java,
  python,
  cpp,
  docker,
  postman,
  typescript,
  notification,
  priora,
  automed,
} from "../assets";

export const resumeLink =
  "https://drive.google.com/file/d/1NiZY9weOFTHpWhMo-0x940Ltq6M8a9Nn/view?usp=sharing";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Enterprise Full-Stack Developer",
    icon: web,
  },
  {
    title: "Scalable Backend Engineer",
    icon: backend,
  },
  {
    title: "Distributed Systems & Cloud",
    icon: creator,
  },
];

export const portfolioStats = [
  { label: "Core Projects", value: "3", sub: "Production-Grade Systems" },
  { label: "DSA Problems Solved", value: "500+", sub: "LeetCode & GFG" },
  { label: "Enterprise Stack", value: "Spring Boot", sub: "Angular & PostgreSQL" },
  { label: "Async Pipelines", value: "BullMQ & Redis", sub: "Distributed Queues" },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
    category: "Frontend",
    level: "Advanced",
    description: "Strict typing & enterprise UI modeling",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Frontend",
    level: "Advanced",
    description: "ES6+, Async/Await & Event Loop",
  },
  {
    name: "Angular",
    icon: angular,
    category: "Frontend",
    level: "Advanced",
    description: "Enterprise SPAs, Signals, RxJS & Modular Architecture",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "Frontend",
    level: "Advanced",
    description: "Responsive utility-first styling",
  },
  {
    name: "CSS 3",
    icon: css,
    category: "Frontend",
    level: "Advanced",
    description: "Flexbox, Grid & Modern Animations",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "Backend",
    level: "Advanced",
    description: "Event-driven runtime & Microservices",
  },
  {
    name: "Express JS",
    icon: express,
    category: "Backend",
    level: "Advanced",
    description: "RESTful APIs & Middleware design",
  },
  {
    name: "PostgreSQL",
    icon: postgres,
    category: "Databases",
    level: "Advanced",
    description: "Relational modeling, indexing & ACID",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "Databases",
    level: "Intermediate",
    description: "NoSQL schemas & Aggregation pipelines",
  },
  {
    name: "SQL",
    icon: sql,
    category: "Databases",
    level: "Advanced",
    description: "Complex queries, joins & optimizations",
  },
  {
    name: "Java",
    icon: java,
    category: "Languages",
    level: "Advanced",
    description: "Spring Boot, JPA, OOP & Design Patterns",
  },
  {
    name: "C++",
    icon: cpp,
    category: "Languages",
    level: "Advanced",
    description: "Data Structures, Algorithms & STL",
  },
  {
    name: "Python",
    icon: python,
    category: "Languages",
    level: "Intermediate",
    description: "Scripting, Automation & Backend Services",
  },
  {
    name: "Docker",
    icon: docker,
    category: "Tools & DevOps",
    level: "Intermediate",
    description: "Containerization & Workload Orchestration",
  },
  {
    name: "Git",
    icon: git,
    category: "Tools & DevOps",
    level: "Advanced",
    description: "Version control & collaboration flows",
  },
  {
    name: "Postman",
    icon: postman,
    category: "Tools & DevOps",
    level: "Advanced",
    description: "API design, testing & documentation",
  },
];

const projects = [
  {
    name: "Priora — Task Prioritisation",
    category: "Full-Stack & Systems",
    description:
      "A dynamic task management system replacing static priority labels with real-time mathematical scoring based on deadlines, dependencies, and blockers.",
    highlights: [
      "Dynamic priority scoring based on deadlines & blockers",
      "Dependency tracking to identify delivery bottlenecks",
      "Interactive visual board with role-based access control",
    ],
    tags: [
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Security",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Aaditya514/priora",
    live_demo_link: "https://github.com/Aaditya514/priora",
  },
  {
    name: "Auto-Meds — E-Pharmacy",
    category: "Full-Stack & Systems",
    description:
      "A healthcare platform streamlining prescription verification workflows, automated maintenance medication refills, and pharmacy inventory management.",
    highlights: [
      "Automated recurring refills for maintenance medications",
      "Prescription verification & real-time inventory tracking",
      "Dual-portal access for patients and administrators",
    ],
    tags: [
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "JWT & Security",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Aaditya514/auto-meds",
    live_demo_link: "https://github.com/Aaditya514/auto-meds",
  },
  {
    name: "Notification Service",
    category: "Backend & Systems",
    description:
      "A distributed notification microservice handling asynchronous message dispatching across Email, SMS, and In-App with resilient background queues.",
    highlights: [
      "Multi-channel delivery across Email, SMS, and In-App",
      "Distributed BullMQ queues with automated retry policies",
      "Dead Letter Queue (DLQ) inspection & job replay engine",
    ],
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "BullMQ / Redis",
        color: "orange-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Aaditya514/Notification-Service",
    live_demo_link: "https://github.com/Aaditya514/Notification-Service",
  },
];

export const experiences = [
  {
    title: "Software Engineer — Infra & Release Team",
    company_name: "Intellect Design Arena Ltd.",
    location: "India",
    date: "Jun 2026 – Present",
    type: "Full-time",
    color: "#915eff",
    points: [
      "Working with Docker and Kubernetes in the Infrastructure and Release team to support containerized application workloads across environments.",
      "Performing Kubernetes pod management and workload troubleshooting, investigating pod failures, restarts, resource issues, and application-related errors.",
      "Troubleshooting Kubernetes workloads using pod logs, status, events, and resource information to identify and resolve runtime issues.",
    ],
    skills: ["Docker", "Kubernetes", "DevOps", "Pod Management", "Infrastructure"],
  },
  {
    title: "Full Stack Intern",
    company_name: "Steel Authority of India Limited (SAIL)",
    location: "Bokaro, India",
    date: "May 2024 – Jun 2024",
    type: "Internship",
    color: "#00cea8",
    points: [
      "Built a scalable e-commerce platform for Asha Lata using Django, JavaScript, Bootstrap, and SQLite, increasing site traffic by 50% within the first month.",
      "Integrated authentication and product management, optimized database queries, and improved UI/UX, increasing engagement by 30% and reducing load time by 20%.",
    ],
    skills: ["Django", "JavaScript", "Bootstrap", "SQLite", "UI/UX"],
  },
];

export { services, technologies, projects };
