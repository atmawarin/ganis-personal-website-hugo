# A3 · SD (design): verify

**SCORE 8/10 · SIGN-OFF: yes**

## My a2 must-fixes
1. **World scale and dead sky: FIXED on desktop, partly on phone.**
   - `resize()` uses my formula: ground at 78% desktop, 72% phone (about 75% in the shot), moon lowered.
   - sheet-runs: runner and trees are clearly larger, and the sky is no longer dead. z2 moon, z5 skyline and the z8 `assumption` signs show no top clipping.
   - On 375 the scale is width-bound (`width / 200`), so the runner stays about 42 CSS px. About half the portrait stage above the ground is still empty (m-z1-run-375-dark). That is the nature of a portrait stage, not a defect.
2. **Far layer alpha: FIXED.** Trees now ink at 0.3. The two layers read as depth in z1, z4 and z8, and in dark.

## Nice-to-haves
- Title-card debris: not checked, non-blocking.
- Zone 7 emptiness: partly addressed. Dusk gradient is now built in `resize()`, and the km posts show in z7.

## BLOCKERs
None. The panel merge notes (stumble count on the end card, buttons 44px, minimum 11px canvas text) do not conflict with my lane.

## Residual, non-blocking
- Phone: try `narrow` width 170 (instead of 200) for about 1.15x more runner. Shoot m-z5 and m-z8 before changing it.
- z9 end card: the 82% paper scrim hides the run. Try 70%.

## Next step
Ship. Both a2 fixes are in.
