import React from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Building2,
  Check,
  Cloud,
  House,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";

import CTASection from "../components/common/CTASection";
import FeatureStrip from "../components/common/FeatureStrip";
import ProcessSection from "../components/common/ProcessSection";
import ProjectGrid from "../components/common/ProjectGrid";
import SectionTitle from "../components/common/SectionTitle";
import ServiceGrid from "../components/common/ServiceGrid";
import StatsSection from "../components/common/StatsSection";
import TechnologyStack from "../components/common/TechnologyStack";

import {
  architectureCapabilities,
  architectureProjects,
  deliveryProcess,
  digitalProducts,
  homeCTA,
  homeHero,
  homeHighlights,
  homeStats,
  integratedBenefits,
  integratedProcess,
  integratedProcessImage,
  softwareServices,
  softwareServicesVisual,
  technologyStack,
} from "../content/homeData";

function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/50 to-blue-100/60">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          {/* CONTENT */}

          <div className="relative z-10">
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {homeHero.title}

              <span className="block text-blue-600">
                {homeHero.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              {homeHero.description}
            </p>

            {/* SERVICES */}

            <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {homeHero.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2"
                >
                  <Check
                    size={17}
                    className="shrink-0 text-blue-600"
                  />

                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* CTA BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={homeHero.primaryCTA.to}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                {homeHero.primaryCTA.label}

                <ArrowRight size={17} />
              </Link>

              <Link
                to={homeHero.secondaryCTA.to}
                className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {homeHero.secondaryCTA.label}
              </Link>
            </div>
          </div>

          {/* HERO IMAGES */}

          <div className="relative min-h-90 sm:min-h-105 lg:min-h-120">
            {/* ARCHITECTURE IMAGE */}

            <div className="absolute right-0 top-0 h-full w-[82%] overflow-hidden rounded-3xl sm:w-[74%]">
              <img
                src={homeHero.architectureImage}
                alt="Modern architecture design"
                className="h-full w-full object-cover"
              />
            </div>

            {/* SOFTWARE IMAGE */}

            <div className="absolute bottom-4 left-0 w-[82%] overflow-hidden rounded-2xl border border-white/70 bg-white p-2 shadow-2xl sm:w-[72%] sm:p-3">
              <img
                src={homeHero.softwareImage}
                alt="Business software dashboard"
                className="h-52 w-full rounded-xl object-cover sm:h-64 lg:h-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE STRIP
      ===================================================== */}

      <FeatureStrip items={homeHighlights} />

      {/* =====================================================
          IT & SOFTWARE SERVICES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-linear-to-r from-white to-blue-50/70 p-5 md:p-7">
          <SectionTitle
            title="IT & Software Solutions"
            action="View All Services"
            actionTo="/services"
          />

          <div className="grid gap-5 xl:grid-cols-[1.4fr_0.6fr]">
            {/* SERVICES GRID */}

            <ServiceGrid
              items={softwareServices}
              columns="lg:grid-cols-3 xl:grid-cols-5"
            />

            {/* SERVICES VISUAL */}

            <div className="relative min-h-90 overflow-hidden rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-4 sm:min-h-107.5 sm:p-5">
              <img
                src={softwareServicesVisual.image}
                alt="Software dashboard interface"
                className="h-full w-full rounded-xl object-cover shadow-xl"
              />

              <div className="absolute bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-2xl">
                <Cloud size={30} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DIGITAL PRODUCTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
        <SectionTitle
          title="Software & Digital Products We Build"
          action="View All Projects"
          actionTo="/portfolio"
        />

        <ProjectGrid
          projects={digitalProducts}
          columns="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        />
      </section>

      {/* =====================================================
          ARCHITECTURE + INTEGRATED APPROACH
      ===================================================== */}

      <section className="mx-auto grid max-w-7xl items-stretch gap-5 px-4 py-8 sm:px-5 lg:grid-cols-2 lg:px-8">
        {/* ARCHITECTURE CARD */}

        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle title="Architecture & Interior Design" />

          {/* CAPABILITIES */}

          <div className="mb-5 flex flex-wrap gap-3">
            {architectureCapabilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-2 text-xs text-slate-600"
              >
                <Building2
                  size={15}
                  className="shrink-0 text-blue-600"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* ARCHITECTURE PROJECTS */}

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {architectureProjects.map((project) => (
              <article
                key={project.title}
                className="group"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-2 text-sm font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {project.subtitle}
                </p>
              </article>
            ))}
          </div>

          <Link
            to="/architecture"
            className="mx-auto mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            View All Architecture Projects

            <ArrowRight size={16} />
          </Link>
        </div>

        {/* INTEGRATED APPROACH */}

        <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-5 md:p-6">
          <SectionTitle title="Integrated Design & Build Approach" />

          {/* PROCESS FLOW */}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {integratedProcess.map((item, index) => (
              <div
                key={item}
                className="relative text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Layers3
                    size={20}
                    className="text-blue-600"
                  />
                </div>

                <p className="mt-2 text-[11px] font-semibold leading-4 text-slate-700">
                  {item}
                </p>

                {index < integratedProcess.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="absolute -right-2 top-4 hidden text-blue-500 md:block"
                  />
                )}
              </div>
            ))}
          </div>

          {/* BENEFITS */}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {integratedBenefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <Check
                  size={17}
                  className="shrink-0 text-blue-600"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* PROCESS IMAGE */}

          <img
            src={integratedProcessImage}
            alt="Architectural design process"
            className="mt-6 h-72 w-full flex-1 rounded-xl object-cover opacity-95 md:h-80"
          />
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <StatsSection stats={homeStats} />

      {/* =====================================================
          TECHNOLOGY STACK
      ===================================================== */}

      <TechnologyStack
        title="Technologies & Tools We Work With"
        items={technologyStack}
      />

      {/* =====================================================
          DELIVERY PROCESS
      ===================================================== */}

      <ProcessSection
        eyebrow="Our Process"
        title="A Structured Process for Exceptional Results"
        description="We follow a proven agile process to ensure quality, transparency and delivered value at every step."
        steps={deliveryProcess}
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection
        data={homeCTA}
        leftIcon={House}
        rightIcon={MonitorSmartphone}
      />
    </main>
  );
}

export default Home;