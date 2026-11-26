import { PersonCard, Tag, TextLink } from "@tum.ai/ui-kit";
import type { Person } from "@/content/event";

// Team: all five in one row on wide screens.
const teamGrid = "mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5";

function Card({ person, className, cardClassName }: { person: Person; className?: string; cardClassName?: string }) {
  return (
    <li className={`relative ${className ?? ""}`}>
      <PersonCard
        name={person.name}
        byline={person.byline}
        image={{ src: person.image, alt: "" }}
        sizes="(min-width: 64rem) 22vw, (min-width: 40rem) 30vw, 50vw"
        unoptimized
        className={cardClassName}
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
 * Speakers in the order given, the featured one larger.
 * Desktop: one row; the featured column is wider, so put that speaker in the
 * middle of the list. Tablet: the featured speaker on a row of their own, the
 * rest in one row below. Phones: one column, featured first.
 */
export function SpeakerGrid({ speakers, more }: { speakers: Person[]; more: boolean }) {
  const others = speakers.filter((p) => !p.featured).length;
  const columns = speakers.map((p) => (p.featured ? "minmax(0,1.75fr)" : "minmax(0,1fr)")).join(" ");
  return (
    <>
      <ul
        className="mx-auto mt-12 grid max-w-xs grid-cols-1 gap-x-6 gap-y-12 sm:max-w-none sm:grid-cols-[repeat(var(--others),minmax(0,1fr))] lg:grid-cols-[var(--columns)] lg:items-start"
        style={{ "--others": Math.max(others, 1), "--columns": columns } as React.CSSProperties}
      >
        {speakers.map((person) =>
          person.featured ? (
            <Card
              key={person.name}
              person={person}
              className="max-lg:order-first sm:max-lg:col-span-full sm:max-lg:mx-auto sm:max-lg:w-full sm:max-lg:max-w-sm"
              cardClassName="sm:[&_h3]:text-heading-md"
            />
          ) : (
            // Centre the smaller photos on the featured one, whatever the text
            // below. Photos are 4:5, so the featured one (1.75 columns wide) is
            // 0.9375 columns taller; half of that is 46.875% of a column, and a
            // grid item's percentage margin resolves against its column width.
            <Card key={person.name} person={person} className="lg:mt-[46.875%]" />
          ),
        )}
      </ul>
      {more && <p className="mt-10 text-center text-sm text-fg/50">More speakers to be announced.</p>}
    </>
  );
}
