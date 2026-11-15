"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoopVideo from "./LoopVideo";
import type { Media } from "@/lib/media";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  media?: Media;
  placeholder: string; // CSS class of the fallback
  label?: string;
  /** Shown one at a time, in scroll order, over the footage. Never two at once. */
  beats: React.ReactNode[];
  /** Scroll length per beat, in svh. */
  beatLength?: number;
};

/** Sticky full-bleed footage scene: camera push-in, beats as title cards, draw/count readouts scrubbed. */
export default function FootageScene({ media, placeholder, label, beats, beatLength = 110 }: Props) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.8 },
      });
      tl.fromTo(q(".media"), { scale: 1, yPercent: -3 }, { scale: 1.08, yPercent: 3, duration: beats.length }, 0);
      q(".beat").forEach((el, i) => {
        const last = i === beats.length - 1;
        tl.fromTo(el, { autoAlpha: 0, y: 12, filter: "blur(4px)" }, { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.2 }, i + 0.05);
        el.querySelectorAll(".draw").forEach((p) =>
          tl.fromTo(p, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.55, ease: "power1.inOut" }, i + 0.2),
        );
        el.querySelectorAll<HTMLElement>("[data-count]").forEach((n) => {
          const o = { v: 0 };
          tl.to(o, { v: Number(n.dataset.count), duration: 0.55, ease: "power2.out", onUpdate: () => (n.textContent = String(Math.round(o.v))) }, i + 0.2);
        });
        if (!last) tl.to(el, { autoAlpha: 0, y: -8, filter: "blur(4px)", duration: 0.15 }, i + 0.85);
      });
    }, root);
    return () => ctx.revert();
  }, [beats.length]);

  return (
    <section ref={root} data-scene="ink" className="relative" style={{ "--len": `${beats.length * beatLength}svh` } as React.CSSProperties}>
      <div className="sticky top-0 h-svh overflow-hidden bg-ink motion-reduce:relative">
        <div className="media absolute inset-0 will-change-transform">
          {media ? <LoopVideo media={media} className="grade-cold" placeholder={<div className={placeholder} />} /> : <div className={placeholder} />}
          <div className="absolute inset-0 bg-ink/45" />
          <div className="vignette" />
        </div>
        {label && <p className="caps scene-label text-paper/55">{label}</p>}
        {beats.map((b, i) => (
          <div key={i} className="beat absolute inset-0 z-[5] grid place-items-center px-[var(--gutter)] motion-reduce:relative motion-reduce:min-h-svh">
            {b}
          </div>
        ))}
      </div>
      <div aria-hidden className="motion-reduce:hidden" style={{ height: "calc(var(--len) - 100svh)" }} />
    </section>
  );
}
