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
  const { heading, embedUrl, openUrl } = WHACHAT_LISTING_EMBEDS[listingType];

  return (
    <section
      ref={ref}
      id="listings-embed"
      className="scroll-mt-28 mt-12 sm:mt-14"
      aria-labelledby="listings-embed-heading"
    >
      <div className="mb-5 text-center sm:mb-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal">
          Live Listings
        </p>
        <h3
          id="listings-embed-heading"
          className="font-display mt-2 text-2xl font-medium text-navy sm:text-3xl"
        >
          {heading}
        </h3>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-sand-dark/40">
        <iframe
          src={embedUrl}
          title={heading}
          className="w-full border-0 bg-white"
          style={{ height: "950px" }}
          loading="lazy"
          allow="fullscreen"
        />
      </div>

      <p className="mt-4 text-center">
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-teal underline-offset-4 transition-colors hover:text-teal-light hover:underline"
        >
          Open listings in a new tab
        </a>
      </p>
    </section>
  );
});

export default WhachatListingsEmbed;
