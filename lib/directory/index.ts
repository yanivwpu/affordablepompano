import { businessListings } from "./businesses";
import { excursionListings } from "./excursions";
import { restaurantListings } from "./restaurants";
import type { DirectoryListing, DirectoryType, ListingPlan } from "./types";

export type { DirectoryListing, DirectoryType, ListingPlan } from "./types";
export { businessCategories, businessListings } from "./businesses";
export { excursionListings } from "./excursions";
export { restaurantListings } from "./restaurants";

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
    allListings.filter((l) => l.type === type && l.categoryId === categoryId),
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
