# R2 SEO: /running/ built (loop 2)

SCORE 7/10
SIGN-OFF no (one must-fix: lastmod)

## Checked in built HTML (pub2/running/index.html)
- **JSON-LD:** valid JSON. CollectionPage with description, inLanguage "en", author `@id` https://ganisatmawarin.com/#me, ItemList of 6 SportsEvents (name, startDate YYYY-MM, location Place name only), numberOfItems 6. No run times, no log URL. Good.
- **Canonical:** https://ganisatmawarin.com/running/ . Good.
- **Stats in HTML at build:** yes, no client fetch. Good.
- **Title:** `Running · Ganis Angger Atmawarin`, left as ruled.
- **Description:** unchanged from the old text (146 chars, valid length). PLAN said "description per SEO", but it is also the on-page dek, so it was left. Acceptable; see should-fix.
- **Sitemap lastmod: NOT met.** pub2/sitemap.xml still lists `/running/` with `2021-08-01T00:00:00+00:00`. It derives from the newest race stub date, since `_index.md` has no `lastmod`.

## MUST-FIX
1. `content/running/_index.md`: add `lastmod: 2026-09-27` to the front matter (use the snapshot's as-of date, and bump it whenever `data/running.json` is refreshed). Hugo then uses it for `.Lastmod` and the sitemap. Rebuild and confirm that sitemap.xml shows 2026-09-27 for `/running/`.

## Should-fix (non-blocking)
- `layouts/partials/schema.html`, running block: add `"dateModified" (.Lastmod.Format "2006-01-02")` to the merged dict so the JSON-LD matches the sitemap.
- Description: SEO's r1 line ("Six races since 2019, a live log of every run...") would add the race count and the log. It needs a separate `description` versus dek only if Ganis wants it. Not worth a loop.
