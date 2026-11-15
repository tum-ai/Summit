# TUM.ai SF Summit

Single-page site, Next.js (App Router, static export) + Tailwind v4 + GSAP ScrollTrigger + Lenis.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out (Vercel, GitHub Pages, any static host)
npm start          # serve ./out locally
```

GitHub Pages under a sub-path: `NEXT_PUBLIC_BASE_PATH=/repo-name npm run build`.
Set `NEXT_PUBLIC_SITE_URL=https://your-domain` so OG image URLs are absolute.

## Media

Drop files into `public/media/` with exactly these names, then rebuild. No code changes.
Media detection runs at build time (`lib/media.ts`); anything missing falls back to a designed placeholder.

```
hero-archive.mp4 / .webm / .jpg     B/W archive loop + poster (plays at 0.75x)
pillar-gather.mp4 / .webm / .jpg
pillar-connect.mp4 / .webm / .jpg
pillar-exposure.mp4 / .webm / .jpg
pillar-forward.mp4 / .webm / .jpg
cta.mp4 / .webm / .jpg              optional
```

Sourcing and encoding specs: `media-sourcing/REQUIREMENTS.md`. Licences of sourced clips: `media-sourcing/CREDITS.md`.
Keep the footer credits (`content/copy.ts` → `footer.credits`) in sync with what is actually used.

## Edit content

- All copy: `content/copy.ts`
- Supporters and partner logos: `content/supporters.ts` (images go in `public/`, e.g. `public/supporters/name.jpg`)
- Impressum / Datenschutz: `app/impressum/page.tsx`, `app/datenschutz/page.tsx`
- Colours, grain, letterbox, placeholders: `app/globals.css`

Everything marked `[TODO]` is a placeholder. In `npm run dev` it is outlined with a dashed ember line.

## How the film works

- `components/Hero.tsx`: sticky 300svh scene. One scrubbed GSAP timeline: letterbox opens, camera pushes in, letters decay in a seeded order, footage dissolves to paper. Scrolling back reverses it.
- `components/Chrome.tsx`: `Motion` runs Lenis, title-card reveals (`data-reveal`), count-ups (`data-count`), the light-up (`data-light`) and the scene colour. Each section has `data-scene="ink|paper"`; when it crosses mid-viewport the page colour dissolves over 1.4s (a cut, not a scroll gradient).
- `components/CTA.tsx`: the letterbox closes as the final line lands.
- Intro title card: first visit per session, CSS-timed (`globals.css`, `.intro`), skipped by any input.
- `prefers-reduced-motion`: no scrubs, no autoplay, no Lenis, no intro; hero shows a partially faded word.
