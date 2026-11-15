import FootageScene from "./FootageScene";
import GdpChart from "./GdpChart";
import type { Media } from "@/lib/media";
import { copy } from "@/content/copy";

const c = copy.crisis;
const card = "max-w-[26ch] text-balance text-center text-[clamp(1.9rem,4.6vw,5.25rem)] font-normal leading-[1.08] tracking-[-0.02em] text-paper [text-shadow:0_2px_40px_rgb(0_0_0/.5)]";

const Lines = ({ lines }: { lines: readonly string[] }) => (
  <p className={card}>
    {lines.map((l, i) => <span key={l} className={`block ${i ? "mt-2 text-paper/70" : ""}`}>{l}</span>)}
  </p>
);

/**
 * Act II. The fade line sits on the hero's faded word (a separate slide only for reduced motion),
 * then the decline in cold footage with real data, then what this country has done before, and the turn.
 */
export default function Crisis({ exchange, industry }: { exchange: Media; industry: Media }) {
  return (
    <>
      <section data-scene="paper" className="relative grid min-h-[120svh] place-items-center px-[var(--gutter)] text-ink motion-safe:hidden" aria-label="The void">
        <p className="caps scene-label !top-8 text-stone-deep">{c.label}</p>
        <p className="max-w-[28ch] text-balance text-center text-[clamp(1.75rem,4.3vw,5rem)] leading-[1.08] tracking-[-0.02em]">
          {c.fade.map((l) => <span key={l} className="block">{l}</span>)}
        </p>
      </section>

      <FootageScene
        media={exchange}
        placeholder="ph-cold"
        label={c.declineLabel}
        beatLength={100}
        beats={[
          <GdpChart key="gdp" />,
          <div key="vc" className="w-[min(90vw,920px)] text-balance text-center text-paper tabular-nums">
            <p className="text-[clamp(3.5rem,10vw,9rem)] font-light leading-none text-ember">
              <span data-count={c.data.eu}>{c.data.eu}</span>%
            </p>
            <p className="mt-5 text-[clamp(1.4rem,3vw,3rem)] leading-[1.12] tracking-[-0.02em]">{c.data.line}</p>
            <p className="mx-auto mt-6 max-w-[40ch] text-[clamp(1rem,1.5vw,1.35rem)] leading-snug text-paper/70">{c.data.sub}</p>
            <p className="caps mt-6 !text-[10px] text-paper/50">— {c.data.source}</p>
          </div>,
        ]}
      />

      <FootageScene media={industry} placeholder="ph-cold ph-cold-2" beats={[<Lines key="i" lines={c.industry} />]} beatLength={110} />

      {/* Why it matters, then the turn. On black: no imagery competes. */}
      <FootageScene
        placeholder="ph-black"
        beatLength={95}
        beats={[
          <Lines key="m" lines={c.memory} />,
          <h2 key="h" className="text-center text-[clamp(2.75rem,9vw,10rem)] font-medium leading-none tracking-[-0.03em] text-paper">{c.hinge}</h2>,
        ]}
      />
    </>
  );
}
