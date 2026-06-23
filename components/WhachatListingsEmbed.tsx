"use client";

import {
  WHACHAT_LISTING_EMBEDS,
  type WhachatListingType,
} from "@/lib/whachatcrm";

type WhachatListingsEmbedProps = {
  listingType: WhachatListingType;
};

export default function WhachatListingsEmbed({
  listingType,
}: WhachatListingsEmbedProps) {
  const { heading, embedUrl } = WHACHAT_LISTING_EMBEDS[listingType];

  return (
    <section id="listings-embed" aria-label={heading}>
      <div className="listings-embed-shell">
        <iframe
          src={embedUrl}
          title={heading}
          className="w-full"
          style={{ height: "950px" }}
          loading="lazy"
          allow="fullscreen"
        />
      </div>
    </section>
  );
}
