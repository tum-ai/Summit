# FLUX 3 prompts (regeneration record)

Generated 2026-11-12 with the Black Forest Labs API (`https://api.bfl.ai`).

- Keyframes: `POST /v1/flux-3-image` (FLUX 3 Image), `resolution: "1k"`, `grounding: false`, version `latest`.
- Video: `POST /v1/flux-3-video`, `mode: "i2v"` with the chosen keyframe as the single `keyframes` entry (pixel-exact opening frame), `generate_audio: false`, version `latest`.
- **Seeds:** neither endpoint exposes a `seed` field (unknown fields are rejected with 422), so exact regeneration is not possible. The BFL task ids are recorded instead; the chosen keyframe PNGs in `keyframes/` are the real lock, since i2v starts pixel-for-pixel on them.

## Style suffix (Act III, appended verbatim to every pillar and CTA prompt)

```
Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

## Cold suffix (Act II, crisis-industry)

```
Overcast, diffuse light, desaturated steel blue-grey palette, cold fluorescent light, dust in the air, stillness. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still. No people, no text, no logos, no readable signs.
```

## Shared grade (ffmpeg, applied identically to all Act III clips)

```
colorbalance=rs=-0.05:gs=0.0:bs=0.03:rm=0.03:gm=0.01:bm=-0.03:rh=0.06:gh=0.03:bh=-0.07,
curves=all='0/0.035 0.25/0.22 0.5/0.48 0.8/0.78 1/0.92',eq=saturation=0.86,
haze bloom: gblur sigma 24 screen-blended at 12 %, grain: noise=alls=5:allf=t
cta only, after the shared grade: curves=all='0/0 0.5/0.36 1/0.78'  (darker for text)
crisis-industry (cold): colorbalance=rs=-0.04:bs=0.05:rm=-0.03:bm=0.04:rh=-0.02:bh=0.03,curves=all='0/0.04 0.5/0.47 1/0.88',eq=saturation=0.45 + same bloom and grain
```

Loop: the clip from 0.8 s to the end, with its last 0.8 s crossfaded (xfade) into source 0–0.8 s. Poster = first frame of the loop.

## pillar-talent

Keyframe (FLUX 3 Image, aspect `3:4`), chosen `keyframes/pillar-talent-c.png`, task `bfbe13c4-234d-43b4-ba8b-ea9a30210c28`:

```
Early morning in a university robotics lab in Munich: low sun streams through tall old windows behind the scene, a young engineer stands with their back fully turned to the camera, seen only from behind as a dark backlit silhouette, face never visible, adjusting an industrial robot arm, dust floating in the light beams, camera behind the engineer's shoulder. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

Video (i2v, `hd`, 6 s, `3:4`), task `8e921283-f83c-4156-87e8-9efd7f3415b4`:

```
The video begins exactly on the provided image. Very slow, steady dolly-in toward the robot arm. The engineer, back to the camera, makes small careful adjustments to the arm, which moves a few centimetres. Dust drifts slowly through the sun beams. Calm, deliberate, no cuts. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

## pillar-rolemodels

Keyframe (FLUX 3 Image, aspect `3:4`), chosen `keyframes/pillar-rolemodels-b.png`, task `d1b978af-c6a0-48a2-bf95-fce32b99c2f1`:

```
San Francisco at golden hour: two small silhouetted figures, an older mentor and a younger person, seen from behind walking up a steep street, the Bay and rolling fog far behind them, low sun ahead. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

Video (i2v, `hd`, 6 s, `3:4`), task `da260e95-c154-4162-bd00-ee8c43a0f57a`:

```
The video begins exactly on the provided image. The two figures, seen from behind, walk slowly up the steep street away from the camera; the camera follows with a slow, steady dolly forward. Fog drifts slowly over the Bay in the distance. Calm, no cuts. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

## pillar-proximity

Keyframe (FLUX 3 Image, aspect `3:4`), chosen `keyframes/pillar-proximity-c.png`, task `0825677f-18ae-4bfa-b626-71523b9087cb`:

```
A long wooden dinner table in a San Francisco home at golden hour. Macro close-up: wine glasses and a candle in sharp focus in the foreground; behind them the guests in conversation are rendered only as heavily blurred, abstract bokeh shapes, completely out of focus, no facial detail at all, warm low sun from a window. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

Video (i2v, `hd`, 6 s, `3:4`), task `62fd23f6-c14a-4a86-a594-ca36e079c87d`:

```
The video begins exactly on the provided image. The camera drifts slowly sideways along the table in a gentle lateral track. The candle flame flickers softly; the out-of-focus guests behind gesture gently in conversation, staying blurred. Calm, no cuts. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

## pillar-return

Keyframe (FLUX 3 Image, aspect `3:4`), chosen `keyframes/pillar-return-b.png`, task `e0ce29cd-1717-41cb-8868-9d9c242b73aa`:

```
View through an airplane window at sunrise, descending over the Alps toward Munich, warm light on the wing, haze filling the valleys, snowy peaks below. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

Video (i2v, `hd`, 6 s, `3:4`), task `9a93eea3-d59c-465b-b115-c497617e2bf5`:

```
The video begins exactly on the provided image. Locked view through the airplane window as the plane descends gently; the mountains and hazy valleys glide slowly below, the wing tilts very slightly, the sunlight shifts softly across it. Calm, no cuts. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

## cta

Keyframe (FLUX 3 Image, aspect `16:9`), chosen `keyframes/cta-b.png`, task `978f69fb-5466-401f-baeb-4977279adf57`:

```
Dawn over Munich, aerial view: the twin towers of the Frauenkirche and the old town rooftops, the Alps on the horizon, the very first light of the sun, darker overall, deep shadows, low-key exposure with negative space in the sky. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

Video (i2v, `fhd`, 11 s, `16:9`), task `2fe702f6-5443-4395-b2dc-12a37f1d1435`:

```
The video begins exactly on the provided image. A very slow, smooth aerial push-in toward the Frauenkirche towers over the rooftops; the first light of dawn slowly brightens on the horizon behind the Alps. Darker, low-key overall. Calm, steady, no cuts. Golden-hour hope: low sun, warm amber key light (#C8913A), cool steel-blue shadows (#3E4A55), soft atmospheric haze, gentle lens bloom. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still from a single film. No neon, no pure white, no lens flare, no text, no logos, no readable screens, no identifiable faces.
```

## crisis-industry

Keyframe (FLUX 3 Image, aspect `16:9`), chosen `keyframes/crisis-industry-b.png`, task `866dcab1-6c3d-4a25-abe4-8326f715a760`:

```
A vast, empty German factory hall, an idle car assembly line, overhead gantry cranes standing still, overcast daylight through dirty skylights, concrete floor. Overcast, diffuse light, desaturated steel blue-grey palette, cold fluorescent light, dust in the air, stillness. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still. No people, no text, no logos, no readable signs.
```

Video (i2v, `fhd`, 9 s, `16:9`), task `715ee809-06d7-4704-bc7d-38afeb443530`:

```
The video begins exactly on the provided image. A very slow, steady push-in down the empty factory hall. The assembly line and cranes stay completely still; only dust drifts slowly in the grey light from the skylights. Silent stillness, no people, no cuts. Overcast, diffuse light, desaturated steel blue-grey palette, cold fluorescent light, dust in the air, stillness. Shot on 35mm anamorphic lens, shallow depth of field, subtle film grain, restrained saturation, cinematic still. No people, no text, no logos, no readable signs.
```

Rejected keyframe variants (kept for reference): pillar-talent a/b (face visible / facing camera), pillar-talent d, pillar-proximity a/b/d (faces too readable), pillar-rolemodels a, pillar-return a, cta a, crisis-industry a. The talent and proximity prompts above are the revised ones (variants c/d); a/b used an earlier wording.

## Hero v3 POV shots (dramatized, cut into `hero-archive`)

Same endpoints and settings as above (keyframes `1k`, `16:9`; video i2v `fhd`, `16:9`, `generate_audio: false`). Contact sheet: `keyframes/sheet-pov.jpg`.

Period suffix (appended verbatim to both keyframe and video prompts):

```
Period film look of 1960s and 1989 West Germany, but shot sharp on modern cinema glass: 35mm lens, crisp detail, natural practical light, subtle film grain, restrained warm colour. Cinematic still from a feature film. No text, no readable words, no logos, no brand marks, no identifiable faces, no weapons.
```

Grade in the montage: the archive colour grade from round 2 (`eq=saturation=0.65,colorbalance=rs=0.07:gs=0.01:bs=-0.08:rm=0.05:bm=-0.06:rh=0.03:bh=-0.05,curves=all='0/0.07 0.5/0.52 1/0.93',eq=contrast=0.97`), then the montage-wide grain (`noise=c0s=9:c0f=t+u:c1s=3:c2s=3`) and `vignette=PI/5`. Centre-cropped 1920×1088 → 1920×1080.

### pov-hammercam (replaces pov-hammer in the montage, owner feedback: camera mounted on the hammer)

Keyframe, chosen `keyframes/hammercam-d.png`, task `48550377-3120-472f-9196-faad6c1e0667` (e `7a279744-bda7-4ece-a479-2e5b9114faa7`, f `0ded0e75-c250-437f-be72-e7a0918fa5b8`; first round a `4e91687e-cc10-4028-8420-e61481d20524`, b `e1126a92-8c55-4d8b-b1a9-20fff4d09e8f`, c `4eb1ec86-d677-4ad5-af1f-efde67cd2661` with an earlier wording, rejected: claw hammers, crowd faces). Sheets: `keyframes/sheet-hammercam.jpg`, `keyframes/sheet-hammercam2.jpg`.

```
Extreme close-up action shot from a tiny action camera bolted to the side of a heavy sledgehammer head. The sledgehammer has a big blunt rectangular double-faced steel head, no claw. In the left foreground, huge and razor sharp, the side of the battered steel head, its flat striking face pointing straight ahead into the frame, a few centimetres from the lens. Straight ahead, square-on to the camera and filling most of the frame, the graffiti-covered Berlin Wall at night on 9 November 1989, rushing toward the hammer face, only half a metre away, the concrete covered in layered abstract colourful spray paint with no readable words, old pockmarks from previous strikes. Heavy radial motion blur on everything except the sharp hammer head, as if the hammer is mid-swing at full speed. Above the top of the Wall, only out-of-focus warm bokeh of torches and street lamps in the black night sky, no people visible. Tilted dutch angle, extreme sense of speed. <period suffix>
```

Video (i2v, `fhd`, 5 s, 24 fps), `video/pov-hammercam.mp4`, task `efa5e074-0ee3-463c-bbc6-edc6d02dac2c`. Retimed 24 → 25 fps (`setpts=PTS*24/25`, every frame kept), cropped 1088 → 1080, period grade; montage uses source 00:00.00–00:04.67 (4.48 s at 25 fps), the hard cut lands as the head slams into the Wall on the second hit. The model delivered two hits, not three; the head stays locked in frame. Shot sheet: `keyframes/sheet-hammercam-shot.jpg`.

```
The video begins exactly on the provided image. Hammer-cam action shot: the camera is rigidly mounted on the sledgehammer, so the steel hammer head stays locked in exactly the same place in the frame, sharp, for the whole clip, while the whole world whips and swings around it. The hammer pulls back and the graffiti-covered Berlin Wall at night whips away in a blur of motion, then the hammer swings forward and the Wall rushes at the lens and the head slams into the painted concrete: a hard jolt, concrete chips and dust burst toward the camera, cracks spread through the paint. It pulls back and slams in again, harder, more cracks. On the third and final swing the moment of impact slows to slow motion: the hammer head smashes through, a chunk of concrete breaks away, chips and dust exploding toward the lens and hanging in the air. Blurred torches and street lamps streak behind the Wall in the cold night, no people in focus. Fast, violent, kinetic, continuous shot, no cuts. <period suffix>
```

### pov-hammer (superseded, no longer in the montage)

Keyframe, chosen `keyframes/pov-hammer-a.png`, task `2a4e9204-0f26-42e0-a305-7c74940893fb` (b `8c1acb92-c241-4051-921a-f1a09eae916c`, c `ff5e3802-9c30-47b2-ad08-f19923a29e5b` rejected: crowd faces too readable):

```
First-person POV shot at night on 9 November 1989 in Berlin: a gloved hand gripping a heavy sledgehammer in the sharp foreground, swinging toward the graffiti-covered Berlin Wall, the concrete just a metre away, covered in layered abstract colourful spray paint with no readable words. Concrete chips flying through the air, frozen in motion. Behind and above the Wall, blurred crowd lights, handheld torches and street lamps glowing as soft bokeh in the cold night. Motion energy, low angle from the viewer's eyes. <period suffix>
```

Video (i2v, `fhd`, 5 s), `video/pov-hammer.mp4`, task `2abc09a7-799d-493f-96c2-ad89f876a083`; montage uses 00:00.00–00:04.76 (ends on the final hit):

```
The video begins exactly on the provided image. First-person POV: the gloved hand pulls the heavy hammer back and swings it hard into the graffiti-covered Berlin Wall at night, again and again. Concrete chips and dust fly in slow motion toward the camera. The camera shakes with every impact. The blurred crowd lights and torches glow behind. On the final hit a deep crack splits the concrete. Continuous shot, no cuts. <period suffix>
```

### pov-conveyor

Keyframe, chosen `keyframes/pov-conveyor-c.png`, task `e3cd3958-21b2-4af7-901f-087866fea431` (a `1c171fdd-0e41-44e2-aef8-5b42f0c91a3e`, b `659fed6c-a148-479b-bf6b-a4969f881d35` rejected: worker faces in the mid-ground):

```
Macro POV shot riding along a conveyor belt in a 1960s West German car factory: a single freshly machined steel engine piston in razor-sharp focus in the foreground, sitting on the moving belt, gleaming under warm light. Just ahead, a milling station throws bright orange sparks. In the soft background, a long factory hall with assembly lines, gloved hands of workers out of focus, industrial pendant lamps. Shallow depth of field, low angle at belt height. <period suffix>
```

Video (i2v, `fhd`, 6 s), `video/pov-conveyor.mp4`, task `02461f28-6e42-40a1-8792-d1488fc1e675`; montage uses 00:00.20–00:06.00:

```
The video begins exactly on the provided image. Smooth macro tracking shot locked onto the steel piston, which stays razor sharp in the centre of frame as it rides the conveyor belt forward: past the milling station throwing orange sparks, then under an industrial lamp where gloved hands briefly lift and inspect it and set it back, then past a heavy stamping press thumping down beside the belt, then out into a long hall of assembly lines. The camera glides steadily with the piston, continuous shot, no cuts. <period suffix>
```

## Hero v4: cars, cities, coast and Alps (cut into `hero-archive`)

Same endpoints as above. Cars: FLUX 3 Image keyframes (`1k`, `16:9`, 2 variants each, sheet `keyframes/sheet-cars.jpg`), then i2v `fhd`, 5 s, `16:9`, `generate_audio: false`. Cities, North Sea and Alps: text-to-video (`mode: "t2v"`), `fhd`, 5 s, `16:9`, `generate_audio: false`. Every prompt ends with the period suffix above. Montage treatment (all shots): 0.85x slow-down with frame blending (hammer-cam 0.9x), 1.00 → 1.04 push-in (not on the hammer-cam), then the v4 montage grade described in `CREDITS.md`. The v3 POV clips are reused: v4 cuts `pov-conveyor.mp4` 00:00.20–00:02.75 and `pov-hammercam.mp4` 00:02.08–00:04.67 (ends on the impact).

### car-autobahn

Keyframe, chosen `keyframes/car-autobahn-a.png`, task `feb42991-8cc4-4451-8f5f-3e07ede8fc74` (b `61a91de9-cdcd-4444-8237-536ddcf96364`, rejected: driver's face in profile):

```
Low tracking shot at wheel height alongside a sleek classic 1960s German-style grand touring coupé in deep burgundy paint, driving fast on an empty Autobahn at golden hour, low sun behind rolling fields and a line of poplar trees, warm light gliding along the chrome trim and curved fenders, the asphalt streaked with motion blur, the car itself sharp. The car is a generic, unbadged design: smooth bodywork with no emblems, no badges, no logos, no lettering anywhere, no licence plates. <period suffix>
```

Video (i2v), `video/car-autobahn.mp4`, task `22f07501-c309-41f8-9a4f-f2f6da3ffe38`:

```
The video begins exactly on the provided image. Low tracking shot at wheel height: the camera car glides alongside the classic burgundy coupé at speed on the empty Autobahn, the coupé holding steady in frame, sharp, while the asphalt and the guard rail stream past in motion blur and the poplar trees slide by against the low golden sun. Warm light rolls slowly along the chrome trim and the curved fenders. Smooth, steady, continuous shot, no cuts. The car stays unbadged: no emblems, no logos, no lettering, no licence plates. <period suffix>
```

### car-hairpin

Keyframe, chosen `keyframes/car-hairpin-a.png`, task `c32d7e7d-fe83-4848-8689-86c179f195b2` (b `2a6dda79-c74d-4a41-91a3-ffe121dd2b51`, not used):

```
High aerial drone view looking down on a winding Alpine mountain pass in the Bavarian Alps on a clear early morning, a series of tight hairpin bends carved into a green slope below snowy limestone peaks, a single small classic 1970s German-style sports coupé in silver carving through a hairpin, long soft shadows, morning haze in the valley. The car is a generic, unbadged design: smooth bodywork with no emblems, no badges, no logos, no lettering anywhere, no licence plates. <period suffix>
```

Video (i2v), `video/car-hairpin.mp4`, task `c5e99632-f97c-4b87-9b51-bd08ce18abcf`:

```
The video begins exactly on the provided image. Smooth aerial drone shot: the silver classic coupé carves cleanly through the tight hairpin bend and accelerates up the mountain pass, while the drone slowly tracks and rises with it, revealing more of the winding road, the snowy peaks and the morning haze in the valley. Calm, majestic, continuous shot, no cuts. The car stays unbadged: no emblems, no logos, no lettering, no licence plates. <period suffix>
```

### car-bodywork

Keyframe, chosen `keyframes/car-bodywork-b.png`, task `1841177b-ac9e-4246-8b98-d1e1d8e55bdf` (a `6c182f36-17a4-4382-985d-2645cb8e5632`, rejected: other cars and workers in the background):

```
Macro close-up sweep along the freshly painted, glossy curved bodywork of a car on a 1960s West German factory assembly line, deep racing-green paint with perfect reflections of warm industrial pendant lamps gliding across the curve of a fender, a chrome trim strip in razor-sharp focus, the long factory hall softly out of focus behind, shallow depth of field. The car is a generic, unbadged design: smooth bodywork with no emblems, no badges, no logos, no lettering anywhere, no licence plates. <period suffix>
```

Video (i2v), `video/car-bodywork.mp4`, task `e445db59-18e4-42b6-b7f7-0f454fdfe5f5`:

```
The video begins exactly on the provided image. Slow, smooth macro dolly sweep along the glossy racing-green bodywork on the assembly line: the reflections of the warm pendant lamps glide across the curved fender and the chrome trim strip, which stays razor sharp, while the factory hall drifts softly out of focus behind. Calm, precise, continuous shot, no cuts, no people in focus. The car stays unbadged: no emblems, no logos, no lettering, no licence plates. <period suffix>
```

### coast-northsea

Video (t2v), `video/coast-northsea.mp4`, task `9dd9533b-eb66-40d8-92ac-fe3097c13918`:

```
Cinematic wide aerial establishing shot of the German North Sea coast at golden hour: a slow, smooth drone glide along the grassy dunes of the island of Sylt, a red-and-white striped lighthouse standing on the dunes, long gentle waves rolling in over the wide sandy beach and the shimmering Wadden Sea, low warm sun, soft sea haze, beach grass moving in the wind. No people, no boats with lettering, no signs. Calm, majestic, continuous shot, no cuts. <period suffix>
```

### city-hamburg

Video (t2v), `video/city-hamburg.mp4`, task `f43f8010-097f-4b1e-a6cf-e3a404ff2c4f`:

```
Cinematic aerial establishing shot of Hamburg at golden hour: a slow, smooth drone glide over the river Elbe toward the Elbphilharmonie concert hall, its wave-shaped glass crown glowing warm in the low sun on top of the old red-brick warehouse, the harbour cranes and the Speicherstadt brick warehouses behind, calm water reflecting the amber sky, soft haze. No people in focus, ships with plain unmarked hulls, no lettering, no signs. Calm, steady, continuous shot, no cuts. <period suffix>
```

### city-koeln

Video (t2v), `video/city-koeln.mp4`, task `41680472-e161-4e24-bafd-eaabfa493066`:

```
Feature-film establishing shot, anamorphic 35mm, low golden sun, atmospheric haze, layered depth from foreground to horizon, slow smooth aerial camera move, no cuts. Cologne at golden hour: a slow aerial push-in across the wide river Rhine toward the twin Gothic spires of Cologne Cathedral, the arches of the Hohenzollern railway bridge in the foreground catching warm low sunlight, the old town roofs behind, the river glittering, soft haze in the air. Empty bridge, no trains, no boats with lettering, no people in focus, no signs. <period suffix>
```

### city-muenchen

Video (t2v), `video/city-muenchen.mp4`, task `833263f1-e375-4b52-af85-0c2083ad5d8e`; only 00:00.10–00:02.14 is used (later frames show a duplicated pair of towers):

```
Feature-film establishing shot, anamorphic 35mm, low golden sun, atmospheric haze, layered depth from foreground to horizon, slow smooth aerial camera move, no cuts. Munich at blue hour just after sunset: a slow lateral aerial drift past the twin domed towers of the Frauenkirche, the old town rooftops below beginning to glow with warm window and street lights, the last amber light on the horizon and the faint silhouette of the Alps far behind, cool deep-blue sky. No people in focus, no signs, no lettering. <period suffix>
```

### alps-flyover

Video (t2v), `video/alps-flyover.mp4`, task `a54d77cc-cd11-4ce2-a6d6-fbc24dc43396`:

```
Feature-film establishing shot, anamorphic 35mm, low golden sun, atmospheric haze, layered depth from foreground to horizon, slow smooth aerial camera move, no cuts. Aerial helicopter flyover of the Bavarian Alps at golden hour: the camera glides slowly forward over a sharp sunlit limestone ridge of the Wetterstein mountains near the Zugspitze, warm low light on the rock faces, deep blue shadows, soft clouds filling the valleys below, a high mountain lake far beneath. Majestic, calm, no people, no buildings with signs. <period suffix>
```
