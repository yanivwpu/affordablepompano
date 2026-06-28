export type DirectoryType = "restaurant" | "excursion" | "business";

export type ListingPlan = "standard" | "featured";

/** Extended sponsorship tier for future monetization (maps to advertise.ts packages) */
export type SponsorTier =
  | "standard"
  | "featured"
  | "category-sponsor"
  | "homepage-featured"
  | "newsletter-sponsor";

export type SocialLink = {
  platform: string;
  url: string;
};

export type ListingMedia = {
  src: string;
  alt: string;
  caption?: string;
};

export type ListingHoursDay = {
  day: string;
  open?: string;
  close?: string;
  closed?: boolean;
};

export type ListingHours = {
  /** Human-readable summary — displayed today */
  summary?: string;
  /** Structured schedule for future UI */
  schedule?: ListingHoursDay[];
  /** e.g. "America/New_York" */
  timezone?: string;
};

export type ListingPromotion = {
  id: string;
  title: string;
  description?: string;
  code?: string;
  validFrom?: string;
  validUntil?: string;
  url?: string;
};

export type ListingEvent = {
  id: string;
  title: string;
  date?: string;
  endDate?: string;
  description?: string;
  url?: string;
};

export type ListingReview = {
  score?: number;
  count?: number;
  source?: string;
  url?: string;
};

export type DirectoryListing = {
  id: string;
  slug: string;
  name: string;
  type: DirectoryType;
  /** Primary display category label */
  category: string;
  /** Primary category filter key */
  categoryId: string;
  /** Additional category/tag keys for multi-category listings */
  categoryIds?: string[];
  tags?: string[];
  amenities?: string[];
  plan: ListingPlan;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  logo?: string;
  logoAlt?: string;
  phone?: string;
  email?: string;
  websiteUrl?: string;
  primaryCtaLabel?: string;
  primaryCtaUrl?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  reservationUrl?: string;
  bookingUrl?: string;
  affiliateUrl?: string;
  address?: string;
  serviceArea?: string;
  mapsUrl?: string;
  /** @deprecated Prefer structuredHours.summary — kept for backward compatibility */
  hours?: string;
  structuredHours?: ListingHours;
  socialLinks?: SocialLink[];
  gallery?: ListingMedia[];
  videoUrl?: string;
  reviews?: ListingReview;
  promotions?: ListingPromotion[];
  events?: ListingEvent[];
  isSponsored: boolean;
  isDemo?: boolean;
  /** Overrides display tier for sponsorship badges */
  sponsorTier?: SponsorTier;
  /** ISO 8601 date when paid placement expires */
  sponsorExpiresAt?: string;
  isHomepageFeatured?: boolean;
  isNewsletterSponsor?: boolean;
  sponsorLabel?: string;
  featuredRank?: number;
  /** Human-readable badge labels for cards (Featured, Editor's Pick, etc.) */
  displayBadges?: ListingDisplayBadge[];
  /** Short cuisine label e.g. "Seafood", "Italian" */
  cuisine?: string;
  /** Set explicitly when open-status is known — do not guess */
  isOpenNow?: boolean;
  priceRange?: string;
  meta?: string[];
};

export type ListingDisplayBadge =
  | "featured"
  | "editors-pick"
  | "waterfront-favorite"
  | "best-breakfast"
  | "popular";
