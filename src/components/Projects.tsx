import Image from "next/image";
import { projects } from "@/data/projects";
import AutoScrollRail from "./AutoScrollRail";

export default function Projects() {
  const shouldAutoScroll = projects.length > 4;

  return (
    <section id="projects" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="theme-subtitle-blush text-sm sm:text-base">My Creations 🪼</p>
          <h2 className="text-3xl font-bold theme-title-soft-pink sm:text-4xl lg:text-5xl">Projects</h2>
          <p className="mt-4 text-sm theme-subtitle-blush sm:text-base">
            Things I&apos;ve built with passion and curiosity ✨
          </p>
        </div>

        {shouldAutoScroll ? (
          <AutoScrollRail
            items={projects}
            getKey={(project) => project.title}
            className="pb-4"
            trackClassName="gap-4 sm:gap-6"
            renderItem={(project) => (
              <article className="group h-full w-[78vw] max-w-[320px] shrink-0 overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-xl shadow-cyan-300/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-200/50 hover:shadow-pink-300/30 sm:w-[320px] sm:p-4">
                <div className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-pink-400 px-3 py-1 text-xs font-semibold text-white">
                    {project.type}
                  </span>

                  {project.type === "Video Demo" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-pink-400/80 p-5 text-2xl shadow-lg shadow-pink-300/40">
                        ▶
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-white sm:mt-5 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-16 text-sm leading-6 text-white/60 sm:min-h-20">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )}
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-xl shadow-cyan-300/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-200/50 hover:shadow-pink-300/30 sm:p-4"
              >
                <div className="relative h-40 overflow-hidden rounded-2xl sm:h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-pink-400 px-3 py-1 text-xs font-semibold text-white">
                    {project.type}
                  </span>

                  {project.type === "Video Demo" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-pink-400/80 p-5 text-2xl shadow-lg shadow-pink-300/40">
                        ▶
                      </div>
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-white sm:mt-5 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-16 text-sm leading-6 text-white/60 sm:min-h-20">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}