# A3 · SEO and performance: Verify

**SCORE 9/10 · SIGN-OFF: yes**

## My a2 must-fixes
1. **CLS from the launcher: FIXED.** `.play-start[hidden] { display: flex !important; visibility: hidden; }` keeps the box, and `global.js` only unhides. Layout is identical before and after, so CLS 0.
2. **Failed preload never retried: FIXED.** `preload()` clears `warm` on rejection; the click is wrapped in try/catch/finally, so no unhandled rejection and `aria-busy` is always cleared.
3. **Fonts not awaited: FIXED, with a ruling change.** `start()` races `document.fonts.load` (Fraunces, Plex Mono, Newsreader) against 1.5 s and then starts anyway (the PM override of TY). Right for SEO and users: a dead button is worse than a fallback face for one run. `game = true` is set first, so a double click cannot start twice.

## Frame allocations: FIXED
- `meter()` runs once per frame from `draw()`; `box()` reused.
- Dusk gradient is built in `resize()`; sign widths are cached by font size.
- Remaining `meter()` in `resetWorld` is a one-off, not per-step.

## Budget
- **10.1 KB gz** (34 KB raw), against a 30 KB limit.
- Still fetched only on hover, focus, touch or click. No images or fonts added. Page HTML and JSON-LD are untouched.

## BLOCKERS
None.

## Not blocking
- `resize()` still reallocates the canvas on every event (a 2018-era phone address bar fires it often). Early-return on unchanged size when convenient.
- Lighthouse before/after on /about/ is still not attached; run it once after merge. Expect CLS 0 and a small JS decrease.

Screenshots (sheet-runs, nine zones, end card) render cleanly, and the inert page behind the overlay keeps crawlable DOM unaffected.
