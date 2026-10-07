# R1 — SD (senior designer, print/editorial) — /reading/ redesign

## 1. Thesis
The shelf should be a **printed object that happens to move**: a ledger, a catalogue, a colophon of ten years of reading, set with the same discipline as an essay page. Today it is 104 identical cards in a grid, and the cover images are the only thing with personality, which is a Goodreads export. The fix is not louder chrome. It is **a structure with a point of view** (time, weight, stars, a designer's voice), where motion explains the structure instead of decorating it.

**On the rule ("one signature interaction, no scroll animation, no fade-ins"):** bend it, but only this far. The rule existed to stop decoration. Keep that. Allow **one signature mechanism for this page**, a second-tier "home name-setter" for /reading/, and nothing else on the site. Motion must be **caused by the visitor** (hover, tap, drag, key, scroll-position as *input*), never triggered by arrival. Still banned: fade-ins on load, staggered reveals, parallax, scroll-jacking. Allowed: things that physically move because you moved them. Cap: 1 mechanism, 250-450ms, transform/opacity only, and the page is complete and beautiful with it off.

## 2. Three concepts

### A. The Ledger (a reading year as a printed account book)
**Sees:** The page becomes a ruled ledger. Left margin: years in huge Fraunces, set on a baseline grid. Each book is one ruled row: date (mono), title (Fraunces), author, one-line note, and a **thin rule whose length encodes nothing fake: it is the star count (0-5 hairlines)**. Covers are not shown by default. A narrow cover "thumb" is clipped at the row's right edge, 24px wide, like a fore-edge sliver. 2023 shows an empty ruled year with the printed word "Nil." (honest, memorable).
**Signature interaction ("Pull the page"):** Hover/focus a row and the row's cover **slides out of the right edge like a slip from a ledger**, 320ms, `cubic-bezier(.2,.8,.2,1)` (decelerating, a drawer, no bounce), rises to 150px wide, and the row's neighbours do **not** move (no reflow, avoids jank). Click/tap pins it open (accordion-style on touch: tap row, cover slides, quote unfurls beneath; one open at a time). Arrow keys move row to row; Enter pins. A sticky mini year-index (2016...2025) on the right edge is a scrubber: drag it and rows pass under a fixed hairline "reading head"; the active row gets the red rule.
**Reduced motion:** cover appears instantly, no slide. **No-JS:** it is a plain ordered list; cover thumb is static and the full cover opens via `:hover`/`:focus-within` CSS alone (the interaction is CSS-first, JS only adds pinning and the scrubber).
**Data:** all existing. Star count needs a parse (count of ⭐ in title: already in data). 2023 "Nil." is free.

### B. The Specimen Wall (every book set in a designer's hand)
**Sees:** Our site's identity is "each essay typeset after a different designer". Apply it to the shelf: every book **title is set in one of the specimen faces from `data/styles.yaml`** (Gutenberg blackletter, Aldus italic, Kelmscott, etc.), assigned deterministically by category (business = Baskerville-ish, stories = Aldus italic, science = Gutenberg...). The page reads as a type specimen sheet with covers as small plates. Big, dense, typographic: titles at 28-56px, ragged, set in running lines like a broadside, covers tucked as small footnoted plates.
**Signature interaction ("Re-set"):** A single control, "Set in: [Category] / [Year] / [Stars]". Changing it **re-sets the whole sheet**: titles cross-morph their font-family axis weight and tracking over 400ms (FLIP for position, opacity swap between two face layers; never animate font files themselves) and rows reorder (FLIP, 450ms ease-in-out, 12ms stagger capped at 300ms total). Touch: a segmented control at the bottom thumb zone. Reduced motion: instant re-sort. No-JS: default order by year, faces assigned at build time in Hugo (all of it is static CSS classes).
**Data:** category to face mapping is a **new decision from Ganis** (5 rows of config). Cost: loads up to 5 extra web fonts; subset to title glyphs per the existing `display` param. Risk: it competes with essay pages' specialness. Mitigation: only 5 faces, and no essay-body text.

### C. The Colophon Strip (one long reading year, as a typeset timeline you scrub)
**Sees:** Above the fold: a single horizontal **specimen of spines**, 104 slim vertical bars (height = page-weight proxy only if Ganis supplies page counts; otherwise uniform), colour-coded by category using ink, red, and 3 greys (no new hues). 2023 is a visible gap, because honesty is the aesthetic. Below it, the ledger/list of that selected span.
**Signature interaction ("The reading head"):** Drag (or arrow-key, or scroll-linked as *input*) a hairline marker across the strip. Spines the marker passes **tilt out 6deg and rise 10px** (like leaning a book off the shelf), the dated entry below swaps to that book, cover on a small plate, 180ms. Release: the nearest book settles with a short spring (one overshoot, 220ms). Touch: drag with momentum; haptics not assumed. Reduced motion: marker jumps, no tilt. No-JS: the strip is a list of anchor links to each entry in the full list below.
**Data:** existing. Page counts would be a nice upgrade (new, from Ganis, optional).

## 3. Lane spec (any chosen design must meet)
- **One grid, hard edges.** Content shares the header's `--edge` rule on both sides (fixes defect 3). No element ends at an arbitrary column.
- **Baseline rhythm:** 8px unit; year headings sit on the rule, not floating above it. Title/author/quote in a strict three-step scale; max two weights per face on the page.
- **Titles:** strip subtitles at the colon for display (full title in `title=`/`aria-label`/text on expand). Max 2 lines; hyphenation off; rag good.
- **Quotes:** truncate by *sentence*, not 140 chars with "...". Prefer a lead-in mark (curly, hanging punctuation).
- **Covers are plates, not heroes:** consistent scale, a 1px ink keyline, the existing hard offset shadow only where the cover is "lifted". Mismatched cover quality must be tamed with a uniform cropped frame and a paper-tone mat.
- **Chrome stays quiet:** paper, ink, one red. Red is for stars and the active state only. No new accents.
- **Dark mode:** paper becomes ink-black warm (not #000), covers get a 1px lighter keyline and slight `brightness(.92)` so white covers do not glare.
- **Mobile 390:** single column, type-led. Do not shrink a desktop interaction; replace hover with tap-to-open.

## 4. Must-nots
- No fade-in or slide-in on page load or scroll; no staggered reveals.
- No scroll-jacking, no horizontal hijack of vertical scroll.
- No cover wall as the *only* thing; no 3D CSS-transform shelf with perspective tilt (kitsch, bad on 390).
- No gradients, glass, glow, neon, drop-shadow blur. Hard offsets only.
- No animation of layout properties (top/left/height); transform and opacity.
- No loop/autoplay motion. Nothing moves unless touched.
- No invented per-book copy; no star-scoring other than the 33 real stars.

## 5. Top 3 must-haves
1. **The structure carries meaning:** time and stars visible at a glance (and 2023's gap shown).
2. **All 104 in plain HTML** with a full-quality no-JS and reduced-motion experience; the interaction is CSS-first.
3. **Fix the defects first** (wrong cover, dead filter row, edge, long titles, sapiens duplicate), because they are what makes the page look unfinished, whatever else ships.

## 6. Quick verdicts
- **3D bookshelf:** kill. Looks like 2012, fails at 390px, fights the printed-object tone.
- **Carousel:** kill. Hides 104 books behind arrows, bad for SEO and keyboard, wrong object (print is a page, not a slider).
- **Cover wall:** keep only as a *secondary mode*, never the default; it is the Goodreads look.
- **Filter chips:** keep, but fix. The empty "All" chip is a defect; as a set-in/sort control it is fine. Chips as the main idea: kill.

**My ranking:** A (Ledger) as the base page, C (strip) as its masthead, B as a later flourish if Ganis supplies the face mapping.

**Next step:** panel to decide the motion cap above (one mechanism, input-caused only) before any option is mocked.
