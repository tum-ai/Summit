import type { AgendaDay, AgendaItem, AgendaKind } from "@/content/event";
import { agendaKinds, agendaSlots } from "@/content/event";

const SLOTS = agendaSlots.length;

// Colours come from the city: the hackathon keeps the brand violet, stage moments take the Golden Gate's International Orange,
// office visits the fog, dinners and parties a warm gold.
const tint: Record<AgendaKind, string> = {
  stage: "bg-[#F0502E] text-[#1f0802]",
  visit: "bg-[#C3D2E1] text-[#0d1622]",
  social: "bg-[#EDBB4F] text-[#21170a]",
};
const swatch: Record<AgendaKind | "hack", string> = {
  hack: "bg-violet-600",
  stage: "bg-[#F0502E]",
  visit: "bg-[#C3D2E1]",
  social: "bg-[#EDBB4F]",
};
const HACK = "bg-violet-600 text-white";
const INSIDE = "bg-[#EDBB4F] text-[#21170a]";

// Every event is a bar as long as it lasts. The hackathon bar is rounded
// where it starts and ends, square where it runs past midnight.
function barClass(item: AgendaItem) {
  if (item.hack === "start") return `rounded-l-2xl ${HACK}`;
  if (item.hack === "end") return `rounded-r-2xl ${HACK}`;
  return `rounded-2xl ${tint[item.kind ?? "visit"]}`;
}

function Bar({ item }: { item: AgendaItem }) {
  const span = item.span ?? 1;
  return (
    <div
      className={`relative flex min-h-[4.5rem] items-center px-4 py-3 ${barClass(item)}`}
      style={{ gridColumn: `${item.col + 1} / span ${span}` }}
    >
      {item.inside ? (
        // Split the bar into its slots so the inner moment sits where it happens.
        <div className="grid w-full items-center" style={{ gridTemplateColumns: `repeat(${span}, minmax(0, 1fr))` }}>
          <Label item={item} />
          {item.inside.map((m) => (
            <p
              key={m.title}
              className={`justify-self-start rounded-xl px-3 py-1.5 leading-snug ${INSIDE}`}
              style={{ gridColumn: `${m.col - item.col + 1}` }}
            >
              {m.title}
            </p>
          ))}
        </div>
      ) : (
        <Label item={item} />
      )}
    </div>
  );
}

// Phones: a bar that covers several slots says where it starts.
function slotLabel(item: AgendaItem) {
  const first = agendaSlots[item.col - 1];
  return (item.span ?? 1) > 1 ? `From ${first.toLowerCase()}` : first;
}

function Label({ item }: { item: AgendaItem }) {
  // The closing bar reads to its end: what's happening, then when it stops.
  if (item.hack === "end")
    return (
      <p className="flex w-full items-baseline justify-between gap-4 leading-snug">
        <span>{item.title}</span>
        <span className="tabular-nums opacity-70">until {item.time}</span>
      </p>
    );
  return (
    <p className="leading-snug">
      {item.time && <span className="mr-2 tabular-nums opacity-70">{item.time}</span>}
      {item.title}
    </p>
  );
}

function Legend() {
  return (
    <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg/70">
      {agendaKinds.map((k) => (
        <li key={k.kind} className="flex items-center gap-2">
          <span aria-hidden className={`size-2.5 rounded-[3px] ${swatch[k.kind]}`} />
          {k.label}
        </li>
      ))}
    </ul>
  );
}

export function Agenda({ days }: { days: AgendaDay[] }) {
  return (
    <>
      <Legend />

      {/* Wide screens: a timetable, days as rows, the printed agenda's slots as columns. */}
      <div className="mt-8 hidden lg:block" role="table" aria-label="Agenda">
        <div
          role="row"
          className="grid gap-x-1.5 pb-3 text-sm text-fg/50"
          style={{ gridTemplateColumns: `6rem repeat(${SLOTS}, minmax(0, 1fr))` }}
        >
          <span role="columnheader" />
          {agendaSlots.map((s) => (
            <span key={s} role="columnheader" className="px-4">
              {s}
            </span>
          ))}
        </div>
        {days.map((d) => (
          <div
            key={d.day}
            role="row"
            className="grid items-stretch gap-x-1.5 border-t border-fg/10 py-3"
            style={{ gridTemplateColumns: `6rem repeat(${SLOTS}, minmax(0, 1fr))` }}
          >
            <p role="rowheader" className="self-center text-lg">
              {d.day}
            </p>
            {d.items.map((item) => (
              <Bar key={item.title} item={item} />
            ))}
          </div>
        ))}
      </div>

      {/* Phones and tablets: one list per day. */}
      <ol className="mt-8 space-y-10 lg:hidden">
        {days.map((d) => (
          <li key={d.day}>
            <p className="border-b border-fg/10 pb-3 text-lg">{d.long}</p>
            <ul className="mt-3 space-y-2">
              {d.items.flatMap((item) => [
                <li
                  key={item.title}
                  className={`flex items-baseline gap-3 rounded-2xl px-4 py-3 ${item.hack ? HACK : tint[item.kind ?? "visit"]}`}
                >
                  <span className="w-28 shrink-0 whitespace-nowrap text-sm opacity-60">
                    {item.hack !== "end" && item.time ? item.time : slotLabel(item)}
                  </span>
                  <span className="leading-snug">
                    {item.title}
                    {item.hack === "end" && `, until ${item.time}`}
                  </span>
                </li>,
                ...(item.inside ?? []).map((m) => (
                  <li key={m.title} className={`flex items-baseline gap-3 rounded-2xl px-4 py-3 ${INSIDE}`}>
                    <span className="w-28 shrink-0 whitespace-nowrap text-sm opacity-60">{agendaSlots[m.col - 1]}</span>
                    <span className="leading-snug">{m.title}</span>
                  </li>
                )),
              ])}
            </ul>
          </li>
        ))}
      </ol>
    </>
  );
}
