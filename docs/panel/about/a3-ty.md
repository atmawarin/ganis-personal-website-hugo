# A3 · TY (type): loop 3 verify

**SCORE 9/10 · SIGN-OFF yes**

## My a2 must-fixes
| # | Item | Status | Evidence |
|---|---|---|---|
| 1 | Fonts gated before first frame | **SUPERSEDED** (by PM merge, intended) | `start()` (about-game.js 77-87) awaits `document.fonts.load` for Fraunces 600, Plex Mono 500, Newsreader, raced against 1.5 s, then starts anyway. Starting beats a dead Press start; my "don't start" is overruled and I agree. Sheet-runs shows Fraunces "N", Plex Mono `assumption`, and the card in Fraunces: faces loaded. |
| 2 | Canvas text under 12px on phones | **FIXED** (floor is 11 CSS px, per PM ruling) | `text()` clamps `size = max(size, 11/scale)` (line 651). Sign box follows `fs` and caches width per sign, remeasuring only when `fs` changes (670-671). m-z1-run-375-dark legible. |

## Nice-to-haves
- Sign `measureText` cached: **FIXED**.
- HUD/card kickers at `0.72rem` (11.5px, main.css 677, 680, 693, 698): **NOT FIXED**. Not a blocker; DOM text is above the 11px floor PM set. Bump to `0.75rem` in a later pass.

## BLOCKERS
None.

## Checked
- Level cards: Fraunces title, Newsreader sentence, mono kickers intact (z9-card).
- End card shows time plus stumble count in `.bl__note`; type scale consistent.
- "Jump twice." flash at doubleAt 8.0 matches the PM note.
- No new typeface, no pixel font, no "GAME OVER".

**Next step:** ship; queue the 0.75rem kicker bump with the next CSS touch.
