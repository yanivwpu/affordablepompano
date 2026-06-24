import type { Guide } from "@/lib/guides/types";
import {
  createArticleSchema,
  createGuideBreadcrumbSchema,
  createGuideFaqSchema,
} from "@/lib/seo";
import { guidePath } from "@/lib/guides";

type GuideArticleSchemaProps = {
  guide: Guide;
};

export default function GuideArticleSchema({ guide }: GuideArticleSchemaProps) {
  const path = guidePath(guide.slug);
  const articleInput = {
    title: guide.title,
    description: guide.excerpt,
    path,
    image: guide.image,
    imageAlt: guide.imageAlt,
    publishedAt: guide.publishedAt,
    updatedAt: guide.updatedAt,
  };

  const articleSchema = createArticleSchema(articleInput);
  const breadcrumbSchema = createGuideBreadcrumbSchema(guide.title, path);
  const faqSchema =
    guide.faq.length > 0 ? createGuideFaqSchema(guide.faq) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
