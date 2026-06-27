export type PillarEditorialSection = {
  heading?: string;
  paragraphs: string[];
};

export type PillarQuickLink = {
  label: string;
  href: string;
  description: string;
};

export type PillarEditorial = {
  introParagraphs: string[];
  sections: PillarEditorialSection[];
  quickLinks: PillarQuickLink[];
  /** Short labels only — rendered as a single bottom teaser, not cards */
  futureGuideLabels?: string[];
};

export const foodPillarEditorial: PillarEditorial = {
  introParagraphs: [
    "Pompano Beach eats like a working waterfront town, not a theme-park food court. Atlantic Boulevard carries everyday diners and raw bars where locals grab oysters after a beach morning. The harbor and Intracoastal corridor serves dockside snapper, conch fritters, and sunset decks facing yacht traffic instead of open surf. Whether you are flying into Fort Lauderdale-Hollywood International Airport (FLL) for a long weekend or wintering here as a snowbird, the best meals usually come from knowing which strip to use on which night — not from booking the first oceanfront table you see on A1A.",
  ],
  sections: [
    {
      heading: "Three dining zones worth understanding",
      paragraphs: [
        "The pier and A1A beach strip is casual, loud, and sunset-forward — ideal for post-swim tacos, pier-adjacent grills, and tourists who want sand on their shoes at dinner. Prices run higher than inland, but you are paying for Atlantic breeze and people-watching, not white-tablecloth service.",
        "The Pompano Harbor and Intracoastal side is where fishermen eat after a morning run and where locals bring visitors who want \"real Florida\" without driving to Fort Lauderdale. Dockside counters, harbor decks, and Intracoastal patios dominate here. Our [[Best Seafood Restaurants|/guides/best-seafood-restaurants-pompano-beach]] and [[Best Waterfront Restaurants|/guides/best-waterfront-restaurants-pompano-beach]] guides go deep on these corridors.",
        "Inland Atlantic Boulevard and Old Pompano reward breakfast regulars, happy-hour crawls, and budget-conscious travelers who would rather spend on a charter than on waterfront markup every night. [[Happy Hour Guide|/guides/happy-hour-guide-pompano-beach]] and [[Happy Hours Near the Beach|/guides/happy-hours-near-the-beach]] map the best discount windows along this stretch.",
      ],
    },
    {
      heading: "When to eat where (local timing)",
      paragraphs: [
        "Snowbird season from November through April fills harbor decks and weekend brunch patios by 10 a.m. Arrive early for [[breakfast spots|/guides/best-breakfast-spots-pompano-beach]] near the pier, or book waterfront dinners mid-week when tournament anglers and weekend tourists thin out.",
        "Summer trades smaller restaurant crowds for afternoon thunderstorms. Locals front-load beach time, eat an early harbor lunch, and save splurge dinners for clear evenings. Pair a budget beach morning from our [[Budget-Friendly Beach Days|/guides/budget-friendly-beach-days]] guide with one harbor meal — that mix keeps tabs reasonable without feeling deprived.",
        "Stone crab season, fishing tournaments, and holiday weekends behave like mini high seasons. If your trip overlaps a tournament weigh-in near the harbor, expect louder patios and faster turnover — part of the charm, but not the night for a quiet anniversary unless you reserve inland.",
      ],
    },
    {
      heading: "How we cover restaurants on Affordable Pompano",
      paragraphs: [
        "Editorial picks below reflect repeat visits across seasons — where harbor workers, pier regulars, and neighborhood families actually eat. Partner listings in our [[restaurant directory|/food#featured-restaurants]] include dedicated pages with hours, maps, and direct contact links; sponsored partners are always labeled clearly.",
        "Use this page as your starting map, then drill into category guides for seafood, waterfront views, breakfast, and happy hour. When you are ready to explore beyond the plate, our [[Things To Do|/guides/best-things-to-do-pompano-beach]] and [[Excursions|/excursions]] hubs connect dining to fishing charters, boat tours, and beach days on the same trip.",
      ],
    },
  ],
  quickLinks: [
    {
      label: "Seafood Guide",
      href: "/guides/best-seafood-restaurants-pompano-beach",
      description: "Harbor docks, raw bars, and pier-side catches.",
    },
    {
      label: "Waterfront Dining",
      href: "/guides/best-waterfront-restaurants-pompano-beach",
      description: "Atlantic decks and Intracoastal sunset tables.",
    },
    {
      label: "Breakfast & Brunch",
      href: "/guides/best-breakfast-spots-pompano-beach",
      description: "Early pier parking starts with a solid diner meal.",
    },
    {
      label: "List Your Restaurant",
      href: "/advertise?package=restaurant-listing-standard#contact",
      description: "Featured placement in the Pompano restaurant directory.",
    },
  ],
  futureGuideLabels: ["pizza", "tacos", "coffee", "date night"],
};

export const homesPillarEditorial: PillarEditorial = {
  introParagraphs: [
    "Pompano Beach sits in the sweet spot of Broward County — close enough to Fort Lauderdale and Miami for work and airports, yet far enough from the highest price-per-square-foot zip codes that buyers and renters still find Atlantic-access neighborhoods without Boca-level premiums. Condos along A1A, single-family streets west of Federal Highway, and Intracoastal-adjacent pockets each trade off walkability, flood insurance, HOA rules, and daily commute patterns differently. This page is for anyone searching live inventory, comparing neighborhoods, or assembling the local pros — lenders, title, inspectors — who make a Broward closing actually close.",
  ],
  sections: [
    {
      heading: "Buying, renting, and seasonal stays",
      paragraphs: [
        "Buyers often arrive through Fort Lauderdale-Hollywood International Airport (FLL) and fall in love with pier-district energy before realizing inland Old Pompano or Lighthouse Point-adjacent streets offer quieter blocks at different price points. Our [[Buying a Home|/guides/buying-home-pompano-beach]] and [[Best Neighborhoods|/guides/best-neighborhoods-pompano-beach]] guides explain flood zones, condo versus single-family trade-offs, and where snowbirds versus year-round families tend to land.",
        "Relocators should read the [[Moving to Pompano Beach|/guides/moving-to-pompano-beach]] overview and the [[Complete Moving Guide|/guides/moving-to-pompano-beach-complete-guide]] before signing a lease or offer — Broward timelines, insurance, and homestead questions surprise newcomers who only know purchase prices from Zillow screenshots.",
        "The [[Cost of Living|/guides/cost-of-living-pompano-beach]] guide pairs with neighborhood research so you budget for HOA fees, wind insurance, and car-dependent errands — not just mortgage principal.",
      ],
    },
    {
      heading: "Local pros you will actually need",
      paragraphs: [
        "A smooth Pompano purchase involves more than an agent. Mortgage brokers who understand snowbird financing, title companies familiar with Broward HOA estoppels, home inspectors who write wind-mitigation reports, and insurance agents who quote flood alongside homeowners policies — these are not optional extras on a tight closing timeline.",
        "Our [[Local Business Directory|/businesses]] lists vetted partners in real estate, mortgage, title, insurance, attorneys, and inspection categories. Featured listings include dedicated profile pages; standard listings still give you direct phone and website links without hunting generic national directories.",
        "For a deeper look at daily life in one walkable corridor, see [[Old Pompano Neighborhood Spotlight|/guides/neighborhood-spotlight-old-pompano]] — brunch patios, local shops, and the inland rhythm that beach-week visitors often miss.",
      ],
    },
    {
      heading: "Search live listings and get local help",
      paragraphs: [
        "Use the MLS search below for current condos, townhomes, and single-family inventory across Pompano Beach. Property alerts and showing requests route to a local expert who knows which streets flood during king tides, which buildings allow weekly rentals, and where inventory turns fastest in snowbird season.",
        "Whether you are buying a primary home, a winter retreat, or scouting a long-term rental before a job transfer, start with neighborhood guides, search live data, then reach out when you want a human read on a specific building or block — not a generic national lead form.",
      ],
    },
  ],
  quickLinks: [
    {
      label: "Buying Guide",
      href: "/guides/buying-home-pompano-beach",
      description: "Offers, inspections, and Broward closing basics.",
    },
    {
      label: "Neighborhoods",
      href: "/guides/best-neighborhoods-pompano-beach",
      description: "Compare blocks from A1A to inland Old Pompano.",
    },
    {
      label: "Cost of Living",
      href: "/guides/cost-of-living-pompano-beach",
      description: "Taxes, insurance, and everyday expenses.",
    },
    {
      label: "Local Businesses",
      href: "/businesses",
      description: "Lenders, title, insurance, and home services.",
    },
  ],
  futureGuideLabels: ["renting", "property taxes", "schools"],
};

export const excursionsPillarEditorial: PillarEditorial = {
  introParagraphs: [
    "Pompano Beach is a water town squeezed between the Atlantic Ocean and the Intracoastal Waterway — which means your activity list naturally splits into pier and beach mornings, reef and offshore afternoons, and golden-hour cruises through Hillsboro Inlet. You do not need a week of tickets to have a full trip: locals mix free pier walks and public beach time with one booked charter or boat tour, then spend the savings on harbor seafood. This page connects bookable experiences, partner excursion listings, and in-depth local guides so you can plan a single day or an entire snowbird season without bouncing between generic tourism sites.",
  ],
  sections: [
    {
      heading: "Signature Pompano experiences",
      paragraphs: [
        "The Pompano Beach Fishing Pier is the affordable entry point — walk for free, fish with rented gear, watch anglers and pelicans, and orient yourself to the coastline before you spend on a boat. When you are ready for offshore action, our [[Pompano Beach Fishing Guide|/guides/pompano-beach-fishing-guide]] covers pier etiquette, licenses, charters, and seasonal species.",
        "[[Boat tours|/guides/best-boat-tours-pompano-beach]] through Hillsboro Inlet combine lighthouse views, dolphin sightings, and Intracoastal mansions — calmer water than open-ocean runs and the classic sunset option facing the western skyline. Families often pair a morning beach block with an afternoon narrated cruise instead of stacking three paid tickets in one day.",
        "Beach access along A1A is free beyond parking; our [[Best Beaches|/guides/best-beaches-pompano-beach]] and [[Family-Friendly Pompano|/guides/family-friendly-pompano-beach]] guides explain lifeguard zones, tide timing, and stroller-friendly access points north and south of the pier.",
      ],
    },
    {
      heading: "Planning by season and weather",
      paragraphs: [
        "November through April is snowbird peak — charter slots and sunset cruises sell out on winter weekends. Book fishing and boat tours several days ahead if your trip falls between Christmas and Easter. Our [[Weekend Guide|/guides/weekend-guide-pompano-beach]] lays out a realistic Saturday-Sunday rhythm from pier sunrise to harbor dinner.",
        "Summer offers more last-minute availability but predictable 3 p.m. thunderstorms June through September. Front-load beach and boat time before 11 a.m.; keep Fern Forest trails, harbor lunches, or an indoor afternoon from our [[Rainy Day Guide|/guides/rainy-day-pompano-beach]] as backup.",
        "For a ranked overview of everything worth doing — free and paid — start with [[Best Things To Do in Pompano Beach|/guides/best-things-to-do-pompano-beach]], then return here to book specific operators.",
      ],
    },
    {
      heading: "Book experiences and support local operators",
      paragraphs: [
        "Featured experiences below aggregate bookable tours with reviews and transparent pricing — fishing, snorkeling, parasailing, and more. Partner listings in our excursion directory include dedicated pages with phone, maps, and direct booking links; featured partners receive top placement and clear sponsorship labels.",
        "Independent charter captains and tour operators can [[list an excursion|/advertise?package=excursion-listing-standard#contact]] without rebuilding their web presence from scratch — one profile page, category placement, and internal links from guides that already rank for Pompano search traffic.",
      ],
    },
  ],
  quickLinks: [
    {
      label: "Fishing Guide",
      href: "/guides/pompano-beach-fishing-guide",
      description: "Pier angling, charters, and seasonal calendar.",
    },
    {
      label: "Boat Tours",
      href: "/guides/best-boat-tours-pompano-beach",
      description: "Hillsboro Inlet, dolphins, and sunset sails.",
    },
    {
      label: "Weekend Itinerary",
      href: "/guides/weekend-guide-pompano-beach",
      description: "Hour-by-hour plan for a two-day visit.",
    },
    {
      label: "Food After Activities",
      href: "/food",
      description: "Harbor seafood and Intracoastal patios.",
    },
  ],
  futureGuideLabels: ["snorkeling", "kayaking", "nightlife"],
};

export const businessesPillarEditorial: PillarEditorial = {
  introParagraphs: [
    "Moving to Pompano Beach — or buying a second home here — means hiring local pros who know Broward County timelines, not generic national brands that treat your closing like any other Florida file. Flood insurance quotes differ block by block. Wind-mitigation inspections change premiums. Title companies that understand HOA estoppels save weeks on condo purchases. This directory exists so residents and relocators find attorneys, lenders, inspectors, contractors, and everyday services with dedicated profile pages, direct contact links, and category placement across Affordable Pompano's living and buying guides.",
  ],
  sections: [
    {
      heading: "Who belongs in this directory",
      paragraphs: [
        "Real estate agents and brokers, mortgage lenders, title companies, insurance agents, real estate attorneys, and home inspectors form the core of every purchase — our [[Buying a Home|/guides/buying-home-pompano-beach]] and [[Complete Moving Guide|/guides/moving-to-pompano-beach-complete-guide]] link directly to these categories when readers are ready to act.",
        "After closing, homeowners need contractors, roofers, HVAC techs, pool services, landscapers, and pest control operators who understand South Florida humidity, hurricane prep, and salt-air wear. Medical, dental, veterinary, auto, and fitness categories round out daily life for year-round residents and snowbirds alike.",
        "Each listing supports a dedicated SEO-friendly URL, LocalBusiness schema, maps, hours, and sponsorship tiers — from standard directory placement to featured cards, category sponsorship, and homepage promotion — without redesigning the site as partners grow.",
      ],
    },
    {
      heading: "How to use this page",
      paragraphs: [
        "Browse by category below or jump from our [[Homes hub|/homes]] and neighborhood guides when a specific professional need comes up — insurance while comparing flood quotes, an inspector after your offer is accepted, a roofer after a wind-mit report.",
        "Partner listings are paid placements clearly labeled on profile pages. Editorial guides remain independent; sponsorship never changes which neighborhoods or buying advice we recommend.",
        "If you serve Pompano Beach or Broward County and want a permanent profile page plus internal links from high-traffic living guides, see our [[advertise page|/advertise?package=business-listing-standard#contact]] for standard and featured packages.",
      ],
    },
    {
      heading: "Connect with local expertise",
      paragraphs: [
        "Questions about which category fits your business, or whether featured placement makes sense for your market? Reach out through the advertise page or [[contact us|/contact]] — we respond to local business inquiries within one business day.",
        "Residents looking for a realtor or MLS search should start on the [[Homes page|/homes]] for live inventory and showing requests; this directory focuses on the broader ecosystem of pros who support Pompano homeowners before, during, and after closing.",
      ],
    },
  ],
  quickLinks: [
    {
      label: "Homes & Listings",
      href: "/homes",
      description: "Search MLS inventory and schedule showings.",
    },
    {
      label: "Buying Guide",
      href: "/guides/buying-home-pompano-beach",
      description: "Step-by-step Broward purchase advice.",
    },
    {
      label: "Neighborhoods",
      href: "/guides/best-neighborhoods-pompano-beach",
      description: "Compare areas before you hire local pros.",
    },
    {
      label: "Advertise",
      href: "/advertise?package=business-listing-standard#contact",
      description: "List your business in this directory.",
    },
  ],
};

export const pillarEditorialByPath: Record<string, PillarEditorial> = {
  "/food": foodPillarEditorial,
  "/homes": homesPillarEditorial,
  "/excursions": excursionsPillarEditorial,
  "/businesses": businessesPillarEditorial,
};
