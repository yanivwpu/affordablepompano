import { getAllDirectorySitemapEntries, directoryPath } from "@/lib/directory";
import { getAllGuideSlugs, guidePath } from "@/lib/guides";
import { SITE_URL } from "@/lib/seo";
import type { MetadataRoute } from "next";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: SITE_URL, lastModified: new Date("2026-06-14"), changeFrequency: "weekly", priority: 1 },
  { url: `${SITE_URL}/homes`, lastModified: new Date("2026-06-14"), changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/food`, lastModified: new Date("2026-06-14"), changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/excursions`, lastModified: new Date("2026-06-14"), changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE_URL}/businesses`, lastModified: new Date("2026-06-14"), changeFrequency: "weekly", priority: 0.85 },
  { url: `${SITE_URL}/guides`, lastModified: new Date("2026-06-14"), changeFrequency: "weekly", priority: 0.8 },
  { url: `${SITE_URL}/about`, lastModified: new Date("2026-06-14"), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/contact`, lastModified: new Date("2026-06-14"), changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/advertise`, lastModified: new Date("2026-06-14"), changeFrequency: "monthly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guideRoutes: MetadataRoute.Sitemap = getAllGuideSlugs().map((slug) => ({
    url: `${SITE_URL}${guidePath(slug)}`,
    lastModified: new Date("2026-06-23"),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const listingRoutes: MetadataRoute.Sitemap =
    getAllDirectorySitemapEntries().map(({ type, slug }) => ({
      url: `${SITE_URL}${directoryPath(type, slug)}`,
      lastModified: new Date("2026-06-14"),
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  return [...staticRoutes, ...listingRoutes, ...guideRoutes];
}
