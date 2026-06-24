import { guideImages } from "@/lib/guideImages";
import type { Guide } from "@/lib/guides/types";

export const happyHoursGuide: Guide = {
  slug: "happy-hours-near-the-beach",
  title: "Happy Hours Near the Beach",
  excerpt:
    "Affordable drinks and bites at sunny waterfront spots — a local's guide to saving after sunset.",
  category: "Guide",
  group: "budget",
  image: guideImages.happyHours.src,
  imageAlt: guideImages.happyHours.alt,
  publishedAt: "2026-06-08",
  updatedAt: "2026-06-23",
  relatedSlugs: [
    "budget-friendly-beach-days",
    "neighborhood-spotlight-old-pompano",
    "best-free-things-to-do",
  ],
  exploreLinks: [
    {
      label: "Waterfront Dining",
      href: "/food#waterfront",
      description: "Sunset decks, patios, and Intracoastal views with happy-hour menus.",
    },
    {
      label: "Local Favorites",
      href: "/food#local",
      description: "Neighborhood bars and grills with everyday drink specials.",
    },
    {
      label: "Sunset Cruises",
      href: "/excursions#boating",
      description: "Golden-hour sails when you want water views beyond the patio.",
    },
  ],
  content: [
    {
      type: "section",
      heading: "How happy hour works in Pompano",
      paragraphs: [
        "Beach-town happy hours aren't a single citywide schedule — each restaurant and bar sets windows, usually late afternoon into early evening. Typical patterns run 4–7 p.m. weekdays, with select weekend extensions during slow summer months.",
        "Waterfront patios facing the Intracoastal or Atlantic fill first on clear-sky days. Locals arrive at opening to claim railing seats; tourists who show up at 6:30 p.m. still eat well but may miss the best views.",
        "This guide explains strategy; our [[Food & Eats directory|/food]] lists specific venues with waterfront decks, local bars, and price ranges so you can pick tonight's spot.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Happy hour can be dinner",
        body: "Split two apps and a discounted drink each — you'll spend less than a full entrée ticket and still leave full. Florida portions are generous.",
      },
    },
    {
      type: "section",
      heading: "Waterfront vs. inland value",
      paragraphs: [
        "Ocean and Intracoastal decks charge a view premium even at happy hour — worth it for sunsets, not mandatory every night. Inland spots along Atlantic Boulevard and near [[Old Pompano|/guides/neighborhood-spotlight-old-pompano]] often run deeper drink discounts with easier parking.",
        "Rotate: splurge waterfront on Friday, hit neighborhood grills Tuesday. Your wallet survives a week-long trip that way.",
        "[[Rusty Anchor–style pubs|/food#waterfront]] and raw bars frequently discount oysters and peel-and-eat shrimp — high perceived value plates.",
      ],
    },
    {
      type: "section",
      heading: "What to order for the best deal",
      paragraphs: [
        "Look for local fish bites, conch fritters, and chicken tenders on special — filler apps that pair with beer or rum drinks locals actually order.",
        "House wine and well spirits are where margins are lowest for you — craft cocktails may stay full price even during happy hour.",
        "Non-drinkers aren't left out: soda discounts and appetizer-only seating are increasingly common as families join after beach days.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Tournament Saturdays fill harbor bars",
        body: "After fishing weigh-ins, seafood houses near the marina pack out. Book or arrive at happy hour opening, not closing.",
      },
    },
    {
      type: "section",
      heading: "Sunset without the full dinner bill",
      paragraphs: [
        "Order at 5 p.m., catch golden hour at 6, walk the pier afterward for free entertainment — combines our [[Budget Beach Days|/guides/budget-friendly-beach-days]] philosophy with a nice evening.",
        "If patio wait is long, grab drinks to-go where legally allowed and watch from public Intracoastal spots — then sit for dinner when crowds thin.",
        "Optional upgrade: a shorter [[sunset cruise|/excursions#boating]] on birthdays or anniversaries when patio happy hour isn't special enough.",
      ],
    },
    {
      type: "section",
      heading: "Seasonal shifts",
      paragraphs: [
        "Snowbird season tightens patio supply November–April — reservations help on Wednesdays, not just Fridays.",
        "Summer slows tourist volume; some bars extend hours or add midweek specials to fill seats. Ask servers what's running — menus change more than websites update.",
        "Holiday weeks (Christmas, Easter, July 4) may suspend discounts — call ahead.",
      ],
    },
    {
      type: "section",
      heading: "Pairing happy hour with the rest of your evening",
      paragraphs: [
        "A smart Pompano evening stacks cheaply: happy hour apps at 5, pier sunset walk at 6:30, optional dessert elsewhere. You get waterfront atmosphere without a $60 entrée bill per person.",
        "If kids are with you, choose patios that stay family-friendly until 8 p.m. — many waterfront spots allow children on decks before live music volumes rise.",
        "Designated driver or short rideshare hops between Atlantic Blvd and the pier corridor keep drink discounts from turning into DUI risk — enforcement is real in Broward tourist zones.",
      ],
    },
    {
      type: "localTip",
      tip: {
        title: "Local tip: Follow your favorite spots on social",
        body: "Happy hour specials change faster than websites update. Instagram stories often announce flash oyster deals or extended weekday hours before official menus reflect them.",
      },
    },
    {
      type: "section",
      heading: "When happy hour isn't the move",
      paragraphs: [
        "Mother's Day, Valentine's, and New Year's Eve typically suspend discounts — plan full-price budgets or cook in if you're [[vacation renting|/homes#vacation-stays]] with a kitchen.",
        "Some chefs run seasonal tasting menus that ignore happy hour entirely — worth the splurge once a trip if you're a foodie, but know what you're walking into.",
        "Thunderstorm afternoons can empty patios; bars sometimes extend indoor happy hour when rain kills beach plans — ask when you sit down.",
      ],
    },
  ],
  thingsToKnow: [
    {
      title: "Tax and tip still apply",
      body: "Happy hour reduces menu prices, not gratuity expectations. Tip on pre-discount totals if service warrants it — staff work the same.",
    },
    {
      title: "ID required",
      body: "Florida enforces 21+ strictly. Bring physical ID even if you look of age.",
    },
    {
      title: "Parking repeats pier problems",
      body: "Waterfront happy hours mean beach-zone parking — see [[Parking & Pier Tips|/guides/parking-pier-access-tips]] before you commit.",
    },
  ],
  relatedPlaces: [
    {
      name: "Ocean's Edge",
      href: "/food#waterfront",
      description: "Intracoastal sunset deck — special-occasion happy hour.",
    },
    {
      name: "The Sandbar Social",
      href: "/food#local",
      description: "Daily happy hour energy post-beach.",
    },
    {
      name: "Gold Coast sunset catamaran",
      href: "/excursions#boating",
      description: "On-the-water golden hour when patios are full.",
    },
  ],
  faq: [
    {
      question: "What time is happy hour in Pompano Beach?",
      answer:
        "Most spots run roughly 4–7 p.m. weekdays, but always confirm with the restaurant — times and days vary.",
    },
    {
      question: "Are there happy hours on weekends?",
      answer:
        "Some bars extend to Saturdays; many waterfront restaurants keep weekends full-price. Call or check social media day-of.",
    },
    {
      question: "Best happy hour with a sunset view?",
      answer:
        "Intracoastal and ocean-facing patios west and east of A1A respectively — arrive early for railing seats on clear days.",
    },
    {
      question: "Can families do happy hour?",
      answer:
        "Yes on patios that welcome kids before late evening — order apps and non-alcoholic drinks while adults have one discounted beer or wine.",
    },
  ],
};
