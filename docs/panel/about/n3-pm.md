# n3 · PM · Mind round, loop 3 verify

**SCORE 9/10 · SIGN-OFF: yes. No blockers.**

## My n2 must-fixes

1. **"Read it" and end-list links leave the run: FIXED.** `finish()` (line 605) and the `end()` list (line 620) both carry `target="_blank" rel="noopener"`. The run and the end card, which holds the newsletter route, now survive a second read.
2. **`deal()` can ship a rule-breaking run: FIXED.** Failed tries set `mid = null`, then the code falls back to `SAFE`. I checked the verbs of the resulting order: set, spot, pick, sort, tap, strike, stop, hold. No two adjacent verbs match, and no Bahasa round is in the set. The fallback is itself valid, so the rules hold on every path.

## Nice-to-haves

- **Mostly-ties:** still picks the first key (line 623). Not blocking. It is a small joke, left as is.
- **Berbeda rendered:** DONE. `screens/mind3/berbeda.png` exists and the labels read right per the harness note.
- **Bonus:** unmet thoughts sort first in the deal, so "Met n of 12" actually fills. Good for the replay hook.

## Blockers

None. The merge notes (skip is "Skipped" and not counted as met, pause and blur release holds, and the live text is limited to key moments) match the code I read at lines 166-170, 291-297, 388, 538-547, and 598.

## Residual notes (non-blocking)

- I read the code and screens, and did not re-run the plays. I rely on the harness's three clean runs for the no-error and no-overflow claims.
- Row 24 (Mobile Legends line) stays out until Ganis approves the exact wording.

**Next step:** push to a Netlify preview, play one run on a phone, then merge.
