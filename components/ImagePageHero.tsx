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
};

export default function ImagePageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: ImagePageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden sm:min-h-[55vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover brightness-110 saturate-[1.05]"
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream/90">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          {eyebrow}
        </p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-medium leading-tight text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
