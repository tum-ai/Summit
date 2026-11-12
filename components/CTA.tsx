"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoopVideo from "./LoopVideo";
import type { Media } from "@/lib/media";
import { copy } from "@/content/copy";

gsap.registerPlugin(ScrollTrigger);

const c = copy.cta;
const mail = (subject: string, body = "") =>
  `mailto:${c.email}?subject=${encodeURIComponent(subject)}${body && `&body=${encodeURIComponent(body)}`}`;

export default function CTA({ media }: { media: Media }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const card = { opacity: 0, y: 12, filter: "blur(4px)" };
      const shown = { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.12 };
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 0.8 },
        })
        .fromTo(q(".media"), { scale: 1, yPercent: -4 }, { scale: 1.08, yPercent: 4, duration: 1 }, 0)
        .fromTo(q(".line-0"), card, shown, 0.08)
        .fromTo(q(".line-1"), card, shown, 0.4)
        .fromTo(q(".bar"), { scaleY: 0 }, { scaleY: 1, duration: 0.35, ease: "power1.inOut" }, 0.4) // the screen closes, end of film
        .fromTo(q(".cta-actions"), card, shown, 0.7)
        .to({}, { duration: 0.18 }, 0.82);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} data-scene="ink" className="relative h-svh motion-safe:h-[200svh]" aria-labelledby="cta-title">
      {/* Anchor at the end state, so "Become a supporter" lands on the finished scene. */}
      <span id="join" className="absolute bottom-[100svh] motion-reduce:top-0" aria-hidden />
      <div className="sticky top-0 grid h-svh place-items-center overflow-hidden">
        <div className="media absolute inset-0">
          <LoopVideo media={media} className="grade opacity-55" placeholder={<div className="ph-cta" />} />
          <div className="vignette" />
        </div>
        <div className="leak -bottom-[30vmax] left-[10vw] opacity-70" aria-hidden />

        <div className="relative z-[5] px-[var(--gutter)] text-center text-paper">
          <h2 id="cta-title" className="mx-auto max-w-[22ch] text-balance text-[clamp(2rem,5vw,6rem)] font-medium leading-[1.06] tracking-[-0.03em]">
            {c.lines.map((l, i) => (
              <span key={i} className={`line-${i} block`}>
                {l}
              </span>
            ))}
          </h2>
          <div className="cta-actions mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
            <a
              href={mail(c.supporterSubject, c.supporterBody)}
              className="inline-flex h-14 items-center bg-ember px-9 text-[15px] font-medium tracking-wide text-ink transition-colors duration-500 hover:bg-[#d9a24a]"
            >
              {c.primary}
            </a>
            <a href={mail(c.partnerSubject)} className="border-b border-paper/40 pb-1 text-[15px] text-paper/85 transition-colors hover:border-paper">
              {c.secondary}
            </a>
          </div>
        </div>

        <div className="bar bar-top motion-reduce:hidden" />
        <div className="bar bar-bottom motion-reduce:hidden" />
      </div>
    </section>
  );
}
