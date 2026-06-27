import { businessListings } from "./businesses";
import {
  businessCategories,
  excursionCategories,
  getCategoriesForType,
  getCategoryById,
  restaurantCategories,
} from "./categories";
import { excursionListings } from "./excursions";
import { resolveListingSponsorship } from "./sponsorship";
import { restaurantListings } from "./restaurants";
import type { DirectoryListing, DirectoryType, ListingPlan } from "./types";

export type {
  DirectoryListing,
  DirectoryType,
  ListingEvent,
  ListingHours,
  ListingHoursDay,
  ListingMedia,
  ListingPlan,
  ListingPromotion,
  ListingReview,
} from "./types";
export type { DirectoryCategory } from "./categories";
export { businessCategories, businessListings } from "./businesses";
export {
  businessCategories as businessCategoryDefinitions,
  excursionCategories,
  getCategoriesForType,
  getCategoryById,
  restaurantCategories,
} from "./categories";
export { excursionListings } from "./excursions";
export { restaurantListings } from "./restaurants";
export { resolveListingSponsorship, sponsorBadgeLabel } from "./sponsorship";

const allListings: DirectoryListing[] = [
  ...restaurantListings,
  ...excursionListings,
  ...businessListings,
];

export function directoryPath(type: DirectoryType, slug: string): string {
  if (type === "restaurant") return `/food/${slug}`;
  if (type === "excursion") return `/excursions/${slug}`;
  return `/businesses/${slug}`;
}

export function getListingBySlug(
  type: DirectoryType,
  slug: string,
): DirectoryListing | undefined {
  return allListings.find((l) => l.type === type && l.slug === slug);
}

export function getAllListingSlugs(type: DirectoryType): string[] {
  return allListings.filter((l) => l.type === type).map((l) => l.slug);
}

export function getListingsByType(type: DirectoryType): DirectoryListing[] {
  return sortListings(allListings.filter((l) => l.type === type));
}

export function getListingsByCategory(
  type: DirectoryType,
  categoryId: string,
): DirectoryListing[] {
  return sortListings(
    allListings.filter(
      (l) =>
        l.type === type &&
        (l.categoryId === categoryId ||
          l.categoryIds?.includes(categoryId) ||
          l.tags?.includes(categoryId)),
    ),
  );
}

export function getFeaturedListings(
  type?: DirectoryType,
  limit = 6,
): DirectoryListing[] {
  const pool = type
    ? allListings.filter((l) => l.type === type)
    : allListings;
  return sortListings(
    pool.filter(
      (l) =>
        l.plan === "featured" ||
        l.isHomepageFeatured ||
        resolveListingSponsorship(l).isHomepageFeatured,
    ),
  ).slice(0, limit);
}

export function getHomepageFeaturedListings(limit = 3): DirectoryListing[] {
  const featured = sortListings(
    allListings.filter(
      (l) =>
        l.isHomepageFeatured ||
        resolveListingSponsorship(l).isHomepageFeatured ||
        l.plan === "featured",
    ),
  );
  return featured.slice(0, limit);
}

export function getCategorySponsor(
  type: DirectoryType,
  categoryId: string,
): DirectoryListing | undefined {
  return allListings.find(
    (l) =>
      l.type === type &&
      l.categoryId === categoryId &&
      (l.sponsorTier === "category-sponsor" ||
        resolveListingSponsorship(l).isCategorySponsor),
  );
}

export function getRelatedListings(
  listing: DirectoryListing,
  limit = 3,
): DirectoryListing[] {
  const peers = allListings.filter(
    (l) =>
      l.type === listing.type &&
      l.slug !== listing.slug &&
      l.categoryId === listing.categoryId,
  );
  const fallback = allListings.filter(
    (l) => l.type === listing.type && l.slug !== listing.slug,
  );
  return sortListings([...peers, ...fallback]).slice(0, limit);
}

export function sortListings(listings: DirectoryListing[]): DirectoryListing[] {
  return [...listings].sort((a, b) => {
    const tierA = a.sponsorTier ?? a.plan;
    const tierB = b.sponsorTier ?? b.plan;
    const tierOrder: Record<string, number> = {
      "homepage-featured": 0,
      "category-sponsor": 1,
      featured: 2,
      "newsletter-sponsor": 3,
      standard: 4,
    };
    const orderA = tierOrder[tierA] ?? 4;
    const orderB = tierOrder[tierB] ?? 4;
    if (orderA !== orderB) return orderA - orderB;
    if (a.plan !== b.plan) return a.plan === "featured" ? -1 : 1;
    const rankA = a.featuredRank ?? 999;
    const rankB = b.featuredRank ?? 999;
    if (rankA !== rankB) return rankA - rankB;
    return a.name.localeCompare(b.name);
  });
}

export function getAllDirectorySitemapEntries(): {
  type: DirectoryType;
  slug: string;
}[] {
  return allListings.map((l) => ({ type: l.type, slug: l.slug }));
}

export function getDirectoryStats() {
  return {
    total: allListings.length,
    restaurants: restaurantListings.length,
    excursions: excursionListings.length,
    businesses: businessListings.length,
    restaurantCategories: restaurantCategories.length,
    businessCategories: businessCategories.length,
    excursionCategories: excursionCategories.length,
  };
}
