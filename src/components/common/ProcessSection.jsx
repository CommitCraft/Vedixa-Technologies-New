import { Rocket } from "lucide-react";

function ProcessSection({
  eyebrow,
  title,
  description,
  steps,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
  {/* HEADER */}
  <div className="mb-7 max-w-3xl">
    {eyebrow && (
      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
        {eyebrow}
      </p>
    )}

    <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950">
      {title}
    </h2>

    <p className="mt-3 text-sm leading-6 text-slate-500">
      {description}
    </p>
  </div>

  {/* STEPS GRID */}
  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
    {steps.map((step) => {
      const Icon = step.icon || Rocket;

      return (
        <article
          key={step.number}
          className="relative rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
        >
          <span className="text-xs font-black text-blue-600">
            {step.number}
          </span>

          <div className="my-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
            <Icon
              size={19}
              className="text-blue-600"
            />
          </div>

          <h3 className="text-sm font-bold text-slate-950">
            {step.title}
          </h3>

          <p className="mt-2 text-xs leading-5 text-slate-500">
            {step.description}
          </p>
        </article>
      );
    })}
  </div>
</section>
  );
}

export default ProcessSection;