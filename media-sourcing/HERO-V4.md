# Brief D: hero montage v4 (cars, scenic cities, shorter shots, colour only)

Base rules: `REQUIREMENTS.md` (licensing, encoding, verification). FLUX handling, key safety and the period grade: `FLUX.md` and `flux/PROMPTS.md`.
Build tools from v3: `/tmp/claude-1000/-home-liebig-Documents-TUM-ai-Summit/e7b1b111-32cf-42ed-9bee-5ec0b55d2a40/scratchpad/v3/` (`assemble.py`, `prep.sh`, the prepared shots `a5_crowd.mp4`, `a7_chisel.mp4`, `a8_climb.mp4`, `a9_reichstag.mp4`, `p_conveyor.mp4`, `p_hammercam.mp4`).

## Owner feedback
- **No black-and-white footage at all.** Monochrome archive footage of Germany is too easily read as the wrong era. Colour only. (The 1946/1961 B/W shots are already out.)
- **Add cars and scenic views of German cities.**
- **Make each shot a little shorter.** Just trim the length.

## New shots

**Scenic cities: real footage first** (Wikimedia Commons or other CC BY / CC BY-SA / CC0 / public domain sources, same licensing rules as before). Colour, calm, cinematic, ideally aerial, timelapse or golden hour. Aim for 3–4 different cities, for example:
- Hamburg: the Elbphilharmonie and the harbour
- Cologne: the cathedral and the Rhine
- Munich: the Frauenkirche, or the Alps behind the city
- Berlin: the Brandenburg Gate or the Spree today
- Heidelberg or the Rhine valley
- Dresden: the Frauenkirche

Reject anything with watermarks, burnt-in text, shaky phone footage or very low resolution (below 720p). If a city can't be found with a clean licence, generate it with FLUX 3 instead: text-to-video, a cinematic establishing shot, no people in focus.

**Cars: generate with FLUX 3** (fhd, 4–5 s each, image-to-video from a chosen keyframe). 2–3 shots that make German automotive engineering feel heroic. Generic classic and modern German-style cars; **no logos, badges or readable brand marks, no licence plates with real text.** For example:
- a low tracking shot of a classic 1960s/70s coupé on an empty Autobahn at golden hour
- a car carving through Alpine hairpins seen from a drone
- a macro sweep along freshly painted bodywork on a factory line
Keyframes first (2 variants each, look at a contact sheet), then video. Check the credit balance before every paid call. **Spend at most USD 7.**

## Cut

- **Every shot gets shorter:** archive shots about 1.8–2.0 s, POV and car shots about 2.5–3.5 s, city shots about 2.0–2.5 s.
  - Trim the hammer-cam from its **start**, so the hard cut still lands on the impact.
  - Trim the conveyor to its strongest stretch (the piston with sparks).
- **Story order (adjust if it flows better):** a city establishing shot → car → conveyor → city → car → crowd at the Wall → hammer-cam (hard cut on impact) → chisel → climbing the Wall → Reichstag 1990 → city at dusk, which loops back to the start.
- 22–28 s total, one period colour grade across everything (lifted blacks, warm, saturation ~0.65–0.75, the same grain and vignette), short dissolves, and hard cuts on impacts.
- Output: overwrite `public/media/hero-archive.mp4 / .webm / .jpg`. 1920×1080, mp4 ≤ 8 MB, webm ≤ 6 MB, no audio, poster = the first frame.

## Deliverables
- Look at a contact sheet of the final montage (one frame per second) before delivering, plus the loop seam and the hammer cut.
- Update `CREDITS.md` (small edits): new city sources with licence and timecodes, the car shots marked FLUX-generated, and a footer attribution line naming any new CC BY / CC BY-SA authors. Add the car prompts to `flux/PROMPTS.md`.
- Report: a shot list (source, licence, duration), credits used and the balance left, file stats, and the contact-sheet path.
- Only touch `public/media/hero-archive.*` and files under `media-sourcing/` (plus your own scratch dir). Don't download or install any software. ffmpeg, curl and python3 are already there.
