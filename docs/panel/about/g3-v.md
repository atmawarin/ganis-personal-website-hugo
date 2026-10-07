# g3 · V (voice): verify, game round loop 3

**SCORE 9/10 · SIGN-OFF: yes**

## My g2 must-fixes
1. **mlbb live line: FIXED.** `reinstalled` is gone (grep clean). Now "Mobile Legends, struck through. Still uninstalling." / "Mobile Legends, strike lifted." Both are claims the page already makes or none at all. Stamp reads `Uninstalling` (global.js:430), matching Prove's "still uninstalling". My g2 wording ("uninstalled") is **SUPERSEDED** by the BB ruling, which is right: the page's own tense wins.
2. **Continue live line: FIXED.** `continueScreen()` speaks "That's as far as the map goes. Contact details are below." (global.js:540). Context is now there, and no bare "Continue?".

## Re-check list
- Grep `reinstalled`: nothing, in JS or served HTML.
- Em and en dashes in list.html and the game block of global.js: none.
- Served `/about/`: 0 `.w` spans, so the rest page is untouched copy.
- Keys lowercased (nice-to-have from g2: **FIXED**). Focus lands on Play again, then Press start, so no silent drop for screen-reader users.
- Inline stamp after the struck words (position: static): fine for voice, since the stamp is `aria-hidden` and the live line carries the meaning.
- g3-375-prove-mlbb.jpg: struck "Mobile Legends" with `Uninstalling` beside it reads as one deadpan line. No overlap with the HUD.

## BLOCKERS
None.

## Not fixed, not blocking
- Countdown still shows one number (`Continue? 4`), not the accumulating `5 4 3 2 1` in PLAN microcopy. Defensible; I would still match the spec if a loop 4 happens.

Next step: ship.
