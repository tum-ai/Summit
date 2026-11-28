import type { LogoItem } from "@tum.ai/ui-kit";
import { asset } from "@/lib/asset";

// All page copy and data. Anything marked TODO is a placeholder to confirm.

// TODO: confirm the address partners should write to.
export const CONTACT_EMAIL = "partners@tum-ai.com";

export const mailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

export const EVENT_NAME = "TUM.ai Summit";

// Production origin, for canonical URLs and social cards.
export const SITE_URL = "https://summit.tum-ai.com";

export const EHL_URL = "https://ehl.gg";

// Attendee sign-up.
export const SIGNUP_URL = "https://luma.com/0qlwf7ti";

export const hero = {
  title: "MomenTUM",
  tagline: "Mass × Velocity.",
  lead: "Germany has the mass. San Francisco has the velocity. TUM.ai is building the bridge between them, and bringing both into one room.",
};

// Logos live in /public/logos. Mark-only logos get a `wordmark` set beside them.
// Shown in this order: ranked by commitment and by how strong the brand is.
// Entries without `src` show their name as text until a logo is added.
export const partners: LogoItem[] = [
  { name: "OpenAI", src: asset("/logos/openai.svg"), href: "https://openai.com", aspectRatio: 1157.66 / 257.88 },
  { name: "Rosberg Ventures", href: "https://www.rosbergventures.com" },
  { name: "Antler", src: asset("/logos/antler.svg"), href: "https://www.antler.co", aspectRatio: 117 / 28 },
  { name: "Hone", href: "https://hone.com" },
  { name: "Modal", src: asset("/logos/modal.svg"), href: "https://modal.com", aspectRatio: 290 / 49.8582 },
  { name: "Cognition", src: asset("/logos/cognition.svg"), href: "https://cognition.ai", aspectRatio: 1, wordmark: "Cognition" },
  { name: "PangeAI", src: asset("/logos/pangeai.svg"), href: "https://pangeai.com", aspectRatio: 182 / 45 },
  { name: "Chalk", src: asset("/logos/chalk.svg"), href: "https://chalk.ai", aspectRatio: 91 / 21 },
  { name: "Headline", src: asset("/logos/headline.svg"), href: "https://headline.com", aspectRatio: 217 / 378, wordmark: "Headline" },
  { name: "Dryft", src: asset("/logos/dryft.png"), href: "https://dryft.ai", aspectRatio: 498 / 130 },
  // Attention Engineering (attention.inc). Logo cut from the lockup they sent.
  { name: "Attention Engineering", src: asset("/logos/attention.png"), href: "https://attention.inc", aspectRatio: 1528 / 148 },
  { name: "Proregal", src: asset("/logos/proregal.png"), href: "https://proregal.de", aspectRatio: 283 / 200, wordmark: "Proregal" },
];

export type Person = {
  name: string;
  byline: string;
  roles: string[];
  image: string;
  linkedin: string;
};

// Photos live in /public/people.
export const speakers: Person[] = [
  {
    name: "Mike Mahlkow",
    byline: "2x YC Founder",
    roles: ["Speaker"],
    image: asset("/people/Mike.jpg"),
    linkedin: "https://www.linkedin.com/in/mikemahlkow/",
  },
  {
    name: "Johanna von der Leyen",
    byline: "CEO & Co-Founder, PangeAI",
    roles: ["Speaker"],
    // Photo from her LinkedIn profile.
    image: asset("/people/Johanna.jpg"),
    linkedin: "https://www.linkedin.com/in/johanna-leyen/",
  },
  {
    name: "Nico Rosberg",
    byline: "F1 World Champion, Founder of Rosberg Ventures",
    roles: ["Speaker"],
    // Photo: Renan Katayama, CC BY-SA 2.0, via Wikimedia Commons
    // ("Nico Rosberg-008 (22964167435).jpg"). Swap for an official headshot when we get one.
    image: asset("/people/Nico.jpg"),
    linkedin: "https://www.linkedin.com/in/nicorosberg/",
  },
  {
    name: "Moritz Stephan",
    byline: "Founder, Hone",
    roles: ["Speaker"],
    // Hone press photo (via trendingtopics.eu).
    image: asset("/people/Moritz.jpg"),
    linkedin: "https://www.linkedin.com/in/moritz-stephan/",
  },
  {
    name: "Leonie Freisinger",
    byline: "CTO & Co-Founder, Dryft",
    roles: ["Speaker"],
    // Photo from dryft.ai/team.
    image: asset("/people/Leonie.jpg"),
    linkedin: "https://www.linkedin.com/in/leonie-freisinger/",
  },
];

// Shows "More speakers to be announced." under the speakers.
export const MORE_SPEAKERS_TBA = true;

// Team, in display order.
export const people: Person[] = [
  {
    name: "Timur Hegwein",
    byline: "Organizer, TUM.ai",
    roles: ["Organizer"],
    image: asset("/people/Timur.jpg"),
    linkedin: "https://www.linkedin.com/in/timur-hegwein-9b2948332/",
  },
  {
    name: "Jakob Liebig",
    byline: "Organizer, TUM.ai",
    roles: ["Organizer"],
    image: asset("/people/Jakob.jpg"),
    linkedin: "https://www.linkedin.com/in/jakob-liebig/",
  },
  {
    name: "Tim Saval",
    byline: "Founder & Investor",
    roles: ["Organizer", "Advisor"],
    image: asset("/people/Tim.jpg"),
    linkedin: "https://www.linkedin.com/in/timsaval/",
  },
  {
    name: "Leonhard Spiegelberg",
    byline: "Chalk",
    roles: ["Organizer"],
    image: asset("/people/Leonhard.jpg"),
    linkedin: "https://www.linkedin.com/in/leonhard-spiegelberg/",
  },
  {
    name: "Luis Schmitz",
    byline: "Headline",
    roles: ["Jury"],
    image: asset("/people/Luis.jpg"),
    linkedin: "https://www.linkedin.com/in/luis-schmitz/",
  },
];

// Universities whose students are joining. Logos in /public/logos/unis (Wikimedia Commons).
export const universities: LogoItem[] = [
  { name: "Technical University of Munich", src: asset("/logos/unis/tum.svg"), href: "https://www.tum.de/en", aspectRatio: 408.16 / 212.47 },
  { name: "UC Berkeley", src: asset("/logos/unis/berkeley.svg"), href: "https://www.berkeley.edu", aspectRatio: 215.125 / 67.59 },
  { name: "Stanford University", src: asset("/logos/unis/stanford.svg"), href: "https://www.stanford.edu", aspectRatio: 640 / 134.11 },
];

// Agenda, Friday 4th to Tuesday 8th, placed on the day slots of the printed
// agenda. `col` is the first slot (1 = morning … 5 = evening), `span` how many
// it covers. Times only where they are fixed. `hack` marks the hackathon bar:
// "start" and "end" get a rounded edge on that side, the overnight cut stays square.
export const agendaSlots = ["Morning", "Lunch", "Afternoon", "Dinner", "Evening"];

// Event types, colour-coded in the agenda. The hackathon itself is `hack`.
export type AgendaKind = "stage" | "visit" | "social";
export const agendaKinds: { kind: AgendaKind | "hack"; label: string }[] = [
  { kind: "hack", label: "Hackathon" },
  { kind: "stage", label: "On stage" },
  { kind: "visit", label: "Office visits & workshops" },
  { kind: "social", label: "Dinners & parties" },
];

export type AgendaItem = {
  title: string;
  kind?: AgendaKind;
  time?: string;
  col: number;
  span?: number;
  hack?: "start" | "end";
  // Moments inside the hackathon bar, e.g. dinner on Saturday.
  inside?: { title: string; col: number }[];
};
export type AgendaDay = { day: string; long: string; items: AgendaItem[] };

export const agenda: AgendaDay[] = [
  { day: "Fri 4", long: "Friday 4", items: [{ title: "Welcome party at Headline HQ in the Presidio", kind: "social", col: 4, span: 2 }] },
  {
    day: "Sat 5",
    long: "Saturday 5",
    items: [
      { title: "Opening ceremony & speakers", kind: "stage", time: "10:00", col: 1 },
      { title: "Challenge presentations", kind: "stage", col: 2 },
      {
        title: "Hacking starts, with tech mentoring",
        time: "13:00",
        col: 3,
        span: 3,
        hack: "start",
        inside: [{ title: "Dinner & side quest", col: 4 }],
      },
    ],
  },
  {
    day: "Sun 6",
    long: "Sunday 6",
    items: [
      { title: "Hacking & tech mentoring", time: "17:00", col: 1, span: 3, hack: "end" },
      { title: "Prize ceremony", kind: "stage", col: 4 },
      { title: "Afterparty", kind: "social", col: 5 },
    ],
  },
  {
    day: "Mon 7",
    long: "Monday 7",
    items: [
      { title: "Office visits & workshops", kind: "visit", col: 2, span: 2 },
      { title: "VC dinner", kind: "social", col: 4 },
    ],
  },
  { day: "Tue 8", long: "Tuesday 8", items: [{ title: "Office visits & workshops", kind: "visit", col: 2, span: 3 }] },
];

// Hackathon challenges. `partner` is the name in `partners` above; null is a
// slot for a partner still to be announced. Challenge and prize stay empty
// until announced.
export type Challenge = { partner: string | null; challenge?: string; prize?: string };
export const challenges: Challenge[] = [
  { partner: "Cognition" },
  { partner: "Modal" },
  { partner: "PangeAI" },
  { partner: null },
];
