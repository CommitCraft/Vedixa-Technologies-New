import {
  Bot,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Code2,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Timer,
} from "lucide-react";


/* =========================================================
   HERO
========================================================= */

export const contactHero = {
  eyebrow: "Contact Us",

  title: "Let's Talk About",
  highlight: "Your Project",

  description:
    "Have an idea, a challenge or a vision for the future? We're here to help. Our experts in software development, AI automation, architecture and design are ready to listen and build the right solution for you.",

  primaryCTA: {
    label: "Book a Free Consultation",
    to: "#contact-form",
  },

  secondaryCTA: {
    label: "Talk to an Expert",
    href: "tel:+917081493932",
  },

  officeImage:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
};


/* =========================================================
   CONTACT DETAILS
========================================================= */

export const contactInformation = [
  {
    type: "phone",
    title: "Call Us",
    value: "+91 70814 93932",
    href: "tel:+917081493932",
    description: "Mon – Sat, 9:00 AM – 7:00 PM",
  },

  {
    type: "email",
    title: "Email Us",
    value: "info@vedixa.com",
    href: "mailto:info@vedixa.com",
    description: "We respond within 24 business hours.",
  },

  {
    type: "location",
    title: "Our Office",
    value: "Vedixa Technologies",
    lines: [
      "Lucknow, Uttar Pradesh",
      "India",
    ],
  },

  {
    type: "hours",
    title: "Business Hours",
    lines: [
      "Mon – Sat: 9:00 AM – 7:00 PM",
      "Sunday: Closed",
    ],
    badge: "IST – India Standard Time",
  },
];


/* =========================================================
   FORM OPTIONS
========================================================= */

export const contactFormOptions = {
  services: [
    "Software Development",
    "AI & Automation",
    "Cloud & DevOps",
    "UI/UX Design",
    "Architecture Design",
    "Interior Design",
    "Other",
  ],

  projectTypes: [
    "New Project",
    "Existing Product Improvement",
    "Consultation",
    "Maintenance & Support",
    "Architecture Project",
    "Interior Design Project",
  ],
};


/* =========================================================
   HELP OPTIONS
========================================================= */

export const helpOptions = [
  {
    title: "Software Development",
    text:
      "Custom web, mobile and enterprise software tailored to your business.",
    icon: Code2,
  },

  {
    title: "AI Automation",
    text:
      "Automate workflows, integrate AI solutions and improve operational efficiency.",
    icon: Bot,
  },

  {
    title: "Architecture & Interior",
    text:
      "Innovative architectural designs and inspiring interior spaces.",
    icon: Building2,
  },

  {
    title: "Partnership",
    text:
      "Explore partnerships, alliances and business collaboration opportunities.",
    icon: Handshake,
  },

  {
    title: "Careers",
    text:
      "Join our team of innovators and help build the future with us.",
    icon: BriefcaseBusiness,
  },
];


/* =========================================================
   LOCATION
========================================================= */

export const locationSection = {
  title: "Our Location",

  description:
    "Visit our office and meet our team in person. We'd love to understand your vision and discuss how we can work together to build the future.",

  officeName: "Vedixa Technologies",

  address: [
    "Lucknow, Uttar Pradesh",
    "India",
  ],

  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",

  directionsUrl: "#",
};


/* =========================================================
   SUPPORT PROMISE
========================================================= */

export const supportPoints = [
  {
    title: "24-Hour Response",
    text:
      "We respond to all inquiries within 24 business hours.",
    icon: Timer,
  },

  {
    title: "Project Consultation",
    text:
      "Free consultation to understand your goals and challenges.",
    icon: MessageCircle,
  },

  {
    title: "Confidential & Secure",
    text:
      "Your ideas and information are always protected.",
    icon: ShieldCheck,
  },

  {
    title: "On-Time & Reliable",
    text:
      "We respect deadlines and commit to quality.",
    icon: Clock3,
  },
];


/* =========================================================
   SOCIAL CHANNELS
========================================================= */

export const socialChannels = [
  {
    title: "LinkedIn",
    handle: "/vedixa-technologies",
    symbol: "in",
    href: "#",
  },

  {
    title: "Facebook",
    handle: "/vedixatechnologies",
    symbol: "f",
    href: "#",
  },

  {
    title: "Instagram",
    handle: "@vedixa.technologies",
    symbol: "◎",
    href: "#",
  },

  {
    title: "X (Twitter)",
    handle: "@vedixa_tech",
    symbol: "X",
    href: "#",
  },

  {
    title: "YouTube",
    handle: "/VedixaTechnologies",
    symbol: "▶",
    href: "#",
  },
];


/* =========================================================
   CTA
========================================================= */

export const contactCTA = {
  title: "We're Ready When You Are",

  description:
    "Share your goals and we'll help you shape a practical, beautiful and impactful next step.",

  primaryCTA: {
    label: "Start the Conversation",
    to: "#contact-form",
  },

  secondaryCTA: {
    label: "Explore Services",
    to: "/services",
  },
};