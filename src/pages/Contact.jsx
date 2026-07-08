import React, { useState } from "react";

import {
  ArrowRight,
  Check,
  Clock3,
  House,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Navigation,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";

import CTASection from "../components/common/CTASection";
import SectionTitle from "../components/common/SectionTitle";

import {
  contactCTA,
  contactFormOptions,
  contactHero,
  contactInformation,
  helpOptions,
  locationSection,
  socialChannels,
  supportPoints,
} from "../content/contactData";


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


  /* =========================================================
     FORM HANDLERS
  ========================================================= */

  const updateField = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox"
        ? checked
        : value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const submissionData = {
      ...formData,
      selectedHelp,
    };

    console.log("Contact form:", submissionData);

    setSubmitted(true);
  };


  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-slate-100 bg-linear-to-br from-white via-blue-50/50 to-blue-100/60">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-5 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">

          {/* HERO CONTENT */}

          <div className="relative z-10">

            <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-blue-600">
              {contactHero.eyebrow}
            </p>


            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">

              {contactHero.title}

              <span className="block text-blue-600">
                {contactHero.highlight}
              </span>

            </h1>


            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              {contactHero.description}
            </p>


            {/* HERO BUTTONS */}

            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={contactHero.primaryCTA.to}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                {contactHero.primaryCTA.label}

                <ArrowRight size={17} />
              </a>


              <a
                href={contactHero.secondaryCTA.href}
                className="flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-blue-50"
              >

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-white">
                  <Phone
                    size={17}
                    className="text-blue-600"
                  />
                </span>

                {contactHero.secondaryCTA.label}

              </a>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div className="relative min-h-90 overflow-hidden rounded-3xl sm:min-h-107.5">

            <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-blue-100" />


            {/* CONTACT CARD */}

            <div className="absolute left-[6%] top-7 w-[68%] overflow-hidden rounded-2xl border border-white bg-white p-3 shadow-2xl sm:left-[10%] sm:w-[66%]">

              <div className="rounded-xl bg-slate-50 p-4 sm:p-5">

                <div className="flex items-center justify-between">

                  <h3 className="text-lg font-black">
                    Get in Touch
                  </h3>


                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 sm:h-16 sm:w-16">

                    <MessageCircle size={28} />

                  </div>

                </div>


                <div className="mt-5 space-y-3">

                  {[
                    {
                      label: "Message",
                      icon: MessageCircle,
                    },
                    {
                      label: "Call",
                      icon: Phone,
                    },
                    {
                      label: "Email",
                      icon: Mail,
                    },
                    {
                      label: "Location",
                      icon: MapPin,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
                      >

                        <Icon
                          size={17}
                          className="text-blue-600"
                        />

                        <span className="text-sm font-semibold">
                          {item.label}
                        </span>

                      </div>
                    );
                  })}

                </div>

              </div>

            </div>


            {/* OFFICE IMAGE */}

            <div className="absolute right-4 top-5 h-48 w-[35%] overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl sm:right-5 sm:h-56">

              <img
                src={contactHero.officeImage}
                alt="Vedixa office"
                className="h-full w-full rounded-xl object-cover"
              />

            </div>


            {/* LOCATION CARD */}

            <div className="absolute bottom-5 right-5 w-[44%] rounded-2xl border border-white bg-white p-3 shadow-xl sm:right-8 sm:w-[42%]">

              <div className="relative h-36 overflow-hidden rounded-xl bg-blue-50 sm:h-44">

                <div className="absolute inset-0 opacity-30">

                  <div className="h-full w-full bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-size-[28px_28px]" />

                </div>


                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">

                  <MapPin size={25} />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FORM + CONTACT INFO
      ===================================================== */}

      <section
        id="contact-form"
        className="scroll-mt-24 mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8"
      >

        {/* ===================================================
            FORM
        =================================================== */}

        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7">

          <SectionTitle
            title="Send Us a Message"
            description="Fill out the form below and we'll get back to you shortly."
          />


          <form
            onSubmit={handleSubmit}
            className="mt-6"
          >

            <div className="grid gap-4 md:grid-cols-2">

              {/* NAME */}

              <label className="block">

                <span className="sr-only">
                  Full name
                </span>


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


              {/* EMAIL */}

              <label className="block">

                <span className="sr-only">
                  Email address
                </span>


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


              {/* PHONE */}

              <label className="block">

                <span className="sr-only">
                  Phone number
                </span>


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
                    placeholder="Phone Number"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />

                </div>

              </label>


              {/* SERVICE */}

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

                  <option value="">
                    Select a service
                  </option>


                  {contactFormOptions.services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}

                </select>

              </label>

            </div>


            {/* PROJECT TYPE */}

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

                <option value="">
                  Select project type
                </option>


                {contactFormOptions.projectTypes.map((type) => (
                  <option
                    key={type}
                    value={type}
                  >
                    {type}
                  </option>
                ))}

              </select>

            </label>


            {/* MESSAGE */}

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
                placeholder="Tell us about your project, goals, timeline and requirements..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
              />

            </label>


            {/* CONSENT */}

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
                I agree to the Privacy Policy and Terms of Service.
              </span>

            </label>


            {/* SUBMIT */}

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Send Message

                <ArrowRight size={16} />
              </button>


              <div className="flex items-center gap-2 text-xs text-slate-500">

                <ShieldCheck
                  size={17}
                  className="text-blue-600"
                />

                Your information is secure and never shared.

              </div>

            </div>


            {/* SUCCESS MESSAGE */}

            {submitted && (
              <div className="mt-5 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">

                <Check size={17} />

                Thank you. Your message has been recorded.

              </div>
            )}

          </form>

        </div>


        {/* ===================================================
            CONTACT INFORMATION
        =================================================== */}

        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7">

          <SectionTitle
            title="Contact Information"
            description="Reach us through the channel that works best for you."
          />


          <div className="grid gap-4 sm:grid-cols-2">

            {contactInformation.map((item) => (

              <ContactInfoCard
                key={item.title}
                item={item}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HELP OPTIONS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <SectionTitle
          eyebrow="How We Can Help"
          title="Choose What You Need"
          description="Choose the area that best matches your needs so we can connect you with the right expert."
        />


        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {helpOptions.map((item) => {
            const Icon = item.icon;

            const active =
              selectedHelp === item.title;

            return (
              <button
                type="button"
                key={item.title}
                onClick={() => {
                  setSelectedHelp(item.title);

                  setFormData((current) => ({
                    ...current,
                    service: item.title,
                  }));
                }}
                className={`
                  relative rounded-2xl border
                  p-5 text-left
                  transition duration-300

                  ${
                    active
                      ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-600/10"
                      : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                  }
                `}
              >

                <span
                  className={`
                    absolute right-4 top-4
                    h-4 w-4 rounded-full border

                    ${
                      active
                        ? "border-blue-600 bg-blue-600"
                        : "border-slate-300 bg-white"
                    }
                  `}
                />


                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">

                  <Icon
                    size={22}
                    className="text-blue-600"
                  />

                </div>


                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>


                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

              </button>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">

          <div className="grid lg:grid-cols-[0.4fr_1fr]">

            {/* LOCATION CONTENT */}

            <div className="p-6 md:p-8">

              <h2 className="text-2xl font-black text-slate-950 md:text-3xl">
                {locationSection.title}
              </h2>


              <p className="mt-4 text-sm leading-7 text-slate-500">
                {locationSection.description}
              </p>


              <a
                href={locationSection.directionsUrl}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Get Directions

                <Navigation size={16} />
              </a>

            </div>


            {/* MAP VISUAL */}

            <div className="relative min-h-82.5 overflow-hidden bg-blue-50">

              <div className="absolute inset-0 opacity-40">

                <div className="h-full w-full bg-[linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] bg-size-[42px_42px]" />

              </div>


              <div className="absolute inset-0 bg-linear-to-br from-cyan-50/50 via-transparent to-blue-100/50" />


              {/* OFFICE CARD */}

              <div className="absolute left-1/2 top-1/2 w-82.5 max-w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white bg-white p-4 shadow-2xl">

                <div className="flex gap-4">

                  <img
                    src={locationSection.image}
                    alt={locationSection.officeName}
                    className="h-20 w-24 rounded-xl object-cover"
                  />


                  <div>

                    <h3 className="font-bold text-slate-950">
                      {locationSection.officeName}
                    </h3>


                    <p className="mt-2 text-sm leading-6 text-slate-500">

                      {locationSection.address.map((line) => (
                        <React.Fragment key={line}>

                          {line}

                          <br />

                        </React.Fragment>
                      ))}

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


      {/* =====================================================
          SUPPORT PROMISE
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7">

          <SectionTitle
            eyebrow="Our Promise"
            title="We're Here, When You Need Us"
            description="We value your time and ensure quick, clear and reliable communication."
          />


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {supportPoints.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="flex gap-4 rounded-xl p-4 transition hover:bg-blue-50/60"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50">

                    <Icon
                      size={21}
                      className="text-blue-600"
                    />

                  </div>


                  <div>

                    <h3 className="text-sm font-bold text-slate-950">
                      {item.title}
                    </h3>


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


      {/* =====================================================
          SOCIAL CHANNELS
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

        <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-7">

          <SectionTitle
            eyebrow="Stay Connected"
            title="Connect with Us"
            description="Reach out through your preferred channel."
          />


          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {socialChannels.map((channel) => (

              <a
                href={channel.href}
                key={channel.title}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">

                  {channel.symbol}

                </div>


                <div className="min-w-0">

                  <h3 className="text-sm font-bold text-slate-950">
                    {channel.title}
                  </h3>


                  <p className="mt-1 truncate text-xs text-slate-500">
                    {channel.handle}
                  </p>

                </div>

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <CTASection
        data={contactCTA}
        leftIcon={House}
        rightIcon={MonitorSmartphone}
      />

    </main>
  );
}


/* =========================================================
   CONTACT INFO CARD
========================================================= */

function ContactInfoCard({ item }) {
  const iconMap = {
    phone: Phone,
    email: Mail,
    location: MapPin,
    hours: Clock3,
  };

  const Icon =
    iconMap[item.type] || MessageCircle;


  return (
    <article className="rounded-xl border border-slate-200 p-5 transition duration-300 hover:border-blue-200 hover:shadow-md">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">

        <Icon
          size={22}
          className="text-blue-600"
        />

      </div>


      <h3 className="mt-4 text-lg font-bold text-slate-950">
        {item.title}
      </h3>


      {item.href ? (
        <a
          href={item.href}
          className="mt-2 block font-bold text-blue-600"
        >
          {item.value}
        </a>
      ) : (
        item.value && (
          <p className="mt-2 font-bold text-slate-950">
            {item.value}
          </p>
        )
      )}


      {item.lines && (
        <p className="mt-2 text-sm leading-6 text-slate-600">

          {item.lines.map((line) => (
            <React.Fragment key={line}>

              {line}

              <br />

            </React.Fragment>
          ))}

        </p>
      )}


      {item.description && (
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {item.description}
        </p>
      )}


      {item.badge && (
        <span className="mt-4 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {item.badge}
        </span>
      )}

    </article>
  );
}


export default Contact;