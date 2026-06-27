import type { DirectoryListing, ListingPlan } from "./types";

/** Matches advertise.ts tiers — extensible without schema redesign */
export type SponsorDisplayTier =
  | "standard"
  | "featured"
  | "category-sponsor"
  | "homepage-featured"
  | "newsletter-sponsor";

export type ListingSponsorship = {
  plan: ListingPlan;
  displayTier: SponsorDisplayTier;
  isSponsored: boolean;
  isCategorySponsor?: boolean;
  isHomepageFeatured?: boolean;
  isNewsletterSponsor?: boolean;
  sponsorLabel?: string;
};

export function resolveListingSponsorship(
  listing: DirectoryListing,
): ListingSponsorship {
  const displayTier: SponsorDisplayTier = listing.sponsorTier ?? listing.plan;

  return {
    plan: listing.plan,
    displayTier,
    isSponsored: listing.isSponsored,
    isCategorySponsor: displayTier === "category-sponsor",
    isHomepageFeatured: displayTier === "homepage-featured" || listing.isHomepageFeatured,
    isNewsletterSponsor: displayTier === "newsletter-sponsor" || listing.isNewsletterSponsor,
    sponsorLabel: listing.sponsorLabel,
  };
}

export function sponsorBadgeLabel(listing: DirectoryListing): string | null {
  const s = resolveListingSponsorship(listing);
  if (s.sponsorLabel) return s.sponsorLabel;
  if (s.isHomepageFeatured) return "Homepage Featured";
  if (s.isCategorySponsor) return "Category Sponsor";
  if (s.isNewsletterSponsor) return "Newsletter Sponsor";
  if (s.plan === "featured") return "Featured";
  if (s.isSponsored) return "Partner";
  return null;
}
