const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

/** Sunny South Florida / Pompano Beach coastal imagery (Unsplash) */
export const images = {
  hero: unsplash("photo-1645771845014-7077d5d0f058", 2400),
  heroAlt:
    "Sunny Florida beach with palm trees, turquoise water, and a pier",

  goldenBeach: unsplash("photo-1573220983618-156ea86f9c17", 1600),
  goldenBeachAlt: "Golden hour over a sunny South Florida beach",

  floridaPierSunset: unsplash("photo-1703556891303-99ed089279e6", 1600),
  floridaPierSunsetAlt:
    "Florida beach pier at sunset with warm sky and Atlantic ocean",

  pompanoPier: unsplash("photo-1645771845014-7077d5d0f058", 1600),
  pompanoPierAlt:
    "Bright sunny Florida beach pier with palm trees and blue water",

  pier: unsplash("photo-1703556891303-99ed089279e6"),
  pierAlt: "Sunny Florida fishing pier over the Atlantic Ocean",

  pierWalk: unsplash("photo-1645771845014-7077d5d0f058"),
  pierWalkAlt: "Sandy Florida beach with palms and pier on a sunny day",

  pierFishing: unsplash("photo-1703556891303-99ed089279e6", 1200),
  pierFishingAlt: "Fishing from a sunny Florida pier",

  turquoiseOcean: unsplash("photo-1638945657559-24972f58788a"),
  turquoiseOceanAlt:
    "Miami Beach palm trees and turquoise Atlantic under sunny skies",

  sunnyBeach: unsplash("photo-1599509033274-4d2128aa81e2"),
  sunnyBeachAlt: "Bright sunny South Florida beach with golden sand",

  beachVolleyball: unsplash("photo-1599509055064-8a742910930a"),
  beachVolleyballAlt: "Sunny daytime beach in South Florida",

  beachSunrise: unsplash("photo-1563714104487-2d992b91aeb9"),
  beachSunriseAlt: "Golden hour clouds over the South Florida coast",

  familyBeach: unsplash("photo-1599509033274-4d2128aa81e2"),
  familyBeachAlt: "Families on a sunny South Florida beach",

  palmTrees: unsplash("photo-1590523277543-a94d2e4eb00b"),
  palmTreesAlt: "Palm trees against a bright blue Florida sky",

  palmBeach: unsplash("photo-1638945657559-24972f58788a", 1200),
  palmBeachAlt: "Palm-lined Florida beach with turquoise ocean",

  palmStreet: "/images/guides/neighborhood-street.jpg",
  palmStreetAlt:
    "Palm-lined neighborhood street in South Florida near the Atlantic coast",

  keysBeach: unsplash("photo-1645771845014-7077d5d0f058", 1200),
  keysBeachAlt: "Sunny Atlantic beach with pier near Pompano Beach, Florida",

  pompanoLandmark: unsplash("photo-1702003201618-955fee10a2b4"),
  pompanoLandmarkAlt: "Sunny Pompano Beach waterfront",

  floridaHome: unsplash("photo-1638945657559-24972f58788a", 1000),
  floridaHomeAlt: "Oceanfront palms and turquoise water in South Florida",

  buyHome: unsplash("photo-1645771845014-7077d5d0f058", 900),
  buyHomeAlt: "Sunny Florida beach community with pier and palms",

  sellHome: unsplash("photo-1573220983618-156ea86f9c17", 900),
  sellHomeAlt: "Golden hour on a warm South Florida shoreline",

  longTermRental: "/images/homes/long-term-rental.jpg",
  longTermRentalAlt:
    "Palm-lined residential street in a South Florida neighborhood",

  vacationRental: unsplash("photo-1573220983618-156ea86f9c17", 900),
  vacationRentalAlt: "Golden-hour Florida beach vacation scene",

  waterfront: unsplash("photo-1638945657559-24972f58788a"),
  waterfrontAlt: "Sunny Florida waterfront with palms and turquoise ocean",

  /** Warm Florida outdoor dining & restaurant scenes */
  oceanfrontDining: unsplash("photo-1721676447566-9a898db74c2b", 1000),
  oceanfrontDiningAlt:
    "Sunny outdoor dining with palm trees near the Florida coast",

  beachBar: unsplash("photo-1514933651103-005eec06c04b", 1000),
  beachBarAlt: "Sunny tropical beach bar with palm trees in Florida",

  pierDining: unsplash("photo-1703556891303-99ed089279e6", 1000),
  pierDiningAlt: "Warm sunset views from a Florida pier restaurant",

  casualPatio: unsplash("photo-1757025662650-92188a174325", 900),
  casualPatioAlt:
    "Palm trees and oceanfront patio dining in South Florida",

  breakfastBeach: unsplash("photo-1563714104487-2d992b91aeb9", 900),
  breakfastBeachAlt: "Golden morning light over the Florida coastline",

  fishShack: unsplash("photo-1645771845014-7077d5d0f058", 900),
  fishShackAlt: "Casual beachside eats near a sunny Florida pier",

  localGrill: unsplash("photo-1590523277543-a94d2e4eb00b", 900),
  localGrillAlt: "Sunny Florida palms near a local neighborhood grill",

  /** Food & Eats — unique verified Florida / Pompano Beach photo per card */
  foodHero: "/images/food/food-hero.jpg",
  foodHeroAlt:
    "Pompano Beach fishing pier at sunset with warm sky and Atlantic Ocean",

  fishermansDock: unsplash("photo-1702003201618-955fee10a2b4", 1000),
  fishermansDockAlt:
    "Sunny Pompano Beach waterfront with palm trees and the Atlantic Ocean",

  pierHouse: unsplash("photo-1645771845014-7077d5d0f058", 1000),
  pierHouseAlt:
    "Pompano Beach pier and palm-lined shoreline on a bright sunny day",

  pelicanRawBar: unsplash("photo-1559847844-5315695dadae", 1000),
  pelicanRawBarAlt:
    "Fresh Atlantic seafood spread at a South Florida raw bar",

  intracoastalSunset: unsplash("photo-1721676447566-9a898db74c2b", 1000),
  intracoastalSunsetAlt:
    "Waterfront restaurant patio with palm trees and ocean views in South Florida",

  rustyAnchorPatio: unsplash("photo-1514933651103-005eec06c04b", 1000),
  rustyAnchorPatioAlt:
    "Sunny tropical beach bar patio with palm trees near the Atlantic coast",

  sunriseCafe: unsplash("photo-1533089860892-a7c6f0a88666", 1000),
  sunriseCafeAlt:
    "Classic sunny Florida breakfast at a bright beachside café",

  coralBrunch: unsplash("photo-1757025662650-92188a174325", 1000),
  coralBrunchAlt:
    "Outdoor brunch patio with palm trees and blue sky along the Florida coast",

  tacoReefShack: unsplash("photo-1565299585323-38d6b0865b47", 1000),
  tacoReefShackAlt:
    "Fresh fish tacos at a casual Pompano Beach shore-side shack",

  harborMarket: "/images/food/harbor-fish-market.jpg",
  harborMarketAlt: "Fresh whole fish on ice at a seafood market counter",

  nonnasItalian: unsplash("photo-1414235077428-338989a2e8c0", 1000),
  nonnasItalianAlt:
    "Warm coastal Italian restaurant dining room with elegant table setting",

  sandbarGrill: unsplash("photo-1600891964092-4316c288032e", 1000),
  sandbarGrillAlt:
    "Grilled Florida catch served at a sunny Atlantic beachfront grill",

  /** Activities — South Florida Atlantic coast */
  snorkeling: unsplash("photo-1638945657559-24972f58788a", 1200),
  snorkelingAlt: "Turquoise Atlantic waters for snorkeling in South Florida",

  kayak: unsplash("photo-1645771845014-7077d5d0f058", 900),
  kayakAlt: "Calm sunny Florida coastal waters near the pier",

  fishing: unsplash("photo-1703556891303-99ed089279e6", 1000),
  fishingAlt: "Florida pier fishing on a sunny Atlantic morning",

  catamaran: unsplash("photo-1573220983618-156ea86f9c17", 1000),
  catamaranAlt: "Golden hour sail along the South Florida coast",

  reefDive: unsplash("photo-1638945657559-24972f58788a"),
  reefDiveAlt: "Clear turquoise Atlantic waters off South Florida",

  boardwalk: unsplash("photo-1645771845014-7077d5d0f058", 900),
  boardwalkAlt: "Sunny Florida beach boardwalk with palms and pier",

  turquoiseWater: unsplash("photo-1638945657559-24972f58788a"),
  turquoiseWaterAlt: "Crystal-clear turquoise Atlantic in Miami Beach, Florida",
} as const;

export const REALTOR_EMAIL = "hello@affordablepompano.com";

export const REALTOR_PHONE = "(954) 513-8408";

export const REALTOR_PHONE_HREF = "tel:+19545138408";

export const MLS_PLACEHOLDER =
  "Live MLS listings coming soon — contact us for best value properties";
