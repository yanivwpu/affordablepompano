export const advertisePackages = [
  {
    id: "featured-restaurant",
    title: "Featured Restaurant / Business",
    description:
      "Be the first name locals and visitors see when they browse where to eat, shop, and go in Pompano Beach.",
    price: "$99",
    period: "/ month",
    idealFor: "Restaurants, cafés, bars & local shops",
    perks: [
      "Featured placement on Food & Eats",
      "Photo, description & direct link",
      "“Local Favorite” badge option",
      "Included in homepage rotation",
    ],
    highlighted: true,
  },
  {
    id: "excursion-partner",
    title: "Excursion & Activity Partner",
    description:
      "Reach people actively planning things to do — fishing trips, tours, rentals, and beach-day adventures.",
    price: "$79",
    period: "/ month",
    idealFor: "Charters, tours, rentals & activities",
    perks: [
      "Featured Excursions listing",
      "Book-now button & affiliate link",
      "Category spotlight tag",
      "Seasonal promo mention",
    ],
    highlighted: false,
  },
  {
    id: "real-estate-spotlight",
    title: "Real Estate Spotlight",
    description:
      "Connect with buyers, renters, and snowbirds searching for homes in Pompano — right when they're ready to act.",
    price: "$149",
    period: "/ month",
    idealFor: "Agents, brokerages & property managers",
    perks: [
      "Featured spot on our Homes page",
      "Agent profile with contact form",
      "Neighborhood guide mention",
      "Lead inquiry notifications",
    ],
    highlighted: false,
  },
  {
    id: "newsletter-sponsor",
    title: "Newsletter Sponsor",
    description:
      "Show up in The Pompano Post — our friendly weekly email with restaurant picks, events, and local news.",
    price: "$59",
    period: "/ month",
    idealFor: "Any business with a special offer",
    perks: [
      "Logo & one-line offer in email",
      "Click-through link to your site",
      "Reach engaged local subscribers",
      "Flexible start date",
    ],
    highlighted: false,
  },
  {
    id: "homepage-feature",
    title: "Homepage Feature",
    description:
      "Maximum visibility at the front door of Affordable Pompano — ideal for launches, events, or seasonal campaigns.",
    price: "$179",
    period: "/ month",
    idealFor: "Openings, events & high-impact pushes",
    perks: [
      "Homepage banner rotation",
      "Cross-page mentions",
      "Priority newsletter inclusion",
      "Dedicated placement support",
    ],
    highlighted: false,
  },
] as const;

export const advertiseTrustStats = [
  { value: "100%", label: "Pompano Beach–focused audience" },
  { value: "High-intent", label: "Visitors planning homes, food & fun" },
  { value: "Local", label: "Real people, not a corporate ad network" },
] as const;

export const advertiseBenefits = [
  {
    title: "Home buyers & renters",
    description:
      "People actively searching for places to live, lease, or vacation in Pompano Beach.",
  },
  {
    title: "Tourists & day-trippers",
    description:
      "Visitors planning where to eat, what to do, and how to make the most of their beach day.",
  },
  {
    title: "Snowbirds & seasonal guests",
    description:
      "Part-time residents looking for trusted local spots they can return to year after year.",
  },
  {
    title: "Newcomers & relocators",
    description:
      "Families and professionals moving to South Florida who need honest recommendations fast.",
  },
] as const;

export const advertiseWhyUs = [
  "Your ad appears where people already want help — not buried in generic search results.",
  "Every page is built around Pompano Beach homes, restaurants, and activities.",
  "Simple monthly pricing with no hidden fees or long-term contracts required.",
  "You work with a local team that knows the community — not a distant call center.",
] as const;
