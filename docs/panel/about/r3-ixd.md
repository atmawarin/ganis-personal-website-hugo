# R3 IxD verify: /about/

**SCORE 9/10 | SIGN-OFF: yes**

## My r2 must-fixes
1. **DOM order vs visual order (WCAG 2.4.3): FIXED.** In `layouts/about/list.html` the `.ttol.journey__bonus` block now follows the closing `</div>` of `.journey__main`, just before `</section>`. Tab order is card, levels, Continue, bonus stage, matching the visual order.
2. **Pause menu touch targets: FIXED.** `main.css:681-682` has `.continue__menu` as flex with an 18px gap, and `.continue__menu a` as inline-flex with `min-height: 44px`. The literal separators are gone and "Pause menu:" is a `<span>`. The 1280 screenshot shows the three links cleanly spaced.

## Checked, no change needed
- No JS added. `.ttol__opts button` keeps `min-height: 44px` and the hover gate.
- Rendered page: single h1, six level `<li>`s, `&nbsp;` in the player card and Level 4 (the orphan fixes landed).
- `og:type` renders as `profile`. The schema about branch carries description, alternateName and portrait image.
- v2 screenshot: portrait shadow reduced, card and bonus stage share one box system, no overflow.

## BLOCKERS
None.

## Nice-to-have (not blocking)
- `og:title` is "About Ganis" and `og:image:alt` is "About Ganis". The alt is thin; SEO's lane.
- `.ttol__opts button` still has no `outline-offset: 2px`. The global ring works, so this is cosmetic.
- Bonus buttons are inert without JS (pre-existing).
