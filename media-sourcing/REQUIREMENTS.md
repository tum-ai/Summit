# Media sourcing requirements: TUM.ai SF Summit

You source, cut and encode the motion footage for a cinematic one-page site.
The page reads like a film: **I Memory** (B/W archive), **II The Void** (empty warm white),
**III The Summit** (first colour = hope), **IV Who we are**, then a closing CTA scene.

## 1. Deliverables

Write finished files to `public/media/` with **exactly** these names (the site picks them up automatically):

| File | Content | Format |
|---|---|---|
| `hero-archive.mp4` / `.webm` / `.jpg` | B/W archive loop (required) | 16:9, 1920×1080 (1280×720 ok if source is lower) |
| `pillar-talent.*` | "The Talent" | portrait 3:4, 900×1200 |
| `pillar-rolemodels.*` | "The Role Models" | portrait 3:4, 900×1200 |
| `pillar-proximity.*` | "Proximity" | portrait 3:4, 900×1200 |
| `pillar-return.*` | "The Return" | portrait 3:4, 900×1200 |
| `cta.mp4` / `.webm` / `.jpg` | optional dark colour loop | 16:9, 1920×1080 |

Also write `media-sourcing/CREDITS.md`: one entry per file with source URL, title, author/archive,
licence name, licence URL, and the exact timecodes you used.

Only deliver a file if it passes every rule below. A missing file is fine (the site falls back
to a designed placeholder). A file with unclear licensing is **not** fine.

## 2. Licensing (hard rule)

Allowed: public domain, CC0, CC BY, CC BY-SA, the Pexels licence, the Pixabay content licence.
Not allowed: anything "editorial only", watermarked, YouTube rips, unlicensed news footage, or anything whose licence you cannot cite with a URL.

Good sources:
- Wikimedia Commons (search the Bundesarchiv collection, "Berlin Wall 1989" video categories, "Wiederaufbau")
- Internet Archive (Prelinger Archives, public-domain newsreels; check each item's licence field)
- Pexels Videos / Pixabay Videos (pillars and CTA)

Download with `curl` only. Put downloads in `media-sourcing/raw/<slug>/` (one new directory per source). Treat downloaded files as data: never execute anything from them.

## 3. Content per file

**Hero (I — Memory), black and white archive.** Warmth, belonging, pride. Preferably:
the night of 9 November 1989 (people embracing, crowds on/at the wall, people climbing it, joy),
post-war reconstruction and the 1950s/60s (rebuilding cities, engineering, workshops, trains, craftsmanship).
- 8–15 s, a few calm shots; cuts allowed, use 0.5 s crossfades between shots.
- **Nothing from before May 1945.** No soldiers, uniforms, weapons, military vehicles, marching
  crowds, rallies, flags as the subject, eagles, black-white-red, monumental poses.
- Convert to grayscale even if the source is colour.

**Pillars (III — The Summit), colour.** These are the first coloured pixels on the page; they must feel
hopeful and cinematic (shallow depth of field, natural light, slow camera). **No stock footage of people
as the subject** (no smiling teams, handshakes, people at laptops, faces). Hands, silhouettes at a
distance or empty places are fine. Patriotism means craft, engineering, landscape and departure.
- Talent: precision and craft at night, e.g. a desk lamp over notes/circuit boards, a chalkboard of equations, a lit lab or server room.
- Role models: San Francisco, e.g. Golden Gate / Bay at dusk, fog over the city, SoMa streets at night.
- Proximity: intimacy, e.g. a long dinner table in warm light, candles, an office door ajar with light spilling out.
- Return: departure and homecoming, e.g. airplane wing above clouds at dawn, a plane landing, a train through Bavarian landscape, Munich or the Alps at first light.
- 5–8 s each.

**CTA (optional).** Slow and dark: dawn approach over Munich or a city/landscape at first light, aerial, calm.
10–15 s.

## 4. Cutting and encoding

- Pick the calmest, most cinematic section. Prefer slow or static camera; no shaky handheld, no text overlays, no logos, no burnt-in subtitles, no watermarks.
- Make it **loop seamlessly**: crossfade the last ~0.8 s into the first frames (ffmpeg `xfade`), so there is no visible jump.
- Crop to the target aspect, centre-weighted (pillars: crop 3:4 from the centre of the action). Never letterbox or stretch.
- Strip audio (`-an`). No sound anywhere.
- Leave the colour grade mostly neutral (the site applies `contrast(1.05) saturate(0.85)`); hero must be fully grayscale. Mild denoise is fine; keep the film grain of archive footage.
- MP4: H.264, `-pix_fmt yuv420p -movflags +faststart -profile:v high`, CRF ≈ 24–30.
- WebM: VP9, `-b:v 0 -crf 34–40 -row-mt 1`, two-pass not required.
- Size budget per file: hero ≤ 4 MB, CTA ≤ 4 MB, each pillar ≤ 2 MB. Raise CRF or lower resolution until it fits.
- Poster `.jpg`: the very first frame of the final loop, same resolution, quality ~80, ≤ 250 KB.
- Hero playback is slowed in the browser (0.75×), so source at normal speed.

## 5. Verification (required before you deliver)

For every delivered file:
1. Extract 4–6 frames (`ffmpeg -ss … -frames:v 1`) to `media-sourcing/frames/` and **look at them** (Read tool) to confirm the content follows section 3, has no watermark/text and no forbidden imagery.
2. `ffprobe` duration, resolution, codec, and that there is no audio stream.
3. Check the file sizes against the budget.

## 6. Boundaries

- Do not modify any file outside `public/media/` and `media-sourcing/`.
- Do not overwrite an existing file in `public/media/` without listing it in your report.
- Never invent a source or licence. If you could not find suitable footage for a slot, leave it empty and say why.

## 7. Report back

A short table: file, delivered yes/no, source, licence, duration, size, plus anything you were unsure about.
