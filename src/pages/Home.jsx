import React from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  ChartNoAxesCombined,
  Check,
  Cloud,
  Code2,
  Globe2,
  House,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  PanelsTopLeft,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const softwareServices = [
  {
    icon: Globe2,
    title: "Web Development",
    text: "Fast, secure and scalable websites and web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Native and cross-platform apps for iOS and Android.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    text: "Tailor-made software that solves unique business problems.",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    text: "Scalable SaaS products from idea to market launch.",
  },
  {
    icon: PanelsTopLeft,
    title: "Enterprise Solutions",
    text: "ERP, CRM and business systems that drive enterprise efficiency.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "User-centered design that delights users and improves conversions.",
  },
  {
    icon: Bot,
    title: "AI Automation",
    text: "Intelligent automation to streamline workflows and operations.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "Cloud-native solutions with CI/CD and deployment automation.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Data Analytics",
    text: "Turn data into insights with dashboards, analytics and reporting.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    text: "Powerful stores and marketplaces that scale with your business.",
  },
];

const projects = [
  {
    title: "ERP Dashboard",
    category: "Enterprise Resource Planning",
    description: "Real-time business analytics and operations dashboard.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Mobile Banking App",
    category: "FinTech Application",
    description: "Secure and intuitive financial mobile experience.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Analytics Platform",
    category: "Business Intelligence",
    description: "Advanced analytics and dashboards for better decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "E-commerce Admin",
    category: "Commerce Platform",
    description: "Complete admin panel to manage products, orders and users.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "AI Automation Dashboard",
    category: "Artificial Intelligence",
    description: "Automate workflows and improve productivity with AI.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
  },
];

const architectureProjects = [
  {
    title: "Modern Villa",
    subtitle: "Residential Architecture",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Luxury Apartment",
    subtitle: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Corporate Office",
    subtitle: "Commercial Architecture",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Retail Showroom",
    subtitle: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=85",
  },
];

const stats = [
  {
    number: "350+",
    label: "Projects Completed",
    icon: LayoutDashboard,
  },
  {
    number: "250+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "8+",
    label: "Years Experience",
    icon: Sparkles,
  },
  {
    number: "60+",
    label: "Expert Professionals",
    icon: Users,
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    icon: ShieldCheck,
  },
];

const technologyStack = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PHP",
  "Laravel",
  "Python",
  "MySQL",
  "MongoDB",
  "AWS",
  "Firebase",
  "Figma",
  "Git",
  "Docker",
  "PostgreSQL",
  "AutoCAD",
  "Revit",
  "SketchUp",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your business, goals and challenges.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description: "We define the roadmap, priorities and solution approach.",
  },
  {
    number: "03",
    title: "Design",
    description: "We create intuitive UI/UX and robust system designs.",
  },
  {
    number: "04",
    title: "Develop",
    description: "We build, test and iterate with quality and clean code.",
  },
  {
    number: "05",
    title: "Deploy & Support",
    description: "We deploy seamlessly and provide ongoing support.",
  },
];

function SectionTitle({ eyebrow, title, action }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            {eyebrow}
          </p>
        )}

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
          {title}
        </h2>
      </div>

      {action && (
        <button className="flex items-center gap-2 text-sm font-semibold text-blue-600">
          {action}
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}

function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/50 to-blue-100/60">
        <div className="mx-auto grid max-w-12xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div className="relative z-10">
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Technology, Architecture &amp; Design Solutions that
              <span className="block text-blue-600">
                 Build the Future
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Vedixa Technologies is your partner for digital transformation.
              We deliver software development, web and mobile apps, enterprise
              systems, AI automation, cloud solutions and architectural design
              services—all under one roof.
            </p>

            <div className="mt-6 grid max-w-xl grid-cols-2 gap-3 text-sm text-slate-700">
              {[
                "Software Development",
                "AI Automation",
                "Cloud Solutions",
                "UI/UX Design",
                "Web & Mobile Apps",
                "Digital Transformation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                Explore Our Solutions
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <div className="absolute right-0 top-0 h-full w-[74%] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"
                alt="Modern architecture"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-0 w-[72%] overflow-hidden rounded-2xl border border-white/70 bg-white p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=90"
                alt="Business software dashboard"
                className="h-72 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
        <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["End-to-End Solutions", "Concept to continuous support"],
            ["Agile & Transparent", "Iterative delivery, full visibility"],
            ["Client-Centric Focus", "Quality, on-time, every time"],
            ["Future-Ready Approach", "Innovation meets reliability"],
            ["Scalable & Secure", "Built for growth, secured by design"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="flex gap-3 border-b border-slate-100 p-4 last:border-0 sm:border-r lg:border-b-0"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck className="text-blue-600" size={19} />
              </div>

              <div>
                <h3 className="text-sm font-bold">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOFTWARE SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-blue-50/70 p-5 md:p-7">
          <SectionTitle
            title="IT & Software Solutions"
            action="View All Services"
          />

          <div className="grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {softwareServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={20} className="text-blue-600" />
                    </div>

                    <h3 className="text-sm font-bold text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {service.text}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="relative min-h-[430px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-5">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85"
                alt="Software dashboard interface"
                className="h-full w-full rounded-xl object-cover shadow-xl"
              />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-blue-600 p-5 text-white shadow-2xl">
                <Cloud size={34} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle
          title="Software & Digital Products We Build"
          action="View All Projects"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <p className="text-xs font-semibold text-blue-600">
                  {project.category}
                </p>

                <h3 className="mt-1 text-base font-bold">{project.title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE + APPROACH */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-5 md:p-6">
          <SectionTitle title="Architecture & Interior Design" />

          <div className="mb-5 flex flex-wrap gap-3 text-xs text-slate-600">
            {[
              "Residential Architecture",
              "Commercial Architecture",
              "Interior Design",
              "2D / 3D Visualization",
              "Space Planning",
              "Sustainable Design",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <Building2 size={15} className="text-blue-600" />
                {item}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {architectureProjects.map((project) => (
              <article key={project.title}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-36 w-full rounded-lg object-cover"
                />

                <h3 className="mt-2 text-sm font-bold">{project.title}</h3>
                <p className="text-xs text-slate-500">{project.subtitle}</p>
              </article>
            ))}
          </div>

          <button className="mx-auto mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
            View All Architecture Projects
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 md:p-6">
          <SectionTitle title="Integrated Design & Build Approach" />

          <div className="grid grid-cols-5 gap-2">
            {[
              "Concept & Planning",
              "Design & Visualization",
              "Development & Engineering",
              "Build & Deliver",
              "Support & Optimize",
            ].map((item, index) => (
              <div key={item} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Layers3 className="text-blue-600" size={20} />
                </div>

                <p className="mt-2 text-[11px] font-semibold leading-4">
                  {item}
                </p>

                {index < 4 && (
                  <ArrowRight
                    size={14}
                    className="absolute -right-2 top-4 hidden text-blue-500 md:block"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-2 text-sm text-slate-600">
            {[
              "Better collaboration",
              "Faster time to market",
              "Cost-effective execution",
              "Consistent quality",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="text-blue-600" size={17} />
                {item}
              </div>
            ))}
          </div>

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85"
            alt="Architectural design process"
            className="mt-6 h-64 w-full rounded-xl object-cover opacity-90"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
        <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-4 border-b border-slate-100 px-5 py-5 lg:border-b-0 lg:border-r"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  <Icon size={23} className="text-blue-600" />
                </div>

                <div>
                  <p className="text-2xl font-black text-blue-600">
                    {stat.number}
                  </p>

                  <p className="text-xs text-slate-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
          Technologies & Tools We Work With
        </p>

        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
          {technologyStack.map((tech) => (
            <div
              key={tech}
              className="flex min-w-[76px] flex-col items-center justify-center rounded-lg px-3 py-3 transition hover:bg-blue-50"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600">
                <Code2 size={20} />
              </div>

              <span className="text-center text-[11px] font-semibold">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.28fr_0.72fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Process
            </p>

            <h2 className="mt-2 text-3xl font-black">
              A Structured Process for Exceptional Results
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              We follow a proven agile process to ensure quality, transparency
              and delivered value at every step.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="relative rounded-xl border border-slate-200 bg-white p-4"
              >
                <span className="text-xs font-black text-blue-600">
                  {step.number}
                </span>

                <div className="my-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Rocket size={19} className="text-blue-600" />
                </div>

                <h3 className="text-sm font-bold">{step.title}</h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-5 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Let's build powerful software, intelligent solutions and inspiring
              spaces together.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700">
                Book a Consultation
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold">
                Explore Services
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <House className="absolute -bottom-10 -left-3 h-44 w-44 text-white/10" />
          <MonitorSmartphone className="absolute -bottom-8 right-3 h-44 w-44 text-white/10" />
        </div>
      </section>
    </main>
  );
}

export default Home;