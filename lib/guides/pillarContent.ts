import type { Guide } from "./types";
import { guidePath } from "./helpers";

export type PillarGuideLink = {
  slug: string;
  label?: string;
};

export type PillarConfig = {
  hubPath: string;
  hubLabel: string;
  guidesTitle: string;
  guidesDescription?: string;
  guides: PillarGuideLink[];
  directoryCategoryIds: string[];
  directoryType: "restaurant" | "excursion" | "business";
  directoryTitle?: string;
  directoryDescription?: string;
  advertisePackageId: string;
  advertiseCtaLabel?: string;
};

export const foodPillar: PillarConfig = {
  hubPath: "/food",
  hubLabel: "Food & Eats",
  guidesTitle: "Local Food Guides",
  guidesDescription:
    "In-depth guides for seafood, waterfront dining, breakfast, and happy hour — written by locals who eat here year-round.",
  guides: [
    { slug: "best-seafood-restaurants-pompano-beach" },
    { slug: "best-waterfront-restaurants-pompano-beach" },
    { slug: "best-breakfast-spots-pompano-beach" },
    { slug: "happy-hour-guide-pompano-beach" },
    { slug: "happy-hours-near-the-beach" },
  ],
  directoryCategoryIds: [
    "seafood",
    "breakfast",
    "coffee",
    "waterfront",
    "happy-hour",
    "italian",
    "pizza",
    "mexican",
    "sushi",
    "fine-dining",
    "family-dining",
  ],
  directoryType: "restaurant",
  directoryTitle: "Featured Restaurants",
  directoryDescription:
    "Partner listings with dedicated pages, hours, maps, and direct contact links.",
  advertisePackageId: "business-listing",
  advertiseCtaLabel: "List Your Restaurant",
};

export const homesPillar: PillarConfig = {
  hubPath: "/homes",
  hubLabel: "Homes",
  guidesTitle: "Living & Buying Guides",
  guidesDescription:
    "Neighborhood comparisons, relocation checklists, and honest cost-of-living advice for Pompano Beach.",
  guides: [
    { slug: "buying-home-pompano-beach" },
    { slug: "moving-to-pompano-beach" },
    { slug: "moving-to-pompano-beach-complete-guide" },
    { slug: "cost-of-living-pompano-beach" },
    { slug: "best-neighborhoods-pompano-beach" },
    { slug: "neighborhood-spotlight-old-pompano" },
  ],
  directoryCategoryIds: [
    "real-estate",
    "mortgage",
    "title",
    "insurance",
    "attorneys",
    "inspectors",
  ],
  directoryType: "business",
  directoryTitle: "Trusted Local Businesses",
  directoryDescription:
    "Lenders, title companies, insurance agents, and home pros serving Pompano buyers and residents.",
  advertisePackageId: "featured-realtor",
  advertiseCtaLabel: "Feature Your Practice",
};

export const excursionsPillar: PillarConfig = {
  hubPath: "/excursions",
  hubLabel: "Excursions",
  guidesTitle: "Things To Do Guides",
  guidesDescription:
    "Fishing, boat tours, beaches, and family outings — practical guides for visitors and snowbirds.",
  guides: [
    { slug: "pompano-beach-fishing-guide" },
    { slug: "best-boat-tours-pompano-beach" },
    { slug: "best-beaches-pompano-beach" },
    { slug: "weekend-guide-pompano-beach" },
    { slug: "family-friendly-pompano-beach" },
    { slug: "best-things-to-do-pompano-beach" },
  ],
  directoryCategoryIds: [
    "fishing-charters",
    "boat-tours",
    "snorkeling",
    "kayaking",
    "family-attractions",
  ],
  directoryType: "excursion",
  directoryTitle: "Featured Excursions",
  directoryDescription:
    "Charter captains and tour operators with dedicated listing pages and booking links.",
  advertisePackageId: "business-listing",
  advertiseCtaLabel: "List Your Excursion",
};

export const businessesPillar: PillarConfig = {
  hubPath: "/businesses",
  hubLabel: "Local Businesses",
  guidesTitle: "Guides for Homeowners & Relocators",
  guidesDescription:
    "Buying, moving, and neighborhood guides that link to the local pros you will need at closing and beyond.",
  guides: [
    { slug: "buying-home-pompano-beach" },
    { slug: "best-neighborhoods-pompano-beach" },
    { slug: "cost-of-living-pompano-beach" },
    { slug: "moving-to-pompano-beach-complete-guide" },
  ],
  directoryCategoryIds: [
    "real-estate",
    "mortgage",
    "title",
    "insurance",
    "attorneys",
    "inspectors",
    "contractors",
    "hvac",
  ],
  directoryType: "business",
  directoryTitle: "Partner Listings",
  directoryDescription:
    "Paid directory profiles with dedicated pages, contact details, and category placement.",
  advertisePackageId: "business-listing",
  advertiseCtaLabel: "Get Listed",
};

export function resolvePillarGuides(
  guides: Guide[],
  slugs: PillarGuideLink[],
): Guide[] {
  return slugs
    .map(({ slug }) => guides.find((g) => g.slug === slug))
    .filter((g): g is Guide => Boolean(g));
}

export function pillarGuideCards(
  guides: Guide[],
  slugs: PillarGuideLink[],
) {
  return resolvePillarGuides(guides, slugs).map((g) => ({
    slug: g.slug,
    title: g.title,
    excerpt: g.excerpt,
    category: g.category,
    image: g.image,
    imageAlt: g.imageAlt,
    href: guidePath(g.slug),
  }));
}
