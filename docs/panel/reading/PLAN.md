# /reading/ plan v2: "Date Due" (binding, after loop 3)

v1 → `PLAN-v1.md`. Loop 3 scored v1 at **8 / 8.5 / 8 / 8 / 8 / 8 / 8** with wow at **7–8**, and no seat signed off. v2 applies every must-fix and adopts five of the seven wow ideas, all inside the one stamp grammar.

## The idea in one line
**The shelf is a library card, and the visitor holds the stamp.** Everything that moves on the page is red ink landing because the visitor's hand made it land.

## 1. Skeleton (unchanged from v1, now specified)
- **Layout.**
  - One lending card per year, newest first, rows in read order, on the `--edge` grid with both edges aligned.
  - The year sits in the left margin in huge Fraunces with lining figures and high `opsz`.
  - Semantics: `<ol>` per card, year card `h2`, title `h3`.
- **Each row, left to right:**
  - display title (before the colon), in Fraunces italic
  - author in small caps (real `smcp`, else uppercase .82em +.06em tracking, `font-synthesis: none`)
  - mono date column with `tabular-nums lining-nums`, showing the **year only** until Ganis confirms dates
  - the stamp slot, reserved in the date column so nothing shifts
- **Ganis's line is always visible in flow,** truncated at a sentence boundary, 58–66ch, labelled by provenance:
  - quotes: curly quotes, Newsreader italic
  - *my note*: a mono label
  - *about the book*: set plain
  - unflagged lines: no label and no "Ganis says" framing
- **The row opens on click, Enter or tap,** into a reserved `grid-template-rows: 0fr→1fr` slot (`contain: layout` on the row below). The opened row holds the full line, the subtitle, and the cover large. Opening is the only layout change on the page, and the visitor causes it.
- **Covers.**
  - Every cover is an in-flow `<img>` with width, height, alt (title and author only) and `aspect-ratio`, never `display:none`, `visibility:hidden` or `content-visibility:auto`.
  - First 6 `loading=eager`, the rest `lazy` + `decoding=async`. No `fetchpriority`. The h1 is the LCP.
  - At rest, each cover is a 24px fore-edge sliver tucked into the card pocket at the row's right edge; with no JS it shows as a small static thumb.
- **2023** is an empty card. Its copy waits on Ganis: "No entries." if it's a real zero, "No dated entries." if not.
- **In-progress books** (🟡 ×2) stamp `READING · year`, never `READ`.

## 2. The stamp (the one mechanism)
- **The stamp itself.**
  - Live text, IBM Plex Mono 500, uppercase, 11px floor, tracking .14em, 1.5px red border.
  - `mix-blend-mode: multiply` in light mode, `screen` at lower alpha in dark.
  - Tilt is seeded per book (±2°) and applies to the stamp box only, never to row text.
- **Motion.**
  - Lands with scale 1.2→1 in 120ms, hard ease-out, no bounce.
  - Transform and opacity only. `will-change` only while animating, removed on `transitionend`.
- **Persistence (SD), one rule for the whole page.**
  - *Hover/focus = preview:* the stamp and the cover sliver sliding out of the pocket (220ms). Both lift on leave in 100ms. Zero layout change, so targets never move under the pointer (IxD, SD).
  - *Click, tap, roller, S or N = commit:* the stamp stays for the session (no storage), and Esc lifts committed stamps.
  - *Starred stamps* are static, always present, and the only red marks at rest.
- **Star stamps.** One per ★, offset ±3px and ±2°, each with a different ink value (TY). One `aria-label` per pile, e.g. "Starred five times". Wording: **★** until Ganis confirms what it means, then **AGAIN** (V).

## 3. Ways to use the stamp (wow, all visitor-caused)
| # | Verb | Trigger | What happens | From |
|---|---|---|---|---|
| a | **Touch** | hover/focus (preview); click/tap/Enter (commit + open) | The stamp lands and the cover slides out of the pocket. | v1 |
| b | **Roll the stamp** | drag down the year numeral in the margin; on touch, a 56px margin strip with `touch-action: none` on the strip only | Like a roller date-stamp: every row the pointer crosses takes a stamp, with a mono `14 / 27` counter in the margin. Dragging back up lifts them. At most 3 rows are mid-motion at once; the rest set instantly. | SD |
| c | **Ink runs out** | applies to (b) and (d) | Each successive stamp is .06 paler (floor .7, still ≥3:1), as if the pad is drying. Re-inks on the next card. | TY |
| d | **Stamp the year** | visible button on each card, or `S` | A drumroll of stamps down the card at a 30ms stagger. The first 12 rows *in the viewport* animate; the rest set instantly. | v1, IxD |
| e | **Strike again** | press an already-stamped row's stamp zone | Another impression lands offset 3px with a new tilt (90ms), up to 5 per row, so any book can be hammered to look like Bringhurst. A sixth press lands a small mono **"ENOUGH."** *(copy for Ganis to approve)*. Esc clears; `vibrate(8)` on Android where supported. | IxD + BB |
| f | **Show the starred ones** | header button or `R` | A red rule draws down the margin (≤ 450ms; the first 12 visible rows animate). Unstarred rows switch to `--ink-soft` (≥ 4.5:1 in both themes, never opacity on text) while titles stay full ink. When the rule reaches the foot, a tally stamp lands: **`24 / 104`**, from data. Press again or Esc to lift. | V, SD, TY, SEO |
| g | **Stamp one for me** | header button or `N` | Picks a random **starred** row (never the last one shown) and scrolls it to centre (instant with reduced motion). At +200ms it stamps and opens. The URL gets `#slug` so the exact stamped row can be shared. Label: "from my starred list", never "recommended". | PM |

**Rejected:**
- **Ghost trail plus a "17 of 104 checked out" counter (SEO).** It contradicts the persistence rule, and the counter reads as an achievement (BB).
- **Option 10 lean.** Nothing from it survives on a card; the reason is recorded in v1.

**Discoverability (BB).** One mono line under the h1, shown only with `.is-enhanced`: `Touch a row · drag a year · R starred · N one for me · S stamp the year`. The key glyphs are `<kbd>` hints, and the same hints sit beside each button.

## 4. Chrome budget (SD)
- **Header:** h1, two-sentence dek, the hint line, and two buttons (*Show the starred ones*, *Stamp one for me*). Nothing sticky.
- **Year rail:** fixed in the right margin on desktop; a horizontal strip under the h1 on mobile, with 44px targets.
  - Built from plain `#y2019` anchors.
  - **Equal-height bars with the count in the label** until Ganis confirms the 2019 and 2025 batch years (V). After that, bars sized by count (2019 at most 28px, 2023 a visible 2px zero).
- **Foot of page (PM):**
  - one email field, labelled "New books land in the letter first."
  - one mono line, "I build products at Synetica", linking to the existing route
  - No modal, no sticky bar, no tracking.

## 5. Keyboard, hash, motion
- `R`, `S`, `N` and Esc fire only with no modifier and no focused input (Cmd+R still reloads), each set via `aria-keyshortcuts`, and each always secondary to a visible button (WCAG 2.1.4).
- Roving tabindex only after `.is-enhanced`. Arrow keys move between rows, Enter opens, and Esc closes and returns focus.
- **Hash arrival** (`/reading/#slug`, from the home spines or a shared "one for me" link): the row renders stamped and open **with no animation**, `scroll-margin-top` clears the header, and focus moves to the row. Slugs are unique, so the `sapiens` duplicate goes first.
- `prefers-reduced-motion`: every verb still works, and states apply instantly.
- No JS: the full list, static star stamps, cover thumbs, year links. No buttons.
- **Dark mode:** stamp red `#E8664F` on warm black (verify ≥ 4.5:1); the cover mat stays paper-tone `#EFE8DA` with a 1px keyline.

## 6. SEO and data
- **JSON-LD:** `ItemList` of `Book`. Stars stripped from `name`, no `url` (there are no book pages), no read date in `datePublished`.
- **Stamp text:** `READ · YYYY` comes from CSS `::after` with `aria-hidden`, not 104 repeated DOM strings. Star piles are `aria-hidden` plus one visually hidden "Starred ×N".
- **Data fixes first:**
  - *Why We Die* cover
  - `sapiens` duplicate
  - count from `len`
  - ⭐️ parsed into a count
  - display title split at the colon
  - sentence-boundary truncation
  - `lang="id"` on Bahasa lines
  - the dead chip row removed
- No new webfont files. Fallback stacks get `size-adjust`/`ascent-override`.

## 7. Brand guardrails (BB)
- Counts (104, 24) are small mono, never styled as achievement. No goals, streaks or "N this year".
- No share buttons, Goodreads/Amazon/affiliate links, or remembered history. Covers are local files only.
- No generated text anywhere. *my note* appears only on Ganis's own words.
- **First-screen check before ship:** look at the first six rows at 390px and at 1440. If four or more are business books, Ganis pins one lead row of his choosing.

## 8. What Ganis must supply (safe defaults ship without it)
| Item | Default until supplied |
|---|---|
| Which dates are real | Year only on stamps and in the column |
| Are the 2019-01-01 ×7 and 2025-01-18 ×7 batches real years? | Equal-height rail bars |
| What ★ means | ★ stamps; "Show the starred ones" |
| Is 2023 a true zero? | "No dated entries." |
| Quote / my note / blurb flag per line | Lines in quote marks labelled as quotes; the rest unlabelled |
| "ENOUGH." on the sixth strike | Off until approved |
| Synetica footer line wording | "I build products at Synetica" |

## 9. Build notes from loop 4 (no blockers)
- **SD:** the left-margin year numeral, the roller counter and the starred rule must not overlap; check at 1024px. Strike-again stamps may overflow their slot visually, but must never size the date column.
- **TY:** the `24 / 104` tally and the `14 / 27` roller counter use `tabular-nums lining-nums`, like the date column.
- **IxD:** on touch, the row body toggles open and closed, and the stamp zone is a separate 44px target that only strikes, so a tap meant to close the row never lands a strike.
- **V:** the seven `2019-01-01` books still stamp `READ · 2019` until Ganis confirms that batch year.
