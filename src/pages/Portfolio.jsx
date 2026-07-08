import React, {
  useMemo,
  useState,
} from "react";

import {
  ArrowRight,
  Check,
  House,
  MonitorSmartphone,
  Star,
} from "lucide-react";

import { Link } from "react-router-dom";

import CTASection from "../components/common/CTASection";
import SectionTitle from "../components/common/SectionTitle";
import StatsSection from "../components/common/StatsSection";

import {
  featuredCases,
  portfolioCTA,
  portfolioFilters,
  portfolioHero,
  portfolioProjects,
  portfolioStats,
  portfolioTestimonials,
  transformationSection,
} from "../content/portfolioData";


function Portfolio() {
  const [activeFilter, setActiveFilter] =
    useState("All Projects");


  /* =========================================================
     FILTER PROJECTS
  ========================================================= */

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => {
      if (activeFilter === "Software Products") {
        return [
          "SaaS Product",
          "Web Application",
          "Cloud Solution",
        ].includes(project.category);
      }

      if (activeFilter === "Web & Mobile Apps") {
        return [
          "Web Application",
          "Mobile App",
        ].includes(project.category);
      }

      if (activeFilter === "AI Automation") {
        return project.category === "AI Automation";
      }

      if (activeFilter === "Architecture") {
        return project.category.includes(
          "Architecture"
        );
      }

      if (activeFilter === "Interior Design") {
        return project.category === "Interior Design";
      }

      return true;
    });
  }, [activeFilter]);


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
              {portfolioHero.eyebrow}
            </p>


            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {portfolioHero.title}
            </h1>


            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              {portfolioHero.description}
            </p>


            {/* HERO HIGHLIGHTS */}

            <div className="mt-7 grid gap-4 sm:grid-cols-3">

              {portfolioHero.highlights.map((item) => {
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


            {/* CTA */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={portfolioHero.primaryCTA.to}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                {portfolioHero.primaryCTA.label}

                <ArrowRight size={17} />
              </a>


              <Link
                to={portfolioHero.secondaryCTA.to}
                className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {portfolioHero.secondaryCTA.label}
              </Link>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="relative min-h-96 overflow-hidden rounded-3xl sm:min-h-110">

            {/* ARCHITECTURE */}

            <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden rounded-3xl">

              <img
                src={portfolioHero.images.architecture}
                alt="Architecture project"
                className="h-full w-full object-cover"
              />

            </div>


            {/* DASHBOARD */}

            <div className="absolute left-[18%] top-10 w-[54%] overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-2xl">

              <img
                src={portfolioHero.images.dashboard}
                alt="Analytics dashboard"
                className="h-56 w-full rounded-xl object-cover sm:h-72"
              />

            </div>


            {/* MOBILE */}

            <div className="absolute bottom-5 left-0 w-[30%] overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl">

              <img
                src={portfolioHero.images.mobile}
                alt="Mobile application"
                className="h-44 w-full rounded-xl object-cover sm:h-56"
              />

            </div>


            {/* AI */}

            <div className="absolute bottom-3 right-[15%] w-[32%] overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl">

              <img
                src={portfolioHero.images.ai}
                alt="AI automation"
                className="h-36 w-full rounded-xl object-cover sm:h-44"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-5 lg:px-8">

        <div className="flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-3">

          {portfolioFilters.map((filter) => (

            <button
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                rounded-lg px-4 py-3
                text-sm font-semibold
                transition

                ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }
              `}
            >
              {filter}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          FEATURED CASE STUDIES
      ===================================================== */}

      <section
        id="case-studies"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8"
      >

        <SectionTitle
          eyebrow="Success Stories"
          title="Featured Case Studies"
          description="In-depth stories of how we built solutions that created real business impact."
        />


        <div className="grid gap-5 lg:grid-cols-3">

          {featuredCases.map((item) => (

            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>


              <div className="p-5">

                <p className="text-xs font-semibold text-blue-600">
                  {item.category}
                </p>


                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>


                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">

                  {item.stats.map((stat) => (

                    <div key={stat.label}>

                      <p className="text-lg font-black text-blue-600">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        {stat.label}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="Selected Work"
          title="Our Projects"
          description="A collection of software, AI and architecture projects delivered for businesses and individuals."
        />


        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProjects.map((project) => (

            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />

              </div>


              <div className="p-4">

                <p className="text-xs font-semibold text-blue-600">
                  {project.category}
                </p>


                <h3 className="mt-1 text-base font-bold text-slate-950">
                  {project.title}
                </h3>


                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {project.description}
                </p>


                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                >
                  View Case Study

                  <ArrowRight size={15} />
                </Link>

              </div>

            </article>

          ))}

        </div>


        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 py-16 text-center">

            <p className="text-sm font-medium text-slate-500">
              No projects found for this category.
            </p>

          </div>
        )}

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <StatsSection
        stats={portfolioStats}
        dark
        columns="lg:grid-cols-3 xl:grid-cols-6"
      />


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="Client Stories"
          title="What Our Clients Say"
          description="Trusted by startups, enterprises and industry leaders."
        />


        <div className="grid gap-5 lg:grid-cols-3">

          {portfolioTestimonials.map((item) => (

            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:shadow-lg"
            >

              <div className="text-4xl font-black text-blue-600">
                “
              </div>


              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.quote}
              </p>


              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                <div>

                  <h3 className="text-sm font-bold text-slate-950">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.role}
                  </p>

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


      {/* =====================================================
          TRANSFORMATION
      ===================================================== */}

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-5 lg:grid-cols-[0.72fr_1.4fr_0.72fr] lg:px-8">

        {/* HIGHLIGHTS */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5">

          <h2 className="text-2xl font-black text-slate-950">
            Project Highlights
          </h2>


          <p className="mt-2 text-sm text-slate-500">
            Real transformation. Real impact.
          </p>


          <div className="mt-5 space-y-3">

            {transformationSection.highlights.map((item) => (

              <div
                key={item}
                className="flex items-start gap-2 text-sm text-slate-600"
              >

                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>


        {/* BEFORE AFTER */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

          <div className="grid md:grid-cols-2">

            <TransformationCard
              data={transformationSection.before}
              variant="before"
            />


            <TransformationCard
              data={transformationSection.after}
              variant="after"
            />

          </div>

        </div>


        {/* OUTCOMES */}

        <div className="rounded-2xl border border-slate-200 bg-white p-5">

          <h2 className="text-2xl font-black text-blue-600">
            Key Outcomes
          </h2>


          <div className="mt-5 space-y-3">

            {transformationSection.outcomes.map((item) => (

              <div
                key={item}
                className="flex items-start gap-2 text-sm text-slate-600"
              >

                <Check
                  size={16}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection
        data={portfolioCTA}
        leftIcon={House}
        rightIcon={MonitorSmartphone}
      />

    </main>
  );
}


/* =========================================================
   TRANSFORMATION CARD
========================================================= */

function TransformationCard({
  data,
  variant,
}) {
  const labelStyle =
    variant === "after"
      ? "bg-blue-600"
      : "bg-slate-950/75";


  return (
    <div className="relative">

      <img
        src={data.image}
        alt={`${data.label} transformation`}
        className="h-72 w-full object-cover"
      />


      <span
        className={`
          absolute left-4 top-4
          rounded-full px-3 py-1
          text-xs font-semibold text-white
          ${labelStyle}
        `}
      >
        {data.label}
      </span>


      <div className="p-4">

        <p className="text-sm leading-6 text-slate-500">
          {data.description}
        </p>

      </div>

    </div>
  );
}


export default Portfolio;