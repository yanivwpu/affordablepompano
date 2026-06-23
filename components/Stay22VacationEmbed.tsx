import {
  STAY22_AFFILIATE_NOTE,
  STAY22_VACATION_EMBED_SRC,
  STAY22_VACATION_EMBED_TITLE,
} from "@/lib/stay22";

export default function Stay22VacationEmbed() {
  return (
    <div className="px-2 py-2 sm:px-3 sm:py-3">
      <div className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_-10px_rgba(27,58,75,0.16)] ring-1 ring-teal/10">
        <iframe
          id="stay22-widget"
          src={STAY22_VACATION_EMBED_SRC}
          title={STAY22_VACATION_EMBED_TITLE}
          className="stay22-vacation-iframe w-full border-0 bg-white"
          loading="lazy"
          allow="geolocation"
        />
      </div>
      <p className="mx-auto mt-2 max-w-2xl text-center text-xs leading-relaxed text-navy/55 sm:mt-3">
        {STAY22_AFFILIATE_NOTE}
      </p>
    </div>
  );
}
