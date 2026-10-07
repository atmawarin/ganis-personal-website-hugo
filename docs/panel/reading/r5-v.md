# R5 · Seat V (Editor): the build

## 1. Verdict
SCORE 9 / WOW 8 / SIGN-OFF yes

Read: shelf.html, the global.js shelf section, schema.html, index.html. I did not re-open the screens or CSS in detail.

Copy matches Ganis's decisions:
- Dek: "A ★ marks a favourite."
- Toggle: "Show my favourites F"
- ARIA: "A favourite" / "A favourite, N stars"
- Tally: "N of M books are favourites", from data.
- 2023: "No dated entries."
- Sixth strike: "Enough."
- Rail counts come from data (`$n`).
- Stamp text: Reading · year for 🟡, Read · year otherwise. Year only.
- Alt text: title and author only.
- Subject chips: alphabetical, no per-chip counts. The only count is "N of M books", shown after a chip is chosen.
- No generated text, no "Ganis says" framing.
- Schema (ItemList): names stripped of ⭐/💩, authors split to Person, real count.
- Home spines link to `/reading/#slug`, and the shelf's `id` uses the same `anchorize` on the base name. They match.

## 2. MUST-FIX
none

## 3. Nice-to-have
- `shelf.html:20` hint and `:22` button read "favourites" while `shelf.html:23` says "Stamp one for me". The pick code (global.js, `pick`) draws from favourites only. Label it "Stamp one of my favourites" so the claim is exact.
- `global.js` row click handler: `row.classList.contains("is-stamped") ? press(row) : press(row)` is a no-op ternary. Collapse it to `press(row)`.
- 💩 titles lose the marker (`shelf.html:60`) and show as ordinary rows. That is honest by omission, but Ganis may want a "not for me" note one day. Not now.

Known open item, not ours: the Why We Die cover shows Infinite Country. Ganis must approve a new image download before it can be fixed.
