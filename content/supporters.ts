// Real people and partners only (source: summit.tum-ai.com). Never fabricate names, faces or quotes.
// `quote` is optional and shown only when a real, approved quote exists.

export type Person = { name: string; role: string; tag: string; image?: string; href?: string; quote?: string };
/** `ratio`: logo width / height, used to size every logo to the same visual weight.
 *  `lockup`: icon-only mark, shown with the name next to it (as on the company's own site). */
export type Partner = { name: string; logo: string; ratio: number; lockup?: boolean; href?: string };

export const people: Person[] = [
  { name: "Leonhard Spiegelberg", role: "Chalk", tag: "Speaker", image: "/people/leonhard.jpg", href: "https://github.com/sfc-gh-lspiegelberg" },
  { name: "Tim Saval", role: "Founder & Investor", tag: "Advisor", image: "/people/tim.jpg", href: "https://www.linkedin.com/in/timsaval/" },
  // Hidden for now; uncomment to bring back.
  // { name: "Mike Mahlkow", role: "Founder & Investor", tag: "Advisor", image: "/people/mike.jpg", href: "https://www.linkedin.com/in/mikemahlkow/" },
  { name: "Luis Schmitz", role: "Headline", tag: "Jury", image: "/people/luis.jpg", href: "https://www.linkedin.com/in/luis-schmitz/" },
  { name: "Jakob Liebig", role: "TUM.ai", tag: "Organizer", image: "/people/jakob.jpg", href: "https://www.linkedin.com/in/jakob-liebig/" },
  { name: "Timur Hegwein", role: "TUM.ai", tag: "Organizer", image: "/people/timur.jpg", href: "https://www.linkedin.com/in/timur-hegwein-9b2948332/" },
];

export const partners: Partner[] = [
  { name: "OpenAI", logo: "/logos/openai.svg", ratio: 928 / 308, href: "https://openai.com" },
  { name: "Antler", logo: "/logos/antler.svg", ratio: 117 / 28, href: "https://antler.co" },
  { name: "Modal", logo: "/logos/modal.svg", ratio: 187 / 35.06, href: "https://modal.com" },
  { name: "Cognition", logo: "/logos/cognition.svg", ratio: 1, lockup: true, href: "https://cognition.ai" },
  { name: "Headline", logo: "/logos/headline.svg", ratio: 217 / 378, lockup: true, href: "https://headline.com" },
];
