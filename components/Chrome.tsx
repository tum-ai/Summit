"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { copy } from "@/content/copy";

gsap.registerPlugin(ScrollTrigger);

/** Fixed, near-invisible during the hero. Colour follows the active scene via --fg. */
export function Nav() {
  return (
    <header className="nav fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[var(--gutter)] py-5 text-[var(--fg)]">
      <a href="#top" className="text-[15px] font-medium tracking-[-0.01em]">{copy.nav.wordmark}</a>
      <a href="#join" className="border border-current/30 px-4 py-2 text-[13px] tracking-wide transition-colors duration-500 hover:border-current">
        {copy.nav.cta}
      </a>
    </header>
  );
}

/** "A TUM.ai initiative" title card on pure black. CSS runs the timing; this only ends or skips it. */
export function Intro() {
  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.intro !== "play") return;
    sessionStorage.setItem("intro", "1");
    const end = () => {
      html.dataset.intro = "done";
      off();
    };
    const events = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    const off = () => {
      clearTimeout(t);
      events.forEach((e) => removeEventListener(e, end));
    };
    const t = setTimeout(end, 4100);
    events.forEach((e) => addEventListener(e, end, { passive: true }));
    return off;
  }, []);

  return (
    <div className="intro" aria-hidden>
      <p className="caps !text-[12px] text-paper">{copy.intro}</p>
    </div>
  );
}

/** Small ring that grows over interactive things and reads PLAY over pillar tiles. Fine pointers only. */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current!;
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("has-cursor");
    const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
    const move = (e: PointerEvent) => {
      el.hidden = false;
      x(e.clientX);
      y(e.clientY);
      const t = (e.target as Element).closest?.("[data-cursor], a, button");
      el.dataset.state = !t ? "" : t.getAttribute("data-cursor") === "play" ? "play" : "hover";
    };
    addEventListener("pointermove", move);
    return () => {
      removeEventListener("pointermove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);
  return (
    <div ref={ref} className="cursor" hidden aria-hidden>
      <span>PLAY</span>
    </div>
  );
}

/** One controller for: Lenis, title-card reveals, count-ups, scene colour. */
export function Motion() {
  useEffect(() => {
    const html = document.documentElement;
    const motion = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis: Lenis | undefined;
    const raf = (t: number) => lenis?.raf(t * 1000);
    if (motion) {
      lenis = new Lenis({ lerp: 0.075, anchors: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const count = (el: HTMLElement) => {
      const to = Number(el.dataset.count);
      const o = { v: 0 };
      gsap.to(o, { v: to, duration: 2.4, ease: "power2.out", delay: 0.3, onUpdate: () => (el.textContent = String(Math.round(o.v))) });
    };

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("in");
          if (motion) el.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
          reveal.unobserve(el);
        }),
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll("[data-reveal], [data-light]").forEach((el) => reveal.observe(el));

    // A scene owns the page colour while it crosses the middle of the viewport.
    const scene = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (html.dataset.scene = (e.target as HTMLElement).dataset.scene)),
      { rootMargin: "-50% 0px -50% 0px" },
    );
    document.querySelectorAll("[data-scene]").forEach((el) => scene.observe(el));

    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      reveal.disconnect();
      scene.disconnect();
      gsap.ticker.remove(raf);
      lenis?.destroy();
    };
  }, []);
  return null;
}
