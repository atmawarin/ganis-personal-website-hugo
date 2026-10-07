# R1 · Seat V (Editor, Ganis voice EN/ID): /reading/

## 1. Thesis
The page's real asset is not 104 covers, it is **Ganis's lines**: 104 quotes and takeaways, a 10-year log, and 33 stars that mean "read again on purpose." Design should make a visitor *read* those lines, not scan thumbnails. Motion is welcome where it carries meaning (a date stamp, a red pen, a page opening); it is noise where it only decorates.

**On bending the rule:** I would bend "one signature interaction, no scroll animation, no fade-ins" to: **one signature interaction on this page, always visitor-triggered (hover, tap, key), never scroll-triggered, never on load.** The home name-setter stays the site's signature; /reading/ gets its own because the brief now says so, but still no scroll reveals and no fade-ins. Chrome may get louder, never autonomous.

## 2. Three concepts

### A. "Date Due" (lending card)
**Sees/does:** Each book is a row on a library checkout card: title, author in mono, and a date-due column that is empty. Hovering or tapping a row *stamps* it with the real `publishDate` in red ink ("18 JAN 2025"), slightly rotated -2 to 2 degrees by a seeded value per book. Starred books get a second stamp ("AGAIN"). Years are separate cards; 2023 is a card with no rows and a printed line, "No entries." (not "I read nothing": we do not know that).
**Interaction:** Trigger: pointer enter or tap on the row. Motion: stamp scales 1.25 to 1.0 with a 90ms ease-in plus 40ms settle (a "thunk", no bounce), ink opacity .0 to .9. Touch: first tap stamps and expands the quote below; second tap collapses. A "Stamp all" button (keyboard `S`) stamps the whole year top to bottom at 30ms stagger. Reduced motion: stamps appear instantly, unrotated. No-JS: all dates printed in plain mono in the date column, quotes visible.
**Data:** existing (title, author, date, star, description). Nothing new.

### B. "Open at Random" (bibliomancy)
**Sees/does:** Above the list, a single large block: one quote set big in Fraunces italic with the book's title and author below. A button reads "Open another" (key: space). The visitor lands on a line, not a grid. The full list stays below as a plain index.
**Interaction:** Trigger: click, tap, or space. Motion: the old quote's lines wipe out left to right (clip-path, 180ms ease-in) and the new one wipes in (260ms ease-out), a page-turn without 3D. Cover thumbnail slides 12px with it. Touch: tap anywhere on the block; swipe left also works. Reduced motion: instant swap, focus moved to the new quote with `aria-live="polite"`. No-JS: shows a server-picked quote (Hugo `shuffle` at build) and the index below; button hidden.
**Data:** existing quotes, but needs a **`quote` vs `note` flag** (see lane spec). Without it the block cannot honestly label whose words appear.

### C. "The Rubricator's Pass" (starred = read again)
**Sees/does:** A toggle in the dek: "Show what I read again." One red ink stroke sweeps down the page: the 24 starred books get a red rule beneath the title and stay full strength, the other 80 drop to 45% opacity. Press again and it lifts. This replaces the dead category chips with the one distinction Ganis actually curates. Gutenberg's red rubricator is already in the site's story.
**Interaction:** Trigger: button or `R`. Motion: a 2px red line draws down the left margin over 700ms (ease-in-out), and each starred row's underline draws left to right as the line passes it. Un-starred rows dim at the same moment. Touch: same button, thumb-sized (44px). Reduced motion: no sweep; state changes instantly. No-JS: stars stay as ★, toggle hidden; a static "Read again (24)" section anchor optional.
**Data:** existing. Star count must be computed (5-star *Elements of Typographic Style* is a Ganis fact to confirm, not a count to display as "5 times").

## 3. Lane spec (rules any chosen design must meet)
1. **Provenance label per line.** Three kinds exist in the data: *a quote from the book*, *Ganis's own note*, *publisher blurb*. Today they are indistinguishable. Show quote marks for quotes (already mostly there); a mono label "my note" for Ganis's; blurbs shown plainly as "about the book" or dropped from prominent display.
2. **Never invent Ganis's thoughts.** No generated summaries, no "Ganis says" over blurb text. Where no note exists, show nothing.
3. **Language stays as written.** Keep EN and ID descriptions in their own language; set `lang="id"` on Bahasa lines. No translating.
4. **Page copy:** Title stays "The shelf." Keep the current dek (it is Ganis's voice) but cut to two sentences, and fix "104 books" to match the real count (105 files, `sapiens` duplicate).
5. **Labels in plain, lowercase mono:** "read again" not "Favourites"; "in progress" for the 2 yellow ones; "No entries." for 2023.
6. **Titles:** strip subtitles for display (display title before the colon); keep full title in `title` attribute and for SEO.
7. **No-JS shows everything.** All 104 lines in HTML.

## 4. Must-nots
- No AI-sounding descriptions ("a thought-provoking exploration of...").
- No ratings, no "must-read", no "highly recommend" unless Ganis wrote it.
- No fake reading dates: `publishDate` of `2019-01-01` on many books looks like a placeholder. Show **year only** unless the day is real. (Concept A needs Ganis to tell us which dates are real.)
- No "Currently reading" copy beyond the 2 flagged books.
- No tooltips carrying essential text (touch fails).
- No Hugo-generated "Sorry, no books match" cutesy copy.

## 5. Top 3 must-haves
1. **Ganis's own words surfaced, labelled by provenance.**
2. **Honest numbers:** correct count, honest 2023 gap, year-only where the date is a placeholder.
3. **Everything readable with no JS, reduced motion, and on a 390px screen**; interaction is a bonus layer.

## Copy Ganis must supply
- A: confirm which `publishDate`s are real days vs placeholders.
- B: mark each description as quote / my note / blurb (I can pre-sort, he confirms); optional one-line "why" for the 24 starred.
- C: nothing new, but he should confirm what ★ means for each (re-read count vs "kept coming back").

## 6. Verdicts on the obvious pitches
- **3D bookshelf:** kill. Looks great for 8 seconds, hides the quotes, fails no-JS and 390px.
- **Carousel:** kill. Hides 100 of 104 books and the copy.
- **Cover wall:** keep only as a quiet secondary view; it is the Goodreads look we are leaving.
- **Filter chips:** kill as chips (5 real categories, 2 strays, dead anyway); replace with the starred toggle (C), maybe a year jump.
- **Random book picker:** keep, it is concept B and it is copy-led.
