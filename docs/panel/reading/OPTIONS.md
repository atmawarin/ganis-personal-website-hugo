# /reading/: ten options (PM synthesis of loop 1)

Source memos: `r1-sd.md`, `r1-ty.md`, `r1-ixd.md`, `r1-pm.md`, `r1-seo.md`, `r1-bb.md`, `r1-v.md`. Twenty-one concepts collapsed into ten. Options 1–9 came from the panel. Option 10 is a deliberate wildcard from the PM: the panel was unanimous on restraint, and Ganis asked for wow, so one option tests the edge.

## Already unanimous (binding for every option)
- **Killed:** 3D/WebGL shelf, carousel, cover wall as the default view, masonry, infinite scroll.
- **The rule, bent:** home keeps the name-setter; /reading/ gets **one signature mechanism**, used consistently. No ambient loops, no parallax, no load-time entrance choreography.
- **Base layer:** all books server-rendered as a semantic list; a full no-JS and reduced-motion experience; touch and keyboard equivalents for every hover; transform/opacity only; durations ≤ 450ms.
- **Data fixes first:** *Why We Die* cover, `sapiens` duplicate, real count from `len`, stars parsed as a count (33 across 24 books) and drawn as red ★ glyphs, display title split at the colon (full title kept in HTML), sentence-boundary truncation, `lang="id"` on Bahasa lines, the dead filter row removed or made real.
- **Honesty:** 2023 shows as an empty year. No invented notes, ratings, page counts or reasons.

## Still contested (loop 2 must settle)
- **Scroll-triggered motion.** PM (stamp on arrival) and BB (ink-in once) want a one-shot arrival moment. SD, IxD, SEO, TY and V want input-only.
- **Covers.** Hidden until inspected (BB, TY, V) or visible as small plates (SD, PM, IxD).
- **Categories.** Fix the chips (IxD, PM, SEO), replace with a starred toggle (V, BB), or turn them into subject headings (TY).

## The ten

| # | Name | One-line pitch | Signature interaction | Champions | New data from Ganis |
|---|---|---|---|---|---|
| 1 | **Pull from the Shelf** | Each year is a shelf of spines; pull one out and it opens into a card. | Neighbours part 6px on hover/focus; click slides the spine out, tilts it 4°, and flips it to the cover card (380ms). Esc slides it back into its slot. On touch, a bottom sheet you can swipe to the next book. | IxD, PM, BB, SEO | none (spine colour from the cover at build time) |
| 2 | **Date Due** | The shelf as library lending cards, one card per year. | Hover/tap a row and a red date stamp *thunks* on (scale 1.2→1, ±2° seeded rotation, 120ms); starred books carry an extra "AGAIN" stamp per star; the cover slides out of the card pocket. Optional "stamp the year" key. | V, IxD, PM, BB | which dates are real days vs. placeholders |
| 3 | **The Card Catalogue** | Drawers of index cards per year, only the tabs showing. | Click a tab and the card rises out of the drawer (translateY −70%, 280ms, 2% overshoot), showing cover, quote and "Read 2019-03". Built on `<details>`, so it works with no JS. | SEO | optional shelfmarks per category |
| 4 | **The Ledger** | A reading life as a ruled account book: big year in the margin, one ruled row per book. | Hover a row and the cover slides out of the right edge like a slip from the ledger (320ms, no reflow). A sticky year index acts as a scrubber under a fixed red "reading head". 2023 is printed "Nil." | SD | none |
| 5 | **The Tipped-in Plate** | A Bringhurst-correct bibliography (small-caps authors, italic titles, dot leaders); covers are plates you summon. | Hover/focus and the cover is *tipped in* beside the row, wobbling 2°, while a translucent tissue guard peels off (420ms). Moving rows peels the old plate and tips in the next. | TY | optional original publication year |
| 6 | **The Reading Year** | A 2016–2025 rail where each year's height is the number of books (2019 towers; 2023 is an honest zero). | Drag the red playhead and the year numerals roll like a counter; that year's covers fan out from a stack into a row (18ms stagger, capped at 12). No JS: the rail is plain year jump links. | IxD, SEO, SD, BB | optional one line about 2023 |
| 7 | **The Specimen Shelf** | Every title set in a face from the site's designer registry, so the shelf reads as a type specimen. | One "Set by: year / subject / stars" control re-sets the whole sheet: rows reorder (FLIP, 450ms) and titles cross-fade between faces. TY's variant: a cursor-proximity weight fisheye on Fraunces. | SD, TY | a category→designer mapping (5 rows) |
| 8 | **Open at Random** | The page opens on one quote set big, not on a grid; the full index sits below. | "Open another" (or Space) wipes the quote out and the next one in, like a flat page turn (clip-path, 180/260ms); the cover slides with it. No JS: a quote picked at build time. | V | a quote / my-note / blurb flag on each description |
| 9 | **The Rubricator's Pass** | Replaces the category chips with the one distinction Ganis curates: books he read again. | "Show what I read again": a red pen line draws down the margin (700ms), underlining the 24 starred books as it passes while the other 80 dim. PM's add-on: margin notes beside the starred books, when Ganis writes them. | V, PM | optional "why" note for the 24 starred |
| 10 | **The Leaning Shelf** *(wildcard)* | All 104 spines on one continuous shelf with real weight. | Pull a spine out and its neighbours **lean into the gap** under simulated gravity, then settle with a small spring. Fling the shelf sideways and the books sway with your velocity. Starred books are heavier and lean less. Physics in about 3 KB of JS; with no JS or reduced motion it's a still row. | PM (to test the edge) | none |

## Questions for loop 2
1. Score each option on four counts: **wow**, **fit** (Specimen Book and Ganis), **craft risk**, and **your lane**.
2. Name your top three, and the one combination you'd ship (primary mechanism plus at most one supporting layer).
3. Settle the contested items above.
4. Respond directly to at least two other seats' r1 positions you disagree with.
