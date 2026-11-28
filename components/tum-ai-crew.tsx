import Image from "next/image";
import { Container, Section, TextLink } from "@tum.ai/ui-kit";
import type { Person } from "@/content/event";

/** The TUM.ai crew: a tinted panel under the team, with round photos. */
export function TumAiCrew({ people }: { people: Person[] }) {
  return (
    // Less top padding, so the panel sits closer to the team above.
    <Section id="crew" tone="paper" className="pt-6 md:pt-8">
      <Container>
        <div className="rounded-3xl bg-violet-100/60 p-8 ring-1 ring-fg/10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-highlight">TUM.ai</p>
          <h2 className="mt-3 text-heading-lg text-fg">The crew behind the summit.</h2>
          <p className="mt-3 text-fg/60">Keeping it running, from Munich to San Francisco.</p>
          {/* Narrower items on phones, so two fit side by side. */}
          <ul className="mt-10 flex flex-wrap justify-center gap-x-4 gap-y-10 sm:gap-x-6">
            {people.map((person) => (
              <li key={person.name} className="relative flex w-32 flex-col items-center text-center sm:w-36">
                <Image
                  src={person.image}
                  alt=""
                  width={320}
                  height={320}
                  unoptimized
                  className="size-24 rounded-full object-cover ring-4 ring-white/40"
                />
                <p className="mt-3 font-semibold leading-snug text-fg">{person.name}</p>
                <p className="mt-1 text-sm leading-snug text-fg/60">{person.byline}</p>
                {/* The link stretches over the whole item, so the photo is clickable too. */}
                <TextLink
                  href={person.linkedin}
                  emphasis="muted"
                  aria-label={`${person.name}: LinkedIn`}
                  className="mt-1 text-sm after:absolute after:inset-0"
                >
                  LinkedIn
                </TextLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
