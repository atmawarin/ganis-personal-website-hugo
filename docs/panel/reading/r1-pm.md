# R1 — PM seat: redesign /reading/

## 1. Thesis
The shelf is the one page where a visitor sees **taste** instead of reading it: 104 books, 33 stars, a 2023 gap, a 2019 spike. Right now it is a Goodreads export; it should be a page where you **find one thing worth reading in under 20 seconds, then stay to browse because the browsing itself feels like Ganis**. The wow must serve that, and end at the newsletter and a quiet Synetica nod, not at a toy.

## 2. Three concepts

### A. The Lending Card (stamp-card reading year)
**What they see:** the page opens on a single library book-card in paper tones: "DATE DUE" ruled lines, one red rubber-stamp date per book, grouped by year. 2019 is a dense, overstamped card; 2023 is a blank card with one line: "Nothing stamped. (Ask me why.)" only if Ganis supplies the reason, otherwise just blank. Each row is a book (title, author, date). Visitor scrolls the card; hover/tap a row to reveal cover + one-line takeaway.
**Signature interaction:** scroll-linked is out; instead **stamp on arrival**. When a year-card enters view (IntersectionObserver, once), its rows stamp in sequence, 40ms stagger, each a 120ms scale 1.15 to 1 with a tiny rotate settle (cubic-bezier(.2,.9,.3,1)), red ink at 85% opacity darkening to ink. Max 12 stamps animated per card, rest instant. Pressing a row "pulls" the cover out from the card edge (180ms translateX). Touch: tap toggles pulled state, no hover. Reduced motion: stamps render in final state, pull becomes instant toggle. No-JS: the full card is a static list, covers visible in a `<details>`-free inline layout.
**Data:** existing (date, title, author, cover, description). Optional new: Ganis's reason for the 2023 gap.

### B. The Pull-Out Shelf (spines you can draw)
**What they see:** one horizontal band per year (or per category toggle), books as spines (colour sampled from covers at build time, height varied by nothing fake, width fixed). Hover or focus a spine and neighbours part by 6px; click and the book **slides out 40% and flips to its cover**, with title, author, quote in a card beside it. Arrow keys walk the shelf. The home page already has spines, so this extends an existing language.
**Signature interaction:** pull-out on click/Enter. 260ms ease-out translateY(-18px) then rotateY reveal of cover (320ms), neighbours shift 8px. Only one pulled at a time. Touch: tap pulls, second tap or tap elsewhere pushes back, horizontal scroll with scroll-snap per year. Reduced motion: no slide or flip; selected spine gets a red outline and the detail card swaps instantly. No-JS: spines are anchors to an inline detail list below (CSS `:target` shows card), so everything still reads.
**Data:** existing; build-time dominant colour via Hugo image functions (no new copy).

### C. The Marginalia Year (reading as a running log)
**What they see:** a calm vertical timeline, 2016 to 2025, one thin red thread. Each year a short "chapter" with the books as small cover thumbnails on the thread. The 33 starred books sit **in the margin as red asterisks with Ganis's note**, if he writes one. Top of page: a single sentence generated from real data ("104 books. 24 re-read on purpose. Most in 2019: 27.").
**Signature interaction:** the thread **draws itself as you scroll** (stroke-dashoffset tied to scroll, linear, no easing) and thumbnails are *not* faded in, they simply sit on the line. Hover a starred book and its margin note writes in letter by letter at 30ms/char, max 120 chars. Touch: notes always visible. Reduced motion: thread fully drawn, notes static. No-JS: thread is a CSS border, notes are plain text.
**Data:** existing plus **new: margin notes for the 24 starred books, from Ganis** (the bottleneck; ship without them first).

## 3. Lane spec
- **First screen answers "what should I read?"** A visible "Start here" row of 3 to 5 starred books with Ganis's words, above any browsing mechanic.
- **Taste is legible:** stars, categories and years must be visible without interaction. Fix the dead category filter (it renders only "All") or remove it.
- **Newsletter slot** after the browse, wording like "New books land in the letter first", one field. **Synetica:** at most one line in the footer ("I read for work too: here is what I bring to clients"), no pitch.
- **Every book reachable in HTML** (all 104, no JS needed); SEO and no-JS readers get a plain list.
- **Performance:** nothing blocking; covers lazy; page usable on a mid-range Android on 4G.
- **Copy honesty:** nothing new about what Ganis thought unless he writes it. Fix known defects (wrong *Why We Die* cover, duplicate Sapiens, long subtitles truncated at the colon in the visual, full title in the accessible name).

## 4. Must-nots
- No gimmick that hides books behind interaction to see them (e.g. only revealed on hover).
- No autoplay motion that loops; every animation fires once on arrival or on user action.
- No ratings or reviews invented; no "AI picks" or fake recommendation engine.
- No gating, popups or newsletter modals. No tracking.
- No generated per-book blurbs presented as Ganis's opinion.

## 5. Top 3 must-haves
1. **A "Start here" shortlist** with Ganis's own line per book, visible on load.
2. **Working browse by category and year** (or honestly removed), keyboard accessible.
3. **One memorable, finished interaction** that people will send to a friend, with full reduced-motion and no-JS paths.

## On bending the rule
Bend it **once, on this page only**: one signature interaction per page, tied to a physical reading metaphor, fired on user action or first arrival, never looping, never on scroll-jacking. The home name-setter stays the site's headline moment; the shelf gets its own, and every other page stays quiet. The test is whether the motion helps someone find or feel a book. If not, cut it.

## 6. Quick verdicts
- **3D bookshelf:** kill. Heavy, slow on mobile, hides books, and a 2D pull-out gives 90% of the delight.
- **Carousel:** kill. Hides 100 of 104 books and fails no-JS.
- **Cover wall:** keep as a texture, not the main view; it is today's problem at scale.
- **Filter chips:** keep, they are the only thing that helps "find a recommendation". Make them real.
- **Search box:** keep, cheap and the fastest path for a returning visitor.

## My pick
**B (Pull-Out Shelf)** for the browse, with **A's stamp date** borrowed as the detail card's footer, and the "Start here" row from section 3 on top. Concept C waits on Ganis writing 24 notes.
