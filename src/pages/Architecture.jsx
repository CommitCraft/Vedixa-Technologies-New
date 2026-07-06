import React from "react";
import { Link } from "react-router-dom";
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
  MonitorSmartphone,
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
import { architecturePageContent } from "../content/architectureData";

const {
  hero,
  sectionTitles,
  actions,
  philosophyImage,
  approachImage,
  heroServices,
  heroFeatures,
  services,
  projects,
  philosophy,
  approach,
  process,
  sustainability,
  testimonials,
  stats,
} = architecturePageContent;

const iconMap = {
  Palette,
  Users,
  Leaf,
  Gem,
  Clock3,
  Lightbulb,
  DraftingCompass,
  Hammer,
  Compass,
  Sparkles,
  Eye,
  Waves,
  TreePine,
  ShieldCheck,
};

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
      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/50 to-blue-100/60">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              {hero.title}
              <br />
              {hero.titleAccent}
              <span className="block text-blue-600">{hero.titleStrong}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              {hero.description}
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
                {hero.primaryCta}
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
                {hero.secondaryCta}
              </button>
            </div>
          </div>

          <div className="relative min-h-117.5 overflow-hidden rounded-3xl">
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-r from-white/20 via-transparent to-transparent" />

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
            const Icon = iconMap[feature.icon] || ShieldCheck;

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
          title={sectionTitles.services.title}
          description={sectionTitles.services.description}
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
                  {actions.service}
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
          title={sectionTitles.projects.title}
          action={sectionTitles.projects.action}
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
              <h2 className="text-2xl font-black">{sectionTitles.philosophy.title}</h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {sectionTitles.philosophy.description}
              </p>

              <div className="mt-5 space-y-4">
                {philosophy.map((item) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
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
              src={philosophyImage.src}
              alt={philosophyImage.alt}
              className="h-full min-h-85 w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid gap-5 p-6 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-black">{sectionTitles.approach.title}</h2>

              <div className="mt-5 space-y-4">
                {approach.map((item) => {
              const Icon = iconMap[item.icon] || ShieldCheck;
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
              src={approachImage.src}
              alt={approachImage.alt}
              className="h-full min-h-85 w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <SectionTitle
          title={sectionTitles.process.title}
          description={sectionTitles.process.description}
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
            title={sectionTitles.sustainability.title}
            centered
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {sustainability.map((item) => {
              const Icon = iconMap[item.icon] || ShieldCheck;

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
          title={sectionTitles.testimonials.title}
          action={sectionTitles.testimonials.action}
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
<section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
  <div className="overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-br from-slate-950 via-blue-950 to-blue-700 shadow-2xl shadow-blue-950/10">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`
            relative
            flex min-h-35
            flex-col items-center justify-center
            px-5 py-6 text-center
            text-white

            border-b border-white/10

            sm:min-h-33.75

            lg:border-b
            lg:border-white/10

            xl:border-b-0

            ${index !== stats.length - 1 ? "xl:border-r xl:border-white/10" : ""}
          `}
        >
          {/* DECORATIVE GLOW */}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/[0.04] to-transparent opacity-0 transition duration-300 hover:opacity-100" />

          {/* NUMBER */}
          <p className="relative text-3xl font-black leading-none tracking-tight text-white md:text-4xl">
            {stat.number}
          </p>

          {/* LABEL */}
          <p className="relative mt-3 max-w-[150px] text-xs font-medium leading-5 text-blue-100 sm:text-sm">
            {stat.label}
          </p>

          {/* BOTTOM ACCENT */}
          <span className="relative mt-2 h-1 w-8 rounded-full bg-cyan-400" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl px-6 py-10 text-white md:px-10">
            <House className="absolute -bottom-12 -left-5 h-52 w-52 text-white/10" />
            <DraftingCompass className="absolute -bottom-12 right-0 h-48 w-48 text-white/10" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-black md:text-4xl">
                {sectionTitles.cta.title}
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
                {sectionTitles.cta.description}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700">
                  {sectionTitles.cta.primaryCta}
                </button>

                <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold">
                  {sectionTitles.cta.secondaryCta}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
          <section className="mx-auto max-w-7xl px-4 pb-10 pt-5 sm:px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-800 via-blue-600 to-cyan-500 px-6 py-12 text-white md:px-10">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              {sectionTitles.secondaryCta.title}
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              {sectionTitles.secondaryCta.description}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                {sectionTitles.secondaryCta.primaryCta}
              </Link>

              <Link
                to="/portfolio"
                className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                {sectionTitles.secondaryCta.secondaryCta}
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

export default Architecture;