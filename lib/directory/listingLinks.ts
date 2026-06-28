import type { DirectoryListing } from "./types";

const PLACEHOLDER_HOSTS = ["example.com", "example.org", "example.net", "placeholder.com"];

export function isPlaceholderUrl(url?: string | null): boolean {
  if (!url || url === "#") return true;

  if (url.startsWith("mailto:")) {
    return PLACEHOLDER_HOSTS.some((host) => url.includes(`@${host}`));
  }

  if (url.startsWith("tel:")) return false;

  try {
    const { hostname } = new URL(url);
    const host = hostname.toLowerCase();
    return PLACEHOLDER_HOSTS.some(
      (placeholder) => host === placeholder || host.endsWith(`.${placeholder}`),
    );
  } catch {
    return true;
  }
}

export function getUsableUrl(url?: string): string | undefined {
  if (!url || isPlaceholderUrl(url)) return undefined;
  return url;
}

export function getWebsiteUrl(listing: DirectoryListing): string | undefined {
  const website = getUsableUrl(listing.websiteUrl);
  if (website) return website;

  const primary = listing.primaryCtaUrl;
  if (!primary || primary.startsWith("mailto:") || primary.startsWith("tel:")) {
    return undefined;
  }

  return getUsableUrl(primary);
}

export function getReservationUrl(listing: DirectoryListing): string | undefined {
  return getUsableUrl(listing.reservationUrl);
}

export function getMapsUrl(listing: DirectoryListing): string | undefined {
  return getUsableUrl(listing.mapsUrl);
}

export function getPhoneHref(phone?: string): string | undefined {
  if (!phone) return undefined;
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) return undefined;
  return `tel:${digits}`;
}

export function getEmailAddress(email?: string): string | undefined {
  if (!email) return undefined;
  if (isPlaceholderUrl(`mailto:${email}`)) return undefined;
  return email;
}

export function getMailtoUrl(email?: string): string | undefined {
  const address = getEmailAddress(email);
  return address ? `mailto:${address}` : undefined;
}

/** Booking/reservation CTA for listing detail pages (non-card contexts) */
export function getPrimaryBookingUrl(listing: DirectoryListing): string | undefined {
  const reservation = getReservationUrl(listing);
  if (reservation) return reservation;

  const website = getWebsiteUrl(listing);
  if (website) return website;

  const primary = listing.primaryCtaUrl;
  if (!primary) return undefined;

  if (primary.startsWith("mailto:") || primary.startsWith("tel:")) {
    return getUsableUrl(primary) ?? undefined;
  }

  return getUsableUrl(primary);
}

export function getContactUrl(listing: DirectoryListing): string | undefined {
  const primary = listing.primaryCtaUrl;
  if (primary?.startsWith("mailto:")) {
    return getUsableUrl(primary);
  }

  return getMailtoUrl(listing.email);
}

export function getPrimaryBookingLabel(listing: DirectoryListing): string {
  if (getReservationUrl(listing)) {
    return listing.type === "restaurant" ? "Book a Table" : listing.primaryCtaLabel ?? "Book Now";
  }
  if (getWebsiteUrl(listing)) {
    return listing.type === "restaurant" ? "Visit Website" : listing.primaryCtaLabel ?? "Visit Website";
  }
  return listing.primaryCtaLabel ?? "Contact";
}
