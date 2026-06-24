export type DirectoryType = "restaurant" | "excursion" | "business";

export type ListingPlan = "standard" | "featured";

export type SocialLink = {
  platform: string;
  url: string;
};

export type DirectoryListing = {
  id: string;
  slug: string;
  name: string;
  type: DirectoryType;
  category: string;
  categoryId: string;
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
  primaryCtaLabel: string;
  primaryCtaUrl: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  address?: string;
  serviceArea?: string;
  mapsUrl?: string;
  hours?: string;
  socialLinks?: SocialLink[];
  isSponsored: boolean;
  isDemo?: boolean;
  featuredRank?: number;
  priceRange?: string;
  meta?: string[];
};
