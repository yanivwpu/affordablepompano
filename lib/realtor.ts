export type RealtorCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline";
};

/** All content for the Featured Local Realtor card — swap this object to change the featured agent. */
export type FeaturedRealtorData = {
  sectionTitle: string;
  badgeLabel: string;
  name: string;
  brokerage: string;
  credentials: string;
  market: string;
  bio: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  headshot: string;
  headshotAlt: string;
  headshotBackground: string;
  logo: string;
  logoAlt: string;
  ctaLinks: readonly RealtorCta[];
};

export type FeaturedRealtorInput = {
  sectionTitle?: string;
  badgeLabel?: string;
  name: string;
  brokerage: string;
  market: string;
  bio: string;
  phone: string;
  email: string;
  headshot: string;
  logo: string;
  headshotAlt?: string;
  headshotBackground?: string;
  logoAlt?: string;
  credentials?: string;
  contactMailtoSubject?: string;
  ctaLinks?: readonly RealtorCta[];
};

function digitsOnly(phone: string): string {
  return phone.replace(/\D/g, "");
}

function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] ?? fullName;
}

export function buildRealtorMailtoHref(
  email: string,
  subject?: string,
): string {
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export function createFeaturedRealtorProfile(
  input: FeaturedRealtorInput,
): FeaturedRealtorData {
  const contactSubject =
    input.contactMailtoSubject ?? "Pompano Beach Real Estate Inquiry";
  const givenName = firstName(input.name);

  return {
    sectionTitle: input.sectionTitle ?? "Featured Local Realtor",
    badgeLabel: input.badgeLabel ?? "Featured",
    name: input.name,
    brokerage: input.brokerage,
    credentials: input.credentials ?? `REALTOR® | ${input.brokerage}`,
    market: input.market,
    bio: input.bio,
    phone: input.phone,
    phoneHref: `tel:${digitsOnly(input.phone)}`,
    email: input.email,
    emailHref: `mailto:${input.email}`,
    headshot: input.headshot,
    headshotAlt: input.headshotAlt ?? `${input.name}, local realtor`,
    headshotBackground: input.headshotBackground ?? "#EBEBEB",
    logo: input.logo,
    logoAlt: input.logoAlt ?? input.brokerage,
    ctaLinks: input.ctaLinks ?? [
      {
        label: `Email ${givenName}`,
        href: buildRealtorMailtoHref(input.email, contactSubject),
        variant: "primary",
      },
      {
        label: "Browse Homes",
        href: "/homes#listings",
        variant: "secondary",
      },
      {
        label: "Get Property Alerts",
        href: "/homes#alerts",
        variant: "outline",
      },
    ],
  };
}

export const featuredRealtor = createFeaturedRealtorProfile({
  name: "Yaniv Haramatiy",
  brokerage: "Canvas Real Estate",
  market: "Pompano Beach & South Florida",
  bio: "Helping buyers, sellers, and investors throughout Pompano Beach and South Florida with local market knowledge, neighborhood expertise, and responsive service.",
  phone: "(954) 513-8408",
  email: "yharamatiy@canvasre.com",
  headshot: "/images/homes/yaniv-haramatiy-headshot.png",
  headshotAlt: "Yaniv Haramatiy, Pompano Beach realtor",
  headshotBackground: "#EBEBEB",
  logo: "/images/homes/canvas-real-estate-logo.png",
  logoAlt: "Canvas Real Estate",
});
