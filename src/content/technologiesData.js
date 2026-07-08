import {
  Bot,
  Briefcase,
  Building2,
  ChartNoAxesCombined,
  Cloud,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  Lock,
  MonitorSmartphone,
  Palette,
  PenTool,
  Rocket,
  Search,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import {
  SiAndroid,
  SiApple,
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSelenium,
  SiSentry,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import {
  FaCss3Alt,
  FaSlack,
} from "react-icons/fa6";



/* =========================================================
   HERO
========================================================= */

export const technologiesHero = {
  eyebrow: "Technologies",

  title: "Technologies We Use to",

  highlight: "Build Scalable Solutions",

  description:
    "We combine modern engineering practices, cloud platforms, intelligent automation and thoughtful design technologies to build secure, scalable and future-ready digital products.",

  primaryCTA: {
    label: "Explore Our Capabilities",
    to: "#technology-stack",
  },

  secondaryCTA: {
    label: "Talk to Our Experts",
    to: "/contact",
  },

  images: {
    code:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=90",

    mobile:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=700&q=85",

    dashboard:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=85",
  },
};


/* =========================================================
   HERO FEATURES
========================================================= */

export const technologyHeroFeatures = [
  {
    icon: Sparkles,
    title: "Modern & Future-Ready",
    text: "Latest frameworks and platforms",
  },

  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    text: "Built with security, quality and compliance",
  },

  {
    icon: Cloud,
    title: "Scalable by Design",
    text: "Cloud-native, modular and performance-driven",
  },

  {
    icon: Bot,
    title: "Innovation at Core",
    text: "AI, automation and data driving outcomes",
  },
];


/* =========================================================
   TECHNOLOGY STACK
========================================================= */

export const stackGroups = [
  {
    title: "Frontend",

    icon: MonitorSmartphone,

    items: [
      {
        name: "HTML5",
        logo: SiHtml5,
      },
      {
        name: "CSS3",
        logo: FaCss3Alt,
      },
      {
        name: "JavaScript",
        logo: SiJavascript,
      },
      {
        name: "TypeScript",
        logo: SiTypescript,
      },
      {
        name: "React",
        logo: SiReact,
      },
      {
        name: "Next.js",
        logo: SiNextdotjs,
      },
    ],
  },


  {
    title: "Backend",

    icon: Server,

    items: [
      {
        name: "Node.js",
        logo: SiNodedotjs,
      },
      {
        name: "PHP",
        logo: SiPhp,
      },
      {
        name: "Laravel",
        logo: SiLaravel,
      },
      {
        name: "Python",
        logo: SiPython,
      },
    ],
  },


  {
    title: "Mobile",

    icon: Smartphone,

    items: [
      {
        name: "Flutter",
        logo: SiFlutter,
      },
      {
        name: "React Native",
        logo: SiReact,
      },
      {
        name: "Android",
        logo: SiAndroid,
      },
      {
        name: "iOS",
        logo: SiApple,
      },
    ],
  },


  {
    title: "Databases",

    icon: Database,

    items: [
      {
        name: "MySQL",
        logo: SiMysql,
      },
      {
        name: "PostgreSQL",
        logo: SiPostgresql,
      },
      {
        name: "MongoDB",
        logo: SiMongodb,
      },
      {
        name: "Firebase",
        logo: SiFirebase,
      },
    ],
  },


  {
    title: "Cloud & DevOps",

    icon: Cloud,

    items: [
      {
        name: "AWS",
        logo: Cloud,
      },
      {
        name: "Docker",
        logo: SiDocker,
      },
      {
        name: "Git",
        logo: SiGit,
      },
      {
        name: "CI/CD",
        logo: GitBranch,
      },
    ],
  },


  {
    title: "UI/UX & Product Tools",

    icon: Palette,

    items: [
      {
        name: "Design Systems",
        logo: Palette,
      },
      {
        name: "Analytics",
        logo: ChartNoAxesCombined,
      },
      {
        name: "Prototyping",
        logo: PenTool,
      },
      {
        name: "User Research",
        logo: Search,
      },
    ],
  },


  {
    title: "AI & Data Stack",

    icon: Bot,

    items: [
      {
        name: "Automation",
        logo: Workflow,
      },
      {
        name: "Machine Learning",
        logo: Bot,
      },
      {
        name: "Data Analytics",
        logo: ChartNoAxesCombined,
      },
      {
        name: "LLM & GenAI",
        logo: Sparkles,
      },
    ],
  },


  {
    title: "Architecture Software Tools",

    icon: Building2,

    items: [
      {
        name: "AutoCAD",
        logo: PenTool,
      },
      {
        name: "SketchUp",
        logo: Layers3,
      },
      {
        name: "Revit",
        logo: Building2,
      },
      {
        name: "3ds Max",
        logo: Layers3,
      },
      {
        name: "Lumion",
        logo: Sparkles,
      },
    ],
  },
];


/* =========================================================
   ARCHITECTURE APPROACH
========================================================= */

export const architectureSteps = [
  {
    title: "Discover & Requirements",
    icon: Users,
  },

  {
    title: "Design & Architecture",
    icon: Layers3,
  },

  {
    title: "Develop & Integrate",
    icon: Code2,
  },

  {
    title: "Test & Validate",
    icon: ShieldCheck,
  },

  {
    title: "Deploy & Release",
    icon: Rocket,
  },

  {
    title: "Monitor & Optimize",
    icon: Settings,
  },
];


/* =========================================================
   ARCHITECTURE FLOW
========================================================= */

export const architectureFlow = [
  {
    title: "Users",
    icon: Users,
  },

  {
    title: "Web / Mobile",
    icon: MonitorSmartphone,
  },

  {
    title: "API Gateway",
    icon: Code2,
  },

  {
    title: "Microservices",
    icon: Layers3,
  },

  {
    title: "Data Layer",
    icon: Database,
  },
];


/* =========================================================
   SUPPORTING ARCHITECTURE
========================================================= */

export const architectureSupportingBlocks = [
  {
    title: "Cloud CDN",

    icon: Cloud,

    description:
      "Fast delivery, intelligent caching and global performance optimization.",
  },

  {
    title: "CI/CD Pipeline",

    icon: GitBranch,

    description:
      "Automated build, testing and deployment pipelines for reliable releases.",
  },
];


/* =========================================================
   QUALITY
========================================================= */

export const qualityCards = [
  {
    title: "Secure by Design",

    text:
      "Security best practices, code scanning, role-based access and data protection.",

    icon: Lock,
  },

  {
    title: "Scalable & Resilient",

    text:
      "Cloud-native architecture, modular services and high availability patterns.",

    icon: Cloud,
  },

  {
    title: "High Performance",

    text:
      "Optimized code, caching, monitoring and performance-focused engineering.",

    icon: Gauge,
  },

  {
    title: "Maintainable Code",

    text:
      "Clean code, reusable modules, documentation and continuous improvement.",

    icon: Code2,
  },
];


/* =========================================================
   STACK CHOICE POINTS
========================================================= */

export const stackChoicePoints = [
  "Business goals & long-term vision",

  "Performance, scalability & reliability needs",

  "Security, compliance & data considerations",

  "Team expertise & ecosystem maturity",

  "Total cost of ownership & future adaptability",
];


/* =========================================================
   PROJECT LIFECYCLE TOOLS
========================================================= */

export const lifecycleTools = [
  {
    title: "Plan & Manage",

    icon: Briefcase,

    items: [
      {
        name: "Jira",
        logo: SiJira,
      },
      {
        name: "Notion",
        logo: SiNotion,
      },
      {
        name: "Project Planning",
        logo: Briefcase,
      },
    ],
  },


  {
    title: "Design & Prototype",

    icon: Palette,

    items: [
      {
        name: "Design Systems",
        logo: Palette,
      },
      {
        name: "Prototyping",
        logo: PenTool,
      },
      {
        name: "User Research",
        logo: Search,
      },
    ],
  },


  {
    title: "Develop & Code",

    icon: Code2,

    items: [
      {
        name: "VS Code",
        logo: VscCode,
      },
      {
        name: "GitHub",
        logo: SiGithub,
      },
      {
        name: "GitLab",
        logo: SiGitlab,
      },
    ],
  },


  {
    title: "Test & QA",

    icon: ShieldCheck,

    items: [
      {
        name: "Selenium",
        logo: SiSelenium,
      },
      {
        name: "Postman",
        logo: SiPostman,
      },
      {
        name: "Jest",
        logo: SiJest,
      },
    ],
  },


  {
    title: "Deploy & DevOps",

    icon: Cloud,

    items: [
      {
        name: "Docker",
        logo: SiDocker,
      },
      {
        name: "Kubernetes",
        logo: SiKubernetes,
      },
      {
        name: "Vercel",
        logo: SiVercel,
      },
    ],
  },


  {
    title: "Monitor & Support",

    icon: LineChart,

    items: [
      {
        name: "Sentry",
        logo: SiSentry,
      },
      {
        name: "Slack",
        logo: FaSlack,
      },
      {
        name: "Monitoring",
        logo: LineChart,
      },
    ],
  },
];


/* =========================================================
   STATS
========================================================= */

export const technologiesStats = [
  {
    number: "350+",
    label: "Projects Completed",
    icon: Briefcase,
  },

  {
    number: "250+",
    label: "Happy Clients",
    icon: Users,
  },

  {
    number: "8+",
    label: "Years Experience",
    icon: Rocket,
  },

  {
    number: "60+",
    label: "Expert Professionals",
    icon: Code2,
  },

  {
    number: "98%",
    label: "Client Satisfaction",
    icon: ShieldCheck,
  },
];


/* =========================================================
   CTA
========================================================= */

export const technologiesCTA = {
  title: "Powering Your Next Product with the Right Stack",

  description:
    "We pair modern engineering, cloud architecture and thoughtful design to build reliable and scalable solutions.",

  primaryCTA: {
    label: "Talk to Our Team",
    to: "/contact",
  },

  secondaryCTA: {
    label: "See Case Studies",
    to: "/portfolio",
  },
};