function ProjectGrid({
  projects,
  columns = "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
}) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {projects.map((project) => (
        <article
          key={project.title}
          className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-4">
            {project.category && (
              <p className="text-xs font-semibold text-blue-600">
                {project.category}
              </p>
            )}

            <h3 className="mt-1 text-base font-bold text-slate-950">
              {project.title}
            </h3>

            {project.description && (
              <p className="mt-2 text-xs leading-5 text-slate-500">
                {project.description}
              </p>
            )}

            {project.subtitle && (
              <p className="mt-1 text-xs text-slate-500">
                {project.subtitle}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectGrid;