# R3 · IxD: verdict on PLAN.md "Date Due"

## 1. Score
**SCORE 8 / 10. WOW 8 / 10. SIGN-OFF: no** (yes once the 4 fixes below land; none needs a redesign).

The plan is coherent and honours my blockers: input-only motion, one grammar, transform/opacity only, caps on stagger. The wow is real but quiet. It lives in two moments (five overlapping AGAIN stamps; the red rule picking 24 from 104). Honestly that is an 8, not a 9, until the stamp is something you can play with (see idea).

## 2. Must-fix
1. **Hover vs. layout (target moving under the pointer).** Section 2 says hover/focus/tap stamps, opens the row inline and shows Ganis's line. Ambiguous on hover. Change to: "**Hover and focus preview only**: stamp (120ms) and cover (220ms), both transform/opacity, zero layout change; the stamp lifts on pointerleave (100ms). **Click, Enter or tap commits**: row stays stamped and the note opens inline. Rows below never move on hover."
2. **Single-letter keys (`R`, `S`) violate WCAG 2.1.4.** Add: "R and S fire only with no modifier, no focused input, and are always secondary to visible buttons (`aria-keyshortcuts` set). S gets a visible button, not just a small link per card. Esc also lifts any pass."
3. **Hash arrival must be instant.** Section on spine bridge: add "On `#slug` arrival the row is rendered stamped and open **with no animation** (state, not motion), scrolled with `scroll-margin-top` clear of the sticky header, and focus moved to the row."
4. **Which 12 animate.** "Capped at 12" is undefined. Specify: "the first 12 rows **intersecting the viewport**, top to bottom; all others set instantly. No `will-change` except on the stamp being animated; remove on `transitionend`."
5. **Touch two-state clarity.** "First tap stamps, second closes" conflicts if the row title is also a link. Specify: "title text is the toggle (44px row height min); the outbound/book link lives inside the open panel only."

## 3. Idea: "Double-strike" (raises WOW, no binding ruling broken)
- **Trigger:** the visitor presses an already-stamped row again (click/tap/Enter on the row's stamp area, or a second Enter).
- **Motion:** a second impression lands offset (about 3px, new seeded tilt, 1.15 to 1, 90ms hard ease-out), up to 5 per row, which is exactly how *Elements of Typographic Style* looks at rest. Each strike gets a slightly lighter red so the pile reads as ink, not clones. Android gets `navigator.vibrate(8)` where supported.
- **Why it works:** it turns the stamp from a reveal into a toy. Tapping it five times and watching it match the starred book is the "send this to a friend" beat. It is visitor-caused, one grammar, transform/opacity only.
- **Limits:** session-only, no storage. Esc or leaving the row clears extra strikes (starred rows return to their data count). Max 5 so the DOM cost is trivial.
- **Fallback:** reduced motion places the strike instantly; no-JS shows only the static starred stamps.

## 4. Fair to my r2 position?
Yes. Dropping scroll triggers, keeping the rail static, and rejecting Option 10's moving targets all match what I argued; losing the drag scrubber (my first pick) is a reasonable cost of the consensus, and I accept it.

SCORE 8 / WOW 8 / SIGN-OFF no
