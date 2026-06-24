import Image from "next/image";
import Link from "next/link";
import { directoryPath, type DirectoryListing } from "@/lib/directory";

type DirectoryListingCardProps = {
  listing: DirectoryListing;
};

export default function DirectoryListingCard({
  listing,
}: DirectoryListingCardProps) {
  const isFeatured = listing.plan === "featured";
  const href = directoryPath(listing.type, listing.slug);

  return (
    <article
      className={`group card-hover florida-border-top flex h-full flex-col overflow-hidden rounded-sm border bg-cream shadow-sm ${
        isFeatured
          ? "border-teal ring-2 ring-teal/20 lg:col-span-2"
          : "border-sand-dark/60"
      }`}
    >
      <Link href={href} className="flex h-full flex-col">
        <div
          className={`relative overflow-hidden ${
            isFeatured ? "aspect-[16/10] sm:aspect-[21/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={listing.image}
            alt={listing.imageAlt}
            fill
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 66vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover brightness-110 saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-sm bg-cream/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal backdrop-blur-sm">
              {listing.category}
            </span>
            {isFeatured && (
              <span className="rounded-sm bg-coral px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
                Featured
              </span>
            )}
            {listing.isDemo && (
              <span className="rounded-sm bg-navy/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream backdrop-blur-sm">
                Sample Listing
              </span>
            )}
          </div>
          {listing.priceRange && (
            <span className="absolute bottom-4 right-4 rounded-sm bg-navy/80 px-2.5 py-1 text-xs font-bold tracking-wide text-cream backdrop-blur-sm">
              {listing.priceRange}
            </span>
          )}
        </div>

        <div
          className={`flex flex-1 flex-col ${isFeatured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}
        >
          {listing.meta && listing.meta.length > 0 && (
            <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-navy/45">
              {listing.meta.join(" · ")}
            </p>
          )}
          <h3
            className={`font-display font-medium leading-snug text-navy transition-colors group-hover:text-teal ${
              isFeatured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
            }`}
          >
            {listing.name}
          </h3>
          <p
            className={`mt-2 flex-1 leading-relaxed text-navy/70 ${
              isFeatured ? "text-base sm:text-lg" : "text-sm"
            }`}
          >
            {listing.shortDescription}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-all group-hover:gap-3 group-hover:text-coral-light">
            View Listing
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
