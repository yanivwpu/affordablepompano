import DirectoryListingCard from "@/components/DirectoryListingCard";
import ContentCard from "@/components/ContentCard";
import { getGuideRelatedContent } from "@/lib/guides/relatedContent";
import { getRelatedGuides, guidePath } from "@/lib/guides";
import type { Guide } from "@/lib/guides/types";
import type { ReactNode } from "react";

type GuideRelatedContentProps = {
  guide: Guide;
};

function RelatedSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-sand-dark/40 bg-sand py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            {eyebrow}
          </p>
          <h2 className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function GuideRelatedContent({ guide }: GuideRelatedContentProps) {
  const relatedGuides = getRelatedGuides(guide, 6);
  const { restaurants, excursions, businesses } = getGuideRelatedContent(guide);

  return (
    <>
      {relatedGuides.length > 0 && (
        <RelatedSection eyebrow="Keep Reading" title="Related Guides">
          <div className="guide-cards-grid">
            {relatedGuides.map((relatedGuide) => (
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
        </RelatedSection>
      )}

      {restaurants.length > 0 && (
        <RelatedSection eyebrow="Local Eats" title="Related Restaurants">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restaurants.map((listing) => (
              <DirectoryListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </RelatedSection>
      )}

      {excursions.length > 0 && (
        <RelatedSection eyebrow="On The Water" title="Related Excursions">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {excursions.map((listing) => (
              <DirectoryListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </RelatedSection>
      )}

      {businesses.length > 0 && (
        <RelatedSection eyebrow="Local Pros" title="Related Businesses">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((listing) => (
              <DirectoryListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </RelatedSection>
      )}
    </>
  );
}
