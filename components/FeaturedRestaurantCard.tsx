import ListingActionButtons from "@/components/ListingActionButtons";
import Image from "next/image";
import Link from "next/link";
import { directoryPath, type DirectoryListing } from "@/lib/directory";

type FeaturedRestaurantCardProps = {
  listing: DirectoryListing;
};

export default function FeaturedRestaurantCard({
  listing,
}: FeaturedRestaurantCardProps) {
  const listingHref = directoryPath(listing.type, listing.slug);

  return (
    <article className="group card-hover florida-border-top overflow-hidden rounded-sm border border-teal bg-cream shadow-sm ring-2 ring-teal/20">
      <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[21/9]">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover brightness-110 saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/15 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-sm bg-cream/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal backdrop-blur-sm">
            {listing.category}
          </span>
          <span className="rounded-sm bg-coral px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cream">
            Featured
          </span>
        </div>
        {listing.logo && (
          <div className="absolute bottom-4 left-4 rounded-sm border border-cream/40 bg-cream/95 p-2 shadow-sm backdrop-blur-sm">
            <Image
              src={listing.logo}
              alt={listing.logoAlt ?? `${listing.name} logo`}
              width={72}
              height={72}
              className="h-14 w-14 object-contain"
            />
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        {listing.meta && listing.meta.length > 0 && (
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-navy/45">
            {listing.meta.join(" · ")}
          </p>
        )}

        <h2 className="font-display text-2xl font-medium leading-snug text-navy sm:text-3xl">
          <Link href={listingHref} className="transition-colors hover:text-teal">
            {listing.name}
          </Link>
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-relaxed text-navy/70 sm:text-lg">
          {listing.shortDescription}
        </p>

        <div className="mt-6">
          <ListingActionButtons listing={listing} listingHref={listingHref} />
        </div>
      </div>
    </article>
  );
}
