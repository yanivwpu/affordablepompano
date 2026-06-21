"use client";

import { forwardRef } from "react";
import {
  WHACHAT_LISTING_EMBEDS,
  type WhachatListingType,
} from "@/lib/whachatcrm";

type WhachatListingsEmbedProps = {
  listingType: WhachatListingType;
};

const WhachatListingsEmbed = forwardRef<
  HTMLElement,
  WhachatListingsEmbedProps
>(function WhachatListingsEmbed({ listingType }, ref) {
  const { heading, embedUrl } = WHACHAT_LISTING_EMBEDS[listingType];

  return (
    <section
      ref={ref}
      id="listings-embed"
      className="scroll-mt-28"
      aria-labelledby="listings-embed-heading"
    >
      <div className="mb-4 text-center sm:mb-5">
        <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
          Live Listings
          <span className="text-[8px] text-coral" aria-hidden="true">
            &#9670;
          </span>
        </p>
        <h3
          id="listings-embed-heading"
          className="font-display mt-2 text-xl font-medium text-navy sm:text-2xl"
        >
          {heading}
        </h3>
      </div>

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
});

export default WhachatListingsEmbed;
