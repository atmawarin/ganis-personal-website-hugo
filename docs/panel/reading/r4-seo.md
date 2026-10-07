# R4 SEO seat: verify PLAN.md v2 "Date Due"

## 1. R3 must-fixes

1. **Cover loading: FIXED.** "Every cover is an in-flow `<img>` with width, height, alt (title and author only) and `aspect-ratio`, never `display:none`, `visibility:hidden` or `content-visibility:auto`. First 6 `loading=eager`, the rest `lazy` + `decoding=async`. No `fetchpriority`. The h1 is the LCP."
2. **Ganis's line never hidden: FIXED.** "Ganis's line is always visible in flow, truncated at a sentence boundary" and "Opening is the only layout change on the page, and the visitor causes it."
3. **Dim state legibility: FIXED.** "Unstarred rows switch to `--ink-soft` (≥ 4.5:1 in both themes, never opacity on text) while titles stay full ink." (Token name differs from my `--ink-muted`; the contract is the same.)
4. **Hash arrival and no `url`: FIXED.** "the row renders stamped and open with no animation, `scroll-margin-top` clears the header ... Slugs are unique, so the `sapiens` duplicate goes first." JSON-LD: "no `url` (there are no book pages)".
5. **Semantics of the repeated stamp: FIXED.** "`<ol>` per card, year card `h2`, title `h3`"; "`READ · YYYY` comes from CSS `::after` with `aria-hidden`"; "Star piles are `aria-hidden` plus one visually hidden 'Starred ×N'."

## 2. New problems from the adopted wow ideas

**None. No blockers.** Checked against my lane:
- **Roller, starred pass, strike again, ink runs out:** all transform/opacity or an absolutely placed rule, with a capped count of rows animating at once. No CLS, no DOM bloat, INP is bounded.
- **Strike again (up to 5 impressions):** these must stay CSS or a single class or attribute per row, not appended DOM nodes. The plan says "lands another impression", which allows this. It is an implementation note, not a blocker.
- **Tally `24 / 104`:** generated from data, and not part of the server HTML or JSON-LD. No snippet pollution.
- **Stamp one for me:** writes `#slug` for an existing unique fragment only. It creates no new crawlable URL, and the JSON-LD stays clean. `#y2019` and `#slug` cannot collide.
- **`.is-enhanced` hint line:** it is hidden without JS, so no no-JS dead UI.
- **No-JS:** the full list, covers, year links and static stars all remain server-rendered. This is the right baseline.

## 3. Verdict
SCORE 9 / WOW 8 / SIGN-OFF yes
