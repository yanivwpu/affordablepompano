import { foodImages } from "@/lib/foodImages";
import type { DirectoryListing } from "./types";

/** Paid restaurant directory listings — add entries as partners sign up */
export const restaurantListings: DirectoryListing[] = [
  {
    id: "whole-green-cafe",
    slug: "whole-green-cafe",
    name: "Whole Green Cafe",
    type: "restaurant",
    category: "Healthy Cafe / Breakfast / Lunch",
    categoryId: "brunch",
    plan: "featured",
    shortDescription:
      "Fresh, wholesome cafe serving breakfast, lunch, smoothies, juices, coffee, bowls, salads, and healthy comfort food.",
    fullDescription:
      "Whole Green Cafe on North Federal Highway is built around one idea: healthy food should taste amazing. The kitchen shops daily, makes sauces and soups in-house, and serves vegan, vegetarian, and meat-friendly plates side by side — from acai bowls and tofu scrambles to hearty salads and comfort-food favorites.\n\nWhether you're grabbing breakfast before the beach or a clean lunch between errands, Whole Green is an easy Pompano stop for fresh ingredients and real flavor.",
    image: foodImages.wholeGreenCafe.src,
    imageAlt: foodImages.wholeGreenCafe.alt,
    phone: "(954) 532-5125",
    websiteUrl: "https://www.wholegreencafe.com/",
    primaryCtaLabel: "Visit Website",
    primaryCtaUrl: "https://www.wholegreencafe.com/",
    address: "418 N Federal Hwy, Pompano Beach, FL 33062",
    mapsUrl:
      "https://maps.google.com/?q=Whole+Green+Cafe+418+N+Federal+Hwy+Pompano+Beach+FL+33062",
    hours: "Daily 9am–8pm",
    isSponsored: true,
    featuredRank: 1,
    meta: ["North Federal Hwy", "Breakfast & Lunch"],
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
      "Pelican Reef Raw Bar on Atlantic Boulevard draws locals for oysters on the half shell, stone crab in season, and shareable small plates without waterfront markup.",
    image: foodImages.pelicanRawBar.src,
    imageAlt: foodImages.pelicanRawBar.alt,
    phone: "(954) 555-0168",
    address: "1200 E Atlantic Blvd, Pompano Beach, FL 33060",
    mapsUrl: "https://maps.google.com/?q=Pelican+Reef+Raw+Bar+Pompano+Beach+FL",
    hours: "Tue–Sun 11:30am–10pm · Closed Monday",
    isSponsored: true,
    isDemo: true,
    priceRange: "$$",
    meta: ["Atlantic Blvd", "Raw Bar"],
  },
];
