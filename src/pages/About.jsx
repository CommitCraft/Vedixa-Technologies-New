import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  MessageSquareText,
  Rocket,
} from "lucide-react";

import CTASection from "../components/common/CTASection";
import FeatureStrip from "../components/common/FeatureStrip";
import SectionTitle from "../components/common/SectionTitle";
import StatsSection from "../components/common/StatsSection";

import {
  aboutCapabilities,
  aboutCTA,
  aboutHero,
  aboutHighlights,
  aboutStats,
  commitmentSection,
  companyStory,
  coreValues,
  missionVision,
  whyChooseUs,
} from "../content/aboutData";


function About() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/50 to-blue-100/60">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">

          {/* HERO CONTENT */}

          <div className="relative z-10">

            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              {aboutHero.eyebrow}
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {aboutHero.title}

              <span className="block text-blue-600">
                {aboutHero.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              {aboutHero.description}
            </p>


            {/* HERO POINTS */}

            <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {aboutHero.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2"
                >
                  <Check
                    size={17}
                    className="shrink-0 text-blue-600"
                  />

                  <span>{point}</span>
                </div>
              ))}
            </div>


            {/* HERO CTA */}

            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                to={aboutHero.primaryCTA.to}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                {aboutHero.primaryCTA.label}

                <ArrowRight size={17} />
              </Link>

              <Link
                to={aboutHero.secondaryCTA.to}
                className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {aboutHero.secondaryCTA.label}
              </Link>

            </div>
          </div>


          {/* HERO VISUAL */}

          <div className="relative min-h-90 sm:min-h-105 lg:min-h-120">

            <div className="absolute left-0 top-0 h-[82%] w-[82%] overflow-hidden rounded-3xl">
              <img
                src={aboutHero.mainImage}
                alt="Vedixa team collaboration"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-[58%] overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-2xl sm:p-3">
              <img
                src={aboutHero.secondaryImage}
                alt="Design and architecture planning"
                className="h-48 w-full rounded-xl object-cover sm:h-56"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <FeatureStrip items={aboutHighlights} />


      {/* =====================================================
          COMPANY STORY
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 lg:px-8">

        <div className="grid items-center gap-8 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="overflow-hidden rounded-3xl">
            <img
              src={companyStory.image}
              alt="Vedixa Technologies team"
              className="h-100 w-full object-cover lg:h-125"
            />
          </div>


          {/* CONTENT */}

          <div>

            <SectionTitle
              eyebrow={companyStory.eyebrow}
              title={companyStory.title}
            />

            <div className="space-y-4">
              {companyStory.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-7 text-slate-600 md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>


            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Explore What We Do

              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="grid gap-5 md:grid-cols-2">

          {missionVision.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-br from-white to-blue-50/60 p-6 md:p-8"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon
                    size={25}
                    className="text-blue-600"
                  />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
                  {item.eyebrow}
                </p>

                <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <Icon className="absolute -bottom-10 -right-8 h-40 w-40 text-blue-600/5" />

              </article>
            );
          })}

        </div>
      </section>


      {/* =====================================================
          COMMITMENT
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">

          <h2 className="text-2xl font-black leading-tight text-slate-950 md:text-3xl">
            {commitmentSection.title}

            <br />

            <span className="text-blue-600">
              {commitmentSection.highlight}
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            {commitmentSection.description}
          </p>


          {/* VALUES */}

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

            {commitmentSection.values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
                    <Icon
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>

                </article>
              );
            })}

          </div>


          {/* LARGE IMAGE */}

          <img
            src={commitmentSection.image}
            alt="Architecture and design planning"
            className="mt-6 h-75 w-full rounded-2xl object-cover sm:h-85 md:h-100 lg:h-115"
          />

        </div>
      </section>


      {/* =====================================================
          CORE VALUES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="What Defines Us"
          title="Our Core Values"
          description="The principles that guide our decisions, our work and our relationships."
          centered
        />


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                  <Icon
                    size={21}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="mt-4 text-base font-bold text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {value.text}
                </p>

              </article>
            );
          })}

        </div>
      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-slate-50 to-blue-50/60 p-5 md:p-7">

          <SectionTitle
            eyebrow="Our Expertise"
            title="Multidisciplinary Capabilities"
            description="Technology, intelligence, cloud and architecture capabilities working together."
          />


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {aboutCapabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon
                      size={21}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-5 lg:px-8">

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* CONTENT */}

          <div>

            <SectionTitle
              eyebrow={whyChooseUs.eyebrow}
              title={whyChooseUs.title}
              description={whyChooseUs.description}
            />


            <div className="grid gap-3 sm:grid-cols-2">

              {whyChooseUs.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-3"
                >

                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <Check
                      size={14}
                      className="text-blue-600"
                    />
                  </div>

                  <span className="text-sm leading-6 text-slate-600">
                    {point}
                  </span>

                </div>
              ))}

            </div>
          </div>


          {/* IMAGE */}

          <div className="overflow-hidden rounded-3xl">
            <img
              src={whyChooseUs.image}
              alt="Vedixa collaborative approach"
              className="h-100 w-full object-cover lg:h-120"
            />
          </div>

        </div>
      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <StatsSection stats={aboutStats} />


      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection
        data={aboutCTA}
        leftIcon={MessageSquareText}
        rightIcon={Rocket}
      />

    </main>
  );
}

export default About;