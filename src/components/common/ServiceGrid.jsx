function ServiceGrid({
  items,
  columns = "lg:grid-cols-3 xl:grid-cols-5",
}) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${columns}`}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.title}
            className="group rounded-xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          >
            {Icon && (
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 transition group-hover:bg-blue-100">
                <Icon
                  size={20}
                  className="text-blue-600"
                />
              </div>
            )}

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
  );
}

export default ServiceGrid;