# R2 memo: V (voice)

SCORE 8.5/10
SIGN-OFF yes (after the one small copy fix below; no re-review needed)

## What works
- Heading verbatim, lede `Six levels so far. Still playing.` is the right length.
- Body is about 230 visible words, down from about 640. Prose and timeline duplication is gone; each fact appears once.
- Every line traces to the BRIEF fact table or the original page (checked "from the hospital" and "still reading" against HEAD: both existed on the signed-off page).
- No em dashes in rendered HTML (0 found), straight quotes in source, sentence-case h2s, no emoji, no AI tells.
- Game vocabulary is confined to mono slugs (Level, Player one, Bonus stage, Continue?, Pause menu, You are here). The prose stays plain and in Ganis's voice. SoftwareSeni stays graceful.
- Photo choice is the greeting's answer; caption `The author, agreeing with you.` lands. 127 KB, under budget.
- Links resolve (200): twelve-years essay, Letters, shelf, colophon.

## MUST-FIX (1)
1. **"Twelve years" is stated twice and the link text is vague.**
   File: `content/about/_index.md`
   - Level 3 `t:` change the last sentence from `Director by the end. [Twelve years](/articles/twelve-years-and-a-fancy-pen/).` to `Director by the end. [The full story](/articles/twelve-years-and-a-fancy-pen/).`
   - Level 5 stays `Left SoftwareSeni after twelve years.` So "twelve years" appears once in the list, and the link text says where it goes.

## Nice-to-haves (not blocking)
- `player` `Save point` value: `Phone in a drawer, 6 to 9 PM` wraps as "6 to / 9 PM" in the card. Use `6 to 9 PM` with non-breaking spaces (`6&nbsp;to&nbsp;9&nbsp;PM`), or shorten to `Phone in a drawer, 6 to 9 PM` on `white-space: nowrap` for that span.
- Level 4 and bonus stage both mention 42 km. Harmless, since the bonus stage is a user-triggered game and was unchanged per ruling.
- Level 5 `to test products before anyone builds them` is Synetica positioning, not a biographical fact. It is on-brand and consistent with the mission line; keep.
- Level 6 `still reading` is fine (sourced from the old page), but if you want one fewer word, cut it.

## Notes
- Schema `image` addition is correct and absolute. No voice concerns there.
- Do not relitigate level count or the card; both rulings hold.
