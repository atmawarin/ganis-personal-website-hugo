# R6 · IxD verify

1. No-JS dead controls: FIXED. `[hidden]{display:none!important}` at main.css:496 precedes the shelf block and beats `.filters`, `.shelf-tools` and `.card__stamp` display rules.
2. Duplicate `@keyframes stamp`: FIXED. Shelf uses `shelf-stamp` (main.css:525, 592, 594); `.ttol` keeps `stamp` (670).
3. Tap-to-close half-open: FIXED. `focusin` is gated on `:focus-visible`; `open(row,false)` removes `is-preview`.

Nice-to-haves (loop 5):
- Year rail vs filter: FIXED. `aria-disabled` and `tabindex=-1` are set and cleared in `filter()`.
- Escape with nothing open wipes all stamps: ACCEPTED-DEFERRAL. It is still unconfirmed, but recoverable (it only clears stamps and favourites state). Log a follow-up.
- Single-key shortcuts (WCAG 2.1.4): ACCEPTED-DEFERRAL. The visible buttons mitigate it. Log a follow-up to scope the keys or add an off switch.

BLOCKERS: none.

SCORE 9 / 10 · WOW 9 / 10 · SIGN-OFF: yes
