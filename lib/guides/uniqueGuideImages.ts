import { foodImages } from "@/lib/foodImages";
import { guideImages } from "@/lib/guideImages";

type GuideCardImage = {
  slug: string;
  image: string;
  imageAlt: string;
};

/** Rotating fallbacks when pillar guide cards would repeat the same thumbnail */
const FOOD_GUIDE_IMAGE_POOL = [
  guideImages.seafoodRestaurants,
  guideImages.waterfrontRestaurants,
  guideImages.breakfastSpots,
  guideImages.happyHourGuide,
  guideImages.happyHours,
  foodImages.tacoReef,
  foodImages.harborFishMarket,
  foodImages.rustyAnchor,
  foodImages.pierHouse,
  foodImages.nonnasItalian,
] as const;

export function dedupeGuideCardImages<T extends GuideCardImage>(cards: T[]): T[] {
  const used = new Set<string>();

  return cards.map((card) => {
    if (!used.has(card.image)) {
      used.add(card.image);
      return card;
    }

    for (const fallback of FOOD_GUIDE_IMAGE_POOL) {
      if (used.has(fallback.src)) continue;
      used.add(fallback.src);
      return { ...card, image: fallback.src, imageAlt: fallback.alt };
    }

    return card;
  });
}
