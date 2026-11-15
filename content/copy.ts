// All site copy lives here. The only German word on the page is DEUTSCHLAND.

export const copy = {
  meta: {
    title: "TUM.ai SF Summit 2027",
    description:
      "Germany doesn't lack talent. It lacks role models. Every semester, we bring Germany's brightest minds to San Francisco.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://summit.tum-ai.com",
  },

  intro: "A TUM.ai initiative",

  nav: {
    wordmark: "TUM.ai SF Summit 2027",
    cta: "Become a supporter",
  },

  hero: {
    word: "DEUTSCHLAND",
    ariaLabel: "Deutschland, TUM.ai SF Summit 2027",
    scroll: "Scroll",
  },

  crisis: {
    label: "II — The Noise",
    // Shown over the faded DEUTSCHLAND.
    fade: ["Germany won't disappear with a bang.", "It will fade quietly."],
    // The one slide between the fade and the Summit: what this country has done once, and the turn.
    memory: "This country rebuilt itself from rubble.",
    hinge: "It can do it again.",
  },

  summit: {
    label: "III — The Summit",
    title: "TUM.ai SF Summit 2027",
    lines: [
      // **…** renders bold.
      "Germany doesn't lack talent. It lacks **role models.**",
      "Every semester, we bring the next generation of German founders and researchers to San Francisco, to the Germans already building at the frontier. They come back knowing three things: the risk is worth taking, people like them have done it, and what the frontier really looks like. **Germany gets them back.**",
    ],
    // Each pillar carries the finding it rests on (full references in footer.sources).
    pillars: [
      {
        media: "pillar-connect", // bridge into fog
        title: "Risk",
        text: "Germany trains brilliant engineers and too few founders. Here they meet people who left the safe path, and see that it worked.",
        source: "",
      },
      {
        media: "pillar-exposure", // lit doorway
        title: "Proof",
        text: "Germans who built companies, labs and funds in San Francisco. Not a success story from a podcast: a person across the table, who started where they did.",
        source: "Bell, Chetty et al., QJE 2019",
      },
      {
        media: "pillar-forward", // runway to the horizon
        title: "Frontier",
        text: "Not in a lecture, years late. In the offices, labs and dinners where the frontier is being built, this year.",
        source: "",
      },
      {
        media: "pillar-gather", // wakes meeting at one light
        title: "Return",
        text: "They don't stay. They come home with ambition, a network and proof, and start building in Germany.",
        source: "Coluccia & Dossi, 2025",
      },
    ],
  },

  about: {
    title: "Who we are",
    body: [
      "TUM.ai is where Germany's next founders and researchers come from: the top 1% of the country's best university, and Europe's largest student AI initiative. Our members win international hackathons and publish at NeurIPS and ICML. The companies they found have already raised more than €10M, backed by YC, Neo and a16z.",
    ],
    closer: "Now we're bringing that talent density to San Francisco. For the first time.",
    // From the TUM.ai partner deck (2026) and tum-ai.com. "Top 1%": ~150 active members vs ~52,000 TUM students.
    proof: [
      { value: "2.3%", label: "Accepted, out of 2,100+ applications per batch.", todo: false },
      { value: "2 × YC", label: "Teams from our incubator that went straight into Y Combinator.", todo: false },
      { value: "1,000+", label: "Members and alumni, at Germany's #1 university.", todo: false },
      { value: "$100K", label: "Google's first check, written in 1998 by Andy Bechtolsheim, who studied at TUM.", todo: false },
    ],
  },

  supporters: {
    label: "IV — The People",
    title: "The people define us.",
    lead: "Germans who took the risk. They founded companies, back the next ones and build at the frontier in San Francisco. They are the perspective Germany needs.",
    partnersTitle: "Backed by",
  },

  cta: {
    lines: ["Someone once showed you it’s possible.", "Be that someone."],
    primary: "Become a supporter",
    secondary: "Partner with us",
    email: "partners@tum-ai.com",
    supporterSubject: "Becoming a supporter of the TUM.ai SF Summit 2027",
    supporterBody:
      "Name:\nCompany:\nHow I want to help (speak / host / mentor / fund):\n",
    partnerSubject: "Partnering with the TUM.ai SF Summit 2027",
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
      "A. Bell, R. Chetty et al., “Who Becomes an Inventor in America? The Importance of Exposure to Innovation”, QJE, 2019.",
      "M. Prato, “The Global Race for Talent: Brain Drain, Knowledge Transfer, and Growth”, QJE, 2025.",
      "D. M. Coluccia, G. Dossi, “Return Innovation: The Knowledge Spillovers of the British Migration to the United States, 1870–1940”, CEP Discussion Paper 2069, 2025.",
      "M. Erlinghagen et al., German Emigration and Remigration Panel Study (GERPS), BiB / University of Duisburg-Essen.",
    ],
    // Keep in sync with media-sourcing/CREDITS.md.
    credits: [
      "Motion imagery generated with FLUX 3 by Black Forest Labs: the four pillars, the closing scene, and the opening montage except its two 1989/90 archive shots and the car footage. The city, landscape and hammer shots are dramatizations, not documentary footage.",
      "Car footage: “Two Porsche 911 Targa driving as viewed from FPV drone” © SE FPV, CC BY 3.0, via Wikimedia Commons.",
      "Archive footage: Hans Peter Ruben and Heide Breitel, “Wir waren so frei” (Deutsche Kinemathek / bpb), CC BY-SA 3.0 DE.",
      "Cropped, recoloured and re-edited. Edited clips are shared under the same CC BY-SA licences.",
    ],
  },
} as const;
