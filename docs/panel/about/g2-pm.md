# G2 · PM seat: review

**SCORE 8/10 · SIGN-OFF: no (one small fix round, then yes)**

## What works
- **It plays.** One verb, one piece, one ending. Press start, pawn drops, route inks, CLEARED stamps land, title inks, words set, HUD, `Continue? 5 4 3 2 1`, `Play again`. Reads as a game, not a skin.
- **Scope held.** Plan rulings honoured: no swipe, no Space/Up/Down capture, no storage, one hidden code, nothing on load or scroll. About 190 lines JS, inside budget.
- **Parity.** Content stays in the HTML; `hidden` start/pawn/HUD; reduced-motion rule at main.css line 752 zeroes all motion while moves still work.
- **Four jobs.** Entertain: yes. Second read: Play again plus `mlbb`. Letters and Synetica: both sit in the payoff block, and the footer signup is directly beneath (g-desktop-continue.jpg).
- `mlbb` repeats a line already on the page. No invented facts.

## MUST-FIX
1. **Focus is lost when the game ends.** `/assets/js/global.js`, in `continueScreen()` and `end()`: the focused HUD button gets `hidden`, so focus drops to `<body>` and keyboard and screen-reader players restart from the top of the page. Change: at the end of `continueScreen()` add `again.focus({ preventScroll: true });` after `again.hidden = false`. In `end()`, after `start.hidden = false`, add `if (!keepAgain) start.querySelector("button").focus({ preventScroll: true });`.
2. **Countdown leaks into a new game.** `/assets/js/global.js`, `begin()`: pressing Play again mid-countdown leaves the interval running, so it rewrites the slug for up to 5s while playing. Change: first line of `begin()`: `clearInterval(countdown); slug.textContent = "Continue?";`.
3. **Page-level shortcut `j` ignores caps.** Same file, keydown handler: `k === "j"` and `k === "k"` miss `J` and `K`, which the plan lists. Change: `const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;` replacing `const k = e.key;`.

## Nice-to-haves (do not block)
- The 44px `.levels__go` buttons exist at rest with `tabindex=-1` but are still exposed to screen readers as "Go to level N" before anyone presses start. Set `aria-hidden` and `inert` until `begin()`, remove in `begin()`, restore in `end()`.
- Letters is the third small mono link in "Pause menu". If newsletter growth matters, give it the red `play-btn` treatment beside Play again. Not required by the plan.
- At Prove the HUD note and the Continue block stack within about 120px; fine, but watch it at 375px in light mode (only dark was screenshotted).

## Confidence
8/10 that Ganis reads this as a game. Remaining risk is pawn alignment on 375px after a font-load reflow; `resize` re-measures but font swap does not. A `document.fonts.ready.then(() => place(true))` line near the resize handler would cover it (add if cheap).
