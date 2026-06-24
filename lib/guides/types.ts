export type GuideGroup = "visiting" | "living" | "budget";

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideLocalTip = {
  title: string;
  body: string;
};

export type GuideThingToKnow = {
  title: string;
  body: string;
};

export type GuideRelatedPlace = {
  name: string;
  href: string;
  description: string;
};

export type GuideExploreLink = {
  label: string;
  href: string;
  description: string;
};

export type GuideSectionBlock = {
  type: "section";
  heading: string;
  paragraphs: string[];
};

export type GuideLocalTipBlock = {
  type: "localTip";
  tip: GuideLocalTip;
};

export type GuideBlock = GuideSectionBlock | GuideLocalTipBlock;

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  group: GuideGroup;
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt: string;
  content: GuideBlock[];
  thingsToKnow?: GuideThingToKnow[];
  relatedPlaces?: GuideRelatedPlace[];
  faq: GuideFaq[];
  exploreLinks: GuideExploreLink[];
  relatedSlugs: string[];
};
