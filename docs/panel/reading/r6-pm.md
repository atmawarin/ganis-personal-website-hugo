# R6 · PM verify

Note: r5-pm.md is not on disk; I checked against r4-pm and the loop-5 list as relayed.

## Loop-5 must-fixes
1. No-JS dead controls: **FIXED.** `[hidden]{display:none!important}` at main.css:496. Hint, tools and subjects ship `hidden` and JS reveals them.
2. Keyframe collision: **FIXED.** `shelf-stamp` is used by both the tally and `.stamp`.
3. Focus preview: **FIXED.** `focusin` only previews on `:focus-visible`, and `open(row,false)` clears `is-preview`.
4. Year rail vs subject filter: **FIXED.** `aria-disabled` and `tabindex=-1` are set and cleared; dimmed, pointer-events none.
5. Copy and tally: **FIXED.** "Stamp me a favourite", the "a favourite for me" hint, a visible "Subjects" slug, and the tally with SR text "24 of 104 books are favourites".
6. Mono under 11px: **FIXED** on the sites I checked (`drag ↓` is 0.6875rem).
7. TY size-adjust fallback and smcp: **ACCEPTED-DEFERRAL.** The font stacks are site-wide, so this is a follow-up.

## Blockers
None.

The four jobs are still served: entertain, second read ("Stamp me a favourite"), newsletter, quiet Synetica route. The no-JS page is now honest.

**SCORE 9 / WOW 8.5 / SIGN-OFF yes**
