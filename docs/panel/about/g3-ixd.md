# g3-ixd: IxD verify, game round loop 3

## My g2 must-fixes
1. **Focus dropped when the focused control hides: FIXED.** `end()` focuses Press start unless `keepAgain`; `continueScreen()` focuses Play again.
2. **Nine `levels__go` buttons live at rest: FIXED.** Created `hidden`, shown in `begin()`, re-hidden in `end()`. Click handler is `move(n)`. The curl of /about/ shows none, as expected (JS-made).
3. **Mobile address-bar resize snaps pawn: FIXED.** Resize acts only on a width change, debounced; `fonts.ready` re-places.

## Nice-to-haves picked up
- Keys lowercased (J/K and Caps Lock): done.
- `begin()` clears the countdown: done.
- Not done, not blocking: `location.search` dropped in `end()` and `continueScreen()` hash; identical-text re-announce; stacked `is-land` timers (harmless, last one wins).

## Checked
- 375 screenshot (Prove + mlbb): inline "UNINSTALLING" stamp sits under the struck words, clear of the sticky HUD. HUD controls readable and one-thumb. Rest state unchanged.
- Live lines match the ruling: "Mobile Legends, struck through. Still uninstalling." / "strike lifted."
- Reduced motion still returns early in `setText` and skips the countdown.

## BLOCKERS
None.

## SCORE 9/10
## SIGN-OFF: yes
