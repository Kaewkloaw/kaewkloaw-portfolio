import Image from "next/image";
import { competitions } from "@/data/competitions";

type Competition = (typeof competitions)[number];

export default function CompetitionCard({ item }: { item: Competition }) {
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
