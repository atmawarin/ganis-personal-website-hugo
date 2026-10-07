# R6 · TY (Typography): verify

**SCORE 9 / 10. WOW 8 / 10. SIGN-OFF: yes.**

## Loop-5 must-fixes
1. Sub-11px mono: **FIXED.** `.stamp--enough`, `.shelf-rail__n`, `.row__status` and the "drag ↓" label are all 0.6875rem in main.css. The only remaining 0.62rem is `.fav`, a glyph-only star with no text, so it is fine. `.proof__meta` at 0.66rem is outside the reading page.
2. size-adjust / ascent-override fallbacks: **ACCEPTED-DEFERRAL.** The font stacks are site-wide, so this is a separate follow-up. Residual risk is a layout jump in the year roller on font swap. It is cosmetic and not a regression.
3. Author line smcp: **ACCEPTED-DEFERRAL.** Newsreader from Google Fonts has no reliable smcp. Uppercase at .8rem with .07em tracking and `font-synthesis: none` is the documented fallback and is in place.

## Other checks
- `[hidden]{display:none!important}` is present at main.css line 496, so no-JS no longer shows dead controls.
- The tally copy and the "Subjects" slug are present in shelf.html. The tabular and lining numerals are intact.

## Blockers
None.
