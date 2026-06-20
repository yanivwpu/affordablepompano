import Link from "next/link";

type CategoryPillsProps = {
  categories: readonly { id: string; title: string }[];
};

export default function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <nav
      aria-label="Browse categories"
      className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
    >
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`#${cat.id}`}
          className="shrink-0 rounded-sm border border-sand-dark/60 bg-cream px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy/70 transition-colors hover:border-teal hover:bg-teal/5 hover:text-teal"
        >
          {cat.title}
        </Link>
      ))}
    </nav>
  );
}
