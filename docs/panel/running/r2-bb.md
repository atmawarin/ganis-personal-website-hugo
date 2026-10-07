# R2 · BB seat · /running/ build (loop 2)

SCORE 9/10
SIGN-OFF yes (page only; the dashboard-repo privacy item remains open and is not this build's fault)

## Checks
- **Figures trace.** 341.9 km / 90 runs, 127.6 km (2025 same stretch), 944.4 shown as 944, as-of 2026-09-27 all match stats.json (ytd_2026, ytd_2025_same_period, full_year_2021, updated_at). 1:02 matches the Ambarrukmo stub. Nothing else numeric is new.
- **No pace, time of day, last run, week figures, or dates of runs** on the page or in the JSON-LD. Verified in list.html, running.json, schema.html and both screenshots.
- **JSON-LD exposes nothing private.** Only race name, month, and the place string already printed in the race log, plus the page's own description and a Person @id reference. No stats, no run data. The `#me` @id is a reference only; the Person node is emitted elsewhere (schema.html line 1), fine.
- **As-of line is honest.** "As of 27 Sep 2026, from the log." is derived from `as_of`, not hard-coded; the "so far in 2026" and "same stretch of 2025" labels are computed from it, so they cannot drift from the date. It is 10 days old today; the date carries that.
- **Must-nots from r1.** No kids, wife, home, school, age, Synetica, tracker or share widget on the page. 3:30 and "before six" are pre-existing copy, unchanged.
- **Brand.** Quiet, no hype about being up on 2025 (the quip was omitted, correct). Red used only for race distance, as before.

## MUST-FIX
none

## Non-blocking
1. `data/running.json` is hand-refreshed. Add the refresh to Ganis's monthly routine or the "so far" labels will mislead; the as-of date protects honesty but not usefulness.
2. 1:02 label wraps to two lines at 1280 while the others do not. Cosmetic, TY's lane.

## PLAN.md: does it frame the dashboard risk clearly enough?
Mostly yes on substance (it names the open `/api/data/*`, second-precision start times, neighbourhood and hotel names, 68 of 86 runs in the 07:xx hour, and the public-repo question). Two gaps:
- **It sits below the build spec as "needs a yes", not at the top.** Add one sentence at the head: "This page's care (aggregates only, no times) is undone while `/running/log/api/data/activities` stays open, because the page's own CTA links straight to it." That is the real point: the page fix is cosmetic privacy until the feed is fixed.
- **No owner or date.** Add "Ganis answers repo-public question first, today" and a default if no reply (BB r1: 24 h delay, zones only).
