"use client";
import { useEffect, useRef, useState } from "react";
import LoopVideo from "./LoopVideo";
import type { Media } from "@/lib/media";
import { copy } from "@/content/copy";

const s = copy.summit;

export default function Pillars({ media }: { media: Media[] }) {
  const [active, setActive] = useState<number | null>(null);
  const tiles = useRef<(HTMLElement | null)[]>([]);

  // Touch devices: the tile that is >= 60% in view plays. One at a time.
  useEffect(() => {
    if (!matchMedia("(hover: none)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = tiles.current.indexOf(e.target as HTMLElement);
          if (e.isIntersecting) setActive(i);
          else setActive((a) => (a === i ? null : a));
        }
      },
      { threshold: 0.6 },
    );
    tiles.current.forEach((t) => t && io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section id="summit" data-scene="ink" className="relative overflow-hidden pb-[12svh] text-paper" aria-labelledby="summit-title">
      <div className="leak -right-[25vmax] top-[10svh]" aria-hidden />
      <p className="caps scene-label !top-8 text-stone">{s.label}</p>

      <div className="grid place-items-center px-[var(--gutter)] pb-[10svh] pt-[22svh]">
        <div className="text-center">
          <h2 id="summit-title" data-reveal className="text-[clamp(2.5rem,7vw,8rem)] font-medium leading-none tracking-[-0.03em]">
            {s.title}
          </h2>
          {s.lines.map((line, i) => (
            <p
              key={i}
              data-reveal
              style={{ "--d": `${0.4 + i * 0.5}s` } as React.CSSProperties}
              className="mx-auto mt-6 max-w-[40ch] text-balance text-[clamp(1.1rem,1.9vw,1.75rem)] font-light leading-snug text-paper/75"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      <ul data-light className="grid grid-cols-1 gap-[clamp(12px,1.4vw,24px)] px-[var(--gutter)] sm:grid-cols-2 lg:grid-cols-4">
        {s.pillars.map((p, i) => (
          <li key={p.title}>
            <article
              ref={(el) => {
                tiles.current[i] = el;
              }}
              tabIndex={0}
              data-cursor="play"
              aria-label={`${p.title}. ${p.text}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive((a) => (a === i ? null : a))}
              onFocus={() => setActive(i)}
              onBlur={() => setActive((a) => (a === i ? null : a))}
              className="group relative aspect-[3/4] overflow-hidden bg-steel"
            >
              <LoopVideo
                media={media[i]}
                playing={active === i}
                className="grade transition-transform duration-[1.6s] ease-film group-hover:scale-[1.04] group-focus:scale-[1.04]"
                placeholder={<div className={`ph-tile ph-${p.media.replace("pillar-", "")}`} />}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="caps absolute left-5 top-5 text-paper/60 tabular-nums">0{i + 1}</span>
              <div className="absolute inset-x-5 bottom-5" aria-hidden>
                <h3 className="text-[clamp(1.35rem,1.8vw,1.9rem)] font-medium tracking-[-0.01em]">{p.title}</h3>
                <p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-paper/75">{p.text}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
