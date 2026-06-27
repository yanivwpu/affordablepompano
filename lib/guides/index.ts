export type {
  Guide,
  GuideBlock,
  GuideExploreLink,
  GuideFaq,
  GuideGroup,
  GuideLocalTip,
  GuideRelatedPlace,
  GuideSectionBlock,
  GuideThingToKnow,
} from "./types";

import { guides as guideList } from "./articles";
import {
  featuredGuidesFrom,
  getAllGuideSlugs as allSlugs,
  getGuideBySlug as findGuide,
  getRelatedGuides as findRelated,
  guidePath,
} from "./helpers";
import type { Guide } from "./types";

export const guides = guideList;

export { guidePath };

export function getGuideBySlug(slug: string): Guide | undefined {
  return findGuide(guides, slug);
}

export function getAllGuideSlugs(): string[] {
  return allSlugs(guides);
}

export function getRelatedGuides(guide: Guide, limit = 6): Guide[] {
  return findRelated(guides, guide, limit);
}

export const featuredGuides = featuredGuidesFrom(guides);
