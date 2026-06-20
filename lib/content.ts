import { images } from "@/lib/images";

export type FoodGroup =
  | "seafood"
  | "waterfront"
  | "breakfast"
  | "cheap-eats"
  | "italian"
  | "local";

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
    id: "seafood",
    title: "Seafood",
    description:
      "Fresh-caught Atlantic snapper, stone crab, and grouper at Pompano Beach's best dockside and pier-side spots.",
  },
  {
    id: "waterfront",
    title: "Waterfront Dining",
    description:
      "Dine with Intracoastal and ocean views — sunset decks, breezy patios, and the sound of the surf nearby.",
  },
  {
    id: "breakfast",
    title: "Breakfast & Brunch",
    description:
      "Start your Pompano Beach morning right — sunny cafés, strong coffee, and weekend brunch locals swear by.",
  },
  {
    id: "cheap-eats",
    title: "Cheap Eats",
    description:
      "Flavor-packed bites that won't break the bank — fish tacos, market counters, and beach-shack favorites under $15.",
  },
  {
    id: "italian",
    title: "Italian & Mediterranean",
    description:
      "Wood-fired pizza, handmade pasta, and Mediterranean plates with a sunny South Florida coastal twist.",
  },
  {
    id: "local",
    title: "Local Favorites",
    description:
      "Neighborhood gems where Pompano regulars gather — happy hours, live music, and no tourist traps.",
  },
] as const;

export type ExcursionGroup =
  | "water"
  | "fishing"
  | "boating"
  | "beach"
  | "parks";

export const excursionCategories = [
  {
    id: "water",
    title: "Water Adventures",
    description:
      "Snorkel Pompano's reefs, paddle the Intracoastal, and dive clear Atlantic waters just off the Broward coast.",
  },
  {
    id: "fishing",
    title: "Fishing Charters",
    description:
      "Deep-sea charters, reef runs, and pier fishing — from first-time anglers to locals chasing mahi and snapper.",
  },
  {
    id: "boating",
    title: "Boat Tours & Cruises",
    description:
      "Sunset sails, Hillsboro Inlet tours, and scenic Gold Coast cruises with dolphins and lighthouse views.",
  },
  {
    id: "beach",
    title: "Beach Activities",
    description:
      "Parasailing, jet skis, boardwalk bikes, and shore-side fun steps from Pompano Beach's golden sand.",
  },
  {
    id: "parks",
    title: "Parks & Nature",
    description:
      "Shaded trails and coastal parks minutes from the beach — bird watching, native hammocks, and easy family walks.",
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
    title: "Fisherman's Dock Seafood",
    excerpt:
      "Right on the Intracoastal with boats tied up out back — this is old-school Pompano seafood done right. Come hungry for fresh catch, cold beer, and a sunset view that beats any chain restaurant.",
    whyLocalsLove:
      "Regulars swear by the dockside atmosphere and portions that actually fill you up. It's where local fishermen grab lunch after a morning on the water — that tells you everything.",
    bestDishes: [
      "Yellowtail snapper sandwich",
      "Conch fritters with key lime aioli",
      "Grilled mahi with garlic butter",
      "Key lime pie",
    ],
    category: "Seafood",
    group: "seafood" as FoodGroup,
    image: images.fishermansDock,
    imageAlt: images.fishermansDockAlt,
    meta: ["Harbor Village", "Lunch & Dinner"],
    priceRange: "$$",
    badge: "Editor's Pick",
    featured: true,
    actionLabel: "Book a Table",
    actionHref: "https://example.com/fishermans-dock",
    reviewsHref: "https://example.com/fishermans-dock/reviews",
  },
  {
    title: "The Pier House Kitchen",
    excerpt:
      "You can literally see the Pompano Beach Fishing Pier from your table. Casual Florida seafood, strong drinks, and one of the best sunset decks on the beach — no reservation stress, just show up hungry.",
    whyLocalsLove:
      "Surfers, pier fishermen, and beach families all end up here. It's the unofficial after-beach hangout — relaxed, loud in a good way, and always serving something fresh from the Atlantic.",
    bestDishes: [
      "Mahi mahi tacos with slaw",
      "Crispy fish sandwich",
      "Coconut shrimp basket",
      "Pier sunset cocktail",
    ],
    category: "Seafood",
    group: "seafood" as FoodGroup,
    image: images.pierHouse,
    imageAlt: images.pierHouseAlt,
    meta: ["Pier District", "Waterfront Deck"],
    priceRange: "$$",
    badge: "Local Favorite",
    actionLabel: "Book a Table",
    actionHref: "https://example.com/pier-house-kitchen",
    reviewsHref: "https://example.com/pier-house-kitchen/reviews",
  },
  {
    title: "Pelican Reef Raw Bar",
    excerpt:
      "A lively raw bar built for sharing — oysters, peel-and-eat shrimp, and ceviche that tastes like it was caught an hour ago. Perfect after a beach morning when you want something cold and fresh.",
    whyLocalsLove:
      "Weekend crowds are mostly locals, not tour groups. The bartenders know your order by the second visit, and the prices stay fair even in season.",
    bestDishes: [
      "Oysters on the half shell",
      "Peel-and-eat Florida shrimp",
      "Yellowtail ceviche",
      "Stone crab claws (in season)",
    ],
    category: "Seafood",
    group: "seafood" as FoodGroup,
    image: images.pelicanRawBar,
    imageAlt: images.pelicanRawBarAlt,
    meta: ["Atlantic Blvd", "Raw Bar & Small Plates"],
    priceRange: "$$",
    actionLabel: "Book a Table",
    actionHref: "https://example.com/pelican-reef",
    reviewsHref: "https://example.com/pelican-reef/reviews",
  },
  {
    title: "Ocean's Edge",
    excerpt:
      "When you want a real date night in Pompano — seasonal seafood, craft cocktails, and a wide Intracoastal deck that glows at golden hour. Dress casual-smart and book ahead on weekends.",
    whyLocalsLove:
      "Locals bring out-of-town guests here to show off the waterway views. It's special-occasion dining without the Boca price tag or the pretentious vibe.",
    bestDishes: [
      "Pan-seared grouper of the day",
      "Florida lobster tail",
      "Intracoastal sunset cocktail",
      "Key lime brûlée",
    ],
    category: "Waterfront",
    group: "waterfront" as FoodGroup,
    image: images.intracoastalSunset,
    imageAlt: images.intracoastalSunsetAlt,
    meta: ["Intracoastal Waterway", "Sunset Dining"],
    priceRange: "$$$",
    badge: "Sunset Spot",
    actionLabel: "Book a Table",
    actionHref: "https://example.com/oceans-edge",
    reviewsHref: "https://example.com/oceans-edge/reviews",
  },
  {
    title: "Rusty Anchor Tavern",
    excerpt:
      "Nautical pub meets Florida patio bar — grouper sandwiches, tropical drafts, and live acoustic music on Friday nights. Pull up a seat facing the Atlantic and stay awhile.",
    whyLocalsLove:
      "It's the neighborhood watering hole with actual good food. Happy hour regulars mix with beach-day visitors, and nobody feels out of place in flip-flops.",
    bestDishes: [
      "Blackened grouper sandwich",
      "Fish & chips with tartar",
      "Conch fritters",
      "Tropical rum punch",
    ],
    category: "Waterfront",
    group: "waterfront" as FoodGroup,
    image: images.rustyAnchorPatio,
    imageAlt: images.rustyAnchorPatioAlt,
    meta: ["North Ocean Blvd", "Bar & Grill"],
    priceRange: "$$",
    actionLabel: "Book a Table",
    actionHref: "https://example.com/rusty-anchor",
    reviewsHref: "https://example.com/rusty-anchor/reviews",
  },
  {
    title: "Sunrise Cafe Pompano",
    excerpt:
      "The line out the door on Saturday mornings is mostly locals — and for good reason. Big portions, fair prices, and the kind of breakfast that fuels a full beach day ahead.",
    whyLocalsLove:
      "Snowbirds and year-round residents treat this as their weekly ritual. The staff remembers names, the coffee is strong, and nothing on the menu tries too hard.",
    bestDishes: [
      "Eggs Benedict with hollandaise",
      "Florida blueberry pancakes",
      "Cuban toast with butter",
      "Fresh-squeezed orange juice",
    ],
    category: "Breakfast",
    group: "breakfast" as FoodGroup,
    image: images.sunriseCafe,
    imageAlt: images.sunriseCafeAlt,
    meta: ["East Atlantic Blvd", "Open Daily 7am–2pm"],
    priceRange: "$",
    actionLabel: "Book a Table",
    actionHref: "https://example.com/sunrise-cafe-pompano",
    reviewsHref: "https://example.com/sunrise-cafe-pompano/reviews",
  },
  {
    title: "The Palm Brunch House",
    excerpt:
      "Weekend brunch on a palm-shaded patio downtown — avocado toast, creative benedicts, and mimosa flights that pair perfectly with a lazy Pompano Saturday. Reservations help on Sundays.",
    whyLocalsLove:
      "It's where locals celebrate birthdays, houseguests, and random sunny mornings. The patio feels like a backyard party, and the food is consistently worth the wait.",
    bestDishes: [
      "Lobster benedict",
      "Avocado toast with poached eggs",
      "Mimosa flight (three flavors)",
      "Coconut French toast",
    ],
    category: "Brunch",
    group: "breakfast" as FoodGroup,
    image: images.coralBrunch,
    imageAlt: images.coralBrunchAlt,
    meta: ["Old Pompano", "Sat & Sun Brunch"],
    priceRange: "$$",
    actionLabel: "Book a Table",
    actionHref: "https://example.com/palm-brunch-house",
    reviewsHref: "https://example.com/palm-brunch-house/reviews",
  },
  {
    title: "Taco Reef Beach Shack",
    excerpt:
      "Walk-up counter, picnic tables, ocean breeze — this is Pompano beach eating at its most honest. Fish tacos made to order, horchata on tap, and prices that leave room for ice cream after.",
    whyLocalsLove:
      "Locals skip the tourist traps and come here after surfing or pier fishing. Fast service, fresh fish, and you never feel ripped off — even in peak season.",
    bestDishes: [
      "Blackened mahi tacos (2 for $8)",
      "Crispy fish burrito bowl",
      "Yucca fries with cilantro lime",
      "Horchata or tamarind agua fresca",
    ],
    category: "Cheap Eats",
    group: "cheap-eats" as FoodGroup,
    image: images.tacoReefShack,
    imageAlt: images.tacoReefShackAlt,
    meta: ["Beach Blvd", "Walk-Up Counter"],
    priceRange: "$",
    actionLabel: "Order Now",
    actionHref: "https://example.com/taco-reef",
    reviewsHref: "https://example.com/taco-reef/reviews",
  },
  {
    title: "Pompano Harbor Fish Market",
    excerpt:
      "Part fish market, part counter-service kitchen — grab fresh catch to cook at home or eat their legendary smoked fish dip right on the spot. A true local institution steps from the harbor.",
    whyLocalsLove:
      "Generations of Pompano families buy their Friday fish here. The smoked dip is a beach-party staple, and the staff will tell you exactly what's running fresh that day.",
    bestDishes: [
      "Smoked fish dip with crackers",
      "Grilled fish sandwich",
      "Fresh yellowtail snapper (to cook)",
      "Key lime pie at the counter",
    ],
    category: "Cheap Eats",
    group: "cheap-eats" as FoodGroup,
    image: images.harborMarket,
    imageAlt: images.harborMarketAlt,
    meta: ["Pompano Harbor", "Market & Deli"],
    priceRange: "$",
    actionLabel: "Order Now",
    actionHref: "https://example.com/harbor-fish-market",
    reviewsHref: "https://example.com/harbor-fish-market/reviews",
  },
  {
    title: "Nonna's Coastal Kitchen",
    excerpt:
      "Wood-fired pizza, handmade pasta, and a warm dining room that feels like Sunday dinner at someone's house — if that house happened to be five minutes from the beach.",
    whyLocalsLove:
      "Families come here for birthdays and weeknight dinners alike. The daily seafood pasta special changes with what's fresh, and the staff treats regulars like family.",
    bestDishes: [
      "Wood-fired margherita pizza",
      "Lobster ravioli in pink sauce",
      "Eggplant parmigiana",
      "Tiramisu",
    ],
    category: "Italian",
    group: "italian" as FoodGroup,
    image: images.nonnasItalian,
    imageAlt: images.nonnasItalianAlt,
    meta: ["Atlantic Blvd", "Dinner Nightly"],
    priceRange: "$$",
    actionLabel: "Book a Table",
    actionHref: "https://example.com/nonnas-coastal-kitchen",
    reviewsHref: "https://example.com/nonnas-coastal-kitchen/reviews",
  },
  {
    title: "The Sandbar Social",
    excerpt:
      "Post-beach energy done right — tropical small plates, rum cocktails, and live music most weekends. Happy hour from 4–7pm is when locals pack the patio.",
    whyLocalsLove:
      "It's the go-to after a long beach day when you want flavor and fun without a big bill. The bartenders make a mean mojito, and the small plates are built for sharing.",
    bestDishes: [
      "Coconut shrimp with mango salsa",
      "Fish ceviche tostadas",
      "Rum mojito or dark & stormy",
      "Key lime pie bites",
    ],
    category: "Local Favorite",
    group: "local" as FoodGroup,
    image: images.sandbarGrill,
    imageAlt: images.sandbarGrillAlt,
    meta: ["Ocean Blvd", "Happy Hour Daily"],
    priceRange: "$$",
    actionLabel: "Book a Table",
    actionHref: "https://example.com/sandbar-social",
    reviewsHref: "https://example.com/sandbar-social/reviews",
  },
];

export const excursions = [
  {
    title: "Pompano Reef Snorkel Tour",
    excerpt:
      "Explore crystal-clear Atlantic water and vibrant reef fish on a guided half-day trip departing from Pompano Beach. All gear, boat transport, and safety briefing included — ideal for beginners and families.",
    category: "Snorkeling",
    group: "water" as ExcursionGroup,
    image: images.turquoiseOcean,
    imageAlt: images.turquoiseOceanAlt,
    meta: ["Half Day", "3–4 Hours", "All Levels"],
    priceRange: "From $55",
    badge: "Most Popular",
    featured: true,
    actionLabel: "Book This Tour",
    actionHref: "https://example.com/pompano-reef-snorkel",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/pompano-reef-snorkel/details",
  },
  {
    title: "Intracoastal Kayak & Manatee Tour",
    excerpt:
      "Paddle calm blue waterways through mangrove trails with a local guide who knows where manatees and wading birds gather. A peaceful alternative to the beach — great for couples and nature lovers.",
    category: "Kayaking",
    group: "water" as ExcursionGroup,
    image: images.kayak,
    imageAlt: images.kayakAlt,
    meta: ["2–3 Hours", "Easy Pace", "Wildlife"],
    priceRange: "From $40",
    actionLabel: "Book This Tour",
    actionHref: "https://example.com/intracoastal-kayak",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/intracoastal-kayak/details",
  },
  {
    title: "Atlantic Reef Scuba Dive",
    excerpt:
      "Descend South Florida's nearshore reefs with PADI-certified dive masters who handle all the logistics. Equipment rental and reef boat transport included — bring your certification and sense of adventure.",
    category: "Diving",
    group: "water" as ExcursionGroup,
    image: images.snorkeling,
    imageAlt: images.snorkelingAlt,
    meta: ["Half Day", "Certified Divers", "Gear Included"],
    priceRange: "From $95",
    actionLabel: "Book This Tour",
    actionHref: "https://example.com/atlantic-reef-dive",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/atlantic-reef-dive/details",
  },
  {
    title: "Pompano Beach Deep Sea Fishing",
    excerpt:
      "Head offshore for mahi-mahi, yellowtail snapper, and the occasional wahoo on a half-day charter with an experienced Broward County crew. No experience needed — they'll clean your catch at the dock.",
    category: "Fishing",
    group: "fishing" as ExcursionGroup,
    image: images.fishing,
    imageAlt: images.fishingAlt,
    meta: ["Half Day", "4–5 Hours", "All Ages"],
    priceRange: "From $85",
    badge: "Top Rated",
    actionLabel: "Book Charter",
    actionHref: "https://example.com/deep-sea-fishing-pompano",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/deep-sea-fishing-pompano/details",
  },
  {
    title: "Pompano Beach Pier Fishing",
    excerpt:
      "Cast a line from the iconic Pompano Beach Fishing Pier — rent rods and bait on-site, get tips from regulars, and enjoy wide-open Atlantic views. One of the best budget-friendly things to do in Pompano.",
    category: "Pier Fishing",
    group: "fishing" as ExcursionGroup,
    image: images.pierFishing,
    imageAlt: images.pierFishingAlt,
    meta: ["Flexible Hours", "Self-Guided", "All Ages"],
    priceRange: "From $15",
    actionLabel: "Get Tickets",
    actionHref: "https://example.com/pompano-pier-fishing",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/pompano-pier-fishing/details",
  },
  {
    title: "Gold Coast Sunset Catamaran",
    excerpt:
      "Sail into a Florida sunset as the sky turns amber over the Atlantic — complimentary drinks, coastal skyline views, and a relaxed vibe that's perfect for couples and families alike.",
    category: "Cruise",
    group: "boating" as ExcursionGroup,
    image: images.catamaran,
    imageAlt: images.catamaranAlt,
    meta: ["2 Hours", "Sunset Departure", "All Ages"],
    priceRange: "From $65",
    badge: "Romantic Pick",
    actionLabel: "Book This Tour",
    actionHref: "https://example.com/sunset-catamaran",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/sunset-catamaran/details",
  },
  {
    title: "Boat Tour to Hillsboro Inlet",
    excerpt:
      "Cruise from Pompano Beach to the historic Hillsboro Inlet Lighthouse on a narrated 90-minute tour. Spot dolphins, pass waterfront estates, and learn local history from a captain who knows these waters.",
    category: "Boat Tour",
    group: "boating" as ExcursionGroup,
    image: images.floridaPierSunset,
    imageAlt: images.floridaPierSunsetAlt,
    meta: ["90 Minutes", "Guided Tour", "Family Friendly"],
    priceRange: "From $45",
    actionLabel: "Book This Tour",
    actionHref: "https://example.com/hillsboro-inlet-tour",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/hillsboro-inlet-tour/details",
  },
  {
    title: "Pompano Parasailing Adventure",
    excerpt:
      "Soar 400 feet above the Atlantic for panoramic views of Pompano Beach, the pier, and the Gold Coast shoreline. Tandem flights available — no experience needed, and photo packages are offered on-site.",
    category: "Parasailing",
    group: "beach" as ExcursionGroup,
    image: images.beachVolleyball,
    imageAlt: images.beachVolleyballAlt,
    meta: ["45–60 Min", "Tandem Available", "Age 6+"],
    priceRange: "From $80",
    badge: "Thrilling",
    actionLabel: "Book Adventure",
    actionHref: "https://example.com/pompano-parasailing",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/pompano-parasailing/details",
  },
  {
    title: "Coastal Boardwalk Bike Rental",
    excerpt:
      "Cruise the Pompano Beach boardwalk and coastal bike path on a comfortable cruiser — helmets, locks, and a local route map included. An easy, affordable way to see the shoreline at your own pace.",
    category: "Beach",
    group: "beach" as ExcursionGroup,
    image: images.boardwalk,
    imageAlt: images.boardwalkAlt,
    meta: ["2 Hours", "Self-Guided", "Family Friendly"],
    priceRange: "From $20",
    actionLabel: "Get Tickets",
    actionHref: "https://example.com/boardwalk-bikes",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/boardwalk-bikes/details",
  },
  {
    title: "Fern Forest Nature Preserve",
    excerpt:
      "Walk shaded boardwalk trails through a tropical hardwood hammock just minutes from the beach. Bird watching, native plant signs, and quiet trails make this a perfect half-day escape from the sun.",
    category: "Nature",
    group: "parks" as ExcursionGroup,
    image: images.palmStreet,
    imageAlt: images.palmStreetAlt,
    meta: ["1–2 Hours", "Easy Trail", "Free Parking"],
    priceRange: "Free–$5",
    actionLabel: "Get Tickets",
    actionHref: "https://example.com/fern-forest-nature",
    secondaryActionLabel: "Learn More",
    secondaryActionHref: "https://example.com/fern-forest-nature/details",
  },
];
