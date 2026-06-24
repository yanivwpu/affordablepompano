import Link from "next/link";

/** Renders paragraphs with internal links: [[Label|/path]] */
export function GuideRichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);

  return (
    <>
      {parts.map((part) => {
        const match = part.match(/^\[\[([^|]+)\|([^\]]+)\]\]$/);
        if (match) {
          const [, label, href] = match;
          return (
            <Link
              key={`${href}-${label}`}
              href={href}
              className="font-semibold text-coral underline decoration-coral/30 underline-offset-2 transition-colors hover:text-coral-light"
            >
              {label}
            </Link>
          );
        }
        return <span key={part.slice(0, 32)}>{part}</span>;
      })}
    </>
  );
}
