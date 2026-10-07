# R1 memo: V (voice)

## Thesis
The page is wordy because the prose and the timeline say everything twice. Delete the prose, keep one spine: a printed strategy-guide stage list, six levels, one fact each. The game is the structure and the slugs ("Level 3", "Save point", "Continue?"), never the vocabulary of pixels. Target: body copy under 200 words, down from about 600.

## Spec: copy (exact)
Heading stays verbatim: `Hi, I'm Ganis, and I think you're looking amazing today.`
Slug above it: `Player one · Yogyakarta, Indonesia`
Lede (one line, under heading): `Six levels so far. Pick up where it gets good.`

Stage list (mono slug in red / one sentence, Newsreader):
1. `Level 1 · Papua` Born here. Driven home in a military patrol vehicle called a *Garnisun*. Shortened, it became my name.
2. `Level 2 · Malang` Shipped west on the KM Rinjani, five days and four nights, to be raised by my grandparents.
3. `Level 3 · SoftwareSeni, 2013 to 2025` Employee #13, Product Manager for Villalet. General Manager at ninety people, one desk for every six. Director by the end. Twelve years.
4. `Level 4 · The long run, 2021` 42 km around the Kraton, the family car as a water station. The last 11 km after dinner. That makes two marathons: one race, one solo.
5. `Level 5 · Synetica, 2025` Left after twelve years. Started [Synetica](https://synetica.co).
6. `Level 6 · 2026` Year theme: *Prove*. Still uninstalling Mobile Legends.

Save point (a ruled box between 5 and 6, mono slug `Save point · 6 to 9 PM`): `Husband to Gita, father to Zen and Zia. The phone goes in a drawer.`
Side quests (one line, mono): `Trees, typography, single-origin coffee. A chicken at parties, a lion at ping-pong.`
Bonus stage: keep the existing ttol block, relabel slug to `Bonus stage · a game I play with new hires`. Facts it reveals (Mythic, Economics, marathon) are then not repeated elsewhere.
Continue?: slug `Continue?` then `Write to me: ganis@... I answer most letters, slowly. About building a product? Write to [Synetica](https://synetica.co) instead; same person, with a calendar.` Footer line: `The [shelf](/reading/) and the [colophon](/colophon/) are the pause menu.`

Cut entirely: all seven prose paragraphs, Multiply 2008, coffee-shop anecdote, baristas note, "calm person, mostly".

## Spec: structure and form
- Single column `ol.stages`, replaces `.about-grid` prose+timeline. Portrait stays in a narrow aside on desktop, above the list on mobile.
- Each li: mono slug `0.78rem` red, sentence `1.05rem/1.4`. Hairline rule between, 2px ink rule on the left, level number as a large Fraunces numeral in a ruled box (stage-select tab). Current stage (6) gets the red ring, others hollow.
- No new JS required. Optional: ttol unchanged.

## Must-nots
- No em dashes, no pixel fonts, no neon, no XP bars, no emoji, no "Game over", no scroll or fade animation.
- No new facts: no kids' ages, no birth year, no invented stats or "levels" of skill.
- Do not rewrite the heading or the ttol verdict.
- Do not use a family or colleague photo.
- SoftwareSeni stays graceful: "Twelve years", no complaint.

## Top 3 must-haves
1. Heading verbatim; page body under 200 words, no fact stated twice.
2. Six-level stage list in print vocabulary, with Save point (6 to 9 PM) and "Continue?" closing on the email and Synetica line.
3. Every line traces to the BRIEF fact table; shelf and colophon links survive.
