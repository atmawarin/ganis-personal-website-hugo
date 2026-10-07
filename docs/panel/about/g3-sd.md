# G3 · SD (design): verify

**SCORE 9/10 · SIGN-OFF: yes**

## My g2 must-fixes
1. **Stamps detached from levels (desktop): FIXED.** `.levels__stamp` now uses `right: max(0px, calc(100% - 31rem))`. g-desktop-level4 shows CLEARED sitting at the text measure beside each label row. At 375 it still hugs the column edge (g3-375 shot).
2. **UNINSTALLED overlapping Prove text at 375: SUPERSEDED.** The stamp is now `UNINSTALLING`, `position: static`, inline after the struck words, so it cannot collide with the sticky HUD or the copy. In g3-375-prove-mlbb it wraps to its own line directly under "Mobile Legends." with no overlap. That is better than my `bottom: -16px`, which PM correctly found hit the HUD.

## Checks
- **Rest state:** curl of /about/ shows pawn, HUD and all 8 stamps carry `hidden` and `aria-hidden`. Nothing renders before Start. No shift.
- **Dark and reduced motion:** unchanged and token-only.
- **Strike and stamp** read as one printed gesture at 375.

## BLOCKERS
None.

## Nice-to-haves (unchanged, not blocking)
- Cleared dots still hollow (red fill would read as punched through).
- HUD grows about 22px at Prove when the note row appears.
- Check the stamp at 320px. The inline UNINSTALLING stamp will wrap there, which is acceptable.

Ship it.
