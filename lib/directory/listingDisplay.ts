import type { DirectoryListing, ListingDisplayBadge } from "./types";
import { resolveListingSponsorship, sponsorBadgeLabel } from "./sponsorship";

const BADGE_LABELS: Record<ListingDisplayBadge, string> = {
  featured: "Featured",
  "editors-pick": "Editor's Pick",
  "waterfront-favorite": "Waterfront Favorite",
  "best-breakfast": "Best Breakfast",
  popular: "Popular",
};

const BADGE_STYLES: Record<ListingDisplayBadge, string> = {
  featured: "bg-coral text-cream",
  "editors-pick": "bg-teal text-cream",
  "waterfront-favorite": "bg-navy/85 text-cream backdrop-blur-sm",
  "best-breakfast": "bg-sunset/90 text-navy backdrop-blur-sm",
  popular: "bg-cream/95 text-teal backdrop-blur-sm",
};

export function getListingBadges(
  listing: DirectoryListing,
): { label: string; style: string }[] {
  const badges: { label: string; style: string }[] = [];
  const seen = new Set<string>();

  function addBadge(key: ListingDisplayBadge | string, label?: string) {
    const resolved = label ?? (key in BADGE_LABELS ? BADGE_LABELS[key as ListingDisplayBadge] : key);
    if (seen.has(resolved)) return;
    seen.add(resolved);
    const style =
      key in BADGE_STYLES
        ? BADGE_STYLES[key as ListingDisplayBadge]
        : "bg-cream/95 text-teal backdrop-blur-sm";
    badges.push({ label: resolved, style });
  }

  if (listing.plan === "featured" || listing.displayBadges?.includes("featured")) {
    addBadge("featured");
  }

  for (const badge of listing.displayBadges ?? []) {
    if (badge !== "featured") addBadge(badge);
  }

  const sponsorLabel = sponsorBadgeLabel(listing);
  if (sponsorLabel && sponsorLabel !== "Featured" && sponsorLabel !== "Partner") {
    addBadge(sponsorLabel, sponsorLabel);
  } else if (listing.isSponsored && !listing.plan && !listing.displayBadges?.length) {
    addBadge("Partner", "Partner");
  }

  return badges;
}

export function formatListingRating(listing: DirectoryListing): string | null {
  const { score, count } = listing.reviews ?? {};
  if (score == null || count == null) return null;
  return `${score.toFixed(1)} (${count.toLocaleString()} reviews)`;
}
