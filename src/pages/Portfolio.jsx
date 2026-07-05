import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Cloud,
  Code2,
  Gauge,
  House,
  LayoutDashboard,
  MonitorSmartphone,
  PanelsTopLeft,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Timer,
  TrendingUp,
  Users,
} from "lucide-react";

const filters = [
  "All Projects",
  "Software Products",
  "Web & Mobile Apps",
  "AI Automation",
  "Architecture",
  "Interior Design",
];

const featuredCases = [
  {
    category: "SaaS Platform",
    title: "ERP Dashboard Platform",
    description:
      "A comprehensive ERP solution that streamlined operations and improved decision-making with real-time analytics.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    stats: [
      ["45%", "Process Efficiency"],
      ["32%", "Cost Reduction"],
      ["2.8x", "Faster Reporting"],
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
      ["60%", "User Engagement"],
      ["35%", "Transactions"],
      ["4.9★", "App Store Rating"],
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
      ["6,200 sq.ft.", "Built-up Area"],
      ["4 BHK", "Configuration"],
      ["9 Months", "Project Duration"],
    ],
  },
];

const projects = [
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

const stats = [
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

const testimonials = [
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

const highlights = [
  "Understand client goals & challenges",
  "Design tailored solutions",
  "Agile development & execution",
  "Test, optimize & deliver",
  "Ongoing support & growth partnership",
];

const outcomes = [
  "45% increase in operational efficiency",
  "60% faster decision-making",
  "35% reduction in manual work",
  "Higher accuracy & data visibility",
  "Scalable for future growth",
];

function SectionTitle({
  title,
  description,
  action,
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="text-2xl font-black text-slate-950 md:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
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

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return projects;
    }

    return projects.filter((project) => {
      if (activeFilter === "Software Products") {
        return ["SaaS Product", "Web Application", "Cloud Solution"].includes(
          project.category
        );
      }

      if (activeFilter === "Web & Mobile Apps") {
        return ["Web Application", "Mobile App"].includes(project.category);
      }

      if (activeFilter === "AI Automation") {
        return project.category === "AI Automation";
      }

      if (activeFilter === "Architecture") {
        return project.category.includes("Architecture");
      }

      if (activeFilter === "Interior Design") {
        return project.category === "Interior Design";
      }

      return true;
    });
  }, [activeFilter]);

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-14">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Our Portfolio
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              Impactful software, AI solutions and architectural designs built
              to solve real problems and create measurable results.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: TrendingUp,
                  title: "Business Focused",
                  text: "Solutions that drive growth",
                },
                {
                  icon: Sparkles,
                  title: "Innovative & Scalable",
                  text: "Built for today, ready for tomorrow",
                },
                {
                  icon: ShieldCheck,
                  title: "Design Excellence",
                  text: "Great experiences, every time",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={18} className="text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                Explore Case Studies
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-3xl">
            <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"
                alt="Architecture project"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-[18%] top-10 w-[54%] overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=90"
                alt="Analytics dashboard"
                className="h-72 w-full rounded-xl object-cover"
              />
            </div>

            <div className="absolute bottom-5 left-0 w-[30%] overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=700&q=85"
                alt="Mobile app"
                className="h-56 w-full rounded-xl object-cover"
              />
            </div>

            <div className="absolute bottom-3 right-[15%] w-[32%] overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=85"
                alt="AI automation"
                className="h-44 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
        <div className="flex flex-wrap gap-3 rounded-xl border border-slate-200 bg-white p-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED CASE STUDIES */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle
          title="Featured Case Studies"
          description="In-depth stories of how we built solutions that created real business impact."
          action="View All Case Studies"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredCases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <p className="text-xs font-semibold text-blue-600">
                  {item.category}
                </p>

                <h3 className="mt-2 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                  {item.stats.map(([value, label]) => (
                    <div key={label}>
                      <p className="text-lg font-black text-blue-600">{value}</p>
                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle
          title="Our Projects"
          description="A collection of software, AI and architecture projects delivered for businesses and individuals."
          action="View All Projects"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
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

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {project.description}
                </p>

                <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  View Case Study
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
<section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
  <div className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 shadow-2xl shadow-blue-950/10">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`
            relative
            flex min-h-[140px]
            flex-col items-center justify-center
            px-5 py-6 text-center
            text-white

            border-b border-white/10

            sm:min-h-[135px]

            lg:border-b
            lg:border-white/10

            xl:border-b-0

            ${index !== stats.length - 1 ? "xl:border-r xl:border-white/10" : ""}
          `}
        >
          {/* DECORATIVE GLOW */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition duration-300 hover:opacity-100" />

          {/* NUMBER */}
          <p className="relative text-3xl font-black leading-none tracking-tight text-white md:text-4xl">
            {stat.number}
          </p>

          {/* LABEL */}
          <p className="relative mt-3 max-w-[150px] text-xs font-medium leading-5 text-blue-100 sm:text-sm">
            {stat.label}
          </p>

          {/* BOTTOM ACCENT */}
          <span className="relative mt-4 h-1 w-8 rounded-full bg-cyan-400" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          description="Trusted by startups, enterprises and industry leaders."
          action="View All Testimonials"
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="text-4xl font-black text-blue-600">“</div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.quote}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div>
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.role}</p>
                </div>

                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 lg:grid-cols-[0.72fr_1.4fr_0.72fr] lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl font-black">Project Highlights</h2>
          <p className="mt-2 text-sm text-slate-500">
            Real transformation. Real impact.
          </p>

          <div className="mt-5 space-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <Check size={16} className="mt-0.5 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85"
                alt="Before transformation"
                className="h-72 w-full object-cover"
              />

              <span className="absolute left-4 top-4 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-white">
                Before
              </span>

              <div className="p-4">
                <p className="text-sm leading-6 text-slate-500">
                  Outdated workflow, manual processes and limited visibility
                  across operations.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85"
                alt="After transformation"
                className="h-72 w-full object-cover"
              />

              <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                After
              </span>

              <div className="p-4">
                <p className="text-sm leading-6 text-slate-500">
                  Automated workflows, real-time insights and streamlined
                  operations driving growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-2xl font-black text-blue-600">Key Outcomes</h2>

          <div className="mt-5 space-y-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm text-slate-600"
              >
                <Check size={16} className="mt-0.5 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <House className="absolute -bottom-10 -left-4 h-48 w-48 text-white/10" />
          <MonitorSmartphone className="absolute -bottom-8 right-4 h-44 w-44 text-white/10" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Let&apos;s build powerful software, intelligent solutions and
              inspiring spaces together.
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
        </div>
      </section>
    </main>
  );
}

export default Portfolio;