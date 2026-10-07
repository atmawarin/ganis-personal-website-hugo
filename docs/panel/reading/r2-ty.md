# R2 · TY (Typography): /reading/ debate

**Stance:** Wow is allowed to be quiet if it is *precise*. A bibliography that behaves like a printed book being handled beats ten clever gadgets. But I have to judge both ways: a well-kerned list nobody screenshots fails Ganis's brief.

## 1. Scores

| # | Option | Wow | Fit | Craft risk | My lane | Reason |
|---|---|---|---|---|---|---|
| 1 | Pull from the Shelf | 7 | 6 | med | 5 | Satisfying, but rotated spine text is the weakest typography on the page and mobile suffers. |
| 2 | Date Due | 7 | 7 | low | 6 | Stamp "thunk" is tactile and cheap; mono dates are good, hover-only stamping is thin on touch. |
| 3 | Card Catalogue | 5 | 6 | med | 5 | Charming `<details>` base, but drawers are skeuomorphic furniture, not specimen. |
| 4 | The Ledger | 5 | 9 | low | 8 | Gorgeous grid and "Nil.", but the cover-slip is the only motion; restrained to the edge of dull. |
| 5 | Tipped-in Plate | 7 | 10 | low-med | 10 | The Specimen Book's thesis made literal: a bibliography, plates summoned. Tissue peel is a real detail. |
| 6 | The Reading Year | 7 | 7 | med | 5 | Best data story (2019 tower, 2023 zero); numeral roll is mine to set well. Two mechanisms (rail + fan). |
| 7 | Specimen Shelf | 8 | 8 | high | 7 | Most on-identity idea; also the heaviest: faces, FLIP, cross-fades, and Ganis must map categories. |
| 8 | Open at Random | 6 | 8 | low | 8 | One big italic quote is the best typography on offer; but it hides the 104 behind a toy. |
| 9 | Rubricator's Pass | 6 | 9 | low | 7 | Red pen is Gutenberg's own rubrication; meaningful and cheap. Too small to carry the page alone. |
| 10 | Leaning Shelf | 8 | 3 | high | 2 | Memorable for 8 seconds; physics on rotated spines, zero typography. |

## 2. Top 3
1. **Option 5, Tipped-in Plate.** The only option that is the site's identity, not a skin on it. 104 lines in ~4 screens makes the whole reading life visible at once, which is itself wow.
2. **Option 9, Rubricator's Pass.** The one distinction Ganis curates, drawn as a red pen. Meaning-bearing motion.
3. **Option 2, Date Due.** Best low-risk "thunk" if the panel wants the stamp instead of the plate.

## 3. The combination I'd ship
**Primary: Option 5. Supporting layer: Option 9's red pen** (button, not scroll).

**First 10 seconds:** h1 "The shelf", a two-sentence dek, then the year heads as running heads ("2019, 27 books"). Authors in small caps, titles in italic Fraunces, tabular lining years on dot leaders, red ★ in the margin. No covers, no motion. The visitor moves the cursor down a row and a **plate tips in**: cover slides 6px from the gutter with a 2° wobble while tissue peels off the top (420ms, the home name-setter's easing). Move to the next row: old plate peels, new one tips in. It feels like handling a book, not a UI.

**Send-to-a-friend moment:** press "Show what I read again." A red pen line draws down the margin (700ms), underlining 24 starred rows as the other 80 dim to 45%. Then hover a starred row: the plate tips in. Ganis's whole taste filtered by a single stroke.
Touch: tap row toggles plate inline; button is 44px. No-JS: `<details>` rows, ★ static.

## 4. Rulings I vote for
- **Scroll-triggered arrival motion: NO.** One exception family: motion caused by the visitor's input, including the pen button. A page whose resting state is still, then answers your hand, is the stronger signature.
- **Covers: summoned**, not visible. Plates are the idea. Hidden is not hiding: all text is in HTML, covers are in the DOM.
- **Categories: remove the chips.** Starred toggle replaces them. If subjects are wanted, a back-of-book **alphabetical** "Index of subjects" as anchor links at the foot. Not headings (years already own that role), never ordered by count.

## 5. Debate
- **To PM (stamp on arrival, IntersectionObserver):** disagree. You cap at 12 stamps and render the rest instantly, so on a 27-book year the page visibly does two things. Arrival motion is the thing a visitor sees *once*, then it is wallpaper; a plate I summon works every time.
- **To IxD (Pull from the Shelf, spines as primary):** disagree. Spine height is uniform and text is rotated, so 104 titles become the least legible list possible, and the home vocabulary doesn't justify it. Spines are good for 12 books, not 104.
- **To BB (keep ink-in once):** closer than PM, but I still vote no. A once-only ink-in on year entry needs an IntersectionObserver per year and a double-state for reduced motion, for a moment half the visitors scroll past.
- **Concede to V:** provenance matters, and I was wrong to set every line the same. Quotes get curly quotes and Newsreader italic; Ganis's notes get a mono "my note" label; blurbs set plain. And year at the dot leader must show **year only** wherever the day is a placeholder (`01-01`), or the typography lies precisely.
- **Concede to IxD:** my cursor-proximity weight fisheye (Option 7 variant) animates `wght`, which changes advance widths and reflows. That breaks the transform/opacity rule. Drop it.

## 6. Option 10, Leaning Shelf
**Gimmick, honestly.** It delivers the strongest 8-second reaction on the list, but there is no typography in it, it contradicts the site's printed-object identity (a shelf with gravity is a toy; a bibliography is a document), and 104 rotated spines are unreadable. Acceptable only if: (a) it is *not* the page, only a contained 12-book strip at the top, (b) the full bibliography sits below it, (c) titles on spines are real selectable text with proper `aria-label`s, (d) still row with reduced motion, and (e) Ganis agrees it is a one-time toy. Even then I rank it below 5 + 9.

## 7. Blockers (hard no from my lane)
- Loading 5-25 designer faces for titles on first paint (Option 7). If shipped: display-subset glyphs only, after first paint, Fraunces fallback with `size-adjust`.
- Claiming a title is "set in" a face; wording must be "in the manner of".
- Unreadable rotated spine text as the *only* title carrier (1, 10).
- Animating `font-variation-settings`/`wght` on 104 rows.
- Mid-word truncation, ⭐️ emoji in titles, faux small caps, ALL-CAPS titles.
- Showing a placeholder date as a real day.
