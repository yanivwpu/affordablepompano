import { guideImages } from "@/lib/guideImages";
import type { Guide } from "@/lib/guides/types";

export const fishingGuide: Guide = {
  slug: "pompano-beach-fishing-guide",
  title: "Pompano Beach Fishing Guide",
  excerpt:
    "Pier angling, offshore charters, Hillsboro Inlet launches, and Florida license basics — how to fish Pompano Beach like a local.",
  category: "Guide",
  group: "visiting",
  image: guideImages.fishingGuide.src,
  imageAlt: guideImages.fishingGuide.alt,
  publishedAt: "2026-06-24",
  updatedAt: "2026-06-24",
  relatedSlugs: [
    "parking-pier-access-tips",
    "best-free-things-to-do",
    "best-things-to-do-pompano-beach",
  ],
  exploreLinks: [
    {
      label: "Fishing Charters",
      href: "/excursions#fishing",
      description:
        "Offshore and inshore trips plus pier angling resources on our Excursions page.",
    },
    {
      label: "Book on Viator",
      href: "/excursions#featured-experiences",
      description:
        "Compare Viator fishing charters and deep-sea trips near Pompano Beach.",
    },
    {
      label: "Seafood After The Catch",
      href: "/food#seafood",
      description:
        "Cook your fish or order dockside — harbor restaurants and fish markets nearby.",
    },
  ],
  content: [
    {
      type: "section",
      heading: "Why Pompano Beach is a serious fishing town",
      paragraphs: [
        "Pompano Beach wears its fishing heritage openly — the city name itself nods to a prized coastal species, and the Pompano Beach Fishing Pier remains one of Broward County's most active angling platforms. The geography helps: Atlantic reef lines and Gulf Stream proximity offshore, calm Intracoastal backwaters inshore, and Hillsboro Inlet connecting the two worlds a short drive north.",
        "Visitors flying into Fort Lauderdale-Hollywood International Airport (FLL) can be on the pier or at a marina charter within 30 minutes on a good traffic day. Snowbirds who winter along A1A treat pier mornings and charter afternoons as weekly rituals from November through April — tournaments and holiday weekends pack the waterfront even tighter.",
        "Whether you cast from the pier rails or book a half-day boat, Florida saltwater licensing rules apply to most anglers. This guide covers both DIY pier fishing and guided options you can reserve through our [[fishing section|/excursions#fishing]] and [[featured Viator experiences|/excursions#featured-experiences]].",
      ],
    },
    {
      type: "section",
      heading: "Pompano Beach Fishing Pier: the affordable entry point",
      paragraphs: [
        "The pier extends into the Atlantic off North Ocean Boulevard (A1A) — free to walk, pay-to-fish with gear you bring or rent on-site. Rod and reel rentals, bait, and tackle sales at the pier approach lower the barrier for travelers who did not pack a seven-foot surf rod in their carry-on.",
        "Typical pier catches vary by season: pompano, whiting, snapper, jacks, and the occasional snook or tarpon when regulations and luck align. Early morning and evening tides often outperform midday heat when fish and anglers both slow down. Respect pier etiquette — do not cross active lines, and mind overhead casts in crowded sections.",
        "Florida requires a saltwater fishing license for most anglers ages 16 and older, with exemptions for certain pier situations and Florida residents over 65 — verify current rules at MyFWC.com before you assume the pier covers you. Short-term non-resident licenses are available online and at many bait shops along Atlantic Blvd.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Park before you rig",
        body: "Pier parking fills fast on winter weekends when snowbirds and tournament traffic overlap. Secure a spot first, then walk to bait and rental counters — circling with a rod tube is miserable on crowded A1A.",
      },
    },
    {
      type: "section",
      heading: "Charter fishing: offshore and inshore",
      paragraphs: [
        "Half-day and three-quarter-day offshore charters from Pompano and Hillsboro Inlet marinas target mahi-mahi, kingfish, snapper, and sailfish depending on season. Boats leave early — 7 a.m. departures are common — to beat afternoon storms and maximize bite windows. Most charters include tackle and bait; gratuity for the mate is customary. For sightseeing-only trips on the same waterways, see our [[Best Boat Tours|/guides/best-boat-tours-pompano-beach]] guide.",
        "Inshore and reef trips suit families and first-timers who want action without hours in heavy seas. Shorter runs, lighter tackle, and calmer water keep kids and non-anglers comfortable while still pulling table fish or sport species near structure.",
        "Book ahead through our [[fishing charters|/excursions#fishing]] overview or browse [[Viator fishing trips|/excursions#featured-experiences]] for aggregated deep-sea and inshore listings with reviews and instant booking — especially important during snowbird peak when slots sell out.",
      ],
    },
    {
      type: "section",
      heading: "Intracoastal and inlet fishing",
      paragraphs: [
        "The Intracoastal Waterway behind Pompano offers snook, tarpon (seasonal), jack crevalle, and snapper along seawalls, bridges, and mangrove edges. Kayak and skiff anglers work quieter shorelines than the open pier; shore access points exist but research parking and posted restrictions before hauling a cart across private-looking lots.",
        "Hillsboro Inlet is a high-skill zone — strong tidal flow, boat traffic, and inlet predators reward experienced anglers and punish careless wading. Most visitors are better served booking a charter that fishes the inlet mouth from a boat rather than improvising from rock jetties.",
        "Bridge fishing at night is a South Florida tradition for locals with proper gear and lighting. Visitors sticking to a short trip should prioritize pier mornings or a booked charter over experimental night bridge spots without local guidance.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Match bait to the water",
        body: "Pier regulars swear by live shrimp and sand fleas for pompano and whiting; offshore charters supply what the day demands. Ask the mate or bait shop counter what worked yesterday — yesterday's pattern often repeats until a front moves through.",
      },
    },
    {
      type: "section",
      heading: "Seasonal calendar and tournaments",
      paragraphs: [
        "Winter and spring bring comfortable air temperatures and active pier crowds — peak snowbird fishing season. Summer heat pushes serious anglers to dawn and dusk; afternoon thunderstorms cancel many charter afternoons June through September.",
        "Pompano hosts fishing tournaments and pier festivals that clog Atlantic Blvd and A1A parking. Check our [[Seasonal Events Calendar|/guides/seasonal-events-calendar]] before planning a quiet pier day during a major derby weekend.",
        "Hurricane season (June–November) can shut down boats and pier access with short notice. Flexible travel dates and refundable charter bookings matter late summer.",
      ],
    },
    {
      type: "section",
      heading: "After the catch: cleaning, dining, and logistics",
      paragraphs: [
        "Some charters offer fish cleaning; others hand you a bag at the dock. Harbor-area fish markets and restaurants on the Intracoastal can cook your catch or recommend prep services — browse [[seafood spots|/food#seafood]] for waterfront options.",
        "If you are pier fishing for dinner, know size and bag limits — FWC enforces strict rules on snapper, snook, and tarpon. When in doubt, release and buy fillets at a market on Atlantic Blvd.",
        "Parking, pier access, and tournament traffic are covered in depth in our [[Parking & Pier Access Tips|/guides/parking-pier-access-tips]] guide. Pair that with [[Best Free Things To Do|/guides/best-free-things-to-do]] if you want to walk the pier without a license on day one and fish day two.",
      ],
    },
  ],
  thingsToKnow: [
    {
      title: "Licenses are your responsibility",
      body: "Most pier and shore anglers need a Florida saltwater license unless a specific exemption applies. Buy online before your trip to avoid counter delays.",
    },
    {
      title: "Charters run early",
      body: "Plan on 6 a.m. alarms for offshore trips. Inshore half-days start later but still beat afternoon summer storms.",
    },
    {
      title: "Respect size and bag limits",
      body: "FWC regulations change; keep a measuring device and know protected species. When unsure, release fish alive.",
    },
  ],
  relatedPlaces: [
    {
      name: "Pier fishing & charters hub",
      href: "/excursions#fishing",
      description: "Pier resources, charter types, and local angling overview.",
    },
    {
      name: "Viator fishing charters",
      href: "/excursions#featured-experiences",
      description: "Book deep-sea and inshore trips with aggregated reviews.",
    },
    {
      name: "Pompano Beach Fishing Pier",
      href: "/guides/parking-pier-access-tips",
      description: "Parking strategy and pier access before you cast.",
    },
  ],
  faq: [
    {
      question: "Do I need a fishing license for the Pompano Beach pier?",
      answer:
        "Most anglers 16 and older need a Florida saltwater fishing license. Limited pier exemptions exist — confirm current FWC rules before fishing. Walking the pier without angling requires no license.",
    },
    {
      question: "Can I rent fishing gear at the pier?",
      answer:
        "Yes. Rod, reel, and bait rentals are available at the pier approach along with tackle sales. Bring cash as backup — some counters prefer it on busy mornings.",
    },
    {
      question: "How much does a fishing charter cost near Pompano?",
      answer:
        "Half-day offshore charters for small groups commonly run several hundred dollars plus tip, varying by season and boat. Inshore trips cost less. Compare live options on our [[Excursions fishing section|/excursions#fishing]] and [[featured experiences|/excursions#featured-experiences]].",
    },
    {
      question: "What fish are in season at Pompano Beach?",
      answer:
        "Pompano, whiting, snapper, mahi, kingfish, and sailfish rotate through the calendar depending on offshore conditions and regulations. Bait shops and charter mates give the best day-of advice.",
    },
    {
      question: "Is pier fishing good for kids?",
      answer:
        "Yes, with supervision. Mornings are cooler and less crowded. Shorter rods, simple rigs, and whiting or small snapper keep kids engaged. Charters suit families who want help with gear and fish handling.",
    },
  ],
};
