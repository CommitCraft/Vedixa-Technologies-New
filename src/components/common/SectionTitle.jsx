import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function SectionTitle({
  eyebrow,
  title,
  description,
  action,
  actionTo = "/",
  centered = false,
}) {
  return (
    <div
      className={`mb-6 ${
        centered
          ? "text-center"
          : "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      }`}
    >
      <div>
        {eyebrow && (
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-blue-600">
            {eyebrow}
          </p>
        )}

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
          {title}
        </h2>

        {description && (
          <p
            className={`mt-2 text-sm leading-6 text-slate-500 ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {action && (
        <Link
          to={actionTo}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          {action}
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}

export default SectionTitle;