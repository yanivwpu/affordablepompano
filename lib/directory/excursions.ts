import type { DirectoryListing } from "./types";

const excursionImage = "/images/excursions/fishing-charters.webp";

/** Paid excursion directory listings */
export const excursionListings: DirectoryListing[] = [
  {
    id: "pompano-reef-charters",
    slug: "pompano-reef-charters",
    name: "Pompano Reef Charters",
    type: "excursion",
    category: "Fishing Charters",
    categoryId: "fishing-charters",
    plan: "featured",
    shortDescription:
      "Half-day offshore and reef fishing charters departing from Pompano Beach — mahi, snapper, and family-friendly crews.",
    fullDescription:
      "Pompano Reef Charters runs half-day offshore and nearshore trips for anglers of all experience levels. Boats leave from the Pompano Beach area with bait, tackle, and a crew that knows Broward reef lines and seasonal runs. Featured excursion partners receive top placement in the Excursions directory, a dedicated listing page, featured badge, and seasonal promotion mentions across Affordable Pompano.",
    image: excursionImage,
    imageAlt:
      "Woman smiling on a deep sea fishing charter holding a large fish",
    phone: "(954) 555-0180",
    websiteUrl: "https://example.com/pompano-reef-charters",
    primaryCtaLabel: "Book a Charter",
    primaryCtaUrl: "https://example.com/pompano-reef-charters/book",
    serviceArea: "Pompano Beach, Hillsboro Inlet & offshore Atlantic",
    mapsUrl: "https://maps.google.com/?q=Pompano+Beach+Fishing+Pier+FL",
    hours: "Daily departures · Reserve 24–48 hours ahead in season",
    isSponsored: true,
    isDemo: true,
    featuredRank: 1,
    meta: ["Half Day", "All Ages"],
  },
];
