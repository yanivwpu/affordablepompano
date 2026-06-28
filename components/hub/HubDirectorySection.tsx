import DirectoryListingCard from "@/components/DirectoryListingCard";
import HubSectionHeader from "@/components/hub/HubSectionHeader";
import HubSectionShell from "@/components/hub/HubSectionShell";
import Link from "next/link";
import { directoryListingGridClass } from "@/lib/hubLayout";
import { sortListings, type DirectoryListing } from "@/lib/directory";

type HubDirectorySectionProps = {
  listings: DirectoryListing[];
  title?: string;
  description?: string;
  eyebrow?: string;
  advertisePackageId: string;
  id?: string;
  showActions?: boolean;
  emptyLabel?: string;
};

export default function HubDirectorySection({
  listings,
  title = "Directory",
  description = "Browse partner listings with dedicated profile pages and direct contact links.",
  eyebrow = "Full Directory",
  advertisePackageId,
  id = "directory-listings",
  showActions = false,
  emptyLabel = "Directory listings appear here as partners join.",
}: HubDirectorySectionProps) {
  const standard = sortListings(listings).filter((l) => l.plan !== "featured");

  if (standard.length === 0) return null;

  return (
    <HubSectionShell id={id} variant="directory">
      <HubSectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

      <div className={directoryListingGridClass()}>
        {standard.map((listing) => (
          <DirectoryListingCard
            key={listing.id}
            listing={listing}
            showActions={showActions}
          />
        ))}
      </div>

      <p className="mt-10 text-center">
        <Link
          href={`/advertise?package=${advertisePackageId}#contact`}
          className="text-sm font-semibold text-coral transition-colors hover:text-coral-light"
        >
          Join the directory &rarr;
        </Link>
      </p>
    </HubSectionShell>
  );
}
