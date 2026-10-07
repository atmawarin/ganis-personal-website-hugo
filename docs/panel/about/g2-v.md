# g2 · V (voice): review, game round loop 2

**SCORE 8.5/10 · SIGN-OFF: no (one small must-fix, two lines; sign-off on re-check)**

## What works
- **Every plan string is present and exact:** `Press start`, hint `Arrow keys work. So does tapping a level.`, `Back` / `Next level` / `Exit`, `Level N of 9`, `CLEARED`, `That's as far as the map goes.` (curly apostrophe, correct), `Continue?`, `Play again`. Sentence case on all buttons.
- **No em dashes or en dashes** in list.html or the game block of global.js. No exclamation marks, no "congratulations", "unlocked", "game over", score.
- **No invented facts.** `CLEARED` describes the visitor's progress and never lands on Prove. `UNINSTALLED` repeats a line already on the page. Level copy is untouched, only wrapped in spans.
- **The one joke is flat.** `Next level` turning into `Continue?` at Prove, then the countdown, then `Play again`, reads as deadpan with no wink. Good.
- **Live region is quiet:** one polite line per move, "Level 4 of 9: Yogyakarta", no per-word noise. Stamps and pawn are `aria-hidden`.
- Continue screenshot: `Continue? 4` in the slug, `Play again` under the unchanged email copy. Email, Synetica and Letters are not gated.

## MUST-FIX
1. **`/assets/js/global.js`, the `mlbb` handler: wrong live line when the code is lifted.** Current: `"Mobile Legends, reinstalled."`. That is a new claim about Ganis, and PLAN ruled "still uninstalling". Change the speak call to:
   `speak(struck ? "Mobile Legends, uninstalled." : "Mobile Legends, still uninstalling.");`
   (`struck` is the existing `classList.toggle` result already in scope.)
2. **`/assets/js/global.js`, `continueScreen()`: `speak("Continue?")`.** Screen-reader users hear a bare question with no context, and it repeats the HUD button label. Change to:
   `speak("That's as far as the map goes. Contact details are below.");`
   Both halves are already on the page (HUD note, Continue block). Use a plain apostrophe; it is a live region, not typeset.

## Nice-to-have (not blocking)
- **Countdown shows one number at a time** (`Continue? 4`). Microcopy in PLAN reads `Continue? 5 4 3 2 1`. Accumulating (`Continue? 5 4 3`) would match the spec and the joke lands harder as the row shortens. Either is defensible; I would match the spec.
- **`J` / `K` are matched lowercase only** (`k === "j"`). With Caps Lock they silently fail. Use `k.toLowerCase()`.
- Level-jump buttons read "Go to level 4, Yogyakarta". Good. When not playing they are `tabindex=-1`, so nothing to announce at rest. Fine.

## Re-check list for sign-off
Grep `reinstalled` returns nothing; live line at Prove-continue carries the map sentence; still no dashes.
