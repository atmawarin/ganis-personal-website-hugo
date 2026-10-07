# G3 · PM seat: verify

**SCORE 9/10 · SIGN-OFF: yes**

## My g2 must-fixes
1. **Focus lost at end: FIXED.** `continueScreen()` calls `again.focus({ preventScroll: true })`; `end()` focuses the Press start button unless `keepAgain`.
2. **Countdown leak: FIXED.** `begin()` runs `clearInterval(countdown)` and resets the slug to "Continue?"; `end()` clears it too.
3. **J/K caps: FIXED.** `const k = e.key.length === 1 ? e.key.toLowerCase() : e.key`. The `mlbb` buffer is lowercased as well.

## Nice-to-haves
- **Dot buttons exposed at rest: FIXED.** `.levels__go` is `hidden` at rest, shown in `begin()`, re-hidden in `end()`.
- **Font-swap realign: FIXED.** `document.fonts?.ready.then(() => place(true))` is present.
- **Letters as a play-btn: not done.** It was optional, so I'm leaving it.
- **375px light mode: not re-shot.** Dark 375 is clean in g3-375-prove-mlbb.jpg. Residual risk is low.

## Merge notes checked
- **Stamp:** reads "Uninstalling". It is `position: static`, inline after the struck words, with no HUD collision at 375 (screenshot).
- **Live lines:** both match the ruling.
- **Page:** the `/about/` curl shows Press start, the Prove copy and the hidden Play again. `global.js` passes a syntax check.

## BLOCKERs
None.

## Non-blocking nit
- **Strike overshoots:** it covers the full stop in "Legends." (the word span includes the period). Cosmetic; fix only if it is cheap.

## Confidence
9/10. It plays, and it is inert at rest. The one thing I have not seen first-hand is a real-device 375px font-swap reflow.

**Next step:** merge.
