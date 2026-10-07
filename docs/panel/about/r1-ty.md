# R1 · TY (type) memo

## Thesis
A video-game journey in print is a **strategy-guide chapter list**, not a UI. The game is carried by *labels* (Plex Mono, tracked caps: LEVEL 03, SAVE POINT, CONTINUE?) while the stories stay in Newsreader at book measure. Less copy means each level gets a Fraunces title and one or two sentences, so the type has room to breathe. Heading stays verbatim in the existing title-block (Fraunces, unchanged).

## Spec

**Stack (no new faces):** Fraunces = level titles + player-card name; Newsreader = level text; IBM Plex Mono = all game labels.

**Level label** (above each title): `LEVEL 04` / `BONUS STAGE` / `FINAL LEVEL`
- Plex Mono 500, 0.72rem, uppercase, letter-spacing .14em, color var(--red), `font-feature-settings: "zero" 1` (slashed zero), tabular figures.
- Year sits on the same line in --muted, mono, after a thin gap: `LEVEL 04 · 2013`.

**Level title:** Fraunces 600, `clamp(1.35rem, 1.1rem + 1.2vw, 1.75rem)`, line-height 1.12, sentence case, `font-optical-sizing: auto`, `text-wrap: balance`. Examples: "Employee #13", "Ninety people, six desks to a person" (only if source-true; otherwise keep to source wording), "42 km, two halves".

**Level text:** Newsreader 1.0625rem/1.5, `max-width: 52ch`, `text-wrap: pretty`, `hanging-punctuation: first`, oldstyle figures off (use `lining-nums`, years sit with caps labels). Max 2 sentences, about 25 words. Italics only for *Garnisun* and *Prove*.

**Map rail (existing .timeline, restyled):** keep 2px ink rule + red ring nodes; node for current level is filled red. Levels are numbered in mono, never in Fraunces, so numerals don't compete with titles.

**Player card** (replaces prose paragraph on family/habits): `<dl>` with Plex Mono labels 0.72rem caps `.12em`, values Newsreader 1rem, dotted leader (`border-bottom: 1px dotted var(--rule)`) between. Rows: CLASS Founder / HOME Yogyakarta / PARTY Gita, Zen, Zia / RANK Mythic (MLBB) / SIDE QUESTS Running, trees, typography, single-origin coffee / OFF-HOURS Phone in a drawer, 6-9 PM. Name line: Fraunces 600 1.25rem.

**Small caps:** Newsreader `font-variant-caps: all-small-caps; letter-spacing: .08em` only for two prompts: "Press start" (before level 1) and "Continue?" (closing, linking to email). Fallback if the face lacks smcp: Plex Mono caps at 0.78rem.

**Two truths and a lie:** stays as "Bonus stage", same .ttol type; stamp stays Plex Mono.

**Mobile 390:** titles 1.35rem, label 0.68rem, measure full-width minus 16px gutters, no column below 30ch. Rail left padding 18px.

## Must-nots
- No pixel/8-bit face, no all-caps Fraunces, no text-shadow, no neon, no "HP/XP" bars.
- No em dashes; sentence-case titles; no more than two type sizes per level block.
- No letterspaced lowercase; no faux small caps via font-size hacks.
- No second red element per level (label only; ring is the node).
- Don't invent stats or facts to fill the card.

## Top 3 must-haves
1. **Mono caps level label + Fraunces title + 52ch Newsreader text** as the single repeating unit; the game lives in the labels.
2. **Cut each level to 2 sentences (~25 words)**, delete the body prose that duplicates the timeline; player card as a `<dl>` with dotted leaders replaces the family/habits paragraphs.
3. **Two small-cap prompts only ("Press start", "Continue?")** bookending the page; everything else stays quiet.
