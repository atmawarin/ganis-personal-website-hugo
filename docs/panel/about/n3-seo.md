# N3 / SEO + perf seat: verify "Hmm."

**SCORE 8.5/10 | SIGN-OFF yes**

## My n2 items (no must-fixes; two should-fix)
- **No MUST-FIX raised in n2.** Nothing to verify.
- **Should-fix 1 (trim `kind`/`when` from the JSON): SUPERSEDED.** The merged code now reads both (`about-game.js` kicker, line 508, and end-list, line 600), so dropping them would break the card. Payload stays about 2.5 KB raw. Correct call.
- **Should-fix 2 (visible failure when the module or `#thoughts` is missing): NOT FIXED.** `global.js` still swallows the error silently, and `JSON.parse(document.getElementById("thoughts")...)` is still unguarded (line 318). Only bites on a stale cached /about/ plus a new bundle. Not a blocker.

## Checks on the merge changes
- **Crawl and link hygiene:** "Read it" and end-list links now use `target="_blank" rel="noopener"`, so no opener leak. Fragment hrefs are unchanged and still resolve.
- **`lang` carried** on the card kicker and end-list rows (Bahasa rows), which is correct for language signals.
- **Perf:** merge added small logic only (deal fallback, holds, skip state). No new assets, still a dynamic import on hover/focus/click, still well inside the 30 KB gz cap (est. 10 KB gz). Not re-measured; estimate from the n2 figure plus the diff size.
- **No CLS:** overlay stays `position:fixed`; `.play-start` reservation untouched.
- **JSON embed:** `jsonify | safeJS` is safe, since `jsonify` escapes `<`.
- **Screens in mind3/:** present for all 8 rounds on desktop and mobile, plus skip, berbeda and end; I did not inspect them pixel by pixel, since this is not my lane.

## BLOCKERS
None.

## Next step
Optional: one-line `catch` in `global.js` that sets the button text to "Couldn't load. Try again".

Confidence 8/10 (no Lighthouse run).
