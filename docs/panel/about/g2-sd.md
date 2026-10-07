# G2 · SD (design): review

**SCORE 7.5/10 · SIGN-OFF: no (two small CSS fixes, then yes)**

## What works
- **Rest state is untouched.** g-rest-1280 is today's page plus one Press start row that sits in the old 28px gap. No shift.
- **Pawn, route and dot read as one object.** The 16px red disc with a paper ring and a 1px ink misregistration sits on the spine and covers the hollow dot. The red route inks over the ink spine, so played track is red and unplayed track stays ink. This is the printed gesture the pitch asked for.
- **The HUD is quiet.** It is a hairline-bordered mono strip, sticky inside the column, with 44px targets. At Prove, `Continue?` and the "That's as far as the map goes." note read well, and Play again sits under the email.
- **Dark mode uses tokens only.** `--stamp` switches to `#ff7a5c` with `mix-blend-mode: normal`, and the 375 dark shot holds contrast. The word-set is mid-fade there but the copy stays AA once set.
- **Copy never dims.** Only dot, label and stamp change.

## MUST-FIX

1. **Stamps are detached from their levels (desktop).**
   - File: `assets/css/main.css`, `.levels__stamp`.
   - Defect: `right: 0` pins CLEARED to the far edge of the 640px column, about 200px past the end of a 52ch text block (g-desktop-level4 and level9). It floats in the gutter and does not read as stamped on that level. The brief wanted it beside the label row.
   - Change: replace `right: 0` with `right: max(0px, calc(100% - 31rem))`. This keeps the stamp at the text measure on desktop and at the edge on phones.
   - Apply the same `right` to `.levels__stamp--un`.

2. **UNINSTALLED can overlap the Prove text at 375.**
   - File: `assets/css/main.css`, `.levels__stamp--un`.
   - Defect: `bottom: 30px` puts the stamp over the second-to-last text line. At 375 the text wraps to 3 or 4 lines, and the full-width `right: 0` stamp lands on "Mobile Legends." In the desktop shot it sits mid-paragraph, away from the struck words.
   - Change: use `top: auto; bottom: -16px`. The stamp then lands in the empty space above `.continue` (margin-top 44px) and never over copy.
   - I did not render this at 375. It follows from the CSS and the wrapped line count, so please check it in a 375 shot after the change.

## Nice-to-haves (not blocking)
- **HUD height jump at level 9.** The note row appears and the bar grows about 22px. Keep the row in flow with `visibility: hidden` instead of `[hidden]`, or reserve `min-height` on `.hud`, so Next does not shift when arriving at Prove.
- **Cleared dots stay hollow.** The pitch had them fill red. Add `is-cleared` to levels below `at` and use `.levels li.is-cleared::before { background: var(--red); }`. This makes the route read as punched through.
- **Pawn ink shadow.** In dark mode `1px 1px 0 3px var(--ink)` is a pale edge. It is fine, but a 2px ink offset would read more clearly as misregistration.
- **Stamp at 320px.** Longest label plus stamp is about 300px. It is tight, so check it at 320.
