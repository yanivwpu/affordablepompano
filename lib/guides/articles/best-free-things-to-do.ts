import { guideImages } from "@/lib/guideImages";
import type { Guide } from "@/lib/guides/types";

export const freeThingsGuide: Guide = {
  slug: "best-free-things-to-do",
  title: "Best Free Things To Do",
  excerpt:
    "Pier fishing, beach walks, and public parks — fun Pompano experiences that cost nothing.",
  category: "Guide",
  group: "budget",
  image: guideImages.freeThingsToDo.src,
  imageAlt: guideImages.freeThingsToDo.alt,
  publishedAt: "2026-06-05",
  updatedAt: "2026-06-23",
  relatedSlugs: [
    "budget-friendly-beach-days",
    "best-beaches-pompano-beach",
    "family-friendly-pompano-beach",
    "parking-pier-access-tips",
    "first-timers-guide-pompano-beach",
  ],
  exploreLinks: [
    {
      label: "Pier Fishing",
      href: "/excursions#fishing",
      description: "Rod rentals, bait, and tips for fishing the iconic Pompano pier.",
    },
    {
      label: "Parks & Nature",
      href: "/excursions#parks",
      description: "Shaded trails and coastal hammocks minutes from the beach.",
    },
    {
      label: "Cheap Eats After",
      href: "/food#cheap-eats",
      description: "Affordable counters and fish markets when you're done exploring.",
    },
  ],
  content: [
    {
      type: "section",
      heading: "Free doesn't mean boring here",
      paragraphs: [
        "Pompano Beach rewards visitors who show up with walking shoes and a cooler — not a stacked activity budget. The Atlantic shoreline, the fishing pier, and Broward's park system deliver full days without ticket booths. Locals treat these as weekly habits, not consolation prizes when money runs low.",
        "This guide focuses on experiences that cost zero or nearly zero (parking and optional gear aside). Pair them with our [[Budget-Friendly Beach Days|/guides/budget-friendly-beach-days]] guide for food and gear savings.",
        "One honest caveat: South Florida heat limits how long you can stay on open sand midday June–September. Free still works — shift timing, not expectations.",
      ],
    },
    {
      type: "section",
      heading: "Pompano Beach Fishing Pier",
      paragraphs: [
        "Walking the pier is free and should be on every visitor's list. You get 360-degree ocean breeze, passing boats, pelicans, and the social theater of anglers working the rails. Sunrise and sunset walks are especially worth the parking effort.",
        "Fishing from the pier may require a Florida saltwater license for many anglers — visitors often qualify for short-term licenses online. Rod and bait rentals on-site keep upfront gear costs low compared to charter boats. Browse [[fishing activities|/excursions#fishing]] for charter options when you want to level up.",
        "Photography, people-watching, and simply sitting on a bench with coffee qualify as legitimate pier activities. You don't need a pole to enjoy it.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Bring small bills for pier parking",
        body: "Machines and meters near the pier sometimes favor cash or have card minimum frustrations on busy mornings. A few singles speed up your start.",
      },
    },
    {
      type: "section",
      heading: "Beach walks and shoreline time",
      paragraphs: [
        "Public access points along A1A let you swim, jog, and collect shells without resort passes. The sand is wide in many stretches — room for frisbee, sandcastle builds, and long conversations at water's edge.",
        "Low-tide mornings expose more hard-packed sand for walking; high tide narrows the dry strip. Check tide charts if you're planning long walks north toward Lauderdale or south toward Hillsboro.",
        "Beach cleanup participation happens on volunteer weekends — a free way to meet locals and learn which access points they actually use.",
      ],
    },
    {
      type: "section",
      heading: "Parks and shaded trails",
      paragraphs: [
        "Fern Forest Nature Center and other Broward parks offer boardwalks through native hammocks — birding, interpretive signs, and air conditioning in the visitor center on brutal afternoons. Parking is typically free or a few dollars.",
        "These aren't mountain hikes — they're recovery walks when the beach fried you. See [[Parks & Nature excursions|/excursions#parks]] for related low-cost guided options nearby.",
        "Neighborhood parks with playgrounds give families a free hour let kids burn energy before restaurant waits.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Libraries and community centers",
        body: "Broward County libraries offer AC, Wi-Fi, and occasional free lectures or kids' programs — useful rainy-day backups tourists overlook.",
      },
    },
    {
      type: "section",
      heading: "Intracoastal watching and bridge scenery",
      paragraphs: [
        "You don't need a boat ticket to enjoy the waterway. Public spots along the Intracoastal let you watch yachts, fishing skiffs, and drawbridges without spending a dime. Golden hour here complements pier sunsets with different light.",
        "Bring chairs and a picnic from [[cheap eats|/food#cheap-eats]] — waterfront dining views without waterfront dining prices.",
      ],
    },
    {
      type: "section",
      heading: "When to add one paid activity",
      paragraphs: [
        "Free days stack beautifully with one splurge — snorkel trip, [[boat tour|/guides/best-boat-tours-pompano-beach]], kayak tour, or parasail from our [[Excursions directory|/excursions]]. Mixing keeps budgets intact without feeling deprived.",
        "If you're considering moving here, free routines preview daily life better than a single expensive tour ever could.",
      ],
    },
    {
      type: "section",
      heading: "Free culture and community touchpoints",
      paragraphs: [
        "Farmers markets and holiday craft fairs pop up in Broward throughout the year — not always in Pompano proper, but a short drive on Atlantic Blvd lands seasonal free browsing with live music.",
        "Public art murals and fishing heritage displays near the waterfront cost nothing to appreciate and orient you to the city's working-waterfront history beyond tourism brochures.",
        "Volunteer beach cleanups welcome visitors — you'll meet locals fast and learn which access points they actually use on Saturday mornings.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Shelling after storms",
        body: "After offshore storms, early-morning beach walks sometimes turn up better shell deposits — respect wildlife and don't remove living creatures from tide pools.",
      },
    },
  ],
  thingsToKnow: [
    {
      title: "Lifeguard flags matter",
      body: "Free beach access doesn't mean safe swimming every day. Check flags and swim guarded areas when possible.",
    },
    {
      title: "Sun exposure is the hidden cost",
      body: "Sunscreen, hats, and hydration aren't free but prevent expensive sunburn misery. Budget for them.",
    },
    {
      title: "Parking isn't always free",
      body: "The activities are free; parking near the pier often isn't. Factor $5–$20 depending on lot and duration.",
    },
  ],
  relatedPlaces: [
    {
      name: "Pompano Beach Pier",
      href: "/excursions#fishing",
      description: "Free to walk; fishing requires license and optional gear rental.",
    },
    {
      name: "Fern Forest Nature Center",
      href: "/excursions#parks",
      description: "Shaded trails and birding minutes inland.",
    },
    {
      name: "Pompano Harbor Fish Market",
      href: "/food#cheap-eats",
      description: "Inexpensive smoked dip and counter bites after a free beach morning.",
    },
  ],
  faq: [
    {
      question: "What can you do in Pompano Beach for free?",
      answer:
        "Pier walks, beach swimming at public access, park boardwalks, Intracoastal watching, sunset viewing, and self-guided neighborhood drives cost nothing beyond parking.",
    },
    {
      question: "Is pier fishing free?",
      answer:
        "Walking the pier is free. Fishing may require a Florida license; bait and rod rental are optional costs far below charter pricing.",
    },
    {
      question: "Are Pompano beaches free to access?",
      answer:
        "Yes — public beach access along the coast is open without resort fees. You may pay for parking near popular access points.",
    },
    {
      question: "What's the best free activity for kids?",
      answer:
        "Beach play, pier watching, and playground parks combine easily. Mornings beat midday heat for younger children.",
    },
  ],
};
