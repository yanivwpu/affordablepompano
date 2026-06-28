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
  "jet-ski": unsplash(
    "photo-1551632436-79c2f0255729",
    "Jet ski riding along the South Florida coast",
  ),
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

const BUSINESS_IMAGES: Record<string, CategoryImage> = {
  "real-estate": unsplash(
    "photo-1560518883-ce09059eeffa",
    "Real estate agent handing house keys to new homeowners",
  ),
  mortgage: unsplash(
    "photo-1554224155-6726b3ff858f",
    "Mortgage advisor reviewing loan documents with clients",
  ),
  title: unsplash(
    "photo-1450101499163-c8848c66ca85",
    "Title company closing documents and signatures",
  ),
  insurance: unsplash(
    "photo-1454165804606-c8848c66ca85",
    "Insurance agent discussing homeowner coverage options",
  ),
  attorneys: unsplash(
    "photo-1589829545856-d10d557d86bb",
    "Attorney reviewing legal documents at a desk",
  ),
  inspectors: unsplash(
    "photo-1581578731544-c64695cc6952",
    "Home inspector examining a residential property exterior",
  ),
  contractors: unsplash(
    "photo-1504307654326-118859664a75",
    "General contractor reviewing plans at a construction site",
  ),
  roofing: unsplash(
    "photo-1632778149525-faa663576e4e",
    "Roofer installing shingles on a Florida home",
  ),
  plumbing: unsplash(
    "photo-1607472586893-03fca59ccb0c",
    "Plumber servicing residential plumbing fixtures",
  ),
  electricians: unsplash(
    "photo-1621905252507-b78f3869328a",
    "Electrician working on a home electrical panel",
  ),
  hvac: unsplash(
    "photo-1621905251189-08b45d625aee",
    "HVAC technician servicing an air conditioning unit",
  ),
  landscaping: unsplash(
    "photo-1558904541-efa843a96f87",
    "Professional tropical landscaping at a Florida residence",
  ),
  "pool-services": unsplash(
    "photo-1576011008220-9dfe1f72572a",
    "Technician maintaining a residential swimming pool",
  ),
  "pest-control": unsplash(
    "photo-1581579186988-9224de773333",
    "Pest control specialist treating a home exterior",
  ),
  photographers: unsplash(
    "photo-1452587925148-ce088e7a3314",
    "Real estate photographer capturing a property listing",
  ),
  medical: unsplash(
    "photo-1576091160399-112ba8d25d1f",
    "Medical clinic providing local healthcare services",
  ),
  dentists: unsplash(
    "photo-1606811567643-1ec69a44b1ff",
    "Modern dental office with examination chair and equipment",
  ),
  veterinarians: unsplash(
    "photo-1628009367960-73ed7f2c1d60",
    "Veterinarian examining a dog at an animal clinic",
  ),
  "auto-repair": unsplash(
    "photo-1486262714039-378b089b9a67",
    "Auto mechanic servicing a vehicle in a repair shop",
  ),
  fitness: unsplash(
    "photo-1534438327276-14e5300c3a91",
    "Modern fitness gym with exercise equipment",
  ),
  services: unsplash(
    "photo-1497366216548-375260702968",
    "Professional office providing local business services",
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
    { src: "/images/excursions/water-sports.webp", alt: "Water sports rentals" },
  ],
  business: [
    unsplash("photo-1497366811353-6870734c7617", "Modern professional office workspace"),
    unsplash("photo-1521791136064-7986c2920216", "Business handshake closing a local deal"),
    unsplash("photo-1486406146926-c627a92ad1ab", "Commercial building in a business district"),
    unsplash("photo-1507679799987-c73779587ccf", "Professional team meeting in a conference room"),
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
): string {
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
  return resolved.get(categoryId) ?? TYPE_FALLBACKS[type][index % TYPE_FALLBACKS[type].length];
}
