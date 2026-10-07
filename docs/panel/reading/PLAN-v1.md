# /reading/ plan: PM synthesis after loop 2 (binding)

## Loop 2 tally
Points: 3 for a seat's first pick, 2 for second, 1 for third.

| # | Option | Points | Avg wow | First picks |
|---|---|---|---|---|
| 2 | Date Due | **9** | 7.1 | SD, BB |
| 9 | Rubricator's Pass | **9** | 6.9 | V |
| 1 | Pull from the Shelf | 8 | 7.6 | PM, SEO |
| 5 | Tipped-in Plate | 6 | 6.3 | TY |
| 6 | The Reading Year | 6 | 7.3 | IxD |
| 4 | The Ledger | 2 | 5.1 | — |
| 8 | Open at Random | 2 | 6.0 | — |
| 3 | Card Catalogue | 0 | 5.9 | — |
| 7 | Specimen Shelf | 0 | 7.3 | — |
| 10 | Leaning Shelf | 0 | **8.9** | — |

Option 9 appears in **five of seven** ship combinations, and Option 2 in four. Option 10 scored the highest wow and the lowest fit, and all seven seats reduced it to one detail.

## Rulings on the contested items (unanimous by the end of loop 2)
- **No motion on scroll or arrival.** PM and BB withdrew their arrival stamp and ink-in. Every movement is caused by the visitor: hover, focus, tap, a key, or a button.
- **Covers are summoned, but present in the DOM from first paint** (SEO): a real `<img>` with width, height and alt, the first ~12 eager. With no JS, a small static thumb shows on each row.
- **The category chips are removed.** A single "read again" toggle replaces them. No genre taxonomy anywhere, and nothing ordered by count. If subjects come back later, they go in an alphabetical index at the foot of the page.

## Ruling on the spine camp (PM, SEO, IxD vs. SD, TY, V)
Spines with cover colours break the one-red palette (SD), and 104 rotated titles are the least legible list possible (TY, V). **The spines stay on the home page,** where they already live and where twelve of them read well. **New bridge:** each home spine links to `/reading/#<slug>`, and arriving on that hash opens that book's row already stamped. The spine camp keeps its gesture, and the shelf page stays legible.

## The design: "Date Due"
**One grammar: red ink on a library card.** Every motion on the page is a stamp, and the stamp is the page's one signature mechanism.

1. **Skeleton (from The Ledger).**
   - The page reads as one lending card per year, set on the `--edge` grid.
   - A huge Fraunces year sits in the margin, with a ruled row per book: display title (before the colon), author in small caps, and a mono date column.
   - 2023 is an empty card printed **"No entries."**
   - Both edges align (fixes defect 3).
2. **Touch a row, and it gets stamped.**
   - Hover, focus or tap stamps the row: a red date stamp scales from 1.2 to 1 with a seeded ±2° tilt, in 120ms, with a hard ease-out and no bounce.
   - The stamp shows **year only** (e.g. `READ · 2019`) until Ganis confirms real dates. The data shows 7 books on `2019-01-01` and 7 on `2025-01-18` from a batch import, and most other days are the 11th or 15th.
   - At the same time, the **cover slides out of the card's pocket** beside the row (translateX, 220ms, no reflow), sitting on a paper mat with a 1px keyline.
   - Below the row, Ganis's line is labelled by provenance: quote, *my note*, or *about the book*.
   - On touch, the first tap stamps and opens the row inline; a second tap closes it.
3. **Starred books carry AGAIN stamps,** one per ★, always visible as static marks. *The Elements of Typographic Style* has five of them overlapping. Their wording depends on Ganis confirming what ★ means.
4. **"Show what I read again"** (the Rubricator, option 9, restyled as a stamp pass) is a 44px button that also answers to the `R` key.
   - Pressing it draws a red rule down the margin.
   - The 24 starred rows get their red underline as the rule reaches them, and the other 80 dim to 45%.
   - The pass is capped at 450ms: at most 12 rows animate, and the rest set instantly.
   - Pressing it again lifts the pass.
   - This replaces the chips.
5. **"Stamp the year"**: an `S` key, plus a small mono link on each year card. It stamps that card's rows top to bottom in a 30ms-stagger drumroll, capped at 12 animated, with the rest set instantly. It is caused by the visitor, so it fits the rule.
6. **Year rail (from option 6, static).** Ten year links sized by count (2019 tall, 2023 a visible zero), as plain `#y2019` anchors. No drag and no animation.
7. **Nothing from option 10.** Its only surviving form (neighbours leaning into a gap) needs spines, and on a card it would move click targets (IxD) with no print metaphor behind it. That is a deliberate choice, recorded here.

## The send-to-a-friend moment
- Hover *The Elements of Typographic Style* and watch five AGAIN stamps pile up.
- Or press "Show what I read again" and watch the red rule pick out 24 books from 104, with 2023's empty card in the middle saying "No entries."

## What Ganis must supply (the design ships without these, with safe defaults)
| Item | Default until supplied |
|---|---|
| Which dates are real (day/month) | The stamp shows the year only |
| What ★ means (read again? kept coming back?) | The stamp reads ★ instead of AGAIN; the toggle reads "Show the starred ones" |
| Quote / my note / blurb flag per description | Lines in quote marks are labelled quotes; everything else is unlabelled |
| A line for 2023 (optional) | "No entries." |

## Base requirements (all seats)
- All books in server HTML. One h1. `ItemList` + `Book` JSON-LD with stars stripped from names and no read-date in `datePublished`.
- Transform and opacity only, ≤ 450ms, interruptible; reduced motion swaps state instantly.
- Roving tabindex only after `.is-enhanced`; Esc closes; focus returns to the row.
- Dark mode: re-tune the stamp red for warm black.
- Data fixes first: *Why We Die* cover, `sapiens` duplicate, count from `len`, ⭐️ parsed into a count, sentence-boundary truncation, `lang="id"` on Bahasa lines.
