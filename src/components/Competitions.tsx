import { competitions } from "@/data/competitions";
import AutoScrollRail from "./AutoScrollRail";
import CompetitionCard from "./CompetitionCard";
import SectionHeader from "./SectionHeader";

export default function Competitions() {
  const shouldAutoScroll = competitions.length > 4;

  return (
    <section id="competitions" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="My Achievements 🏆"
          title="Competitions"
          description="Challenges that shaped me and my journey ✨"
        />
      </div>

      {shouldAutoScroll ? (
        <AutoScrollRail
          items={competitions}
          getKey={(item) => item.title}
          className=""
          trackClassName="gap-4 sm:gap-6"
          renderItem={(item) => <CompetitionCard item={item} />}
        />
      ) : (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 overflow-hidden sm:gap-6">
            {competitions.map((item, index) => (
              <div key={item.title} className={index === 1 ? "" : "opacity-95"}>
                <CompetitionCard item={item} />
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2 sm:mt-10">
            {competitions.map((item) => (
              <span key={item.title} className="h-2 w-2 rounded-full bg-white/30 first:bg-pink-300" />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
