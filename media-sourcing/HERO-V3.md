# Brief C: hero montage v3 (sharper archive + two generated POV shots)

Base rules: `REQUIREMENTS.md`. FLUX API handling, key safety and the grade recipe: `FLUX.md` and `flux/PROMPTS.md`.
The current hero (`ARCHIVE.md`, round 2) is too pixelated: the 1989/90 sources are 448×336 and the NARA copies are SD.
The raw sources are still in `media-sourcing/raw/` (see `CREDITS.md` for which file and timecode each shot uses).

## 1. Upscaling: skipped (owner's decision)

Don't download or install any upscaler, and don't use the FLUX upscale endpoint. The archive shots stay at their source quality.
To hide the softness: keep each archive shot short (2–2.5 s), favour the sharpest source segments, and scale with lanczos plus a mild unsharp mask, with grain on top. Let the sharp POV shots carry more screen time.

## 2. Two generated POV shots (FLUX 3: keyframe → image-to-video, fhd)

These are cinematic dramatizations, inspired in *camera language* (not copied) by game-trailer and feature-film POV sequences. **No identifiable faces, no logos or brand marks, no weapons.**

- **`hammer`** (4–5 s): first-person POV. A gloved hand and a heavy hammer are clearly visible in the foreground, swinging into the graffiti-covered Berlin Wall at night in November 1989. Concrete chips fly in slow motion, and crowd lights and torches are blurred behind the Wall. The camera shakes with the impact, and the final hit cracks the concrete.
- **`conveyor`** (5–6 s): macro POV, locked onto a single object riding a conveyor belt through a 1960s West German car factory. A freshly machined steel piston (or a gear) moves through stations: milling sparks, an inspection under an industrial lamp by gloved hands, a stamping press, then out into a long hall of assembly lines. It is a smooth tracking shot with the object always sharp. No brand names.

Style: 1960s/1989 period, but shot sharp on modern glass. Then grade it with the **same period look as the montage** (lifted blacks, saturation ~0.65, warm, grain) so it cuts in seamlessly. Keyframes first (2–3 variants each, contact sheet, look at it), then video. **Check the credit balance before every video call.** If it can't cover the call, stop after the keyframes and report how many credits are needed.

## 3. Re-cut `hero-archive.mp4 / .webm / .jpg`

The order tells one story (memory, building, freedom):
Ruhr 1948 → rubble cleared → **conveyor POV** → rebuilt Hansaviertel → crowd at the Wall → **hammer POV** → Mauerspecht close-up → climbing the Wall → Reichstag 1990 (keep this, and its flags remain background only).
Most shots run 2.5–3.5 s; the POV shots may run 4–5 s. Hard cuts on impacts (the hammer hit), short dissolves elsewhere, and the end loops into the start. 28–34 s.
Output: 1920×1080, mp4 ≤ 8 MB, webm ≤ 6 MB, poster = the first frame, no audio. Overwrite the current `hero-archive.*`.

## Deliverables

- Report: the POV keyframes and the chosen ones; credits used and the balance left; file stats.
- Update `flux/PROMPTS.md` with the POV prompts. Update `CREDITS.md`: the hero entry gets "includes two AI-generated dramatized POV shots (FLUX 3)".
- Don't touch any file other than `hero-archive.*` in `public/media/`.
