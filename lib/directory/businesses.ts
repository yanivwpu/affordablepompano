import { businessCategories as categoryDefinitions } from "./categories";
import type { DirectoryListing } from "./types";

/** Re-export shared category taxonomy for hub pages and filters */
export const businessCategories = categoryDefinitions.map((cat) => ({
  id: cat.id,
  title: cat.title,
  description: cat.description,
}));

export type BusinessCategoryId = (typeof businessCategories)[number]["id"];

/** Paid local business directory listings */
export const businessListings: DirectoryListing[] = [
  {
    id: "atlantic-title-pompano",
    slug: "atlantic-title-pompano",
    name: "Atlantic Title & Closing",
    type: "business",
    category: "Title Companies",
    categoryId: "title",
    plan: "standard",
    shortDescription:
      "Broward County title and closing services for buyers, sellers, and relocators moving to Pompano Beach.",
    fullDescription:
      "Atlantic Title & Closing supports residential and commercial closings across Broward County with local examiners who know Pompano flood zones, HOA requirements, and snowbird purchase timelines. Standard business listings include a dedicated profile page, category placement in the Local Businesses directory, and direct contact links for phone, email, and website.",
    image: "/images/guides/suburban-neighborhood.jpg",
    imageAlt: "Professional office building in a South Florida business district",
    phone: "(954) 555-0195",
    email: "hello@example.com",
    websiteUrl: "https://example.com/atlantic-title",
    primaryCtaLabel: "Contact Office",
    primaryCtaUrl: "mailto:hello@affordablepompano.com?subject=Atlantic%20Title%20inquiry",
    address: "400 E Atlantic Blvd, Pompano Beach, FL 33060",
    serviceArea: "Pompano Beach & Broward County",
    mapsUrl: "https://maps.google.com/?q=Atlantic+Blvd+Pompano+Beach+FL",
    hours: "Mon–Fri 8:30am–5:30pm",
    isSponsored: true,
    isDemo: true,
    meta: ["Residential & Commercial"],
  },
];
