import React, { useState } from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  Clock3,
  Code2,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Timer,
  User,
  Users,
} from "lucide-react";

const helpOptions = [
  {
    title: "Software Development",
    text: "Custom web, mobile and enterprise software tailored to your business.",
    icon: Code2,
  },
  {
    title: "AI Automation",
    text: "Automate workflows, integrate AI solutions and improve operational efficiency.",
    icon: Bot,
  },
  {
    title: "Architecture & Interior",
    text: "Innovative architectural designs and inspiring interior spaces.",
    icon: Building2,
  },
  {
    title: "Partnership",
    text: "Explore partnerships, alliances and business collaboration opportunities.",
    icon: Handshake,
  },
  {
    title: "Careers",
    text: "Join our team of innovators and help build the future with us.",
    icon: BriefcaseBusiness,
  },
];

const supportPoints = [
  {
    title: "24-Hour Response",
    text: "We respond to all inquiries within 24 business hours.",
    icon: Timer,
  },
  {
    title: "Project Consultation",
    text: "Free consultation to understand your goals and challenges.",
    icon: MessageCircle,
  },
  {
    title: "Confidential & Secure",
    text: "Your ideas and information are always protected.",
    icon: ShieldCheck,
  },
  {
    title: "On-Time & Reliable",
    text: "We respect deadlines and commit to quality.",
    icon: Clock3,
  },
];

const socialChannels = [
  {
    title: "LinkedIn",
    handle: "/vedixa-technologies",
    symbol: "in",
  },
  {
    title: "Facebook",
    handle: "/vedixatechnologies",
    symbol: "f",
  },
  {
    title: "Instagram",
    handle: "@vedixa.technologies",
    symbol: "◎",
  },
  {
    title: "X (Twitter)",
    handle: "@vedixa_tech",
    symbol: "X",
  },
  {
    title: "YouTube",
    handle: "/VedixaTechnologies",
    symbol: "▶",
  },
];

function Contact() {
  const [selectedHelp, setSelectedHelp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    message: "",
    consent: false,
  });

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    console.log("Contact form:", {
      ...formData,
      selectedHelp,
    });
  };

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-blue-50/40 to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-14">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-blue-600">
              Contact Us
            </p>

            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Let&apos;s Talk About
              <span className="block text-blue-600">Your Project</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Have an idea, a challenge or a vision for the future? We&apos;re
              here to help. Our experts in software development, AI automation,
              architecture and design are ready to listen and build the right
              solution for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Book a Free Consultation
                <ArrowRight size={17} />
              </a>

              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-blue-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white">
                  <Phone size={17} className="text-blue-600" />
                </span>
                Talk to an Expert
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100" />

            <div className="absolute left-[10%] top-7 w-[66%] overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-2xl">
              <div className="rounded-xl bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-black">Get in Touch</h3>

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                    <MessageCircle size={30} />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["Message", MessageCircle],
                    ["Call", Phone],
                    ["Email", Mail],
                    ["Location", MapPin],
                  ].map(([label, Icon]) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
                    >
                      <Icon size={17} className="text-blue-600" />
                      <span className="text-sm font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-5 top-5 h-56 w-[35%] overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85"
                alt="Vedixa office"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div className="absolute bottom-5 right-8 w-[42%] rounded-2xl border border-white bg-white p-3 shadow-xl">
              <div className="relative h-44 overflow-hidden rounded-xl bg-blue-50">
                <div className="absolute inset-0 opacity-30">
                  <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:28px_28px]" />
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <MapPin size={25} />
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-xl">
              <Phone size={24} />
            </div>

            <div className="absolute right-[27%] top-28 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-xl">
              <Mail size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* FORM AND INFO */}
      <section
        id="contact-form"
        className="mx-auto grid max-w-7xl gap-5 px-5 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8"
      >
        {/* FORM */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-2xl font-black md:text-3xl">
            Send Us a Message
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Fill out the form below and we&apos;ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="sr-only">Full name</span>

                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={updateField}
                    placeholder="Full Name*"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </label>

              <label className="block">
                <span className="sr-only">Email</span>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={updateField}
                    placeholder="Email Address*"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </label>

              <label className="block">
                <span className="sr-only">Phone number</span>

                <div className="relative">
                  <Phone
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={updateField}
                    placeholder="Phone Number*"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-bold text-slate-700">
                  Service Needed*
                </span>

                <select
                  required
                  name="service"
                  value={formData.service}
                  onChange={updateField}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                >
                  <option value="">Select a service</option>
                  <option>Software Development</option>
                  <option>AI & Automation</option>
                  <option>Cloud & DevOps</option>
                  <option>UI/UX Design</option>
                  <option>Architecture Design</option>
                  <option>Interior Design</option>
                  <option>Other</option>
                </select>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold text-slate-700">
                Project Type*
              </span>

              <select
                required
                name="projectType"
                value={formData.projectType}
                onChange={updateField}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              >
                <option value="">Select project type</option>
                <option>New Project</option>
                <option>Existing Product Improvement</option>
                <option>Consultation</option>
                <option>Maintenance & Support</option>
                <option>Architecture Project</option>
                <option>Interior Design Project</option>
              </select>
            </label>

            <label className="mt-4 block">
              <span className="mb-2 block text-xs font-bold text-slate-700">
                Message*
              </span>

              <textarea
                required
                name="message"
                value={formData.message}
                onChange={updateField}
                rows={6}
                placeholder="Tell us about your project, goals, timeline and any specific requirements..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              />
            </label>

            <label className="mt-4 flex items-start gap-3">
              <input
                required
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={updateField}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600"
              />

              <span className="text-xs leading-5 text-slate-500">
                I agree to the{" "}
                <a href="#" className="font-semibold text-blue-600">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="font-semibold text-blue-600">
                  Terms of Service
                </a>
                .
              </span>
            </label>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Send Message
                <ArrowRight size={16} />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck size={17} className="text-blue-600" />
                Your information is secure and never shared.
              </div>
            </div>

            {submitted && (
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                <Check size={17} />
                Thank you. Your message has been recorded.
              </div>
            )}
          </form>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
          <h2 className="text-2xl font-black md:text-3xl">
            Contact Information
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-slate-200 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Phone size={22} className="text-blue-600" />
              </div>

              <h3 className="mt-4 text-lg font-bold">Call Us</h3>

              <a
                href="tel:+911234567890"
                className="mt-2 block text-lg font-black text-slate-950"
              >
                +91 12345 67890
              </a>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Mon – Sat, 9:00 AM – 7:00 PM
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Mail size={22} className="text-blue-600" />
              </div>

              <h3 className="mt-4 text-lg font-bold">Email Us</h3>

              <a
                href="mailto:info@vedixa.com"
                className="mt-2 block font-bold text-blue-600"
              >
                info@vedixa.com
              </a>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                We respond within 24 business hours.
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <MapPin size={22} className="text-blue-600" />
              </div>

              <h3 className="mt-4 text-lg font-bold">Our Office</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Vedixa Technologies
                <br />
                Indore, Madhya Pradesh
                <br />
                India
              </p>

              <button className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
                Get Directions
                <ArrowRight size={15} />
              </button>
            </article>

            <article className="rounded-xl border border-slate-200 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                <Clock3 size={22} className="text-blue-600" />
              </div>

              <h3 className="mt-4 text-lg font-bold">Business Hours</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Mon – Sat: 9:00 AM – 7:00 PM
                <br />
                Sunday: Closed
              </p>

              <span className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                IST – India Standard Time
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* HELP OPTIONS */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-black md:text-3xl">
            How Can We Help You?
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Choose the area that best matches your needs so we can connect you
            with the right expert.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {helpOptions.map((item) => {
            const Icon = item.icon;
            const active = selectedHelp === item.title;

            return (
              <button
                type="button"
                key={item.title}
                onClick={() => setSelectedHelp(item.title)}
                className={`relative rounded-2xl border p-5 text-left transition ${
                  active
                    ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-600/10"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                }`}
              >
                <span
                  className={`absolute right-4 top-4 h-4 w-4 rounded-full border ${
                    active
                      ? "border-blue-600 bg-blue-600"
                      : "border-slate-300 bg-white"
                  }`}
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Icon size={22} className="text-blue-600" />
                </div>

                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid lg:grid-cols-[0.4fr_1fr]">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-black">Our Location</h2>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Visit our office and meet our team in person. We&apos;d love to
                meet you, understand your vision and discuss how we can work
                together to build the future.
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white">
                Get Directions
                <Navigation size={16} />
              </button>
            </div>

            <div className="relative min-h-[330px] overflow-hidden bg-blue-50">
              <div className="absolute inset-0 opacity-40">
                <div className="h-full w-full bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-[size:42px_42px]" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-blue-100/50" />

              <div className="absolute left-1/2 top-1/2 w-[330px] max-w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white bg-white p-4 shadow-2xl">
                <div className="flex gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
                    alt="Vedixa Technologies office"
                    className="h-20 w-24 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-bold">Vedixa Technologies</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Indore, Madhya Pradesh
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-red-500 text-white shadow-lg">
                <MapPin size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT PROMISE */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-black md:text-3xl">
              We&apos;re Here, When You Need Us
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              We value your time and ensure quick, clear and reliable
              communication.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportPoints.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="flex gap-4 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">
                    <Icon size={21} className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-black md:text-3xl">
              Connect with Us
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Reach out through your preferred channel.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {socialChannels.map((channel) => (
              <a
                href="#"
                key={channel.title}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
                  {channel.symbol}
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-bold">{channel.title}</h3>
                  <p className="mt-1 truncate text-xs text-slate-500">
                    {channel.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-4 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-6 py-10 text-white md:px-10">
          <Building2 className="absolute -bottom-10 -left-4 h-48 w-48 text-white/10" />
          <MonitorGraphic />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black md:text-4xl">
                Ready to Build Something Amazing?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100">
                Let&apos;s turn your ideas into powerful software, intelligent
                systems and inspiring spaces.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact-form"
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700"
              >
                Book a Free Consultation
              </a>

              <a
                href="/services"
                className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold"
              >
                Explore Our Services
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MonitorGraphic() {
  return (
    <div className="absolute -bottom-8 right-4 hidden h-40 w-52 rounded-2xl border border-white/20 bg-white/10 p-3 lg:block">
      <div className="h-full rounded-xl bg-white/10 p-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span className="h-2 w-2 rounded-full bg-white/60" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-14 rounded-lg bg-white/20" />
          <div className="h-14 rounded-lg bg-white/20" />
          <div className="h-14 rounded-lg bg-white/20" />
        </div>

        <div className="mt-3 h-8 rounded-lg bg-white/20" />
      </div>
    </div>
  );
}

export default Contact;