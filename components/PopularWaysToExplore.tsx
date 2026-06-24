import { popularWaysToExplore } from "@/lib/excursionsExplore";

export default function PopularWaysToExplore() {
  return (
    <section
      id="explore-pompano"
      className="scroll-mt-28 bg-background py-14 sm:py-16"
      aria-labelledby="popular-ways-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            Local Know-How
          </p>
          <h2
            id="popular-ways-heading"
            className="font-display mt-3 text-2xl font-medium text-navy sm:text-3xl"
          >
            Popular Ways to Explore Pompano
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-navy/70 sm:text-base">
            A quick look at how visitors and locals spend time on the water, at
            the pier, and along the coast — then book real experiences through
            our featured partners above.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularWaysToExplore.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 rounded-sm border border-sand-dark/50 bg-cream p-6"
            >
              <h3 className="font-display text-lg font-medium text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
