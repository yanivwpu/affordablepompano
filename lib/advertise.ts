export const SPONSORSHIP_INQUIRY_EMAIL = "hello@affordablepompano.com";

export const advertisePackages = [
  {
    id: "featured-restaurant",
    title: "Featured Restaurant / Business",
    description:
      "Premium placement at the top of our Food & Eats section for restaurants, cafes, bars, and local businesses seeking maximum visibility.",
    price: "$99",
    period: "/ month",
    inventory: "Featured Spot Available",
    idealFor: "Restaurants, cafés, bars & local shops",
    perks: [
      "Business logo displayed",
      "Featured business image",
      "Website link",
      "Phone button",
      "Featured badge",
      "Premium visibility",
      "Newsletter mention",
      "Top placement in Food & Eats",
    ],
    highlighted: true,
  },
  {
    id: "restaurant-directory",
    title: "Restaurant Directory Listing",
    description:
      "Affordable visibility for restaurants and cafes looking to reach local residents and visitors.",
    price: "$29",
    period: "/ month",
    inventory: "Multiple Standard Listings Available",
    idealFor: "Restaurants, cafés & local eateries",
    perks: [
      "Business logo",
      "Business image",
      "Website link",
      "Phone button",
      "Listed in Food & Eats",
      "Category visibility",
    ],
    highlighted: false,
  },
  {
    id: "excursion-partner",
    title: "Excursion & Activity Partner",
    description:
      "Perfect for fishing charters, boat tours, rentals, attractions, and beach-day experiences.",
    price: "$79",
    period: "/ month",
    inventory: "Featured Partner Available",
    idealFor: "Charters, tours, rentals & attractions",
    perks: [
      "Business logo",
      "Featured image",
      "Website link",
      "Featured badge",
      "Top placement in Excursions",
      "Seasonal promotion mention",
    ],
    highlighted: false,
  },
  {
    id: "excursion-listing",
    title: "Excursion Listing",
    description:
      "Affordable visibility for tours, activities, charters, rentals, and attractions.",
    price: "$29",
    period: "/ month",
    inventory: "Multiple Standard Listings Available",
    idealFor: "Tours, rentals & local activities",
    perks: [
      "Business logo",
      "Business image",
      "Website link",
      "Listed in Excursions",
      "Category visibility",
    ],
    highlighted: false,
  },
  {
    id: "local-business-spotlight",
    title: "Local Business Spotlight",
    description:
      "Ideal for attorneys, insurance agents, mortgage brokers, photographers, contractors, medical practices, and local service businesses.",
    price: "$29",
    period: "/ month",
    inventory: "Multiple Standard Listings Available",
    idealFor: "Attorneys, insurance, contractors & services",
    perks: [
      "Business logo",
      "Business image",
      "Website link",
      "Contact information",
      "Local business directory placement",
      "Category visibility",
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
    inventory: "Limited Spots Available",
    idealFor: "Agents, brokerages & property managers",
    perks: [
      "Business logo",
      "Featured image",
      "Website link",
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
    inventory: "Up to 4 Sponsors Per Issue",
    idealFor: "Any business with a special offer",
    perks: [
      "Logo placement",
      "Link in newsletter",
      "Mention in issue",
      "Featured sponsor section",
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
    inventory: "Featured Placement Available",
    idealFor: "Openings, events & high-impact pushes",
    perks: [
      "Business logo",
      "Featured image",
      "Homepage placement",
      "Premium visibility",
      "Dedicated promotion",
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
  "Featured placements put you first — standard listings keep you visible at a lower monthly cost.",
  "Every page is built around Pompano Beach homes, restaurants, and activities.",
  "Simple monthly pricing with no hidden fees or long-term contracts required.",
  "You work with a local team that knows the community — not a distant call center.",
] as const;

export const advertisePackagesIntro =
  "Affordable Pompano reaches local residents, visitors, renters, homebuyers, and vacation travelers actively researching Pompano Beach. Promote your business in front of a highly targeted local audience.";

export function getAdvertisePackageLabel(packageId: string): string {
  const pkg = advertisePackages.find((p) => p.id === packageId);
  return pkg ? `${pkg.title} — ${pkg.price}${pkg.period}` : packageId;
}
