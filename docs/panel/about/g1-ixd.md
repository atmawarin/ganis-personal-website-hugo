# G1 · IxD · "Press Start"

**Verdict on today:** a skin. Nothing the visitor does changes anything. A game needs a piece, a move, a consequence and an ending.

## Signature mechanic: THE RED PAWN
The red node on the spine becomes a **pawn of wet ink**. The visitor walks it down the nine levels. Each step inks the route, stamps the level, and sets the text.

**What the visitor does**
- A JS-revealed **START** button sits under the lede (mono, 48px, red border). Press it: play mode begins, HUD appears.
- **Step** with the HUD button "Next level", `L` / `→`, or by tapping any level (pawn jumps there). `J` / `←` steps back. Arrow Up/Down and Space are **never hijacked**, so native scrolling always works.
- Esc leaves play mode.

**What moves, and how**
| Thing | Motion | Time / easing |
|---|---|---|
| Pawn (12px red disc, `transform` only) | slides to the target node | 260ms + 60ms per level crossed, max 700ms, `cubic-bezier(.2,.7,.2,1)`, no bounce |
| Route | red 2px overlay on the spine, `scaleY` 0 to progress, same duration as the pawn, so it reads as ink following the pen | linked to pawn |
| Stamp "SEEN" on the label | lands scale 1.2 to 1, tilt ±2°, reuses `@keyframes stamp` | 120ms ease-out |
| Level text | **word by word** set: each word is a span, opacity 0 to 1, 18ms stagger, cap 900ms. Words are real text, so screen readers read it whole. Any key or click finishes it instantly | ~0.9s max |
| Page | `scrollIntoView` the level to centre | smooth, instant if reduced |
| HUD | `LEVEL 04 / 09` tabular mono, nine pips fill red | instant |

Nothing moves on load or scroll. Only the visitor's press, key or tap. This follows the reading-page precedent.

**Start and end**
- Start: pawn drops from above the spine into Level 1 (200ms), stamp lands.
- Level 9 "Prove" is the last square. Pawn lands, **no SEEN stamp** (it is "You are here"), HUD button becomes "Continue?".
- Continue: scrolls to the Continue block; its slug stamps in. A **Play again** link replays: pawn rises to the top (500ms ease-in-out), stamps lift together.
- No score, no timer, no achievements. SEEN means the visitor saw it, not that Ganis did something.

**Hidden code:** I recommend **no**. The bonus stage is already open; there is nothing to unlock without inventing a claim.

## Degradation
- **No JS / print / crawlers:** full nine levels, HTML as today. Start, HUD, pawn, stamps are `hidden` until JS removes the attribute.
- **Reduced motion:** every verb works; pawn, route, stamps and words apply instantly (set `--dur: 0`), scroll is instant.
- **Touch:** HUD is a bottom bar, 56px, with safe-area inset and matching page padding. Each level tappable. No swipe: vertical swipe fights scroll.
- **Keyboard:** HUD buttons are real `<button>`s. On step, focus moves to the level `<li tabindex="-1">`; a polite live region says "Level 4 of 9, Yogyakarta". Visible focus ring; targets at least 44px.
- **Deep links:** `#yogyakarta` places the pawn there with no animation.

## My spec for my lane
- State is one integer `at` (0 to 9) plus `playing`. `at` is mirrored to `data-at` on `.journey` and `.is-seen` / `.is-pawn` on `li`s. CSS does all visuals from that. No storage, no tracking.
- Pawn and route positions computed from `li.offsetTop` on step and on `resize` (debounced); never on scroll.
- Reduced motion checked live via `matchMedia("(prefers-reduced-motion: reduce)")` change event.
- Max one animation chain running; a new step cancels the old and snaps it complete.
- Hover styles only under `(hover:hover)`.
- Vanilla, about 90 lines in `global.js` next to ttol, `node --check` clean.

## Must-nots
- No auto-advance, no animation on load or scroll, no scroll-jacking.
- Never hide or dim level text, or lower its contrast, to "unlock" it. Unplayed levels are fully readable.
- No letter-by-letter DOM splitting (accessibility); words only.
- No sound, no libraries, no new colours.

## Top 3 must-haves
1. **Content is always fully readable**; the game is a layer. Start, HUD and pawn are JS-only.
2. **One state, three inputs:** button, keys (L/J/→/←), tap-a-level, all landing on the same step function, with focus and live-region announcements.
3. **Reduced motion keeps the game:** same moves, zero duration, and a 375px / dark-mode check on the bottom HUD.
