import DirectoryListingCard from "@/components/DirectoryListingCard";
import HubSectionHeader from "@/components/hub/HubSectionHeader";
import HubSectionShell from "@/components/hub/HubSectionShell";
import Link from "next/link";
import { featuredListingGridClass } from "@/lib/hubLayout";
import { sortListings, type DirectoryListing } from "@/lib/directory";

type HubFeaturedSectionProps = {
  listings: DirectoryListing[];
  title?: string;
  description?: string;
  eyebrow?: string;
  advertisePackageId: string;
  advertiseCtaLabel?: string;
  id?: string;
  showActions?: boolean;
};

export default function HubFeaturedSection({
  listings,
  title = "Featured Listings",
  description = "Premium partner recommendations with dedicated pages, contact details, and local context.",
  eyebrow = "Premium Picks",
  advertisePackageId,
  advertiseCtaLabel = "List Your Business",
  id = "featured-listings",
  showActions = false,
}: HubFeaturedSectionProps) {
  const featured = sortListings(listings).filter((l) => l.plan === "featured");

  return (
    <HubSectionShell id={id} variant="featured">
      <HubSectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      {featured.length === 0 ? (
        <aside className="rounded-sm border border-dashed border-teal/30 bg-sand/25 px-6 py-12 text-center">
          <p className="text-sm leading-relaxed text-navy/60">
            Featured partner listings appear here as local businesses join the
            directory.
          </p>
          <Link
            href={`/advertise?package=${advertisePackageId}#contact`}
            className="mt-5 inline-flex items-center justify-center rounded-sm bg-teal px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-teal-light"
          >
            {advertiseCtaLabel}
          </Link>
        </aside>
      ) : (
        <>
          <div className={featuredListingGridClass(featured.length)}>
            {featured.map((listing, index) => (
              <DirectoryListingCard
                key={listing.id}
                listing={listing}
                priority={index === 0}
                featuredLayout={featured.length === 1 ? "spotlight" : "vertical"}
                showActions={showActions}
              />
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link
              href={`/advertise?package=${advertisePackageId}#contact`}
              className="inline-flex items-center justify-center rounded-sm border border-teal/30 bg-cream px-6 py-2.5 text-sm font-semibold text-teal transition-colors hover:border-teal hover:bg-teal hover:text-cream"
            >
              {advertiseCtaLabel}
            </Link>
          </p>
        </>
      )}
    </HubSectionShell>
  );
}
