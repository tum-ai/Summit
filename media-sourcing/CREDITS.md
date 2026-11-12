# Media credits

All files in `public/media/` were cut, cropped, re-encoded and stripped of audio
from the sources below. Entries marked "Generated with FLUX 3" contain no third-party footage; for every other source the licence and author are copied from the
source page's metadata. Each loop is built from the source timecodes listed, joined with 0.5 s crossfades, then
looped by crossfading the last 0.8 s into the opening frames.

## hero-archive.mp4 / .webm / .jpg
Montage of 12 colour shots (v4, 27.6 s loop, 1920×1080, no audio). 10 shots are generated with FLUX 3 by Black Forest Labs
(https://api.bfl.ai; prompts and task ids in `media-sourcing/flux/PROMPTS.md`), the 2 real archive shots are the CC BY-SA entries 8 and 9 below.
Every shot is slowed to 0.85× with frame blending (hammer-cam 0.9×) and gets a slow 1.00 → 1.04 push-in (not the hammer-cam); the archive shots
are deinterlaced, stabilised (vidstab), cropped from 4:3 to 16:9 with a slight zoom, lightly denoised and scaled with lanczos (no AI upscaling).
One filmic grade over the whole montage: S-curve with lifted blacks and soft highlight roll-off, warm highlights / cool shadows, saturation 0.8,
warm highlight halation blended in RGB, fine grain and a soft vignette. 8-frame (0.32 s) dissolves, hard cuts into and out of the hammer-cam
(the cut out lands on the impact); the last shot dissolves back into the first.
Order (output duration; source timecodes): 
1. North Sea, lighthouse on the Sylt dunes (2.4 s; generated `coast-northsea.mp4` 00:01.60–00:03.64, text-to-video)
2. Hamburg, Elbphilharmonie and harbour (2.4 s; generated `city-hamburg.mp4` 00:00.30–00:02.34, text-to-video)
3. Car: Porsche 911 Targa across golden fields (2.6 s, real footage, slowed to 0.5x; source 01:09.0–01:10.4). "Two Porsche 911 Targa driving as viewed from FPV drone" by SE FPV, CC BY 3.0, https://commons.wikimedia.org/wiki/File:Two_Porsche_911_Targa_driving_as_viewed_from_FPV_drone.webm (from YouTube; Commons licence review still pending)
4. POV conveyor, piston and sparks (3.0 s; generated `pov-conveyor.mp4` 00:00.20–00:02.75)
5. Cologne, cathedral across the Rhine (2.4 s; generated `city-koeln.mp4` 00:01.40–00:03.44, text-to-video)
6. (removed: the S-curve car shot is no longer used; Cologne now cuts straight into the hammer-cam)
7. POV hammer-cam at the Wall (2.88 s; generated `pov-hammercam.mp4` 00:02.08–00:04.67, ends on the impact)
8. People climbing the Wall at the Brandenburg Gate, 25 Dec 1989 (1.8 s; entry 8 below, 02:05.30–02:06.83)
9. (removed: the top-down car shot is no longer used)
10. Munich, Frauenkirche at blue hour (2.4 s; generated `city-muenchen.mp4` 00:00.10–00:02.14, text-to-video)
11. Crowd with flags at the Reichstag, 3 Oct 1990 (2.3 s; entry 9 below, 03:14.30–03:16.26)
12. Alps flyover, Wetterstein ridge at golden hour (2.5 s; generated `alps-flyover.mp4` 00:00.30–00:02.43, text-to-video)
- The generated shots are dramatizations, not historical or documentary footage. The three car shots are real footage (SE FPV, CC BY 3.0); the generated car clips are no longer used.
- Real city footage was searched on Wikimedia Commons first; candidates were rejected for watermarks (DW "Daily Drone", BAYERN 1), a licence conflict
  (Hamburg timelapse: Commons says CC BY 3.0, its end card says CC BY-NC-SA), burnt-in text, handheld shake, or flat midday light, so no new third-party footage is used.
Timecodes refer to the wir-waren-so-frei.de video files linked. The 1989/90 material is CC BY-SA 3.0 DE, so **this derivative is shared under CC BY-SA 3.0 DE**.

Real footage used:
- Shot 8: Berlin, people climbing onto the Wall at Brandenburg Gate, 25 Dec 1989, colour. "Berlin... after the Fall of the Wall (9 Nov. 1989). 25 December 1989",
  Hans Peter Ruben, Wir waren so frei (Deutsche Kinemathek / bpb), https://wir-waren-so-frei.de/index.php/Detail/Object/Show/object_id/5360.
  CC BY-SA 3.0 DE, https://creativecommons.org/licenses/by-sa/3.0/de/. Timecode 02:05.30–02:06.83.
- Shot 11: Berlin, crowd in front of the Reichstag on the night of reunification, 3 Oct 1990, colour. "Der Tag der Deutschen Einheit",
  Heide Breitel, Wir waren so frei, https://wir-waren-so-frei.de/index.php/Detail/Object/Show/object_id/4290. CC BY-SA 3.0 DE. Timecode 03:14.30–03:16.26.

## crisis-exchange.mp4 / .webm / .jpg
- Source: https://commons.wikimedia.org/wiki/File:5k-resolution_video_of_Frankfurt,_Germany_2014-02-02.webm
- Title: "5k-resolution video of Frankfurt, Germany 2014-02-02" (Frankfurt skyline over the Main, seen from the Deutschherrnbrücke)
- Author: #Reaper (Wikimedia Commons user Reaper35)
- Licence: CC BY-SA 3.0, https://creativecommons.org/licenses/by-sa/3.0. This derivative is shared under CC BY-SA 3.0.
- Timecodes used: 00:06.0–00:16.8 (loop = 00:06.8–00:16.8, its last 0.8 s crossfaded into 00:06.0–00:06.8)
- Changes: cropped 5120×2700 → 16:9 (centre), scaled to 1920×1080, cold grade (saturation 0.35, steel-blue balance, low contrast), light grain, no audio.

## pillar-talent.mp4 / .webm / .jpg
- Generated with FLUX 3 by Black Forest Labs (FLUX 3 Image keyframe + FLUX 3 Video image-to-video, https://api.bfl.ai). No third-party footage.
- Subject: robotics lab in Munich at early morning, engineer seen from behind. Prompts, task ids and grade: `media-sourcing/flux/PROMPTS.md`.
- Timecodes used: generated clip 00:00.0–00:06.0 (loop = 00:00.8–end, crossfaded into 00:00.0–00:00.8)
- Changes: scaled/cropped to 900×1200, shared Act III grade, no audio.

## pillar-rolemodels.mp4 / .webm / .jpg
- Generated with FLUX 3 by Black Forest Labs (FLUX 3 Image keyframe + FLUX 3 Video image-to-video, https://api.bfl.ai). No third-party footage.
- Subject: two figures walking up a San Francisco street at golden hour, seen from behind. Prompts, task ids and grade: `media-sourcing/flux/PROMPTS.md`.
- Timecodes used: generated clip 00:00.0–00:06.0 (loop = 00:00.8–end, crossfaded into 00:00.0–00:00.8)
- Changes: scaled/cropped to 900×1200, shared Act III grade, no audio.

## pillar-proximity.mp4 / .webm / .jpg
- Generated with FLUX 3 by Black Forest Labs (FLUX 3 Image keyframe + FLUX 3 Video image-to-video, https://api.bfl.ai). No third-party footage.
- Subject: long dinner table at golden hour, guests out of focus. Prompts, task ids and grade: `media-sourcing/flux/PROMPTS.md`.
- Timecodes used: generated clip 00:00.0–00:06.0 (loop = 00:00.8–end, crossfaded into 00:00.0–00:00.8)
- Changes: scaled/cropped to 900×1200, shared Act III grade, no audio.

## pillar-return.mp4 / .webm / .jpg
- Generated with FLUX 3 by Black Forest Labs (FLUX 3 Image keyframe + FLUX 3 Video image-to-video, https://api.bfl.ai). No third-party footage.
- Subject: airplane window at sunrise over the Alps. Prompts, task ids and grade: `media-sourcing/flux/PROMPTS.md`.
- Timecodes used: generated clip 00:00.0–00:06.0 (loop = 00:00.8–end, crossfaded into 00:00.0–00:00.8)
- Changes: scaled/cropped to 900×1200, shared Act III grade, no audio.

## cta.mp4 / .webm / .jpg
- Generated with FLUX 3 by Black Forest Labs (FLUX 3 Image keyframe + FLUX 3 Video image-to-video, https://api.bfl.ai). No third-party footage.
- Subject: dawn aerial over Munich, Frauenkirche and the Alps. Prompts, task ids and grade: `media-sourcing/flux/PROMPTS.md`.
- Timecodes used: generated clip 00:00.0–00:11.0 (loop = 00:00.8–end, crossfaded into 00:00.0–00:00.8)
- Changes: cropped to 1920×1080, shared Act III grade plus a darkening curve, no audio.

## crisis-industry.mp4 / .webm / .jpg
- Generated with FLUX 3 by Black Forest Labs (FLUX 3 Image keyframe + FLUX 3 Video image-to-video, https://api.bfl.ai). No third-party footage.
- Subject: empty factory hall with an idle assembly line, overcast light. Prompts, task ids and grade: `media-sourcing/flux/PROMPTS.md`.
- Timecodes used: generated clip 00:00.0–00:09.0 (loop = 00:00.8–end, crossfaded into 00:00.0–00:00.8)
- Changes: cropped to 1920×1080, cold Act II grade, no audio.

## Footer attribution text

Archive footage: Hans Peter Ruben and Heide Breitel, "Wir waren so frei" (Deutsche Kinemathek / bpb), CC BY-SA 3.0 DE ·
"5k-resolution video of Frankfurt" © #Reaper, CC BY-SA 3.0, via Wikimedia Commons.
Cropped, recoloured and re-edited; the edited clips are shared under the same CC BY-SA licences.
Pillar, factory and closing footage, and the dramatized city, coast, Alps and POV shots in the opening montage, generated with FLUX 3 by Black Forest Labs.
Car footage: "Two Porsche 911 Targa driving as viewed from FPV drone" © SE FPV, CC BY 3.0, via Wikimedia Commons.
