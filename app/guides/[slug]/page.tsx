import GuideArticleView from "@/components/GuideArticleView";
import {
  getAllGuideSlugs,
  getGuideBySlug,
  guidePath,
} from "@/lib/guides";
import { createArticleMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return createArticleMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: guidePath(slug),
    image: guide.image,
    imageAlt: guide.imageAlt,
    publishedAt: guide.publishedAt,
    updatedAt: guide.updatedAt,
  });
}

export default async function GuideArticlePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return <GuideArticleView guide={guide} />;
}
