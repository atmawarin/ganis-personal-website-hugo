# R5 SEO seat: build review

## 1. Verdict
**SCORE 9 / WOW 8 / SIGN-OFF yes** (one open asset item, see below; not a code defect)

## 2. MUST-FIX
**None.** Checked against my lane (template read, no site files edited):
- **Server HTML:** every year card and row is in the template. No JS is needed for the list, covers, rail or stars. Subject chips, hint, tools and stamp buttons are `hidden` until JS runs, so no dead UI without JS.
- **Headings:** one h1, year cards h2, titles h3. The 2023 empty card keeps its h2 plus "No dated entries."
- **Covers:** in-flow `<img>` with width, height, alt (title and author). First 6 eager, rest lazy. The h1 stays the LCP, no CLS from filtering (`hidden` only applies after interaction).
- **Anchors:** rail links `#yYYYY`, row ids are `anchorize`d basenames. The home spines now link `/reading/#slug`, and there are no new crawlable URLs. Subject chips are buttons, so no URLs, as Ganis ruled.
- **Subjects:** each book has exactly one category (104 of 104), so `data-cat` using `index . 0` loses nothing and every chip returns rows.
- **JSON-LD:** CollectionPage plus ItemList of Book items (name, author Persons, image), with no `url` and no fabricated dates. Valid.
- **Favourites copy:** the dek, button and aria-label all say favourite, consistent.

## 3. Nice-to-have
1. Add `"position"` order note: the ItemList is newest-first via `ByPublishDate.Reverse`, so placeholder batch dates could reorder items within a year. Sort by title inside the year if the order should be stable.
2. Add `datePublished` to the ItemList only once Ganis has real dates. Do not add the placeholders.
3. Consider `<noscript>` nothing; none is needed.

## 4. Open item (outside code)
**Why We Die cover** (`images/reading/why-we-die.jpeg`) shows Infinite Country. The alt and JSON-LD `image` therefore point at the wrong art. It needs a new image that Ganis approves. Until then this is a minor trust and rich-result blemish, not a blocker.
