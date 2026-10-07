# A2 · TY (type): loop 2 review of Baseline

**SCORE 7/10 · SIGN-OFF no** (two must-fixes, both small)

## What works
- DOM carries everything readable: level card (Fraunces 600, `bl-ink` wght 300 to 600 / SOFT 100 to 0, `font-synthesis: none`), real sentence at 17px/1.5, Plex Mono caps kickers. This is the signature moment and it lands (z5-card, m-z1-card).
- HUD is tabular-nums lining-nums, so the G_R_I_UN meter does not jitter.
- Contrast holds in dark: muted `#9b9282` on `#161411` passes; red `#ff7552` on dark passes. Quit is muted by design and still AA.
- No new typeface, no glow, no pixel font, no "GAME OVER". Voice is intact.

## MUST-FIX

**1. Fonts are not gated before the first frame (my rule 1 and PLAN line 44).**
`grep fonts assets/js/about-game.js` returns nothing. Canvas text (signs, ASSUMPTION/TESTED/UNINSTALLING, WATER, Fraunces letters) bakes whatever face is loaded at that frame; a cold load shows the monospace/Georgia fallback, and canvas never re-renders on swap.
- File: `assets/js/about-game.js`, top of `export async function start` (or the module's top-level before first `requestAnimationFrame`):
```js
await Promise.race([
  Promise.all([
    document.fonts.load('600 13px Fraunces'),
    document.fonts.load('500 7px "IBM Plex Mono"'),
    document.fonts.load('18px Newsreader'),
  ]),
  new Promise((_, no) => setTimeout(no, 1500)),
]).catch(() => { return false; });
```
On timeout, `return` before building the overlay so the page stays as is (as the plan says). Keep the `aria-busy` on Press start until this resolves (already handled by the launcher's `finally`).

**2. Canvas labels fall under the 12px minimum on phones.**
Logical sizes are 7px (signs), 6px (WATER), 5.5px (ASSUMPTION/TESTED/UNINSTALLING). With `scale = min(h/180, w/240)` at 375 wide that is 1.56x, so they render at 10.9, 9.4 and 8.6px. They are the game's teaching labels. Desktop is fine (31px+).
- File: `assets/js/about-game.js`, method `text()` (line ~622). First line of the body:
```js
size = Math.max(size, 11 / this.scale);   // never under 11 CSS px on screen
```
- In `things()` (line ~641) the sign box measures at a fixed 7px. Replace the font and box so they follow the same size:
```js
const fs = Math.max(7, 11 / this.scale);
ctx.font = `500 ${fs}px "IBM Plex Mono", monospace`;
const w = ctx.measureText(s.s.toUpperCase()).width + 8;
const h = fs + 5;
// fillRect/strokeRect(x - w/2, G - 32 - h, w, h); text baseline G - 32 - 2.5, size fs
```
- Lines 721 and 731 reuse `text()`, so they inherit the clamp; labels stay centred on `o.w`.

## Nice-to-have
- HUD and card kickers are `0.72rem` (11.52px), under the 12px floor. Change to `0.75rem` in `.bl__bar`, `.bl__kicker`, `.bl__note`, `.play-hint` (main.css lines 676, 679, 692, 697).
- `measureText` still runs per frame in `things()`; cache width per sign string.
- At 375 the HUD wraps to two rows (90px of play height); acceptable.

Files: `/Users/ganis/Code/ganis-personal-website-hugo/assets/js/about-game.js`, `/Users/ganis/Code/ganis-personal-website-hugo/assets/css/main.css`.
