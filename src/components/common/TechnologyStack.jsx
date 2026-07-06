import { Code2 } from "lucide-react";

function TechnologyStack({
  title = "Technologies & Tools We Work With",
  items,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
        {title}
      </p>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="flex flex-wrap justify-center gap-3">
          {items.map((tech) => (
            <div
              key={tech}
              className="flex min-h-24 w-26.25 flex-col items-center justify-center rounded-xl px-3 py-3 text-center transition duration-200 hover:bg-blue-50 sm:w-28.75 lg:w-30"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-blue-600">
                <Code2 size={20} />
              </div>

              <span className="text-[11px] font-semibold leading-4 text-slate-700">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyStack;