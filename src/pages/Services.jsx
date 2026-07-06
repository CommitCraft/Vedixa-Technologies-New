import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Cloud,
  Code2,
  Globe2,
  House,
  LayoutDashboard,
  Palette,
  PanelsTopLeft,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Users,
  MonitorSmartphone,
} from "lucide-react";
import { servicesPageContent } from "../content/servicesData";

const {
  heroHighlights,
  serviceCategories,
  comprehensiveServices,
  advantages,
  processSteps,
  industryImpact,
  faqs,
} = servicesPageContent;

const iconMap = {
  Globe2,
  Smartphone,
  Code2,
  Palette,
  Cloud,
  PanelsTopLeft,
  Bot,
  LayoutDashboard,
  ShoppingCart,
  Building2,
  Sparkles,
};

function SectionTitle({ eyebrow, title, description, action }) {
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

function Services() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-linear-to-br from-white via-blue-50/40 to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-14">
          <div>
            <div className="mb-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
              Our Services
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl">
              Services That <span className="text-blue-600">Transform</span>
              <br />
              Businesses & Spaces
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              End-to-end digital, AI and architecture services that help
              businesses innovate, operate smarter and create inspiring spaces
              for the future.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                Explore All Services
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                Book a Consultation
              </button>
            </div>
          </div>

          <div className="relative min-h-95 overflow-hidden rounded-3xl">
            <div className="absolute right-0 top-0 h-full w-[72%] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"
                alt="Architecture service"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute left-0 bottom-10 w-[68%] overflow-hidden rounded-2xl border border-white/70 bg-white p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=90"
                alt="Software dashboard"
                className="h-72 w-full rounded-xl object-cover"
              />
            </div>

            <div className="absolute left-[40%] top-[45%] rounded-2xl bg-blue-600/90 px-5 py-4 text-white shadow-2xl">
              <div className="flex items-center gap-2 text-lg font-bold">
                <Bot size={24} />
                AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroHighlights.map((item) => (
            <div
              key={item.title}
              className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck size={19} className="text-blue-600" />
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
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle title="Our Service Categories" />

        <div className="grid gap-5 lg:grid-cols-3">
          {serviceCategories.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon className="text-blue-600" size={24} />
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <div className="mt-5 space-y-2">
                  {item.points.map((point) => (
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
                  src={item.image}
                  alt={item.title}
                  className="mt-5 h-44 w-full rounded-xl object-cover"
                />

                <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600">
                  {item.cta}
                  <ArrowRight size={16} />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle title="Our Comprehensive Services" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {comprehensiveServices.map((service) => {
              const Icon = iconMap[service.icon] || ShieldCheck;
            return (
              <article
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Icon size={20} className="text-blue-600" />
                </div>

                <h3 className="text-base font-bold">{service.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.text}
                </p>

                <button className="mt-4 text-sm font-semibold text-blue-600">
                  Learn More →
                </button>
              </article>
            );
          })}

          <article className="rounded-xl border border-slate-200 bg-white p-4 transition hover:shadow-lg">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
              <Users size={20} className="text-blue-600" />
            </div>

            <h3 className="text-base font-bold">Don&apos;t see what you need?</h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              We offer custom solutions tailored to your goals and business
              requirements.
            </p>

            <button className="mt-4 rounded-lg border border-blue-300 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
              Talk to an Expert
            </button>
          </article>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle title="Why Businesses Choose Vedixa" />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {advantages.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <ShieldCheck size={18} className="text-blue-600" />
              </div>
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* DELIVERY PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle title="Our Delivery Process" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <span className="text-xs font-black text-blue-600">
                {step.number}
              </span>

              <div className="my-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <Rocket size={18} className="text-blue-600" />
              </div>

              <h3 className="text-sm font-bold">{step.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* INDUSTRY IMPACT */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <SectionTitle
          title="Delivering Impact Across Industries"
          action="View More Case Studies"
        />

        <div className="grid gap-4 lg:grid-cols-4">
          {industryImpact.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  {item.text}
                </p>

                <div className="mt-4 flex items-end justify-between">
                  <p className="text-2xl font-black">{item.metric}</p>
                  <p className="text-xs text-right text-white/75">
                    {item.subMetric}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ + COMMITMENT */}
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-8 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionTitle title="Our Approach. Your Questions" />

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4"
              >
                <span className="text-sm font-medium">{faq}</span>
                <span className="text-xl font-light text-blue-600">+</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-black leading-tight text-slate-950">
            Your Vision.
            <br />
            <span className="text-blue-600">Our Commitment.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            We combine technology, creativity and industry expertise to deliver
            solutions that create measurable impact.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Innovation",
                text: "We stay ahead with future-ready thinking.",
              },
              {
                title: "Integrity",
                text: "Honest communication and transparent process.",
              },
              {
                title: "Excellence",
                text: "We deliver quality in everything we do.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-slate-50 p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <Check className="text-blue-600" size={18} />
                </div>
                <h3 className="text-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85"
            alt="Architecture blueprint"
            className="mt-6 h-56 w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Ready to Build What&apos;s Next?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              Let&apos;s turn your vision into a powerful digital product or
              inspiring space.
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

          <Building2 className="absolute -bottom-8 -left-3 h-48 w-48 text-white/10" />
          <Cloud className="absolute -bottom-8 right-3 h-48 w-48 text-white/10" />
        </div>
      </section>
          <section className="mx-auto max-w-7xl px-4 pb-10 pt-5 sm:px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-800 via-blue-600 to-cyan-500 px-6 py-12 text-white md:px-10">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Let&apos;s create your next solution
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              From software and automation to architecture and design, we combine strategy, delivery, and care in one place.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Schedule a Call
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                Why Vedixa
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <House className="absolute -bottom-10 -left-3 h-44 w-44 text-white/10" />
          <MonitorSmartphone className="absolute -bottom-8 right-3 h-44 w-44 text-white/10" />
        </div>
      </section>
    </main>
  );
}

export default Services;