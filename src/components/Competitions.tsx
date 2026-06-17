import Image from "next/image";
import { competitions } from "@/data/competitions";
import AutoScrollRail from "./AutoScrollRail";

function CompetitionCard({
  item,
}: {
  item: (typeof competitions)[number];
}) {
  return (
    <article className="group relative h-[360px] w-[280px] shrink-0 overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-pink-200/50">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-5">
        <span className="rounded-full bg-pink-400 px-3 py-1 text-xs font-bold text-white">
          {item.award}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>

        <p className="mt-2 text-sm text-white/70">{item.description}</p>
      </div>
    </article>
  );
}

export default function Competitions() {
  const shouldAutoScroll = competitions.length > 4;

  return (
    <section id="competitions" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-12">
          <p className="theme-subtitle-blush text-sm sm:text-base">My Achievements 🏆</p>
          <h2 className="text-3xl font-bold theme-title-soft-pink sm:text-4xl lg:text-5xl">Competitions</h2>
          <p className="mt-4 text-sm theme-subtitle-blush sm:text-base">
            Challenges that shaped me and my journey ✨
          </p>
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
          <div className="flex items-center justify-center gap-4 overflow-hidden sm:gap-6">
            {competitions.map((item, index) => {
              const isCenter = index === 1;

              return (
                <div key={item.title} className={isCenter ? "" : "opacity-95"}>
                  <CompetitionCard item={item} />
                </div>
              );
            })}
          </div>
        )}

        {!shouldAutoScroll && (
          <div className="mt-8 flex justify-center gap-2 sm:mt-10">
            <span className="h-2 w-2 rounded-full bg-pink-300" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
        )}
      </div>
    </section>
  );
}