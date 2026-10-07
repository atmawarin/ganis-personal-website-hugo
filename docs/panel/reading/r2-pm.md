# R2 · PM: /reading/ "The shelf"

## 1. Scores

| # | Option | Wow | Fit | Craft risk | My lane | Reason |
|---|---|---|---|---|---|---|
| 1 | Pull from the Shelf | 8 | 8 | med | 9 | Physical, instantly legible, extends the home spine language; 104 spines show range at a glance. |
| 2 | Date Due | 7 | 8 | low | 7 | The stamp thunk is the most forwardable moment, but rows are text and it hinges on real dates. |
| 3 | Card Catalogue | 6 | 7 | med | 6 | Charming, SEO-safe via `<details>`, but a second metaphor next to the spines home already has. |
| 4 | Ledger | 5 | 8 | low | 5 | Beautiful and honest ("Nil."), but quiet. Safe-and-tasteful, which Ganis said fails. |
| 5 | Tipped-in Plate | 5 | 9 | med | 4 | Best typography, lowest wow. Hover-summoned covers add friction to finding a book. |
| 6 | Reading Year | 7 | 7 | med | 7 | The 2019 spike and 2023 gap are real taste signals; scrubbing is lovely but it is navigation, not an idea. |
| 7 | Specimen Shelf | 7 | 9 | high | 4 | Most on-brand idea, but needs a mapping from Ganis, 5 fonts, and it is a type nerd's joke. |
| 8 | Open at Random | 7 | 7 | low | 9 | Answers "what should I read?" in one second; needs the quote/note flag. |
| 9 | Rubricator's Pass | 6 | 9 | low | 7 | One red line, 24 books: the best taste filter on the page. A layer, not a page. |
| 10 | Leaning Shelf | 9 | 4 | high | 3 | Highest wow, lowest fit: physics reads as a demo, and a loud 104-spine shelf shouts "agency". |

## 2. Top 3
1. **Option 1.** It is the only one where the browsing itself is the delight, and the spines carry all 104 books on screen at once.
2. **Option 8.** It wins the job nothing else does: the visitor leaves with one book.
3. **Option 9.** It makes taste legible (24 re-reads) with a single, cheap, red gesture.

## 3. What I'd ship
**Primary: Option 1 (Pull from the Shelf). Supporting layer: Option 8's "Pull one for me" button, plus Option 2's stamp date as the card footer.**

**First 10 seconds.** The page opens on the h1 and a dek, then a shelf of year rows with coloured spines (2023 an honest empty shelf marked "Nil."). Under the dek sits one button: **"Pull one for me."** Press it and a random starred spine slides out, tilts, and flips to a card: cover, one line, a red stamped date, ★★. Press again, the book slides back and another comes out. No scroll is needed to feel it.

**The send-to-a-friend moment.** The visitor presses it three times, lands on a book they have never heard of, and screenshots the card. The card is a share-worthy object: cover, Ganis's line, stamp. Below the shelf: one newsletter field ("new books land in the letter first") and a single quiet line about Synetica. Nothing is gated and nothing is tracked.

Starred-only pulls: the random button draws from the 24 re-reads, so every pull is a recommendation, never filler.

## 4. Rulings
- **Scroll-triggered arrival motion: NO.** Nothing fires on load or scroll. The only one-shot allowed is what the visitor causes (the first pull). This reverses my r1.
- **Covers: summoned, spines visible.** Spines show every book (title text in HTML, colour from the cover); the cover appears on pull. Nothing is hidden, because the spine is the book.
- **Categories: remove chips, add one starred toggle** ("read again", Option 9's red pen). The toggle dims the other 80. No genre taxonomy.

## 5. Debate
- **vs BB** (random or chronological order, never foreground genre): I agree genre must not lead, but "business-neutral first screen" cannot be done by curation of the fold alone. A spine shelf is chronological, so the fold is whatever 2016-2017 holds. The random button fixes this: the first pull is always a starred book, so range shows up by design. I also disagree that stamps/ink-in must be avoided as "selling something". A stamp date on a card is tactile, not salesy.
- **vs SD** (the Ledger as base page, Specimen Wall later): the Ledger is correct and forgettable. Ganis asked for wow. A page whose best moment is a cover sliding out of a margin loses to a spine you pull. I'd keep the Ledger's "Nil." and hairline rigor, but not as the idea.
- **vs TY** (Tipped-in Plate as lead): hover-summoned plates hide the cover until you chase it, and the bibliography is a nice reference, not a reason to stay. As a no-JS fallback it is excellent; take the small caps and hanging indents there.
- **Concession.** **IxD and SEO changed my mind** on arrival motion. IxD's point that every animation must be interruptible and input-driven, plus SEO's LCP/INP argument, outweighs my "stamp on arrival" idea. A stamp on touch is a better thunk than one that fires unprompted.
- **Also conceding to V:** the starred toggle replaces the chips, and I accept V's honesty rule: year-only where the day is a placeholder, so the stamp shows only real dates.

## 6. Option 10, Leaning Shelf
**Honest verdict: half the wow Ganis asked for, half a gimmick.** Physics is the one thing here a visitor has never seen on a personal site, and it is unquestionably memorable for 8 seconds. But 104 leaning spines is a demo of the engineer, not the reader. It hides range, reads as agency portfolio, and 3 KB of physics is 3 KB of bugs on a mid-range Android. **Acceptable if:** (a) only the pulled spine's two immediate neighbours lean, one spring, ≤450ms, no fling/sway; (b) starred books lean less, so weight encodes something real; (c) no JS means a still row. That is Option 1 with one extra detail, which is where I'd borrow it: **neighbours lean slightly into the gap on pull.** One third-option detail, no new mechanism.

## 7. Blockers (hard no)
- Any option hiding the book list behind interaction (no-JS and crawlers must see all 104).
- Options 7 and 4 shipping without Ganis's mapping/date data; I won't fake it.
- Option 10 as written (full-shelf physics, fling/sway).
- Invented notes, ratings, or "why" lines. Newsletter modal, popup, or tracking.
- A random button that draws unstarred filler or looks like a recommendation engine ("AI picks").

**Next step:** Ganis supplies which dates are real and which descriptions are quote vs note; everything else is shippable now.
