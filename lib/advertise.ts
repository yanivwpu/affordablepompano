export const SPONSORSHIP_INQUIRY_EMAIL = "hello@affordablepompano.com";

export const FEATURED_PLACEMENT_NOTE =
  "Featured listings are upgraded placements with a larger card, featured badge, and priority position in their category. Multiple featured listings can appear at the same time.";

export const STANDARD_PLACEMENT_NOTE =
  "Standard listings give your business a dedicated page and steady visibility in the directory.";

export const EXCLUSIVE_PLACEMENT_NOTE =
  "This premium placement is shown as the Featured Local Realtor card directly below the Homes search and results. Limited to one business at a time.";

export type AdvertiseTier = {
  id: string;
  label: string;
  subtitle?: string;
  price: string;
  period: string;
  inventory: string;
  includes: string;
  placementTier: "standard" | "featured" | "exclusive";
  perks: string[];
  placementNote?: string;
};

export type AdvertisePackageGroup = {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  highlighted?: boolean;
  tiers: AdvertiseTier[];
};

export type AdvertiseAddOn = {
  id: string;
  title: string;
  tagline?: string;
  description: string;
  price: string;
  period: string;
  inventory: string;
  bestFor: string;
  perks: string[];
};

export const listingPackages: AdvertisePackageGroup[] = [
  {
    id: "restaurant-listing",
    title: "Restaurant Listing",
    description:
      "Get a dedicated restaurant page and placement in our Food & Eats directory — the listing itself is the product.",
    bestFor:
      "Restaurants, cafes, bars, coffee shops, bakeries, and local eateries.",
    highlighted: true,
    tiers: [
      {
        id: "restaurant-listing-standard",
        label: "Standard Listing",
        subtitle:
          "Great for businesses that want a professional online presence and local visibility.",
        price: "$29",
        period: "/ month",
        inventory: "Standard Listings Available",
        includes:
          "Directory listing plus a dedicated restaurant page with logo, cover image, and contact links.",
        placementTier: "standard",
        perks: [
          "Dedicated /food/[your-business] page",
          "Logo and cover image",
          "Website and phone links",
          "Category placement in Food & Eats",
        ],
      },
      {
        id: "restaurant-listing-featured",
        label: "Featured Listing",
        subtitle:
          "Best for businesses that want maximum exposure and priority placement.",
        price: "$99",
        period: "/ month",
        inventory: "Featured Placement Available",
        includes:
          "Everything in Standard plus top placement, larger card, featured badge, and newsletter mention.",
        placementTier: "featured",
        perks: [
          "Everything in Standard",
          "Top placement in Food & Eats",
          "Larger featured card",
          "Featured badge",
          "Newsletter mention",
        ],
      },
    ],
  },
  {
    id: "excursion-listing",
    title: "Excursion Listing",
    description:
      "List your charter, tour, rental, or attraction with a dedicated excursion page in our Things To Do directory.",
    bestFor:
      "Fishing charters, boat tours, watersports, rentals, attractions, and guided experiences.",
    tiers: [
      {
        id: "excursion-listing-standard",
        label: "Standard Listing",
        subtitle:
          "Great for businesses that want a professional online presence and local visibility.",
        price: "$29",
        period: "/ month",
        inventory: "Standard Listings Available",
        includes:
          "Directory listing plus a dedicated excursion page with booking links and activity details.",
        placementTier: "standard",
        perks: [
          "Dedicated /excursions/[your-business] page",
          "Logo and cover image",
          "Website and booking links",
          "Category placement in Excursions",
        ],
      },
      {
        id: "excursion-listing-featured",
        label: "Featured Listing",
        subtitle:
          "Best for businesses that want maximum exposure and priority placement.",
        price: "$79",
        period: "/ month",
        inventory: "Featured Placement Available",
        includes:
          "Everything in Standard plus top placement, larger card, featured badge, and seasonal promotion mention.",
        placementTier: "featured",
        perks: [
          "Everything in Standard",
          "Top placement in Excursions",
          "Featured excursion partner slot",
          "Larger featured card",
          "Seasonal promotion mention",
        ],
      },
    ],
  },
  {
    id: "business-listing",
    title: "Local Business Listing",
    description:
      "Reach Pompano residents and newcomers with a dedicated business page in our local services directory.",
    bestFor:
      "Attorneys, insurance agents, photographers, contractors, medical practices, and local service businesses.",
    tiers: [
      {
        id: "business-listing-standard",
        label: "Standard Listing",
        subtitle:
          "Great for businesses that want a professional online presence and local visibility.",
        price: "$29",
        period: "/ month",
        inventory: "Standard Listings Available",
        includes:
          "Directory listing plus a dedicated business page with contact info and category placement.",
        placementTier: "standard",
        perks: [
          "Dedicated /businesses/[your-business] page",
          "Logo and cover image",
          "Phone, email, and website links",
          "Category placement in Local Businesses",
        ],
      },
      {
        id: "business-listing-featured",
        label: "Featured Listing",
        subtitle:
          "Best for businesses that want maximum exposure and priority placement.",
        price: "$59",
        period: "/ month",
        inventory: "Featured Placement Available",
        includes:
          "Everything in Standard plus top placement, larger card, featured badge, and homepage/category visibility.",
        placementTier: "featured",
        perks: [
          "Everything in Standard",
          "Top placement in Local Businesses",
          "Larger featured card",
          "Featured badge",
          "Homepage and category visibility",
        ],
      },
    ],
  },
  {
    id: "real-estate-professional-listing",
    title: "Real Estate Professional Listing",
    description:
      "Perfect for professionals serving home buyers, sellers, investors, and property owners throughout Pompano Beach.",
    bestFor:
      "Realtors, property managers, title companies, mortgage lenders, home inspectors, and real estate attorneys.",
    tiers: [
      {
        id: "real-estate-professional-listing-standard",
        label: "Standard Listing",
        price: "$29",
        period: "/ month",
        inventory: "Standard Listings Available",
        includes:
          "Dedicated professional profile with logo, cover image, business description, and contact links in the Real Estate Professionals directory.",
        placementTier: "standard",
        perks: [
          "Dedicated SEO-friendly professional profile page",
          "Logo and cover image",
          "Business description",
          "Website and contact information",
          "Category placement",
          "Google Maps and contact links",
          "Search-friendly profile page",
        ],
      },
      {
        id: "real-estate-professional-listing-featured",
        label: "Featured Listing",
        subtitle:
          "Best for professionals who want maximum exposure and priority placement.",
        price: "$99",
        period: "/ month",
        inventory: "Featured Placement Available",
        includes:
          "Everything in Standard plus featured badge, larger premium card, priority directory placement, and higher visibility across the site.",
        placementTier: "featured",
        perks: [
          "Everything in Standard",
          "Featured badge",
          "Larger premium card",
          "Priority placement in the Real Estate Professionals directory",
          "Featured in relevant real estate guides",
          "Higher visibility throughout the site",
        ],
      },
    ],
  },
];

export type ExclusiveHomesPlacementPackage = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  period: string;
  inventory: string;
  ctaLabel: string;
  perks: string[];
  placementNote: string;
};

export const exclusiveHomesPagePlacement: ExclusiveHomesPlacementPackage = {
  id: "real-estate-homes-page-placement",
  title: "👑 Exclusive Homes Page Placement",
  subtitle: "Limited to one business at a time.",
  description:
    "Maximum visibility on the Homes page for real estate professionals.",
  price: "$149",
  period: "/ month",
  inventory: "Exclusive Homes Page Placement Available",
  ctaLabel: "Reserve Exclusive Homes Placement",
  perks: [
    "Everything in Featured Listing",
    "Largest profile card",
    "Exclusive card below MLS search/results",
    "Headshot & brokerage logo",
    "Direct call, email & website buttons",
    "Featured on Homes Page badge",
    "Maximum exposure to buyers, sellers, renters and investors",
  ],
  placementNote: EXCLUSIVE_PLACEMENT_NOTE,
};

export const addOnPackages: AdvertiseAddOn[] = [
  {
    id: "homepage-feature",
    title: "⭐ Exclusive Homepage Feature",
    tagline: "Limited to one business at a time.",
    description:
      "Maximum visibility at the front door of Affordable Pompano — ideal for launches, events, or seasonal campaigns.",
    price: "$179",
    period: "/ month",
    inventory: "Exclusive Homepage Feature Available",
    bestFor: "Businesses seeking maximum visibility across the entire website.",
    perks: [
      "Business logo",
      "Featured image",
      "Site-wide premium placement",
      "Dedicated promotion",
    ],
  },
  {
    id: "newsletter-sponsor",
    title: "📰 The Pompano Post Newsletter Sponsor",
    description:
      "Show up in The Pompano Post — our friendly weekly email with restaurant picks, events, and local news.",
    price: "$59",
    period: "/ month",
    inventory: "Newsletter Sponsor Available",
    bestFor: "Any business seeking recurring local brand exposure.",
    perks: [
      "Logo placement",
      "Link in newsletter",
      "Mention in issue",
      "Featured sponsor section",
    ],
  },
];

/** Flat options for contact form and deep links */
export const advertisePackageOptions = [
  ...listingPackages.flatMap((group) =>
    group.tiers.map((tier) => ({
      id: tier.id,
      label: `${group.title} — ${tier.label} — ${tier.price}${tier.period}`,
    })),
  ),
  {
    id: exclusiveHomesPagePlacement.id,
    label: `${exclusiveHomesPagePlacement.title} — ${exclusiveHomesPagePlacement.price}${exclusiveHomesPagePlacement.period}`,
  },
  ...addOnPackages.map((pkg) => ({
    id: pkg.id,
    label: `${pkg.title} — ${pkg.price}${pkg.period}`,
  })),
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
  "Featured placements put you first — standard listings keep you visible at a lower monthly cost.",
  "Every page is built around Pompano Beach homes, restaurants, and activities.",
  "Simple monthly pricing with no hidden fees or long-term contracts required.",
  "You work with a local team that knows the community — not a distant call center.",
] as const;

export const advertisePackagesIntro =
  "Affordable Pompano reaches local residents, visitors, renters, homebuyers, and vacation travelers actively researching Pompano Beach. Choose a directory listing — standard or featured — plus optional homepage and newsletter add-ons.";

export function isValidAdvertisePackageId(packageId: string): boolean {
  return advertisePackageOptions.some((p) => p.id === packageId);
}

export function getAdvertisePackageLabel(packageId: string): string {
  const option = advertisePackageOptions.find((p) => p.id === packageId);
  return option ? option.label : packageId;
}
