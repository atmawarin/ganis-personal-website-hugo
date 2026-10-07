# R1 · IxD (Interactive designer): /reading/ "The shelf"

## 1. Thesis
The shelf is currently 104 identical cards; nothing on it rewards touching. A reading page should behave like a **physical object you handle**: things have weight, you pull, flip, stamp. Make the *handling* the wow, keep the *chrome* quiet. All 104 books stay in the HTML; CSS does the layout and the base states, JS only adds the handling.

**On the rule ("one signature interaction, no scroll animations, no fade-ins").** I bend it, but I don't break it. The rule existed to stop decoration (AOS fades, parallax). Ganis now asks for delight on one page. Ruling:
- **Allowed on /reading/ only:** one *signature system* (a single interaction idea, expressed consistently), driven by **user input** (hover, tap, drag, key, filter), never by scroll position.
- **Still banned:** scroll-triggered reveals, fade-ins on load, parallax, autoplay loops, anything that moves while the visitor does nothing.
- **Budget:** home keeps the name-setter. /reading/ gets one idea. If a concept needs two unrelated gimmicks, it fails.
- Motion must carry information (which book, which year, which state), or it goes.

## 2. Three bold concepts

### A. "Pull from the Shelf" (spines you pull out)
**Sees/does:** Per year, a shelf of 105 *spines* (the home page already has a spine vocabulary). Spine width scales with nothing invented; height is uniform; colour is pulled from the cover (build-time dominant colour, or the cover's edge). Hover (or arrow keys) over a spine and the neighbours part by ~6px, the spine **slides out 28px toward you, tilts 4 degrees**, and the cover face is revealed. Click/Enter: the book comes fully out, lifts to centre, and flips open into a **pull card**: cover, title, author, date read, Ganis's one-line note, stars. Esc or click-away slides it back into its exact slot.
**Motion:** hover 160ms `cubic-bezier(.2,.8,.2,1)` (quick out, slight overshoot-free settle); pull-out 380ms with a 40ms-per-neighbour stagger of max 3 neighbours; return 260ms ease-in. A faint paper-grain shadow grows under the lifted book (box-shadow only, no blur filter, so 60fps on cheap Androids).
**Touch:** no hover. Tap = pull-out card as a bottom sheet (full width, ≥48px close target); horizontal swipe on the sheet moves to the neighbouring book.
**Reduced motion:** no slide or tilt; the selected spine gets a red 3px outline and the card appears instantly. **No-JS:** the section renders as the current clean list (cover, title, author, note) via `<details>`-free plain `<li>`; spines are the JS-enhanced skin over the same `<li>`s. Each `<li>` is a `<button>` once enhanced.
**Data:** existing (cover, title, author, description, date, stars). Optional new: spine colour (derivable at build).

### B. "The Lending Card" (a stamp-card year log)
**Sees/does:** Each book becomes a **library due-date card** row: title, author, and a rubber-stamped date read. Stars become *extra stamps* (the starred book has 2, *Elements of Typographic Style* has 5; I'd encode the star count properly, 33 in total). The signature moment is the **stamp**: hover or focus a row and a red date stamp *thunks* onto the card (scale 1.15 to 1 with 2 degrees random rotation, 120ms, hard ease-out, no bounce) and the cover slides out of the card's pocket like a catalogue card from a drawer. Filtering by category "shuffles the drawer": non-matching cards slide down 8px and desaturate rather than disappear (nobody loses spatial memory).
**Touch:** tap-and-hold is bad; use single tap to stamp+open the cover pocket, second tap collapses. **Reduced motion:** stamp and pocket states swap instantly, red stamp simply present. **No-JS:** all stamps pre-rendered in place, covers visible in a small column. This is a pure-CSS `:hover/:focus-visible` concept in the base (the cheapest to ship).
**Data:** existing; star count is a derivable (count ⭐ in title). No new facts invented.

### C. "A Reading Year" (the year as a running log you scrub)
**Sees/does:** Top of page is a **single horizontal ribbon timeline 2016 to 2025**, one tick per book, ticks heaped by year (2019's 27 towers over 2017's 2; 2023's *zero* is an honest, visible gap with a caption). **Drag the red playhead** (or arrow keys, or tap a year) and the page below *scrubs*: the shelf scrolls to that year, ticks light up, covers of that year peel into a tight "stack" that fans out to a row as the playhead arrives. Hovering a tick pops the title in Plex Mono above the ribbon.
**Motion:** playhead is direct-manipulation (1:1 with finger, no easing lag); the fan-out is 300ms spring with 18ms stagger per cover, capped at 12 covers (the rest appear instantly, to keep 27-book 2019 snappy). Snap to year with 200ms ease.
**Touch:** ribbon is 48px tall with ≥40px hit zones per year; native horizontal drag. **Reduced motion:** playhead jumps, no fan; scroll uses `scroll-behavior:auto`. **No-JS:** the ribbon is static anchor links to `#y2019` etc. (a year jump menu, genuinely useful).
**Data:** existing publishDate. This one is the most "data-honest": 2019 and the 2023 gap tell a story. Optional new: one line from Ganis about why 2023 is empty.

## 3. Lane spec (any chosen design must meet)
- Interaction is **input-driven only**. Nothing animates on load or scroll.
- Durations: hover feedback ≤160ms; state changes 200-400ms; nothing >450ms. Easing: ease-out for entering, ease-in for exiting; no linear except direct drag. One easing token set, reused.
- Animate `transform` and `opacity` only (plus box-shadow if static). Never animate layout props.
- Touch targets ≥40px (48px preferred) on all handles, spines, close, filter.
- Full keyboard: arrow keys move through books, Enter opens, Esc closes and **returns focus to the opener**. Visible `:focus-visible` ring in red, 3px. Roving tabindex so 105 items are not 105 tab stops.
- `prefers-reduced-motion: reduce` replaces every transform animation with an instant state change; information is preserved.
- Progressive enhancement: baseline is semantic `<ul>` of 104 books in HTML, with a working layout in zero JS. JS adds a class (`.is-enhanced`) before styling the fancy state, so there's no flash.
- Dark mode and 390px must both hold. Overlays are real `dialog` or equivalent with focus trap and `aria-modal`.
- Any hover-only information must have a tap and keyboard equivalent.

## 4. Must-nots
- No scroll-linked or on-load animation, no autoplay, no parallax, no cursor-following effects.
- No WebGL or heavy 3D libraries; no JS framework; no content rendered by JS.
- No hover-only reveal of the one-line note on touch devices.
- No `will-change` sprayed across 104 elements; promote only the active one.
- No sound. No layout shift when items open.
- No animation that blocks selecting the next book (must be interruptible mid-flight).

## 5. Top 3 must-haves
1. **Interruptible, input-driven handling** that feels physical (a thing you pull, stamp or scrub), and works identically by keyboard.
2. **Complete no-JS and reduced-motion fallbacks** with all 104 books readable, so motion is garnish on a good list.
3. **One coherent signature** with a tight budget, so the page feels *designed* rather than gadget-filled, and the rest of the site stays quiet.

## 6. Verdicts on obvious ideas
- **3D bookshelf (Three.js/WebGL):** KILL. Heavy, inaccessible, off-brand; CSS spines give 90% of the feel.
- **Carousel:** KILL. Hides 100 books behind arrows; worst for SEO, touch and scanning.
- **Cover wall (dense mosaic):** KEEP as a *state* (the "zoomed out" view), not the page. Covers are inconsistent, so it earns its place only with hover pull-out.
- **Filter chips:** KEEP, but fix first (only "All" renders today). Make them *act* (dim, don't delete) and put them into the signature system.
- **Masonry/Pinterest:** KILL. Same boredom, plus bad reading order.

**My ranking:** A (Pull from the Shelf) as the primary, with C's year ribbon as a navigation layer on top. B is the cheapest, most on-brand fallback if Ganis wants low risk.
