# R1 · TY seat (Typography): /running/ and the log

## Thesis
**A runner's page is a table of figures with a story attached, so set the figures like figures.** The current page fails on measure and on numerals, not on face choice. The crushed 20rem column, the hanging italic "42K" and the "99 / 1:02 / 5:17" stats mixing a count, a time and a promise all read as noise. Fix: one wide column of race rows with a real ledger grid, lining tabular numerals in Fraunces for stats, Plex Mono for every label, and a date convention that never claims more precision than the stubs hold. The dashboard's type is a separate, deliberate Bayer tribute. Keep it as it is, and do not let it leak in.

## Findings (what I read)
- Race rows today: `grid 8rem 1fr 7rem` inside a 20rem sidebar. That leaves roughly 4rem for the title, hence 3-4 line titles. `.race__dist` has no `lining-nums`, and 1.8rem italic 800 at the right edge overflows.
- `.bignum b` is Fraunces 800 with **no `font-variant-numeric`**. Fraunces defaults to oldstyle-ish proportional figures in places, so "1,123" and "1:02" are not aligned or lining. Compare the shelf rows (main.css:518-588), which already use `tabular-nums lining-nums`.
- The dashboard loads **four families**, not two: Bebas Neue (nav, caps), Josefin Sans (headlines and numerals), Work Sans (body), Space Mono (data). Weights: Josefin 400/600/700, Work Sans 400/600/900. Two Google Fonts requests (an `@import` in shared.css plus a `<link>` in index.html). The `@import` is render-blocking and serial.
- **Fact conflict to flag to Ganis:** the page says "1,123 km in 2021" and "99 runs, Jan to Jul 2019". The dashboard heatmap shows **2021: 938 km / 178 runs** and **2019: 733 km / 187 runs**. The hand-typed stats may use another source (Strava vs. archive). Reconcile before any number is shown.

## Exact spec (my lane)

**Stats strip (replace the four stale stats; numbers come from `data/stats.json`, none invented)**
- Numeral: Fraunces, wght 700, `opsz 144`, `font-variant-numeric: lining-nums tabular-nums`, `letter-spacing: -0.01em` (not -0.02; the comma needs room), `line-height: 1`, size `clamp(2.25rem, 1.6rem + 3vw, 3.25rem)`, `white-space: nowrap`.
- Unit ("km", "runs") is NOT inside the numeral. It sits in the label, or as a Plex Mono 0.72rem suffix on the baseline, in `--muted`.
- Label: Plex Mono 400, 0.72rem, uppercase, `letter-spacing: .08em`, `--muted`, max 2 lines, **one fact per label**. Drop the jokes from the labels ("which I will now defend forever") and move them into prose. A label is a caption, not a punchline.
- Four stats max. Order by time: this year, last year, all-time km, best 10K. Same units across the row (all km or all counts); do not mix a time value with a promise.
- Times set as `1:02` with a true colon and `tabular-nums`. Write "1:02:xx" only if the log has the seconds. Do not round.

**Race rows (full width, ledger)**
- Move the log out of the sidebar into a full-width `.races` block under the prose. Grid: `7.5rem minmax(0,1fr) 5.5rem`, gap `6px 24px`. Mobile (<=640px): `1fr auto`, date on its own line above (already the case).
- Date: Plex Mono 0.78rem, `tabular-nums lining-nums`, written **"Aug 2021"** (month and year only, as the stubs give). No day. If the log has the exact date, use ISO `2021-08-01`; never mix both styles. Wrap in `<time datetime="2021-08">`.
- Title: Fraunces 700, `clamp(1.35rem, 1.1rem + 1.2vw, 1.6rem)`, line-height 1.12, `text-wrap: balance`, `font-synthesis: none`. Do not set it at 600 in one place and 700 in another.
- Distance: **upright, not italic.** Fraunces 700 (not 800), 1.5rem, `lining-nums tabular-nums`, right-aligned, red, `white-space: nowrap`. The unit is a smaller Plex Mono: `42<small>K</small>` becomes "42" plus "km" at 0.7em. Convention: **"42 km"**, lowercase, thin space (U+2009) or `&nbsp;`. Drop the capital K, because the stubs use "13K" and the stats use "km", which is inconsistent. 10 km, 13 km, 21 km, 42 km.
- Where line: Plex Mono 0.72rem, uppercase, `.06em`. Keep, but allow it to sit on one line now that the column is wide.
- Body: Newsreader 1.05rem, `--ink-2`, `max-width: 62ch`, `text-wrap: pretty`, left edge aligned with the title (column 2).
- Race page links ("The whole story") use the normal underlined link, not a new style.

**Measure**
- Prose column: `max-width: 66ch` (Newsreader 1.125rem). Today's left column on a 1280 screen is roughly 70ch. Fine, but cap it explicitly now that the layout is changing.
- Bulleted list of 2022 goals: keep. Numbers inside it ("5:17", "42 km", "21 km") get `tabular-nums lining-nums`. "42 km twice, 21 km four times" should read with the same unit convention as the rows.
- Pull dek: Fraunces 400, as today.

**Dates and attributions**
- "Last synced" and any live strip: `Mon 5 Oct 2026` is the editorial form. Do not show ISO with a time of day on this page. The dashboard shows `2026-10-05`; leave that there.
- Quotes: curly quotes and a true apostrophe (the dek and prose already use straight `'` in "I'll", "It's". Check the source for `’`). En dash for ranges ("Jan–Jul 2019"), never a hyphen between months.
- No small caps needed. Plex Mono uppercase with tracking already does that job; do not add `font-variant-caps`.

**Should the dashboard's two typefaces stay?** There are four, and **yes, keep them on the dashboard**, with one cost-trim. Reasons:
- The Bayer tribute is the content. A lowercase geometric sans (Josefin, a fair substitute for Bayer's 1925 Universal; the true face is not available) is what makes it a tribute. Re-setting it in Fraunces would delete the idea.
- It is a visibly different room: black bar, yellow, Bebas caps. Keeping the type separate makes the "seam" an honest door, not a half-restyle.
- Honesty note: the tribute copy says "we write everything small", but the nav is Bebas Neue in all caps, the opposite of Bayer's thesis. If you touch anything, that is the contradiction, not the font count. Flag to Design; do not fix unprompted.

## Font-loading cost if the dashboard moved into this repo (question B, my lane)
- Today: the main site loads Fraunces (variable, opsz/wght/SOFT/WONK, ital) + Newsreader + Plex Mono. Dashboard adds Bebas Neue, Josefin Sans (3 weights), Work Sans (3 weights), Space Mono. They load only on `/running/log/*` pages, so **no cost to other pages as long as the font link stays on the dashboard templates and is not hoisted into `head.html`.** The danger is that a shared `head.html` partial gets used on the dashboard pages and loads Fraunces et al. there (roughly 3 extra families on pages that do not use them).
- If merged: put the four-face `<link>` in the dashboard layout only; `preconnect` already exists. Replace the render-blocking `@import` in shared.css with a `<link>` (the index.html already has one for three of the four; Space Mono is only in the `@import`). Self-hosting is the better fix but is not required.
- Worst case per dashboard visit: 4 families, about 7 font files. Acceptable for a personal dashboard. Do not exceed it. Do not add Fraunces to the dashboard to "harmonise".
- Moving or not does not change type cost by itself. It only matters if the merge makes the dashboard share the main stylesheet.

## Recommendation, question B (from TY)
**Option 2: keep the repo separate, fix the seams.** Type is no argument for a merge: the dashboard's faces cannot be shared with the site's, and a merge risks leaking one set of fonts into the other. Seams worth fixing (typographic only): an `h1`/title that says "Run, Ganis, Run!" is fine; make the "← ganisatmawarin.com" link larger (Space Mono 0.75rem at `opacity .6` is below comfortable contrast and target size); load the fonts without `@import`. Everything else (data, ingest, privacy) belongs to other seats. Confidence **7/10**.

## Must-nots
- No oldstyle or proportional figures in any stat, date, distance or race time.
- No italic 800 distances. No synthetic bold (`font-synthesis: none` on display titles).
- No red on body text. Red is for the one distance column, plus the CTA hover as today.
- Do not bring Bebas, Josefin, Work Sans or Space Mono into the Hugo stylesheet. Do not bring Fraunces into the dashboard.
- No mixed unit styles on one page (42K / 42 km / 42 kms).
- No invented numbers or exact dates. Month and year only unless the log gives the day.
- No measure over 72ch; no column under 28ch for race titles.

## Top 3 must-haves
1. **Full-width race ledger** (7.5rem / 1fr / 5.5rem), upright red distance with "km", title one to two lines.
2. **Stats set as figures:** Fraunces lining tabular numerals, Plex Mono caption labels, one unit convention, numbers from `data/stats.json`. Reconcile the 1,123 / 99 vs. 938 / 187 conflict first.
3. **Dashboard type left alone, font links scoped to the dashboard only** (no `@import`, no leakage of site fonts), whichever way question B goes.
