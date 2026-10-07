# R1 — TY (Typography)

## 1. Thesis
The shelf is currently a Goodreads export: 104 identical cards, with the covers doing all the typographic work (badly, since they clash). **The page should be a bibliography typeset by someone who loves bibliographies**, with the covers as plates you summon, not wallpaper. The Specimen Book's idea (every essay set after a different designer) extends naturally: a library is just a type specimen of other people's decisions.

## 2. Three concepts

### A. The Tipped-in Plate (my lead pick)
**Sees:** No cover grid. A single-column bibliography, Bringhurst-correct: hanging indents, author in small caps, title in italic Fraunces, year at the right margin on a dot leader, star as a red ★ in the margin. Year headings become running heads ("2019 — 27 books"). 104 lines fit in about four screens, which is the point: the whole reading life is visible at once.
**Does:** Hover/focus a row and the cover is *tipped in* beside it, as a printed plate pasted onto the page: it slides 6px from the gutter with a 2° wobble, and a tissue guard (a translucent paper layer, clip-path wipe) lifts off the top edge. Duration 420ms, `cubic-bezier(.2,.8,.2,1)` (settles like paper, no bounce). Moving to the next row peels the old plate and tips the next; only one plate is ever open. The description sets below as a marginal note in italic Newsreader.
**Touch:** Tap toggles the plate inline under the row (no hover exists); tap again closes. **Reduced motion:** plate appears instantly, no tissue, no wobble. **No-JS:** each row is a `<details>`; the plate is the open state; CSS `:hover` also works. All 104 titles/authors/notes sit in the HTML.
**Data:** All existing. Optional new: original publication year (for a true bibliography), from Ganis.

### B. Spines Set by the Press
**Sees:** A landscape of spines (home already has the dialect). Each spine's title is set vertically in the face of one of the 25 registry designers, so the shelf reads like a Specimen sheet: Caslon next to Bauhaus next to Gerobak.
**Does:** Pointer proximity drives a variable-font axis: spines near the cursor swell (Fraunces `wght` 300→800, `opsz` up) and the neighbours compress, a fisheye in weight, not in scale. Click pulls the spine forward 24px, and the book "opens" as a card. ~250ms, spring-free ease-out.
**Touch:** tap-to-pull, no proximity. **Reduced motion:** weight stays fixed, pull is a state change only. **No-JS:** static spines plus an `<ol>` list below.
**Data:** *New and mandatory:* a designer assigned per book (25 houses). Ganis must choose; I will not invent the mapping. Cost is high, and 25 webfonts is a loading disaster, so only the display subset glyphs for titles can load (see section 3).

### C. The Composing Stick
**Sees:** The bibliography list (as A) but each row is dormant type.
**Does:** Click a title and the metadata *sets itself*: title, author, and one line of Ganis's note arrive sort by sort into a composing-stick strip pinned above the list, each letter dropping 4px into place at 18ms stagger, final line justified by widening word spaces (the compositor's trick). Total under 700ms. Rubric: the capital is rubricated red, as Gutenberg's was. This is the home name-setter's cousin, same grammar, same easing, so it counts as the *one* signature gesture reused, not a new one.
**Touch:** same on tap. **Reduced motion:** text just appears set. **No-JS:** the strip is a `:target` anchor.
**Data:** existing; uses `description`.

## 3. Lane spec
- **Faces:** Fraunces display, Newsreader text, Plex Mono for metadata only. No new webfonts for the chrome. Concept B needs per-designer faces: load display subsets via the existing `display:` param (title glyphs only) lazily after first paint; fallback is Fraunces.
- **Measure:** bibliography column 62–68ch; notes 38–45ch. Hanging indent 1.5em.
- **Strip the star prefix** from titles in the data layer (⭐️) and render ★ as a real glyph in `--red`, one star per ⭐️ (33 stars; Elements of Typographic Style gets five). Never as text in the title.
- **Subtitles:** split at the first colon. Main title in italic, subtitle in roman smaller, on one line; full title in `title=` and in the HTML.
- **Quotes:** real curly quotes and an en/em-dash, `text-wrap: pretty`, `hanging-punctuation: first`, proper ellipsis (kill the truncated "…" mid-word; truncate at a sentence or word boundary, or show the full note in the plate).
- **Small caps:** author names use `font-variant-caps: all-small-caps` with `letter-spacing: .06em`; tabular lining figures for years (`font-variant-numeric: tabular-nums lining-nums`).
- **Loading:** `font-display: swap`, preload only Fraunces roman + Newsreader roman; italics after. No layout shift from swaps: match fallback metrics with `size-adjust`.
- **Bahasa/English mix:** set `lang="id"` on Indonesian notes so hyphenation and quotes behave.

## 4. Must-nots
- No rotated-text spines that are unreadable for screen readers without an accessible `<a>` name.
- No faux italics/bold or letter-spaced lowercase.
- No ALL-CAPS title blocks, no text under 14px for notes, no mid-word truncation, no placeholder lorem for the 25 houses.
- Don't set Bahasa notes in a face lacking diacritics/curly punctuation. Don't claim a book was "set in" a face it wasn't; say "shown in the manner of."
- No typewriter-sound effects, no cursor-following confetti.

## 5. Top 3 must-haves
1. **Clean data typography:** star count, subtitle split, curly quotes, no mid-word truncation. This is a bug fix more than a design.
2. **Everything in the HTML**; every interaction has a CSS/`details` baseline and a reduced-motion twin.
3. **One bibliographic idea, rigorously set**, rather than five clever effects.

## 6. Verdicts on the obvious ideas
- **3D bookshelf:** kill. Fake leather, fake wood; the opposite of a specimen book, and covers rotate illegibly.
- **Carousel:** kill. Hides 100 of 104 books; fails no-JS and SEO.
- **Cover wall:** keep only as a secondary "plates" view; covers vary too wildly to carry the page alone.
- **Filter chips:** keep, but make them real (categories currently render only "All"); typeset as an index of subject headings, not pills.

## On bending the rule
Bend it **one notch, not off its hinges.** Allow motion only as the direct consequence of a hover, tap or focus (the plate tips; the stick sets). Still forbidden: scroll-triggered reveals, fade-ins on load, ambient looping. Rationale: the original rule was against decoration, and a plate you summon is information. Interaction that *is* the metaphor (printing, tipping, composing) belongs here; animation that merely announces itself does not. Pick one gesture for the page, and echo the home name-setter's easing so the site still has one voice.
