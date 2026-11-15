import { copy } from "@/content/copy";
import { people, partners } from "@/content/supporters";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const s = copy.supporters;

/** Act IV. The people are the Summit: large portraits, in colour, straight after the pillars. */
export default function People() {
  return (
    <section id="people" data-scene="paper" className="relative px-[var(--gutter)] pb-[10svh] pt-[18svh] text-ink" aria-labelledby="people-title">
      <p className="caps scene-label !top-8 text-stone-deep">{s.label}</p>
      <div className="mx-auto max-w-7xl">
        <h2 id="people-title" data-reveal className="max-w-[14ch] text-[clamp(2.5rem,7vw,8rem)] font-medium leading-[0.98] tracking-[-0.03em]">
          {s.title}
        </h2>
        <p data-reveal style={{ "--d": "0.3s" } as React.CSSProperties} className="mt-8 max-w-[44ch] text-[clamp(1.1rem,1.7vw,1.5rem)] leading-snug text-stone-deep">
          {s.lead}
        </p>

        <ul className="mt-16 grid grid-cols-2 gap-x-[clamp(12px,1.6vw,28px)] gap-y-14 md:grid-cols-3">
          {people.map((p, i) => (
            <li key={p.name} data-reveal style={{ "--d": `${(i % 3) * 0.12}s` } as React.CSSProperties}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink/[0.07]">
                  {p.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={base + p.image}
                      alt={p.name}
                      loading="lazy"
                      className="grade h-full w-full object-cover transition-transform duration-[1.6s] ease-film group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="caps absolute bottom-4 left-4 !text-[10px] text-paper">{p.tag}</span>
                </div>
                <p className="mt-5 text-[clamp(1.25rem,2vw,1.9rem)] font-medium leading-tight tracking-[-0.01em]">{p.name}</p>
                <p className="mt-1 text-stone-deep">{p.role}</p>
                {p.quote && <blockquote className="mt-4 text-lg leading-snug">{p.quote}</blockquote>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Every wordmark gets the same area (width x height), so wide and compact logos read as equally heavy.
const AREA = 7200; // px² at desktop size
const logoHeight = (ratio: number) => Math.round(Math.sqrt(AREA / ratio));

export function Partners() {
  return (
    <section data-scene="paper" className="px-[var(--gutter)] pb-[12svh] pt-[6svh] text-ink [--logo:0.7] md:[--logo:1]" aria-labelledby="partners-title">
      <div className="mx-auto max-w-7xl">
        <h2 id="partners-title" className="caps text-stone-deep">{s.partnersTitle}</h2>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-[clamp(2rem,6vw,5rem)] gap-y-10 md:justify-between">
          {partners.map((p) => (
            <li key={p.name}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[calc(12px*var(--logo))] opacity-60 transition-opacity duration-500 hover:opacity-100">
                {/* Monochrome: logos are forced to ink, whatever their own colours */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={base + p.logo}
                  alt={p.lockup ? "" : p.name}
                  className="w-auto brightness-0"
                  style={{ height: `calc(${p.lockup ? 34 : logoHeight(p.ratio)}px * var(--logo))` }}
                />
                {p.lockup && (
                  <span className="font-semibold leading-none tracking-[-0.03em]" style={{ fontSize: "calc(36px * var(--logo))" }}>
                    {p.name}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
