# R1 — SEO seat: /reading/

## 1. Thesis
/reading/ is the only place these 104 books exist (book URLs are `render: never`), so it is one long, server-rendered, fully crawlable document. It must be a good *page* first (one h1, 104 real list items, covers that never move the layout) and a toy second. I'll back almost any interaction **if it is a CSS/JS enhancement over finished HTML, triggered by the visitor, never by load or scroll.**

**Rule bend (my vote):** keep "no scroll animations, no fade-ins, no load-time motion". Bend "one signature interaction" to "one signature *per page*": home keeps the name-setter, /reading/ gets exactly one (the shelf). Reason: the reading page is the second most "personal" page, and Ganis asked. Limit: motion is a direct response to hover/tap/key, 120-350ms, nothing animates on first paint (protects LCP/CLS and INP). Everything visible without it.

## 2. Three concepts

### A. The Card Catalogue (my favourite)
**See/do:** a walnut-line drawer front ("A–Z by title" label in Plex Mono) sits under the h1. Below it, the 104 books are index cards standing in a row of drawers per year, only the top edge showing: title in Fraunces on the tab, author in mono. Click/Enter on a card **pulls it up out of the drawer**; it rises, tilts 2deg, and shows the cover, the quote in Newsreader italic, the star, the date read as a typed line ("Read 2019-03").
**Motion:** trigger = click/tap/Enter/Space on the card's `<button>`/`<summary>`. Card translateY(-70%) over 280ms, `cubic-bezier(.2,.9,.25,1)` with 2% overshoot; a 1px red edge-rule snaps in. Siblings do not move (no layout shift). Arrow keys walk the drawer; Esc drops it back. **Touch:** tap pulls, tap again or tap another drops it; no hover dependency. **Reduced motion:** no travel; the card is simply expanded (instant state change, same content). **No-JS:** each card is a `<details>`; native open/close does the whole job, covers are in the DOM either way.
**Data:** all existing. Optional new: Ganis's own "shelfmark" (a 3-letter code per category) for the tab.

### B. The Reading Year Rail
**See/do:** a fixed left rail (bottom sheet on mobile) of 10 year ticks, 2016-2025, each tick height = books that year (27 for 2019 towers; **2023 is an honest empty tick** labelled "0"). Dragging/hovering along it scrubs a red playhead; the page below jumps to that year section and the playhead's year number flips like a mechanical counter (Fraunces numerals rolling 200ms).
**Motion:** trigger = pointer move on the rail or arrow keys. Counter roll `steps()`-like, 200ms; the target year heading gets a 1-frame ink underline wipe (transform: scaleX, 250ms ease-out). Scrolling uses `scroll-behavior: smooth` only if motion allowed. **Touch:** drag a thumb along the bottom rail. **Reduced:** instant jump, no roll. **No-JS:** the rail is plain `<a href="#y2019">` links with the counts as text, which is fine anchor navigation and also gives Google sitelink-style jump links.
**Data:** existing (publishDate counts). Never invent a reason for 2023; Ganis may add one line.

### C. The Spine Landscape with a Pull-Out
**See/do:** books shown first as spines in shelf rows per year (height jitter by title length, colour from the cover's dominant colour computed at build with Hugo `.Colors`, title set vertically). Hover/focus tilts a spine out 12deg; click slides it forward and *flips it open into the cover + quote* via View Transitions (cross-document not needed; same-page `startViewTransition`).
**Motion:** tilt 150ms ease-out; open 320ms spring-ish, shared-element morph spine to cover. **Touch:** tap = open (no tilt step). **Reduced:** no morph, instant swap. **No-JS:** spines are links to `#slug` and `:target` swaps the same cards to full cover view via CSS.
**Data:** existing. Page count/real spine colours would be new (don't fake page counts).

## 3. Lane spec (any chosen design)
- **All 104 (or 103 after dedupe, see below) books in the HTML as `<li>`**, title + author + cover `<img>` + description as real text. Never `display:none` / injected-by-JS. Collapsed state = `<details>` or visually clipped, not removed.
- **One `<h1>` ("The shelf")**, year `<h2 id="y2019">`, book titles `<h3>` or `<p>`, no heading skipped. `lang="en"`; wrap Bahasa quotes in `lang="id"`.
- **JSON-LD:** `CollectionPage` + `ItemList` with every book as `ListItem` > `Book` (name, author as Person, image absolute URL, `url` = `/reading/#slug`). Do **not** put read-date in `datePublished` (that's the book's publication); use `dateRead` only as a non-schema attribute or omit. Strip ⭐️ from `name`.
- **Title/description:** title "Reading: the shelf | Ganis Atmawarin" style, with the real count, driven from `len`, not hardcoded. Description = the existing dek, <= 160 chars. OG card: a generated shelf image, 1200x630.
- **Performance:** LCP element = the h1 text (not a cover). Covers: Hugo-processed to WebP/AVIF ~320w + 2x via `srcset`, explicit `width`/`height` + `aspect-ratio: 2/3` (CLS 0). First ~12 covers `loading=eager`, rest `lazy`; no `fetchpriority=high` on covers. Total page < ~1.5 MB initial. JS < 10 KB, deferred, no layout reads in scroll handlers (INP).
- **URLs:** `/reading/` canonical; book anchors are fragments only. **Keep the existing 301s untouched** (`/reading/*` and `/categories/*` to `/reading/`). Do not create `/reading/<slug>/` pages (thin pages) unless Ganis writes real notes.
- **Filters:** either remove the dead "All" chip or make it in-page (CSS `:has()`/hash), no new indexable URLs. Today it is a lone button, which is worse than nothing.
- **A11y = SEO:** real `alt="Cover of {title}"`, focus-visible rings, `aria-expanded` on pulls.

## 4. Must-nots
- No content rendered by JS, no infinite scroll/"load more", no paginated `?page=2`.
- No canvas/WebGL bookshelf carrying the content.
- No lazy-loading the h1 area; no animation on load or scroll; no layout shift on open (use transform only).
- No invented notes, ratings, page counts, or reasons.
- No stars inside the `name` field; no duplicate `sapiens` entries in the ItemList (merge or pick one; fix header count 104 vs 105 from data).

## 5. Top 3 must-haves
1. Server-rendered complete list + ItemList/Book JSON-LD, dedupe, stripped titles.
2. Responsive WebP covers with dimensions: CLS 0, LCP = h1, fix the wrong *Why We Die* cover.
3. The interaction is a progressive enhancement with a working no-JS, reduced-motion and touch path.

## 6. Quick verdicts
- **3D bookshelf (WebGL/CSS3D):** KILL as primary; fine only as decoration of real HTML (and I'd still say no, it costs INP).
- **Carousel:** KILL. Hidden slides, bad a11y, kills crawl value, nobody swipes 104.
- **Cover wall (dense grid):** KEEP as the *no-JS base state*, but it is the current boring page; fine as a layer, not the idea.
- **Filter chips:** KEEP only if in-page and real; otherwise delete. No new URLs.
- **Marginalia/quote layer:** KEEP if text lives in DOM; quotes are the best long-tail SEO copy here ("Morgan Housel doing well with money" queries).

**My vote:** A for the signature, B as the navigation, C dropped.
