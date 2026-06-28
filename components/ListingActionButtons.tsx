import Link from "next/link";
import type { DirectoryListing } from "@/lib/directory";
import {
  getMapsUrl,
  getPhoneHref,
  getReservationUrl,
  getContactUrl,
  getWebsiteUrl,
} from "@/lib/directory/listingLinks";

type ListingActionButtonsProps = {
  listing: DirectoryListing;
  listingHref?: string;
  compact?: boolean;
  /** Show internal profile link (directory cards without full action row) */
  includeViewListing?: boolean;
};

export default function ListingActionButtons({
  listing,
  listingHref,
  compact = false,
  includeViewListing = false,
}: ListingActionButtonsProps) {
  const reservationUrl = getReservationUrl(listing);
  const websiteUrl = getWebsiteUrl(listing);
  const contactUrl = !websiteUrl ? getContactUrl(listing) : undefined;
  const phoneHref = getPhoneHref(listing.phone);
  const mapsUrl = getMapsUrl(listing);

  const btnClass = compact
    ? "inline-flex items-center justify-center rounded-sm px-3.5 py-2 text-xs font-semibold sm:px-4 sm:text-sm"
    : "inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-sm font-semibold";

  const actions: { key: string; href: string; label: string; primary?: boolean }[] = [];

  if (reservationUrl) {
    actions.push({
      key: "reservation",
      href: reservationUrl,
      label: "Book a Table",
      primary: true,
    });
  }

  if (websiteUrl) {
    actions.push({
      key: "website",
      href: websiteUrl,
      label: "Visit Website",
      primary: !reservationUrl,
    });
  } else if (contactUrl) {
    actions.push({
      key: "contact",
      href: contactUrl,
      label: listing.primaryCtaLabel ?? "Contact",
      primary: !reservationUrl,
    });
  }

  if (phoneHref) {
    actions.push({
      key: "phone",
      href: phoneHref,
      label: "Call",
    });
  }

  if (mapsUrl) {
    actions.push({
      key: "maps",
      href: mapsUrl,
      label: "Directions",
    });
  }

  if (actions.length === 0 && includeViewListing && listingHref) {
    actions.push({
      key: "listing",
      href: listingHref,
      label: "View Listing",
      primary: true,
    });
  }

  if (actions.length === 0) return null;

  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-3">
      {actions.map((action) => {
        const className = `${btnClass} ${
          action.primary
            ? "bg-coral font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light"
            : action.key === "phone" || action.key === "website"
              ? "border border-teal/25 bg-white/60 text-teal transition-colors hover:border-teal hover:bg-teal hover:text-cream"
              : "border border-sand-dark/60 text-navy/70 transition-colors hover:border-teal hover:text-teal"
        }`;

        if (action.key === "listing" && listingHref) {
          return (
            <Link key={action.key} href={listingHref} className={className}>
              {action.label}
            </Link>
          );
        }

        return (
          <a
            key={action.key}
            href={action.href}
            target={
              action.href.startsWith("tel:") || action.href.startsWith("mailto:")
                ? undefined
                : "_blank"
            }
            rel={
              action.href.startsWith("tel:") || action.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className={className}
          >
            {action.label}
          </a>
        );
      })}

      {includeViewListing && listingHref && actions.some((a) => a.key !== "listing") && (
        <Link
          href={listingHref}
          className={`${btnClass} border border-sand-dark/60 text-navy/70 transition-colors hover:border-teal hover:text-teal`}
        >
          View Listing
        </Link>
      )}
    </div>
  );
}
