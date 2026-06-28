/** Shared spacing and grid helpers for pillar hub pages */

export const hubSectionSpacing = "py-16 sm:py-24";

/** Centered spotlight card (~700–850px) for a single featured listing */
export const featuredSpotlightShellClass =
  "mx-auto w-full max-w-[850px] grid grid-cols-1 gap-6";

export function featuredListingGridClass(count: number): string {
  if (count <= 0) return "hidden";
  if (count === 1) {
    return featuredSpotlightShellClass;
  }
  if (count === 2) {
    return "grid grid-cols-1 gap-6 md:grid-cols-2";
  }
  return "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3";
}

export function directoryListingGridClass(): string {
  return "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3";
}

export type HubSectionVariant =
  | "featured"
  | "categories"
  | "directory"
  | "guides"
  | "editorial";

export const hubSectionSurface: Record<HubSectionVariant, string> = {
  featured:
    "border-b border-sand-dark/30 bg-warm-white",
  categories:
    "border-b border-sand-dark/30 bg-cream",
  directory:
    "border-b border-sand-dark/30 bg-background",
  guides:
    "border-b border-sand-dark/30 bg-sand/35",
  editorial:
    "border-b border-sand-dark/30 bg-background",
};
