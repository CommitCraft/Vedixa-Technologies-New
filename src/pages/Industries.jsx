import React from "react";
import { Link } from "react-router-dom";
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
  MonitorSmartphone,
  PackageSearch,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Users,
} from "lucide-react";
import { industriesPageContent } from "../content/industriesData";

const {
  hero,
  sectionTitles,
  actions,
  heroFeatures,
  industries,
  capabilities,
  useCases,
  reasons,
  outcomes,
  brands,
} = industriesPageContent;

const iconMap = {
  Building2,
  Store,
  Factory,
  HeartPulse,
  GraduationCap,
  House,
  Truck,
  Landmark,
  Rocket,
  Cloud,
  Bot,
  ShieldCheck,
};

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
      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/50 to-blue-100/60">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              {hero.titleLine1}
              <span className="block text-blue-600">{hero.titleLine2}</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              {hero.description}
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
                {hero.primaryCta}
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                {hero.secondaryCta}
              </button>
            </div>
          </div>

          <div className="relative min-h-110 overflow-hidden rounded-3xl">
            {hero.images.map((image) => (
              <div key={image.alt} className={image.wrapperClass}>
                <img src={image.src} alt={image.alt} className={image.imageClass} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title={sectionTitles.industries.title}
            description={sectionTitles.industries.description}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || ShieldCheck;

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
                      {actions.industry}
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
            title={sectionTitles.capabilities.title}
            description={sectionTitles.capabilities.description}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = iconMap[item.icon] || ShieldCheck;

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
                      {actions.capability}
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
            title={sectionTitles.useCases.title}
            description={sectionTitles.useCases.description}
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
                    {actions.useCase}
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
          <h2 className="text-2xl font-black">{sectionTitles.expertise.title}</h2>

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
          <h2 className="text-2xl font-black">{sectionTitles.outcomes.title}</h2>

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
            title={sectionTitles.brands.title}
            description={sectionTitles.brands.description}
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
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <House className="absolute -bottom-10 -left-4 h-48 w-48 text-white/10" />
          <PackageSearch className="absolute -bottom-8 right-5 h-44 w-44 text-white/10" />

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
                to="/services"
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

export default Industries;