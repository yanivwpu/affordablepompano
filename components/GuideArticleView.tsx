import ContentCard from "@/components/ContentCard";
import GuideArticleSchema from "@/components/GuideArticleSchema";
import { GuideRichText } from "@/components/GuideRichText";
import { getRelatedGuides, guidePath } from "@/lib/guides";
import type { Guide } from "@/lib/guides/types";
import { guideCategories } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

type GuideArticleViewProps = {
  guide: Guide;
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function GuideArticleView({ guide }: GuideArticleViewProps) {
  const related = getRelatedGuides(guide);
  const categoryLabel =
    guideCategories.find((c) => c.id === guide.group)?.title ?? "Guide";

  return (
    <>
      <GuideArticleSchema guide={guide} />

      <article className="bg-background">
        <div className="border-b border-sand-dark/40 bg-cream py-4">
          <nav
            aria-label="Breadcrumb"
            className="mx-auto max-w-3xl px-4 text-sm text-navy/60 sm:px-6"
          >
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="transition-colors hover:text-teal">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-navy/35">
                /
              </li>
              <li>
                <Link
                  href="/guides"
                  className="transition-colors hover:text-teal"
                >
                  Guides
                </Link>
              </li>
              <li aria-hidden="true" className="text-navy/35">
                /
              </li>
              <li className="font-medium text-navy">{guide.title}</li>
            </ol>
          </nav>
        </div>

        <header className="relative min-h-[40vh] overflow-hidden sm:min-h-[45vh]">
          <Image
            src={guide.image}
            alt={guide.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-110 saturate-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/35 to-navy/20" />
          <div className="relative z-10 mx-auto flex min-h-[40vh] max-w-3xl flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[45vh] sm:px-6 sm:pb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sunset">
              {categoryLabel}
            </p>
            <h1 className="font-display mt-3 text-3xl font-medium leading-tight text-cream sm:text-4xl md:text-5xl">
              {guide.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
              {guide.excerpt}
            </p>
            <p className="mt-4 text-xs text-cream/60">
              Published {formatDate(guide.publishedAt)}
              {guide.updatedAt !== guide.publishedAt && (
                <> · Updated {formatDate(guide.updatedAt)}</>
              )}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="prose-guide space-y-10">
            {guide.content.map((block, index) => {
              if (block.type === "localTip") {
                return (
                  <aside
                    key={`tip-${block.tip.title}`}
                    className="rounded-sm border-l-4 border-coral bg-cream/80 px-5 py-4 sm:px-6 sm:py-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                      Local Tip
                    </p>
                    <h3 className="font-display mt-2 text-lg font-medium text-navy">
                      {block.tip.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/75 sm:text-base">
                      <GuideRichText text={block.tip.body} />
                    </p>
                  </aside>
                );
              }

              return (
                <section key={`${block.heading}-${index}`}>
                  <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
                    {block.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {block.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 64)}
                        className="text-base leading-relaxed text-navy/75"
                      >
                        <GuideRichText text={paragraph} />
                      </p>
                    ))}
                  </div>
                </section>
              );
            })}

            {guide.thingsToKnow && guide.thingsToKnow.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
                  Things to Know Before You Go
                </h2>
                <ul className="mt-6 space-y-5">
                  {guide.thingsToKnow.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-sm border border-sand-dark/50 bg-warm-white p-5"
                    >
                      <h3 className="font-semibold text-navy">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-navy/70 sm:text-base">
                        <GuideRichText text={item.body} />
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {guide.relatedPlaces && guide.relatedPlaces.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
                  Related Places
                </h2>
                <ul className="mt-6 space-y-3">
                  {guide.relatedPlaces.map((place) => (
                    <li key={place.href}>
                      <Link
                        href={place.href}
                        className="group block rounded-sm border border-sand-dark/50 bg-cream p-4 transition-colors hover:border-teal/40"
                      >
                        <span className="font-semibold text-coral group-hover:text-coral-light">
                          {place.name}
                          <span aria-hidden="true" className="ml-1">
                            &rarr;
                          </span>
                        </span>
                        <p className="mt-1 text-sm text-navy/65">
                          {place.description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {guide.faq.length > 0 && (
              <section>
                <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <dl className="mt-6 space-y-6">
                  {guide.faq.map((item) => (
                    <div
                      key={item.question}
                      className="border-b border-sand-dark/40 pb-6 last:border-0"
                    >
                      <dt className="font-semibold text-navy">
                        {item.question}
                      </dt>
                      <dd className="mt-2 text-sm leading-relaxed text-navy/70 sm:text-base">
                        {item.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>

          <aside className="mt-14 rounded-sm border border-teal/20 bg-cream p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              Explore Pompano
            </p>
            <h2 className="font-display mt-2 text-xl font-medium text-navy sm:text-2xl">
              Plan the rest of your trip
            </h2>
            <ul className="mt-6 space-y-4">
              {guide.exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group block rounded-sm border border-sand-dark/50 bg-warm-white p-4 transition-colors hover:border-teal/40"
                  >
                    <span className="font-semibold text-coral transition-colors group-hover:text-coral-light">
                      {link.label}
                      <span aria-hidden="true" className="ml-1">
                        &rarr;
                      </span>
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-navy/65">
                      {link.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="border-t border-sand-dark/40 bg-sand py-14 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
                  Keep Reading
                </p>
                <h2 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
                  Related Guides
                </h2>
              </div>
              <div className="guide-cards-grid">
                {related.map((relatedGuide) => (
                  <ContentCard
                    key={relatedGuide.slug}
                    title={relatedGuide.title}
                    excerpt={relatedGuide.excerpt}
                    category={relatedGuide.category}
                    image={relatedGuide.image}
                    imageAlt={relatedGuide.imageAlt}
                    href={guidePath(relatedGuide.slug)}
                    comingSoon={false}
                  />
                ))}
              </div>
              <p className="mt-8 text-center">
                <Link
                  href="/guides"
                  className="text-sm font-semibold text-coral transition-colors hover:text-coral-light"
                >
                  View all guides &rarr;
                </Link>
              </p>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
