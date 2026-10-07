# G4 · TY verify

**SCORE 9/10 · SIGN-OFF: yes.**

## Items
1. **`font-synthesis: none` on `.levels__title`: FIXED.** main.css line 669 sets it.
2. **mlbb strike covering the full stop: FIXED.** `wrapWords()` splits "Legends." into a "Legends" span (`data-mlbb`) and a separate "." span with the dataset cleared. The dot is appended after the word span and the strike stops at the word.
3. **`"WONK" 0` in `title-ink`: NOT FIXED, accepted.** Nothing sets WONK there today, so there is no defect. Adding it is optional.

## Notes
- Whitespace stays outside the spans, so reading text and no-JS parity hold.

## BLOCKERS
None.
