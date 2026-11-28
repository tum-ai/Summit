import { PersonCard, Tag, TextLink } from "@tum.ai/ui-kit";
import type { Person } from "@/content/event";

// Team: all five in one row on wide screens.
const teamGrid = "mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5";

function Card({ person, className }: { person: Person; className?: string }) {
  return (
    <li className={`relative ${className ?? ""}`}>
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

/**
 * Speakers in the order given, all the same size: five to a row on desktop,
 * three on tablets, one on phones. A row that isn't full is centred.
 */
export function SpeakerGrid({ speakers, more }: { speakers: Person[]; more: boolean }) {
  return (
    <>
      <ul className="mx-auto mt-12 flex max-w-xs flex-col gap-x-6 gap-y-12 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
        {speakers.map((person) => (
          // Widths leave room for the 1.5rem gaps between the cards.
          <Card
            key={person.name}
            person={person}
            className="sm:w-[calc((100%_-_3rem)/3)] lg:w-[calc((100%_-_6rem)/5)]"
          />
        ))}
      </ul>
      {more && <p className="mt-10 text-center text-sm text-fg/50">More speakers to be announced.</p>}
    </>
  );
}
