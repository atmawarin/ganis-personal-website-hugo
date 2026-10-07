# Report: /running/ and the run.ganisatmawarin.com question

**Verdict: page rebuilt, repos stay separate.** Loop 1 (seven memos), PM plan, build, loop 2 (seven seats), must-fixes applied. Fixes were one-line and verified live, so loop 3 was skipped.

<svg viewBox="0 0 520 236" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loop 2 scores: SD 9, TY 9, IxD 8, PM 8.5, SEO 7, BB 9, V 9" font-family="IBM Plex Mono, monospace" font-size="12">
  <rect width="520" height="236" fill="#f3eee4"/>
  <g stroke="#1b1a17" stroke-width="1"><line x1="70" y1="20" x2="70" y2="210"/></g>
  <g fill="#1b1a17">
    <text x="12" y="38">SD</text><rect x="70" y="26" width="360" height="18" fill="#c8301f"/><text x="438" y="40">9</text>
    <text x="12" y="68">TY</text><rect x="70" y="56" width="360" height="18" fill="#c8301f"/><text x="438" y="70">9</text>
    <text x="12" y="98">IxD</text><rect x="70" y="86" width="320" height="18" fill="#1b1a17"/><text x="398" y="100">8 → fixed</text>
    <text x="12" y="128">PM</text><rect x="70" y="116" width="340" height="18" fill="#c8301f"/><text x="418" y="130">8.5</text>
    <text x="12" y="158">SEO</text><rect x="70" y="146" width="280" height="18" fill="#1b1a17"/><text x="358" y="160">7 → fixed</text>
    <text x="12" y="188">BB</text><rect x="70" y="176" width="360" height="18" fill="#c8301f"/><text x="438" y="190">9</text>
    <text x="12" y="218">V</text><rect x="70" y="206" width="360" height="18" fill="#c8301f"/><text x="438" y="220">9</text>
  </g>
</svg>

| Seat | Loop 2 | Sign-off | Note |
|---|---|---|---|
| SD | 9 | yes | Sidebar gone, ledger full width |
| TY | 9 | yes | Lining tabular figures; `text-wrap: balance` added |
| IxD | 8 | yes | CTA hover moved under `(hover:hover)`: fixed |
| PM | 8.5 | yes | Four stats, one link, no JS |
| SEO | 7 | no, then fixed | Sitemap lastmod was 2021: now 2026-09-27; `dateModified` added |
| BB | 9 | yes | No pace, time or last run; dashboard feed risk flagged |
| V | 9 | yes | Every figure traces to the log or a stub |

## Move or not
**Keep two repos behind the existing `/running/log/` proxy.** The URL is already unified; a merge changes only the source and puts the phone ingest (Blobs, token, Health Auto Export URL) at risk for 12 to 20 hours of work.

## What changed
- `layouts/running/list.html`: stats strip, prose at 38rem, one CTA, full-width race ledger.
- `data/running.json`: dated snapshot of the log's numbers (as of 27 Sep 2026).
- `content/running/_index.md`: stale stats removed, lead-in and closing paragraph tightened, `lastmod`.
- `assets/css/main.css`: ledger grid, upright red "42 km", lining figures.
- `layouts/partials/schema.html`: `/running/` JSON-LD gains description, race `ItemList`, `dateModified`.

## What's left for Ganis
1. **Privacy (urgent):** the open feed `/running/log/api/data/activities` exposes start times to the second and neighbourhood names. Is the `running-log` repo public? OK to apply the allowlist, 24 h delay and noindex there?
2. **944 km** for 2021 replaces the old 1,123. Confirm.
3. **Refresh `data/running.json`** when you want the numbers current.
4. Dashboard seam fixes (`← Running` link, font `<link>`) await a yes.
