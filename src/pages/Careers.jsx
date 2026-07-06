import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  GraduationCap,
  HeartHandshake,
  House,
  Laptop,
  Lightbulb,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Workflow,
} from "lucide-react";
import { careersPageContent } from "../content/careersData";

const {
  heroHighlights,
  stats,
  cultureValues,
  whyWorkWithUs,
  jobs,
  hiringSteps,
  testimonials,
  lifeImages,
  internshipPoints,
} = careersPageContent;

function SectionTitle({
  title,
  description,
  action,
}) {
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

function Careers() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/50 to-blue-100/60">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Build Your Career
              <br />
              with <span className="text-blue-600">Vedixa</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              Join a collaborative team of innovators, designers and builders
              working at the intersection of technology, architecture and
              design to create solutions that shape a better tomorrow.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
                      <Icon size={17} className="text-blue-600" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700">
                View Open Roles
                <ArrowRight size={17} />
              </button>

              <button className="rounded-lg border border-blue-300 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
                Apply Now
              </button>
            </div>
          </div>

          <div className="grid min-h-107.5 grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
              alt="Vedixa workspace"
              className="h-52 w-full rounded-2xl object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85"
              alt="Team collaboration"
              className="h-52 w-full rounded-2xl object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85"
              alt="Design discussion"
              className="h-52 w-full rounded-2xl object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85"
              alt="Architecture team"
              className="h-52 w-full rounded-2xl object-cover"
            />
          </div>
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
          <span className="relative mt-4 h-1 w-8 rounded-full bg-cyan-400" />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CULTURE */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Our Culture & Values"
            description="We believe great work happens in an environment of trust, respect and collaboration."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {cultureValues.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Icon size={20} className="text-blue-600" />
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

      {/* WHY WORK WITH US */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Why Work with Us"
            description="We invest in our people and provide the environment to do their best work."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {whyWorkWithUs.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Icon size={20} className="text-blue-600" />
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

      {/* OPEN POSITIONS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Open Positions"
            description="We invest in our people and provide the environment to do their best work."
            action="View All Open Roles"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {jobs.map((job) => {
              const Icon = job.icon;

              return (
                <article
                  key={job.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    <Icon size={20} className="text-blue-600" />
                  </div>

                  <h3 className="text-lg font-bold">{job.title}</h3>

                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-500">
                    <span>{job.type}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {job.description}
                  </p>

                  <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    View Details
                    <ArrowRight size={15} />
                  </button>
                </article>
              );
            })}

            <article className="rounded-xl border border-blue-200 bg-blue-50/60 p-5">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                <Users size={20} className="text-blue-600" />
              </div>

              <h3 className="text-lg font-bold text-blue-700">
                Don&apos;t see the right role?
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                We are always looking for talented individuals. Send us your
                resume and let&apos;s connect.
              </p>

              <button className="mt-4 rounded-lg border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-700">
                Send Your Resume
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* HIRING PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Our Hiring Process"
            description="Explore exciting opportunities and be a part of our mission."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {hiringSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
                  {step.number}
                </div>

                <h3 className="mt-4 text-sm font-bold text-blue-700">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOICES */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Voices from Vedixa"
            description="Hear from our team about their journey and experience."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-3xl font-black text-blue-600">“</div>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.quote}
                </p>

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <h3 className="text-sm font-bold">{item.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIFE AT VEDIXA */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <SectionTitle
            title="Life at Vedixa"
            description="Moments that inspire collaboration, creativity and connection."
          />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {lifeImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`Life at Vedixa ${index + 1}`}
                className="h-40 w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* INTERNSHIPS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[0.9fr_1.1fr] md:p-6">
          <div>
            <h2 className="text-2xl font-black">
              Internships & Fresher Opportunities
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Kick-start your career with hands-on experience and mentorship.
            </p>

            <div className="mt-5 space-y-3">
              {internshipPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <Check size={16} className="text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-linear-to-br from-blue-50 to-blue-100 p-6">
            <div className="grid items-center gap-5 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="flex min-h-52 items-center justify-center">
                <GraduationCap className="h-28 w-28 text-blue-500" />
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-950">
                  Build. Learn. Grow.
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We welcome passionate students and freshers who are eager to
                  learn, contribute and grow with us.
                </p>

                <button className="mt-5 flex items-center gap-2 rounded-lg border border-blue-300 bg-white px-5 py-3 text-sm font-semibold text-blue-700">
                  Explore Internships
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <Rocket className="absolute -bottom-10 right-10 h-44 w-44 text-white/10" />
          <Laptop className="absolute -bottom-8 left-5 h-40 w-40 text-white/10" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">
                Ready to Build the Future Together?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
                Send us your resume and let&apos;s create something
                extraordinary.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700">
                Submit Your Resume
              </button>

              <button className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold">
                Explore Open Roles
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
              Grow with a team that builds boldly
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
              If you&apos;re passionate about creating meaningful work and learning fast, Vedixa is a place to grow.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Apply Now
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
              >
                Meet the Culture
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

export default Careers;