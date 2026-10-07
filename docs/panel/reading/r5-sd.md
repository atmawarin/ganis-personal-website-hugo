# R5 — SD (senior designer) review of the built shelf

## 1. Verdict
**SCORE 8.5 / 10 · WOW 8 / 10 · SIGN-OFF yes**

The lending-card concept holds. Layout, rhythm and edges are what I asked for in r4:
- Year roller on the left, ruled rows, and the cover tucked into a pocket.
- Rail bars sized by count, with 2023 as a visible zero.
- At rest the only red is the favourite stars, as planned.
- Dark stamp is #ff7a5c with blend normal, and the pocket flips to a paper tone.
- The mobile collapse at 760px is sound. In v1-hash-390 the row, date and pocket sit on one 32px gutter with no overflow.
- The year-rail min-height and tap targets are 44px, and the favourites and stamp buttons meet that too.
- Titles stay full ink under favourites, which fixes the dimming I flagged.

## 2. MUST-FIX
**None that block sign-off.** One item to verify before push:

- **v1-top-390.png looks clipped on the right.** The dek, the hint line, both buttons and the rail's last year are cut at the viewport edge. v1-hash-390 does not clip, so this may be a stale capture. Re-shoot the top at 390 before pushing. If it still clips, the likely cause is the `.shelf-tools` or `.shelf-hint` line forcing width. In `main.css`, add `min-width: 0` to `.shelf-head` children and wrap the hint text.

## 3. Nice-to-have
- On mobile, 5-star favourites (Elements of Typographic Style) stack into a muddy overlap. Drop `.fav + .fav` margin-left from -9px to -4px under 760px.
- The "READ · 2024" stamp hangs about 8px left of the 32px gutter on mobile (`.row__ink` left: -4px). Pull it to 0 under 760px.
- The 2023 card's "No dated entries." could carry a faint rule under it, so the empty card matches the weight of its neighbours.
