import { PersonCard, Tag, TextLink } from "@tum.ai/ui-kit";
import type { Person } from "@/content/event";

// Team: all five in one row on wide screens.
const teamGrid = "mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5";

function Card({ person }: { person: Person }) {
  return (
    <li className="relative">
      <PersonCard
        name={person.name}
        byline={person.byline}
        image={{ src: person.image, alt: "" }}
        sizes="(min-width: 64rem) 22vw, (min-width: 40rem) 30vw, 50vw"
        unoptimized
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {person.roles.map((r) => (
            <Tag key={r}>{r}</Tag>
          ))}
          {person.linkedin && (
            // The link stretches over the whole card, so the photo is clickable too.
            <TextLink
              href={person.linkedin}
              emphasis="muted"
              aria-label={`${person.name}: profile`}
              className="after:absolute after:inset-0"
            >
              {person.linkedin.includes("linkedin.com") ? "LinkedIn" : "Website"}
            </TextLink>
          )}
        </div>
      </PersonCard>
    </li>
  );
}

/** Everyone visible at once, in the order given. */
export function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <ul className={teamGrid}>
      {people.map((person) => (
        <Card key={person.name} person={person} />
      ))}
    </ul>
  );
}

function TbaCard() {
  return (
    <li aria-hidden className="max-lg:hidden">
      <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border-2 border-dashed border-fg/20">
        <span className="text-lg text-fg/40">TBA</span>
      </div>
    </li>
  );
}

/**
 * Confirmed speakers in the middle, open slots split to either side as dashed
 * cards, across the full content width. Below desktop width only the confirmed
 * speakers show (one column on phones), with a line about the rest.
 */
export function SpeakerGrid({ speakers, tba }: { speakers: Person[]; tba: number }) {
  const left = Math.floor(tba / 2);
  const right = tba - left;
  return (
    <>
      <ul
        className="mx-auto mt-12 grid max-w-xs grid-cols-1 gap-x-8 gap-y-12 sm:max-w-none sm:grid-cols-[repeat(var(--speakers),minmax(0,1fr))] lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]"
        style={{ "--speakers": speakers.length, "--cols": speakers.length + tba } as React.CSSProperties}
      >
        {Array.from({ length: left }, (_, i) => (
          <TbaCard key={`l-${i}`} />
        ))}
        {speakers.map((person) => (
          <Card key={person.name} person={person} />
        ))}
        {Array.from({ length: right }, (_, i) => (
          <TbaCard key={`r-${i}`} />
        ))}
      </ul>
      {tba > 0 && <p className="mt-6 text-center text-sm text-fg/50 lg:hidden">More speakers to be announced.</p>}
    </>
  );
}
