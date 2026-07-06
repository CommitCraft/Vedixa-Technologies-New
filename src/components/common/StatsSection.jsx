function StatsSection({
  stats,
  dark = false,
  columns = "lg:grid-cols-5",
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-5 lg:px-8">
      <div
        className={`
          grid overflow-hidden rounded-2xl border
          sm:grid-cols-2
          ${columns}

          ${
            dark
              ? "border-white/10 bg-linear-to-br from-slate-950 via-blue-950 to-blue-700"
              : "border-slate-200 bg-white shadow-sm"
          }
        `}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={`
                flex min-h-30
                flex-col items-center justify-center
                gap-3
                border-b
                px-5 py-5
                text-center

                sm:flex-row
                sm:justify-start
                sm:gap-4
                sm:px-6
                sm:text-left

                lg:border-b-0

                ${
                  dark
                    ? "border-white/10 text-white"
                    : "border-slate-100"
                }

                ${
                  index !== stats.length - 1
                    ? "lg:border-r"
                    : ""
                }
              `}
            >
              {Icon && (
                <div
                  className={`
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full

                    ${
                      dark
                        ? "bg-white/10"
                        : "bg-blue-50"
                    }
                  `}
                >
                  <Icon
                    size={23}
                    className={
                      dark
                        ? "text-cyan-300"
                        : "text-blue-600"
                    }
                  />
                </div>
              )}

              <div className="min-w-0">
                <p
                  className={`
                    text-2xl font-black leading-none md:text-3xl
                    ${
                      dark
                        ? "text-white"
                        : "text-blue-600"
                    }
                  `}
                >
                  {stat.number}
                </p>

                <p
                  className={`
                    mt-2 text-xs font-medium leading-5 sm:text-sm
                    ${
                      dark
                        ? "text-blue-100"
                        : "text-slate-600"
                    }
                  `}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsSection;