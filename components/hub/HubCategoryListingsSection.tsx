import DirectoryListingCard from "@/components/DirectoryListingCard";
import HubSectionHeader from "@/components/hub/HubSectionHeader";
import HubSectionShell from "@/components/hub/HubSectionShell";
import { directoryListingGridClass } from "@/lib/hubLayout";
import {
  getListingsByCategory,
  sortListings,
  type DirectoryCategory,
  type DirectoryType,
} from "@/lib/directory";

type HubCategoryListingsSectionProps = {
  categories: DirectoryCategory[];
  type: DirectoryType;
};

export default function HubCategoryListingsSection({
  categories,
  type,
}: HubCategoryListingsSectionProps) {
  const sections = categories
    .map((category) => ({
      category,
      listings: sortListings(getListingsByCategory(type, category.id)),
    }))
    .filter((section) => section.listings.length > 0);

  if (sections.length === 0) return null;

  return (
    <>
      {sections.map(({ category, listings }) => (
        <HubSectionShell
          key={category.id}
          id={`category-${category.id}`}
          variant="directory"
        >
          <HubSectionHeader
            eyebrow="Category"
            title={category.title}
            description={category.description}
          />
          <div className={directoryListingGridClass()}>
            {listings.map((listing) => (
              <DirectoryListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </HubSectionShell>
      ))}
    </>
  );
}
