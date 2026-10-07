# g2-ixd: IxD review, game round loop 2

**SCORE 7.5/10 | SIGN-OFF: no (three small fixes, then yes)**

## What works
- Rest state is untouched: `hidden` on pawn, route, HUD, start. Nothing moves on load or scroll.
- Key map matches the ruling: modifiers and inputs ignored, Up/Down/Space left native, `Esc` exits.
- Reduced motion keeps every move: `setText` returns early, the global `* { transition: none }` zeroes the rest, scroll goes `auto`, countdown is skipped.
- Word-set is interruptible (`finishText` on key and pointerdown) and `move()` re-triggers it cleanly through the reflow trick.
- Resize re-measures and snaps without a transition. Rapid keys retarget the transform, no queue.
- Live line plus `aria-current` plus focus on the `li` are in place.

## MUST-FIX

1. **Focus is dropped to `<body>` when the focused control is hidden.** Affects keyboard and screen-reader users on three paths: `Exit` (HUD hides), `Next level` at Prove (`continueScreen` hides the HUD), `Esc` leaves focus on a stale `li`.
   File: `assets/js/global.js`.
   - End of `end()`: `if (!keepAgain) start.querySelector("button").focus({ preventScroll: true });`
   - End of `continueScreen()`, after `again.hidden = false;`: `again.focus({ preventScroll: true });`

2. **The 9 `levels__go` buttons are live at rest.** At rest they are still in the accessibility tree ("Go to level 4, ...") and invisible 44px hit areas over the dots start the game on tap, and cover the first 20px of each text column (blocks text selection).
   File: `assets/js/global.js`.
   - After creating `go`: `go.hidden = true;`
   - In `begin()`: replace the `.tabIndex = 0` line with `levels.forEach((li) => { const g = li.querySelector(".levels__go"); g.hidden = false; g.tabIndex = 0; });`
   - In `end()`: `li.querySelector(".levels__go").hidden = true;` in place of the `tabIndex = -1` line.
   - In the `go` click handler, change `playing ? move(n) : begin(n)` to `move(n)`.

3. **Mobile address-bar resize snaps the pawn mid-move.** The `resize` event fires on touch scroll when the browser chrome collapses, which cancels the pawn and route transition and jumps them.
   File: `assets/js/global.js`, last block. Add `let w = innerWidth;` above the listener. Inside the timeout, use `if (innerWidth !== w) { w = innerWidth; place(true); }`. Also call `place(true)` from `document.fonts.ready.then(...)` so Fraunces swap cannot leave the pawn off its dot.

## Nice-to-have
- `speak()` of identical text twice (Continue, then Play again, then Continue) is not re-announced. Clear `live.textContent` and set it in a `requestAnimationFrame`.
- Focus on the `li` plus the live line makes some screen readers read the level twice. Consider dropping the live line for level moves and keeping it for Continue and `mlbb`.
- `J` and `K` ignore Caps Lock. Compare `k.toLowerCase()`.
- `end()` drops the query string: use `location.pathname + location.search`.
- `pawn.is-land` timeouts stack on rapid moves. Store the timer and `clearTimeout` it.
- `begin()` does not `clearInterval(countdown)`, so Play again mid-count leaves a stray interval until the next `end()`. Harmless but untidy.
- After the Continue screen, `Press start` stays hidden until Play again, so the top of the page offers no restart. Acceptable per the ruling, but worth a second look.
