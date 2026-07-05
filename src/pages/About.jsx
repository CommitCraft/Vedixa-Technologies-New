import React from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  Cloud,
  Code2,
  Gem,
  Globe2,
  Lightbulb,
Link2,
Mail,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const values = [
  "Client Success",
  "Innovation",
  "Integrity",
  "Collaboration",
  "Excellence",
];

const pillars = [
  {
    icon: Code2,
    title: "IT & Software Solutions",
    description:
      "Custom software, web & mobile apps, cloud, DevOps and digital transformation solutions that drive efficiency and growth.",
    points: [
      "Custom Software Development",
      "Web & Mobile Application Development",
      "Cloud & DevOps",
      "Digital Transformation",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "AI-powered products and automation solutions that streamline operations, reduce costs and unlock new opportunities.",
    points: [
      "AI/ML Solutions",
      "Process Automation",
      "Data Analytics & Insights",
      "Intelligent Chatbots",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85",
  },
  {
    icon: Building2,
    title: "Architecture & Interior Design",
    description:
      "Functional, sustainable and inspiring spaces designed with creativity, precision and purpose.",
    points: [
      "Architecture Design",
      "Interior Design",
      "3D Visualization",
      "Project Execution",
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
];

const stats = [
  { number: "350+", label: "Projects Completed", icon: MonitorSmartphone },
  { number: "250+", label: "Happy Clients", icon: Users },
  { number: "8+", label: "Years Experience", icon: Sparkles },
  { number: "60+", label: "Experts & Professionals", icon: Users },
  { number: "98%", label: "Client Satisfaction", icon: ShieldCheck },
];

const leaders = [
  {
    name: "Rahul Mehta",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Neha Sharma",
    role: "Co-Founder & COO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Arjun Patel",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Priya Nair",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Vikram Singh",
    role: "Head of Architecture",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85",
  },
];

const journey = [
  {
    year: "2016",
    title: "Founded",
    text: "Vedixa Technologies was founded with a vision to deliver innovative solutions.",
  },
  {
    year: "2017",
    title: "First Major Projects",
    text: "Delivered multiple software and design projects for global clients.",
  },
  {
    year: "2019",
    title: "AI & Automation",
    text: "Expanded into AI, automation and cloud solutions.",
  },
  {
    year: "2021",
    title: "Architecture Division",
    text: "Launched architecture and interior design practice.",
  },
  {
    year: "2023",
    title: "Global Expansion",
    text: "Strengthened the team and served clients across multiple countries.",
  },
  {
    year: "2025",
    title: "The Future",
    text: "Continuing to innovate, build and inspire worldwide.",
  },
];

const reasons = [
  {
    icon: CircleCheck,
    title: "End-to-End Solutions",
    text: "From strategy to execution, we handle it all.",
  },
  {
    icon: Users,
    title: "Expert Team",
    text: "Skilled professionals with deep industry expertise.",
  },
  {
    icon: Workflow,
    title: "Agile & Transparent",
    text: "Flexible engagement and clear communication.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    text: "Built with best practices and security in mind.",
  },
  {
    icon: Rocket,
    title: "On-Time Delivery",
    text: "We value time and deliver on promises.",
  },
  {
    icon: Target,
    title: "Client-First Approach",
    text: "Your success is at the heart of everything we do.",
  },
];

const brands = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Oracle",
  "Adobe",
  "Autodesk",
  "HubSpot",
  "SAP",
];

function About() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-14">
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
              <span className="font-semibold text-blue-600">Home</span>
              <span>›</span>
              <span>About Us</span>
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              About <span className="text-blue-600">Vedixa</span> Technologies
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              We build powerful digital products and inspiring spaces through
              technology, design and execution excellence.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Vedixa Technologies is a multidisciplinary company combining IT,
              software development, AI, digital transformation, architecture
              and interior design to deliver end-to-end solutions that drive
              real business impact and elevate the way people live and work.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                Explore Our Services
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1300&q=90"
              alt="Vedixa team collaboration"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute right-5 top-5 w-[45%] overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85"
                alt="Business dashboard"
                className="h-56 w-full rounded-xl object-cover"
              />
            </div>

            <div className="absolute bottom-5 right-10 w-[35%] overflow-hidden rounded-xl border border-white bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85"
                alt="Architecture project"
                className="h-36 w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.55fr_1fr_1.9fr]">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=90"
            alt="Vedixa building"
            className="h-full min-h-[320px] w-full rounded-2xl object-cover"
          />

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
              Who We Are
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Our Story
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Vedixa was founded with a simple belief—technology can transform
              businesses, and design can transform lives.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              From custom software and AI-powered solutions to cloud platforms,
              automation and world-class architecture and interior design, we
              help organizations and individuals bring ideas to life.
            </p>

            <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
              Learn More About Us
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Target className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold">Our Mission</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                To deliver innovative, reliable and future-ready solutions that
                empower businesses and improve lives.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Globe2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold">Our Vision</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                To become a global leader in technology, design and innovation,
                building a smarter and more connected world.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Gem className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold">Core Values</h3>

              <div className="mt-4 space-y-2">
                {values.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <Check size={15} className="text-blue-600" />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BUSINESS PILLARS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-6">
          <h2 className="text-3xl font-black text-slate-950">
            Our Business Pillars
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Integrated expertise. End-to-end solutions. One trusted partner.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="text-blue-600" size={25} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_0.8fr]">
                  <div className="space-y-3">
                    {pillar.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <Check size={15} className="text-blue-600" />
                        {point}
                      </div>
                    ))}
                  </div>

                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="h-40 w-full rounded-xl object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 py-7 lg:px-8">
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-4 border-b border-slate-100 p-5 lg:border-b-0 lg:border-r"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Icon size={23} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-2xl font-black text-blue-600">
                    {stat.number}
                  </p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-black">Meet Our Leadership</h2>
            <p className="mt-2 text-sm text-slate-500">
              A passionate team of visionaries and experts driving innovation
              and excellence.
            </p>
          </div>

          <button className="hidden items-center gap-2 text-sm font-semibold text-blue-600 md:flex">
            View All Team Members
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative">
          <button className="absolute -left-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow md:flex">
            <ChevronLeft size={18} />
          </button>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-48 w-full rounded-xl object-cover object-top"
                />

                <h3 className="mt-4 font-bold">{leader.name}</h3>
                <p className="text-sm text-slate-500">{leader.role}</p>

                <div className="mt-3 flex gap-2">
                  <Link2 size={16} className="text-blue-600" />
                  <Mail size={16} className="text-blue-600" />
                </div>
              </article>
            ))}
          </div>

          <button className="absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow md:flex">
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <h2 className="text-3xl font-black">Our Journey So Far</h2>
        <p className="mt-2 text-sm text-slate-500">
          Milestones that reflect our growth and commitment.
        </p>

        <div className="relative mt-10">
          <div className="absolute left-0 right-0 top-3 hidden h-[2px] bg-blue-200 lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {journey.map((item) => (
              <article key={item.year} className="relative text-center">
                <div className="relative z-10 mx-auto h-6 w-6 rounded-full border-4 border-blue-600 bg-white" />

                <p className="mt-4 text-2xl font-black text-blue-600">
                  {item.year}
                </p>

                <h3 className="mt-1 font-bold">{item.title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <h2 className="text-3xl font-black">Why Choose Vedixa</h2>
        <p className="mt-2 text-sm text-slate-500">
          We combine technology, creativity and execution to deliver unmatched
          value.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Icon size={20} className="text-blue-600" />
                </div>

                <h3 className="text-sm font-bold">{reason.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {reason.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* BRANDS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <h2 className="text-3xl font-black">Trusted by Leading Brands</h2>
        <p className="mt-2 text-sm text-slate-500">
          Proud to partner with innovative companies and organizations.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-center font-bold text-slate-700"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Let's Build Something Extraordinary Together
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Have a project in mind? Our team is ready to turn your ideas into
              powerful solutions and inspiring spaces.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700">
                Book a Consultation
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold">
                Explore Our Services
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <Building2 className="absolute -bottom-8 -left-3 h-48 w-48 text-white/10" />
          <Cloud className="absolute -bottom-8 right-3 h-48 w-48 text-white/10" />
        </div>
      </section>
    </main>
  );
}

export default About;