# A2 · SD (design): review of Baseline

**SCORE 7/10 · SIGN-OFF: no** (one scale fix, then yes)

## What works
- **Art direction is the site's.** Paper, ink, one red mover, Fraunces card title, Plex Mono bar, hard-shadow panel. It reads as a specimen plate, not an arcade. Right call over purple.
- **Overlay chrome is clean.** 44 px buttons, thin ink rule, Quit dimmed so Skip wins. Level card and title card share one panel, so the world feels continuous.
- **Hazard readability is good.** Solid black pothole plus a caret, telegraphed well ahead; stumble alpha 0.5 reads as a state, not a glitch. Zone twists are legible in the sheet (waves, kerbs, desks, `assumption` crates, `ML` tile).
- **Dark mode holds.** m-z1-run: pale ground line, red car and white pothole all contrast fine.

## MUST-FIX

**1. The world is too small and the sky is dead (desktop and 375).**
Desktop: runner about 80 px wide in a 1280x668 stage, with the top 55% empty (z1-run: nothing above y=380). 375: ground at 67% of height, top 40% blank, runner about 45 px (m-z1-run). The 180 u world is centred, not framed.

File `assets/js/about-game.js`, `resize()` (lines 147-150). Replace the scale and offY lines with:

```js
const vis = r.width < 600 ? 150 : 128;           // world height we actually show
this.scale = Math.min(r.height / vis, r.width / (r.width < 600 ? 200 : TUNE.minW));
this.W = r.width / this.scale;
this.viewH = r.height / this.scale;
// ground sits at 78% of the stage on desktop, 72% on a phone (thumb room above)
this.offY = this.viewH * (r.width < 600 ? 0.72 : 0.78) - TUNE.ground;
```

Hop apex is only about 56 u, so nothing gameplay-critical is lost. Effect: desktop runner about 1.5x larger, sky halved; phone about 1.3x larger. Then check every zone for clipping at the top, in particular:
- the Malang moon (z2);
- the Akubu and Papua signs (z3, z5);
- the Yogyakarta skyline.
If any clip, lower its y by 10 u. Line 810 (`-this.offY - 10`) already covers negative offY, so the fill needs no change.

**2. Far layer is too faint to count as a layer.** The trees (z1, z6, z8, z9) are about 15% ink and almost vanish on desktop. In the dark phone shot they are barely there.

File `assets/js/about-game.js`, the tree drawing (grep `arc(` near the parallax code): raise the far-layer alpha from its current value to `0.32`, and keep the near-layer at its current value. A depth read needs 2:1, not 8:1.

## Nice-to-have (not blocking)
- **Title card (00-title):** the pale car and the `G` and `A` letters behind the panel look like debris at 20% alpha. Hide the world props on the title card, or keep only the ground line.
- **Card scrim:** `.bl__card` at 82% paper hides the world completely. Try 70% so the paused run is faintly alive behind the panel (`assets/css/main.css`, `.bl__card`).
- **Level 1 card** repeats the meter (`G__N_SUN`) in the bar and `GANIS` in the panel. Fine, but the bar meter could hide while a card is up.
- **Phone bar** wraps to two rows (title above, buttons below), which costs 44 px of stage. Acceptable at 375; consider hiding `Level n of 9 ·` to just `n/9` under 400 px if it ever feels cramped.
- **Zone 7** (long run) reads emptiest: a lone red figure and two boxes. A dusk gradient edge or km posts on the ground tick marks would help.
- Verify the touch hint on a real phone (shots show the keyboard hint).

## Sign-off condition
Fix 1 (and 2 if it takes under 10 minutes), re-shoot z1, z2, z5 and m-z1-run, and I sign off.
