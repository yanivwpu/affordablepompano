import type { Metadata } from "next";
import { images } from "@/lib/images";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://affordablepompano.com";

export const SITE_NAME = "Affordable Pompano Beach";

export const SITE_TITLE =
  "Affordable Pompano Beach | Homes, Restaurants & Things To Do in Pompano Beach, FL";

export const SITE_DESCRIPTION =
  "Discover affordable homes, best local restaurants, and things to do in Pompano Beach, Florida. Your guide to smart value living, rentals, and local experiences in sunny Pompano Beach.";

export const DEFAULT_OG_IMAGE = images.pompanoPier;
export const DEFAULT_OG_IMAGE_ALT = images.pompanoPierAlt;

/** Page-level SEO copy — titles target ~60 chars; descriptions ~155 chars */
export const pageSeo = {
  home: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    path: "/",
    absoluteTitle: true,
  },
  homes: {
    title: "Pompano Beach Homes for Sale & Rentals | Affordable Pompano",
    description:
      "Search live MLS homes and long-term rentals in Pompano Beach, FL. Property alerts, showings, and local realtor help.",
    path: "/homes",
  },
  food: {
    title: "Best Pompano Beach Restaurants & Eats | Affordable Pompano",
    description:
      "Discover top Pompano Beach restaurants — seafood, waterfront dining, brunch, and cheap eats. Local picks with prices and reserve-a-table links.",
    path: "/food",
    image: images.foodHero,
    imageAlt: images.foodHeroAlt,
  },
  excursions: {
    title: "Things To Do in Pompano Beach FL | Affordable Pompano",
    description:
      "Top Pompano Beach activities — pier fishing, parasailing, boat tours, snorkeling, and nature trails. Prices, durations, and book-now links.",
    path: "/excursions",
    image: images.goldenBeach,
    imageAlt: images.goldenBeachAlt,
  },
  guides: {
    title: "Pompano Beach Guides & Local Tips | Affordable Pompano",
    description:
      "Pompano Beach guides for visitors and locals — neighborhoods, budget tips, free activities, and insider advice for smart Florida living.",
    path: "/guides",
  },
  contact: {
    title: "Contact Affordable Pompano Beach FL | Local Help",
    description:
      "Contact Affordable Pompano Beach for homes, restaurants, things to do, or advertising. Friendly local help serving Pompano Beach, Florida.",
    path: "/contact",
    image: images.palmBeach,
    imageAlt: images.palmBeachAlt,
  },
  about: {
    title: "About Affordable Pompano Beach | Local Magazine",
    description:
      "Learn about Affordable Pompano — a sunny local guide to Pompano Beach, FL with honest tips on homes, food, excursions, and coastal living.",
    path: "/about",
  },
  advertise: {
    title: "Advertise With Affordable Pompano Beach | Sponsor",
    description:
      "Reach Pompano Beach home buyers, diners, and tourists. Featured restaurant, excursion, real estate, and newsletter packages from $59/month.",
    path: "/advertise",
    image: images.pompanoPier,
    imageAlt: images.pompanoPierAlt,
  },
} as const;

type PageSeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata(options: PageSeoOptions): Metadata {
  const {
    title,
    description,
    path,
    image = DEFAULT_OG_IMAGE,
    imageAlt = DEFAULT_OG_IMAGE_ALT,
    absoluteTitle = false,
  } = options;

  const url = `${SITE_URL}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function metadataForPage(
  key: keyof typeof pageSeo,
): Metadata {
  return createPageMetadata(pageSeo[key]);
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: "Affordable Pompano",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  telephone: "+1-954-513-8408",
  email: "hello@affordablepompano.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pompano Beach",
    addressLocality: "Pompano Beach",
    addressRegion: "FL",
    postalCode: "33062",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.2379,
    longitude: -80.1248,
  },
  areaServed: {
    "@type": "City",
    name: "Pompano Beach",
  },
  sameAs: [SITE_URL],
};
