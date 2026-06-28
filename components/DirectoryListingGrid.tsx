import DirectoryListingCard from "@/components/DirectoryListingCard";
import Link from "next/link";
import {
  directoryListingGridClass,
  featuredListingGridClass,
} from "@/lib/hubLayout";
import { sortListings, type DirectoryListing } from "@/lib/directory";

type DirectoryListingGridProps = {
  listings: DirectoryListing[];
  advertisePackageId: string;
  emptyLabel?: string;
  showActions?: boolean;
};

export default function DirectoryListingGrid({
  listings,
  advertisePackageId,
  emptyLabel = "Partner listings appear here as businesses join the directory.",
  showActions = false,
}: DirectoryListingGridProps) {
  const sorted = sortListings(listings);
  const featured = sorted.filter((l) => l.plan === "featured");
  const standard = sorted.filter((l) => l.plan !== "featured");

  if (sorted.length === 0) {
    return (
      <aside className="rounded-sm border border-dashed border-teal/30 bg-sand/30 px-6 py-10 text-center">
        <p className="text-sm text-navy/60">{emptyLabel}</p>
        <Link
          href={`/advertise?package=${advertisePackageId}#contact`}
          className="mt-4 inline-flex items-center justify-center rounded-sm bg-teal px-5 py-2.5 text-sm font-semibold text-cream hover:bg-teal-light"
        >
          List Your Business
        </Link>
      </aside>
    );
  }

  return (
    <div className="space-y-6">
      {featured.length > 0 && (
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
      )}

      {standard.length > 0 && (
        <div className={directoryListingGridClass()}>
          {standard.map((listing) => (
            <DirectoryListingCard
              key={listing.id}
              listing={listing}
              showActions={showActions}
            />
          ))}
        </div>
      )}
    </div>
  );
}
