import type { DirectoryListing } from "./types";
import { getEmailAddress, getWebsiteUrl } from "./listingLinks";
import { createPageMetadata, SITE_NAME, SITE_URL } from "@/lib/seo";
import { directoryPath } from "./index";
import type { Metadata } from "next";

export function createListingMetadata(listing: DirectoryListing): Metadata {
  const path = directoryPath(listing.type, listing.slug);
  const title = `${listing.name} | ${listing.category} in Pompano Beach`;

  return createPageMetadata({
    title,
    description: listing.shortDescription,
    path,
    image: listing.image,
    imageAlt: listing.imageAlt,
  });
}

export function createListingBreadcrumbSchema(
  listing: DirectoryListing,
  sectionLabel: string,
  sectionPath: string,
) {
  const url = `${SITE_URL}${directoryPath(listing.type, listing.slug)}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: sectionLabel,
        item: `${SITE_URL}${sectionPath}`,
      },
      { "@type": "ListItem", position: 3, name: listing.name, item: url },
    ],
  };
}

export function createListingSchema(listing: DirectoryListing) {
  const url = `${SITE_URL}${directoryPath(listing.type, listing.slug)}`;
  const schemaType =
    listing.type === "restaurant"
      ? "Restaurant"
      : listing.type === "excursion"
        ? "TouristAttraction"
        : "LocalBusiness";

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: listing.name,
    description: listing.shortDescription,
    image: listing.image,
    url,
    telephone: listing.phone,
    email: getEmailAddress(listing.email),
  };

  if (listing.address) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: listing.address,
      addressLocality: "Pompano Beach",
      addressRegion: "FL",
      addressCountry: "US",
    };
  }

  if (listing.mapsUrl) {
    schema.hasMap = listing.mapsUrl;
  }

  if (listing.hours) {
    schema.openingHours = listing.hours;
  }

  const website = getWebsiteUrl(listing);
  if (website) {
    schema.sameAs = [website];
  }

  if (listing.type === "restaurant" && listing.priceRange) {
    schema.priceRange = listing.priceRange;
  }

  if (listing.serviceArea) {
    schema.areaServed = listing.serviceArea;
  }

  schema.publisher = {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return schema;
}
