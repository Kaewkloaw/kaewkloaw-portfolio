import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="theme-subtitle-blush text-sm sm:text-base">My Toolbox ✨</p>

          <h2 className="mt-2 text-3xl font-bold theme-title-soft-pink sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-4 text-sm theme-subtitle-blush sm:text-base">
            Technologies that I use to build intelligent solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="
                skills-item
                flex items-center gap-3
                rounded-full
                theme-surface
                px-4 py-2.5
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-pink-200/40
                hover:bg-pink-300/20
                sm:px-5 sm:py-3
                "
              >
                <Icon className="skills-icon" size={20} />

                <span className="skills-label">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}