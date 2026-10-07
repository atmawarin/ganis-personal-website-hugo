# R1 — BB (Brand & business manager)

## 1. Thesis
The shelf is the most honest page on the site about who Ganis is, and right now it says "Goodreads export". 40 of 104 books are business & leadership; shown as a flat grid, that reads as hustle-bro. The fix is **curation as taste**: the page should show a reader with a long, odd, human range (a dad handbook, Murakami, marathon training, Bringhurst, a hungry caterpillar) who reads to change, not to collect. Motion is allowed only where it makes that range *visible*, never where it performs productivity.

## 2. Three concepts

### A. The Reading Year (a running log)
**What you see:** a single long horizontal-feeling "log" like a runner's training log, laid out as a vertical strip per year: one mark per book, sized by nothing but order, placed on a 12-month grid. 2019 is a dense forest of marks; 2023 is an empty row labelled, in Ganis's words, with whatever the year really was (data: 0 books). The gap is the point: a founder who stopped reading for a year and said so is more credible than one who never did.
**Signature interaction:** on first scroll into the log, marks "ink in" once, left to right per year, staggered 12ms per mark, 600ms total per year, ease-out (a stamp pressing, no bounce). Hover/focus on a mark lifts it 2px and prints the title, author and one-line in a mono caption pinned under the row (not a tooltip floating over the cursor). Tap on touch: same caption, tap again to dismiss. **Reduced motion:** marks are simply present; caption changes instantly. **No-JS:** the log is a plain HTML ordered list grouped by year with a CSS-only grid; captions are visible inline text.
**Data:** existing publishDate, title, description, stars. New from Ganis: one honest sentence for 2023 (and optionally one per year). Without it, 2023 stays blank, which still works.

### B. The Spine Wall (a real shelf, pulled by hand)
**What you see:** spines, not covers. Each book is a vertical spine, set in the typeface of the *essay-theme designers* where a spine's colour/face is derived from the registry in `styles.yaml` by category (not per-book invention). Starred books stand slightly taller and carry a red rubric dot. Business books are no louder than the rest.
**Signature interaction:** pointer near a spine: neighbours part 6px each side, over 180ms ease-out (spring-free). Click/Enter: the book slides forward out of the row (translateY -14px, 260ms cubic-bezier(.2,.8,.2,1)) and its cover plus the quote unfold on a "page" beneath the shelf. Arrow keys walk the row. Touch: tap to pull, tap outside to push back; rows scroll horizontally with snap. **Reduced motion:** no slide; selected spine gets a red outline and the detail panel swaps instantly. **No-JS:** spines are `<li>`s with title/author text rotated via writing-mode; the detail is a visible `<details>`-style block per book (or the quote shown below the spine).
**Data:** existing cover, title, authors, description, categories. New: none. Needs the cover for the detail only.

### C. The Lending Card (a library checkout record)
**What you see:** the shelf as the back-of-book date-due slip. Each year is a stamped card, each book a typed line: title, author, "DATE READ" in mono, a red rubber stamp for ★ (read more than once on purpose). No covers in the list at all; covers appear only for the one line you are inspecting.
**Signature interaction:** hover/focus a line: a stamp thunks onto it (scale 1.12 to 1.0, 140ms, slight 1.5deg rotation, ink spread via opacity 0.7 to 1). Starred lines already carry stamps; double-read books show two overlapping stamps for two stars. Scrolling does nothing. **Touch:** tap-to-stamp, no hover dependency. **Reduced motion:** stamp is static. **No-JS:** it is just a typed list and a CSS-only cover reveal on `:focus-within`/`:hover`.
**Data:** existing everything. Stars-as-count (33 total) is parseable now.

## 3. Lane spec
- **Anti-hustle:** category is never a headline. No sort/filter that foregrounds "business & leadership". Order is chronological or random, never "by genre count".
- **One honest Synetica line**, at most, in the dek or footer, e.g. "I run Synetica; some of these shaped it, most just kept me company." No CTA, no "currently reading for work".
- **Equal visual weight** for *Be Prepared*, *Atomic Habits* and *The Elements of Typographic Style*. The typographic and the human books get the stars' red, not the business ones; that is naturally true in the data (Bringhurst has five).
- **Privacy:** no per-visitor tracking, no "recently opened" memory, no share buttons, no Goodreads/Amazon/affiliate links, no social embeds. Covers served locally.
- **Voice:** only Ganis's words. Any new note is his or absent.
- **Honesty about the gap:** 2023 has 0 books; show it.

## 4. Must-nots
- No "reading goal" meter, streak, "books per year" counter styled as achievement, or leaderboard energy. The 104 count stays small, mono, in the slug.
- No category chips that rank genres by count (this page's broken filter should be removed or made neutral, not fixed into a hustle taxonomy).
- No confetti, parallax, scroll-jacking, autoplay, or sound.
- No invented one-liners ("Ganis says: game changer"); no AI-written takeaways.
- No Amazon links, ever.
- No "top 10 books that changed my life" framing.

## 5. Top 3 must-haves
1. **Stars legible and plural** (33 stars across 24 books: show *how many times* intent, not just a boolean) and red is reserved for them.
2. **All 104 in HTML, no-JS readable**, with the *Sapiens* duplicate and *Why We Die* cover fixed first.
3. **A business-neutral first screen**: whatever loads above the fold must show range (a dad book, a novel, a typography book), not a business-heavy slice.

## 6. Verdicts on obvious pitches
- **3D bookshelf (WebGL/CSS 3D):** Kill. Reads as agency demo, hurts a11y and weight; the Spine Wall gets 90% of the charm flat.
- **Carousel:** Kill. Hides books, which is the opposite of range.
- **Cover wall / mosaic:** Kill as the default (inconsistent cover quality, plus it is the business-book billboard); allow covers only on inspection.
- **Filter chips:** Kill the genre version. Keep at most "starred" as a single neutral toggle; it flatters the human books.

## Rule-bending (the tension)
Bend "one signature interaction" to **one signature per page**: the home name-setter stays the site's only *hero* moment; the shelf gets exactly one mechanism (stamp, pull, or ink-in) used consistently. Still **no scroll-triggered fades and no entrance choreography on page load**. Ink-in in Concept A is the only scroll-adjacent motion I would permit, played once, and only if reduced-motion and no-JS are clean. Reasoning: a reading page is where personality is allowed to be tactile, but a founder's site that animates everything starts to look like it is selling something.
