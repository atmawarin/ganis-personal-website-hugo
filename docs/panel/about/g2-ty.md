# G2 · TY review

**SCORE 8/10 · SIGN-OFF: yes, after the one-line fix below.**

## What works
- **Faces obey the ruling:** Fraunces titles, Newsreader text, Plex Mono for label, HUD, stamp and button. No new faces, no giant numerals.
- **Title ink is real axes:** `title-ink` runs `wght` 300 to 600 and `SOFT` 100 to 0. The end state matches the resting `.levels__title` (600, default SOFT), so there is no snap at the end. Head.html loads `300..900` and `0..100`, so no faux weight.
- **Word setting is correct:** per-word spans from text nodes only, whitespace kept outside spans, links and italics intact, no letter spans. The stagger is capped at 900ms per the ruling. `is-set-now` makes any key or pointerdown finish it. Reduced motion returns early and the global rule zeroes transitions.
- **Stamp grammar is shared with the shelf:** Plex Mono 500, 1.5px border, `--stamp` colour, `multiply` in light and `normal` in dark, a 120ms hard ease-out, a seeded tilt per level.
- **HUD numerals:** `tabular-nums lining-nums`, so "Level 4 of 9" does not jitter.
- **Content parity:** no `.w` span is in the served HTML, so the no-JS page is plain text. The words are wrapped only on enhancement.

## MUST-FIX
1. **Stamp below the 11px mono floor.**
   - File: `assets/css/main.css`, rule `.levels__stamp` (line ~687).
   - Change: `font-size: 0.66rem` to `font-size: 0.6875rem`.
   - Reason: 0.66rem is 10.56px. My pitch set an 11px floor, and CLEARED and UNINSTALLED are the smallest type on the page.

## Clear improvements (small, in lane)
2. **Give the title the same synthesis guard as the shelf.**
   - File: `assets/css/main.css`, `.levels__title` (line ~669).
   - Change: append `font-synthesis: none;`.
   - Reason: during `wght` 300 to 600 a fallback render would fake the bold.
3. **State the optical size and WONK explicitly in the keyframes.**
   - File: `assets/css/main.css`, `@keyframes title-ink`.
   - Change: add `"WONK" 0` to both `font-variation-settings` lists, so the animated state matches the resting state exactly if a global heading rule ever sets WONK.
   - Reason: `font-variation-settings` replaces the whole property, so the animated state ignores anything inherited. This is not a bug today.

## Nice-to-haves (do not block)
- The `mlbb` strike covers "Legends." including the full stop. Setting `data-mlbb` on "Legends" only would strike the words and leave the full stop clean.
- `.levels__label` could take `font-variant-numeric: lining-nums tabular-nums` explicitly. Plex Mono is lining already, so this is belt and braces.
- The HUD button label changes "Next level" to "Continue?" with no transition. That is fine, and an odometer roll stays cut per the ruling.

## Next step
Apply fix 1, then I sign off. Fixes 2 and 3 can ride along in the same Write.
