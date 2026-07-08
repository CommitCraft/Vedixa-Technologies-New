import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Check,
  GraduationCap,
  Laptop,
  Rocket,
} from "lucide-react";

import CTASection from "../components/common/CTASection";
import FeatureStrip from "../components/common/FeatureStrip";
import ProcessSection from "../components/common/ProcessSection";
import SectionTitle from "../components/common/SectionTitle";
import StatsSection from "../components/common/StatsSection";

import {
  careerCTA,
  careerHighlights,
  careersHero,
  careerStats,
  careerTestimonials,
  cultureValues,
  hiringSteps,
  internshipSection,
  jobs,
  lifeAtVedixa,
  whyWorkWithUs,
} from "../content/careersData";


function Careers() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/50 to-blue-100/60">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">

          {/* CONTENT */}

          <div className="relative z-10">

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">

              {careersHero.title}

              <span className="block text-blue-600">
                {careersHero.highlight}
              </span>

            </h1>


            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              {careersHero.description}
            </p>


            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={careersHero.primaryCTA.to}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                {careersHero.primaryCTA.label}

                <ArrowRight size={17} />
              </a>


              <Link
                to={careersHero.secondaryCTA.to}
                className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {careersHero.secondaryCTA.label}
              </Link>

            </div>

          </div>


          {/* IMAGE GRID */}

          <div className="grid min-h-90 grid-cols-2 gap-3 sm:min-h-105">

            {careersHero.images.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl"
              >

                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-44 w-full object-cover transition duration-500 hover:scale-105 sm:h-52"
                />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <FeatureStrip items={careerHighlights} />


      {/* =====================================================
          STATS
      ===================================================== */}

      <StatsSection
        stats={careerStats}
        dark
        columns="lg:grid-cols-3 xl:grid-cols-6"
      />


      {/* =====================================================
          CULTURE VALUES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7">

          <SectionTitle
            eyebrow="Our Culture"
            title="Our Culture & Values"
            description="We believe great work happens in an environment of trust, respect and collaboration."
          />


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

            {cultureValues.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">

                    <Icon
                      size={20}
                      className="text-blue-600"
                    />

                  </div>


                  <h3 className="text-sm font-bold text-slate-950">
                    {item.title}
                  </h3>


                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY WORK WITH US
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 md:p-7">

          <SectionTitle
            eyebrow="Why Vedixa"
            title="Why Work with Us"
            description="We invest in our people and provide the environment to do their best work."
          />


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

            {whyWorkWithUs.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">

                    <Icon
                      size={20}
                      className="text-blue-600"
                    />

                  </div>


                  <h3 className="text-sm font-bold">
                    {item.title}
                  </h3>


                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          OPEN POSITIONS
      ===================================================== */}

      <section
        id="open-positions"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8"
      >

        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7">

          <SectionTitle
            eyebrow="Join Our Team"
            title="Open Positions"
            description="Explore exciting opportunities and find the role that matches your skills and ambitions."
          />


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {jobs.map((job) => {
              const Icon = job.icon;

              return (
                <article
                  key={job.title}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">

                    <Icon
                      size={20}
                      className="text-blue-600"
                    />

                  </div>


                  <h3 className="text-lg font-bold text-slate-950">
                    {job.title}
                  </h3>


                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">

                    <span>{job.type}</span>

                    <span>•</span>

                    <span>{job.location}</span>

                  </div>


                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {job.description}
                  </p>


                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Apply Now

                    <ArrowRight size={15} />
                  </Link>

                </article>
              );
            })}


            {/* OPEN APPLICATION */}

            <article className="rounded-xl border border-blue-200 bg-blue-50/60 p-5">

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white">

                <Laptop
                  size={20}
                  className="text-blue-600"
                />

              </div>


              <h3 className="text-lg font-bold text-blue-700">
                Don't See the Right Role?
              </h3>


              <p className="mt-3 text-sm leading-6 text-slate-600">
                We are always looking for talented individuals. Send us your
                resume and let's connect.
              </p>


              <Link
                to="/contact"
                className="mt-4 inline-flex rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-700"
              >
                Send Your Resume
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          HIRING PROCESS
      ===================================================== */}

      <ProcessSection
        eyebrow="How We Hire"
        title="Our Hiring Process"
        description="A simple and transparent process designed to understand your skills, aspirations and potential."
        steps={hiringSteps}
      />


      {/* =====================================================
          TEAM VOICES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="Team Stories"
          title="Voices from Vedixa"
          description="Hear from our team about their journey and experience."
        />


        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

          {careerTestimonials.map((item) => (

            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >

              <div className="text-4xl font-black text-blue-600">
                “
              </div>


              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.quote}
              </p>


              <div className="mt-5 border-t border-slate-200 pt-4">

                <h3 className="text-sm font-bold text-slate-950">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {item.role}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          LIFE AT VEDIXA
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="Inside Vedixa"
          title="Life at Vedixa"
          description="Moments that inspire collaboration, creativity and connection."
        />


        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">

          {lifeAtVedixa.map((image, index) => (

            <div
              key={image}
              className="group overflow-hidden rounded-xl"
            >

              <img
                src={image}
                alt={`Life at Vedixa ${index + 1}`}
                className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
              />

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          INTERNSHIPS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 md:grid-cols-[0.9fr_1.1fr] md:p-7">

          {/* CONTENT */}

          <div>

            <h2 className="text-2xl font-black text-slate-950 md:text-3xl">
              {internshipSection.title}
            </h2>


            <p className="mt-2 text-sm leading-6 text-slate-500">
              {internshipSection.description}
            </p>


            <div className="mt-5 space-y-3">

              {internshipSection.points.map((point) => (

                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >

                  <Check
                    size={16}
                    className="shrink-0 text-blue-600"
                  />

                  <span>{point}</span>

                </div>

              ))}

            </div>

          </div>


          {/* CARD */}

          <div className="rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-6">

            <div className="grid items-center gap-5 sm:grid-cols-[0.8fr_1.2fr]">

              <div className="flex min-h-52 items-center justify-center">

                <GraduationCap className="h-28 w-28 text-blue-500" />

              </div>


              <div>

                <h3 className="text-3xl font-black text-slate-950">
                  {internshipSection.cardTitle}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {internshipSection.cardDescription}
                </p>


                <Link
                  to={internshipSection.CTA.to}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-700"
                >
                  {internshipSection.CTA.label}

                  <ArrowRight size={15} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection
        data={careerCTA}
        leftIcon={Laptop}
        rightIcon={Rocket}
      />

    </main>
  );
}

export default Careers;