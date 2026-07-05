import React from "react";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Cloud,
  Factory,
  GraduationCap,
  HeartPulse,
  House,
  Landmark,
  LineChart,
  PackageSearch,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Users,
} from "lucide-react";

const heroFeatures = [
  {
    title: "Deep Industry Expertise",
    text: "Solutions tailored to real business challenges",
  },
  {
    title: "Business-Centric Approach",
    text: "Technology aligned with business goals",
  },
  {
    title: "Scalable & Future-Ready",
    text: "Built for performance and long-term growth",
  },
  {
    title: "Delivered with Precision",
    text: "Quality, reliability and measurable outcomes",
  },
];

const industries = [
  {
    title: "Real Estate",
    text: "Digital solutions for property development, sales, leasing and facility management.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Retail",
    text: "Omnichannel experiences, inventory intelligence and customer-centric platforms.",
    icon: Store,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Manufacturing",
    text: "Smart manufacturing, IoT, predictive maintenance and supply chain optimization.",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Healthcare",
    text: "Patient-centric platforms, health data solutions and operational automation.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Education",
    text: "Digital learning platforms, LMS, student engagement and institution management.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Hospitality",
    text: "Guest experience platforms, booking systems and hotel operations automation.",
    icon: House,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Logistics",
    text: "Route optimization, real-time tracking and end-to-end supply chain visibility.",
    icon: Truck,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Finance",
    text: "Secure fintech solutions, risk analytics, compliance and customer onboarding.",
    icon: Landmark,
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Startups / SMEs",
    text: "Scalable MVPs, product engineering and digital transformation for growth.",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85",
  },
];

const capabilities = [
  {
    title: "Custom Software Solutions",
    text: "Business applications, portals, enterprise systems and customer platforms built for unique workflows.",
    icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Intelligent Automation & AI",
    text: "Automate operations, leverage AI for insights and improve decision-making.",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Architecture & Design Solutions",
    text: "Functional, sustainable and future-ready architecture and interior design.",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85",
  },
];

const useCases = [
  {
    title: "Real Estate CRM & Portals",
    text: "Lead management, property listing and sales automation.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Retail Omnichannel Platform",
    text: "Unified commerce, loyalty and personalized customer journeys.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Smart Manufacturing Suite",
    text: "Production monitoring, IoT and predictive maintenance.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Hospital Management System",
    text: "Appointments, EMR, billing and patient engagement.",
    image:
      "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Logistics Control Tower",
    text: "Real-time tracking, analytics and exception management.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Fintech Analytics Platform",
    text: "Risk scoring, fraud detection and compliance automation.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=85",
  },
];

const reasons = [
  "We understand industry workflows, regulations and customer expectations.",
  "Faster time-to-value with proven frameworks and reusable components.",
  "Solutions designed for scale, security and long-term impact.",
  "Continuous innovation to keep you ahead of the curve.",
];

const outcomes = [
  {
    value: "30–50%",
    label: "Increase in Operational Efficiency",
  },
  {
    value: "40% Faster",
    label: "Time-to-Market for Digital Initiatives",
  },
  {
    value: "2–3x",
    label: "Improvement in Digital Adoption",
  },
  {
    value: "25–40%",
    label: "Boost in Customer Experience Scores",
  },
];

const brands = [
  "DLF",
  "Godrej Properties",
  "Adani",
  "Max Healthcare",
  "Titan",
  "TVS",
  "Federal Bank",
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Azure",
  "Salesforce",
  "SAP",
  "Oracle",
  "Stripe",
];

function SectionTitle({ title, description, action }) {
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

function Industries() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/40 to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-14">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Industry-Focused
              <span className="block text-blue-600">Solutions</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              We deliver tailored software, AI, automation and architecture
              solutions that solve real business challenges across industries.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
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

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                Explore Solutions
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="relative min-h-[440px] overflow-hidden rounded-3xl">
            <div className="absolute left-0 top-0 h-[58%] w-[52%] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=90"
                alt="Commercial industry"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute right-0 top-0 h-[52%] w-[45%] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=90"
                alt="Corporate industry"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 h-[50%] w-[47%] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=90"
                alt="Manufacturing industry"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-7 left-[18%] w-[52%] overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=90"
                alt="Industry dashboard"
                className="h-64 w-full rounded-xl object-cover"
              />
            </div>

            <div className="absolute bottom-3 left-4 w-[20%] overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&q=85"
                alt="Mobile industry app"
                className="h-44 w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Industries We Serve"
            description="Solutions tailored to the unique needs and opportunities in every sector."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  key={industry.title}
                  className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-44 w-full object-cover"
                    />

                    <div className="absolute -bottom-5 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow">
                      <Icon size={20} className="text-blue-600" />
                    </div>
                  </div>

                  <div className="p-4 pt-8">
                    <h3 className="text-base font-bold">{industry.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {industry.text}
                    </p>

                    <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Explore
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW WE SERVE */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="How Vedixa Serves Each Industry"
            description="We combine technology, design and domain knowledge to deliver impact."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[0.8fr_1.2fr]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full rounded-xl object-cover"
                  />

                  <div>
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={20} className="text-blue-600" />
                    </div>

                    <h3 className="text-lg font-bold text-blue-600">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                    <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                      Learn More
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Tailored Solutions & Use Cases"
            description="Real-world applications that drive measurable business outcomes."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-sm font-bold">{item.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>

                  <button className="mt-4 flex items-center gap-2 text-xs font-semibold text-blue-600">
                    View Case
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE + OUTCOMES */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black">Why Industry Expertise Matters</h2>

          <div className="mt-5 space-y-4">
            {reasons.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600"
              >
                <Check size={17} className="mt-1 shrink-0 text-blue-600" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-5">
            <Building2 className="mx-auto h-40 w-40 text-slate-300" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black">Measurable Outcomes We Deliver</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <article
                key={item.value}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center"
              >
                <LineChart className="mx-auto text-blue-600" size={26} />

                <p className="mt-4 text-2xl font-black text-blue-600">
                  {item.value}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Trusted by Clients Across Industries"
            description="Building long-term partnerships with organizations that lead and inspire."
          />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex min-h-20 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-center font-bold text-slate-700"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <House className="absolute -bottom-10 -left-4 h-48 w-48 text-white/10" />
          <PackageSearch className="absolute -bottom-8 right-5 h-44 w-44 text-white/10" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Ready to Transform Your Industry?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Let&apos;s build future-ready solutions that drive growth,
              efficiency and exceptional experiences.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700">
                Book a Consultation
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold">
                Explore Our Solutions
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Industries;