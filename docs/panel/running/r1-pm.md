# R1 PM: /running/ and the run.* question

## Thesis

**/running/ is an essay with a live pulse, not a dashboard host.** Today it is a stale 2019-2021 museum with a crushed sidebar and a button to a different-looking site. Fix the page (about 3 hours of template and CSS work), put the 2026 numbers on it, and leave the dashboard alone. The dashboard is a working data pipeline (phone ingest, blobs, parity-tested Python/JS aggregation). Merging it buys Ganis nothing a visitor can see, and the phone path is the one thing in this project that must not break. **The URL is already unified; the repo is not the problem. The page is.**

Against the four jobs:
1. Entertain / feel like Ganis: the "What I wanted in 2022" list plus a real 2026 number is the funniest honest thing on the site. Lead with it.
2. Second read: a live "last run" is a reason to return. A frozen 2019 stat is not.
3. Newsletter: the footer form already renders on this page. No extra work, no extra form.
4. Synetica: nothing here. Do not force it (see must-nots).

## Exact spec: /running/ top to bottom

1. **Title block** (keep as is): slug, "Running", dek. No edit.
2. **Now strip** (replaces the 4 stale stats). One row, 4 figures, 2 x 2 on mobile. All from `data/stats.json` / `summary.json`. Nothing hand-typed.
   - `{ytd runs}` runs in 2026 so far
   - `{ytd km}` km in 2026, against `{same period 2025}` km at this point last year
   - `{last run date}` / `{km}` last run (plain words, no pace, no time of day)
   - `{this week runs}` of 3 this week, with the label "the goal I set myself"
   - Below the row, one mono line: `As of {date}. Live: Open the running log →`. This is the only link to the log in the body.
   - **Rendering:** server-rendered at build into the HTML, with its "as of" date visible (SEO and no-JS safe). A ~20-line progressive-enhancement script then fetches `/running/log/api/data/summary` (same origin via the existing proxy, no CORS) and overwrites the numbers and the date. If the fetch fails, the baked values stay. No spinner, no layout shift (fixed-width figures).
   - **Build source:** a small committed `data/running-now.json` in this repo (4 numbers + date), refreshed by hand or a script that copies from the running-log repo. A cron or webhook is out of scope for R1.
3. **Prose, full-width reading column (max about 38rem, left-aligned)**: the current two paragraphs and the 2022 list, unchanged. Keep "I managed some of these. I'm not saying which." as the last line before the race log.
   - Cut the `cta-line` button "Open the live running log" and the last paragraph's duplicate pointer. One link to the log, in the now strip.
4. **Race log, full width, below the prose.** Not a sidebar. A ruled list, newest first, one row each:
   - Desktop grid: `date (6rem) | name + place | distance (4rem, right-aligned red) `, with the one-sentence body under the name, max 38rem. Titles stay on one line at 1280.
   - Mobile (390): date and distance on one mono line above the name; body below. Distance never leaves the row.
   - Show the **six existing rows, no more**. No filters, no table headers. Race stubs stay as the source (`content/running/*.md`). Do not invent results.
   - Fix: the body currently renders inside a 20rem column. That is the root cause; moving to full width fixes the wrapping.
5. **Nothing else.** The newsletter and colophon come from the footer.

## What to cut
- The four stale stats (1,123 km in 2021, 99 runs 2019, 1:02 best 10K, 5:17). **Keep two as prose, not figures**: the 1:02 best 10K already appears in the Ambarrukmo race row, and 5:17 is already in the 2022 list. They are duplicates. 1,123 km conflicts with the log (944 km for 2021 per the dashboard's own stats). **Flag for Ganis: reconcile or drop; do not ship either number.**
- The CTA button and the "linked below" sentence (one link only, in the now strip).
- The `.about-grid` sidebar layout for this page.
- No embedded chart or heatmap. The dashboard owns visuals. A second copy would be a second thing to maintain.

## Question B: options

| Option | Effort | Risk | What Ganis gains | What he loses |
|---|---|---|---|---|
| 1. Keep + proxy (as now) | 0 h | Low. Already working | Nothing breaks; phone path untouched | The seam stays: different header and look on click-through |
| 1b. Keep + proxy + fix the page (**recommended**) | 3-4 h (page, now strip, JS refresh, CSS) | Low. Hugo repo only; ingest not touched | Live numbers on the essay, fixed layout, one clean link to the log | Dashboard still looks like another site |
| 2. Native-look but separate | 6-10 h (shared.css restyle, header/footer parity in 4 HTML files, cache-bust `?v=N` in all four, re-verify the heatmap, chart colours and mobile) | Medium. CLAUDE.md records two past outages from CSS/JS cache mismatch | Seamless click-through | Loses the Bauhaus tribute, which is the best piece of design on either site. Costs hours on something visitors visit rarely |
| 3. Merge repos | 12-20 h (move functions, `included_files` seed, `@netlify/blobs`, env var `HAE_INGEST_TOKEN`, 2 test suites, the Python script, 465 MB export tooling, redirects, canonical, cutover, rollback) | **High.** Ingest URL or token change breaks the phone silently, and blobs do not migrate; a new site means new store and re-seed | One repo, one deploy | A Hugo build now gates the phone pipeline. Two aggregation implementations in a site repo. Nothing a visitor sees |
| 4. Other: leave the repo, retire only the `run.*` host (301 to `/running/log/`) after SEO signs off | 1 h | Low-Med: the phone must keep using the run host for ingest, so the host cannot disappear | Cleaner indexing, no duplicate content | Needs the SEO seat's ruling |

## Recommendation

**Option 1b, plus 4 if SEO says the run host is indexable.** Keep the dashboard in its own repo and site; fix `/running/`; add a build-baked, JS-refreshed now strip. **Confidence 8/10.** The 2 points of doubt: (a) how fresh the baked snapshot must be (the committed `stats.json` is already 10 days old: `updated_at` 2026-09-27 against a last run of 2026-10-05); (b) the privacy ruling from BB on how much run detail (date, distance) to show publicly. Fallback if BB objects to exact last-run date: show "last run: this week / 3 days ago" derived from it, or km-only totals.

Revisit merge only if one of these happens: the dashboard needs Hugo content, a second ingest source is added, or Netlify Blobs pricing/limits bite. None is true now.

## Must-nots
- **Never change the ingest URL, `x-api-key` token, or the run host's `/api/ingest`.** No redirect, rewrite or moved function in front of it.
- Do not move or rename `/running/log` proxy rules; keep them above the `/running/*` 301.
- No invented numbers, dates, race times or anecdotes. Every figure is traceable to `data/*.json` or a race stub.
- No client-only content that matters for SEO: the baked values must be in the HTML.
- No chart, heatmap, embed or iframe of the dashboard on /running/.
- No Synetica pitch, CTA or tie-in on this page. It is the site's most personal page; the quiet route lives elsewhere.
- No pace, time-of-day, route, HR or GPS on the main site.
- Do not touch the dashboard's design in R1.

## Top 3 must-haves
1. **Race log full width** (kills the wrapping and the off-edge "42K"). Fixes the loudest visible defect.
2. **A now strip with real 2026 numbers**, baked in with an as-of date and live-refreshed, replacing the stale stats.
3. **One link to the log**, in the strip, labelled for what it is. No duplicate pointers.

## Next step / decision needed
- Ganis: ruling on the 1,123 km vs 944 km discrepancy (drop or reconcile).
- Ganis: OK on showing the last-run date and distance publicly (BB to confirm).
- SEO: ruling on indexing `run.ganisatmawarin.com` vs `/running/log/`.
- Nothing is edited, deployed or merged until Ganis says so.
