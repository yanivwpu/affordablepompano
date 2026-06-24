import { guideImages } from "@/lib/guideImages";
import type { Guide } from "@/lib/guides/types";

export const weekendGuide: Guide = {
  slug: "weekend-guide-pompano-beach",
  title: "Weekend Guide To Pompano Beach",
  excerpt:
    "A Friday-to-Sunday itinerary that balances beach time, harbor dinners, and the events locals actually plan around.",
  category: "Guide",
  group: "visiting",
  image: guideImages.weekendGuide.src,
  imageAlt: guideImages.weekendGuide.alt,
  publishedAt: "2026-06-24",
  updatedAt: "2026-06-25",
  relatedSlugs: [
    "first-timers-guide-pompano-beach",
    "best-things-to-do-pompano-beach",
    "seasonal-events-calendar",
    "parking-pier-access-tips",
    "happy-hour-guide-pompano-beach",
  ],
  exploreLinks: [
    {
      label: "Things To Do",
      href: "/excursions",
      description:
        "Charters, snorkeling, and pier fishing to anchor your Saturday on the water.",
    },
    {
      label: "Where To Eat",
      href: "/food",
      description:
        "Weekend brunch patios, harbor seafood, and Saturday-night waterfront decks.",
    },
    {
      label: "Vacation Stays",
      href: "/homes#vacation-stays",
      description:
        "Short-term rentals for families who want a kitchen between beach days.",
    },
  ],
  content: [
    {
      type: "section",
      heading: "How to think about a Pompano Beach weekend",
      paragraphs: [
        "A good weekend in Pompano Beach is not about cramming every attraction into forty-eight hours — it is about matching the city's rhythm. Friday evening is for settling in and catching a sunset without fighting Saturday-morning parking. Saturday is your big beach or boat day. Sunday slows down: brunch inland, a final pier walk, and an easy drive to Fort Lauderdale-Hollywood International Airport (FLL) if you are flying out that afternoon.",
        "Weekends here blend tourists, local families, tournament anglers, and snowbirds (November through April) who treat Saturday pier walks like a standing appointment. Bookable charters and tours fill fast in winter — reserve through our [[featured experiences|/excursions#featured-experiences]] section before you arrive if fishing or snorkeling is on the must-do list.",
        "If this is your first trip, skim our [[First-Timer's Guide|/guides/first-timers-guide-pompano-beach]] for airport logistics and neighborhood orientation — then use this article as your hour-by-hour weekend playbook.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Book Saturday dinner by Wednesday",
        body: "Harbor seafood houses and Intracoastal decks fill fast on winter weekends, especially when fishing tournaments land weigh-ins nearby. A midweek reservation locks sunset seating without the 45-minute wait that catches walk-ins.",
      },
    },
    {
      type: "section",
      heading: "Friday evening: arrive, unwind, orient",
      paragraphs: [
        "Check in, drop bags, and head straight to the Pompano Beach Fishing Pier district along North Ocean Boulevard (A1A). An evening pier walk costs nothing beyond parking and gives you a full read on surf conditions, crowd density, and where the sun drops behind the coastline. Fishermen along the rails are usually happy to talk bait and tide if you're curious about Saturday pier fishing.",
        "Dinner on Friday should be relaxed — you're not racing sunrise yet. [[Waterfront decks on the Intracoastal|/food#waterfront]] face calmer water than open Atlantic surf and catch golden-hour light without the weekend brunch crush. Rusty Anchor Tavern and Ocean's Edge are the kinds of spots locals bring visitors to on night one: casual enough for flip-flops, scenic enough to feel like vacation.",
        "Skip the late-night bar crawl on arrival day unless you know your parking situation. A1A parking gets competitive by 9 a.m. Saturday; a calm Friday and early bedtime pays off. Read [[Parking & Pier Access Tips|/guides/parking-pier-access-tips]] before your first Saturday beach push.",
      ],
    },
    {
      type: "section",
      heading: "Saturday morning: beach, pier, or boat",
      paragraphs: [
        "Saturday belongs to the water. Locals on A1A are walking dogs, casting from the pier, and claiming shaded umbrella spots before 10 a.m. — especially November through April when snowbird season packs the shoreline. Arrive early for parking near the pier, or plan to park slightly north or south and walk in along the public beach access paths.",
        "Your main fork: stay on land or get on a boat. Land lovers stack a pier walk, a few hours of swimming near a lifeguard station, and a cheap lunch from [[Taco Reef Beach Shack|/food#cheap-eats]] or the harbor fish market. Water lovers should book a [[half-day snorkel or fishing charter|/excursions#fishing]] — Saturday morning departures beat afternoon thunderstorm risk in summer.",
        "If you're traveling with kids, keep the morning simple: sand, snacks from a cooler, and pier fishing with rented gear beats overscheduling. Families who push one structured activity before noon and leave the afternoon open report better weekends than those who book back-to-back tours.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Check the events calendar before Saturday",
        body: "Fishing tournaments, holiday festivals, and free waterfront concerts can reshape parking and restaurant crowds overnight. Our [[Seasonal Events Calendar|/guides/seasonal-events-calendar]] lists what's running — a five-minute check saves an hour of circling lots.",
      },
    },
    {
      type: "section",
      heading: "Saturday afternoon and evening",
      paragraphs: [
        "June through September, plan for afternoon thunderstorms between 2 and 5 p.m. That's not a ruined day — it's when locals pivot inland. Fern Forest Nature Center offers shaded boardwalk trails a short drive west. A long lunch at Pelican Reef Raw Bar or a harbor-side appetizer spread counts as activity when lightning is offshore.",
        "Saturday dinner is your splurge meal if you're splurging once. [[Fisherman's Dock Seafood|/food#seafood]] and Ocean's Edge deliver the harbor-and-waterway experience visitors remember. Book ahead, request a railing table if available, and arrive hungry — Florida seafood portions are generous.",
        "After dinner, a slow walk along the beach or Intracoastal seawall costs nothing. Live acoustic sets at neighborhood patios pick up on Friday and Saturday nights at spots like Rusty Anchor Tavern. You don't need a ticketed event to end the night well — just clear skies and comfortable shoes.",
      ],
    },
    {
      type: "section",
      heading: "Sunday: brunch, last looks, easy departure",
      paragraphs: [
        "Sunday mornings in Pompano lean brunch-heavy. [[Sunrise Cafe Pompano|/food#breakfast]] on Atlantic Boulevard draws a line of locals by 8 a.m. — worth it for portions that fuel a final beach hour. The Palm Brunch House in Old Pompano is the patio-and-mimosa option when you want something slower and more celebratory.",
        "After brunch, squeeze in one last free activity from our [[Best Free Things To Do|/guides/best-free-things-to-do]] list: a pier revisit at midday when morning anglers thin out, or a quick paddle on the Intracoastal if you rented kayaks earlier in the trip. Keep luggage timing in mind — Sunday checkout crowds overlap with church traffic on Federal Highway.",
        "Flying out of FLL Sunday afternoon? Buffer ninety minutes for traffic on I-95 south. Driving north toward Palm Beach County? Sunday evenings on the Turnpike are generally smoother than Saturday night returns from Miami.",
      ],
    },
    {
      type: "section",
      heading: "Weekend variations by season",
      paragraphs: [
        "Winter weekends (December–March) are peak season: drier air, busier restaurants, and tournament energy near the harbor. Book excursions and dinners earlier than you think necessary.",
        "Shoulder season (April, May, October) offers warm water with thinner crowds — ideal for couples who want pier sunsets without fighting for parking. Summer weekends are hot and storm-prone but hotel rates often dip; front-load beach time before 11 a.m. and keep indoor backup plans.",
        "Holiday weekends — Memorial Day, July 4, Labor Day — behave like mini high seasons. Treat them like winter: early parking, reserved tables, and realistic expectations about wait times along A1A.",
      ],
    },
  ],
  thingsToKnow: [
    {
      title: "Saturday parking is the weekend bottleneck",
      body: "Street and municipal lots near the pier fill by mid-morning in season. Arrive before 9 a.m. or read our [[Parking & Pier Access Tips|/guides/parking-pier-access-tips]] for lot alternatives.",
    },
    {
      title: "Rain doesn't cancel the weekend",
      body: "Summer storms pass quickly. Keep a harbor lunch or raw-bar plan ready — covered patios stay open when the beach empties.",
    },
    {
      title: "Budget one splurge, save elsewhere",
      body: "Mix a Saturday seafood dinner with [[budget beach days|/guides/budget-friendly-beach-days]] — packed coolers and free pier time balance the checkbook.",
    },
  ],
  relatedPlaces: [
    {
      name: "Pompano Beach Fishing Pier",
      href: "/excursions#fishing",
      description: "Friday orientation walk and Saturday morning fishing — the weekend anchor.",
    },
    {
      name: "Harbor seafood district",
      href: "/food#seafood",
      description: "Saturday-night dinners where boats tie up out back.",
    },
    {
      name: "Sunrise Cafe Pompano",
      href: "/food#breakfast",
      description: "Sunday fuel before your last beach hour.",
    },
  ],
  faq: [
    {
      question: "Is one weekend enough for Pompano Beach?",
      answer:
        "Yes for a focused beach-and-dining trip. A Friday-to-Sunday window covers the pier, one boat or snorkel outing, two memorable meals, and brunch — without rushing. Add a third night if you want a Fort Lauderdale day trip.",
    },
    {
      question: "What's the best day for a fishing charter?",
      answer:
        "Saturday morning is most popular and books out first in winter. Weekday charters sometimes offer calmer seas and easier parking if your schedule is flexible.",
    },
    {
      question: "Do I need reservations for weekend brunch?",
      answer:
        "Walk-ins work at diners like Sunrise Cafe if you arrive early. Patio brunch spots like The Palm Brunch House benefit from reservations on Sunday — especially when houseguests are in town.",
    },
    {
      question: "How do locals spend Saturday night?",
      answer:
        "Harbor dinner, a beach or Intracoastal walk, and a patio drink somewhere with live acoustic music — not a single mega-club scene. Pompano weekends are social but low-key compared to Fort Lauderdale.",
    },
    {
      question: "Is Pompano Beach crowded on weekends?",
      answer:
        "The pier district and central beach fills in winter and on holiday weekends. Shoulder-season Saturdays are manageable if you park early. Inland restaurants on Atlantic Boulevard are rarely as slammed as waterfront decks.",
    },
  ],
};
