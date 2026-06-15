type SectionIntroProps = {
  title: string;
  description: string;
};

export default function SectionIntro({ title, description }: SectionIntroProps) {
  return (
    <div className="mb-8 border-b border-sand-dark/40 pb-6">
      <h2 className="font-display text-2xl font-medium text-navy sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-navy/70 sm:text-base">
        {description}
      </p>
    </div>
  );
}
