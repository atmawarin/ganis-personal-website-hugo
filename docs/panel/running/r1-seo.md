# R1 · SEO seat: /running/ and the run.* question

## Thesis
**/running/ is the only running URL worth ranking. The dashboard is a tool, not a page.** It renders empty without JS, has no description, and is already canonicalised to a path that is itself thin. Do not spend SEO effort making it indexable. Spend it on making /running/ a real, server-rendered page with current numbers.

## Verified facts (curl, 2026-10-07)

| Check | Result |
|---|---|
| `run.ganisatmawarin.com/` | 200, Netlify, `cache-control: public,max-age=300`. **No `X-Robots-Tag`, no `noindex`.** |
| `run.*/robots.txt` | **404** (Netlify HTML 404). So no robots rules at all. Crawlers treat a 404 robots as allow-all. |
| `run.*/sitemap.xml` | 404. |
| `ganisatmawarin.com/running/log/` | 200 via proxy. **Same ETag as run.*/** (`d5ee0155...`), byte-identical HTML. |
| canonical on `/` (both hosts) | `https://ganisatmawarin.com/running/log/`. Good. |
| canonical on `/alltime.html` | `https://ganisatmawarin.com/running/log/alltime` (no `.html`). Resolves on both hosts, so OK, but fragile (see M3). |
| `<title>` | `RUN, GANIS, RUN!` on every page except "ALL TIME - RUN, GANIS, RUN!". Brand-less, keyword-less. |
| meta description / og:* / twitter / JSON-LD | **None** on the dashboard. |
| `<html lang>` | `en`. Correct for the copy. |
| Body content | **Client-rendered.** Static HTML holds `-` placeholders (`#weekRuns`, `#weekDistance`, `#streak`, `#lastDate`) and fills them from `/api/data/*` at runtime. A non-JS crawler sees a nav, a joke tagline and dashes. Google renders JS, but the content is still thin and numeric. |
| `/running/log` (no slash) | 200 via proxy, **no server 301**. A JS `location.replace` adds the slash. Crawlers that do not run JS see the same page at two URLs (canonical covers it). |
| Hugo `/running/` | `<title>Running · Ganis Angger Atmawarin</title>`, description present, canonical OK, OG with default image, JSON-LD `CollectionPage` with only `name`, `url`, `isPartOf`. |
| `sitemap.xml` | `/running/` listed with **lastmod 2021-08-01** (stale; signals a dead page). `/running/log/` **not** in the sitemap (correct). |
| Hugo `robots.txt` | `Allow: /` plus sitemap. Does not mention `/running/log/`. |

## Duplicate content: exact answer
- **Is run.* indexable?** Yes. No robots.txt, no noindex header, no meta robots. It is discoverable via any link to it.
- **Duplicate?** Yes, in the strict sense: identical bytes at `run.*/` and `/running/log/`. **Mitigated** by `rel=canonical` pointing to the main-domain URL on every page. Canonical is a hint, not a directive, but with an identical ETag and consistent internal links it will be honoured.
- **Residual risk:** Google may index `run.*` URLs before it consolidates, and `run.*/month`, `/year`, `/alltime` each point canonical at their own `/running/log/...` twin, which is correct. The leak is low-severity because the pages carry almost no indexable text.
- **Does the crawler see nothing?** Close to it. Static HTML has no numbers, no race names, no sentences beyond the tagline. After render it shows live stats, which are data tables, not prose. Not a ranking asset.

## /running/ title, description, JSON-LD

**Title (55 chars max, else brand is dropped):** `Running: slow miles around Yogyakarta` (brand appended automatically: ~63 chars, so set `seo_title: "Running log and races from Yogyakarta"` to keep brand rule, or accept the bare title since over 55 skips the suffix).
- Recommended `seo_title`: **`Running: a log of slow miles from Yogyakarta`** (46 chars + brand suffix would pass 55, so the partial drops the suffix; acceptable).

**Description (140-160 chars, reuse voice, no invented stats):**
`Slow miles, mostly before six, mostly around Yogyakarta. Six races since 2019, a live log of every run, and one rule: when the run happens, the day works.`
Needs Ganis to confirm "six races" (matches the six stubs) and the year range from `content/running/*.md` dates. Flag, do not invent.

**JSON-LD:** keep `CollectionPage`, add what is true and visible on the page:
- `description` (same as meta), `inLanguage: "en"`, `about: {"@type":"Thing","name":"Running"}`, `author`/`mainEntity` pointing at the existing Person `@id` (`https://ganisatmawarin.com/#me`).
- `mainEntity: ItemList` of the race stubs, each a `SportsEvent` with `name`, `startDate`, `location` (Place, name only). Only if the race rows are in the server-rendered HTML (they are). Dates come from front matter. Do not add `distance` as a schema property unless it validates; keep it in `description`.
- `dateModified`: set from the newest of the stub dates or a manually bumped `lastmod` in `_index.md`, so the sitemap stops saying 2021.
- No `Person` with health data, no `ExerciseAction` with times/HR (BB's lane, and not rich-result eligible anyway).

**OG:** default image is acceptable for now. A page-specific 1200x630 card (paper ground, one red mark, "Running" in Fraunces) is nice-to-have, not must-have. `og:image:alt` currently reads "Running"; make it describe the card.

## Should /running/log/ be indexed?
**No. Set it `noindex,follow` and keep it out of the sitemap.**
- It has no descriptive text, near-zero server-rendered content, and a different brand. It cannot win a query /running/ cannot.
- Indexing it risks a thin-page signal and splits link equity with /running/.
- Do it on the **dashboard side** (repo `running-log`): add `<meta name="robots" content="noindex,follow">` to all four pages **and** a `[[headers]] for="/*" X-Robots-Tag = "noindex"` in its `netlify.toml`. That covers `run.*` too, which resolves the duplicate-host question outright.
- **Conflict warning:** do not add `noindex` while canonical points to a URL that is also noindex-only if you ever want it ranked; here that is intended. But do not also `Disallow` it in robots.txt, or crawlers cannot see the noindex.
- Cost: two small edits in the dashboard repo. This needs PM sign-off because the brief says not to touch the dashboard unless ruled in.

## 301 / proxy rules per option of Question B

**Option 1, keep + proxy (today).**
- Keep the two `[[redirects]]` 200 rules for `/running/log` and `/running/log/*`. Order matters: they must stay above `/running/*` 301 (they are).
- Add a server-side slash fix: `from=/running/log to=/running/log/ status=301` **before** the 200 rule (or `force=false` handled by the proxy). Removes the JS redirect dependence. Test: a 200 proxy rule on `/running/log` still serves the same content, but a 301 is cleaner and consistent.
- Add `noindex` as above. Add a **301 from `run.*` to `ganisatmawarin.com/running/log/`** is NOT possible while the phone posts to `run.*/api/ingest`; scope any host redirect to non-`/api/*` paths only (see below).

**Option 2, keep repo, native look.**
- Same rules as option 1. Visual change has no URL impact. Keep file names (`alltime.html`, `year.html`, `month.html`) stable or add 301s inside the dashboard repo for any rename.

**Option 3, merge into this repo.**
- Move pages to `static/running/log/` (or Hugo layouts if rendered server-side). Then **delete** the two 200 proxy rules (otherwise they shadow the real files).
- Keep `/running/*` 301 below all log paths. A `force=false` default means real files win, but explicit order is safer.
- **Host consolidation for run.*:**
  - `/api/ingest`: **no redirect, ever.** Keep serving the function on `run.*` until the phone shortcut is repointed and verified, then keep a 2-4 week overlap.
  - `from=https://run.ganisatmawarin.com/api/* to=https://ganisatmawarin.com/api/:splat status=307` (307/308 preserves POST, a 301 turns POST into GET in many clients). Prefer 308.
  - `from=https://run.ganisatmawarin.com/* to=https://ganisatmawarin.com/running/log/:splat status=301 force=true`, placed **after** the `/api/*` rule. Netlify host-based redirects need to be declared on the run.* site (alias the domain to the merged site, or keep a stub site holding only these rules).
- `/api/data/*` fetches use relative paths today; verify after the move they hit the same-origin function.
- Cutover plan is the other seats' lane, but SEO requires: canonical unchanged (`/running/log/`), `noindex` unchanged, sitemap unchanged.

**Option 4, something else.** Keep the repo, add a **server-side summary** to /running/ at build time: a GitHub Action or Netlify build hook that fetches `data/stats.json` (committed in `running-log`) and writes it to `data/running.json` in the Hugo repo. Result: real 2026 numbers rendered as HTML on /running/, no client JS, no repo merge. Zero redirect changes.

## Must-nots
1. **Never** put `Disallow` on `/running/log/` or `run.*` while relying on `noindex` (crawler cannot read it).
2. **Never** 301 `run.*/api/*` (breaks POST and the phone ingest). Use 308 only after cutover, or nothing.
3. **Never** render the headline stats on /running/ with client-side `fetch`. The brief forbids it and Google would see dashes.
4. **Never** list `/running/log/` in the sitemap or the JSON-LD `ItemList`.
5. **Never** invent counts for the description or schema. Use only numbers present in front matter or the data files, and flag for Ganis.
6. **Never** change the `/running/` URL or the order of the redirect rules (the `/running/*` 301 must stay last).
7. **Never** publish precise dates/times/locations of runs into JSON-LD (privacy seat; no SEO upside).

## Top 3 must-haves
1. **Server-rendered current stats on /running/** (from a build-time snapshot of the log's data), plus a real `lastmod` so the sitemap stops reporting 2021.
2. **`noindex,follow` + `X-Robots-Tag` on the dashboard repo** (all pages, run.* included), keep it out of the sitemap, keep canonical as is.
3. **Rewrite /running/ title, description and JSON-LD** (ItemList of races, Person `@id` link, description, `inLanguage`), and replace the JS slash redirect with a server 301.

## Recommendation
**Option 1 plus the Option 4 snapshot, with noindex on the dashboard. Do not merge repos for SEO reasons.**
- Merging gives SEO nothing the above does not, and puts the phone path at risk.
- Confidence: **8/10** that noindex plus canonical fully resolves duplication; **6/10** on whether Google already indexed any `run.*` URLs (cannot check Search Console from here; Ganis should check "site:run.ganisatmawarin.com").
- If the merge happens anyway for other seats' reasons, use the Option 3 redirect block above, with `/api/*` as 308 and a 4-week overlap.

**Next steps**
- PM: rule on touching `running-log` for the noindex headers.
- Ganis: confirm the "six races" and date range wording; run `site:run.ganisatmawarin.com` in Google.
