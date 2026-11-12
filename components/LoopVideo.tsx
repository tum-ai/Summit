"use client";
import { useEffect, useRef, useState } from "react";
import type { Media } from "@/lib/media";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Props = {
  media: Media;
  /** Shown when the video file does not exist yet (and under the poster while loading). */
  placeholder: React.ReactNode;
  /** undefined: plays whenever on screen. true/false: controlled (hover/focus tiles). */
  playing?: boolean;
  eager?: boolean;
  rate?: number;
  className?: string;
};

const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function LoopVideo({ media, placeholder, playing, eager, rate = 1, className = "" }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(!!eager);
  const [visible, setVisible] = useState(false);
  const [live, setLive] = useState(false);
  const hasVideo = media.mp4 || media.webm;
  const src = `${base}/media/${media.name}`;

  // Lazy-load sources when close to the viewport; track on-screen state to pause off-screen video.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setNear(true);
      setVisible(e.intersectionRatio > 0);
    }, { rootMargin: "50% 0px", threshold: [0, 0.01] });
    io.observe(el);
    return () => io.disconnect();
  }, [hasVideo]);

  // <source> children added after mount are ignored until load() is called.
  useEffect(() => {
    if (near && !eager) ref.current?.load();
  }, [near, eager]);

  const shouldPlay = (playing ?? true) && visible && near;

  useEffect(() => {
    const v = ref.current;
    if (!v || !near) return;
    if (shouldPlay && !reduced()) {
      if (playing !== undefined) v.currentTime = 0;
      v.playbackRate = rate;
      v.play().catch(() => {});
    } else {
      v.pause();
      if (playing === false) {
        v.currentTime = 0;
        setLive(false);
      }
    }
  }, [shouldPlay, near, playing, rate]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} data-playing={String(playing ?? live)}>
      {placeholder}
      {media.poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${src}.jpg`} alt="" className="absolute inset-0 h-full w-full object-cover" loading={eager ? "eager" : "lazy"} decoding="async" />
      )}
      {hasVideo && (
        <video
          ref={ref}
          muted
          playsInline
          loop
          preload={near ? (eager ? "auto" : "metadata") : "none"}
          poster={media.poster ? `${src}.jpg` : undefined}
          onPlaying={() => setLive(true)}
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[250ms] ${live && (playing ?? true) ? "opacity-100" : "opacity-0"}`}
        >
          {near && media.webm && <source src={`${src}.webm`} type="video/webm" />}
          {near && media.mp4 && <source src={`${src}.mp4`} type="video/mp4" />}
        </video>
      )}
    </div>
  );
}
