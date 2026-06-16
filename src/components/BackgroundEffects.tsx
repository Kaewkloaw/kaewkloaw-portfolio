export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% -10%, rgba(255,255,255,.14) 0%, transparent 50%), radial-gradient(circle at 25% 60%, rgba(255,120,220,.18) 0%, transparent 55%), radial-gradient(circle at 80% 45%, rgba(120,220,255,.16) 0%, transparent 55%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(7,26,47,.18) 0%, rgba(7,26,47,.02) 22%, rgba(18,11,47,.14) 100%)",
        }}
      />
    </div>
  );
}