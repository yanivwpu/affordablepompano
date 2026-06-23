import Image from "next/image";
import Link from "next/link";

type ImagePageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  size?: "default" | "compact";
};

export default function ImagePageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  size = "default",
}: ImagePageHeroProps) {
  const compact = size === "compact";

  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        compact ? "min-h-[30vh] sm:min-h-[33vh]" : "min-h-[50vh] sm:min-h-[55vh]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-110 saturate-[1.05]"
      />
      <div className="hero-gradient absolute inset-0" />

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          compact ? "pb-8 pt-20 sm:pb-10" : "pb-12 pt-28 sm:pb-16"
        }`}
      >
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream/90">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          {eyebrow}
        </p>
        <h1
          className={`font-display mt-2 max-w-3xl font-medium leading-tight text-cream ${
            compact
              ? "text-3xl sm:text-4xl lg:text-5xl"
              : "text-4xl sm:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </h1>
        <p
          className={`max-w-2xl leading-relaxed text-cream/85 ${
            compact ? "mt-3 text-sm sm:text-base" : "mt-4 text-base sm:text-lg"
          }`}
        >
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className={`flex flex-col gap-3 sm:flex-row ${compact ? "mt-5" : "mt-8"}`}>
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-sm bg-teal px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:bg-teal-light"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-sm bg-coral px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:bg-coral-light"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
