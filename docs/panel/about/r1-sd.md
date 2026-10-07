# R1 · SD (design) · About as a journey

## Thesis
The page is two columns saying the same thing twice. Cut the prose column to almost nothing and let **one object carry the whole page: a printed "stage select" map**, like the fold-out in a strategy-guide or game manual. Stages are numbered, ruled and stamped in the existing red. Nothing glows, nothing animates. The game is in the structure, not the skin.

## Spec

**Layout (desktop, 1280):** single measure, no sidebar. Title block unchanged (slug + heading verbatim). Under it a 2-line deck, then the map, then a "player card", then the contact line.
- Page measure 44rem, centred on the existing text column. The portrait moves into the player card.

**Map = `<ol class="stages">`, one `<li>` per stage, 6 stages max** (merge the 9 timeline items):
1. World 1-1 · Day one · Papua, a patrol car called Garnisun
2. World 1-2 · Age two · KM Rinjani, five days, to Malang
3. World 2-1 · 2008 · First blog, on Multiply (gone)
4. World 3-1 · 2013-2025 · SoftwareSeni, #13 to Director (nest 2016 GM, 2019 Director as one line each, 2 sub-lines max)
5. World 4-1 · 2021 · 42 km around the Kraton, last 11 after dinner
6. World 5-1 · 2025 · Synetica. Boss level, red.
Final row, not a stage: **"Continue? 2026 · Prove."** with "Still uninstalling Mobile Legends."

Each `<li>`: grid `4.5rem 1fr`. Left: mono 0.72rem, letter-spacing .12em, uppercase "W1-1", red. Right: Fraunces 1.15rem title (max 5 words), Newsreader 1rem one sentence (max 14 words). Rows separated by 1px `--rule` hairline; the spine is the existing 2px ink left border from `.timeline`, nodes stay 12px red-ringed circles (cleared stage = filled red, current = ring only). Boss row: 2px ink border box, same as `.ttol`.

**Player card** (replaces body prose, ttol and sidebar): `.ttol` box vocabulary, 2px ink border, `grid 9rem 1fr`; grayscale portrait left (aspect 4/5, existing shadow), right a mono stat list as `dl`: CLASS Founder / HOME Yogyakarta / PARTY Gita, Zen, Zia / RUN slowly, mornings / RANK Mythic (MLBB) / DRINK single-origin / PHONE in drawer 6-9 PM. 7 rows, one line each. Two truths and a lie becomes one row: "Side quest: two truths and a lie", the existing button game kept, 3 buttons, verdict unchanged.

**Copy budget:** page total under 220 words (now ~640). Deck: "Six stages so far. Still playing." Links kept: Synetica, shelf, colophon in a mono footer row "Save points: Shelf · Colophon · Synetica", then email line.

**Mobile 390:** map identical, single column; stage label stacks above the title (grid collapses to 1 col under 560px); card stacks portrait over stats, portrait max-width 11rem. Tap targets 44px on buttons.

**Dark mode:** reuse tokens only (`--ink`, `--paper`, `--red`, `--rule`, `--muted`); no new colours; grayscale portrait stays.

**Type:** stage labels Plex Mono, titles Fraunces, sentences Newsreader. No pixel fonts.

## Must-nots
- No pixel art, neon, progress bars, XP counters, health bars, emoji, scroll-triggered anything, fade-ins.
- No em dashes; sentence-case headings; no invented facts (stage numbers are labels, not claims).
- No birth year; no kid details beyond names.
- Do not alter the heading line.
- Do not exceed 6 stages; do not keep both a prose column and the map.
- JS only for the ttol button game; map is pure HTML/CSS.

## Top 3 must-haves
1. One map, six stages, 14-word sentences; the prose column is deleted, not trimmed.
2. Player card with portrait + stat list as the only "character" moment, in `.ttol` ink-box language.
3. Red is reserved for stage codes, cleared nodes and the Synetica boss row; "Continue? 2026 · Prove." closes the page.
