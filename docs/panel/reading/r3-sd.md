# R3 — SD: verification of PLAN.md

*(Returned inline by the seat; filed by PM.)*

**1. SCORE 8 / WOW 7 / SIGN-OFF no**

The skeleton is right: ledger cards, one red, the stamp grammar, spines kept on home, no cover colours. It is the best structure on the table. Two things hold it below 9:
- The hover behaviour is underspecified in a way that will visibly jitter.
- The WOW rests on one hover gag plus two keyed passes, and a first-time visitor on a phone gets only the tap stamp. That is craft, not yet wow.

**2. MUST-FIX (5)**
1. **Hover must not reflow.** Item 2 opens "Ganis's line below the row" on hover, which shifts every row under the cursor and makes targets jump.
   - Hover/focus shows the stamp and the cover pocket only, with no layout change.
   - The provenance line opens on click, Enter or tap, in a reserved `grid-template-rows: 0fr→1fr` row; the row below gets `contain: layout`.
   - Reduced motion: instant.
2. **Define stamp persistence.**
   - A hover/focus stamp is transient: it exists only on the active row and is removed instantly on leave, with no exit animation.
   - Stamps from "Stamp the year" persist until the page is left or S is pressed again to lift them.
   - AGAIN stamps are static, always present, and the only red marks at rest.
   - Without this, moving the mouse down 104 rows leaves either a red wall or an inconsistent page.
3. **Dim state must stay legible.** Instead of "dim to 45%", dim author and date only, to 62% opacity. The display title stays full `--ink` and must hold ≥ 4.5:1 in light and dark. 45% of ink on paper fails AA.
4. **Place the year rail.** Without this, the plan has three chrome elements competing.
   - Desktop: fixed in the right margin, non-sticky, as the one piece of chrome. The read-again button sits in the page header, not on the rail.
   - Mobile: a horizontal strip under the h1, 44px targets, not sticky.
   - Bar heights: 2019 is 28px at most, and 2023 is a 2px visible zero.
5. **Dark-mode tokens as numbers.**
   - Stamp red `#E8664F` on `--paper-dark` (target ≥ 4.5:1, verify).
   - The cover mat stays paper-tone `#EFE8DA` with a 1px keyline, because a dark mat makes low-res covers look dirty.
   - Stamp tilt and scale are unchanged.
   - `R`/`S` ignore modified keys, and each control shows a small `kbd` hint.

**3. IDEA: "Run the roller"** (raises WOW, honours every binding ruling)
- **Trigger:** pointer-down on the huge year numeral in the margin, then drag vertically. Keyboard and tap fallback: the existing "Stamp the year" and `S`.
- **Motion:** each row the pointer crosses takes the standard stamp (120ms, ±2° seeded, scale 1.2→1), so it feels like rolling a date stamp down the card. The stamp count is printed in the margin in mono (`14 / 27`). Releasing leaves the stamps, and dragging back up lifts them.
- **Caps:** only rows within the pointer's current row ±1 animate, so no more than 3 are mid-motion; the rest set instantly.
- **Scroll safety:** only the numeral is a drag handle (`touch-action: none` on it alone). On touch it is a 56px-wide margin strip, and the page still pans everywhere else.
- **Reduced motion:** rows set instantly.
- **Why it works:** it is entirely visitor-caused, uses the one stamp grammar, and is a physical gesture a person sends to a friend.

**4. Fair to my r2 position?** Yes. Date Due as a ledger, covers summoned, chips gone, and the Leaning Shelf rejected on my terms. The only drift is "Nil." becoming "No entries.", which I accept.
