# R5 · IxD: review of the built shelf

**SCORE 8 / 10 · WOW 9 / 10 · SIGN-OFF: no** (three small, fast fixes, then yes)

The build matches the plan and the later decisions: F is favourites, the toggle and strike zones are split, hash arrival is instant, reduced motion is honoured, the roving arrow keys work, and `pick()` moves focus to the row. Three real defects remain.

## MUST-FIX

1. **No-JS shows dead controls (progressive enhancement).** `main.css:267` `.filters{display:flex}` and `main.css:503` `.shelf-tools{display:flex}` override the UA `[hidden]` rule. In `v1-nojs-1280.png` the "Show my favourites" and "Stamp one for me" buttons, the subject chips, and the hint line all render with nothing behind them. Fix: add `[hidden]{display:none!important}`, or `.shelf-tools[hidden], .filters[hidden], .shelf-hint[hidden], .card__stamp[hidden]{display:none}`. Check `.card__stamp` too, since it is `inline-flex`.

2. **`@keyframes stamp` is defined twice** (`main.css:591` and `main.css:667`). The later `.ttol` definition wins. Every shelf stamp and the tally then animate with `translateY(-50%) rotate(-8deg) scale(1.8→1)`. So each strike jumps up half its height and snaps back, and the tilt and `--sx/--sy` jitter are ignored during the 120ms. Fix: rename the shelf one to `shelf-stamp`. Update `.stamp` (~l.590) and `.shelf-tally.is-on::before` (~l.516) to use it.

3. **Tapping a title to close leaves it half-open.** `global.js` `focusin` adds `is-preview` unconditionally. A mouse click or tap focuses the toggle, so after closing, the cover and stamp ghost stay out until blur. Fix: `row.addEventListener("focusin", (e) => e.target.matches(":focus-visible") && row.classList.add("is-preview"))`. Also remove `is-preview` inside `open(row, false)`.

## Nice-to-have

- Escape with nothing open wipes every stamp on the page (`global.js`, the keydown Escape branch). Limit it to clearing favourites, or confirm first.
- The year rail links to hidden cards while a subject filter is active (`shelf.html` rail, `global.js` `filter()`). Add `aria-disabled` and dim the link, or reset the filter on rail click.
- Single-key shortcuts (WCAG 2.1.4) are only mitigated by the visible buttons. Consider firing F/N/S only after focus has entered `.shelf-head` or `.shelf-cards`, or add an off switch.

SCORE 8 / WOW 9 / SIGN-OFF no
