import React from "react";
import {
  ArrowRight,
  Building2,
  Check,
  CircleDot,
  Clock3,
  Compass,
  DraftingCompass,
  Eye,
  Gem,
  Hammer,
  House,
  Leaf,
  Lightbulb,
  Map,
  Palette,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  TreePine,
  Users,
  Waves,
  Wrench,
} from "lucide-react";

const heroServices = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "Sustainable & Future-Ready",
  "Space Planning & Layouts",
  "3D Visualization & Rendering",
  "End-to-End Consultation",
  "Timely Delivery & Quality",
];

const heroFeatures = [
  {
    icon: Palette,
    title: "Creative by Design",
    text: "Beautiful, purposeful spaces",
  },
  {
    icon: Users,
    title: "People-Centric",
    text: "Designed around how you live & work",
  },
  {
    icon: Leaf,
    title: "Sustainable Thinking",
    text: "Eco-friendly, future-ready solutions",
  },
  {
    icon: Gem,
    title: "Expert Craftsmanship",
    text: "Precision, quality & attention to detail",
  },
  {
    icon: Clock3,
    title: "On Time, On Budget",
    text: "Reliable delivery you can trust",
  },
];

const services = [
  {
    title: "Residential Architecture",
    text: "Custom homes and villas that blend comfort, style and individuality.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Commercial Architecture",
    text: "Workspaces, retail and hospitality spaces designed for performance and impact.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Interior Design",
    text: "Elegant, functional interiors that reflect your personality and brand.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Space Planning",
    text: "Smart layouts that optimize space, flow and user experience.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "2D Drafting",
    text: "Precise floor plans, technical drawings and documentation.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "3D Visualization / Rendering",
    text: "Photorealistic renders and walkthroughs that bring ideas to life.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Sustainable Design",
    text: "Energy-efficient, eco-friendly designs for a better tomorrow.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Turnkey Consultation",
    text: "From concept to completion, we manage everything end-to-end.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  },
];

const projects = [
  {
    title: "Modern Villa Residence",
    type: "Luxury Villa",
    location: "Hyderabad",
    size: "4,300 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Azure Corporate Hub",
    type: "Commercial Building",
    location: "Bengaluru",
    size: "66,000 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Serene Interior Retreat",
    type: "Interior Design",
    location: "Pune",
    size: "3BHK",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Urban Retail Pavilion",
    type: "Retail Space",
    location: "Mumbai",
    size: "12,000 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Greenfield Workspace",
    type: "Office Interior",
    location: "Gurugram",
    size: "28,000 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Hillside Weekend Home",
    type: "Vacation Home",
    location: "Lonavala",
    size: "2,800 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85",
  },
];

const philosophy = [
  {
    icon: Users,
    title: "Human-Centric",
    text: "Designing around people, their needs and experiences.",
  },
  {
    icon: Compass,
    title: "Contextual & Timeless",
    text: "Spaces that respond to their environment and stand the test of time.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Responsible",
    text: "Smart design choices that reduce impact and add long-term value.",
  },
];

const approach = [
  {
    icon: Lightbulb,
    title: "Listen",
    text: "We understand your vision, lifestyle and goals.",
  },
  {
    icon: DraftingCompass,
    title: "Design",
    text: "We create concepts that balance beauty, function and feasibility.",
  },
  {
    icon: Hammer,
    title: "Deliver",
    text: "We execute with precision, transparency and care.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understanding your vision, needs and site potential.",
  },
  {
    number: "02",
    title: "Concept & Planning",
    text: "Concept design, space planning and feasibility study.",
  },
  {
    number: "03",
    title: "Design Development",
    text: "Detailed layouts, 3D visuals and material exploration.",
  },
  {
    number: "04",
    title: "Documentation",
    text: "Technical drawings, approvals and cost estimation.",
  },
  {
    number: "05",
    title: "Execution",
    text: "Construction with quality, safety and timely progress.",
  },
  {
    number: "06",
    title: "Handover",
    text: "Final handover with walkthrough and post-completion support.",
  },
];

const sustainability = [
  {
    icon: Leaf,
    title: "Sustainable Materials",
    text: "Eco-friendly materials that are durable and responsibly sourced.",
  },
  {
    icon: Sparkles,
    title: "Energy Efficiency",
    text: "Smart systems that reduce energy use and running costs.",
  },
  {
    icon: Eye,
    title: "Natural Light & Ventilation",
    text: "Designing for daylight, fresh air and healthier living.",
  },
  {
    icon: Waves,
    title: "Water Conservation",
    text: "Efficient fixtures and systems that conserve every drop.",
  },
  {
    icon: TreePine,
    title: "Green Spaces",
    text: "Integrating nature into design for well-being and balance.",
  },
  {
    icon: ShieldCheck,
    title: "Low Environmental Impact",
    text: "Thoughtful choices that minimize waste and carbon footprint.",
  },
];

const testimonials = [
  {
    quote:
      "Vedixa transformed our ideas into a stunning home. Their design sense, attention to detail and professionalism exceeded our expectations.",
    name: "Rekha & Neha Sharma",
    role: "Homeowners, Hyderabad",
  },
  {
    quote:
      "Our office space was delivered on time and looks incredible. The team understood our brand and built a space that inspires.",
    name: "Arjun Mehta",
    role: "Director, TechNova Solutions",
  },
  {
    quote:
      "The interiors are elegant, functional and exactly what we envisioned. Highly recommended.",
    name: "Priya Iyer",
    role: "Interior Design Client, Pune",
  },
  {
    quote:
      "From planning to execution, everything was seamless. Great communication and outstanding quality.",
    name: "Karan Malhotra",
    role: "Developer, Mumbai",
  },
];

const stats = [
  { number: "120+", label: "Projects Completed" },
  { number: "85+", label: "Happy Clients" },
  { number: "2.5M+", label: "Sq.ft. Designed" },
  { number: "50+", label: "Architecture Experts" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "10+", label: "Years of Experience" },
];

function SectionTitle({
  title,
  description,
  action,
  centered = false,
}) {
  return (
    <div
      className={`mb-6 ${
        centered
          ? "text-center"
          : "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div>
        <h2 className="text-2xl font-black text-slate-950 md:text-3xl">
          {title}
        </h2>

        {description && (
          <p
            className={`mt-2 text-sm leading-6 text-slate-500 ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
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

function Architecture() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-14">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Architecture &
              <br />
              Interior Design That
              <span className="block text-blue-600">
                Shapes Better Experiences
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              We design thoughtful spaces that blend aesthetics,
              functionality and sustainability. From elegant residences to
              iconic commercial spaces and inspiring interiors—our
              architectural solutions bring your vision to life.
            </p>

            <div className="mt-6 grid max-w-2xl gap-3 sm:grid-cols-2">
              {heroServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <Check size={16} className="text-blue-600" />
                  {service}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
                Explore Our Projects
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="relative min-h-[470px] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90"
              alt="Modern architecture"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent" />

            <div className="absolute bottom-5 right-5 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur">
              <DraftingCompass size={38} className="text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* HERO FEATURES */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
        <div className="grid overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">
          {heroFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex gap-3 border-b border-slate-100 p-4 lg:border-b-0 lg:border-r"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <Icon size={19} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="text-sm font-bold">{feature.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {feature.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <SectionTitle
          title="Our Architecture & Design Services"
          description="End-to-end solutions that transform ideas into inspiring spaces."
          centered
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-base font-bold">{service.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.text}
                </p>

                <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Learn More
                  <ArrowRight size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <SectionTitle
          title="Featured Architecture Projects"
          action="View All Projects"
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-sm font-bold">{project.title}</h3>

                <p className="mt-1 text-xs font-medium text-blue-600">
                  {project.type}
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-500">
                  <span>{project.size}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY AND APPROACH */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid gap-5 p-6 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-black">Our Design Philosophy</h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                We believe great design is more than how a space looks—it is how
                it makes you feel and function better.
              </p>

              <div className="mt-5 space-y-4">
                {philosophy.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-3">
                      <Icon
                        size={20}
                        className="mt-1 shrink-0 text-blue-600"
                      />
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
            </div>

            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85"
              alt="Interior design philosophy"
              className="h-full min-h-[340px] w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid gap-5 p-6 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-black">Our Approach</h2>

              <div className="mt-5 space-y-4">
                {approach.map((item) => {
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
            </div>

            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85"
              alt="Architecture design approach"
              className="h-full min-h-[340px] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <SectionTitle
          title="Our Design & Build Process"
          description="A clear, collaborative process that ensures clarity at every step."
          centered
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {process.map((step) => (
            <article
              key={step.number}
              className="relative rounded-xl border border-slate-200 bg-white p-4 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white">
                {step.number}
              </div>

              <div className="mx-auto my-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <Ruler size={18} className="text-blue-600" />
              </div>

              <h3 className="text-sm font-bold">{step.title}</h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Built With Quality. Designed For Tomorrow."
            centered
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {sustainability.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
                    <Icon size={20} className="text-green-600" />
                  </div>

                  <h3 className="text-sm font-bold">{item.title}</h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          action="View All Testimonials"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="text-4xl font-black text-blue-600">“</div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.quote}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <h3 className="text-sm font-bold">{item.name}</h3>
                <p className="mt-1 text-xs text-slate-500">{item.role}</p>

                <div className="mt-3 flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-blue-600">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/20 px-5 py-6 text-center text-white lg:border-b-0 lg:border-r"
            >
              <p className="text-3xl font-black">{stat.number}</p>
              <p className="mt-1 text-xs text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl px-6 py-10 text-white md:px-10">
            <House className="absolute -bottom-12 -left-5 h-52 w-52 text-white/10" />
            <DraftingCompass className="absolute -bottom-12 right-0 h-48 w-48 text-white/10" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-black md:text-4xl">
                Ready to Design Your Dream Space?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
                Let&apos;s create spaces that inspire, perform and last a
                lifetime.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700">
                  Book a Consultation
                </button>

                <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold">
                  Explore Projects
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Architecture;