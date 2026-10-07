# G2 · BB (brand): review of "The red pawn"

**SCORE 8/10 · SIGN-OFF: no, until one copy fix lands (below).**

## What works
- **Content parity holds.** All nine levels, "You are here", email, Synetica and Letters are plain HTML. `Cleared` stamps, pawn, route, HUD and Play again are all `hidden` until JS runs, and `[hidden]` is `!important` (main.css:496), so no-JS and print show today's page.
- **Nothing gated.** Every level is jumpable (1-9, tap, Exit). Continue block and email are never blocked; the 5-4-3-2-1 is skipped under reduced motion and does not delay anything.
- **Portrayal.** Pawn is an abstract disc. No sprite or token for Gita, Zen or Zia. No XP, score, "unlocked", "boss", exclamation marks, emoji. No storage, no tracking.
- **Privacy and parity.** Hash uses `replaceState`; arriving on a hash does not start play. Word spans change no text. Typing is ignored in inputs and with modifiers.
- **Hidden code tone.** `mlbb` repeats a line already in Prove and ties it to the page's own joke. Dry, one code, reversible. Screenshot g-desktop-mlbb reads right.
- **Exit is always visible** and Esc works.

## MUST-FIX
1. **The stamp and the live line state a completed fact the page denies.**
   Prove says "still uninstalling Mobile Legends." The stamp says `UNINSTALLED`, and the live line says "uninstalled" then "reinstalled" (an invented claim, and it is read aloud to screen readers).
   - `assets/js/global.js`, line `unStamp.textContent = "Uninstalled";` change to `"Uninstalling"`.
   - Same file, in the `mlbb` keydown handler, replace the `speak(...)` argument with:
     `struck ? "Mobile Legends, struck through. Still uninstalling." : "Mobile Legends, strike lifted."`
   - Also update `docs/panel/about/PLAN-game.md` stamp name `UNINSTALLED` to `UNINSTALLING` so the record matches.
   Reason: it should repeat the page's words ("still uninstalling"), never assert an outcome or a reinstall.

## Nice-to-haves (not blocking)
- **`Cleared` on Level 1 (Papua, birth) and Level 2 (Malang, childhood away from parents).** My g1 asked for neutral stamps on these two. The plan accepted `CLEARED` because it describes the visitor's progress. It is tolerable, but in `layouts/about/list.html` consider no stamp on levels 1 and 2, or the numeral only. Your call; I do not block on it.
- Under the HUD, "Exit" could read "Exit game" so a recruiter reads it as a stop button at a glance. Current label is acceptable.
- Add `aria-pressed` or a text change is not needed; the live line already covers `mlbb`.
- Verify `Play again` after the count-down resets the slug to "Continue?" if pressed mid-count (`begin` does not call `clearInterval(countdown)`, though `end()` does; `continueScreen` calls `end(true)` first, and `again` leads to `begin` directly). Add `clearInterval(countdown); slug.textContent = "Continue?";` at the top of `begin()` to be safe.

## Verdict
Strong, restrained, honest brand layer. Fix item 1 (two string edits) and I sign off.
