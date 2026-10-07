# G3 · BB (brand): verify "The red pawn"

**SCORE 9/10 · SIGN-OFF: yes**

## g2 must-fixes
1. **Stamp text** `Uninstalled` to `Uninstalling`: **FIXED** (global.js:430).
2. **Live line** for `mlbb`: **FIXED** (global.js:573). Now "Mobile Legends, struck through. Still uninstalling." / "Mobile Legends, strike lifted." No invented reinstall, nothing asserted that the page denies.
3. **PLAN-game.md** stamp name: **FIXED**. Reads `UNINSTALLING`, with the loop 2 ruling noted.

## g2 nice-to-have
- **Countdown reset in `begin()`**: **FIXED** (global.js:494-495, `clearInterval(countdown)` plus slug reset to "Continue?").
- `Cleared` on levels 1 and 2: unchanged, tolerable, not blocking.
- Stamp placed inline after the struck words (SD collision fix): **SUPERSEDED** layout only. Copy untouched, so it is fine for brand.

## Checks
- `curl /about/` still carries "still uninstalling" in plain HTML, so the stamp, the live line and the page now agree.
- Screens g3-375-prove-mlbb and g-desktop-mlbb: the stamp reads as a dry annotation, with no emoji, no exclamation mark, no score language.
- Rest state and no-JS state unchanged: content parity holds.

## BLOCKERS
None.

## Verdict
The brand layer is honest and restrained. Ship.
