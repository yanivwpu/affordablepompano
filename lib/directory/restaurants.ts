import { foodImages } from "@/lib/foodImages";
import type { DirectoryListing } from "./types";

/** Paid restaurant directory listings — add entries as partners sign up */
export const restaurantListings: DirectoryListing[] = [
  {
    id: "fishermans-dock",
    slug: "fishermans-dock-seafood",
    name: "Fisherman's Dock Seafood",
    type: "restaurant",
    category: "Seafood",
    categoryId: "seafood",
    plan: "featured",
    shortDescription:
      "Intracoastal seafood with boats tied up out back — fresh catch, cold beer, and harbor sunset views.",
    fullDescription:
      "Fisherman's Dock Seafood sits in Pompano's harbor village with dockside seating and a menu built around what comes off local boats. Regulars come for yellowtail snapper sandwiches, conch fritters, and a relaxed atmosphere that feels far from chain-restaurant Florida. Tournament weekends add energy when weigh-ins finish nearby — it's the kind of spot where anglers and families share the same rail.\n\nFeatured directory partners receive a dedicated listing page, top placement in Food & Eats, and a featured badge across category browsing.",
    image: foodImages.fishermansDock.src,
    imageAlt: foodImages.fishermansDock.alt,
    phone: "(954) 555-0142",
    websiteUrl: "https://example.com/fishermans-dock",
    primaryCtaLabel: "Visit Website",
    primaryCtaUrl: "https://example.com/fishermans-dock",
    secondaryCtaLabel: "View Menu",
    secondaryCtaUrl: "https://example.com/fishermans-dock/menu",
    address: "200 E McNab Rd, Pompano Beach, FL 33060",
    mapsUrl:
      "https://maps.google.com/?q=Fisherman's+Dock+Seafood+Pompano+Beach+FL",
    hours: "Mon–Thu 11am–9pm · Fri–Sat 11am–10pm · Sun 11am–9pm",
    isSponsored: true,
    isDemo: true,
    featuredRank: 1,
    priceRange: "$$",
    meta: ["Harbor Village", "Lunch & Dinner"],
  },
  {
    id: "pelican-reef",
    slug: "pelican-reef-raw-bar",
    name: "Pelican Reef Raw Bar",
    type: "restaurant",
    category: "Seafood",
    categoryId: "seafood",
    plan: "standard",
    shortDescription:
      "Lively raw bar for oysters, peel-and-eat shrimp, and ceviche after a beach morning.",
    fullDescription:
      "Pelican Reef Raw Bar on Atlantic Boulevard draws locals for oysters on the half shell, stone crab in season, and shareable small plates without waterfront markup. Standard directory listings include a dedicated restaurant page, logo and cover image, phone and website links, and placement within the Food & Eats category grid.",
    image: foodImages.pelicanRawBar.src,
    imageAlt: foodImages.pelicanRawBar.alt,
    phone: "(954) 555-0168",
    websiteUrl: "https://example.com/pelican-reef",
    primaryCtaLabel: "Visit Website",
    primaryCtaUrl: "https://example.com/pelican-reef",
    address: "1200 E Atlantic Blvd, Pompano Beach, FL 33060",
    mapsUrl: "https://maps.google.com/?q=Pelican+Reef+Raw+Bar+Pompano+Beach+FL",
    hours: "Tue–Sun 11:30am–10pm · Closed Monday",
    isSponsored: true,
    isDemo: true,
    priceRange: "$$",
    meta: ["Atlantic Blvd", "Raw Bar"],
  },
];
