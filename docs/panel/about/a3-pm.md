# A3 · PM seat · Arcade loop 3: Verify

**SCORE: 9/10 · SIGN-OFF: yes**

## My a2 must-fix
| # | Item | Status |
|---|---|---|
| 1 | Stumble count (replay hook) | **FIXED.** `this.hits` is reset in `begin()` (line 359) and incremented in `stumble()` (508). The end card reads "Your time 2:19.7 · 36 stumbles" and falls back to "no stumbles" (z9-card.png, line 328). |

## Merge notes spot-checked
- "Jump twice." is in at `doubleAt: 8.0` (line 448).
- The font race is 1.5 s, then the game starts anyway (lines 82-87).
- Cards are armed for 600 ms (271).
- The page behind is made inert, and the inert state is restored on close (226, 245).
- `.play-start` reserves its space while hidden (css 673).
- The launcher clears `warm` and retries after a failed import (global.js).

## Nice-to-haves from a2
- **Phone scale:** PARTLY. The narrow-screen formula is in (`150` / `200`, line 155). In m-z1-run-375-dark.png the world is still about a sixth of the height, with a large empty top. This is cosmetic and not a blocker. The play is legible and the 44px targets hold.
- **Uninstalling stamp on an ML hit:** NOT FIXED. Backlog.
- **First-run teaching, sound, zone select:** backlog.

## BLOCKERS
None.

## Watch (post-ship)
- The bot run records 36 stumbles. That is a bot, not a human, and the assist after 4 stumbles still carried it through. Watch real stumble counts on a Netlify preview.
- Playtest on one real phone.

## Next step
Ship to a Netlify preview, then do the one-phone playtest.
