import {
  STAY22_AFFILIATE_NOTE,
  STAY22_VACATION_EMBED_SRC,
  STAY22_VACATION_EMBED_TITLE,
} from "@/lib/stay22";

export default function Stay22VacationEmbed() {
  return (
    <section id="listings-embed" aria-label={STAY22_VACATION_EMBED_TITLE}>
      <div className="listings-embed-shell">
        <iframe
          id="stay22-widget"
          src={STAY22_VACATION_EMBED_SRC}
          title={STAY22_VACATION_EMBED_TITLE}
          className="stay22-vacation-iframe w-full border-0 bg-[#f6f1ea]"
          loading="lazy"
          allow="geolocation"
        />
      </div>
      <p className="mx-auto mt-2 max-w-2xl text-center text-xs leading-relaxed text-navy/55">
        {STAY22_AFFILIATE_NOTE}
      </p>
    </section>
  );
}
