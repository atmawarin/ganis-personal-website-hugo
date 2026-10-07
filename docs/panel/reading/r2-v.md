# R2 · Seat V (Editor, Ganis voice EN/ID): /reading/

## 1. Scores

| # | Option | Wow | Fit | Craft risk | My lane | Reason |
|---|---|---|---|---|---|---|
| 1 | Pull from the Shelf | 7 | 6 | high | 4 | Spines hide the words; vertical titles and the note appear only after a pull. |
| 2 | Date Due | 7 | 8 | low | 7 | Stamp is meaning, not decoration. Needs real-day vs placeholder dates, and "AGAIN" must mean what Ganis means. |
| 3 | Card Catalogue | 6 | 6 | med | 6 | Charming, but drawers bury the lines; `<details>` base is honest. |
| 4 | The Ledger | 5 | 8 | low | 8 | Quiet and truthful. "Nil." is fine as a ledger term; I'd still prefer "No entries." |
| 5 | Tipped-in Plate | 5 | 8 | med | 7 | Best typography, least shareable. Reads as taste, not as a moment. |
| 6 | The Reading Year | 7 | 7 | med | 8 | Honest numbers made visible (2019 spike, 2023 zero). |
| 7 | Specimen Shelf | 7 | 8 | high | 3 | Needs a category-to-designer mapping Ganis hasn't made. 25 faces is a load problem. |
| 8 | Open at Random | 6 | 7 | low | 9 | Puts Ganis's own lines first. Fails without the quote/note/blurb flag. |
| 9 | Rubricator's Pass | 8 | 8 | low | 9 | One red line says the thing only Ganis curates: read again. Tiny code, big gesture. |
| 10 | Leaning Shelf | 9 | 3 | high | 3 | The most fun. Says nothing about reading and hides every word. |

## 2. Top 3
1. **Option 9, Rubricator.** It's the only option whose motion *is* the editorial claim: 24 books Ganis went back to, 80 he didn't. Low risk, highly repeatable, and it replaces the dead chips.
2. **Option 2, Date Due.** Gives the page a tactile hover/tap gesture people can feel in two seconds, and its red ink matches option 9's.
3. **Option 6, Reading Year.** The best honest-numbers story, and it also works as navigation.

## 3. What I'd ship
**Primary: Option 2, Date Due.** The page is year cards, one row per book (title, author, mono date). **Supporting layer: Option 9's red pen**, restyled as a stamp pass. That is a single red-ink grammar, not two gimmicks.

**First 10 seconds.** The page loads still. The visitor sees "The shelf", a short dek with the real count, and year cards with rows of lines. Nothing moves until they do. They hover or tap a row, and a red date stamp thunks on, slightly crooked. The cover slides from the card pocket. Ganis's line sits under it, labelled by provenance.

**The send-to-a-friend moment.** They press "Show what I read again". The red pen draws down the margin. Each of the starred books gets an "AGAIN" stamp as it passes. The other 80 dim. What is left is the shortlist of what he actually returned to, with 2023 an empty card. That is a statement about a person, not a widget.

Conditions:
- **Dates:** year-only unless Ganis confirms the day is real.
- **"AGAIN":** only on the 24 starred books, and only if Ganis confirms ★ means read again. If ★ means something else, the stamp reads "★" and the toggle label changes.
- **Stamp cap:** at most 12 stamps animate in the pass; the rest set instantly.

## 4. Rulings I vote for
- **Scroll-triggered arrival motion: no.** Nothing moves on load or scroll. The pen pass is triggered by a button or the `R` key.
- **Covers: summoned, not visible.** They appear on hover, focus or tap. With no JS, each row's cover shows as a small static thumb, so no content is lost.
- **Categories: remove the chips, add the starred toggle.** Subject headings (TY) would foreground genre. Fixing the chips (IxD, PM, SEO) gives the 5 real categories plus 2 strays a prominence they haven't earned.

## 5. Debate
- **To PM (stamp on arrival, and "Nothing stamped. (Ask me why.)"):** I disagree on both. Arrival stamping is the scroll motion four seats ruled out, and "Ask me why" puts a teaser in Ganis's mouth for an answer that may not exist. 2023 reads "No entries." until he writes the reason.
- **To BB (the footer line "I run Synetica; some of these shaped it, most just kept me company"):** I can't back copy that claims what the books did for him. That's inventing a thought. If Ganis writes that sentence himself, fine. Also, BB's ink-in on scroll is the one scroll-adjacent exception, and I vote no for the same input-only reasons as SD and IxD.
- **To TY (Option 7 via a category-to-designer mapping):** "shown in the manner of" is an honest label, but the mapping would be Ganis's judgement that I'd be authoring for him. Until he supplies it, it is invented curation.
- **Concession to PM:** I held that a "Start here" row was risky because it reads as a recommendation. PM changed my mind: the 24 starred books *are* Ganis's own curation. A visible "read again" row, labelled exactly that and nothing like "must-read", is honest and useful. I'd put it first in the toggle's resting state, not as a separate recommendations block.

## 6. Option 10, Leaning Shelf
**Honest verdict: it's a toy, and a great one, but it isn't the wow Ganis asked for.** Ganis asked to wow the visitor, and physics will. But after the first pull the visitor knows nothing new about Ganis. Spines carry no words, 104 books lean over a gap, and "heavier" starred books quietly invent a weight claim. A visitor sends it to a friend as "look at this thing", never "look at this person's reading".

What would make it acceptable:
- It lives as a one-off easter egg on the row's cover (not the page base), or as the pull-out feel of Option 2.
- Every spine keeps a real, readable title link and a no-JS list.
- Star weight is stated as "read again", not as a vague heft.
- Nothing moves until touched, and reduced motion drops it to a still row.

## 7. Blockers (hard no from my lane)
- Any generated summary, or any "Ganis says" over a publisher blurb.
- Date stamps on placeholder `2019-01-01`-style dates. Year-only unless confirmed.
- "AGAIN" or "heavier" implying a meaning for ★ that Ganis hasn't confirmed.
- Option 7 with an invented category-to-designer mapping.
- Hiding all text on first view (Option 10, Option 1 as base).
- Copy that claims what books did for Ganis or Synetica unless he wrote it.
- "Ask me why" teasers, and cutesy empty-state copy.
- Genre counts or hustle framing in the labels.

Next step: Ganis confirms (a) which dates are real days, (b) what ★ means, (c) quote / note / blurb flags on the 24 starred books first.
