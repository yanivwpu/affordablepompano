import {
  getListingsByCategory,
  getListingsByType,
  type DirectoryListing,
} from "@/lib/directory";
import { guideDirectoryMap } from "@/lib/guides/linkGraph";
import type { Guide } from "@/lib/guides/types";

export type GuideRelatedContent = {
  restaurants: DirectoryListing[];
  excursions: DirectoryListing[];
  businesses: DirectoryListing[];
};

const FOOD_GUIDE_SLUGS = new Set([
  "best-seafood-restaurants-pompano-beach",
  "best-waterfront-restaurants-pompano-beach",
  "best-breakfast-spots-pompano-beach",
  "happy-hour-guide-pompano-beach",
  "happy-hours-near-the-beach",
]);

const EXCURSION_GUIDE_SLUGS = new Set([
  "pompano-beach-fishing-guide",
  "best-boat-tours-pompano-beach",
  "best-things-to-do-pompano-beach",
  "family-friendly-pompano-beach",
  "weekend-guide-pompano-beach",
  "best-beaches-pompano-beach",
  "rainy-day-pompano-beach",
]);

const LIVING_GUIDE_SLUGS = new Set([
  "buying-home-pompano-beach",
  "moving-to-pompano-beach",
  "moving-to-pompano-beach-complete-guide",
  "cost-of-living-pompano-beach",
  "best-neighborhoods-pompano-beach",
  "neighborhood-spotlight-old-pompano",
]);

function uniqueListings(listings: DirectoryListing[], limit: number) {
  const seen = new Set<string>();
  const result: DirectoryListing[] = [];
  for (const listing of listings) {
    if (seen.has(listing.id)) continue;
    seen.add(listing.id);
    result.push(listing);
    if (result.length >= limit) break;
  }
  return result;
}

export function getGuideRelatedContent(
  guide: Guide,
  limit = 3,
): GuideRelatedContent {
  const mapping = guideDirectoryMap[guide.slug];
  const restaurants: DirectoryListing[] = [];
  const excursions: DirectoryListing[] = [];
  const businesses: DirectoryListing[] = [];

  if (mapping?.restaurants) {
    for (const categoryId of mapping.restaurants) {
      restaurants.push(...getListingsByCategory("restaurant", categoryId));
    }
  } else if (FOOD_GUIDE_SLUGS.has(guide.slug) || guide.group === "budget") {
    restaurants.push(...getListingsByType("restaurant"));
  }

  if (mapping?.excursions) {
    for (const categoryId of mapping.excursions) {
      excursions.push(...getListingsByCategory("excursion", categoryId));
    }
  } else if (EXCURSION_GUIDE_SLUGS.has(guide.slug) || guide.group === "visiting") {
    excursions.push(...getListingsByType("excursion"));
  }

  if (mapping?.businesses) {
    for (const categoryId of mapping.businesses) {
      businesses.push(...getListingsByCategory("business", categoryId));
    }
  } else if (LIVING_GUIDE_SLUGS.has(guide.slug) || guide.group === "living") {
    businesses.push(...getListingsByType("business"));
  }

  return {
    restaurants: uniqueListings(restaurants, limit),
    excursions: uniqueListings(excursions, limit),
    businesses: uniqueListings(businesses, limit),
  };
}
