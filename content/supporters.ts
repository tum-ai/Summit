// Real people and partners only (source: summit.tum-ai.com). Never fabricate names, faces or quotes.
// `quote` is optional and shown only when a real, approved quote exists.

export type Person = { name: string; role: string; tag: string; image?: string; href?: string; quote?: string };
export type Partner = { name: string; logo?: string; href?: string };

export const people: Person[] = [
  { name: "Hamze Al-Zamkan", role: "Founder, Tenor", tag: "Speaker", image: "/people/hamze.jpg", href: "https://www.linkedin.com/in/hamze-al-zamkan/" },
  { name: "Tim Saval", role: "Founder & Investor", tag: "Advisor", image: "/people/tim.jpg", href: "https://www.linkedin.com/in/timsaval/" },
  { name: "Mike Mahlkow", role: "Founder & Investor", tag: "Advisor", image: "/people/mike.jpg", href: "https://www.linkedin.com/in/mikemahlkow/" },
  { name: "Luis Schmitz", role: "Headline", tag: "Jury", image: "/people/luis.jpg", href: "https://www.linkedin.com/in/luis-schmitz/" },
  { name: "Jakob Liebig", role: "TUM.ai", tag: "Organizer", image: "/people/jakob.jpg", href: "https://www.linkedin.com/in/jakob-liebig/" },
  { name: "Timur Hegwein", role: "TUM.ai", tag: "Organizer", image: "/people/timur.jpg", href: "https://www.linkedin.com/in/timur-hegwein-9b2948332/" },
];

export const partners: Partner[] = [
  { name: "OpenAI", logo: "/logos/openai.svg", href: "https://openai.com" },
  { name: "Antler", logo: "/logos/antler.svg", href: "https://antler.co" },
  { name: "Modal", logo: "/logos/modal.svg", href: "https://modal.com" },
  { name: "Cognition", logo: "/logos/cognition.svg", href: "https://cognition.ai" },
  { name: "Headline", logo: "/logos/headline.svg", href: "https://headline.com" },
  { name: "Tenor", logo: "/logos/tenor.svg", href: "https://heytenor.com" },
];
