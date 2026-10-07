# R5 · TY (Typography): build review

## 1. Verdict
**SCORE 8.5 / 10. WOW 8 / 10. SIGN-OFF: yes** (with the small fixes below, none blocking).

Verified in code: stamp is live Plex Mono 500, uppercase, .14em, tabular+lining nums, 1.5px border, blend var (normal #ff7a5c in dark). Year roller is Fraunces 800, lining nums, opsz 144. Titles are Fraunces italic with the subtitle moved to the opened row. Author is uppercase with `font-synthesis: none`. Quotes italic, `lang="id"` set for Bahasa. Rail and date figures are tabular+lining. Copy matches Ganis's rulings ("A ★ marks a favourite", "Show my favourites").

## 2. MUST-FIX
1. **Sub-11px mono text (plan floor 11px).** `assets/css/main.css`, reading block:
   - `.stamp--enough { font-size: 0.62rem }` (9.9px) -> `0.6875rem`. The stamp text must be readable.
   - `.shelf-rail__n` 0.66rem, `.row__status` 0.66rem, `.is-enhanced .card__roller::after` 0.62rem -> all `0.6875rem` minimum.
2. **No `size-adjust` / `ascent-override` fallbacks.** Plan v2 promised them. A grep of `assets` and `layouts` finds none. The Fraunces/Newsreader stack falls back to Iowan/Georgia, so the 2.6-4.4rem year roller will jump on font swap. Fix: add metric-matched fallback `@font-face` blocks (Georgia, `size-adjust` plus `ascent-override`) and put them in `--f-display` and `--f-text`. If this was already handled in `head.html`, point me to it and I drop this item.
3. **Author line is plain uppercase, not `smcp`.** `.row__author` uses `text-transform: uppercase` at .8rem. The plan allows this only at `.82em` with +.06em tracking. It is close (.07em), so make it `font-variant-caps: all-small-caps` with `font-feature-settings: "smcp"` and keep the uppercase as a fallback inside `@supports not (font-variant-caps: all-small-caps)`.

## 3. Nice-to-have
- `.row__favs .fav` at .62rem is glyph-only, but check that the ★ renders from a font that has it, with no emoji fallback. Add `font-family: var(--f-text)` plus `font-variant-emoji: text` if it falls back.
- Set `font-variant-numeric: tabular-nums lining-nums` on `.card__count` and the tally. It is already there for the tally, so verify the dark-mode `::before` inherits it.
- `.card__nil` ("No dated entries.") in italic Fraunces is good. Add a typographic period or an en dash for the 2023 row, as polish.
