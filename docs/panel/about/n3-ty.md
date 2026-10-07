# n3-ty: TY verify, Hmm., loop 3

**SCORE 8.5/10 | SIGN-OFF: yes**

## My n2 must-fixes (code checked)
1. Curly apostrophes in prompts: **FIXED** (about-game.js lines 56, 182, 202, plus 298/299).
2. Card kicker date break: **FIXED**. Kicker is `kind · <span.hm-when>` with `.hm-when { white-space: nowrap }`; "Thought N of 8" dropped.
3. Bahasa kicker lang: **FIXED**. Set in `next()` (line 509, removed when absent) and in `finish()` (line 600).
4. GARNISUN mid-word split: **FIXED**. `.hm-letters` is nowrap, `.hm-letter` is flex 1 1 0, min-width 0, max-width 52px.
5. Typewriter unanswerable by screen reader: **FIXED**. Buttons carry `aria-label="Serif|Sans serif|Monospace: ..."` with the Bahasa text in a `lang="id"` span.

## BLOCKERs
None.

## Left open (should-fix and nice-to-have, none blocking)
- `.hm-mini` is still 0.66rem (about 10.5px), under the 11px floor. Set 0.72rem.
- `.hm-mini` in `end()` has no `lang="en"`, so "Filed" is read as Bahasa inside `lang="id"` items.
- `.hm-alarm` rest border is still `var(--rule)`; use `var(--muted)`.
- `.hm-note` is still 0.78rem muted.
- End kicker still reads "Mostly: friction. · Met n of 12" (stray full stop).

## Not checked
Did not re-run the plays. I rely on the PM's headless report and the mind3 screens, which I only listed. Muted-on-paper contrast was not measured.

## Next step
Ship. Fold the 0.72rem and `lang="en"` fixes into the next CSS touch.
