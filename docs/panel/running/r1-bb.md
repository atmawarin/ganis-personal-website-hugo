# R1 · BB seat (Brand & business manager) · /running/ and the run log

## Thesis

**The page can be warm and public. The raw data feed cannot.** The page needs aggregates (km, runs, streak, a heatmap). The one real risk is not the page, it is the open JSON feed behind the log: a complete, machine-readable, timestamped diary of when a person with a family is out of the house, with neighbourhood names attached. Fix that with a small allowlist at the API edge, not by moving repos.

## What is actually exposed (curl, read-only, 7 Oct 2026)

- `GET ganisatmawarin.com/running/log/api/data/activities` and `run.ganisatmawarin.com/api/data/activities` return **200, ~290 KB, no auth**. 1,006 runs, 2017 to 26 Sep 2026. The README says 988; the file I read has 1,006.
- Per run: `start_date_local` **to the second**, `name`, `distance` (m), `moving_time`, `elapsed_time`, `total_elevation_gain`, `average_heartrate`, `max_heartrate`, `zones` (5 buckets), `health_id` (Apple Health UUID, 737 runs), `source`.
- **No GPS.** No `start_latlng`, no map or polyline (the README says "Include Routes" is off; the data confirms it). Good. Keep it that way.
- `/api/data/summary` is clean: monthly km, runs and minutes, plus a `recent` list that is a slice of the same raw rows. The recent list carries the same timestamps, HR and `health_id`.
- `/api/ingest` returns 405 to a plain request and needs the `x-api-key` token. Fine.
- The pages render a **Location** column from `name`. Most 2026 rows say "Outdoor Run", which is harmless. But 1,006 names include Strava titles that are **kelurahan-level places**: "Taman - Karangasem", "Cokrodmingratan - Sagan", "Patangpuluhan", "Ngupasan", "Keparakan Lor", "Mutiara Hotel", "Taman - Gadjah Mada University", "Central Jakarta, Java". About 150 rows. The "Taman" prefix repeats 83 times, which signals a habitual start point.

## Is there a predictable-location risk?

**Yes, a moderate and avoidable one.** Facts from the file:
- 2026: of 86 runs over 1 km, **68 start in the 07:xx hour**, 12 between 03:00 and 06:59 or 08:xx, and 5 in the afternoon. Mon, Tue, Thu and Wed dominate.
- Exact date and second, a weekday pattern, and (for older rows) a neighbourhood name. Add the site's own copy ("alone, early, before six", "Kraton walls") and the public Synetica office address. Together that is a reliable schedule and a rough area.
- Absence is also signal. A year-long feed shows the days when no run happened, and the Jakarta rows show travel. "Central Jakarta" x53 tells a reader when Ganis is not in Yogyakarta, and by implication that the home is empty of him.
- The heart-rate zones are health data. Ganis chose to publish them, and they are low-sensitivity. They are not the problem. The **combination** is.
- Nobody is named in the data. The "Tempo Run With Paula" style rows are Strava or Nike coach titles, not real people. Still, free text in `name` is uncontrolled input. Never render it raw.

## Spec: public, coarsen, remove

| Field | Verdict | Spec |
|---|---|---|
| Distance, time, pace, elevation | **Keep public** | The point of the log. |
| Date (day) | **Keep, delay** | Show the day, not the time. Add a **24 h embargo**: today's run appears tomorrow. "Live" is a feature of the dashboard, not of the page. I would hold this at 12 h minimum. |
| `start_date_local` time-of-day | **Remove** | Serve `YYYY-MM-DD` only. If the dashboard needs a sort key, send a per-day sequence number. A "morning / midday / evening" bucket is the most I would allow, and I would skip it. |
| `name` (location column) | **Coarsen** | Replace with a fixed vocabulary: `Yogyakarta`, `Jakarta`, `Elsewhere`, `Treadmill`. Derive it at build or ingest time. Drop every street, kelurahan and hotel name. Rename the column header to "Place". |
| Travel (Jakarta, other cities) | **Coarsen** | Fold into "Elsewhere" for runs in the last 30 days. Older runs may show the city. Never show a trip live. |
| `average_heartrate`, `max_heartrate`, `zones` | **Ganis's call, default keep** | Per-run HR is low risk. Cleanest: keep the zones bar on the dashboard, remove raw avg/max from the API (nothing in the UI needs the exact number). Ask Ganis once. |
| `health_id` | **Remove** | A stable device UUID. Useless to a visitor. |
| `source`, `elapsed_time` | **Remove** | Internal. |
| Weekly pattern, streaks | **Keep** | Aggregates only. |
| GPS and route | **Never** | Already absent. Put a test in the repo that fails the build if `latlng`, `map` or `polyline` appear in any API output. |

**Mechanism:** one `publicView(run)` function in `netlify/functions/data.mjs` (and the matching fallback `data/*.json` build). The `/activities` response is built from an allowlist, not by deleting fields. The committed `data/activities.json` and `strava-archive.json` are in a **public repo?** I did not check. If the repo is public, the raw archive is already public and this whole spec is moot until the repo goes private or the files leave git. **Ganis to confirm repo visibility today.** I rate this the most urgent open item.

## Move or keep, from my lane

**Brand does not need the merge. Privacy needs a code change in either world.**
- Option 1 or 2 (keep the repos, proxy, make the seams native): the privacy fix is ~30 lines in one function in one repo. Low risk to the phone ingest. **Preferred from BB.**
- Option 3 (merge): improves the story ("one site"), but the visitor already sees one URL. It adds the risk of an ingest cutover (token, Blobs seed) for no reputational gain. Do it later if PM and IxD want it; do the allowlist first either way.
- One brand benefit of keeping `run.*` alive: it is a clean place for the raw, honest, Bauhaus version. But a second indexable host makes Ganis look like two properties. SEO owns the canonical and redirect rule. BB asks for `run.ganisatmawarin.com` to 301 to `/running/log/` except `/api/ingest`, so the public sees one address.

## Tone and footers

- Dashboard voice ("did you run? let's see. no judgment. (okay, maybe a little.)", "Run, Ganis, Run!") is on-brand: self-aware, honest, not performative. **Keep.**
- The Herbert Bayer tribute is charming and consistent with the site's design-literate side, but it is a different museum from Fraunces and paper. It lives only in the log footer. **Keep as is, do not restyle for this loop.** If PM wants seam-fixing, the cheapest brand move is a shared header and a "Back to Running" link, not a redesign.
- Rank chips ("#23 of 41 weeks in 2026") expose a weak week in public. That is Ganis's own vulnerability to keep. Fine. It is the "prove" theme, and Ganis has a rule of honest, not polished.
- **Do not add Synetica to any running page.** Ganis runs for himself. No banner, no byline line. The running page may link the family-facing about page only.
- No comments, share buttons, Strava or Garmin badges, trackers. The data feed is the only third-party surface and it is first-party.

## Must-nots

1. No exact start time, `health_id`, or any GPS, route or polyline in any public output.
2. No street, kelurahan, hotel or venue name in public rows. No live "currently in Jakarta".
3. No raw `name` text rendered as HTML (inject risk and leak). Escape or replace it.
4. No kids, wife, home or school mention on the running pages. Don't call the 6 AM run "before the school run" or similar. Zen's and Zia's names stay off these pages.
5. No birth year or age. The "Born 1984" never appears here. Be careful with "since age X" copy.
6. No tracker, comments, or share widget, even a "Strava-style" one.
7. Don't invent numbers. Every stat on the page comes from `summary.json` or `stats.json`.
8. No real person's name in race copy without Ganis's sign-off. Rows such as "with Paula" are Nike coach program titles, so strip them.

## Top 3 must-haves

1. **Public-view allowlist on `/api/data/*`** (date only, no time, no `health_id`, coarse place, optional HR trimmed) plus a 24 h embargo for the latest run, with a test that fails on `latlng`, `map` or `polyline`. Same shaping for the committed fallback `data/*.json`.
2. **Confirm repo visibility** of `running-log` and whether `data/activities.json` and `strava-archive.json` (with times and place titles) are public on GitHub. If yes, scrub history or privatise the repo before anything else.
3. **Page uses aggregates only**: refresh the `/running/` stats from `summary.json` (year to date km, runs, weeks hit), not from last-run detail. Show no "last run 2026-10-05, 5.06 km" ticker on the Hugo page. The log keeps that, delayed.

## Recommendation

- **Keep two repos, keep the proxy** (option 1 plus a native-feeling seam). Ship the allowlist this week. It is independent of the page redesign and of any move.
- Do not merge now. The merge gains nothing for reputation and puts the phone ingest at risk.
- Ask Ganis three things: (a) is the `running-log` repo public, (b) keep raw avg/max HR or drop to zones only, (c) does he want a 24 h or 12 h delay? Default if no answer: 24 h, zones only.
- Confidence: findings 9/10 (verified by curl and file read). Risk rating "moderate, avoidable" 7/10 (I cannot see where Ganis lives, and I am not guessing).

Next step: Ganis answers (a) to (c). Then the TECH or IxD seat writes the `publicView` spec.
