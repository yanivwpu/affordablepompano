/**
 * Central internal linking graph — supplements per-article relatedSlugs.
 * Ensures every guide has 5–8 contextual peers for Related Guides widgets.
 */
export const guideLinkGraph: Record<string, string[]> = {
  "first-timers-guide-pompano-beach": [
    "best-things-to-do-pompano-beach",
    "parking-pier-access-tips",
    "best-beaches-pompano-beach",
    "budget-friendly-beach-days",
    "best-free-things-to-do",
    "weekend-guide-pompano-beach",
    "best-breakfast-spots-pompano-beach",
  ],
  "best-things-to-do-pompano-beach": [
    "first-timers-guide-pompano-beach",
    "best-beaches-pompano-beach",
    "best-boat-tours-pompano-beach",
    "pompano-beach-fishing-guide",
    "family-friendly-pompano-beach",
    "seasonal-events-calendar",
    "weekend-guide-pompano-beach",
    "best-free-things-to-do",
  ],
  "best-beaches-pompano-beach": [
    "parking-pier-access-tips",
    "budget-friendly-beach-days",
    "first-timers-guide-pompano-beach",
    "best-things-to-do-pompano-beach",
    "family-friendly-pompano-beach",
    "pompano-beach-fishing-guide",
  ],
  "pompano-beach-fishing-guide": [
    "best-boat-tours-pompano-beach",
    "best-things-to-do-pompano-beach",
    "parking-pier-access-tips",
    "seasonal-events-calendar",
    "best-beaches-pompano-beach",
    "weekend-guide-pompano-beach",
  ],
  "best-boat-tours-pompano-beach": [
    "pompano-beach-fishing-guide",
    "best-things-to-do-pompano-beach",
    "best-beaches-pompano-beach",
    "family-friendly-pompano-beach",
    "weekend-guide-pompano-beach",
    "first-timers-guide-pompano-beach",
  ],
  "family-friendly-pompano-beach": [
    "best-beaches-pompano-beach",
    "best-things-to-do-pompano-beach",
    "best-boat-tours-pompano-beach",
    "best-free-things-to-do",
    "rainy-day-pompano-beach",
    "weekend-guide-pompano-beach",
  ],
  "budget-friendly-beach-days": [
    "best-free-things-to-do",
    "happy-hours-near-the-beach",
    "parking-pier-access-tips",
    "best-beaches-pompano-beach",
    "first-timers-guide-pompano-beach",
  ],
  "neighborhood-spotlight-old-pompano": [
    "best-neighborhoods-pompano-beach",
    "moving-to-pompano-beach",
    "best-breakfast-spots-pompano-beach",
    "happy-hour-guide-pompano-beach",
    "cost-of-living-pompano-beach",
  ],
  "seasonal-events-calendar": [
    "weekend-guide-pompano-beach",
    "parking-pier-access-tips",
    "best-things-to-do-pompano-beach",
    "pompano-beach-fishing-guide",
    "happy-hours-near-the-beach",
  ],
  "best-free-things-to-do": [
    "budget-friendly-beach-days",
    "happy-hours-near-the-beach",
    "parking-pier-access-tips",
    "family-friendly-pompano-beach",
    "best-beaches-pompano-beach",
    "first-timers-guide-pompano-beach",
  ],
  "moving-to-pompano-beach": [
    "moving-to-pompano-beach-complete-guide",
    "best-neighborhoods-pompano-beach",
    "cost-of-living-pompano-beach",
    "buying-home-pompano-beach",
    "neighborhood-spotlight-old-pompano",
  ],
  "parking-pier-access-tips": [
    "first-timers-guide-pompano-beach",
    "best-beaches-pompano-beach",
    "seasonal-events-calendar",
    "budget-friendly-beach-days",
    "best-things-to-do-pompano-beach",
    "pompano-beach-fishing-guide",
  ],
  "happy-hours-near-the-beach": [
    "budget-friendly-beach-days",
    "happy-hour-guide-pompano-beach",
    "best-free-things-to-do",
    "best-waterfront-restaurants-pompano-beach",
    "best-seafood-restaurants-pompano-beach",
  ],
  "weekend-guide-pompano-beach": [
    "first-timers-guide-pompano-beach",
    "seasonal-events-calendar",
    "best-things-to-do-pompano-beach",
    "best-boat-tours-pompano-beach",
    "best-breakfast-spots-pompano-beach",
    "parking-pier-access-tips",
  ],
  "rainy-day-pompano-beach": [
    "family-friendly-pompano-beach",
    "best-free-things-to-do",
    "happy-hours-near-the-beach",
    "best-breakfast-spots-pompano-beach",
    "best-things-to-do-pompano-beach",
  ],
  "best-seafood-restaurants-pompano-beach": [
    "best-waterfront-restaurants-pompano-beach",
    "best-breakfast-spots-pompano-beach",
    "happy-hour-guide-pompano-beach",
    "pompano-beach-fishing-guide",
    "happy-hours-near-the-beach",
    "best-things-to-do-pompano-beach",
  ],
  "best-waterfront-restaurants-pompano-beach": [
    "best-seafood-restaurants-pompano-beach",
    "happy-hour-guide-pompano-beach",
    "happy-hours-near-the-beach",
    "best-breakfast-spots-pompano-beach",
    "weekend-guide-pompano-beach",
  ],
  "best-breakfast-spots-pompano-beach": [
    "weekend-guide-pompano-beach",
    "neighborhood-spotlight-old-pompano",
    "best-seafood-restaurants-pompano-beach",
    "happy-hour-guide-pompano-beach",
    "first-timers-guide-pompano-beach",
    "budget-friendly-beach-days",
  ],
  "happy-hour-guide-pompano-beach": [
    "happy-hours-near-the-beach",
    "best-waterfront-restaurants-pompano-beach",
    "best-seafood-restaurants-pompano-beach",
    "neighborhood-spotlight-old-pompano",
    "budget-friendly-beach-days",
  ],
  "best-neighborhoods-pompano-beach": [
    "neighborhood-spotlight-old-pompano",
    "cost-of-living-pompano-beach",
    "buying-home-pompano-beach",
    "moving-to-pompano-beach",
    "moving-to-pompano-beach-complete-guide",
  ],
  "cost-of-living-pompano-beach": [
    "best-neighborhoods-pompano-beach",
    "buying-home-pompano-beach",
    "moving-to-pompano-beach-complete-guide",
    "moving-to-pompano-beach",
    "budget-friendly-beach-days",
  ],
  "moving-to-pompano-beach-complete-guide": [
    "moving-to-pompano-beach",
    "best-neighborhoods-pompano-beach",
    "cost-of-living-pompano-beach",
    "buying-home-pompano-beach",
    "neighborhood-spotlight-old-pompano",
  ],
  "buying-home-pompano-beach": [
    "best-neighborhoods-pompano-beach",
    "cost-of-living-pompano-beach",
    "moving-to-pompano-beach-complete-guide",
    "moving-to-pompano-beach",
    "neighborhood-spotlight-old-pompano",
  ],
};

/** Maps guides to directory listings for context-aware related widgets */
export const guideDirectoryMap: Record<
  string,
  {
    restaurants?: string[];
    excursions?: string[];
    businesses?: string[];
  }
> = {
  "best-seafood-restaurants-pompano-beach": { restaurants: ["seafood"] },
  "best-waterfront-restaurants-pompano-beach": { restaurants: ["waterfront"] },
  "best-breakfast-spots-pompano-beach": { restaurants: ["breakfast", "brunch"] },
  "happy-hour-guide-pompano-beach": { restaurants: ["happy-hour", "waterfront"] },
  "happy-hours-near-the-beach": { restaurants: ["happy-hour"] },
  "pompano-beach-fishing-guide": { excursions: ["fishing-charters"] },
  "best-boat-tours-pompano-beach": { excursions: ["boat-tours", "fishing-charters"] },
  "best-things-to-do-pompano-beach": {
    excursions: ["boat-tours", "fishing-charters", "snorkeling"],
  },
  "family-friendly-pompano-beach": { excursions: ["family-attractions", "parks"] },
  "buying-home-pompano-beach": {
    businesses: ["real-estate", "mortgage", "title", "inspectors", "insurance"],
  },
  "moving-to-pompano-beach": {
    businesses: ["real-estate", "mortgage", "insurance", "attorneys"],
  },
  "moving-to-pompano-beach-complete-guide": {
    businesses: ["real-estate", "mortgage", "title", "inspectors"],
  },
  "cost-of-living-pompano-beach": { businesses: ["insurance", "mortgage"] },
  "best-neighborhoods-pompano-beach": { businesses: ["real-estate"] },
};
