import FootageScene from "./FootageScene";
import { copy } from "@/content/copy";

const c = copy.crisis;

/**
 * Act II. The fade line sits on the hero's faded word (a separate slide only for reduced motion),
 * then exactly one slide, the turn, before the Summit.
 */
export default function Crisis() {
  return (
    <>
      <section data-scene="paper" className="relative grid min-h-[120svh] place-items-center px-[var(--gutter)] text-ink motion-safe:hidden" aria-label="The void">
        <p className="caps scene-label !top-8 text-stone-deep">{c.label}</p>
        <p className="max-w-[28ch] text-balance text-center text-[clamp(1.75rem,4.3vw,5rem)] leading-[1.08] tracking-[-0.02em]">
          {c.fade.map((l) => <span key={l} className="block">{l}</span>)}
        </p>
      </section>

      <FootageScene
        placeholder="ph-black"
        beatLength={170}
        beats={[
          <div key="turn" className="text-center text-paper">
            <p className="mx-auto max-w-[30ch] text-balance text-[clamp(1.25rem,2.4vw,2.25rem)] leading-[1.2] tracking-[-0.01em] text-paper/65">{c.memory}</p>
            <h2 className="mt-8 text-[clamp(2.75rem,9vw,10rem)] font-medium leading-none tracking-[-0.03em]">{c.hinge}</h2>
          </div>,
        ]}
      />
    </>
  );
}
