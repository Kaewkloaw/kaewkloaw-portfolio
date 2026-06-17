import { experiences } from "@/data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          subtitle="My Journey 🫧"
          title="Experience"
          description="Work, education, and professional growth"
          className="mb-12 text-center sm:mb-14"
        />

        <div className="relative">
          <div
            className="absolute left-4 top-0 h-full w-px max-[754px]:hidden md:left-1/2"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent-pink), var(--accent-cyan), transparent)",
            }}
          />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
              <div
                key={item.company}
                className={`relative grid gap-4 sm:gap-6 max-[754px]:block max-[754px]:space-y-4 md:grid-cols-2 ${
                  isEven ? "" : "md:text-right"
                }`}
              >
                <div
                  className={`rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-pink-200/40 hover:bg-pink-300/10 ${
                    isEven ? "md:mr-10" : "md:col-start-2 md:ml-10"
                  }`}
                >
                  <p className="text-xs font-medium theme-accent-cyan sm:text-sm">
                    {item.period}
                  </p>

                  <h3 className="mt-3 text-xl font-bold theme-accent-pink sm:text-2xl">
                    {item.company}
                  </h3>

                  <p className="mt-2 text-sm text-white/80 sm:text-base">
                    {item.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 theme-muted sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div
                  className="absolute left-2 top-8 h-5 w-5 rounded-full border-4 bg-pink-300 shadow-lg shadow-pink-300/50 max-[754px]:hidden md:left-1/2 md:-translate-x-1/2"
                  style={{ borderColor: "var(--page-bg)" }}
                />
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}