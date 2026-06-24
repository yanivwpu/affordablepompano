import type { Guide } from "@/lib/guides/types";

export function guidePath(slug: string): string {
  return `/guides/${slug}`;
}

export function getGuideBySlug(
  guides: Guide[],
  slug: string,
): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(guides: Guide[]): string[] {
  return guides.map((g) => g.slug);
}

export function getRelatedGuides(
  guides: Guide[],
  guide: Guide,
  limit = 3,
): Guide[] {
  const picked: Guide[] = [];
  const seen = new Set<string>([guide.slug]);

  for (const slug of guide.relatedSlugs) {
    const related = getGuideBySlug(guides, slug);
    if (related && !seen.has(related.slug)) {
      picked.push(related);
      seen.add(related.slug);
    }
    if (picked.length >= limit) return picked;
  }

  for (const candidate of guides) {
    if (candidate.slug === guide.slug || seen.has(candidate.slug)) continue;
    if (candidate.group === guide.group) {
      picked.push(candidate);
      seen.add(candidate.slug);
    }
    if (picked.length >= limit) break;
  }

  return picked;
}

export function featuredGuidesFrom(guides: Guide[]) {
  return guides.map(
    ({ slug, title, excerpt, category, group, image, imageAlt }) => ({
      slug,
      title,
      excerpt,
      category,
      group,
      image,
      imageAlt,
      href: guidePath(slug),
    }),
  );
}
