"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LoopVideo from "./LoopVideo";
import type { Media } from "@/lib/media";
import { copy } from "@/content/copy";

gsap.registerPlugin(ScrollTrigger);

const letters = copy.hero.word.split("");

// Fixed-seed shuffle (mulberry32) so the fade reads as decay, not a loading bar.
function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = seeded(1989);
const order = letters.map((_, i) => i);
for (let i = order.length - 1; i > 0; i--) {
  const j = Math.floor(rand() * (i + 1));
  [order[i], order[j]] = [order[j], order[i]];
}
const rank = order.reduce<number[]>((r, idx, k) => ((r[idx] = k), r), []);

export default function Hero({ media }: { media: Media }) {
  const root = useRef<HTMLElement>(null);
  const noise = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const html = document.documentElement;
    const canvas = noise.current!;
    const g = canvas.getContext("2d")!;
    let active = true;
    const st = { noise: 0 }; // 0 = clean footage, 1 = pure noise (forward diffusion)
    // One ~20 fps loop draws a fresh frame of dark, monochrome film noise. Runs only while the hero is on screen.
    let img: ImageData, buf: Uint32Array, last = 0;
    const size = () => {
      canvas.width = Math.ceil(innerWidth / 2);
      canvas.height = Math.ceil(innerHeight / 2);
      img = g.createImageData(canvas.width, canvas.height);
      buf = new Uint32Array(img.data.buffer);
    };
    size();
    addEventListener("resize", size);
    const tick = (time: number) => {
      if (!active || time - last < 0.05) return;
      last = time;
      if (st.noise > 0.01) {
        for (let k = 0; k < buf.length; k++) {
          const r = Math.random();
          const v = (r * r * r * 150) | 0; // mostly near-black, with sparse brighter grains
          buf[k] = 0xff000000 | (v << 16) | (v << 8) | v;
        }
        g.putImageData(img, 0, 0);
      }
    };
    gsap.ticker.add(tick);

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          onToggle: (t) => {
            active = t.isActive;
            html.dataset.hero = t.isActive ? "on" : "off";
            if (t.isActive) html.dataset.scene = "ink";
          },
        },
      });
      tl.to(q(".bar"), { scaleY: 0, duration: 0.16, ease: "power1.inOut" }, 0)
        .to(q(".cue"), { opacity: 0, duration: 0.04 }, 0)
        .to(q(".media"), { scale: 1.08, yPercent: 6, duration: 0.8 }, 0) // push-in + video moves slower than the frame
        // Forward diffusion: the footage is progressively buried in dark grain, which then settles to a faint static.
        .to(st, { noise: 1, duration: 0.3, ease: "power1.in", onUpdate: () => (canvas.style.opacity = String(st.noise)) }, 0.26)
        .set(q(".media"), { autoAlpha: 0 }, 0.57)
        // The noise settles to black; the static stays inside the hero and never follows the page.
        .to(q(".dim"), { opacity: 1, duration: 0.18 }, 0.52)
        .to(q("h1"), { letterSpacing: "0.14em", duration: 0.6 }, 0.14);
      q(".hero-letter").forEach((el, i) => {
        tl.to(el, { opacity: 0.08, filter: "blur(4px)", duration: 0.2 }, 0.14 + rank[i] * 0.045);
      });
      // The first line of Act II lands on top of the faded word, one line at a time.
      const card = { autoAlpha: 0, y: 12, filter: "blur(4px)" };
      const shown = { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.1 };
      tl.fromTo(q(".void-label"), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.1 }, 0.6)
        .fromTo(q(".fade-0"), card, shown, 0.74)
        .fromTo(q(".fade-1"), card, shown, 0.9)
        .to({}, { duration: 0.3 }, 1); // hold
    }, root);
    return () => {
      gsap.ticker.remove(tick);
      removeEventListener("resize", size);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative h-svh motion-safe:h-[380svh]" aria-labelledby="hero-title">
      <div className="sticky top-0 h-svh overflow-hidden bg-ink">
        <div className="media absolute inset-0 will-change-transform">
          <LoopVideo
            media={media}
            eager
            rate={0.75}
            className="grade"
            placeholder={
              <div className="ph-archive">
                <div className="ph-scratch" />
              </div>
            }
          />
          <div className="vignette" />
        </div>
        <canvas ref={noise} aria-hidden className="noise absolute inset-0 h-full w-full opacity-0" />
        <div className="dim absolute inset-0 bg-ink opacity-0" />

        <div className="hero-title absolute inset-0 z-[3] grid place-items-center px-[var(--gutter)]">
          <h1
            id="hero-title"
            aria-label={copy.hero.ariaLabel}
            className="whitespace-nowrap text-center text-[clamp(2.25rem,11.2vw,20rem)] font-medium uppercase leading-none tracking-[0.08em] text-paper"
            style={{ paddingLeft: "0.08em" }}
          >
            {letters.map((l, i) => (
              <span
                key={i}
                aria-hidden
                className="hero-letter inline-block"
                // Reduced motion: shown already partially faded, in the same seeded order.
                style={{ "--rm-o": rank[i] < 5 ? 0.18 : 1 } as React.CSSProperties}
              >
                {l}
              </span>
            ))}
          </h1>
        </div>

        <p className="void-label caps scene-label invisible !top-[6.5rem] text-paper/55 motion-reduce:hidden">{copy.crisis.label}</p>
        <p className="statement pointer-events-none absolute inset-0 z-[4] grid place-content-center px-[var(--gutter)] text-center text-[clamp(1.75rem,4.3vw,5rem)] leading-[1.08] tracking-[-0.02em] text-paper motion-reduce:hidden">
          {copy.crisis.fade.map((l, i) => (
            <span key={l} className={`fade-${i} invisible block`}>{l}</span>
          ))}
        </p>

        <div className="bar bar-top" />
        <div className="bar bar-bottom" />

        <div style={{ bottom: "max(calc(var(--bar) + 1.25rem), 1.5rem)" }} className="cue absolute left-1/2 z-[5] flex -translate-x-1/2 flex-col items-center gap-3 text-paper/60 motion-reduce:hidden">
          <span className="block h-10 w-px bg-paper/40" />
          <span className="caps">{copy.hero.scroll}</span>
        </div>
      </div>
    </section>
  );
}
