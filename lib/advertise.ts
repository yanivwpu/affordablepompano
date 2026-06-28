export const SPONSORSHIP_INQUIRY_EMAIL = "hello@affordablepompano.com";

export type VisibilityPackage = {
  id: string;
  title: string;
  /** One-line positioning */
  tagline: string;
  price: string;
  priceNote?: string;
  period: string;
  perks: string[];
  ctaLabel: string;
  note?: string;
  badge?: string;
  /** Visual treatment on the packages page */
  variant?: "default" | "realtor" | "premium";
  highlighted?: boolean;
};

/** General local business visibility — restaurants, excursions, pros, etc. */
export const visibilityPackages: VisibilityPackage[] = [
  {
    id: "business-listing",
    title: "Business Listing",
    tagline: "Be found by people exploring Pompano.",
    price: "$29",
    period: "/mo",
    perks: [
      "Business profile page",
      "Category listing",
      "Website, phone, and map",
      "Local SEO visibility",
    ],
    ctaLabel: "Get Listed",
  },
  {
    id: "featured-business",
    title: "Featured Business",
    tagline: "Stand out in your category.",
    price: "$59",
    period: "/mo",
    perks: [
      "Featured placement",
      "Featured badge",
      "Enhanced profile",
      "More visibility across the site",
    ],
    ctaLabel: "Become Featured",
    badge: "Most Popular",
    highlighted: true,
  },
  {
    id: "homepage-spotlight",
    title: "Homepage Spotlight",
    tagline: "Get premium exposure on the main site.",
    price: "$149",
    period: "/mo",
    perks: [
      "Homepage placement",
      "Relevant hub page placement",
      "Premium feature card",
      "Great for restaurants, excursions, and local pros",
    ],
    ctaLabel: "Reserve Spotlight",
    note: "Limited spots",
  },
];

/** Real estate lead-generation placement — separate from directory listings */
export const featuredRealtorPackage: VisibilityPackage = {
  id: "featured-realtor",
  title: "Featured Realtor",
  tagline:
    "Be the trusted local expert people see while browsing homes, rentals, and relocation content.",
  price: "$149",
  priceNote: "or higher",
  period: "/mo",
  perks: [
    "Featured on the Homes page",
    "Placement near property search / home discovery",
    "Lead-generation CTA",
    "Great for buyers, sellers, investors, and relocation traffic",
  ],
  ctaLabel: "Reserve Realtor Feature",
  note: "Limited availability",
  variant: "realtor",
};

export const categoryLeaderPackage: VisibilityPackage = {
  id: "category-leader",
  title: "Category Leader",
  tagline: "Be the top recommendation in your category.",
  price: "$299",
  period: "/mo",
  perks: [
    "Top category placement",
    "Exclusive category position",
    "Premium visibility",
    "Best for serious local businesses",
  ],
  ctaLabel: "Become Category Leader",
  note: "Only 1 per category",
  variant: "premium",
};

export const categoryLeaderExamples = [
  "Seafood Category Leader",
  "Insurance Category Leader",
  "Mortgage Category Leader",
  "Title & Closing Category Leader",
  "Fishing Charter Category Leader",
  "HVAC Category Leader",
] as const;

export const newsletterSpotlightPackage: VisibilityPackage = {
  id: "newsletter-spotlight",
  title: "The Pompano Post Newsletter Spotlight",
  tagline: "Reach locals directly in their inbox.",
  price: "$59",
  period: "/mo",
  perks: [
    "Featured in local newsletter",
    "Link to your business",
    "Great for events, offers, and announcements",
  ],
  ctaLabel: "Reserve Newsletter Spot",
};

/** Maps legacy package IDs from older links to current packages */
export const legacyPackageAliases: Record<string, string> = {
  "restaurant-listing-standard": "business-listing",
  "restaurant-listing-featured": "featured-business",
  "excursion-listing-standard": "business-listing",
  "excursion-listing-featured": "featured-business",
  "business-listing-standard": "business-listing",
  "business-listing-featured": "featured-business",
  "real-estate-professional-listing-standard": "business-listing",
  "real-estate-professional-listing-featured": "featured-business",
  "real-estate-homes-page-placement": "featured-realtor",
  "homepage-feature": "homepage-spotlight",
  "newsletter-sponsor": "newsletter-spotlight",
};

export const allVisibilityPackages: VisibilityPackage[] = [
  ...visibilityPackages,
  featuredRealtorPackage,
  categoryLeaderPackage,
];

/** Flat options for contact form and deep links */
export const advertisePackageOptions = [
  ...allVisibilityPackages.map((pkg) => ({
    id: pkg.id,
    label: `${pkg.title} — ${pkg.price}${pkg.priceNote ? ` ${pkg.priceNote}` : ""}${pkg.period}`,
  })),
  {
    id: newsletterSpotlightPackage.id,
    label: `${newsletterSpotlightPackage.title} — ${newsletterSpotlightPackage.price}${newsletterSpotlightPackage.period}`,
  },
] as const;

export const advertiseTrustStats = [
  { value: "100%", label: "Pompano Beach–focused audience" },
  { value: "High-intent", label: "Visitors planning homes, food & fun" },
  { value: "Local", label: "Real people, not a corporate ad network" },
] as const;

export const advertiseBenefits = [
  {
    title: "Home buyers & renters",
    description:
      "People actively searching for places to live, lease, or vacation in Pompano Beach.",
  },
  {
    title: "Tourists & day-trippers",
    description:
      "Visitors planning where to eat, what to do, and how to make the most of their beach day.",
  },
  {
    title: "Snowbirds & seasonal guests",
    description:
      "Part-time residents looking for trusted local spots they can return to year after year.",
  },
  {
    title: "Newcomers & relocators",
    description:
      "Families and professionals moving to South Florida who need honest recommendations fast.",
  },
] as const;

export const advertiseWhyUs = [
  "Featured placements help you stand out — listings keep you visible at a lower monthly cost.",
  "Every page is built around Pompano Beach homes, restaurants, and activities.",
  "Simple monthly pricing with no hidden fees or long-term contracts required.",
  "You work with a local team that knows the community — not a distant call center.",
] as const;

export function resolvePackageId(packageId: string): string {
  return legacyPackageAliases[packageId] ?? packageId;
}

export function isValidAdvertisePackageId(packageId: string): boolean {
  const resolved = resolvePackageId(packageId);
  return advertisePackageOptions.some((p) => p.id === resolved);
}

export function getAdvertisePackageLabel(packageId: string): string {
  const resolved = resolvePackageId(packageId);
  const option = advertisePackageOptions.find((p) => p.id === resolved);
  return option ? option.label : packageId;
}

export function getVisibilityPackage(packageId: string): VisibilityPackage | undefined {
  const resolved = resolvePackageId(packageId);
  if (resolved === newsletterSpotlightPackage.id) return newsletterSpotlightPackage;
  return allVisibilityPackages.find((p) => p.id === resolved);
}
