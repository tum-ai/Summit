import Image from "next/image";
import { Container, Section, SectionHeader } from "@tum.ai/ui-kit";
import type { LogoItem } from "@tum.ai/ui-kit";
import type { Challenge } from "@/content/event";

const TBA = "To be announced";

function PartnerMark({ logo }: { logo?: LogoItem }) {
  if (!logo) return <p className="text-base text-fg/40">Partner to be announced</p>;
  const ratio = logo.aspectRatio ?? 3;
  const height = logo.wordmark ? 32 : Math.round(Math.min(40, 36 * Math.sqrt(3.2 / ratio)));
  return (
    <span className="inline-flex items-center gap-2.5 text-fg">
      <Image
        src={logo.src!}
        alt={logo.wordmark ? "" : logo.name}
        width={Math.round(height * ratio)}
        height={height}
        unoptimized
        className="w-auto brightness-0"
        style={{ height }}
      />
      {logo.wordmark ? <span className="text-2xl font-semibold tracking-[-0.02em]">{logo.wordmark}</span> : null}
    </span>
  );
}

// One column per partner: who sets the challenge, what it is, what it wins.
export function Challenges({ items, logos, className }: { items: Challenge[]; logos: LogoItem[]; className?: string }) {
  return (
    <Section id="challenges" tone="paper" className={className}>
      <Container>
        <SectionHeader
          eyebrow="Challenges"
          title="Set by the partners."
          lead="Each partner sets a challenge for the hackathon, with its own prize. Details follow soon."
        />
        {/* One row on wide screens: confirmed partners get the wide columns, open slots a narrow one. */}
        <ul
          className="mt-12 grid border-y border-fg/12 sm:grid-cols-2 lg:grid-cols-[var(--challenge-cols)]"
          style={
            {
              "--challenge-cols": items.map((c) => (c.partner ? "minmax(0,1.6fr)" : "minmax(0,1fr)")).join(" "),
            } as React.CSSProperties
          }
        >
          {items.map((c, i) => {
            const logo = logos.find((l) => l.name === c.partner);
            return (
              <li
                key={c.partner ?? `tba-${i}`}
                className="flex flex-col gap-8 border-fg/12 py-8 max-sm:border-t max-sm:first:border-t-0 sm:px-6 sm:[&:nth-child(n+3)]:border-t lg:border-l lg:first:border-l-0 lg:first:pl-0 lg:[&:nth-child(n+3)]:border-t-0"
              >
                <div className="flex h-10 items-center">
                  <PartnerMark logo={logo} />
                </div>
                {/* Open slots stay small so the confirmed partners carry the section. */}
                <dl className={`grid ${logo ? "gap-5" : "gap-3 text-sm"}`}>
                  <div>
                    <dt className={logo ? "text-sm text-fg/55" : "text-fg/40"}>Challenge</dt>
                    <dd className={`mt-1 leading-snug ${logo ? "text-lg" : ""} ${c.challenge ? "" : "text-fg/40"}`}>{c.challenge ?? TBA}</dd>
                  </div>
                  <div>
                    <dt className={logo ? "text-sm text-fg/55" : "text-fg/40"}>Prize</dt>
                    <dd className={`mt-1 leading-snug ${logo ? "text-lg" : ""} ${c.prize ? "" : "text-fg/40"}`}>{c.prize ?? TBA}</dd>
                  </div>
                </dl>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
