import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTASection({
  data,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-5 sm:px-5 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-800 via-blue-600 to-cyan-500 px-6 py-12 text-white md:px-10">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black md:text-4xl">
            {data.title}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100">
            {data.description}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to={data.primaryCTA.to}
              className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
            >
              {data.primaryCTA.label}
            </Link>

            <Link
              to={data.secondaryCTA.to}
              className="flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 text-sm font-bold transition hover:bg-white/10"
            >
              {data.secondaryCTA.label}

              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {LeftIcon && (
          <LeftIcon className="absolute -bottom-10 -left-3 h-44 w-44 text-white/10" />
        )}

        {RightIcon && (
          <RightIcon className="absolute -bottom-8 right-3 h-44 w-44 text-white/10" />
        )}
      </div>
    </section>
  );
}

export default CTASection;