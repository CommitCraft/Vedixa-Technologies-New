function FeatureStrip({ items }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-5 sm:px-5 lg:px-8">
      <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`
                flex min-h-[105px]
                items-center gap-3
                border-b border-slate-100
                p-4
                lg:border-b-0
                ${
                  index !== items.length - 1
                    ? "lg:border-r"
                    : ""
                }
              `}
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
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeatureStrip;