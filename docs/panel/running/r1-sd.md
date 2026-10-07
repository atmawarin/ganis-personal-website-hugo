# R1 · SD seat (layout, edges, rhythm, themes)

## Thesis
/running/ is an essay with a ledger, not a two-column dashboard. The race log is **content that wants width**; crushing it into 20rem is the single biggest defect. Fix: essay on top at reading measure, race log as a full-width table-like ledger under it, one live "this season" strip that is a quiet teaser for the log. The dashboard is a **different room**: it may stay Bauhaus, but the door between rooms must be honest and the seams (header, back link) fixed. Chrome stays quiet; the page's one loud thing is the red distance numerals in the ledger.

## Spec: /running/ (markup)
Replace `about-grid` with three stacked blocks, all inside the standard `.block` padding (they already share `--edge`):

1. `.title-block` unchanged.
2. **Stats block** (`.bignum`): keep, but values come from front matter fed by log data (PM/SEO lane owns the facts). Max 4 cells. Split into two honest rows via a label in the first cell: row 1 = this year (from the log), row 2 not needed. Put a mono caption under the strip: `2026 · synced from the live log` as `.bignum__src`, linking to `/running/log/year.html` (target >= 40px via padding).
3. **Essay block**: `<section class="block"><div class="prose prose--run">` containing `.Content`. `.prose--run { max-width: 38rem; }` (left-aligned on `--edge`, NOT centered; the title-block and rules are left-edged). The CTA `.cta-line` stays directly after the prose, same edge.
4. **Ledger block**: `<section class="block"><h2 class="block__h"><span class="slug">Race log</span></h2><ol class="races">...`. Full width of the edge, border-top 2px var(--ink) from `.block__h`.

## Spec: race rows (CSS replaces the `.race*` rules)
```
.race{display:grid;grid-template-columns:6rem minmax(0,1fr) 5.5rem;grid-template-areas:"date name dist" ". body body";gap:4px 28px;padding:20px 0;border-bottom:1px solid var(--rule);align-items:baseline}
.race__date{grid-area:date}
.race__name{grid-area:name;font-size:clamp(1.35rem,1.1rem+1vw,1.6rem);text-wrap:balance}
.race__dist{grid-area:dist;text-align:right;font-size:clamp(1.6rem,1.3rem+1vw,2rem);font-variant-numeric:lining-nums}
.race__body{grid-area:body;max-width:46rem;font-size:1.0625rem;line-height:1.5;text-wrap:pretty}
.race__where{display:block;margin-top:4px}   /* location moves under title, one line */
```
- **1280:** ledger spans the full edge width (~1100px). Name and distance sit on one baseline; the body paragraph is capped at 46rem so lines stay readable. `.race__dist` right edge aligns to the rule's right end (no overhang: today it hangs off because the 7rem column is narrower than "42K" at 1.8rem plus italic overshoot; give it padding-right 2px).
- **390:** `grid-template-columns:1fr auto; grid-template-areas:"date date" "name dist" "body body"; gap:2px 12px`. Date is a mono label above the title (current behaviour, keep). Distance stays top right on the title baseline.
- Rows are not links; the only link is "The whole story" inside body. No hover treatment on rows.
- Optional rhythm accent: the newest row only gets `border-top` none; do not add zebra, icons or cards.

## Dark mode
No new tokens. Everything above uses `--ink`, `--rule`, `--muted`, `--ink-2`, `--red`. Check: `--red` on dark paper for 1.6-2rem italic 800 text passes large-text 3:1 (verify with the existing dark `--red`; if it is below 3:1 use `--red-dark-text` already used by the about page levels labels). `.cta-line:hover` invert is already token-based. Do not hardcode `#fff`.

## Dashboard: native or Bauhaus? Ruling
**Stay Bauhaus. Do not restyle it to Specimen Book.** Reasons: the Bayer tribute is the content of that page, it is a deliberate designer-voice room (each theme looks like its designer), and restyling is a second project with a JS/Python byte-identical constraint. Making it "native" would flatten the one thing on the site that has a point of view. Instead fix **the seams only** (cheap, CSS/markup in the dashboard repo or the shared header):
1. **Exit/entry pair.** Dashboard nav-home link reads `← ganisatmawarin.com`; change to `← Running` pointing at `/running/` (visitor came from there). Make it >= 40px tall, opacity 0.6 -> 0.85 so it is findable.
2. **Hugo side**: the door is a labelled hand-off, not a button: CTA copy `Open the live log (Bauhaus edition) →`. One honest line of mono caption: `A different room, on purpose.` Needs Ganis's voice approval.
3. Keep `<title>`, favicon and canonical as they are (SEO's lane); do not inject Hugo header/footer into the dashboard.
Contrast to fix regardless: dashboard grey subtitle on cream and `#B89A1E` nav on black are low; touching only if PM rules it in.

## Question B (from my lane)
**Recommendation: option 2, keep the separate repo, fix the seams. Do not merge (option 3).** Visually nothing is gained by merging: the dashboard would still be Bauhaus, only its source moves. Merge risk is entirely non-visual (functions, blobs, token, phone ingest) and the brief's hard constraint is never break ingest. If the seams above are fixed, a visitor cannot tell, and does not care, which repo serves the room. Confidence 8/10 from design lane. Revisit merge only if PM/IxD find a real maintenance cost.

## Must-nots
- No two-column layout for the ledger; no sidebar again.
- No card boxes, shadows, icons, sparklines, or charts on the Hugo page (the log owns charts). No embedded iframe of the dashboard (second typography stack, scroll trap, SEO duplication).
- No scroll animation; hover only under `(hover:hover)`.
- No hardcoded colours; no new accent beyond `--red`; the red appears only on distances and the CTA hover state is ink, not red.
- Do not centre the essay or stats; everything shares `--edge`.
- No stale-year stats presented as current: label every number with its period.
- Do not touch the unrelated about-page CSS (`.journey`, `.bl*`, `.play*`) living further down the same file; `.about-grid` stays defined (other pages use it), just stop using it here.

## Top 3 must-haves
1. **Ledger at full width** with the grid areas above: titles on one or two lines, distance aligned to the rule end, zero overhang at 1280 and 390.
2. **Essay capped at 38rem on the left edge**, CTA directly under it, stats strip above with period-labelled current numbers and a source caption.
3. **Seam fixes, dashboard stays Bauhaus**: `← Running` back link, honest hand-off line on Hugo side, no restyle, no merge for design reasons.
