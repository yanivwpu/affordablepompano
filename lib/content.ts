import { images } from "@/lib/images";

export type FoodGroup = "waterfront" | "local" | "cheap";

export const homeCategories = [
  {
    id: "buy",
    title: "Buy Homes",
    description:
      "Condos, townhomes, and single-family homes with real value near the beach and Intracoastal.",
    image: images.buyHome,
    imageAlt: images.buyHomeAlt,
    highlights: ["First-time buyer friendly", "Ocean & inland options", "Neighborhood insights"],
  },
  {
    id: "sell",
    title: "Sell My Home",
    description:
      "Get a fair market read on your property and connect with a local agent who knows Pompano.",
    image: images.sellHome,
    imageAlt: images.sellHomeAlt,
    highlights: ["Free home value chat", "Local market expertise", "Fast, friendly process"],
  },
  {
    id: "long-term",
    title: "Long-term Rentals",
    description:
      "Monthly and annual leases for apartments, condos, and houses across Pompano neighborhoods.",
    image: images.longTermRental,
    imageAlt: images.longTermRentalAlt,
    highlights: ["Pet-friendly options", "Near beach & transit", "Budget-conscious picks"],
  },
  {
    id: "vacation",
    title: "Short-term / Vacation Rentals",
    description:
      "Beach-week getaways and snowbird stays — sunny escapes steps from the Atlantic.",
    image: images.vacationRental,
    imageAlt: images.vacationRentalAlt,
    highlights: ["Weekly & monthly stays", "Beach-access properties", "Seasonal availability"],
  },
] as const;

export const foodCategories = [
  {
    id: "waterfront",
    title: "Waterfront & Seafood",
    description: "Pier-side dining and Atlantic views — fresh catch, fair prices.",
  },
  {
    id: "local",
    title: "Local Favorites",
    description: "The spots Pompano regulars return to again and again.",
  },
  {
    id: "cheap",
    title: "Cheap Eats",
    description: "Great flavor without the tourist markup — under $15 favorites.",
  },
] as const;

export const excursionCategories = [
  {
    id: "water",
    title: "On the Water",
    description: "Snorkeling, kayaking, diving, and sunset sails in turquoise Atlantic waters.",
  },
  {
    id: "fishing",
    title: "Fishing & Boating",
    description: "Deep sea charters, pier fishing, and coastal cruises.",
  },
  {
    id: "land",
    title: "Land & Leisure",
    description: "Boardwalk rides, parks, and easy sunny-day adventures.",
  },
] as const;

export const guideCategories = [
  {
    id: "visiting",
    title: "Visiting Pompano",
    description: "First trips, beach days, and seasonal events.",
  },
  {
    id: "living",
    title: "Living Here",
    description: "Neighborhoods, moving tips, and everyday local life.",
  },
  {
    id: "budget",
    title: "Free & Budget",
    description: "Pier walks, parks, and activities that cost little or nothing.",
  },
] as const;

export const featuredGuides = [
  {
    title: "First-Timer's Guide to Pompano Beach",
    excerpt:
      "Parking tips, pier walks, and the best free spots — everything you need for a great first visit.",
    category: "Guide",
    group: "visiting" as const,
    image: images.pier,
    imageAlt: images.pierAlt,
    tall: true,
  },
  {
    title: "Budget-Friendly Beach Days",
    excerpt:
      "Free beach access, affordable chair rentals, and picnic spots that keep more money in your pocket.",
    category: "Guide",
    group: "budget" as const,
    image: images.sunnyBeach,
    imageAlt: images.sunnyBeachAlt,
    tall: false,
  },
  {
    title: "Neighborhood Spotlight: Old Pompano",
    excerpt:
      "Walkable streets, local shops, and a friendly community feel — a great area for everyday living.",
    category: "Guide",
    group: "living" as const,
    image: images.palmStreet,
    imageAlt: images.palmStreetAlt,
    tall: false,
  },
  {
    title: "Seasonal Events Calendar",
    excerpt:
      "Fishing tournaments, beach festivals, and free waterfront concerts throughout the year.",
    category: "Guide",
    group: "visiting" as const,
    image: images.goldenBeach,
    imageAlt: images.goldenBeachAlt,
    tall: true,
  },
  {
    title: "Best Free Things To Do",
    excerpt:
      "Pier fishing, beach walks, and public parks — fun Pompano experiences that cost nothing.",
    category: "Guide",
    group: "budget" as const,
    image: images.pierWalk,
    imageAlt: images.pierWalkAlt,
    tall: false,
  },
  {
    title: "Moving to Pompano Beach",
    excerpt:
      "Honest info on cost of living, neighborhoods, and why locals love calling this place home.",
    category: "Living",
    group: "living" as const,
    image: images.palmBeach,
    imageAlt: images.palmBeachAlt,
    tall: true,
  },
  {
    title: "Parking & Pier Access Tips",
    excerpt:
      "Where to park for free, best times to visit the pier, and how to avoid weekend crowds.",
    category: "Guide",
    group: "visiting" as const,
    image: images.pompanoPier,
    imageAlt: images.pompanoPierAlt,
    tall: false,
  },
  {
    title: "Happy Hours Near the Beach",
    excerpt:
      "Affordable drinks and bites at sunny waterfront spots — a local's guide to saving after sunset.",
    category: "Guide",
    group: "budget" as const,
    image: images.floridaPierSunset,
    imageAlt: images.floridaPierSunsetAlt,
    tall: false,
  },
];

export const foodSpots = [
  {
    title: "The Pier House Kitchen",
    excerpt:
      "Fresh-caught seafood with Atlantic views. Mahi tacos and fish sandwiches that locals swear by.",
    category: "Seafood",
    group: "waterfront" as FoodGroup,
    image: images.pierDining,
    imageAlt: images.pierDiningAlt,
    meta: ["Pier District", "$$", "Waterfront"],
    badge: "Local Favorite",
    featured: true,
    actionLabel: "Reserve Table",
    actionHref: "https://example.com/pier-house-kitchen",
  },
  {
    title: "Pelican Point Seafood",
    excerpt:
      "Blackened grouper, conch fritters, and a sunset deck overlooking the Intracoastal.",
    category: "Seafood",
    group: "waterfront" as FoodGroup,
    image: images.goldenBeach,
    imageAlt: images.goldenBeachAlt,
    meta: ["Waterway", "$$", "Sunset Views"],
    actionLabel: "Reserve Table",
    actionHref: "https://example.com/pelican-point",
  },
  {
    title: "Atlantic Table",
    excerpt:
      "Relaxed oceanfront dining with fresh catches and a menu that changes with the season.",
    category: "Waterfront",
    group: "waterfront" as FoodGroup,
    image: images.oceanfrontDining,
    imageAlt: images.oceanfrontDiningAlt,
    meta: ["Intracoastal", "$$", "Family Friendly"],
    actionLabel: "Reserve Table",
    actionHref: "https://example.com/atlantic-table",
  },
  {
    title: "Sandbar Social",
    excerpt:
      "Tropical drinks, live music on weekends, and shareable plates after a day in the sun.",
    category: "Bar & Grill",
    group: "local" as FoodGroup,
    image: images.beachBar,
    imageAlt: images.beachBarAlt,
    meta: ["Ocean Blvd", "$$", "Live Music"],
    actionLabel: "Reserve Table",
    actionHref: "https://example.com/sandbar-social",
  },
  {
    title: "Sunrise Grill",
    excerpt:
      "Classic Florida breakfast plates and strong coffee — locals line up on weekend mornings.",
    category: "Breakfast",
    group: "local" as FoodGroup,
    image: images.breakfastBeach,
    imageAlt: images.breakfastBeachAlt,
    meta: ["East Atlantic", "$", "Breakfast"],
    actionLabel: "Reserve Table",
    actionHref: "https://example.com/sunrise-grill",
  },
  {
    title: "Atlantic Noodle House",
    excerpt:
      "Warm bowls, fresh herbs, and a friendly patio — a neighborhood staple near the beach.",
    category: "Casual",
    group: "local" as FoodGroup,
    image: images.casualPatio,
    imageAlt: images.casualPatioAlt,
    meta: ["Downtown", "$", "Lunch & Dinner"],
    actionLabel: "Reserve Table",
    actionHref: "https://example.com/atlantic-noodle",
  },
  {
    title: "Taco Reef",
    excerpt:
      "Casual fish tacos just steps from the sand. Simple, fresh, and easy on the wallet.",
    category: "Casual",
    group: "cheap" as FoodGroup,
    image: images.fishShack,
    imageAlt: images.fishShackAlt,
    meta: ["Beach Blvd", "$", "Lunch & Dinner"],
    actionLabel: "Reserve Table",
    actionHref: "https://example.com/taco-reef",
  },
  {
    title: "Coral Café & Juice Bar",
    excerpt:
      "Açaí bowls, smoothies, and hearty breakfast — fuel up before a sunny beach day.",
    category: "Café",
    group: "cheap" as FoodGroup,
    image: images.keysBeach,
    imageAlt: images.keysBeachAlt,
    meta: ["Downtown", "$", "Breakfast"],
    actionLabel: "Reserve Table",
    actionHref: "https://example.com/coral-cafe",
  },
];

export const excursions = [
  {
    title: "Snorkeling at the Reef",
    excerpt:
      "Crystal-clear turquoise Atlantic water and colorful fish just offshore. Beginner-friendly tours.",
    category: "Water",
    group: "water" as const,
    image: images.turquoiseOcean,
    imageAlt: images.turquoiseOceanAlt,
    meta: ["Half Day", "From $55", "All Levels"],
    badge: "Most Popular",
    featured: true,
    actionLabel: "Book This Experience",
    actionHref: "https://example.com/snorkeling-reef",
  },
  {
    title: "Kayak the Intracoastal",
    excerpt:
      "Paddle calm blue waterways, spot manatees, and explore mangrove trails at your own pace.",
    category: "Adventure",
    group: "water" as const,
    image: images.palmBeach,
    imageAlt: images.palmBeachAlt,
    meta: ["2–3 Hours", "From $40", "Easy"],
    actionLabel: "Book This Experience",
    actionHref: "https://example.com/kayak-intracoastal",
  },
  {
    title: "Reef Diving Excursions",
    excerpt:
      "Explore South Florida reefs with certified dive masters. Equipment available on site.",
    category: "Diving",
    group: "water" as const,
    image: images.snorkeling,
    imageAlt: images.snorkelingAlt,
    meta: ["Half Day", "From $95", "Certified"],
    actionLabel: "Book This Experience",
    actionHref: "https://example.com/reef-diving",
  },
  {
    title: "Deep Sea Fishing Charters",
    excerpt:
      "Half-day trips for mahi, snapper, and more. Great for families — no experience needed.",
    category: "Fishing",
    group: "fishing" as const,
    image: images.fishing,
    imageAlt: images.fishingAlt,
    meta: ["Half Day", "From $85", "Guided"],
    actionLabel: "Book This Experience",
    actionHref: "https://example.com/deep-sea-fishing",
  },
  {
    title: "Pier Fishing Experience",
    excerpt:
      "Cast a line from the Pompano Beach pier — rent gear on-site and enjoy sunny Atlantic views.",
    category: "Fishing",
    group: "fishing" as const,
    image: images.pierFishing,
    imageAlt: images.pierFishingAlt,
    meta: ["Flexible", "From $15", "All Ages"],
    actionLabel: "Book This Experience",
    actionHref: "https://example.com/pier-fishing",
  },
  {
    title: "Sunset Catamaran Cruise",
    excerpt:
      "A relaxed evening on the water as the sky turns gold over the Atlantic. Drinks included.",
    category: "Cruise",
    group: "fishing" as const,
    image: images.catamaran,
    imageAlt: images.catamaranAlt,
    meta: ["2 Hours", "From $65", "All Ages"],
    actionLabel: "Book This Experience",
    actionHref: "https://example.com/sunset-cruise",
  },
  {
    title: "Beach Boardwalk Ride",
    excerpt:
      "Rent a bike and cruise the coastal path from the pier to scenic overlooks and local parks.",
    category: "Land",
    group: "land" as const,
    image: images.boardwalk,
    imageAlt: images.boardwalkAlt,
    meta: ["2 Hours", "From $20", "Family Friendly"],
    actionLabel: "Book This Experience",
    actionHref: "https://example.com/boardwalk-bikes",
  },
  {
    title: "Morning Beach Yoga",
    excerpt:
      "Donation-based sessions on the sand — stretch, breathe, and greet the Florida sunrise.",
    category: "Wellness",
    group: "land" as const,
    image: images.beachSunrise,
    imageAlt: images.beachSunriseAlt,
    meta: ["1 Hour", "Free–$10", "Beginner Friendly"],
    actionLabel: "Book This Experience",
    actionHref: "https://example.com/beach-yoga",
  },
];
