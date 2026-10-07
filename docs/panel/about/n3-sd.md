# n3-sd: Design seat, mind round, loop 3 (verify)

**SCORE 9/10 · SIGN-OFF: yes**

## My n2 must-fixes
1. **Timer track short on the right: FIXED.** `.hm__time` is now `flex: 0 0 calc(100% + 24px); margin: 0 -12px`. In `mind3/berbeda.png` the track runs edge to edge.
2. **375 top bar wraps to two rows: FIXED.** Label is `Hmm. n/8` (one short string, no matchMedia needed), and the `@media (max-width: 480px)` rule tightens gap, size and button padding. `m-r5.png` shows one row: `HMM. 5/8 / PAUSE / SKIP THIS ONE / QUIT`.
3. **Two button languages in one round: FIXED (different route than I specified).** Both librarian buttons are `play-btn` (mono caps, red border); the secondary is disabled grey until it unlocks (`m-r5.png`). This supersedes my `.hm-btn--go` proposal, and the "red mono caps = commit" rule now holds.

## Should-fix, not applied (non-blocking)
- **Alarm chips before ringing** still use `--rule` border (`main.css` line 737). Still faint. Carry to a later polish pass: border `var(--muted)`.
- Round column still 40rem; fine, calm.

## Berbeda check
`berbeda.png` (desktop): the red oval `?` reads as the odd one, the four cups sit in one row, and the bar reads `HMM. 2/8`. I did not see the 375 two-column collapse; I'm treating that as low risk because the other 375 screens show no overflow.

## BLOCKERs
None.

Verdict: the deck looks like the site, the bar and timer are clean, and the button language is consistent. Ship it.
