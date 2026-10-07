# A2 · SEO and performance: Baseline build review

**SCORE 7.5/10 · SIGN-OFF: no (three must-fixes, all small)**

## What works
- **Zero load cost is real.** `global.js` shrank by about 240 lines to a ~15-line launcher; the module (~7.5 KB gz, far under the 30 KB budget) is fetched only on `pointerenter`/`focus`/`touchstart`/click. No `modulepreload`, no idle fetch, no fonts or images.
- **Content parity holds.** The `.levels` list, Continue block and JSON-LD are server-rendered and untouched; the game reads titles and text from the DOM. No second copy of facts that crawlers could see.
- **Loop is correct.** Fixed 120 Hz accumulator, dt clamped to 50 ms, rAF cancelled on pause, close and hidden tab, listeners all unbound on close, DPR capped at 2.
- **Overlay is CLS-safe.** `position: fixed`, scrollbar gap compensated, scroll restored on Quit.
- **Pawn removal** is complete; dead weight is gone from every page.

## MUST-FIX

1. **CLS on /about/ from the launcher.** `layouts/about/list.html` ships `<div class="play-start" hidden>`; the deferred `global.js` unhides it, pushing the whole level list down ~72 px after first paint.
   - `assets/css/main.css`, after the `.play-start {` rule add:
     `.play-start[hidden] { display: flex; visibility: hidden; }`
   - `assets/js/global.js`: replace `play.closest(".play-start").hidden = false;` with `play.closest(".play-start").hidden = false;` (unchanged; the CSS now keeps the box, so only visibility flips). Result: layout is identical before and after, CLS 0.

2. **A failed preload can never be retried.** `global.js` caches the rejected promise in `warm`, so one offline hover kills Press start until reload.
   - Change `const load = () => import(play.dataset.src);` to
     `const load = () => import(play.dataset.src).catch((e) => { warm = null; throw e; });`
   - And wrap the click body in `try { ... } catch { play.focus(); } finally { ... }` so the rejection is not unhandled.

3. **Plan ruling missed: fonts are not awaited before the first frame.** `about-game.js` has no `document.fonts.load`. Canvas never triggers a webfont fetch, so Plex Mono and Fraunces letters/signs draw in fallback on first play (Papua letters, SMA signs, WATER).
   - In `start()` (about-game.js, line ~77) make it async:
     `export async function start(button) { if (game) return; await Promise.all(['500 7px "IBM Plex Mono"', '600 13px Fraunces'].map((f) => document.fonts.load(f).catch(() => {}))); if (game) return; game = new Baseline(button); }`

## Fix with the above (frame allocations, lane item)
Allocations per frame are not zero. At 120 Hz `update()` does:
- `box()` returns a new object each step. Reuse one: `this._box ||= {x:0,y:0,w:0,h:0}` and assign fields.
- `meter()` runs every step and builds strings, `letters.map(...).join`, and `obs.filter(...)` (zone 8). Compute the label only when the integer inputs change (e.g. cache `got` count and `Math.floor(f*42)`), or call `meter()` from `draw()` once per frame, not per step.
- `dusk()` calls `createRadialGradient` every frame: build it once at `resize()`, vary only `globalAlpha`.
- `things()` calls `measureText` per sign per frame: cache widths in `resetWorld`.

## Nice-to-have
- `resize()` reallocates the canvas on every resize event; phone address-bar moves fire it. Early-return when `r.width`/`r.height` are unchanged.
- First `tick` uses `performance.now()` against the rAF timestamp; pass `now` from the first callback to avoid a tiny negative dt.
- `.play-hint` text duplicates the subtitle; fine, but one fewer string if cut.
- Lighthouse before/after on /about/ was not supplied; run it once (expect JS transfer delta under 1 KB, since global.js shrank).

## Next step
Apply fixes 1 to 3 plus the box/meter/gradient allocations; I re-check and sign off at loop 3.
