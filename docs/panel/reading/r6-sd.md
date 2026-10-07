# R6 - SD verify

**SCORE 9 / 10 - WOW 8 / 10 - SIGN-OFF yes**

## Loop-5 must-fixes
- **Re-shoot 390px top, check clipping: FIXED.** PM re-checked live, no clipping. The no-JS dead controls are now hidden by the `[hidden]{display:none!important}` rule, which also removes the width risk from the tools row.

## Also verified in code
- `shelf-stamp` keyframes renamed, no collision with `.ttol`.
- Preview only on `:focus-visible`; `open(row,false)` clears `is-preview`.
- Rail links get `aria-disabled` and `tabindex=-1` under a subject filter, and clear on All.
- Mono text is now at least 0.6875rem (11px).
- Tally shows "★ 24 / 104" with SR text "24 of 104 books are favourites".
- Untucked covers without JS cause no CLS.

## Nice-to-haves (not blocking, still open)
- `.fav + .fav` overlap at 5 stars on mobile (-9px margin).
- Stamp hangs 4px left of the gutter on mobile.
- Empty 2023 card rule.

## Accepted deferrals
- size-adjust fallback @font-face: site-wide, outside this page. ACCEPTED.
- smcp: uppercase .8em + tracking + `font-synthesis:none` fallback. ACCEPTED.

## Blockers
None.
