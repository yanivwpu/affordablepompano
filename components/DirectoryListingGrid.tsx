import DirectoryListingCard from "@/components/DirectoryListingCard";
import Link from "next/link";
import { sortListings, type DirectoryListing } from "@/lib/directory";

type DirectoryListingGridProps = {
  listings: DirectoryListing[];
  advertisePackageId: string;
  emptyLabel?: string;
};

export default function DirectoryListingGrid({
  listings,
  advertisePackageId,
  emptyLabel = "Partner listings appear here as businesses join the directory.",
}: DirectoryListingGridProps) {
  const sorted = sortListings(listings);

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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sorted.map((listing) => (
        <DirectoryListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
