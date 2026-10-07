# R2 — SD (senior designer, print/editorial) — /reading/ debate

## 1. Scores

| # | Option | Wow | Fit | Craft risk | Lane | Reason |
|---|---|---|---|---|---|---|
| 1 | Pull from the Shelf | 8 | 5 | med | 6 | Spines coloured from covers = a colour wall; breaks "paper, ink, one red". Good gesture, wrong object. |
| 2 | Date Due | 8 | 9 | low | 8 | Stamp is a physical, printed gesture; star = AGAIN stamp is real data used as delight. |
| 3 | Card Catalogue | 6 | 6 | med | 5 | Drawer chrome drifts to skeuomorphic woodgrain; `<details>` base is good. |
| 4 | The Ledger | 6 | 9 | low | 10 | Best structure (year margin, ruled rows, "Nil."). Wow lives only in the cover slip. |
| 5 | Tipped-in Plate | 7 | 9 | med | 9 | Bringhurst bibliography is the most Specimen-Book thing here; tissue peel is a fussy 420ms. |
| 6 | The Reading Year | 7 | 8 | med | 8 | Honest histogram, 2023 gap; drag-scrub is two ideas (rail and fan). |
| 7 | Specimen Shelf | 8 | 9 | high | 8 | Most on-brand idea. FLIP plus font cross-fades plus 5 faces is the riskiest build. |
| 8 | Open at Random | 6 | 7 | low | 6 | Strong first screen, but it is a feature, not a page. |
| 9 | Rubricator's Pass | 7 | 8 | low | 7 | Red pen line is a lovely single stroke; 700ms breaks the cap unless input-driven. |
| 10 | Leaning Shelf | 9 | 4 | high | 3 | Memorable, but physics is not print. See section 6. |

## 2. Top 3
1. **Option 2, Date Due.** A stamp is the one gesture that is both printed-object and instantly legible. Cheap, CSS-first, and it uses the 33 real stars.
2. **Option 4, The Ledger.** Not for the motion, for the skeleton. Without its year margin and ruled rows, nothing else sits right.
3. **Option 5, Tipped-in Plate.** Gives covers a dignified, summoned role.

## 3. What I'd ship
**Primary: Date Due, laid out as a ledger** (huge Fraunces year in the margin on the `--edge` rule, one ruled row per book, 2023 printed "Nil."). **Supporting layer: the cover tipped in beside the row** (slides from the card pocket, no tissue peel).

**First 10 seconds:** paper, a quiet h1, 2025 in the margin, rows as clean typography. You move down the list and each row takes a red date stamp with a small thunk (scale 1.2 to 1, ±2°, 120ms), starred books take a second stamp reading AGAIN. Covers slip out beside the row you're on. Nothing moved until you did.

**The send-it-to-a-friend moment:** press **S** (or tap "Stamp the year") on 2019. Twenty-seven rows are stamped top to bottom in under a second, like a drumroll, and the starred ones double-hit. Scroll up to 2023 and it says "Nil." That contrast is the screenshot. It is input-caused, so it fits the rule.

## 4. Votes on contested items
- **Scroll-triggered arrival motion: No.** Nothing animates on scroll or load. The only many-at-once moment is the visitor-pressed "Stamp the year".
- **Covers: summoned, not visible.** I move from my r1 (small plates) after TY and BB; see concession. Touch: tap opens inline under the row.
- **Categories: remove the chips.** Keep one plain "Read again (24)" toggle that dims the other 80 (Option 9, minus the 700ms pen). Subject headings would break the year spine.

## 5. Debate
- **PM (stamp on arrival):** I disagree. An IntersectionObserver firing a stamp as rows enter is exactly the scroll-reveal the rule was written against, and on a 104-row page it replays the same gag every few screens. It also removes the cause. A stamp is satisfying because your hand did it. Moving it to hover/tap/S keeps 95% of the delight at zero scroll cost.
- **BB (ink-in once on scroll):** Same objection, plus it makes the page look unfinished for the first 600ms of every year. The gap honesty you want for 2023 works better static: a blank card printed "Nil." needs no animation.
- **IxD (Reading Year playhead as the mechanism):** I'd keep the rail as a year-jump nav only. Drag-scrub and cover fan is a second interaction on top of whatever opens a book; the rule says one.
- **Concession to TY and BB:** covers should be summoned. My r1 wanted uniform small plates, but the mix of white, photographed and low-res covers is the actual reason the page looks cheap. A summoned plate on a paper mat lets me control the moment; a visible one lets the worst cover set the tone.

## 6. Option 10, Leaning Shelf
**Honest verdict: it's the closest to the literal wow, and it's a gimmick as specified.** It demonstrates JS skill, not Ganis. Nothing about gravity says reading, and "fling the shelf, books sway" is a toy loop that fights the printed-object tone. 104 simulated bodies is also an INP risk on a phone.
**Acceptable if:** (a) one spring only, on pull-out: neighbours part and settle once, 450ms cap, no fling or sway; (b) spines are ink/paper/red typographic spines, not cover colours; (c) rows wrap per year, with 2023 an empty shelf; (d) no rAF loop, so CSS transitions only. At that point it is Option 1, which is fine.

## 7. Blockers (hard no)
- Spines or tiles coloured from cover art (breaks one-red palette).
- Any continuous rAF physics loop over 104 elements (Option 10 as written).
- Option 7 shipping more than 5 faces, or unsubsetted fonts; no cross-fading font files, only two stacked layers.
- Option 9's 700ms pen as an automatic animation (input-driven only, ≤450ms).
- Option 3's wood or leather texture.
- Any option animating layout properties, or truncating quotes mid-sentence (Option 8).
- Dark mode: stamp red must be re-tuned for contrast on warm-black, not reused.
