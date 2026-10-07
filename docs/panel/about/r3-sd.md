# R3 · SD (design) · Verify

SCORE 9/10
SIGN-OFF yes

## My r2 must-fixes
1. **Orphaned unit words: FIXED.** `_index.md` now has `6&nbsp;to&nbsp;9&nbsp;PM`, `42&nbsp;km` and `11&nbsp;km`. The rendered HTML carries U+00A0 in each. In v2-about-1280.png the card reads "Phone in a drawer, / 6 to 9 PM" as one unit. Level 4 still breaks "the last / 11 km", which is correct: the number and unit stay together.
2. **Portrait shadow crowding the card border: FIXED.** `main.css` line 673 sets a 6px offset scoped to `.player .about-portrait img`. The 1280 shot shows clear air between the shadow and the 2px rule. The 10px shadow is untouched on other pages.

## Spot checks
- Hierarchy, spine and rings, the single filled red node with "You are here", and the card and bonus box sharing one 2px ink border all hold at 1280.
- Dark mode (v2-about-dark-bonus.jpg) holds: the stamp, the card and the footer all read, with no stray colours.
- Other lanes' fixes are visible and correct: "The full story" link text, `og:type` is `profile`, and the pause menu is spaced.

## BLOCKERS
None.

## Not blocking
- The bonus slug still wraps to two lines on desktop. The PLAN fixed that copy, so leave it.
- The H1 leaves "today." alone on the last line. This was there before and is the heading's character.
