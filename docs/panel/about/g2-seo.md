# G2 · SEO · Loop 2 review

**SCORE 7.5/10 · SIGN-OFF: no (3 small fixes, then yes)**

## What works
- **Parity at rest is clean.** One `h1`, nine `h2`s, all text in served HTML (curl: 0 `.w` spans, so crawlers and no-JS get the original markup). Pawn, route, HUD, Cleared stamps and Start row are all `hidden` in the HTML.
- **No load or scroll work in the mechanic.** No scroll listener, no rAF loop, no observer. Moves fire only from click, key or the debounced `resize`.
- **CLS design is right.** Pawn, route and stamps are absolutely positioned, transform/opacity only. Stamp sits in the label row.
- **Native scrolling stays native.** Up/Down/Space untouched, modifiers and inputs ignored, one polite live line, `aria-current`, focus moved with `preventScroll`.
- **Hash handling:** `replaceState` (no history spam), no auto-start on arrival.
- **Weight:** about 3 KB of JS source added, no library, no request.

## MUST-FIX

1. **Word-wrapping runs on every page load, not on Start** (breaks the "no work on load" ruling and the "wrapped once on Start" line in PLAN).
   File: `assets/js/global.js`, the `levels.forEach` block that walks text nodes and builds `.w` spans (~lines 372-397).
   Change: move the TreeWalker/span code into a `wrapWords()` function guarded by `let wrapped = false`, call it at the top of `begin()` only; keep the `.levels__go` creation and tilt in the load pass. Move the `ml`/`mlbb` wrapping after it, and lazily call `wrapWords()` from the `mlbb` key handler if `!mlbb`. Visitors who never press start keep untouched DOM (also better for find-in-page and translate tools).

2. **Nine invisible "Go to level" buttons are live at rest.** `.levels__go` is displayed with `tabindex=-1` while not playing, so screen readers list nine extra buttons, and a thumb tap near the spine silently starts the game. `.is-playing` has no CSS at all.
   File: `assets/css/main.css`, line ~685 (`.levels__go`).
   Change: add `display: none` to `.levels__go` and a new rule `.board.is-playing .levels__go { display: block; }`. In `global.js` delete the `playing ? move(n) : begin(n)` branch, use `move(n)`.

3. **Keys `J`/`K` fail with Caps Lock or Shift.**
   File: `assets/js/global.js`, keydown handler (`k === "j"`, `k === "k"`).
   Change: `const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;` before the comparisons.

## Nice-to-have
- **Title ink can reflow.** `title-ink` animates `wght` from 300 to 600; wrapped titles at 375px can change line count mid-animation and nudge the pawn offset. Change `from` to `"wght" 520` (`main.css` ~line 692), or verify at 375 that no title wraps differently.
- Fraunces swap after Start would shift `offsetTop`; call `place(true)` from `document.fonts.ready.then(...)` when `at >= 0`.
- `end()` calls `replaceState(null, "", location.pathname)`, dropping any query string; use `location.pathname + location.search`.
- Focusing the whole `li` plus the live line makes some readers speak the level twice; consider live line only.
- `setTimeout` for `is-land` is not cleared on rapid moves; harmless.
