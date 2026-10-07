# R4 · PM verify of PLAN.md v2

**SCORE 9 / WOW 8.5 / SIGN-OFF yes**

## 1. R3 must-fixes

1. **Newsletter and Synetica route: FIXED.** "Foot of page (PM): one email field, labelled 'New books land in the letter first.' one mono line, 'I build products at Synetica', linking to the existing route. No modal, no sticky bar, no tracking." (§4)
2. **"What should I read?" answer: FIXED.** "g | Stamp one for me | header button or `N` | Picks a random **starred** row (never the last one shown)... Label: 'from my starred list', never 'recommended'." (§3g)
3. **Star pile contradiction: FIXED, by a different route.** "*Starred stamps* are static, always present, and the only red marks at rest." plus "One per ★, offset ±3px and ±2°... One `aria-label` per pile." The hover-drop pile is gone, so the two claims no longer conflict. The five-stamp moment now lives in Strike again (§3e).
4. **Shortcut guards: FIXED.** "`R`, `S`, `N` and Esc fire only with no modifier and no focused input (Cmd+R still reloads)... always secondary to a visible button." (§5) Hint line with `<kbd>` is in §3.
   - **80ms dwell: NOT FIXED, and no longer needed.** Hover is now a zero-layout preview that lifts on leave (§2), and only commits persist. Sweeping the mouse sprays nothing permanent. Accepted.

## 2. New problems from the adopted wow ideas

**None. No blocker.**
- Roller, Stamp the year and Show starred are all visitor-caused and share one grammar.
- Hash arrival (`#slug`) renders stamped with no animation, so the shared "one for me" link works for a cold visitor.
- Foot of page is untouched by the verbs. The newsletter field is covered by the no-focused-input guard, so typing "r" or "n" in the email field is safe.
- Minor, not blocking: the hint line has five items, and the header has two buttons plus a hint plus a dek. Watch that it stays light at 390px; if it wraps past two lines, cut the hint to three items.
- "ENOUGH." stays off until Ganis approves it. Correct default.

## 3. Verdict

The four jobs are all served:
- **Entertain / feel like Ganis:** the stamp, plus the margin rule with the `24 / 104` tally.
- **Second read:** "Stamp one for me" and the starred filter.
- **Newsletter:** one field at the foot.
- **Quiet Synetica route:** one mono line.

**SCORE 9 / WOW 8.5 / SIGN-OFF yes**
