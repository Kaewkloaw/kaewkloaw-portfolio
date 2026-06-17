import { skills } from "@/data/skills";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          subtitle="My Toolbox ✨"
          title="Skills & Technologies"
          description="Technologies that I use to build intelligent solutions"
        />

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="skills-item flex items-center gap-3 rounded-full theme-surface px-4 py-2.5 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-pink-200/40 hover:bg-pink-300/20 sm:px-5 sm:py-3"
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