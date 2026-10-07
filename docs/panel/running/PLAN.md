# PLAN: /running/ and the run.ganisatmawarin.com question

Loop 1, all seven seats (memos `r1-*.md`). Rulings below are binding for the build.

> **Open risk, decide first (BB, urgent).** This page is careful to show no times or places, but the open feed behind its call-to-action, `/running/log/api/data/activities`, returns every run with start time to the second and neighbourhood names. Owner: Ganis. Question for today: is the `running-log` GitHub repo public? Default if unanswered: ship the allowlist with a 24 h delay on the latest run and heart-rate zones only.

## Answer to "should we move run.ganisatmawarin.com into this repo?"
**No. Keep two repos behind the existing proxy. 6 of 6 seats that ruled said so (V did not rule on it), confidence 7-8/10.**

Why, in one line each:
- **The URL is already unified.** `/running/log/` proxies the dashboard today. A merge changes only the source, never what a visitor sees (SD, PM).
- **All the merge risk is the phone ingest** (functions, Blobs store, `HAE_INGEST_TOKEN`, the URL in Health Auto Export). Blobs would not migrate; an empty store re-seeds from the committed snapshot and loses phone-only runs (IxD). 12 to 20 hours for a cosmetic gain (PM).
- **Hugo deploys would gate the phone** and add a 2.3 MB `data/` folder and a Node build step (IxD, PM).
- Not a reason to merge: type, SEO, or brand (TY, SEO, BB).

The work is on the page, plus three small fixes in the dashboard repo that I am **not** making without Ganis's go (see "Dashboard repo, needs a yes").

## Unanimous
- Kill the sidebar. The race log goes full width below the essay (the cause of the crushed titles and the "42K" overhang).
- Cut the stale stats. Replace with current numbers from the log, with a visible "as of" date.
- Keep the voice paragraphs and the 2022 list verbatim; the six race stubs stay verbatim.
- No iframe, no chart, no heatmap, no scroll animation on the Hugo page. No phone, token or ingest changes.
- Keep the `/running/log` proxy rules above the `/running/*` 301.

## Rulings on disagreements
| Issue | Ruling | Reason |
|---|---|---|
| Live-refresh script on the strip (IxD optional, PM yes, SEO "never client-side") | **No JS.** Build-time snapshot, dated | SEO: stats must be in the HTML. The snapshot is ~10 days old, so the date label is the honesty |
| Stats cells | **Four:** 2026 km and runs so far, same stretch of 2025, 2021 best year, best 10K 1:02 | Numbers come only from `stats.json`. 5:17 leaves the block (a wish, not a result); 99 runs and 1,123 km are cut |
| 2021 figure (page said 1,123 km; log says 944.4 km, heatmap says 938) | **Use the log's 944.4, shown as "944 km"; flagged for Ganis** | The log is the source of truth the page links to; shipping a number that contradicts it is worse |
| Last-run ticker (PM, IxD yes; BB no) | **No last run, no pace, no time.** Aggregates only | BB: predictable schedule plus area is a real privacy risk |
| CTA | One block link, "See every run in the live log →", after the essay | V's wording; PM says one link |
| Nav seam in the dashboard (`← Running`) | Proposed, not applied here | Other repo |
| Title / description / JSON-LD | Rewrite description; add `ItemList` of races, `inLanguage`, Person link, real `dateModified` | SEO must-have 3. `seo_title` left as is: the current title is fine and 55-char rule would drop the brand |
| 1:02 best 10K (PM: drop as duplicate; V: keep) | **Keep** | It is the page's one joke-adjacent number and V owns it |

## Build spec (this repo only)
1. `data/running.json`: snapshot of `stats.json` values (2026 YTD 341.9 km / 90 runs; 2025 same stretch 127.6 km; 2021 full year 944.4 km; as-of 27 Sep 2026), with source note.
2. `layouts/running/list.html`: stack title, stats strip (each number with a Plex Mono caption), prose at 38rem on `--edge`, CTA, then the race ledger full width. Stats from `data/running.json`; as-of line under the strip.
3. `content/running/_index.md`: drop the `stats` front matter; description per SEO; tighten lead-in and closing paragraph per V; keep paragraphs 1 and 2 and the list verbatim.
4. `assets/css/main.css` `/* running */`: ledger grid `7.5rem 1fr 5.5rem` at 720px+, date and distance on one line on mobile; distance upright red Fraunces 700, "42 km"; tabular lining numerals; targets 40px+; no new tokens. Keep `.about-grid` (other pages use it).
5. Race distance format: front matter `subtitle` "42K" stays; display converts to "42 km" in the template (`replace "K" " km"`).
6. `layouts/partials/schema.html`: `/running/` CollectionPage gets description, inLanguage, author Person `@id`, `ItemList` of `SportsEvent`s (name, startDate, location name).

## Dashboard repo, needs a yes from Ganis (not touched)
1. **Privacy (BB, urgent).** `/api/data/*` is open and returns every run with start time to the second, neighbourhood and hotel names, and heart rate. 68 of 86 runs in 2026 start in the 07:xx hour. Fix: an allowlist (`publicView`) dropping time of day, `health_id`, `source`; coarsen place to city; 24 h delay on the latest run. **First, confirm whether the `running-log` GitHub repo is public**: if so the committed JSON is already public.
2. **noindex (SEO):** `noindex,follow` meta on all four pages and `X-Robots-Tag` in its `netlify.toml`; never Disallow in robots; never 301 `/api/*` on `run.*`.
3. **Seams (IxD, SD, TY):** `← ganisatmawarin.com` becomes `← Running` to `/running/`, 40px target; replace the `@import` font load with `<link>`; bump `?v` in all four HTML files when `shared.css` changes.

## Needs Ganis
- 944 km for 2021 (replacing 1,123): confirm.
- Is `running-log` a public repo? Which host is in the Health Auto Export automation?
- OK to apply the privacy and noindex changes in `running-log`?
- Snapshot refresh: the page numbers go stale until `data/running.json` is updated.
