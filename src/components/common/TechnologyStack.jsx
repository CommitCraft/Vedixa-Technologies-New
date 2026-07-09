import React from "react";


function TechnologyStack({
  title = "Technologies & Tools We Work With",
  items = [],
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-5 lg:px-8">

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="mb-6">

        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Technology Stack
        </p>

        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
          {title}
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
          Modern technologies and tools selected to build secure, scalable and
          maintainable digital solutions.
        </p>

      </div>


      {/* =====================================================
          TECHNOLOGY CONTAINER
      ===================================================== */}

      <div className="rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 p-4 sm:p-5 md:p-6">

        <div
          className="
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3

            md:grid-cols-4

            lg:grid-cols-6

            xl:grid-cols-8
          "
        >

          {items.map((tech) => {
            const Logo = tech.logo;

            return (
              <article
                key={tech.name}
                className="
                  group
                  flex
                  min-h-27
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-4
                  text-center
                  transition
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:bg-blue-50/60
                  hover:shadow-lg
                "
              >

                {/* =================================================
                    LOGO
                ================================================= */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-50
                    transition
                    duration-300

                    group-hover:bg-blue-100
                  "
                >

                  {Logo && (
                    <Logo
                      size={28}
                      className="
                        text-slate-700
                        transition
                        duration-300

                        group-hover:scale-110
                        group-hover:text-blue-600
                      "
                    />
                  )}

                </div>


                {/* =================================================
                    NAME
                ================================================= */}

                <h3 className="mt-3 text-xs font-semibold leading-4 text-slate-700">
                  {tech.name}
                </h3>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}


export default TechnologyStack;