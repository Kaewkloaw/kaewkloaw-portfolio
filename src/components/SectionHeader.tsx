export default function SectionHeader({
  subtitle,
  title,
  description,
  className = "mb-10 text-center sm:mb-12",
}: {
  subtitle: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="theme-subtitle-blush text-sm sm:text-base">{subtitle}</p>
      <h2 className="mt-2 text-3xl font-bold theme-title-soft-pink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm theme-subtitle-blush sm:text-base">{description}</p>
    </div>
  );
}
