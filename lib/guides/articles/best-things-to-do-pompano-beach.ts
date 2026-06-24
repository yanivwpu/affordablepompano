import { guideImages } from "@/lib/guideImages";
import type { Guide } from "@/lib/guides/types";

export const bestThingsToDoGuide: Guide = {
  slug: "best-things-to-do-pompano-beach",
  title: "Best Things To Do In Pompano Beach In 2026",
  excerpt:
    "Pier walks, reef snorkeling, Hillsboro Inlet cruises, and Intracoastal paddling — the top Pompano Beach activities for every budget and season.",
  category: "Guide",
  group: "visiting",
  image: guideImages.bestThingsToDo.src,
  imageAlt: guideImages.bestThingsToDo.alt,
  publishedAt: "2026-06-24",
  updatedAt: "2026-06-25",
  relatedSlugs: [
    "first-timers-guide-pompano-beach",
    "best-free-things-to-do",
    "seasonal-events-calendar",
    "weekend-guide-pompano-beach",
    "family-friendly-pompano-beach",
  ],
  exploreLinks: [
    {
      label: "Book Experiences",
      href: "/excursions#featured-experiences",
      description:
        "Fishing charters, boat tours, snorkeling, and water sports with live booking links.",
    },
    {
      label: "Where To Eat",
      href: "/food",
      description:
        "Seafood decks, harbor grills, and Atlantic Blvd counters after a full day out.",
    },
    {
      label: "Homes & Stays",
      href: "/homes",
      description:
        "Beachfront hotels and weekly rentals near the pier and Intracoastal.",
    },
  ],
  content: [
    {
      type: "section",
      heading: "How to plan the best Pompano Beach day in 2026",
      paragraphs: [
        "In 2026, Pompano Beach is leaning into what it has always done well — pier mornings, reef trips off the Broward coast, Intracoastal sunsets, and harbor seafood that does not require booking weeks ahead. The activity map splits cleanly: Atlantic shore for surf and sand, waterway side for calmer paddling and dockside dining.",
        "Snowbirds who return November through April already know the rhythm: mornings on the sand or pier, a harbor lunch, and an afternoon charter or nature walk before an early dinner. Summer visitors trade smaller crowds for heat and afternoon thunderstorms — shift water activities to before 11 a.m. and keep a backup plan inland on Atlantic Boulevard.",
        "This guide ranks the experiences locals and repeat visitors actually book — not a generic Florida list. For bookable tours and charters, start with our [[featured experiences|/excursions#featured-experiences]] section, which aggregates fishing, boat, and snorkel options with transparent pricing.",
      ],
    },
    {
      type: "section",
      heading: "Pompano Beach Fishing Pier and Atlantic shoreline",
      paragraphs: [
        "The Pompano Beach Fishing Pier on North Ocean Boulevard (A1A) is the city's signature landmark — a quarter-mile walk over breaking surf with anglers, pelicans, and sunrise photographers sharing the rails. Walking is free; fishing may require a Florida saltwater license and optional rod rentals from the pier approach. Even if you never cast a line, the pier orients you to the coastline and shows which beach access points look busiest.",
        "Stretching north and south from the pier, public beach access along A1A delivers swimming, jogging, and sandcastle territory without resort passes. Lifeguard stations mark the safest swim zones; rip currents are real on the open Atlantic. Pair a pier morning with our [[Best Free Things To Do|/guides/best-free-things-to-do]] guide if you want to keep the afternoon cost at zero.",
        "Weekend parking near the pier fills fast when tournaments and snowbird season overlap — arrive before 9 a.m. or read our [[Parking & Pier Access Tips|/guides/parking-pier-access-tips]] before your first Saturday.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Stack pier + brunch on Atlantic Blvd",
        body: "After a pier walk, skip the first beachfront counter and drive inland on Atlantic Boulevard — you'll find better breakfast value and shorter waits than on A1A, then return to the sand when the midday sun peaks.",
      },
    },
    {
      type: "section",
      heading: "On-the-water adventures worth booking",
      paragraphs: [
        "Half-day fishing charters launch from Pompano and nearby Hillsboro Inlet marinas, targeting snapper, mahi, and seasonal pelagics depending on the month. Inshore trips suit families and first-timers; offshore runs reward early risers with bigger water and longer rides. Browse [[fishing charters and pier angling|/excursions#fishing]] for local options and Viator-backed trips you can book before you land at FLL.",
        "Snorkeling and scuba excursions reach nearshore reefs and wrecks where tropical fish, rays, and occasional sea turtles show up on clear days. Morning visibility beats afternoon chop; winter water is cooler but often clearer. Jet skis, parasailing, and paddleboard rentals line the beach district for visitors who want action without committing to a full charter.",
        "Our [[featured experiences|/excursions#featured-experiences]] page groups the highest-rated bookable activities — fishing charters, dolphin cruises, snorkeling, and water sports — so you can compare duration and price in one place rather than hunting scattered listings.",
      ],
    },
    {
      type: "section",
      heading: "Intracoastal, harbor, and Hillsboro Inlet",
      paragraphs: [
        "The Intracoastal side of Pompano feels like a different trip: yachts, drawbridges, and waterfront restaurants facing calmer water than the ocean beach. Kayak and paddle launches let you explore mangrove edges and watch manatees in cooler months without open-ocean swell.",
        "Boat tours through Hillsboro Inlet — the narrow passage between Pompano and Hillsboro Beach — combine lighthouse views, coastal mansions, and frequent dolphin sightings. Sunset cruises here face west across the waterway; Atlantic beach sunsets face the horizon over open water. Both are worth doing on a multi-day trip.",
        "Seafood lunch at a harbor deck is a legitimate activity, not just fuel. Our [[Food & Eats directory|/food]] highlights dockside catches and Intracoastal patios where locals eat after a morning on the water.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Check the seasonal events calendar",
        body: "Fishing tournaments, holiday pier festivals, and winter street fairs can double traffic on Atlantic Blvd and A1A. See our [[Seasonal Events Calendar|/guides/seasonal-events-calendar]] before booking restaurants or charters on peak weekends.",
      },
    },
    {
      type: "section",
      heading: "Beyond the beach: parks, neighborhoods, and day trips",
      paragraphs: [
        "Fern Forest Nature Center and other Broward parks offer shaded boardwalks through native hammocks — ideal when afternoon storms roll in or when fair-skinned visitors need a break from direct sun. Birding, interpretive trails, and air-conditioned visitor centers make these viable half-days, not just rainy-hour fillers.",
        "Old Pompano's walkable downtown corridor west of the beach has brunch patios, local shops, and neighborhood restaurants without pier parking stress. Read our [[Neighborhood Spotlight: Old Pompano|/guides/neighborhood-spotlight-old-pompano]] if you want to explore beyond the A1A strip.",
        "Fort Lauderdale's Riverwalk, Las Olas, and cruise-port districts sit 20–30 minutes south via Federal Highway or I-95. Deerfield Beach and Hillsboro Beach offer quieter sand a short drive north. None require an overnight move — Pompano works well as a lower-key base with easy day-trip spokes.",
      ],
    },
    {
      type: "section",
      heading: "Putting it together: sample itineraries",
      paragraphs: [
        "Classic weekend: Day one — pier sunrise, beach swim, harbor lunch, sunset boat tour. Day two — snorkel or fishing charter in the morning, Atlantic Blvd happy hour (see [[Happy Hours Near the Beach|/guides/happy-hours-near-the-beach]]), repeat your favorite meal.",
        "Budget-conscious: Lean on free pier walks, public beach time, and Intracoastal strolling from our [[Budget-Friendly Beach Days|/guides/budget-friendly-beach-days]] playbook; add one paid excursion from [[featured experiences|/excursions#featured-experiences]] instead of stacking tickets.",
        "First visit? Start with the [[First-Timer's Guide|/guides/first-timers-guide-pompano-beach]] for airport logistics, neighborhood orientation, and practical gear — then return here to prioritize what fits your group.",
      ],
    },
  ],
  thingsToKnow: [
    {
      title: "Book water activities ahead in peak season",
      body: "November through April and holiday weekends fill fishing and boat slots early. Reserve charters at least a few days out; walk-up pier fishing stays more flexible.",
    },
    {
      title: "Morning beats afternoon on the Atlantic",
      body: "Heat, glare, and thunderstorms favor beach and boat time before noon June through September. Keep lunch and shopping blocks for the 2–5 p.m. window.",
    },
    {
      title: "FLL is the default airport",
      body: "Fort Lauderdale-Hollywood International Airport is typically 20–30 minutes south. Miami and Palm Beach airports work but add drive time on I-95 or the Turnpike.",
    },
  ],
  relatedPlaces: [
    {
      name: "Featured experiences & tours",
      href: "/excursions#featured-experiences",
      description: "Bookable fishing, boating, snorkeling, and water sports near Pompano.",
    },
    {
      name: "Pompano Beach Fishing Pier",
      href: "/excursions#fishing",
      description: "Iconic pier walks, angling, and Atlantic views — the city's anchor attraction.",
    },
    {
      name: "Waterfront dining",
      href: "/food#seafood",
      description: "Harbor decks and seafood shacks after a day on the water.",
    },
  ],
  faq: [
    {
      question: "What is the number one thing to do in Pompano Beach?",
      answer:
        "Walking the Pompano Beach Fishing Pier and spending time on the adjacent public beach top most visitors' lists. Add a booked water activity — fishing charter, snorkel trip, or Hillsboro Inlet cruise — for the full Pompano experience.",
    },
    {
      question: "How many days do you need to see the best of Pompano?",
      answer:
        "A long weekend (3–4 days) covers the pier, beach, one charter, harbor dining, and a park or neighborhood detour. A week lets you repeat favorites, add Fort Lauderdale day trips, and avoid rushing around afternoon storms.",
    },
    {
      question: "Are Pompano Beach activities good for non-swimmers?",
      answer:
        "Yes. Pier walks, boat tours, Intracoastal paddling in calm channels, waterfront dining, and nature trails do not require swimming. Charters and parasailing are optional add-ons.",
    },
    {
      question: "When is the best time to visit for activities?",
      answer:
        "December through April offers dry weather and active snowbird season — book ahead. May, October, and early June balance warm water with thinner crowds. Summer has lower lodging rates but plan around heat and thunderstorms.",
    },
    {
      question: "Where do I book tours and charters?",
      answer:
        "Start at our Excursions page [[featured experiences section|/excursions#featured-experiences]] for curated fishing, boat, snorkel, and water-sport bookings. Pier fishing and beach rentals are walk-up friendly near A1A.",
    },
  ],
};
