# R2 · TY (type)

**SCORE 8.5/10 · SIGN-OFF yes (conditional on the one must-fix below, a copy-only change)**

## What works
- The mono-label / Fraunces-title / Newsreader-text unit repeats cleanly; the game lives in labels, as ruled. No new faces, no pixel tricks.
- Hierarchy is clear at both sizes: the h1 dominates, the lede (Fraunces) steps down, level titles hold at about 1.5rem, and the labels never compete.
- Player card: mono caps keys, 7rem key column, dotted leaders and the Newsreader values align well; dark mode keeps the contrast.
- The red is limited to the label, node and "You are here" tag. The filled node is the only emphasis, as planned.
- Measure is comfortable (52ch). Titles have balance, text has pretty.

## MUST-FIX
1. **Orphaned unit words (real defect, visible in both screenshots).**
   - `content/about/_index.md`, player `Save point` value: change `Phone in a drawer, 6 to 9 PM` to `Phone in a drawer, 6 to 9&nbsp;PM`. Today "PM" sits alone on line 2 at 1280 and 375.
   - Level 4 `t`: change `the last 11 km after dinner` to `the last 11&nbsp;km after dinner`. Today "km" starts line 2 (desktop).
   - Level 3 `t`: change `42 km` or any `N km` equivalent the same way (`42&nbsp;km` in Level 4 too).
   - Values pass through `markdownify`, so `&nbsp;` survives. Do not use a raw U+00A0 if the editor strips it.

## Nice-to-have (not blocking)
- `assets/css/main.css` `.player__stats dd`: add `text-wrap: pretty;` to stop short last lines in the card ("Chicken at parties, / lion at ping-pong" is fine, but "Trees, typography, / single-origin coffee" is the only good break by luck).
- `.continue .slug` ("Continue?") reads as a muted label, not a prompt. If you want the one small-caps beat from my r1 memo: `.continue .slug { color: var(--ink); font-size: 0.8rem; }`. Optional.
- `.ttol h2` (1.5rem, bold) is heavier than `.levels__title` (600). Set `.ttol h2 { font-weight: 600; }` for one consistent title weight.
- `.levels__label`: add `font-feature-settings: "zero" 1;` for slashed zeros in the 2025/2026 years (Plex Mono supports it).
- `.player__stats dt` at .68rem muted is the smallest text on the page; if contrast is flagged by IxD, move to .7rem and `var(--ink)` at 70% rather than enlarging.
