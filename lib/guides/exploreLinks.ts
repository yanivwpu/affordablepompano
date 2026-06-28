import type { Guide, GuideExploreLink } from "@/lib/guides/types";

const FOOD_GUIDE_SLUGS = new Set([
  "best-seafood-restaurants-pompano-beach",
  "best-waterfront-restaurants-pompano-beach",
  "best-breakfast-spots-pompano-beach",
  "happy-hour-guide-pompano-beach",
  "happy-hours-near-the-beach",
]);

function hasHref(links: GuideExploreLink[], matcher: (href: string) => boolean) {
  return links.some((link) => matcher(link.href));
}

export function getGuideExploreLinks(guide: Guide): GuideExploreLink[] {
  const links = [...guide.exploreLinks];
  const hrefs = new Set(links.map((link) => link.href));

  if (!hrefs.has("/about")) {
    links.push({
      label: "About Affordable Pompano",
      href: "/about",
      description:
        "Who we are and how we cover Pompano Beach homes, food, and excursions.",
    });
  }

  const hubLink =
    guide.group === "living"
      ? { label: "Homes Hub", href: "/homes", description: "Buying guides, neighborhoods, and local business directory." }
      : FOOD_GUIDE_SLUGS.has(guide.slug)
        ? { label: "Food Hub", href: "/food", description: "Restaurant directory and local dining guides." }
        : guide.group === "visiting"
          ? { label: "Excursions Hub", href: "/excursions", description: "Things to do, charters, and excursion listings." }
          : null;

  if (hubLink && !hrefs.has(hubLink.href)) {
    links.unshift(hubLink);
  }

  if (
    (guide.group === "visiting" || guide.group === "budget") &&
    !hasHref(links, (href) => href.includes("/excursions"))
  ) {
    links.push({
      label: "Book Experiences",
      href: "/excursions#featured-experiences",
      description:
        "Fishing charters, boat tours, snorkeling, and water sports near Pompano Beach.",
    });
  } else if (
    guide.group === "visiting" &&
    hasHref(links, (href) => href.startsWith("/excursions")) &&
    !hasHref(links, (href) => href.includes("featured-experiences"))
  ) {
    links.push({
      label: "Featured Experiences",
      href: "/excursions#featured-experiences",
      description:
        "Curated Viator tours and activities with live booking links.",
    });
  }

  if (FOOD_GUIDE_SLUGS.has(guide.slug) && !hrefs.has("/advertise")) {
    links.push({
      label: "Restaurant Partners",
      href: "/advertise?package=featured-business#contact",
      description:
        "Local restaurants can apply for featured Food & Eats placement.",
    });
  }

  if (guide.group === "living" && !hrefs.has("/contact")) {
    links.push({
      label: "Contact a Local Expert",
      href: "/contact",
      description:
        "Questions about buying, renting, or relocating to Pompano Beach.",
    });
  }

  return links;
}
