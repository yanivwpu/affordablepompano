import { guideImages } from "@/lib/guideImages";
import type { Guide } from "@/lib/guides/types";

export const firstTimersGuide: Guide = {
  slug: "first-timers-guide-pompano-beach",
  title: "First-Timer's Guide to Pompano Beach",
  excerpt:
    "Parking tips, pier walks, and the best free spots — everything you need for a great first visit.",
  category: "Guide",
  group: "visiting",
  image: guideImages.firstTimers.src,
  imageAlt: guideImages.firstTimers.alt,
  publishedAt: "2026-06-01",
  updatedAt: "2026-06-25",
  relatedSlugs: [
    "parking-pier-access-tips",
    "best-free-things-to-do",
    "budget-friendly-beach-days",
    "best-things-to-do-pompano-beach",
    "weekend-guide-pompano-beach",
  ],
  exploreLinks: [
    {
      label: "Things To Do",
      href: "/excursions",
      description:
        "Snorkeling, fishing charters, parasailing, and boat tours with local prices.",
    },
    {
      label: "Where To Eat",
      href: "/food",
      description:
        "Seafood shacks, waterfront decks, and cheap eats locals actually recommend.",
    },
    {
      label: "Homes & Stays",
      href: "/homes",
      description:
        "Search live MLS listings or browse vacation rentals near the beach.",
    },
  ],
  content: [
    {
      type: "section",
      heading: "What first-timers should know about Pompano Beach",
      paragraphs: [
        "Pompano Beach sits on Broward County's Atlantic coast, roughly halfway between Fort Lauderdale and Deerfield Beach. If this is your first trip, the good news is that the city is compact enough to figure out in a day — yet varied enough that you can easily stretch a long weekend without repeating yourself. Most visitors anchor their trip around the beach and the Pompano Beach Fishing Pier on North Ocean Boulevard (A1A), but the Intracoastal Waterway side of town has its own rhythm: harbors, seafood spots, and calmer water for paddling.",
        "Unlike some South Florida destinations that feel built entirely for tourists, Pompano still functions as a real year-round community. You'll share the sand with locals walking the pier at sunrise, families grilling at beach parks, and snowbirds who return every winter. That mix is part of the appeal — prices at restaurants and activities tend to be more reasonable than flashier coastal cities to the south, and you can build a trip around public beach access without paying resort fees.",
        "Fort Lauderdale-Hollywood International Airport (FLL) is typically 20–30 minutes south depending on traffic — the most convenient gateway for most out-of-state visitors. If you're driving, I-95 and the Florida Turnpike both connect to Atlantic Boulevard and Federal Highway (U.S. 1), the two main east-west corridors into the beach districts.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Visit the pier before 10 a.m. on weekends",
        body: "Parking near the pier fills fast on Saturday and Sunday mornings, especially November through April when snowbirds are in town. An early pier walk gives you cooler temperatures, easier parking, and the best light for photos before the midday crowd arrives.",
      },
    },
    {
      type: "section",
      heading: "How to structure your first day",
      paragraphs: [
        "Start at the Pompano Beach Fishing Pier for orientation. Walking the pier — even if you don't fish — gives you a straight-line view of the coastline, passing boats, and the width of the public beach. From there, pick a stretch of sand for swimming or a beach walk; access points along A1A are free, though you may pay for parking depending on where you stop.",
        "For lunch, head inland on Atlantic Boulevard or toward the harbor district rather than eating at the first boardwalk-adjacent counter you see. Our [[Food & Eats directory|/food]] lists seafood shacks, waterfront decks, and budget-friendly counters where locals actually eat — many within a ten-minute drive of the pier.",
        "Afternoon options depend on your energy and budget. A half-day [[snorkel or fishing charter|/excursions#fishing]] is the classic Pompano water experience. If you'd rather keep costs down, pier fishing, a boardwalk bike ride, or a shaded walk at Fern Forest Nature Center (a Broward County park a short drive inland) are solid free or low-cost alternatives covered in our [[Best Free Things To Do|/guides/best-free-things-to-do]] guide.",
      ],
    },
    {
      type: "section",
      heading: "Neighborhoods you'll actually encounter",
      paragraphs: [
        "The pier and beach district along A1A is what most day-trippers see first — hotels, casual restaurants, and direct ocean access. It's busy in season but straightforward to navigate on foot once you've parked.",
        "Old Pompano, west of the beach near the historic downtown corridor, feels more residential and walkable — local shops, brunch patios, and neighborhood restaurants without the weekend beach traffic crush. If you're considering more than a vacation, read our [[Neighborhood Spotlight: Old Pompano|/guides/neighborhood-spotlight-old-pompano]] for a deeper look at daily life there.",
        "Harbor and Intracoastal pockets attract boaters and seafood lovers. Waterfront dining here faces the waterway rather than open Atlantic surf, which means calmer evenings and great sunset views without fighting beach parking.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Atlantic Blvd vs. A1A",
        body: "Atlantic Boulevard runs parallel to the beach inland and has the densest cluster of everyday restaurants, services, and strip-mall locals use. A1A (Ocean Boulevard) is the scenic coastal road — great for beach access and pier parking, but not always where the best meal value lives.",
      },
    },
    {
      type: "section",
      heading: "Where to stay on a first visit",
      paragraphs: [
        "Hotels and vacation rentals cluster near the beach and along the Intracoastal. For a short trip, staying within walking distance of the pier cuts down on daily parking hunts — worth the premium if you're here primarily for sand and surf.",
        "If you're price-conscious or staying a week+, look slightly inland or browse the Vacation Stays tab on our [[Homes page|/homes#vacation-stays]] — weekly rentals sometimes beat hotel nightly rates, especially for families who want a kitchen and laundry.",
        "Snowbird season (roughly November through April) tightens availability and nudges rates up. Booking restaurants and excursions at least a few days ahead helps on winter weekends when tournaments and festivals land on the calendar — see our [[Seasonal Events Calendar|/guides/seasonal-events-calendar]] for timing.",
      ],
    },
    {
      type: "section",
      heading: "Practical details that save frustration",
      paragraphs: [
        "Sun and hydration matter more than most visitors expect, even on cloudy days. Pack reef-safe sunscreen, hats, and more water than you think you need — beach vendors charge a premium.",
        "Afternoon thunderstorms are common June through September. Plan beach time for mornings; keep a backup indoor block (late lunch, aquarium run to nearby Deerfield, or a harbor-side happy hour) for when the sky darkens around 3 p.m.",
        "Rip currents occur on the Atlantic coast. Swim near lifeguard stations when possible, and check flag warnings posted at beach access points. If you're fishing from the pier, Florida saltwater fishing licenses apply in many cases — bait shops on the pier approach can explain what's required for visitors.",
      ],
    },
  ],
  thingsToKnow: [
    {
      title: "Parking is the main weekend bottleneck",
      body: "Street and lot parking near the pier is limited. Arrive early, or read our [[Parking & Pier Access Tips|/guides/parking-pier-access-tips]] before your first Saturday at the beach.",
    },
    {
      title: "Cash still helps at small vendors",
      body: "Cards are widely accepted, but fish markets, bait shops, and beach chair rentals sometimes prefer cash — carry a small amount.",
    },
    {
      title: "Ubers and rideshares work, but surge on event nights",
      body: "Fishing tournaments and holiday weekends can spike wait times along A1A. Plan a buffer if you have dinner reservations.",
    },
  ],
  relatedPlaces: [
    {
      name: "Pompano Beach Fishing Pier",
      href: "/excursions#fishing",
      description: "Iconic pier fishing, walking views, and rod rentals — a first-visit essential.",
    },
    {
      name: "Seafood & waterfront restaurants",
      href: "/food#seafood",
      description: "Dockside catches and Intracoastal decks within minutes of the beach.",
    },
    {
      name: "Fern Forest Nature Center",
      href: "/excursions#parks",
      description: "Shaded boardwalk trails when you need a break from the sun.",
    },
  ],
  faq: [
    {
      question: "Is Pompano Beach good for families on a first trip?",
      answer:
        "Yes. Wide public beaches, pier fishing, calm Intracoastal paddling options, and plenty of casual dining make it easy for families. Mornings on the sand and early dinners work well with younger kids; save boat trips for ages comfortable on open water.",
    },
    {
      question: "How many days do you need for a first visit?",
      answer:
        "A solid long weekend (3–4 days) covers the pier, a beach day, one paid water activity, and a few meals without rushing. A week lets you add Fort Lauderdale day trips, repeat favorite restaurants, and explore neighborhoods beyond the beach strip.",
    },
    {
      question: "Is Pompano Beach walkable?",
      answer:
        "The pier district and stretches of A1A are walkable once you're parked. Daily errands and restaurant hopping often require a car — Broward County is spread out compared to dense urban cores.",
    },
    {
      question: "What's the best time of year for a first visit?",
      answer:
        "December through April offers dry, comfortable weather — peak snowbird season. May and October can be excellent value with warm water and fewer crowds. Summer is hot and humid with afternoon storms but hotel rates often drop.",
    },
    {
      question: "Do I need a car in Pompano Beach?",
      answer:
        "A car is strongly recommended unless you're staying beachfront and planning to Uber everywhere. Parking near the pier is the main hassle; elsewhere driving is straightforward via Atlantic Blvd and Federal Highway.",
    },
  ],
};
