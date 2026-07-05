import React from "react";
import {
  ArrowRight,
  Bot,
  Box,
  Briefcase,
  Building2,
  Check,
  Cloud,
  Code2,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  LineChart,
  Lock,
  MonitorSmartphone,
  Palette,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  Smartphone,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

const heroFeatures = [
  {
    title: "Modern & Future-Ready",
    text: "Latest frameworks and platforms",
  },
  {
    title: "Secure & Reliable",
    text: "Built with security, quality & compliance",
  },
  {
    title: "Scalable by Design",
    text: "Cloud-native, modular & performance-driven",
  },
  {
    title: "Innovation at Core",
    text: "AI, automation & data driving outcomes",
  },
];

const stackGroups = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "PHP", "Laravel", "Python"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "React Native", "Android", "iOS"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Docker", "Git", "CI/CD"],
  },
  {
    title: "UI/UX & Product Tools",
    icon: Palette,
    items: ["Design Systems", "Analytics", "Prototyping", "User Research"],
  },
  {
    title: "AI & Data Stack",
    icon: Bot,
    items: ["Automation", "Machine Learning", "Data Analytics", "LLM & GenAI"],
  },
  {
    title: "Architecture Software Tools",
    icon: Building2,
    items: ["AutoCAD", "SketchUp", "Revit", "3ds Max", "Lumion"],
  },
];

const architectureSteps = [
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

const qualityCards = [
  {
    title: "Secure by Design",
    text: "Security best practices, code scanning, role-based access and data protection.",
    icon: Lock,
  },
  {
    title: "Scalable & Resilient",
    text: "Cloud-native architecture, modular services and high availability patterns.",
    icon: Cloud,
  },
  {
    title: "High Performance",
    text: "Optimized code, caching, monitoring and best-in-class performance.",
    icon: Gauge,
  },
  {
    title: "Maintainable Code",
    text: "Clean code, reusable modules, documentation and continuous improvement.",
    icon: Code2,
  },
];

const stackChoicePoints = [
  "Business goals & long-term vision",
  "Performance, scalability & reliability needs",
  "Security, compliance & data considerations",
  "Team expertise & ecosystem maturity",
  "Total cost of ownership & future adaptability",
];

const lifecycleTools = [
  {
    title: "Plan & Manage",
    icon: Briefcase,
    items: ["Jira", "Confluence", "Notion"],
  },
  {
    title: "Design & Prototype",
    icon: Palette,
    items: ["Figma", "Miro", "Zeplin"],
  },
  {
    title: "Develop & Code",
    icon: Code2,
    items: ["VS Code", "GitHub", "GitLab"],
  },
  {
    title: "Test & QA",
    icon: ShieldCheck,
    items: ["Selenium", "Postman", "Jest"],
  },
  {
    title: "Deploy & DevOps",
    icon: Cloud,
    items: ["Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    title: "Monitor & Support",
    icon: LineChart,
    items: ["Datadog", "Sentry", "Slack"],
  },
];

const stats = [
  { number: "350+", label: "Projects Completed" },
  { number: "250+", label: "Happy Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "60+", label: "Expert Professionals" },
  { number: "98%", label: "Client Satisfaction" },
];

function SectionTitle({ number, title, description, action }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {number && (
          <p className="mb-1 text-lg font-black text-slate-950">{number}</p>
        )}
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}
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

function TechBadge({ label }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50">
      {label}
    </div>
  );
}

function Technologies() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/40 to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-14">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Technologies We Use to
              <br />
              <span className="text-blue-600">Build Scalable Solutions</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We combine modern engineering practices, cloud platforms,
              intelligent automation and beautiful design technologies to build
              secure, scalable and future-ready digital products. From idea to
              impact — powered by the right technology.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                Explore Our Capabilities
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                Talk to Our Experts
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroFeatures.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <ShieldCheck size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-3xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100" />

            <div className="absolute right-0 top-6 w-[78%] overflow-hidden rounded-3xl border border-white/70 bg-white p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=90"
                alt="Code editor on laptop"
                className="h-96 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="absolute bottom-8 left-6 w-[34%] overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=700&q=85"
                alt="Mobile application"
                className="h-56 w-full rounded-xl object-cover"
              />
            </div>

            <div className="absolute right-10 top-20 overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=85"
                alt="Dashboard interface"
                className="h-48 w-72 rounded-xl object-cover"
              />
            </div>

            <div className="absolute left-[44%] top-[58%] rounded-2xl bg-blue-700 px-5 py-4 text-white shadow-2xl">
              <div className="flex items-center gap-2 text-lg font-bold">
                <Code2 size={22} />
                API
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <SectionTitle number="1." title="Technology Stack We Work With" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stackGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold">{group.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {group.items.map((item) => (
                      <TechBadge key={item} label={item} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE APPROACH */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
            <SectionTitle
              number="2."
              title="Our Solution Architecture Approach"
              description="We follow a cloud-native, modular and secure architecture approach to deliver solutions that are robust, scalable and easy to evolve."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {architectureSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <p className="text-sm font-semibold leading-5">
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
            <div className="grid gap-4 md:grid-cols-5">
              {[
                { title: "Users", icon: Users },
                { title: "Web / Mobile", icon: MonitorSmartphone },
                { title: "API Gateway", icon: Workflow },
                { title: "Microservices", icon: Box },
                { title: "Data Layer", icon: Database },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                  >
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <p className="text-sm font-semibold">{item.title}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-dashed border-blue-300 bg-blue-50/50 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-blue-700">
                  <Cloud size={18} />
                  Cloud CDN
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  Fast delivery, caching and global performance optimization.
                </p>
              </div>

              <div className="rounded-xl border border-dashed border-blue-300 bg-blue-50/50 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold text-blue-700">
                  <GitBranch size={18} />
                  CI/CD Pipeline
                </div>
                <p className="text-sm leading-6 text-slate-600">
                  Automated build, testing and deployment pipelines for reliable releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY + STACK CHOICE */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
            <SectionTitle number="3." title="Built for Quality, Security & Scalability" />

            <div className="grid gap-4 sm:grid-cols-2">
              {qualityCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
            <SectionTitle number="4." title="How We Choose the Right Stack" />

            <div className="space-y-3">
              {stackChoicePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-lg bg-slate-50 p-3"
                >
                  <Check className="mt-0.5 text-blue-600" size={18} />
                  <span className="text-sm leading-6 text-slate-600">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-6">
              <div className="mx-auto flex h-48 max-w-xs items-center justify-center">
                <div className="relative h-36 w-36">
                  <div className="absolute inset-0 rounded-3xl bg-white shadow-xl" />
                  <div className="absolute left-3 top-3 h-28 w-28 rounded-3xl bg-blue-100 shadow-md" />
                  <div className="absolute left-6 top-6 h-20 w-20 rounded-2xl bg-blue-500 shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS LIFECYCLE */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle number="5." title="Tools We Use Across the Project Lifecycle" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {lifecycleTools.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <h3 className="text-sm font-bold leading-5">{group.title}</h3>
                  </div>

                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black md:text-4xl">
                Ready to Build Something Exceptional?
              </h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Let’s leverage the right technologies to turn your ideas into
                high-performing, scalable digital products.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700">
                Schedule a Consultation
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold">
                Explore Our Services
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <Building2 className="absolute -bottom-10 right-0 h-44 w-44 text-white/10" />
        </div>
      </section>

      {/* STATS */}
<section className="mx-auto max-w-7xl px-4 pb-10 sm:px-5 lg:px-8">
  <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">
    {stats.map((stat, index) => (
      <div
        key={stat.label}
        className={`
          flex min-h-[120px]
          flex-col items-center justify-center
          gap-3 px-5 py-5 text-center
          border-b border-slate-100

          sm:min-h-[110px]
          sm:flex-row
          sm:justify-start
          sm:gap-4
          sm:px-6
          sm:text-left

          lg:min-h-[120px]
          lg:border-b-0
          ${index !== stats.length - 1 ? "lg:border-r" : ""}
        `}
      >
        {/* ICON */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">
          <ShieldCheck
            size={22}
            strokeWidth={2}
            className="text-blue-600"
          />
        </div>

        {/* CONTENT */}
        <div className="min-w-0">
          <p className="text-2xl font-black leading-none text-blue-600 md:text-3xl">
            {stat.number}
          </p>

          <p className="mt-2 text-xs font-medium leading-5 text-slate-500 sm:text-sm">
            {stat.label}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}

export default Technologies;