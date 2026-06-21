export const WHACHAT_AGENT_PAGE =
  "https://app.whachatcrm.com/agents/yaniv-haramatiy";

export const WHACHAT_WIDGET_ID = "51f64011-eb3a-48a4-bb10-031abd3c0cdc";

export const WHACHAT_APP_ORIGIN = "https://app.whachatcrm.com";

export const WHACHAT_LEAD_SOURCE = "affordablepompano_homes";

export type WhachatListingType = "for_sale" | "for_rent";

function whachatParams(extra: Record<string, string>) {
  return new URLSearchParams({
    source: WHACHAT_LEAD_SOURCE,
    ...extra,
  }).toString();
}

export function whachatEmbedUrl(listingType: WhachatListingType) {
  return `${WHACHAT_AGENT_PAGE}?${whachatParams({
    embed: "1",
    listingType,
    hideChat: "1",
  })}`;
}

/** Hosted WhachatCRM chat frame — used by the site-owned chat panel (not widget.js). */
export function whachatWidgetFrameUrl(pageUrl: string) {
  const params = new URLSearchParams({
    parentUrl: pageUrl,
    source: WHACHAT_LEAD_SOURCE,
  });

  return `${WHACHAT_APP_ORIGIN}/widget-frame/${WHACHAT_WIDGET_ID}?${params.toString()}`;
}

export const WHACHAT_LISTING_EMBEDS = {
  for_sale: {
    heading: "Homes for Sale in Pompano Beach",
    embedUrl: whachatEmbedUrl("for_sale"),
  },
  for_rent: {
    heading: "Long-term Rentals in Pompano Beach",
    embedUrl: whachatEmbedUrl("for_rent"),
  },
} as const;

