# R2 IxD review: /about/ journey

**SCORE 8/10**  |  **SIGN-OFF: no** (two small fixes, both in-lane; then yes)

## What works
- Zero JS added. Levels are an `<ol>` in plain HTML; the stamp is still the only animation and is user-triggered.
- Reduced motion is covered by the global rule at main.css:714 (`animation: none` leaves the stamp in its final state, not stuck at opacity 0).
- Bonus buttons: `min-height: 44px`, hover gated under `@media (hover: hover)`, `aria-pressed` + `aria-live` kept, global `:focus-visible` red ring (line 58) applies.
- Mobile: player card first, then the lede and levels. Reads well in the 375 dark shot; nothing overflows.
- Quiet game vocabulary only (Level n, You are here, Bonus stage, Continue?, Pause menu). No hover-only info.

## MUST-FIX

1. **DOM order does not match visual order on mobile (WCAG 2.4.3).**
   File: `layouts/about/list.html`.
   Change: move the whole `{{ with .Params.ttol }} ... {{ end }}` block (the `.ttol.journey__bonus` div) to sit **after** the closing `</div>` of `.journey__main`, just before `</section>`. The grid-area placement already puts it correctly on desktop and mobile, so no CSS change.
   Why: today a keyboard or screen-reader user at 375px tabs through the three game buttons before the Level links and the Continue links, while sighted order is card, levels, game. Bonus stage is meant to be last.

2. **Pause menu and inline links are sub-40px targets on touch.**
   File: `assets/css/main.css`, line 680.
   Change `.continue__menu` to:
   `.continue__menu { font-family: var(--f-mono); font-size: 0.78rem; letter-spacing: 0.02em; display: flex; flex-wrap: wrap; gap: 0 18px; }`
   and add:
   `.continue__menu a { display: inline-flex; align-items: center; min-height: 44px; }`
   Remove the literal ` · ` separators in `list.html` (the gap replaces them) and keep the `Pause menu:` label as a `<span>`. Rationale: three adjacent 0.78rem links on a 20px line are easy to mis-tap on a phone.

## Nice-to-have (not blocking)
- `.ttol__opts button` has no `:focus-visible` override; the global ring works, but at `outline-offset: 3px` inside a 2px-bordered box it sits close to the border. Consider `outline-offset: 2px` there.
- Without JS the bonus buttons are inert (they ship no `aria-pressed`, nothing happens). Pre-existing; consider `hidden` on the block until JS enhances, or accept.
- The offset grey shadow behind the portrait (visible at the right and bottom of the photo in both screenshots) reads as a rendering glitch rather than a deliberate print offset. Defer to Typography/Design.
- Mono labels at 0.68rem (`.player__stats dt`) are small but not interactive; no IxD objection.
