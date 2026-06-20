export const WHACHAT_AGENT_PAGE =
  "https://app.whachatcrm.com/agents/yaniv-haramatiy";

export type WhachatListingType = "for_sale" | "for_rent";

export function whachatEmbedUrl(listingType: WhachatListingType) {
  return `${WHACHAT_AGENT_PAGE}?embed=1&listingType=${listingType}`;
}

export function whachatAgentUrl(listingType: WhachatListingType) {
  return `${WHACHAT_AGENT_PAGE}?listingType=${listingType}`;
}

export const WHACHAT_LISTING_EMBEDS = {
  for_sale: {
    heading: "Homes for Sale in Pompano Beach",
    embedUrl: whachatEmbedUrl("for_sale"),
    openUrl: whachatAgentUrl("for_sale"),
  },
  for_rent: {
    heading: "Long-term Rentals in Pompano Beach",
    embedUrl: whachatEmbedUrl("for_rent"),
    openUrl: whachatAgentUrl("for_rent"),
  },
} as const;
