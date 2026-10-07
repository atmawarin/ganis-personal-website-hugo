# r1 · IxD seat · /running/ and the run log

## Thesis
**Nothing a visitor touches should change, and nothing the phone touches should move.** /running/ is a page you read; the log is a dashboard you poke. The job of the page is to hand the visitor across the seam in one obvious tap, with one honest current number, and to never make the phone's URL a casualty of a design tidy-up. The phone path is the only part of this brief with real downside; the visitor path is cheap. Spend the care on the phone.

Facts I read: the proxy is `[[redirects]] /running/log` and `/running/log/*` to run.ganisatmawarin.com, status 200, above the `/running/*` 301 (order matters, keep it). The phone posts to `/api/ingest` on the **run.** host (README: `https://<site>.netlify.app/api/ingest`); the Hugo site has no `/api/*` rule, so the phone does not go through ganisatmawarin.com today. Dashboard JS fetches `api/data/<name>` relative, so under the proxy it hits `/running/log/api/data/*`. Snapshot `data/stats.json` is stale (lastRun 2026-09-26; live screen shows 2026-10-05), so a build-time number would be wrong within days.

## EXACT SPEC (option 2 shaped; page only touches the Hugo repo)

### 1. Race rows (fixes the crushed sidebar)
- Drop `.about-grid` for the race log. Make it a full-width `<section class="block">` under the prose. Prose keeps its measure (`.prose`, ~38rem); race list uses the full container.
- Row = 3 columns at >= 720px: `date (6rem, mono, ink-muted) | name + where (1fr) | distance (4.5rem, right-aligned, red)`. Body text sits in the middle column under the name, max 38rem, so it never spans the full row.
- Below 720px: date and distance share a first line (date left, distance right), name next, where under it, body last. Distance never leaves the viewport: `min-width:0` on the middle column, `overflow-wrap:anywhere` on the name.
- Rows are not controls. No hover, no chevron, no accordion, no `<details>`. Body text is always visible (it is the content; SEO wants it in the DOM, and 6 rows is short). Zero JS.
- The one inline link in a body (Kraton "The whole story") keeps a min 40px tall hit area via `padding-block` on the anchor with `display:inline-block`.
- Order: newest first, as now. Date format "Aug 2021" stays.

### 2. How the page links into the log
- **Primary link, placed above the race list, right after the prose:** one full-width block link (not the small button): `Open the live running log →`, `min-height:48px`, mono caps, ink border, red text on focus/hover (hover only under `@media (hover:hover)`). Plain `<a href="/running/log/">`, with trailing slash (the dashboard JS redirect for no-slash exists but costs a hop).
- **Secondary, in the strip (below):** the whole strip is one anchor to `/running/log/`. One link target, not five. No per-number links.
- Footer/nav links stay as they are. Do not add `target=_blank`: the log is the same domain under the proxy, back button must return to /running/.
- Add `rel` nothing special. Do not link to run.ganisatmawarin.com anywhere (SEO seat owns this; it also keeps the visitor on one origin).

### 3. Live strip: yes, but build-time first, no client rendering
Decision: **a static strip rendered by Hugo, with a client-side refresh that is optional and never required.**
- Markup (server-rendered, one `<a class="runstrip" href="/running/log/">`): `2026 so far: N runs · X km` and `Last run: D Mon`. Source: a committed `data/running.json` snapshot copied from the running-log `stats.json` with an explicit `as of` date shown in the strip ("as of 5 Oct"). A date-stamped number is honest; an undated one rots.
- Needs Ganis: who refreshes the snapshot (manual copy at deploy, or a Hugo `resources.GetRemote` of `/api/data/stats.json` at build). I recommend **GetRemote with a hard fallback to the committed file** (`with try`/`errors`), so a down log never fails the Hugo build. Staleness bounded to deploy cadence; label it with the date.
- Optional enhancement (<= 15 lines inline JS, no framework, no fade): on load `fetch('/running/log/api/data/stats.json')`, replace the two text nodes and the as-of date. No layout shift (same-width mono text, reserved min-width), no animation, no loading state. On any failure, do nothing. With JS off or API down the page is identical to the static strip. I rate this nice-to-have; **cut it first if Ganis wants less surface.**
- Not allowed: sparkline, heatmap, chart, per-week bars on the page. Those are the dashboard's one signature visual each. The page has no signature interaction (home page only).
- The strip replaces the four stale stats (1,123 km 2021 etc.). Keep "best 10K" and the 5:17 line only if Ganis confirms they are still wanted; they are hand-written facts, not log data. Flag, do not delete.

### 4. Dashboard nav seam back to the site (small, only in running-log repo, PM rules)
Today the nav has `← ganisatmawarin.com` (links to the home page, absolute, correct). Minimal fix, no redesign:
- Change that link text to `← Running` and `href="https://ganisatmawarin.com/running/"` on all four pages (visitor came from /running/; "home" is the wrong landing). Keep the Bauhaus styling; it already clears 40px? Verify: set `min-height:40px; display:inline-flex; align-items:center` on `.nav-home` (currently 4 lines of text at 390px, small target).
- Bump `?v=N` on `css/shared.css` in **all four** HTML files if the CSS changes (documented bug source, `max-age=300`).
- Add a visible `:focus-visible` outline on `.nav-link` and `.nav-home` if missing (check; I did not read all of shared.css).
- No cross-site header transplant. Visitors tolerate a deliberate "different room"; two headers fighting is worse.

## CUTOVER PLAN AND RISKS FOR QUESTION B (phone ingest)

Phone contract today: `POST https://run.ganisatmawarin.com/api/ingest` (confirm with Ganis which host is in the HAE automation: run.* or *.netlify.app), header `x-api-key: <HAE_INGEST_TOKEN>`, JSON, routes off. Function reads `process.env.HAE_INGEST_TOKEN`, writes blob store `runlog` keys `runs`, `seed-fingerprint`, `last-unparsed-payload`. Reads `/api/data/:file`, CDN 60s. Functions bundle `data/activities.json` via `included_files` (seed).

### Option 1 · keep as is, proxy only
- Cutover: none. Phone untouched. Risk: **lowest**. Residual: proxy `/running/log/*` depends on run.* staying up; two deploys; `run.*` stays publicly indexable (SEO seat).
- Must do: nothing to ingest. Verify post-change that the Hugo `netlify.toml` proxy rules still sit above `/running/*` 301.

### Option 2 · separate repo, native-feeling log, fix seams (my pick)
- Cutover: none for ingest. Only front-end edits in running-log (nav seam, `?v` bump) deployed by push to main there. Phone, token, store, env var all untouched.
- Risks: a CSS/JS edit without `?v` bump blanks the log (has happened twice). Test: `npm test` in running-log, DOM check of `window.__runlogSource === 'live'` after deploy with `?nocache=`.
- Rollback: revert the commit in running-log; one deploy, phone unaffected.

### Option 3 · merge into this repo (one site)
Steps, in order, none done without Ganis:
1. Copy `netlify/functions/*`, `lib/`, pages, css, js, `data/` (2.3 MB) into Hugo `static/running/log/` (pages) and `netlify/functions/` (root). Add `[functions] directory`, `node_bundler = "esbuild"`, `included_files = ["data/activities.json"]` (path must still resolve; seed code tries `process.cwd()/data/activities.json` and `../../../data`). Add `@netlify/blobs` to a new root `package.json` (Hugo repo has none today; Netlify build now runs npm install).
2. Remove the `/running/log` proxy rules; replace with real static paths. Keep `/running/*` 301 below. Hugo `static/running/log/` collides with `content/running/` section URL space: verify `/running/log/` serves `index.html` and the 301 does not catch it (static files win over `[[redirects]]` only with `force=false`, which is default for 200s on existing files; test on a deploy preview).
3. **New Blobs store** on the new site: it starts **empty**. Function re-seeds from the committed snapshot on first request (`loadRuns` empty-store path). Any run the phone sent since the last snapshot commit is **lost from the store** unless first exported: run `sync.sh` (rebuild snapshot from iCloud) and commit before cutover, or export the old store (`runs` key) and import. Never skip.
4. Set `HAE_INGEST_TOKEN` on the **Hugo site** env (same value). **Env var changes need a redeploy**; sequence: set var, trigger deploy, then verify.
5. Phone: keep the old URL working during overlap. Either leave run.* live and **point the phone at `https://ganisatmawarin.com/api/ingest`** after the new site answers 200 to a curl with the token and a fake workout dated 2026-12-31 (the test-fixture convention); or add `run.ganisatmawarin.com` as a domain alias to the Hugo site so the unchanged phone URL lands on the new function. The alias is the safer one: phone config never changes. DNS TTL window is the risk.
6. Verify: curl POST 401 without key, 200 with key; record a real run on the watch; check `/running/log/api/data/summary.json?nocache=<ts>` shows it; keep old site alive 7 days; watch both stores for divergence.
- Risks: dual-write split (phone hits old, readers read new) causing a visible gap; empty-store reseed overwriting nothing but dropping phone-only runs; 2.3 MB `data/` and functions bundle slow every Hugo deploy and each deploy preview (PRs get previews and would run functions and read **production** blobs? Previews have a separate blob deploy context: verify before trusting); `HUGO_VERSION` build now needs Node; the PR preview baseURL breaks the dashboard's canonical (hard-coded). Python/JS byte-parity tests need a home. **Highest risk; payoff is cosmetic.**
- Rollback: repoint DNS alias or phone URL back to old site; old store is intact until deleted.

### Option 4 · something else: **same as option 2, plus one safe rewrite**
Add to Hugo `netlify.toml` a proxy of `/api/*` to run.* (status 200) so the phone *could* use ganisatmawarin.com later. Do not move the phone now. Skip unless Ganis wants the run.* hostname retired; then the phone move becomes a one-line HAE URL change with the old URL still alive. Risk: Netlify forwards `x-api-key` on proxy 200s (it does), but adds latency and a second failure point for ingest.

## Must-nots
- Do not change the phone URL, token, header name or `HAE_INGEST_TOKEN` as part of "improve the page". Do not rotate the token in the same change as a move.
- Do not delete or edit run.* DNS/site until 7 days after any cutover.
- No client-rendered content that matters; the strip's static text must exist without JS.
- No scroll animation, count-up numbers, fade-ins, skeletons or spinners on /running/. No second signature interaction.
- No hover on touch: all hover under `(hover:hover)`. No target < 40px (strip, CTA, nav-home, in-body links).
- Do not reorder the `[[redirects]]`: `/running/log*` proxies stay above `/running/*`.
- Do not show precise times/locations in the strip (BB owns; I show year totals and last-run date only).
- Do not touch the dashboard's design beyond the nav seam.

## Top 3 must-haves
1. **Phone ingest untouched and verified** (curl 401/200 with a 2026-12-31 fixture after any deploy that could affect it).
2. **Race rows full width, no wrap crush at 390px**, distance always in viewport, targets >= 40px.
3. **One honest, dated live strip, static first** that links to `/running/log/`, plus the `← Running` seam back from the log.

## Recommendation
**Option 2.** Keep two repos; do the page rebuild in this repo, the nav seam in running-log. Confidence 8/10. Option 3 buys one repo at the price of the only thing in this project that can silently lose data (empty blob store, env var redeploy, DNS alias). The log is read by almost no one but Ganis; the cosmetic win does not pay for that risk. Revisit option 3 only when a second function or auth is needed.

## Next steps / decisions needed
- Ganis: which host is in the Health Auto Export automation today? Keep or drop "best 10K" and "5:17" stats? GetRemote at build or manual snapshot for the strip?
- Not verified by me: full `css/shared.css` focus styles; deploy-preview blob behaviour; whether Netlify serves Hugo static `index.html` ahead of the 200 proxy (option 3 only).
