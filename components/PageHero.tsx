type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-sand-dark/50 bg-warm-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          {eyebrow}
        </p>
        <h1 className="font-display mt-3 text-4xl font-medium text-navy sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/70 sm:text-lg">
          {description}
        </p>
        <div className="coastal-rule mt-8 max-w-sm text-foreground/25">
          <span aria-hidden="true">&#9670;</span>
        </div>
      </div>
    </section>
  );
}
