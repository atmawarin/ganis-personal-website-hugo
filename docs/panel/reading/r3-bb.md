# R3 — BB (Brand & business manager)

## 1. Score
**SCORE 8 / 10. WOW 8 / 10. SIGN-OFF: no (conditional: yes once the four edits below land; all are wording-level).**

Taste read is right: library card, red ink, no genre taxonomy, no CTA, no Synetica leakage. WOW is honest 8, not 9: the signature moment is gated behind a hover or tap the visitor does not know to make, and a first screenshot of the page is a quiet list. The page is lovely once played with. It needs to invite the play and give one more beat to play with.

## 2. Must-fix (4)
1. **Placeholder dates must not render as days.** PLAN says "mono date column" but only specifies the stamp as year-only. Change item 1 to: "The mono date column shows **year only** until Ganis confirms real dates (never `01 Jan`, never an ISO string). Same default as the stamp."
2. **Counts and anti-hustle rules are missing from Base requirements.** Add: "Counts (104, 24) are small mono, never styled as achievement; no 'N books this year', goal, or streak. No share buttons, no Goodreads/Amazon/affiliate links, no recently-opened memory. Covers are local files only. No generated notes, reasons or ratings: any line labelled *my note* is Ganis's words, or the label does not appear."
3. **Discoverability of the wow.** Add under the h1 one mono line: "Touch a row. Press R." (hidden without `.is-enhanced`). Without it, a phone or trackpad-less visitor sees a static list and leaves.
4. **First screen must not lead with business.** Add: "Years newest first, rows in read order, no category sort. Before ship, check the first six visible rows on a 390px phone and a 1440 desktop; if four or more are business/leadership, Ganis flags one pinned lead row (his choice, no default)."

## 3. IDEA: "Stamp it again" (raises wow, stays inside every ruling)
- **Trigger:** pointer-down (click or tap) on the AGAIN stamp zone of a starred row. Visitor-caused, no scroll or load motion.
- **Motion:** one extra AGAIN stamp lands at the press point, within the row's margin zone, same grammar: scale 1.2 to 1, seeded ±2° tilt, 120ms hard ease-out. Piles on top of the existing ones, so Bringhurst can be hammered into a red smudge. Cap 8 extra per row, then a final one reads in mono "ENOUGH." Cap keeps title and author uncovered (legible).
- **State:** none persisted, resets on reload (privacy, no memory).
- **Fallback:** no JS or reduced motion: click adds the stamp instantly, no scale. Keyboard: Enter/Space on the focused stamp zone does the same. Screen reader: stamps are `aria-hidden`, the count in text is unchanged.
- Why: it turns a thing to watch into a thing to do, and it is the screenshot people send. Also funny, which is the taste signal.

## 4. Fairness
Yes: Date Due leads, the stamp is a reward for touching, chips gone, no genre counts, year-only dates and the NIL joke (kept as "No entries.") all carried. Rubricator folded in as I proposed. The privacy and hustle blockers from my r2 section 7 were only partly carried, hence must-fixes 1 and 2.
