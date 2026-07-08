import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  Code2,
  House,
  MonitorSmartphone,
} from "lucide-react";

import CTASection from "../components/common/CTASection";
import SectionTitle from "../components/common/SectionTitle";
import StatsSection from "../components/common/StatsSection";

import {
  architectureFlow,
  architectureSteps,
  architectureSupportingBlocks,
  lifecycleTools,
  qualityCards,
  stackChoicePoints,
  stackGroups,
  technologiesCTA,
  technologiesHero,
  technologiesStats,
  technologyHeroFeatures,
} from "../content/technologiesData";


/* =========================================================
   TECHNOLOGY BADGE
========================================================= */

function TechBadge({
  name,
  logo: Logo,
}) {
  return (
    <div
      className="
        group
        flex min-h-24
        flex-col items-center justify-center
        gap-3
        rounded-xl
        border border-slate-200
        bg-white
        px-3 py-4
        text-center
        transition duration-300
        hover:-translate-y-1
        hover:border-blue-300
        hover:bg-blue-50/50
        hover:shadow-md
      "
    >
      {Logo && (
        <div className="flex h-10 w-10 items-center justify-center">
          <Logo
            size={28}
            className="text-slate-700 transition duration-300 group-hover:text-blue-600"
          />
        </div>
      )}

      <span className="text-xs font-semibold leading-4 text-slate-700">
        {name}
      </span>
    </div>
  );
}


/* =========================================================
   LIFECYCLE TOOL
========================================================= */

function LifecycleTool({
  name,
  logo: Logo,
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-3 transition duration-300 hover:border-blue-200 hover:bg-blue-50/50">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center">
        {Logo && (
          <Logo
            size={19}
            className="text-slate-700"
          />
        )}
      </div>

      <span className="text-xs font-medium leading-4 text-slate-700">
        {name}
      </span>
    </div>
  );
}


/* =========================================================
   PAGE
========================================================= */

function Technologies() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/50 to-blue-100/60">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">

          {/* HERO CONTENT */}

          <div className="relative z-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              {technologiesHero.eyebrow}
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {technologiesHero.title}

              <span className="block text-blue-600">
                {technologiesHero.highlight}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              {technologiesHero.description}
            </p>


            {/* CTA BUTTONS */}

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={technologiesHero.primaryCTA.to}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                {technologiesHero.primaryCTA.label}

                <ArrowRight size={17} />
              </a>

              <Link
                to={technologiesHero.secondaryCTA.to}
                className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {technologiesHero.secondaryCTA.label}
              </Link>
            </div>


            {/* HERO FEATURES */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {technologyHeroFeatures.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon
                        size={18}
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


          {/* HERO VISUAL */}

          <div className="relative min-h-90 overflow-hidden rounded-3xl sm:min-h-105 lg:min-h-120">
            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-blue-50 to-blue-100" />


            {/* CODE IMAGE */}

            <div className="absolute right-0 top-6 w-[78%] overflow-hidden rounded-3xl border border-white/70 bg-white p-3 shadow-2xl">
              <img
                src={technologiesHero.images.code}
                alt="Code editor"
                className="h-72 w-full rounded-2xl object-cover sm:h-96"
              />
            </div>


            {/* MOBILE */}

            <div className="absolute bottom-8 left-6 w-[34%] overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-xl">
              <img
                src={technologiesHero.images.mobile}
                alt="Mobile application"
                className="h-44 w-full rounded-xl object-cover sm:h-56"
              />
            </div>


            {/* DASHBOARD */}

            <div className="absolute right-6 top-20 w-[46%] overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-xl sm:right-10">
              <img
                src={technologiesHero.images.dashboard}
                alt="Dashboard interface"
                className="h-36 w-full rounded-xl object-cover sm:h-48"
              />
            </div>


            {/* API BADGE */}

            <div className="absolute left-[44%] top-[58%] rounded-2xl bg-blue-700 px-5 py-4 text-white shadow-2xl">
              <div className="flex items-center gap-2 text-lg font-bold">
                <Code2 size={22} />

                API
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}

      <section
        id="technology-stack"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7">
          <SectionTitle
            eyebrow="Technology Stack"
            title="Technology Stack We Work With"
            description="Modern technologies, platforms and tools selected according to project requirements, performance goals and long-term scalability."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stackGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition duration-300 hover:border-blue-200 hover:shadow-lg"
                >

                  {/* HEADER */}

                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                      <Icon
                        size={20}
                        className="text-blue-600"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-950">
                        {group.title}
                      </h3>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {group.items.length} technologies & tools
                      </p>
                    </div>
                  </div>


                  {/* TECH LOGOS */}

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {group.items.map((item) => (
                      <TechBadge
                        key={item.name}
                        name={item.name}
                        logo={item.logo}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* =====================================================
          ARCHITECTURE APPROACH
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">

          {/* APPROACH STEPS */}

          <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
            <SectionTitle
              eyebrow="Architecture"
              title="Our Solution Architecture Approach"
              description="We follow a cloud-native, modular and secure architecture approach to deliver solutions that are robust, scalable and easy to evolve."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {architectureSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                      <Icon
                        size={20}
                        className="text-blue-600"
                      />
                    </div>

                    <p className="text-sm font-semibold leading-5 text-slate-800">
                      {step.title}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>


          {/* ARCHITECTURE FLOW */}

          <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
            <SectionTitle
              eyebrow="System Flow"
              title="How the Architecture Connects"
              description="A layered architecture designed for flexibility, performance and maintainability."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {architectureFlow.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                  >
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Icon
                        size={20}
                        className="text-blue-600"
                      />
                    </div>

                    <p className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </p>
                  </article>
                );
              })}
            </div>


            {/* SUPPORTING BLOCKS */}

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {architectureSupportingBlocks.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-xl border border-dashed border-blue-300 bg-blue-50/50 p-4"
                  >
                    <div className="mb-3 flex items-center gap-2 text-sm font-bold text-blue-700">
                      <Icon size={18} />

                      {item.title}
                    </div>

                    <p className="text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          QUALITY + STACK CHOICE
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* QUALITY */}

          <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
            <SectionTitle
              eyebrow="Engineering Quality"
              title="Built for Quality, Security & Scalability"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {qualityCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Icon
                        size={20}
                        className="text-blue-600"
                      />
                    </div>

                    <h3 className="text-base font-bold text-slate-950">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>


          {/* STACK CHOICE */}

          <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
            <SectionTitle
              eyebrow="Technology Decisions"
              title="How We Choose the Right Stack"
            />

            <div className="space-y-3">
              {stackChoicePoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-lg bg-slate-50 p-3"
                >
                  <Check
                    className="mt-0.5 shrink-0 text-blue-600"
                    size={18}
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    {point}
                  </span>
                </div>
              ))}
            </div>


            {/* DECORATIVE VISUAL */}

            <div className="mt-6 rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-6">
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


      {/* =====================================================
          PROJECT LIFECYCLE TOOLS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            eyebrow="Project Lifecycle"
            title="Tools We Use Across the Project Lifecycle"
            description="A practical toolchain for planning, design, development, quality assurance, deployment and monitoring."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {lifecycleTools.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <Icon
                        size={18}
                        className="text-blue-600"
                      />
                    </div>

                    <h3 className="text-sm font-bold leading-5 text-slate-950">
                      {group.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <LifecycleTool
                        key={item.name}
                        name={item.name}
                        logo={item.logo}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <StatsSection
        stats={technologiesStats}
      />


      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection
        data={technologiesCTA}
        leftIcon={House}
        rightIcon={MonitorSmartphone}
      />

    </main>
  );
}


export default Technologies;