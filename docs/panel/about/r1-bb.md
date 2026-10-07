# R1 memo: BB (brand and business), About journey

## Thesis
The game frame is a vehicle for **cutting words, not adding decoration**. One 9-stage "world map" replaces the body prose AND the timeline (they duplicate each other). Each stage is one line of facts Ganis already signed off. The brand risk is not the game; it is (a) Synetica reading as a boss fight or sales funnel, (b) privacy creep through "stats", (c) the photo.

## Spec (my lane: portrayal, privacy, channels, photo)

**Copy budget.** Page body under ~170 words total (today 643). Heading unchanged, verbatim. Stage lines max 14 words each, no em dashes, sentence-case.

**Structure (print "strategy guide map", not pixel art).**
1. Slug: `About · Yogyakarta, Indonesia` then heading (unchanged).
2. Player card (mono, boxed 2px ink, like `.ttol`): `PLAYER 1 · Ganis` / `Class: runner, reader, typography nerd` / `Home: Yogyakarta` / `Hardest boss: the morning phone`. Four lines max. No age, no birth year, no stats like HP/level.
3. Map: the existing `.timeline` re-skinned as numbered stages: `WORLD 1-1` Day one (patrol car) ... `1-2` Age two (KM Rinjani) ... `2-1` 2008 Multiply ... `3-1` 2013 SoftwareSeni #13 ... `3-2` 2016 ... `3-3` 2019 ... `4-1` 2021 solo 42 km ... `5-1` 2025 Synetica ... `5-2` 2026 Prove. Stage codes in `--f-mono`, red; one line each. Current stage (2026) gets a filled red dot and "YOU ARE HERE".
4. Save point / ttol: keep "Two truths and a lie" as the side quest, relabel slug "Side quest". Unchanged behaviour.
5. Footer "Continue?": two links only, mono: `Write to me` (email) and `Letters` (newsletter). Nothing else. Shelf and colophon go in a quiet "Extras" line under it.

**Brand lines.**
- SoftwareSeni: three stage lines (2013, 2016, 2019) plus 2025 "Left after twelve years", all warm, no complaints. Keep one link to the existing SoftwareSeni essay.
- Synetica: exactly ONE line, stage 5-1: "2025. Started Synetica, to test products before anyone builds them." Link once. No prices, no "two weeks / eight weeks", no CTA button. The email footer may keep "building a product? write to Synetica."
- Family: "Husband to Gita, father to Zen and Zia" as one stage line or card line. Names only. Phone-in-drawer 6-9 PM may stay as a "rule" line (it is brand-positive and already public).

**Photo.** Solo Ganis only, no children, colleagues, Gita, street signs, house, plates, office exteriors, or visible screens. Grayscale pipeline stays (`.about-portrait img`). Prefer a candid with the humour of the current one (frown plus Bowser laptop). Keep the current portrait as fallback; a new one must beat it, not merely be newer. Alt text and caption must be factual and short. Strip EXIF/GPS before copying into `static/images/`.

## Must-nots
- No birth year, age, hometown beyond Papua/Malang already published, kids' ages, school, or addresses (Pakuningratan/Jl Magelang are already public; add no new ones).
- No social links, no LinkedIn/Instagram "follow" row. Email and newsletter only.
- No fake game UI: no health bars, XP counts, achievements, "Game over", neon, pixel fonts, scroll animation or fade-ins.
- No Synetica pitch, pricing, or "boss" metaphor for clients or SoftwareSeni.
- No invented facts or invented "stats".
- No photos of anyone but Ganis.

## Top 3 must-haves
1. **One map, one source**: delete the duplicated body prose; the staged timeline carries everything; total copy under ~170 words.
2. **Synetica = one honest line at stage 5-1; channels = email + Letters only** in the "Continue?" footer.
3. **Photo gate**: solo, clean background, no location or people leakage, EXIF stripped; else keep the Bowser portrait.
