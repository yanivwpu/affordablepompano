type HubSectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function HubSectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: HubSectionHeaderProps) {
  const centered = align === "center";

  return (
    <header
      className={`mb-10 sm:mb-12 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-medium text-navy ${eyebrow ? "mt-3" : ""} text-2xl sm:text-3xl lg:text-4xl`}
      >
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-navy/65 sm:text-lg">
        {description}
      </p>
    </header>
  );
}
