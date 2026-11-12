import { copy } from "@/content/copy";

const a = copy.about;
const dev = process.env.NODE_ENV !== "production";

/** Compact proof: one statement, one closer, four facts. No held screens. */
export default function About() {
  return (
    <section data-scene="paper" className="relative px-[var(--gutter)] pb-[6svh] pt-[16svh] text-ink" aria-labelledby="about-title">
      <p className="caps scene-label !top-8 text-stone-deep">{a.label}</p>

      <div className="mx-auto max-w-6xl">
        <h2 id="about-title" className="sr-only">{a.title}</h2>
        {a.body.map((t) => (
          <p key={t} data-reveal className="max-w-[34ch] text-[clamp(1.5rem,3vw,3rem)] leading-[1.14] tracking-[-0.02em]">{t}</p>
        ))}
        <p data-reveal style={{ "--d": "0.3s" } as React.CSSProperties} className="mt-8 text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.14] tracking-[-0.02em]">
          {a.closer}
        </p>

        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-ink/15 pt-10 md:grid-cols-4">
          {a.proof.map((p, i) => (
            <div key={i} data-reveal style={{ "--d": `${i * 0.12}s` } as React.CSSProperties}>
              <dt className="sr-only">{p.label}</dt>
              <dd className={`whitespace-nowrap text-[clamp(1.6rem,2.8vw,3rem)] font-light tabular-nums leading-none ${dev && p.todo ? "todo-dev" : ""}`}>{p.value}</dd>
              <dd className="mt-4 max-w-[26ch] text-sm leading-relaxed text-stone-deep">{p.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
