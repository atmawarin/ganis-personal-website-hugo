# N4 / SEO + perf seat

**SCORE 9/10 | SIGN-OFF yes**

## Items
- **Should-fix 2 (stale page + new bundle): FIXED.** `about-game.js` line 21 throws if `#thoughts` is missing, before the line 319 parse. The `global.js` catch (line 365) hides `.play-start`, so no dead button. It hides the button rather than showing "Couldn't load", which is fine since the page content is intact.
- **Should-fix 1 (trim JSON): SUPERSEDED**, since the card reads `kind` and `when`.
- **Perf, CLS, links:** unchanged. The bundle is still a dynamic import, about 10 KB gz of the 30 KB cap. `.play-start` still reserves its space.

## BLOCKER
None.

Confidence 8/10 (no Lighthouse run).
