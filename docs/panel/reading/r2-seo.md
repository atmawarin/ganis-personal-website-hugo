# R2 — SEO seat: /reading/ (loop 2)

## 1. Scores

| # | Option | Wow | Fit | Craft risk | My lane | Reason |
|---|---|---|---|---|---|---|
| 1 | Pull from the Shelf | 8 | 8 | med | 7 | Spines are a CSS skin over the same `<li>`s; vertical titles stay real text. Tilt/slide is transform-only. |
| 2 | Date Due | 6 | 8 | low | 9 | Pure CSS hover/focus; dates printed in HTML. Wow is a notch above a list, not far. |
| 3 | Card Catalogue | 6 | 7 | low | 8 | `<details>` is native, but 104 closed details hold the quotes (my best long-tail copy) in a collapsed state. |
| 4 | Ledger | 4 | 9 | low | 9 | Cleanest document of the ten. Fails "not boring" on its own. |
| 5 | Tipped-in Plate | 7 | 10 | low | 8 | Best typography, semantic bibliography. Summoned covers need care so they are not lazy-stuck. |
| 6 | Reading Year | 7 | 8 | med | 8 | The rail is plain `#y2019` links with counts, and 2023's empty tick is honest. Drag is a layer. |
| 7 | Specimen Shelf | 7 | 9 | high | 3 | Up to 5 extra webfonts plus FLIP reorder: LCP, CLS and INP all at risk. |
| 8 | Open at Random | 6 | 6 | low | 6 | Build-time quote changes every deploy, so it is not a stable first impression. It is a good hero line. |
| 9 | Rubricator's Pass | 6 | 8 | low | 8 | In-page toggle, no URL. A real filter that replaces the dead one. |
| 10 | Leaning Shelf | 9 | 4 | high | 4 | Biggest "send to a friend", biggest INP risk, and it is physics on 104 nodes. |

## 2. Top 3
1. **#1 Pull from the Shelf.** It is the only mechanism that gives wow, keeps every book as crawlable HTML, and has a CSS-first path (`:target`/`:focus-within`). It extends the spine vocabulary the home page already has.
2. **#5 Tipped-in Plate.** The strongest fit and the safest lane. It is the fallback if #1 slips.
3. **#6 Reading Year.** The year rail is the best navigation and gives anchor jump links for free. 2019 towers and 2023 is empty, so it carries a story.

## 3. What I'd ship
**Primary: #1 Pull from the Shelf. Supporting layer: #6's year rail, as plain anchor links with counts. Borrowed detail from #10: when a spine is pulled, only its two neighbours on each side lean into the gap and settle with one small spring.** There is no whole-shelf physics and no fling.

**First 10 seconds:** the h1 "The shelf" paints as text (that is the LCP). Under it, a rail of ten year ticks shows 2019 towering and 2023 at a visible zero. Below that are shelves of colour-keyed spines, with the 33 stars as red ★ glyphs. Nothing moves until you do. Hover or arrow into a spine and its neighbours lean away. Click, and the book slides out, tilts 4°, and flips into the cover, quote and date. On a phone it is a bottom sheet you swipe to the next book.

**The friend moment:** pulling one book out of a dense 2019 shelf and watching the row *make room for it*. Then you press Esc and it slides back into its exact slot.

## 4. Rulings I vote for
- **Scroll-triggered arrival motion: NO.** No IntersectionObserver reveals and no ink-in on scroll. Anything that starts hidden and becomes visible via JS is a hard no for me. The only allowed "arrival" is state set by the visitor (hash jump to a year, which may underline the heading once, 250ms, transform only).
- **Covers: summoned, but present in the DOM.** They are real `<img>` with `width`/`height`, `aspect-ratio` and `alt`, and never `display:none`. First ~12 covers eager, the rest lazy. The spine colour comes from the cover at build time.
- **Categories: remove the dead chip row.** Ship a starred "read again" toggle (V's #9 as an in-page `:has()`/checkbox, no new URLs). I move off "fix the chips" (see concession).

## 5. Debate
- **PM (stamp on arrival, A):** I disagree. Rows that are stamped by IntersectionObserver start in a pre-state. That means opacity changes on content, a risk for screenshots and crawlers that do not scroll, and a motion budget spent on page load, which the panel already killed. PM's real need, "find a book in 20 seconds", is better met by a visible "Start here" row of starred books that is plain HTML.
- **TY / SD (covers hidden, Ledger/Plate as the base):** I disagree on hiding covers *by default*. Covers are the only images on the page, and they feed image search and the OG card. If they are only hover-summoned, the lazy loader fires late and the first hover shows an empty frame. Summoned is fine only if the `<img>` is in layout from first paint.
- **IxD (roving tabindex):** Agreed in principle, but it must not turn 104 books into one tab stop with no visible list. The base is a normal `<ul>`. Roving tabindex is added only once `.is-enhanced` is set.
- **Concession to V:** the provenance and honest-dates point changed my mind. Placeholder `2019-01-01` dates cannot go into JSON-LD or show as a day. I'll emit year only unless Ganis confirms the real day. I'll also label quote vs note vs blurb, because the quotes are my best snippet copy and mislabelled blurbs are a trust problem.

## 6. Option 10 (Leaning Shelf)
It is the wow Ganis asked for, but only as a *detail*. As a whole-shelf physics toy it is a gimmick with an INP bill: 104 elements, an rAF loop, and fling velocity reading pointer events. I'd accept it only if all of this holds:
- the lean affects at most 4 neighbours of the active spine, and runs only while a spine is moving
- there is no idle rAF loop, and no layout reads
- the JS is under ~3 KB, loaded after first paint and only on pointer or keyboard input
- reduced motion and no-JS give a still row

At that size it is just #1 with a better settle.

## 7. Blockers (hard no from my lane)
- Content hidden until JS or scroll runs (#8 as a JS-only hero, any ink-in or stamp-on-arrival).
- #10 as pitched: idle physics loop or fling-driven sway over 104 nodes.
- #7 loading 5+ webfonts for titles: LCP/CLS risk. If it ships, only subset glyphs, `size-adjust` fallbacks, and loaded after first paint.
- #3 with every card collapsed and no visible text version in the base.
- Any canvas or WebGL shelf carrying content, `fetchpriority=high` on a cover, or new indexable URLs (`/reading/<slug>/`, `?filter=`). The existing 301s stay untouched.
- Stars inside the JSON-LD `name`, a duplicate `sapiens` in the ItemList, and a hardcoded 104 count.
