# R4 - SD: verification of PLAN.md v2

## 1. R3 must-fixes

1. **Hover must not reflow: FIXED.** "*Hover/focus = preview:* ... Zero layout change, so targets never move under the pointer", and the open slot is "`grid-template-rows: 0fr→1fr` ... (`contain: layout` on the row below)".
2. **Stamp persistence: FIXED.** "*Click, tap, roller, S or N = commit:* the stamp stays for the session (no storage), and Esc lifts committed stamps." "*Starred stamps* are static, always present, and the only red marks at rest."
3. **Dim state legible: FIXED.** "Unstarred rows switch to `--ink-soft` (≥ 4.5:1 in both themes, never opacity on text) while titles stay full ink."
4. **Year rail placement: FIXED.** "fixed in the right margin on desktop; a horizontal strip under the h1 on mobile, with 44px targets", with "Nothing sticky" in the header and bars capped at "2019 at most 28px, 2023 a visible 2px zero".
5. **Dark-mode tokens: FIXED.** "stamp red `#E8664F` on warm black (verify ≥ 4.5:1); the cover mat stays paper-tone `#EFE8DA` with a 1px keyline", and "no modifier" on R/S/N with `kbd` hints.

My roller idea was adopted as (b), with the 3-row mid-motion cap and the 56px touch strip.

## 2. New problems from the wow ideas

**No blockers.** Two build notes, neither plan-breaking:
- **Margin traffic.** The left margin now carries the year numeral, the `14 / 27` roller counter and the starred red rule. The right margin carries the rail. Build must put the rule in the gutter between numeral and rows, and the counter beside the numeral, so they never overlap. Check at 1024px.
- **Strike-again overflow.** Five impressions at ±3px offset can spill out of the reserved stamp slot. Let them overflow visually (`overflow: visible`, transform only) and never size the slot from them, so the date column stays fixed. The star piles need the same rule.

The tally stamp, "Stamp one for me" scroll-to-centre and the ink-runs-out ramp (floor .7, ≥3:1) all stay on transform and opacity, so they don't touch the layout.

## 3. Verdict

SCORE 9 / WOW 8 / SIGN-OFF yes
