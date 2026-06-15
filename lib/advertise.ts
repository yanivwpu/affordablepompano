export const advertisePackages = [
  {
    id: "featured-restaurant",
    title: "Featured Restaurant",
    description:
      "Get discovered by hungry locals and beach-day visitors browsing our Food & Eats page.",
    price: "From $149",
    period: "/ month",
    idealFor: "Restaurants, cafés, bars & seafood spots",
    perks: [
      "Top spot on Food & Eats",
      "Photo gallery & menu highlights",
      "Local Favorite badge",
      "Homepage rotation",
    ],
    highlighted: true,
  },
  {
    id: "excursion-partner",
    title: "Excursion Partner",
    description:
      "Put your tour, charter, or rental in front of people planning things to do in Pompano.",
    price: "From $99",
    period: "/ month",
    idealFor: "Fishing charters, tours, rentals & activities",
    perks: [
      "Featured Excursions listing",
      "Direct booking link",
      "Seasonal promo slot",
      "Activity category tag",
    ],
    highlighted: false,
  },
  {
    id: "real-estate-spotlight",
    title: "Real Estate Spotlight",
    description:
      "Connect with buyers, renters, and snowbirds searching for affordable Pompano homes.",
    price: "From $199",
    period: "/ month",
    idealFor: "Agents, brokerages & property managers",
    perks: [
      "Homes page feature",
      "Agent profile & contact form",
      "Neighborhood guide mention",
      "Lead notifications",
    ],
    highlighted: false,
  },
  {
    id: "newsletter-sponsor",
    title: "Newsletter Sponsor",
    description:
      "Show up in our Sunny Pompano Roundup — a friendly weekly email locals actually read.",
    price: "From $75",
    period: "/ issue",
    idealFor: "Any local business with a special offer",
    perks: [
      "Logo & one-line offer",
      "Click-through link",
      "Reach engaged subscribers",
      "Flexible scheduling",
    ],
    highlighted: false,
  },
  {
    id: "homepage-feature",
    title: "Homepage Feature",
    description:
      "Maximum visibility on our homepage — perfect for launches, events, or seasonal pushes.",
    price: "From $249",
    period: "/ month",
    idealFor: "High-impact campaigns & new openings",
    perks: [
      "Homepage banner rotation",
      "Cross-page mentions",
      "Priority newsletter slot",
      "Custom creative support",
    ],
    highlighted: false,
  },
] as const;

export const advertiseTrustStats = [
  { value: "10K+", label: "Monthly site visitors" },
  { value: "5", label: "Content categories" },
  { value: "100%", label: "Pompano-focused audience" },
] as const;
