import ListingActionButtons from "@/components/ListingActionButtons";
import Image from "next/image";
import Link from "next/link";
import { directoryPath, type DirectoryListing } from "@/lib/directory";
import {
  formatListingRating,
  getListingBadges,
} from "@/lib/directory/listingDisplay";

type DirectoryListingCardProps = {
  listing: DirectoryListing;
  priority?: boolean;
  /** Show reservation, website, and phone buttons (restaurant hubs) */
  showActions?: boolean;
  /** spotlight = centered premium recommendation (~850px); vertical = grid card; horizontal = legacy compact row */
  featuredLayout?: "spotlight" | "vertical" | "horizontal";
};

function ListingBadges({
  listing,
  badges,
}: {
  listing: DirectoryListing;
  badges: { label: string; style: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      <span className="rounded-sm bg-cream/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal backdrop-blur-sm sm:text-[10px]">
        {listing.cuisine ?? listing.category}
      </span>
      {badges.map((badge) => (
        <span
          key={badge.label}
          className={`rounded-sm px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider sm:text-[10px] ${badge.style}`}
        >
          {badge.label}
        </span>
      ))}
      {listing.isOpenNow && (
        <span className="rounded-sm bg-emerald-600/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cream sm:text-[10px]">
          Open Now
        </span>
      )}
      {listing.isDemo && (
        <span className="rounded-sm bg-navy/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cream backdrop-blur-sm sm:text-[10px]">
          Sample Listing
        </span>
      )}
    </div>
  );
}

function ListingActions({
  listing,
  listingHref,
  compact = false,
}: {
  listing: DirectoryListing;
  listingHref: string;
  compact?: boolean;
}) {
  return (
    <ListingActionButtons listing={listing} listingHref={listingHref} compact={compact} />
  );
}

function SpotlightFeaturedListingCard({
  listing,
  listingHref,
  badges,
  rating,
  priority,
  showActions,
}: {
  listing: DirectoryListing;
  listingHref: string;
  badges: { label: string; style: string }[];
  rating: string | null;
  priority?: boolean;
  showActions?: boolean;
}) {
  const cuisine = listing.cuisine ?? listing.category;

  return (
    <article className="group w-full overflow-hidden rounded-sm border border-teal/30 bg-cream shadow-[0_6px_28px_-8px_rgba(27,58,75,0.18)] ring-1 ring-teal/10 transition-all duration-300 hover:shadow-[0_10px_36px_-8px_rgba(27,58,75,0.22)] hover:ring-teal/18">
      <div className="relative h-[260px] overflow-hidden sm:h-[280px] md:h-[300px]">
        <Image
          src={listing.image}
          alt={listing.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 850px) 100vw, 850px"
          className="object-cover object-center brightness-105 saturate-[1.07] transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/15 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          <span className="rounded-sm bg-coral px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-cream shadow-sm">
            Featured
          </span>
          {listing.priceRange && (
            <span className="rounded-sm bg-navy/85 px-2 py-0.5 text-[10px] font-bold text-cream backdrop-blur-sm">
              {listing.priceRange}
            </span>
          )}
          {badges
            .filter((b) => b.label !== "Featured")
            .slice(0, 2)
            .map((badge) => (
              <span
                key={badge.label}
                className={`rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badge.style}`}
              >
                {badge.label}
              </span>
            ))}
        </div>
        {listing.logo && (
          <div className="absolute bottom-4 left-4 rounded-sm border border-cream/40 bg-cream/95 p-1.5 shadow-sm">
            <Image
              src={listing.logo}
              alt={listing.logoAlt ?? `${listing.name} logo`}
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
            />
          </div>
        )}
      </div>

      <div className="px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/45">
          <span>{cuisine}</span>
          {rating && (
            <>
              <span aria-hidden="true" className="text-navy/25">
                ·
              </span>
              <span className="normal-case tracking-normal text-navy/60">
                {rating}
              </span>
            </>
          )}
        </div>

        {listing.meta && listing.meta.length > 0 && (
          <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-navy/38">
            {listing.meta.join(" · ")}
          </p>
        )}

        <h3 className="font-display mt-2.5 text-2xl font-medium leading-snug text-navy sm:text-[1.65rem]">
          <Link href={listingHref} className="transition-colors hover:text-teal">
            {listing.name}
          </Link>
        </h3>

        {listing.address && (
          <p className="mt-1.5 text-sm text-navy/50">{listing.address}</p>
        )}

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-navy/68 sm:text-base">
          {listing.shortDescription}
        </p>

        {listing.hours && (
          <p className="mt-2 text-xs text-navy/45">{listing.hours}</p>
        )}

        {showActions ? (
          <ListingActions listing={listing} listingHref={listingHref} compact />
        ) : (
          <Link
            href={listingHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-all group-hover:gap-2.5 group-hover:text-coral-light"
          >
            View Listing
            <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
    </article>
  );
}

function FeaturedListingCard({
  listing,
  listingHref,
  badges,
  rating,
  priority,
  showActions,
}: {
  listing: DirectoryListing;
  listingHref: string;
  badges: { label: string; style: string }[];
  rating: string | null;
  priority?: boolean;
  showActions?: boolean;
}) {
  return (
    <article className="group card-hover florida-border-top overflow-hidden rounded-sm border border-teal/35 bg-cream shadow-md ring-1 ring-teal/15 transition-shadow hover:shadow-lg">
      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className="relative h-44 shrink-0 overflow-hidden sm:h-48 md:h-auto md:w-[42%] lg:w-[38%]">
          <div className="relative h-full w-full md:absolute md:inset-0 md:min-h-[260px] md:max-h-[320px]">
            <Image
              src={listing.image}
              alt={listing.imageAlt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover brightness-110 saturate-[1.06] transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-navy/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-navy/10" />
            {listing.priceRange && (
              <span className="absolute bottom-2.5 right-2.5 rounded-sm bg-navy/85 px-2 py-0.5 text-[11px] font-bold text-cream backdrop-blur-sm">
                {listing.priceRange}
              </span>
            )}
            {listing.logo && (
              <div className="absolute bottom-2.5 left-2.5 rounded-sm border border-cream/40 bg-cream/95 p-1 shadow-sm">
                <Image
                  src={listing.logo}
                  alt={listing.logoAlt ?? `${listing.name} logo`}
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
          <ListingBadges listing={listing} badges={badges} />

          {listing.meta && listing.meta.length > 0 && (
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-navy/40">
              {listing.meta.join(" · ")}
            </p>
          )}

          <h3 className="font-display mt-2 text-xl font-medium leading-snug text-navy sm:text-2xl">
            <Link href={listingHref} className="transition-colors hover:text-teal">
              {listing.name}
            </Link>
          </h3>

          {rating && (
            <p className="mt-1 text-xs text-navy/55">{rating}</p>
          )}

          {listing.address && (
            <p className="mt-1 text-xs text-navy/50">{listing.address}</p>
          )}

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-navy/70 sm:line-clamp-3">
            {listing.shortDescription}
          </p>

          {listing.hours && (
            <p className="mt-1.5 text-xs text-navy/45">{listing.hours}</p>
          )}

          {showActions ? (
            <ListingActions listing={listing} listingHref={listingHref} compact />
          ) : (
            <Link
              href={listingHref}
              className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-coral transition-all group-hover:gap-2.5 group-hover:text-coral-light"
            >
              View Listing
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function PremiumVerticalListingCard({
  listing,
  listingHref,
  badges,
  rating,
  priority,
  showActions,
}: {
  listing: DirectoryListing;
  listingHref: string;
  badges: { label: string; style: string }[];
  rating: string | null;
  priority?: boolean;
  showActions?: boolean;
}) {
  const cuisine = listing.cuisine ?? listing.category;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-teal/30 bg-cream shadow-[0_4px_24px_-6px_rgba(27,58,75,0.14)] ring-1 ring-teal/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_-8px_rgba(27,58,75,0.2)] hover:ring-teal/20">
      <Link href={listingHref} className="flex flex-col">
        <div className="relative aspect-[5/4] overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center brightness-105 saturate-[1.07] transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/10 to-transparent" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            <span className="rounded-sm bg-coral px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.18em] text-cream shadow-sm sm:text-[10px]">
              Featured
            </span>
            {listing.priceRange && (
              <span className="rounded-sm bg-navy/85 px-2 py-0.5 text-[10px] font-bold text-cream backdrop-blur-sm">
                {listing.priceRange}
              </span>
            )}
          </div>
          {listing.logo && (
            <div className="absolute bottom-3 left-3 rounded-sm border border-cream/40 bg-cream/95 p-1.5 shadow-sm">
              <Image
                src={listing.logo}
                alt={listing.logoAlt ?? `${listing.name} logo`}
                width={44}
                height={44}
                className="h-9 w-9 object-contain"
              />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col px-5 pb-4 pt-4 sm:px-6 sm:pb-5 sm:pt-5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/45">
            <span>{cuisine}</span>
            {rating && (
              <>
                <span aria-hidden="true" className="text-navy/25">
                  ·
                </span>
                <span className="normal-case tracking-normal text-navy/60">
                  {rating}
                </span>
              </>
            )}
          </div>

          {listing.meta && listing.meta.length > 0 && (
            <p className="mt-2 text-[10px] font-medium uppercase tracking-wider text-navy/38">
              {listing.meta.join(" · ")}
            </p>
          )}

          <h3 className="font-display mt-2 text-xl font-medium leading-snug text-navy transition-colors group-hover:text-teal sm:text-[1.35rem]">
            {listing.name}
          </h3>

          {listing.address && (
            <p className="mt-1 text-xs text-navy/50">{listing.address}</p>
          )}

          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-navy/68">
            {listing.shortDescription}
          </p>

          {listing.hours && (
            <p className="mt-2 text-xs text-navy/45">{listing.hours}</p>
          )}

          {!showActions && (
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-all group-hover:gap-2.5 group-hover:text-coral-light">
              View Listing
              <span aria-hidden="true">&rarr;</span>
            </span>
          )}
        </div>
      </Link>

      {showActions && (
        <div className="mt-auto border-t border-teal/10 px-5 pb-5 pt-3 sm:px-6">
          <ListingActions listing={listing} listingHref={listingHref} compact />
        </div>
      )}
    </article>
  );
}

function StandardListingCard({
  listing,
  listingHref,
  badges,
  rating,
  showActions,
}: {
  listing: DirectoryListing;
  listingHref: string;
  badges: { label: string; style: string }[];
  rating: string | null;
  showActions?: boolean;
}) {
  return (
    <article className="group card-hover florida-border-top flex h-full flex-col overflow-hidden rounded-sm border border-sand-dark/60 bg-cream shadow-sm transition-shadow hover:shadow-md">
      <Link href={listingHref} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover brightness-110 saturate-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent" />
          <div className="absolute left-3 top-3">
            <ListingBadges listing={listing} badges={badges} />
          </div>
          {listing.priceRange && (
            <span className="absolute bottom-3 right-3 rounded-sm bg-navy/80 px-2 py-0.5 text-[11px] font-bold text-cream backdrop-blur-sm">
              {listing.priceRange}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          {listing.meta && listing.meta.length > 0 && (
            <p className="mb-2 text-[10px] font-medium uppercase tracking-wider text-navy/45">
              {listing.meta.join(" · ")}
            </p>
          )}
          <h3 className="font-display text-lg font-medium leading-snug text-navy transition-colors group-hover:text-teal sm:text-xl">
            {listing.name}
          </h3>
          {rating && <p className="mt-1 text-xs text-navy/55">{rating}</p>}
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-navy/70">
            {listing.shortDescription}
          </p>
          {!showActions && (
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-coral transition-all group-hover:gap-2.5 group-hover:text-coral-light">
              View Listing
              <span aria-hidden="true">&rarr;</span>
            </span>
          )}
        </div>
      </Link>
      {showActions && (
        <div className="border-t border-sand-dark/30 px-4 pb-4 sm:px-5 sm:pb-5">
          <ListingActions listing={listing} listingHref={listingHref} compact />
        </div>
      )}
    </article>
  );
}

export default function DirectoryListingCard({
  listing,
  priority = false,
  showActions = false,
  featuredLayout = "horizontal",
}: DirectoryListingCardProps) {
  const isFeatured = listing.plan === "featured";
  const listingHref = directoryPath(listing.type, listing.slug);
  const badges = getListingBadges(listing);
  const rating = formatListingRating(listing);

  if (isFeatured && featuredLayout === "spotlight") {
    return (
      <SpotlightFeaturedListingCard
        listing={listing}
        listingHref={listingHref}
        badges={badges}
        rating={rating}
        priority={priority}
        showActions={showActions}
      />
    );
  }

  if (isFeatured && featuredLayout === "vertical") {
    return (
      <PremiumVerticalListingCard
        listing={listing}
        listingHref={listingHref}
        badges={badges}
        rating={rating}
        priority={priority}
        showActions={showActions}
      />
    );
  }

  if (isFeatured) {
    return (
      <FeaturedListingCard
        listing={listing}
        listingHref={listingHref}
        badges={badges}
        rating={rating}
        priority={priority}
        showActions={showActions}
      />
    );
  }

  return (
    <StandardListingCard
      listing={listing}
      listingHref={listingHref}
      badges={badges}
      rating={rating}
      showActions={showActions}
    />
  );
}
