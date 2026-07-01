import type { DirectoryListing } from "./types";
import {
  getContactUrl,
  getMapsUrl,
  getPhoneHref,
  getReservationUrl,
  getUsableUrl,
  getWebsiteUrl,
} from "./listingLinks";

export type ListingAction = {
  key: string;
  href: string;
  label: string;
  primary?: boolean;
};

export function getExcursionBookingUrl(
  listing: DirectoryListing,
): string | undefined {
  return (
    getUsableUrl(listing.bookingUrl) ??
    getUsableUrl(listing.reservationUrl) ??
    getUsableUrl(listing.affiliateUrl)
  );
}

/** Type-aware CTAs — only actions that fit the listing category */
export function getListingActions(listing: DirectoryListing): ListingAction[] {
  const actions: ListingAction[] = [];
  const websiteUrl = getWebsiteUrl(listing);
  const phoneHref = getPhoneHref(listing.phone);
  const contactUrl = !websiteUrl ? getContactUrl(listing) : undefined;
  const mapsUrl = getMapsUrl(listing);

  if (listing.type === "restaurant") {
    const reservationUrl = getReservationUrl(listing);

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
    }

    if (phoneHref) {
      actions.push({ key: "phone", href: phoneHref, label: "Call" });
    }

    if (mapsUrl) {
      actions.push({ key: "maps", href: mapsUrl, label: "Directions" });
    }
  } else if (listing.type === "excursion") {
    const bookingUrl = getExcursionBookingUrl(listing);

    if (bookingUrl) {
      actions.push({
        key: "booking",
        href: bookingUrl,
        label: "Book Tour",
        primary: true,
      });
    }

    if (websiteUrl) {
      actions.push({
        key: "website",
        href: websiteUrl,
        label: "Visit Website",
        primary: !bookingUrl,
      });
    } else if (contactUrl) {
      actions.push({
        key: "contact",
        href: contactUrl,
        label: listing.primaryCtaLabel ?? "Contact",
        primary: !bookingUrl,
      });
    }

    if (phoneHref) {
      actions.push({ key: "phone", href: phoneHref, label: "Call" });
    }

    if (mapsUrl) {
      actions.push({ key: "maps", href: mapsUrl, label: "Directions" });
    }
  } else if (listing.type === "business") {
    if (websiteUrl) {
      actions.push({
        key: "website",
        href: websiteUrl,
        label: "Visit Website",
        primary: true,
      });
    } else if (contactUrl) {
      actions.push({
        key: "contact",
        href: contactUrl,
        label: listing.primaryCtaLabel ?? "Contact",
        primary: true,
      });
    }

    if (phoneHref) {
      actions.push({ key: "phone", href: phoneHref, label: "Call" });
    }
  }

  return actions;
}

/** Service listings show real CTAs on cards instead of a generic profile link */
export function shouldShowActionsOnCard(
  listing: DirectoryListing,
  showActions = false,
): boolean {
  if (showActions) return true;
  if (listing.type === "business") {
    return getListingActions(listing).length > 0;
  }
  return false;
}
