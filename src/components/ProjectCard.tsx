import Image from "next/image";

type Project = {
  title: string;
  image: string;
  description: string;
  tags: string[];
  type: string;
};

export default function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[28px] border border-white/20 bg-white/10 p-3 shadow-xl shadow-cyan-300/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-200/50 hover:shadow-pink-300/30 sm:p-4 ${className}`}
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
  );
}
