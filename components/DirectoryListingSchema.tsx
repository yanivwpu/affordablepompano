import {
  createListingBreadcrumbSchema,
  createListingSchema,
} from "@/lib/directory/seo";
import type { DirectoryListing } from "@/lib/directory/types";

type DirectoryListingSchemaProps = {
  listing: DirectoryListing;
  sectionLabel: string;
  sectionPath: string;
};

export default function DirectoryListingSchema({
  listing,
  sectionLabel,
  sectionPath,
}: DirectoryListingSchemaProps) {
  const listingSchema = createListingSchema(listing);
  const breadcrumbSchema = createListingBreadcrumbSchema(
    listing,
    sectionLabel,
    sectionPath,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
