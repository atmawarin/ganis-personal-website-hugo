# R2 · IxD: /reading/ "The shelf" (loop 2)

## 1. Scores

| # | Option | Wow | Fit | Craft risk | Lane | Reason |
|---|---|---|---|---|---|---|
| 1 | Pull from the Shelf | 8 | 8 | med | 9 | Physical, interruptible, extends the home spine vocabulary. Needs roving tabindex, bottom sheet, dialog focus. |
| 2 | Date Due | 7 | 8 | low | 8 | The stamp thunk is the best single micro-moment on the list; cheap and CSS-first. Risk: per-row hover can feel like tooltip noise. |
| 3 | Card Catalogue | 6 | 6 | low | 6 | `<details>` base is robust, but the motion is a drawer pop we have seen. Walnut-drawer metaphor drifts from paper/ink. |
| 4 | The Ledger | 6 | 9 | low | 6 | Most Specimen-Book-correct; slip-from-the-edge is lovely but quiet. A page for reading, not for sending. |
| 5 | Tipped-in Plate | 6 | 9 | med | 6 | Tissue-guard peel is exquisite craft, but only one plate at a time and hover-led. Wow lives in 420ms most won't notice. |
| 6 | Reading Year | 8 | 8 | med | 9 | Direct manipulation is the purest interaction here; 2019 tower and 2023 gap are real data theatre. Drag is where interactions get fun. |
| 7 | Specimen Shelf | 7 | 7 | high | 5 | FLIP re-sort plus face cross-fade is impressive, but 5 extra fonts and a mapping Ganis hasn't made. Fisheye variant is cursor-following, which my lane bans. |
| 8 | Open at Random | 5 | 6 | low | 5 | Charming but it is one block; the 104 books become a footnote. Reads as a widget, not the page. |
| 9 | Rubricator's Pass | 7 | 9 | low | 7 | The red pen drawing down the page is a genuine moment and it carries meaning (the 24). A toggle, not a handling model. |
| 10 | Leaning Shelf | 9 | 5 | high | 6 | Highest wow, highest risk. See section 6. |

## 2. Top 3
1. **Option 6, The Reading Year.** Only option where the visitor drags something and the whole page answers 1:1. It is also the most data-honest (2019 spike, 2023 gap), and its no-JS form is a useful jump menu.
2. **Option 1, Pull from the Shelf.** Hand-feel: a thing you pull out, tilt, and return. Interruptible by design.
3. **Option 9, Rubricator's Pass.** Small, but the single most "send it to a friend" gesture per line of code, and it fixes the dead chips with real meaning.

(Date Due is the near miss, and its stamp is the detail I would borrow.)

## 3. What I'd ship
**Primary: Option 6 (the year rail as a drag scrubber). Supporting layer: Option 9's red pen as the rail's second state, borrowing Option 2's stamp thunk for the detail.**

First 10 seconds: no entrance choreography. The page loads still: h1, a rail of ten year bars (2019 towering, 2023 a visible zero), a red playhead resting on 2025. The visitor's thumb or cursor finds the playhead, because it is the only red thing that is not a star. They drag left: the year numerals roll like a counter, and below, that year's covers fan from a stack into a row, 18ms stagger, capped at 12. Dragging into 2023, the fan has nothing to deal; the counter lands on 0 and the row is an empty ruled line. That silence is the beat.

**The send-to-a-friend moment:** a "Show what I read again" button beside the rail. Press it and a red pen line draws down the margin (700ms), underlining the 24 starred books as it passes while the other 80 dim. Then the visitor drags the playhead across years with the pen still on, and the stars flick past like a heartbeat. That combination (the scrub plus the pen) is the page.

All 104 remain a server-rendered list below; the rail is plain `#y2019` anchors with no JS.

## 4. Rulings I vote for
- **Scroll-triggered arrival motion: NO.** Exactly: nothing animates on load or scroll position. Scrolling may be an *input* only where the visitor is dragging the rail (the page scrolls to follow the playhead). No stamp-on-arrival, no ink-in.
- **Covers: summoned, but visible by default inside the selected year.** The fanned row is the summoned state; the rest of the list shows no covers. Covers are never hover-only, so tap and keyboard get the same.
- **Categories: remove the chips.** Replace with the starred toggle (Option 9). BB and V are right that chips foreground a hustle taxonomy; a real categories filter can wait for Ganis's taxonomy.

## 5. Debate
- **Against PM (stamp on arrival, IntersectionObserver, once).** Disagree. "Fires once" still moves while the visitor does nothing, it costs a stagger over 104 rows that nobody will read, and on mobile it fires during momentum scroll when the eye is not on it. A stamp that lands because the visitor touched the row has meaning; one that lands because the row scrolled into view is a screensaver. PM's real need is "one memorable finished interaction"; Option 6 plus the pen meets it without scroll triggers.
- **Against BB (ink-in once, "the only scroll-adjacent motion I'd permit").** Same objection, plus it tests badly with INP and anchor jumps: a visitor who jumps via `#y2019` lands on marks that are mid-ink. If it needs a scroll trigger to be noticed, it is decoration.
- **Against TY (cover tipped in on hover only, one at a time).** Hover-led plate peeling is elegant but fragile: the tissue wipe (420ms) exceeds my 400ms state-change cap, and moving the pointer down 20 rows would peel and tip 20 times. I would accept it with tap and focus equivalents and a 300ms cap.
- **Concession to SEO (and the unanimous base):** I came in treating the year ribbon as an add-on to Pull from the Shelf. SEO's point that the rail must be plain anchor links first, and its warning that a fixed rail can compete with the sticky header and mobile bottom nav, changed my mind. The rail is a document-flow element, not fixed, and the no-JS jump menu is the real product. Also conceded to V: Date Due's stamps need real days, so I drop the stamp unless Ganis confirms dates.

## 6. Option 10, Leaning Shelf
**Verdict: it is the one that would make someone say "wait, do that again", so it is the wow, but as pitched it is a gimmick.** Physics toys reward the first 15 seconds and then become an obstacle: 104 spines that sway when you fling the shelf make titles hard to read, and the lean-into-gap behaviour moves neighbours the visitor was about to click (a target moving under the pointer is a hard interaction fail). Weight-by-stars is clever storytelling, though.

**Acceptable if:** (a) only the pulled book and its two neighbours move, 3 books maximum, with a single damped spring settling under 450ms (a rehearsed "give", not simulation); (b) no velocity sway on fling, which is ambient motion and fails my lane; (c) neighbours settle before pointer-up targets are armed, or targets are hit-tested on the resting layout; (d) starred books resisting the lean (less travel) is kept, since it encodes data; (e) it is Option 1 with a better spring, not a separate system. At that point it is Option 1.

## 7. Blockers (hard no from my lane)
- Any animation on load or scroll (PM's stamp-on-arrival, BB's ink-in).
- Cursor-following effects: TY's weight fisheye in Option 7.
- Option 10's velocity sway and any physics that moves click targets under the pointer.
- Any hover-only reveal with no tap and keyboard path (Options 2, 4, 5 must ship tap and focus equivalents).
- A fixed rail that collides with the sticky header or covers content at 390px.
- Animating more than ~12 elements in a fan, or `will-change` on all 104.
