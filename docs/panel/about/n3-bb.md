# N3 · BB (brand): loop 3, verify "Hmm."

**SCORE 9/10 · SIGN-OFF yes**

## My n2 must-fix
1. **Skips stamped as "Still open": FIXED.**
   - `finish(won, skipped)` (about-game.js ~584-598) stamps `Skipped` when `skipped` is true.
   - `met.add(id)` and `write(this.met)` run only when `!skipped` (line 593), so "Met n of 12" is no longer inflated.
   - The end list (line 620) also shows `Skipped`.
   - `screens/mind3/skip-card.png` confirms it: a red `SKIPPED` stamp, `Next thought.` focused, and the idea's own words with `Read it`.
   - "Still open" is now reserved for thoughts that really have no answer.

## Blockers
None.

## Still open (nice-to-haves, not blocking)
- Tie-break on "Mostly:" is not verified. If it still always resolves to `friction`, randomise it in v2.
- The `berbeda` price-war line was not added. Optional, and `berbeda.png` still shows generic labels with no named shop.
- Keep the `ML` tile out of any OG or share image.

## Brand and privacy re-check
- The bar label is `Hmm. n/8` and the card kicker carries `lang`.
- "Read it" and the end-list links open in a new tab with `rel="noopener"`.
- Gated journal rows are still absent.
- There is no Synetica pitch inside the game, and still no network call.

## Sign-off
Skip honesty was the only brand issue, and it is fixed. Ship.
