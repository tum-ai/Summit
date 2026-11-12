// All site copy lives here. The only German word on the page is DEUTSCHLAND.

export const copy = {
  meta: {
    title: "TUM.ai SF Summit",
    description:
      "Germany doesn't lack talent. It lacks role models. Every semester, we bring Germany's brightest minds to San Francisco.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://summit.tum-ai.com",
  },

  intro: "A TUM.ai initiative",

  nav: {
    wordmark: "TUM.ai SF Summit",
    cta: "Become a supporter",
  },

  hero: {
    label: "I — Memory",
    word: "DEUTSCHLAND",
    ariaLabel: "Deutschland, TUM.ai SF Summit",
    scroll: "Scroll",
  },

  crisis: {
    label: "II — The Noise",
    declineLabel: "II — The Decline",
    // Shown over the faded DEUTSCHLAND.
    fade: ["Germany won't disappear with a bang.", "It will fade quietly."],
    gdp: {
      line: "Germany's entire real growth since 2017.",
      sub: "Eight years. A country standing still.",
    },
    data: {
      eu: 6,
      line: "of the world's AI venture capital goes to the EU.",
      sub: "The technology that will decide the next fifty years is being financed somewhere else.",
      source: "OECD, 2025",
    },
    industry: ["The industries that made Germany rich are going quiet.", "Too little is being built to replace them."],
    // Why it matters: what this country has already done once.
    memory: ["This country rebuilt itself from rubble.", "It gave the world the automobile, the printing press and the theory of relativity."],
    hinge: "It can do it again.",
  },

  summit: {
    label: "III — The Summit",
    title: "TUM.ai SF Summit",
    lines: [
      "Germany doesn't lack talent. It lacks role models.",
      "Every semester, we fly its brightest young minds to San Francisco to meet them. Not to stay. To come back.",
    ],
    pillars: [
      {
        media: "pillar-talent",
        title: "The Talent",
        text: "Germany's hidden gems. Hackathon winners, published researchers, future founders.",
      },
      {
        media: "pillar-rolemodels",
        title: "The Role Models",
        text: "Germans who built it in San Francisco, and remember where they started.",
      },
      {
        media: "pillar-proximity",
        title: "Proximity",
        text: "Not keynotes. Dinners, office doors, one-on-ones.",
      },
      {
        media: "pillar-return",
        title: "The Return",
        text: "Ambition, a network and proof that it can be done. Brought home.",
      },
    ],
  },

  about: {
    label: "V — Who we are",
    title: "Who we are",
    body: [
      "TUM.ai is the student AI initiative of the Technical University of Munich. Our members win international hackathons, publish at top AI venues and go on to Jane Street, Optiver, Big Tech and Europe's fastest-growing startups.",
    ],
    closer: "We don't wait for the ecosystem to change. We build it.",
    // From summit.tum-ai.com. Members count still missing.
    proof: [
      { value: "115", label: "Start-ups founded at TUM in 2025. A new record.", todo: false },
      { value: "$100K", label: "Google's first check, written in 1998 by TUM alumnus Andy Bechtolsheim.", todo: false },
      { value: "ICML · ICLR", label: "Where our members publish, with MIT, Cambridge and IBM.", todo: false },
      { value: "[TODO]", label: "[TODO: # members]", todo: true },
    ],
  },

  supporters: {
    label: "IV — The People",
    title: "The people define us.",
    lead: "Speakers, advisors, jury and organisers. The Summit is whoever is in the room, and these are the people who open the doors.",
    partnersTitle: "Partners",
  },

  cta: {
    lines: ["Someone once opened a door for you.", "Hold it open for the next generation."],
    primary: "Become a supporter",
    secondary: "Partner with us",
    email: "partners@tum-ai.com",
    supporterSubject: "Becoming a supporter of the TUM.ai SF Summit",
    supporterBody:
      "Name:\nCompany:\nHow I want to help (speak / host / mentor / fund):\n",
    partnerSubject: "Partnering with the TUM.ai SF Summit",
  },

  footer: {
    links: [
      { label: "TUM.ai", href: "https://www.tum-ai.com" },
      { label: "Research", href: "https://www.tum-ai.com/research" },
      { label: "E-Lab incubator", href: "https://www.tum-ai.com/e-lab" },
      { label: "European Hackathon League", href: "https://ehl.gg" },
      { label: "partners@tum-ai.com", href: "mailto:partners@tum-ai.com" },
      // TODO: Instagram, LinkedIn
    ],
    legal: [
      { label: "Impressum", href: "https://www.tum-ai.com/imprint" },
      { label: "Datenschutz", href: "/datenschutz/" },
    ],
    sources: [
      "OECD, AI venture capital data, 2025.",
      "IMF, World Economic Outlook database, real GDP growth (2025 values are estimates).",
      "M. Draghi, The Future of European Competitiveness, 2024.",
      "A. Bell, R. Chetty et al., “Who Becomes an Inventor in America? The Importance of Exposure to Innovation”, QJE, 2019.",
    ],
    // Keep in sync with media-sourcing/CREDITS.md.
    credits: [
      "Motion imagery generated with FLUX 3 by Black Forest Labs: the Summit, factory and closing scenes, and the opening montage except its two 1989/90 archive shots and the car footage. The city, landscape and hammer shots are dramatizations, not documentary footage.",
      "Car footage: “Two Porsche 911 Targa driving as viewed from FPV drone” © SE FPV, CC BY 3.0, via Wikimedia Commons.",
      "Archive footage: Hans Peter Ruben and Heide Breitel, “Wir waren so frei” (Deutsche Kinemathek / bpb), CC BY-SA 3.0 DE.",
      "“5k-resolution video of Frankfurt” © #Reaper, CC BY-SA 3.0, via Wikimedia Commons.",
      "Cropped, recoloured and re-edited. Edited clips are shared under the same CC BY-SA licences.",
    ],
  },
} as const;
