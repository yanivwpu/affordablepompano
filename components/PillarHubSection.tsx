import ContentCard from "@/components/ContentCard";
import DirectoryListingGrid from "@/components/DirectoryListingGrid";
import SectionIntro from "@/components/SectionIntro";
import {
  getCategoriesForType,
  getListingsByCategory,
  getListingsByType,
  type DirectoryListing,
} from "@/lib/directory";
import { pillarGuideCards, type PillarConfig } from "@/lib/guides/pillarContent";
import { guides } from "@/lib/guides";
import Link from "next/link";

type PillarHubSectionProps = {
  pillar: PillarConfig;
  /** Hide directory block when the parent page renders listings elsewhere */
  showDirectory?: boolean;
  /** Limit category grid size so the page stays scannable */
  maxCategories?: number;
};

function collectDirectoryListings(
  pillar: PillarConfig,
  limit = 6,
): DirectoryListing[] {
  const seen = new Set<string>();
  const result: DirectoryListing[] = [];

  for (const categoryId of pillar.directoryCategoryIds) {
    for (const listing of getListingsByCategory(pillar.directoryType, categoryId)) {
      if (seen.has(listing.id)) continue;
      seen.add(listing.id);
      result.push(listing);
      if (result.length >= limit) return result;
    }
  }

  if (result.length < limit) {
    for (const listing of getListingsByType(pillar.directoryType)) {
      if (seen.has(listing.id)) continue;
      seen.add(listing.id);
      result.push(listing);
      if (result.length >= limit) break;
    }
  }

  return result;
}

export default function PillarHubSection({
  pillar,
  showDirectory = true,
  maxCategories = 6,
}: PillarHubSectionProps) {
  const guideCards = pillarGuideCards(guides, pillar.guides);
  const directoryListings = collectDirectoryListings(pillar);
  const categories = getCategoriesForType(pillar.directoryType)
    .filter((cat) => pillar.directoryCategoryIds.includes(cat.id))
    .slice(0, maxCategories);

  const listingNoun =
    pillar.directoryType === "restaurant"
      ? "restaurants"
      : pillar.directoryType === "excursion"
        ? "excursions"
        : "businesses";

  return (
    <>
      <section className="border-b border-sand-dark/40 bg-sand py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            title={pillar.guidesTitle}
            description={
              pillar.guidesDescription ??
              `In-depth local guides curated for ${pillar.hubLabel.toLowerCase()}.`
            }
          />
          <div className="guide-cards-grid">
            {guideCards.map((guide) => (
              <ContentCard key={guide.slug} {...guide} comingSoon={false} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              href="/guides"
              className="text-sm font-semibold text-coral transition-colors hover:text-coral-light"
            >
              Browse all guides &rarr;
            </Link>
          </p>
        </div>
      </section>

      {showDirectory && (
        <section className="border-b border-sand-dark/40 bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              title={pillar.directoryTitle ?? "Featured Listings"}
              description={
                pillar.directoryDescription ??
                "Partner listings with dedicated pages, contact details, and local recommendations."
              }
            />
            <DirectoryListingGrid
              listings={directoryListings}
              advertisePackageId={pillar.advertisePackageId}
              emptyLabel={`Partner ${listingNoun} appear here as listings are added.`}
            />
            <p className="mt-8 text-center">
              <Link
                href={`/advertise?package=${pillar.advertisePackageId}#contact`}
                className="inline-flex items-center justify-center rounded-sm bg-teal px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-teal-light"
              >
                {pillar.advertiseCtaLabel ?? "List Your Business"}
              </Link>
            </p>
          </div>
        </section>
      )}

      {categories.length > 0 && (
        <section className="border-b border-sand-dark/40 bg-cream py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro
              title="Browse by Category"
              description="Filter the directory by the type of experience or service you need."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  id={cat.hubAnchor ?? cat.id}
                  className="scroll-mt-28 rounded-sm border border-sand-dark/50 bg-warm-white p-5"
                >
                  <h3 className="font-display text-lg font-medium text-navy">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/65">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
