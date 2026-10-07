# Brief: improve /running/, and decide whether run.ganisatmawarin.com moves into this repo

**Tier: L.** Touches a page's structure, the proxy/redirect rules in `netlify.toml`, and possibly where a second site lives. All seven seats.

**Ganis's ask (verbatim):** "Improve the running page. Check the panel whether we should move run.ganisatmawarin.com into this instead."

## Current state (screens in `docs/panel/running/screens/`)
- `running-1280.png`, `running-390.png`: the Hugo page `/running/` (`layouts/running/list.html`, `content/running/_index.md`, six race stubs in `content/running/*.md`, CSS under `/* running */` in `assets/css/main.css`).
- `runlog-*-1280.png`, `-390.png`: the live dashboard, served at `ganisatmawarin.com/running/log/` (also at `run.ganisatmawarin.com`). Pages: index (this week), year, alltime. Month is `month.html`.

### What is visibly wrong with /running/ today
1. The race log sits in a 20rem sidebar (`.about-grid`), so the race rows are crushed: titles wrap to 3-4 lines, the red distance ("42K") hangs off the right edge, and the column is far longer than the left column.
2. The four stats are stale and about the past (1,123 km "in 2021", "99 runs, Jan to Jul 2019"). The live log has 2026 numbers; the page never shows them. Its only link to the log is one small button.
3. The page and the log feel like two different sites (warm paper + Fraunces vs. a Bauhaus yellow/black dashboard with Herbert Bayer tribute). Visitors who click through land in another design with a different header.

### What run.ganisatmawarin.com is (facts, from `/Users/ganis/Code/running-log`)
- Separate repo and Netlify site. Static pages (`index/month/year/alltime.html`, `css/shared.css`, `js/runlog-*.js`) plus **two Netlify Functions**: `/api/ingest` (phone posts workouts from Health Auto Export, auth by `HAE_INGEST_TOKEN` header `x-api-key`) and `/api/data/*` (reads **Netlify Blobs** store `runlog`). Committed `data/*.json` (~2.3 MB, mostly `strava-archive.json` 1.8 MB) is the fallback and the blob seed. Python rebuild script + 2 test suites; JS and Python aggregation must stay byte-identical.
- The Hugo repo already proxies it: `netlify.toml` rewrites `/running/log` and `/running/log/*` to `https://run.ganisatmawarin.com/` (status 200). Dashboard paths are relative, canonical points at `ganisatmawarin.com/running/log/`. `hugo.yaml` `server.redirects` sends local dev to the run domain. Footer and nav already link `/running/log/`.
- So the **URL is already unified**. The open question is **source and hosting**: keep two repos + proxy, or move the dashboard (static pages, functions, blobs, env var, phone automation) into the Hugo repo/site.

## The questions for loop 1
A. **Page:** what should `/running/` be? Fix the layout, bring real current numbers in (from the log's data, no invented facts), keep Ganis's voice, and decide how the page and the log relate (embed a live strip? link? restyle the log?).
B. **Move or not:** options are (1) keep as is, proxy only; (2) keep separate repo, make the log look native and fix the seams; (3) merge the dashboard into this repo (one repo, one Netlify site, functions + blobs here); (4) something else. Each seat rules in its lane and gives a recommendation with the risk it sees. SEO owns URL/301/canonical/duplicate-content (run.* domain indexable alongside /running/log/?). BB owns the privacy question (precise run dates, times, locations and heart rate are public on a personal site). PM owns the cost/benefit and the four jobs. IxD owns the ingest/phone path and whatever a visitor touches.

## Hard constraints
- **Never break the phone ingest.** If anything moves, the Health Auto Export URL/token path must keep working, with a cutover plan. Nothing is deployed or merged without Ganis saying so.
- Never invent numbers, dates or anecdotes. The facts available: `content/running/*`, `data/*.json` and live `/api/data/*` in the running-log repo. The page copy keeps its current voice; propose edits, flag those needing Ganis.
- Site standing rules apply (paper/ink/one red, Fraunces/Newsreader/Plex Mono, no trackers, no scroll animation, hover under `(hover:hover)`, targets >= 40px, no client-side rendering of content that matters for SEO).
- Only change what was asked: do not touch the dashboard's design unless a seat recommends it and PM rules it in.
- Working tree already has unrelated uncommitted about-page work. Do not touch or commit those files.

## Sources for facts
`content/running/_index.md`, `content/running/*.md`; `/Users/ganis/Code/running-log/{CLAUDE.md,README.md,data/stats.json,data/summary.json,netlify/functions/*,netlify.toml,*.html}`; live `https://ganisatmawarin.com/running/log/`.
