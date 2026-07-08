import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  Cloud,
  House,
  MonitorSmartphone,
  Users,
} from "lucide-react";

import CTASection from "../components/common/CTASection";
import ProcessSection from "../components/common/ProcessSection";
import SectionTitle from "../components/common/SectionTitle";

import {
  comprehensiveServices,
  industryImpact,
  serviceAdvantages,
  serviceCategories,
  serviceCommitment,
  serviceFaqs,
  serviceHighlights,
  serviceProcess,
  servicesCTA,
  servicesHero,
} from "../content/servicesData";


function Services() {
  const [openFaq, setOpenFaq] = useState(null);


  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/40 to-slate-50">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-16">

          {/* HERO CONTENT */}

          <div className="relative z-10">

            <div className="mb-5 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
              {servicesHero.eyebrow}
            </div>


            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">

              {servicesHero.title}{" "}

              <span className="text-blue-600">
                {servicesHero.highlight}
              </span>

              <span className="block">
                {servicesHero.secondLine}
              </span>

            </h1>


            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              {servicesHero.description}
            </p>


            {/* HERO BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={servicesHero.primaryCTA.to}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                {servicesHero.primaryCTA.label}

                <ArrowRight size={17} />
              </a>


              <Link
                to={servicesHero.secondaryCTA.to}
                className="inline-flex items-center rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                {servicesHero.secondaryCTA.label}
              </Link>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="relative min-h-90 overflow-hidden rounded-3xl sm:min-h-105 lg:min-h-120">

            {/* ARCHITECTURE */}

            <div className="absolute right-0 top-0 h-full w-[72%] overflow-hidden rounded-3xl">

              <img
                src={servicesHero.images.architecture}
                alt="Architecture service"
                className="h-full w-full object-cover"
              />

            </div>


            {/* SOFTWARE */}

            <div className="absolute bottom-10 left-0 w-[68%] overflow-hidden rounded-2xl border border-white/70 bg-white p-3 shadow-2xl">

              <img
                src={servicesHero.images.dashboard}
                alt="Software dashboard"
                className="h-56 w-full rounded-xl object-cover sm:h-72"
              />

            </div>


            {/* AI BADGE */}

            <div className="absolute left-[40%] top-[45%] rounded-2xl bg-blue-600/90 px-5 py-4 text-white shadow-2xl">

              <div className="flex items-center gap-2 text-lg font-bold">

                <Bot size={24} />

                AI

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HERO HIGHLIGHTS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-5 sm:px-5 lg:px-8">

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {serviceHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex min-h-25 items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">

                  <Icon
                    size={19}
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

              </article>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          SERVICE CATEGORIES
      ===================================================== */}

      <section
        id="service-categories"
        className="scroll-mt-24 mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8"
      >

        <SectionTitle
          eyebrow="What We Do"
          title="Our Service Categories"
          description="Three integrated service areas designed to solve business, technology and design challenges."
        />


        <div className="grid gap-5 lg:grid-cols-3">

          {serviceCategories.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">

                  <Icon
                    className="text-blue-600"
                    size={24}
                  />

                </div>


                <h3 className="text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>


                <div className="mt-5 space-y-2">

                  {item.points.map((point) => (

                    <div
                      key={point}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >

                      <Check
                        size={15}
                        className="shrink-0 text-blue-600"
                      />

                      <span>{point}</span>

                    </div>

                  ))}

                </div>


                <div className="mt-5 overflow-hidden rounded-xl">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>


                <Link
                  to={item.cta.to}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                >
                  {item.cta.label}

                  <ArrowRight size={16} />
                </Link>

              </article>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          COMPREHENSIVE SERVICES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="Full-Service Capability"
          title="Our Comprehensive Services"
          description="A complete range of technology, automation and design capabilities."
        />


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {comprehensiveServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >

                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">

                  <Icon
                    size={20}
                    className="text-blue-600"
                  />

                </div>


                <h3 className="text-base font-bold text-slate-950">
                  {service.title}
                </h3>


                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {service.text}
                </p>


                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600"
                >
                  Learn More

                  <ArrowRight size={14} />
                </Link>

              </article>
            );
          })}


          {/* CUSTOM SERVICE */}

          <article className="rounded-xl border border-blue-200 bg-blue-50/60 p-4">

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white">

              <Users
                size={20}
                className="text-blue-600"
              />

            </div>


            <h3 className="text-base font-bold text-blue-700">
              Don't See What You Need?
            </h3>


            <p className="mt-2 text-sm leading-6 text-slate-600">
              We offer custom solutions tailored to your goals and business requirements.
            </p>


            <Link
              to="/contact"
              className="mt-4 inline-flex rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-700"
            >
              Talk to an Expert
            </Link>

          </article>

        </div>

      </section>


      {/* =====================================================
          ADVANTAGES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="Why Vedixa"
          title="Why Businesses Choose Vedixa"
        />


        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {serviceAdvantages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">

                  <Icon
                    size={18}
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

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <ProcessSection
        eyebrow="How We Deliver"
        title="Our Delivery Process"
        description="A clear process that keeps delivery transparent, efficient and focused on outcomes."
        steps={serviceProcess}
      />


      {/* =====================================================
          INDUSTRY IMPACT
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="Real Results"
          title="Delivering Impact Across Industries"
          description="Solutions built around measurable business and user outcomes."
        />


        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

          {industryImpact.map((item) => (

            <article
              key={item.title}
              className="group relative overflow-hidden rounded-2xl"
            >

              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />


              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent" />


              <div className="absolute inset-x-0 bottom-0 p-5 text-white">

                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>


                <p className="mt-2 text-sm leading-6 text-white/80">
                  {item.text}
                </p>


                <div className="mt-4 flex items-end justify-between gap-3">

                  <p className="text-2xl font-black">
                    {item.metric}
                  </p>


                  <p className="text-right text-xs text-white/75">
                    {item.subMetric}
                  </p>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* =====================================================
          FAQ + COMMITMENT
      ===================================================== */}

      <section className="mx-auto grid max-w-7xl items-stretch gap-5 px-4 py-8 sm:px-5 lg:grid-cols-2 lg:px-8">

        {/* FAQ */}

        <div className="h-full">

          <SectionTitle
            eyebrow="Common Questions"
            title="Our Approach. Your Questions"
          />


          <div className="space-y-3">

            {serviceFaqs.map((faq, index) => {
              const isOpen =
                openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >

                    <span className="text-sm font-medium text-slate-800">
                      {faq.question}
                    </span>


                    <span
                      className={`text-xl font-light text-blue-600 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-45"
                          : ""
                      }`}
                    >
                      +
                    </span>

                  </button>


                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 py-4">

                      <p className="text-sm leading-6 text-slate-500">
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>


        {/* COMMITMENT */}

        <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 md:p-6">

          <h2 className="text-2xl font-black leading-tight text-slate-950 md:text-3xl">

            {serviceCommitment.title}

            <br />

            <span className="text-blue-600">
              {serviceCommitment.highlight}
            </span>

          </h2>


          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            {serviceCommitment.description}
          </p>


          {/* VALUES */}

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

            {serviceCommitment.values.map((item) => (

              <article
                key={item.title}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">

                  <Check
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

            ))}

          </div>


          {/* LARGE IMAGE */}

          <div className="mt-6 flex-1 overflow-hidden rounded-xl">

            <img
              src={serviceCommitment.image}
              alt="Architecture planning and design process"
              className="h-75 w-full rounded-xl object-cover sm:h-85 md:h-100 lg:h-115"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection
        data={servicesCTA}
        leftIcon={Building2}
        rightIcon={Cloud}
      />

    </main>
  );
}


export default Services;