# R4 · IxD: verify PLAN.md v2 "Date Due"

## 1. R3 must-fixes

1. **Hover vs layout: FIXED.** "*Hover/focus = preview:* the stamp and the cover sliver sliding out of the pocket (220ms)... Zero layout change, so targets never move under the pointer." Commit is click/tap/roller/S/N.
2. **Single-letter keys (WCAG 2.1.4): FIXED.** "`R`, `S`, `N` and Esc fire only with no modifier and no focused input... each set via `aria-keyshortcuts`, and each always secondary to a visible button." S has a per-card button (row d).
3. **Hash arrival instant: FIXED.** "the row renders stamped and open **with no animation**, `scroll-margin-top` clears the header, and focus moves to the row."
4. **Which 12 animate: FIXED.** "The first 12 rows *in the viewport* animate; the rest set instantly." `will-change` only while animating, removed on `transitionend`.
5. **Touch two-state / title link: PARTLY FIXED.** The plan has no outbound book links (section 7), so the link conflict is gone. But "tap opens" is still not reconciled with "press a stamped row's stamp zone = strike again" (row e). See the note below.

## 2. New problems from the adopted wow ideas

No blocker. One build note, which is a spec gap and not a redesign:

- **Touch: toggle vs strike.** Spec that the title/row body toggles open and closed (44px minimum height), and that the stamp zone is a separate 44px target that only strikes. Otherwise a second tap meant to close the row hammers a sixth impression and "ENOUGH."
- The roller's 56px strip with `touch-action: none` on the strip only is correct and does not trap scrolling.
- The roller has a keyboard equivalent (S, plus per-card buttons), so it is not a pointer-only feature.
- N's 200ms delayed stamp is input-caused and instant under reduced motion. Fine.
- Ink-runs-out plus strike-again both change alpha, so the floor of .7 (3:1) must apply to strikes too. Same rule, one line.

## 3. Verdict
**SCORE 9 / 10. WOW 9 / 10. SIGN-OFF: yes** (conditional on the touch toggle/strike split above going into the build).

SCORE 9 / WOW 9 / SIGN-OFF yes
