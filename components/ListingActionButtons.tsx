import type { DirectoryListing } from "@/lib/directory";
import { getListingActions } from "@/lib/directory/listingActions";

type ListingActionButtonsProps = {
  listing: DirectoryListing;
  compact?: boolean;
};

export default function ListingActionButtons({
  listing,
  compact = false,
}: ListingActionButtonsProps) {
  const actions = getListingActions(listing);

  if (actions.length === 0) return null;

  const btnClass = compact
    ? "inline-flex items-center justify-center rounded-sm px-3.5 py-2 text-xs font-semibold sm:px-4 sm:text-sm"
    : "inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-sm font-semibold";

  return (
    <div className="mt-auto flex flex-wrap gap-2 pt-3">
      {actions.map((action) => {
        const className = `${btnClass} ${
          action.primary
            ? "bg-coral font-bold tracking-wide text-cream shadow-sm transition-colors hover:bg-coral-light"
            : action.key === "phone" || action.key === "website"
              ? "border border-teal/25 bg-white/60 text-teal transition-colors hover:border-teal hover:bg-teal hover:text-cream"
              : "border border-sand-dark/60 text-navy/70 transition-colors hover:border-teal hover:text-teal"
        }`;

        return (
          <a
            key={action.key}
            href={action.href}
            target={
              action.href.startsWith("tel:") || action.href.startsWith("mailto:")
                ? undefined
                : "_blank"
            }
            rel={
              action.href.startsWith("tel:") || action.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className={className}
          >
            {action.label}
          </a>
        );
      })}
    </div>
  );
}
