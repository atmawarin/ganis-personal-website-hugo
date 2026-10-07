# R3 · Seat V (Editor, Ganis voice): verdict on PLAN.md

## 1. Scores
**SCORE 8 / WOW 7 / SIGN-OFF no** (becomes yes at 9 once the five copy fixes below land; none costs design work).
Honest wow: the stamp grammar is coherent and the "read again" pass says something real about Ganis. But the hover stamp and the slide-out cover are a well-made version of a known gesture. It earns "nice", and the pass plus the 5-stamp pile earn the screenshot. It does not yet earn "send this to a friend" on its own.

## 2. Must-fix
1. **Copy drifts from its own defaults.** The plan's body says "AGAIN stamps" and "Show what I read again", but the defaults table says ★ until Ganis confirms. Change items 3 and 4 and the send-to-a-friend section to: "Stamps read **★** and the toggle reads **Show the starred ones**; both switch to AGAIN / 'Show what I read again' only after Ganis confirms." Ship the safe wording as the base.
2. **In-progress books must not stamp READ.** 2 books are 🟡. Add to item 2: "🟡 rows stamp `READING · year`, never `READ`."
3. **Year counts are not yet honest.** 7 books sit on 2019-01-01 and 7 on 2025-01-18 (batch import), and 2019 is the tallest rail bar at 27. Add to item 6: "Rail bars and year cards show counts only after Ganis confirms the 2019 and 2025 batch years; until then the rail is equal-height links with the count in the label."
4. **"No entries." needs a truth check.** Add to the Ganis-must-supply table: "Is 2023 a real zero or undated books?" If undated, the card reads "No dated entries." Don't assert a zero he didn't state.
5. **Row line labelling.** Change "Ganis's line is labelled by provenance" to "the line is labelled quote, *my note*, or *about the book*; **unflagged lines carry no label and no 'Ganis says' framing**." Also state: no generated text anywhere, including cover alt text beyond title and author.

## 3. Idea: the tally stamp
- **Trigger:** `R` or the toggle, only after the pass finishes.
- **Motion:** when the red rule reaches the foot of the margin, one final stamp lands there: `24 / 104`. Same 1.2 to 1 scale, seeded tilt, 120ms hard ease-out, transform and opacity only. It fires once per press.
- **Fallback:** reduced motion or no JS sets it instantly. The numbers come from the data (`len`, star count), never typed.
- **Why:** the pass currently ends in dimming, with no punchline. This turns "a rule picked rows" into a stated, honest number and a shareable frame. Pressing again lifts it with the rule. It adds no new grammar and no cover colours.

## 4. Fair to my r2?
Yes. The "No entries.", year-only, starred-toggle and no-"Ask me why" rulings all landed. The one miss is must-fix 1, where the body copy outran my default wording.

SCORE 8 / WOW 7 / SIGN-OFF no
