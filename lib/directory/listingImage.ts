import type { DirectoryListing } from "./types";

export type ListingImagePresentation = "portrait" | "landscape" | "auto";

/** Portrait = contain + top bias (faces). Landscape = cover crop. */
export function inferPortraitListing(listing: DirectoryListing): boolean {
  const src = listing.image.toLowerCase();
  const alt = listing.imageAlt.toLowerCase();

  if (src.includes("headshot") || src.includes("portrait")) return true;
  if (alt.includes("headshot") || alt.includes("portrait")) return true;

  return false;
}

export function resolveListingImagePresentation(
  listing: DirectoryListing,
): "portrait" | "landscape" {
  if (listing.imagePresentation === "portrait") return "portrait";
  if (listing.imagePresentation === "landscape") return "landscape";

  if (inferPortraitListing(listing)) return "portrait";

  return "landscape";
}

export function isPortraitAspectRatio(width: number, height: number): boolean {
  if (width <= 0 || height <= 0) return false;
  return height / width >= 1.05;
}
