# G3 · TY verify

**SCORE 8.5/10 · SIGN-OFF: yes.**

## My g2 items
1. **Stamp below the 11px floor: FIXED.** `.levels__stamp` is now `0.6875rem` (11px). The inline `--un` variant inherits it, so UNINSTALLING is 11px too. The screenshot at 375 shows it crisp and legible.
2. **`font-synthesis: none` on `.levels__title`: NOT FIXED (optional).** Not a blocker. Fraunces loads 300..900, so there is no synthesis today. Nice to have.
3. **`"WONK" 0` in `title-ink`: NOT FIXED (optional).** The keyframes still set only `wght` and `SOFT`. Nothing sets WONK today, so no visible defect.

## Check of the merge
- Stamp text "Uninstalling" sits in Plex Mono with the shelf grammar. The inline `position: static` placement reads cleanly under the struck words and no longer touches the HUD.
- Served HTML has 0 `.w` spans, so no-JS parity holds. Lazy wrapping is fine for type: whitespace stays outside the spans.
- HUD numerals are tabular and lining, and "Level 9 of 9" holds its width.
- Dark and desktop screenshots show no type regressions.

## BLOCKERS
None.

## Still open (not blocking)
- The `mlbb` strike still covers the full stop in "Legends." The screenshot shows the line running under it. Move `data-mlbb` to "Legends" only.
- Fixes 2 and 3 can ride along in the next CSS pass.
