import {
  LayoutDashboard,
  ShieldCheck,
  Star,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react";


/* =========================================================
   HERO
========================================================= */

export const portfolioHero = {
  eyebrow: "Our Work",

  title: "Our Portfolio",

  description:
    "Impactful software, AI solutions and architectural designs built to solve real problems and create measurable results.",

  highlights: [
    {
      icon: TrendingUp,
      title: "Business Focused",
      text: "Solutions that drive growth",
    },
    {
      icon: ShieldCheck,
      title: "Innovative & Scalable",
      text: "Built for today, ready for tomorrow",
    },
    {
      icon: Star,
      title: "Design Excellence",
      text: "Great experiences, every time",
    },
  ],

  primaryCTA: {
    label: "Explore Case Studies",
    to: "#case-studies",
  },

  secondaryCTA: {
    label: "Book a Consultation",
    to: "/contact",
  },

  images: {
    architecture:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90",

    dashboard:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=90",

    mobile:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=700&q=85",

    ai:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=85",
  },
};


/* =========================================================
   FILTERS
========================================================= */

export const portfolioFilters = [
  "All Projects",
  "Software Products",
  "Web & Mobile Apps",
  "AI Automation",
  "Architecture",
  "Interior Design",
];


/* =========================================================
   FEATURED CASE STUDIES
========================================================= */

export const featuredCases = [
  {
    category: "SaaS Platform",

    title: "ERP Dashboard Platform",

    description:
      "A comprehensive ERP solution that streamlined operations and improved decision-making with real-time analytics.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",

    stats: [
      {
        value: "45%",
        label: "Process Efficiency",
      },
      {
        value: "32%",
        label: "Cost Reduction",
      },
      {
        value: "2.8x",
        label: "Faster Reporting",
      },
    ],
  },

  {
    category: "Mobile Banking App",

    title: "Nexa Mobile Banking",

    description:
      "Secure, intuitive mobile banking experience with smart features and AI-driven insights.",

    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",

    stats: [
      {
        value: "60%",
        label: "User Engagement",
      },
      {
        value: "35%",
        label: "Transactions",
      },
      {
        value: "4.9★",
        label: "App Store Rating",
      },
    ],
  },

  {
    category: "Residential Architecture",

    title: "Modern Villa Residence",

    description:
      "A contemporary villa that blends aesthetics with functionality and sustainable design principles.",

    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",

    stats: [
      {
        value: "6,200 sq.ft.",
        label: "Built-up Area",
      },
      {
        value: "4 BHK",
        label: "Configuration",
      },
      {
        value: "9 Months",
        label: "Project Duration",
      },
    ],
  },
];


/* =========================================================
   PROJECTS
========================================================= */

export const portfolioProjects = [
  {
    category: "SaaS Product",
    title: "Analytics Platform",
    description:
      "Advanced analytics & dashboards for data-driven decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },

  {
    category: "Web Application",
    title: "E-commerce Admin",
    description:
      "Complete admin panel to manage products, orders and users.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  },

  {
    category: "AI Automation",
    title: "AI Automation Dashboard",
    description:
      "Automate workflows and boost productivity with AI.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
  },

  {
    category: "Mobile App",
    title: "Health & Fitness App",
    description:
      "Track workouts, nutrition and health with smart insights.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85",
  },

  {
    category: "Cloud Solution",
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud architecture for high availability and performance.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85",
  },

  {
    category: "Corporate Architecture",
    title: "Corporate Office",
    description:
      "Modern workspace designed for productivity and collaboration.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },

  {
    category: "Retail Architecture",
    title: "Retail Showroom",
    description:
      "Premium retail space design that enhances customer experience.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
  },

  {
    category: "Interior Design",
    title: "Luxury Apartment",
    description:
      "Elegant interiors with perfect balance of comfort and style.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
];


/* =========================================================
   STATS
========================================================= */

export const portfolioStats = [
  {
    number: "250+",
    label: "Projects Delivered",
    icon: LayoutDashboard,
  },
  {
    number: "98%",
    label: "On-time Delivery",
    icon: ShieldCheck,
  },
  {
    number: "40%",
    label: "Avg. Efficiency Gain",
    icon: TrendingUp,
  },
  {
    number: "60%",
    label: "Automation Time Saved",
    icon: Timer,
  },
  {
    number: "4.9/5",
    label: "Avg. Client Rating",
    icon: Star,
  },
  {
    number: "30+",
    label: "Industries Served",
    icon: Users,
  },
];


/* =========================================================
   TESTIMONIALS
========================================================= */

export const portfolioTestimonials = [
  {
    quote:
      "Vedixa transformed our vision into a powerful platform. Their team is professional, responsive and truly invested in our success.",

    name: "Sarah Johnson",

    role: "CEO, NexaFin",
  },

  {
    quote:
      "The AI automation solution they built saved us hundreds of hours every month. Exceptional work and great support.",

    name: "Michael Brown",

    role: "COO, LogiSmart",
  },

  {
    quote:
      "Their architectural design exceeded our expectations. The attention to detail and creativity is unmatched.",

    name: "Priya Mehta",

    role: "Director, Urban Space",
  },
];


/* =========================================================
   TRANSFORMATION
========================================================= */

export const transformationSection = {
  highlights: [
    "Understand client goals & challenges",
    "Design tailored solutions",
    "Agile development & execution",
    "Test, optimize & deliver",
    "Ongoing support & growth partnership",
  ],

  outcomes: [
    "45% increase in operational efficiency",
    "60% faster decision-making",
    "35% reduction in manual work",
    "Higher accuracy & data visibility",
    "Scalable for future growth",
  ],

  before: {
    label: "Before",

    description:
      "Outdated workflow, manual processes and limited visibility across operations.",

    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
  },

  after: {
    label: "After",

    description:
      "Automated workflows, real-time insights and streamlined operations driving growth.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
};


/* =========================================================
   CTA
========================================================= */

export const portfolioCTA = {
  title: "Ready to Build Something Remarkable?",

  description:
    "We turn bold ideas into digital platforms, intelligent products and inspiring spaces that deliver long-term value.",

  primaryCTA: {
    label: "Start Your Project",
    to: "/contact",
  },

  secondaryCTA: {
    label: "View Services",
    to: "/services",
  },
};