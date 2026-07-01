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
    id: "sorty-mejia-luxury-realtor",
    slug: "sorty-mejia-luxury-realtor",
    name: "Sorty Mejia Luxury Realtor",
    type: "business",
    category: "Real Estate",
    categoryId: "real-estate",
    categoryIds: ["real-estate"],
    tags: [
      "Luxury real estate",
      "Buyers",
      "Sellers",
      "Investors",
      "Property management",
      "Renovations",
      "Landlords",
      "Tenants",
      "South Florida",
    ],
    plan: "featured",
    sponsorTier: "featured",
    sponsorLabel: "Featured Business",
    featuredRank: 1,
    shortDescription:
      "Luxury South Florida Realtor helping buyers, sellers, tenants, landlords, and investors with sales, property management, renovations, and strategic real estate guidance.",
    fullDescription:
      "Sorty Mejia is a luxury South Florida real estate advisor with 13 years of market experience and founder of The Vluue Group, a fully integrated real estate ecosystem serving sellers, buyers, tenants, landlords, and investors.\n\nHer team supports clients across sales, property management, renovations, and investment strategy, creating a seamless experience from planning to closing. For sellers, Sorty focuses on data-driven marketing, elevated digital storytelling, and strategic property preparation designed to maximize visibility, positioning, and return.\n\nClients also gain access to a curated network of trusted lenders, insurance advisors, inspectors, and other professionals to help make each transaction smoother and more confident.",
    image: "/images/businesses/sorty-mejia-headshot.png",
    imageAlt: "Sorty Mejia, luxury South Florida realtor and founder of The Vluue Group",
    imagePresentation: "portrait",
    phone: "(954) 287-0145",
    websiteUrl: "https://leosunproperties.hospitable.rentals",
    primaryCtaLabel: "Visit Website",
    primaryCtaUrl: "https://leosunproperties.hospitable.rentals",
    serviceArea: "Pompano Beach & South Florida",
    isSponsored: true,
    meta: ["Luxury Realtor", "South Florida Real Estate Advisor"],
    seoTitle: "Sorty Mejia Luxury Realtor | Affordable Pompano",
    seoDescription:
      "Meet Sorty Mejia, a luxury South Florida Realtor helping buyers, sellers, landlords, tenants, and investors with real estate sales, property management, renovations, and strategic guidance.",
  },
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
