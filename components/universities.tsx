import Image from "next/image";
import { Anchor, Container, Eyebrow, Heading, Section } from "@tum.ai/ui-kit";
import type { LogoItem } from "@tum.ai/ui-kit";
import { AboutText } from "@/components/about";

// Universities whose students are joining. The logos are set in one ink
// colour so three different brand palettes read as a single row.
export function Universities({ items }: { items: LogoItem[] }) {
  return (
    <Section id="about" tone="paper">
      <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <Eyebrow>Who&apos;s coming</Eyebrow>
          <Heading as="h2" size="lg" className="mt-4">
            Students from TUM, UC Berkeley and Stanford.
          </Heading>
        </div>
        <ul
          aria-label="Universities"
          className="grid grid-cols-3 items-center divide-x divide-fg/10 rounded-3xl border border-fg/10 lg:col-span-7"
        >
          {items.map((u) => {
            const ratio = u.aspectRatio ?? 3;
            // Same visual weight for a compact mark and a long wordmark.
            const height = Math.round(Math.min(64, 46 * Math.sqrt(3.2 / ratio)));
            return (
              <li key={u.name} className="flex h-28 items-center justify-center px-4 sm:h-36 sm:px-8">
                <Anchor href={u.href!} className="inline-flex opacity-75 transition-opacity hover:opacity-100">
                  <Image
                    src={u.src!}
                    alt={u.name}
                    width={Math.round(height * ratio)}
                    height={height}
                    unoptimized
                    className="h-auto max-w-full brightness-0"
                    style={{ width: Math.round(height * ratio) }}
                  />
                </Anchor>
              </li>
            );
          })}
        </ul>
        <div className="grid gap-6 border-t border-fg/10 pt-10 lg:col-span-12 lg:grid-cols-12 lg:gap-12">
          <Heading as="h3" size="md" className="lg:col-span-5">
            Brought together by TUM.ai, Europe&apos;s leading student AI initiative.
          </Heading>
          <div className="max-w-2xl lg:col-span-7">
            <AboutText />
          </div>
        </div>
      </Container>
    </Section>
  );
}
