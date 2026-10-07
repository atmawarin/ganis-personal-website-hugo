# R5 · PM: review of the built page

*(Returned inline by the seat; filed by PM.)*

**SCORE 8 / WOW 8 / SIGN-OFF yes**

The build matches Ganis's decisions:
- ★ is a favourite, on the F key.
- The subject filter is alphabetical, with no counts and no URLs.
- The year rail is sized by count.
- 2023 reads "No dated entries."
- "Enough." is kept.
- There is no second newsletter ask (the footer already carries one).
- Every chip returns rows, and the home spines link to `/reading/#slug`.

**Must-fix**
1. When a subject filter is active, a year-rail link to a hidden year does nothing. Make that link inert (`aria-disabled`, `tabindex=-1`, dimmed) and clear the state on All.

**Nice-to-have**
- Say "favourites" in the tally stamp.
- Add a visible "Subjects" label before the chips.
- Replace the wrong *Why We Die* cover (needs Ganis's approval to download a new image).
