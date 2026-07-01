import { foodImages } from "@/lib/foodImages";
import type { DirectoryCategory, DirectoryType } from "@/lib/directory";

export type CategoryImage = { src: string; alt: string };

const unsplash = (photoId: string, alt: string): CategoryImage => ({
  src: `https://images.unsplash.com/${photoId}?w=800&q=85&auto=format&fit=crop`,
  alt,
});

/** Primary image per category — each src should be unique within its map */
const RESTAURANT_IMAGES: Record<string, CategoryImage> = {
  seafood: foodImages.fishermansDock,
  breakfast: foodImages.sunriseCafe,
  coffee: unsplash(
    "photo-1495474566825-629612c89442",
    "Barista pouring latte art at a Florida coffee shop",
  ),
  waterfront: foodImages.oceansEdge,
  "happy-hour": foodImages.sandbarSocial,
  italian: foodImages.nonnasItalian,
  pizza: unsplash(
    "photo-1565299624946-b28f40a0ae38",
    "Wood-fired pizza fresh from the oven",
  ),
  mexican: foodImages.tacoReef,
  sushi: foodImages.pelicanRawBar,
  "fine-dining": unsplash(
    "photo-1414235077428-338989a2e8c0",
    "Elegant plated dinner at a fine dining restaurant",
  ),
  "family-dining": foodImages.rustyAnchor,
  brunch: foodImages.palmBrunch,
  steakhouse: unsplash(
    "photo-1546833999-b9f581a1996d",
    "Grilled steak served at a steakhouse table",
  ),
};

const EXCURSION_IMAGES: Record<string, CategoryImage> = {
  "fishing-charters": {
    src: "/images/excursions/fishing-charters.webp",
    alt: "Deep sea fishing charter off Pompano Beach",
  },
  "boat-rentals": unsplash(
    "photo-1567899378494-47b22a2ae96a",
    "Pontoon boat rental on calm Florida waters",
  ),
  "boat-tours": {
    src: "/images/excursions/boat-dolphin-tours.webp",
    alt: "Dolphin sightseeing boat tour near Pompano Beach",
  },
  "jet-ski": {
    src: "/images/excursions/florida-water-sports.webp",
    alt: "Jet ski on a white-sand Florida beach with clear Atlantic water",
  },
  diving: unsplash(
    "photo-1544551763-77a4157aab54",
    "Scuba diver exploring a coral reef",
  ),
  snorkeling: {
    src: "/images/excursions/snorkeling-scuba.webp",
    alt: "Snorkeling in clear Atlantic water near Pompano Beach",
  },
  paddleboarding: unsplash(
    "photo-1502680390469-beecad684984",
    "Stand-up paddleboarding on calm coastal water",
  ),
  kayaking: unsplash(
    "photo-1544551763-46a013bb70d5",
    "Kayaking through mangrove waterways in South Florida",
  ),
  parks: unsplash(
    "photo-1441974231531-c6227db76b6e",
    "Sunlit nature trail through a Florida coastal park",
  ),
  museums: unsplash(
    "photo-1564399579883-451a5d8ec881",
    "Visitors exploring a local history museum gallery",
  ),
  "family-attractions": unsplash(
    "photo-1507003211169-0a1dd7228f2d",
    "Family enjoying a sunny day at a Florida attraction",
  ),
  golf: unsplash(
    "photo-1535131749006-b7f58c99034b",
    "Golf course fairway with palm trees in South Florida",
  ),
  shopping: unsplash(
    "photo-1441986300917-64674bd600d8",
    "Boutique shopping street with local storefronts",
  ),
  nightlife: unsplash(
    "photo-1514933651103-005eec06c04b",
    "Outdoor waterfront bar at golden hour",
  ),
};

const BUSINESS_CATEGORY_ROOT = "/images/businesses/categories";

function localBusinessImage(file: string, alt: string): CategoryImage {
  return { src: `${BUSINESS_CATEGORY_ROOT}/${file}`, alt };
}

const BUSINESS_CATEGORY_FALLBACK = localBusinessImage(
  "fallback.jpg",
  "Professional local business office",
);

const BUSINESS_IMAGES: Record<string, CategoryImage> = {
  "real-estate": localBusinessImage(
    "real-estate.jpg",
    "South Florida home with palm trees and property for sale",
  ),
  mortgage: localBusinessImage(
    "mortgage.jpg",
    "Mortgage advisor reviewing loan paperwork with clients",
  ),
  title: localBusinessImage(
    "title.jpg",
    "Title company closing documents and signatures",
  ),
  insurance: localBusinessImage(
    "insurance.jpg",
    "Insurance professionals discussing homeowner coverage",
  ),
  attorneys: localBusinessImage(
    "attorneys.jpg",
    "Attorney consulting with clients in a law office",
  ),
  inspectors: localBusinessImage(
    "inspectors.jpg",
    "Modern Florida home exterior for buyer inspection",
  ),
  contractors: localBusinessImage(
    "contractors.jpg",
    "Construction crew working on a residential renovation",
  ),
  roofing: localBusinessImage(
    "roofing.jpg",
    "Florida home roofline and tropical landscaping",
  ),
  plumbing: localBusinessImage(
    "plumbing.jpg",
    "Plumber tools and residential pipe fittings",
  ),
  electricians: localBusinessImage(
    "electricians.jpg",
    "Electrician installing residential lighting fixtures",
  ),
  hvac: localBusinessImage(
    "hvac.jpg",
    "HVAC technician servicing an air conditioning unit",
  ),
  landscaping: localBusinessImage(
    "landscaping.jpg",
    "Professionally landscaped tropical Florida yard",
  ),
  "pool-services": localBusinessImage(
    "pool-services.jpg",
    "Residential swimming pool in South Florida",
  ),
  "pest-control": localBusinessImage(
    "pest-control.jpg",
    "Florida home exterior for pest prevention services",
  ),
  photographers: localBusinessImage(
    "photographers.jpg",
    "Professional photographer with camera equipment",
  ),
  medical: localBusinessImage(
    "medical.jpg",
    "Medical professionals in a modern clinic",
  ),
  dentists: localBusinessImage(
    "dentists.jpg",
    "Dental office with modern examination equipment",
  ),
  veterinarians: localBusinessImage(
    "veterinarians.jpg",
    "Veterinarian caring for a pet at an animal clinic",
  ),
  "auto-repair": localBusinessImage(
    "auto-repair.jpg",
    "Auto mechanic servicing a vehicle in a repair shop",
  ),
  fitness: localBusinessImage(
    "fitness.jpg",
    "Modern fitness gym with exercise equipment",
  ),
  services: localBusinessImage(
    "services.jpg",
    "Local business team collaborating in a professional office",
  ),
};

const TYPE_FALLBACKS: Record<DirectoryType, CategoryImage[]> = {
  restaurant: [
    foodImages.foodHero,
    foodImages.harborFishMarket,
    foodImages.pierHouse,
    foodImages.sandbarSocial,
  ],
  excursion: [
    { src: "/images/excursions/browse-all.webp", alt: "Activities near Pompano Beach" },
    { src: "/images/excursions/fishing-charters.webp", alt: "Fishing charters" },
    { src: "/images/excursions/boat-dolphin-tours.webp", alt: "Boat tours" },
    { src: "/images/excursions/snorkeling-scuba.webp", alt: "Snorkeling tours" },
    { src: "/images/excursions/florida-water-sports.webp", alt: "Jet ski on a Florida beach with turquoise Atlantic water" },
  ],
  business: [
    localBusinessImage("services.jpg", "Local business team in a professional office"),
    localBusinessImage("real-estate.jpg", "South Florida residential property"),
    localBusinessImage("insurance.jpg", "Insurance professionals meeting with clients"),
    localBusinessImage("contractors.jpg", "Residential construction and renovation work"),
  ],
};

function getPrimaryImage(type: DirectoryType, categoryId: string): CategoryImage | undefined {
  const maps = {
    restaurant: RESTAURANT_IMAGES,
    excursion: EXCURSION_IMAGES,
    business: BUSINESS_IMAGES,
  } as const;

  return maps[type][categoryId as keyof (typeof maps)[typeof type]];
}

function pickFallback(
  type: DirectoryType,
  categoryId: string,
  used: Set<string>,
): CategoryImage {
  if (type === "business") {
    const fallbacks = TYPE_FALLBACKS.business;
    for (let i = 0; i < fallbacks.length; i += 1) {
      const candidate = fallbacks[(categoryId.length + i) % fallbacks.length];
      if (!used.has(candidate.src)) return candidate;
    }
    return BUSINESS_CATEGORY_FALLBACK;
  }

  const fallbacks = TYPE_FALLBACKS[type];
  for (let i = 0; i < fallbacks.length; i += 1) {
    const candidate = fallbacks[(categoryId.length + i) % fallbacks.length];
    if (!used.has(candidate.src)) return candidate;
  }
  return fallbacks[0];
}

/** Resolve images for a visible category grid — no duplicate src within the batch */
export function resolveHubCategoryImages(
  categories: DirectoryCategory[],
  type: DirectoryType,
): Map<string, CategoryImage> {
  const used = new Set<string>();
  const result = new Map<string, CategoryImage>();

  for (const category of categories) {
    let image = getPrimaryImage(type, category.id) ?? pickFallback(type, category.id, used);
    if (used.has(image.src)) {
      image = pickFallback(type, category.id, used);
    }
    used.add(image.src);
    result.set(category.id, image);
  }

  return result;
}

export function getHubCategoryHref(
  type: DirectoryType,
  categoryId: string,
  hubAnchor?: string,
  options?: { populatedOnly?: boolean; hasListings?: boolean },
): string | undefined {
  if (options?.populatedOnly && !options.hasListings) {
    return undefined;
  }

  if (type === "business" && options?.populatedOnly && options.hasListings) {
    return `#category-${categoryId}`;
  }

  if (type === "restaurant") {
    const restaurantHrefs: Record<string, string> = {
      seafood: "#seafood",
      waterfront: "#waterfront",
      breakfast: "#breakfast",
      brunch: "#breakfast",
      coffee: "#breakfast",
      "happy-hour": "/guides/happy-hour-guide-pompano-beach",
      italian: "#italian",
      pizza: "#italian",
      mexican: "#cheap-eats",
      sushi: "#seafood",
      "fine-dining": "#waterfront",
      "family-dining": "#cheap-eats",
    };
    return restaurantHrefs[categoryId] ?? `#${hubAnchor ?? categoryId}`;
  }

  return `#${hubAnchor ?? categoryId}`;
}

/** @deprecated Use resolveHubCategoryImages for grid sections */
export function getHubCategoryImage(
  type: DirectoryType,
  categoryId: string,
  index: number,
): CategoryImage {
  const resolved = resolveHubCategoryImages(
    [{ id: categoryId, title: "", description: "", type }],
    type,
  );
  return (
    resolved.get(categoryId) ??
    (type === "business"
      ? BUSINESS_CATEGORY_FALLBACK
      : TYPE_FALLBACKS[type][index % TYPE_FALLBACKS[type].length])
  );
}

export { BUSINESS_CATEGORY_FALLBACK };
