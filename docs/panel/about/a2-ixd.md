# A2 · IxD review of Baseline (arcade loop 2)

**SCORE 7.5/10 · SIGN-OFF: no** (4 must-fix, all small; sign off once they land)

## What works
- Controls match the plan: Space/Up/W, tap, hold for height, coyote, buffer, 120 Hz fixed step, 50 ms clamp.
- `e.repeat` guarded; keyup releases; pointerup and pointercancel both release; `touch-action: none` on the canvas.
- Pause on blur, hidden tab and P; Resume refocuses the canvas; the loop restarts with a fresh `last`.
- Esc closes and restores focus to Press start; Skip lands on the level li; scroll position restored.
- Reduced motion is read live (`still.matches`) and the CSS has a global fallback. Calm mode plays.
- Scroll lock compensates the scrollbar gap. All overlay buttons are 44 px. Listeners are all removed on close.

## MUST-FIX

1. **A card can be skipped by accident.** `assets/js/about-game.js`, `levelCard()` and `endCard()`: a player mashing Space or tapping when the card appears lands a keydown/keyup (or tap) on the freshly focused "keep running" button and the card is gone before it is read. Add `this.armed = performance.now() + 600;` as the first line of `levelCard` and `endCard`, and in the click handler add as the first line after `const a = ...`:
   `if ((a === "next" || a === "again" || a === "page") && performance.now() < (this.armed || 0)) return;`

2. **Space is hijacked from the bar buttons.** `key()`: with a bar button focused during a run, Space jumps and never activates Pause, Skip or Quit (keyup is prevented too). Keyboard users cannot use them. Change the jump line to:
   `const jump = (k === " " && !e.target.closest?.("button")) || k === "ArrowUp" || k === "w" || k === "W";`

3. **Focus can escape the dialog.** `trap()` handles `i <= 0` for Shift+Tab but not `i === -1` for Tab. Click on the card text or the "Baseline" label, press Tab, and focus goes to the page behind the overlay. Best fix is to make the page inert while open:
   - `open()` after the scroll lock: `this.inerted = [...document.body.children].filter((n) => n !== this.el && !n.inert); this.inerted.forEach((n) => (n.inert = true));`
   - `close()` in `done`, after `this.el.remove()` and before any `focus()`: `this.inerted.forEach((n) => (n.inert = false));`
   - Keep `trap()` for wrap-around, and add `if (i < 0) { e.preventDefault(); f[e.shiftKey ? f.length - 1 : 0].focus(); return; }` at its top.

4. **Card clips its top in a short viewport** (phone landscape, 667x375: stage about 320 px, level cards taller). `assets/css/main.css` line 690-691: grid `place-items: center` plus `overflow-y: auto` makes the overflowing top unreachable. Change `.bl__card` to `display: flex; overflow-y: auto;` (remove `place-items`) and `.bl__panel` to add `margin: auto;`. Same look when it fits, scrollable when it does not.

## Should-fix (small)
- `global.js` launcher: a failed import (offline phone) leaves a rejected promise cached in `warm`, so Press start never retries. Wrap in `catch { warm = null; }` before `finally`.
- `.bl` CSS: add `overscroll-behavior: none;` and, on `.bl__canvas`, `-webkit-touch-callout: none;` so long-press and iOS rubber-band do not fight a held jump. Bar padding should add `env(safe-area-inset-left/right)` for notched landscape.
- `pointerdown`: ignore `e.button !== 0` so right-click does not jump; add `setPointerCapture(e.pointerId)` so a mouse released off-canvas still releases.
- `resize()`: `px` changes with width but obstacle `x` was fixed from the old `px` in `resetWorld`. On a mid-run rotate the runner can jump onto a hazard. Keep `lead` stable (store `this.lead` once) or accept it, since the safe window covers it.
- Plan says fonts are awaited before the first frame; the code does not. Add `await document.fonts.load('500 7px "IBM Plex Mono"')` and Fraunces in `start()` (or fall back to the page's `document.fonts.ready`).

## Nice-to-have
- Esc during a run pauses first, second Esc quits (players reach for Esc to stop). Plan says quit, so ask.
- On touch, let a tap anywhere on a level card continue (hint says "Tap to keep running").
- `role="application"` is not needed; keep the canvas label. Consider `aria-describedby` on the dialog pointing at the title card text.
