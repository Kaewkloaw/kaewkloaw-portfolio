import { projects } from "@/data/projects";
import AutoScrollRail from "./AutoScrollRail";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  const shouldAutoScroll = projects.length > 4;

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="My Creations 🪼"
          title="Projects"
          description="Things I've built with passion and curiosity ✨"
        />
      </div>

      {shouldAutoScroll ? (
        <AutoScrollRail
          items={projects}
          getKey={(project) => project.title}
          className="pb-4"
          trackClassName="gap-4 sm:gap-6"
          renderItem={(project) => (
            <ProjectCard
              project={project}
              className="h-full w-[78vw] max-w-[320px] shrink-0 sm:w-[320px]"
            />
          )}
        />
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
