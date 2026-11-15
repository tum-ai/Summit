# Brief A: real archive footage (hero montage + stock exchange)

Read `REQUIREMENTS.md` first. Its licensing, encoding, verification and boundary rules still apply, except where this brief overrides them.
Feedback on round 1: the black-and-white-only home video felt boring and not recognisably German.
This round: **well-known, instantly recognisable German moments**, a mix of colour and black and white, from **several places**.

## Slot 1: `hero-archive.mp4 / .webm / .jpg` (replaces the current file)

A **montage of 7–10 shots**, 2.5–3.5 s each, 22–30 s total, loopable. One idea: *this is what we were capable of*.
Aim for most of these (priority order):
1. **Fall of the Berlin Wall, Nov 1989**: people hammering or chiselling at the Wall ("Mauerspechte"), crowds standing on the Wall at the Brandenburg Gate, people crossing at Checkpoint Charlie or Bornholmer Straße, embraces. These are the anchor shots. Get at least two.
2. **Reunification**: 3 Oct 1990 at the Reichstag, crowds and fireworks.
3. **Reconstruction 1948–1960**: rebuilding cities, rubble cleared and new buildings rising (Marshall Plan films are US government works and therefore public domain).
4. **Wirtschaftswunder engineering**: VW Beetle production line in Wolfsburg, Ruhr steel, Hamburg harbour cranes, Rhine shipping, early Autobahn.
5. Optional: Munich, e.g. the 1972 Olympic stadium architecture (architecture only; no Games or event footage).

Places should vary (Berlin, Wolfsburg, Ruhr, Hamburg, Munich …). Mix colour and B/W shots.
**Grade everything to one period-film look** so it reads as one film: lifted blacks, slightly faded and warm colour (Eastmancolor fade, saturation ~0.6–0.7), B/W shots toned very slightly warm, same grain. Order the shots so the brightness flows; use hard cuts or 6–10-frame dissolves. Crossfade the end into the start.
Still forbidden: anything before May 1945, soldiers, weapons, military, rallies, flags as the subject, ruins as a war spectacle (rubble being *cleared* is fine).
16:9, 1920×1080 if the sources allow (1280×720 acceptable), ≤ 6 MB mp4 and ≤ 5 MB webm, no audio.

## Slot 2: `crisis-exchange.mp4 / .webm / .jpg` (new)

Frankfurt Stock Exchange: the DAX board, the trading hall, the bull and bear statues outside, or the Frankfurt skyline at dusk. Real footage only. 8–12 s, 16:9 1920×1080, ≤ 4 MB.
Grade cold: desaturated steel blue-grey, low contrast (this is Act II, "the decline"). Avoid readable dates or numbers that make a factual claim.
If you can't find licensed footage, leave the slot empty and say so. The FLUX agent covers it as a fallback.

## Where to look (all have clear public-domain or CC terms)

- **US National Archives** (catalog.archives.gov): USIA, Department of Defense and Marshall Plan films are US federal works, so they are public domain. Check each item's "Use restrictions" field.
- **Internet Archive** (archive.org): Marshall Plan films and USIA newsreels. Check the `licenseurl` field and whether the item is a US government work.
- **Wikimedia Commons**: Berlin Wall 1989 video categories, Bundesarchiv, "Frankfurter Wertpapierbörse".
- **DVIDS** (US military public-domain media): only footage of civilians or the Wall, never military subjects.
- Europeana (filter by "can reuse").

**Iconic broadcast footage** (AP, Reuters, British Pathé, Getty, ARD/ZDF, Chronos-Media) is copyrighted. Don't download or use it. If the best-known shots exist only there, **list them** in your report (title, URL, provider, licensing page) so the owner can license them.

## Deliverables

- Files in `public/media/`. Overwriting the existing `hero-archive.*` is expected.
- Update `media-sourcing/CREDITS.md`: replace the hero entry, add crisis-exchange, and keep the other entries.
- Report: a shot list (source, licence, place, year, colour or B/W), file stats, and the licensable-iconic-footage list.
- Don't touch any `pillar-*`, `cta*` or `crisis-industry*` file; another agent owns those.
