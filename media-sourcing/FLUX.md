# Brief B: FLUX 3 generated motion (one colour code)

Read `REQUIREMENTS.md` first. Its encoding, verification and boundary rules still apply, except where this brief overrides them.
Feedback on round 1: the tile clips (observatory, Golden Gate, a candle, the Alps) looked random, and their colours didn't fit together.
This round: **generate** the footage with FLUX 3 so every clip looks like it came from the same film, shot by the same DP on the same day.

## API

- Docs index: https://docs.bfl.ml/llms.txt. Start with `flux_3/flux3_video.md`, `cookbook/video_start_from_images.md`, `api-reference/utility/generate-a-video-with-flux-3.md`, `api-reference/utility/get-result.md`, `quick_start/pricing.md`, and the OpenAPI spec at https://api.bfl.ai/openapi.json.
- The key is in `/home/liebig/Documents/TUM.ai/Summit/.env` as `BFL_API_KEY`. Load it with `set -a; . ./.env; set +a`. **Never print, log, echo or write the key anywhere**, never put it in a file, a command line you show, or your report. Use it only for requests to BFL's own API hosts.
- **Budget:** check the credit balance and the pricing first. Keep total spend under the equivalent of **USD 30**. Work in this order and stop when the budget is reached: pillars → cta → crisis-industry. Report the credits you used.
- Generate silently. Request no audio, or strip it (`-an`).

## Colour code (the style bible: every prompt must carry it)

**Act III, "The Summit" (pillars + CTA): golden-hour hope.** Low sun, warm amber key light (around #C8913A),
cool steel-blue shadows (around #3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35 mm anamorphic,
shallow depth of field, slow and deliberate camera (slow dolly-in or a gentle lateral track), subtle film grain,
restrained saturation. No neon, no pure white, no lens-flare spectacle, no text, no logos, no screens with readable content.
People appear only as silhouettes, out of focus or from behind. No identifiable faces and no real people.

**Act II, "The Decline" (crisis-industry): the cold counterpart.** Overcast, diffuse, desaturated steel blue-grey,
fluorescent light, dust in the air, stillness, the same lens and grain.

Write one fixed **style suffix** and append it verbatim to every Act III prompt, so the look stays locked.

## Slots

| File | Format | Subject (always in the style bible) |
|---|---|---|
| `pillar-talent` | 3:4 portrait, 900×1200, 5–7 s | Early morning in a university robotics lab in Munich: low sun through tall windows, a young engineer seen from behind adjusting a robot arm, dust in the light beams. |
| `pillar-rolemodels` | 3:4, 900×1200, 5–7 s | San Francisco at golden hour: two figures (an older mentor and a younger person) walking up a steep street, seen from behind, the Bay and fog behind them. |
| `pillar-proximity` | 3:4, 900×1200, 5–7 s | A long dinner table in a San Francisco home at golden hour, people in conversation, all out of focus, glasses and warm light, the camera drifting slowly along the table. |
| `pillar-return` | 3:4, 900×1200, 5–7 s | An airplane window at sunrise, descending over the Alps toward Munich, warm light on the wing, haze in the valleys. |
| `cta` | 16:9, 1920×1080, 10–14 s | Dawn over Munich: the Frauenkirche towers and the rooftops, the Alps on the horizon, a slow aerial push-in, the first light. Darker overall (text sits on top). |
| `crisis-industry` | 16:9, 1920×1080, 8–12 s | Act II grade: a vast, empty German factory hall, an idle assembly line, cranes standing still, overcast light through skylights, a very slow push-in. |

## Process

1. **Keyframes first** (cheap): generate 2–3 still variants per slot with FLUX 3 Image. Put them in `media-sourcing/flux/keyframes/` and tile them into a contact sheet with ffmpeg. **Look at the sheet** (Read tool) and pick one frame per slot. The four pillars and the CTA must look like one family: same light, same palette, same lens. Regenerate any outlier.
2. **Image-to-video** from the chosen keyframes, so the look is locked.
3. **One shared grade pass** in ffmpeg: apply the same `colorbalance` / `curves` settings to all Act III clips, so the palettes match exactly. Use a separate cold grade for crisis-industry.
4. Cut seamless loops and encode to the specs and size budgets in `REQUIREMENTS.md` (pillars ≤ 2 MB, cta and crisis-industry ≤ 4 MB). Poster = the first frame.
5. Verify: run the frame checks and ffprobe. Also build **one contact sheet** of a frame from all four pillars plus the CTA side by side, and look at it. Do they read as one film? If not, fix the grade.

## Deliverables

- Files in `public/media/`. Overwriting the existing `pillar-*` and `cta.*` is expected. Don't touch `hero-archive*` or `crisis-exchange*`; another agent owns those.
- Save the exact prompts, the style suffix, the model or endpoint, and the seeds to `media-sourcing/flux/PROMPTS.md`, so the clips can be regenerated.
- Update `media-sourcing/CREDITS.md`: replace the pillar and CTA entries with "Generated with FLUX 3 by Black Forest Labs", add crisis-industry, and remove the old CC entries for the replaced slots.
- Report: slot, delivered or not, the chosen prompt, credits used, file stats, and the path of the final contact sheet.
