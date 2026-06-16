import { competitions } from "@/data/competitions";

export default function HallOfFame() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Hall of Fame</h2>
      <div className="mt-6 text-sm text-white/60">
        {competitions.length === 0
          ? "Add your competition wins in src/data/competitions.ts."
          : null}
      </div>
    </section>
  );
}