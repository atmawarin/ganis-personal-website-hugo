# N3 / GD: verify

**SCORE 9/10 · SIGN-OFF: yes**

## My n2 must-fixes
1. **Hold stuck through Pause: FIXED.** `api.hold` pushes `stop` into `self.holds`, `next()` resets it, and `pause()` calls every stop before setting `paused`. `start()` also refuses while paused or `aria-disabled`. The blur listener covers tab switches. Matches the headless check (keyboards stays at 65 after resume).
2. **Alarm 1 timing: FIXED.** `later(api.calm ? 0 : 1000, ...)`.
3. **Replay pull: FIXED.** `deal()` sorts unmet first (stable) after the shuffle, and falls back to the SAFE six if the verb or Bahasa checks leave no valid mid.
4. **Keyboards endgame: FIXED.** `n > 10 ? 45 : calm ? 400 : 320`, and "10 left." is announced at n === 10.

## Should-fix and nice-to-have
- **Skip: FIXED.** Stamp reads "Skipped" in the card and the end list, and `met` is untouched.
- **Librarian comment, clock tol: not found as a problem.** The librarian carries no stale "only loss" comment now. `tol` is still `api.index === 0 ? 3 : 1`, harmless since the clock is first.
- **Reduced motion, uninstall: NOT FIXED.** `.hm-app.is-holding i` still fills at once under the global `transition: none`. Cosmetic, since the hold still has to run its 1.2 s timer. Not a blocker.
- **ages, garnisun prompt, share, last-card label: not verified, not blockers.**

## BLOCKERs
None. `berbeda.png` renders correctly: labelled cups, the odd red oval, and the "Hmm. 2/8" bar with Pause, Skip and Quit all legible.

## Next step
Ship. Optionally add `.hm-app.is-holding i { display: none }` inside the reduced-motion block.
