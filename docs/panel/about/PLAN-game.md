# PLAN (game round): "The red pawn"

Synthesis of `g1-*.md`. Rulings are binding for the build.

## Why the motion rule bends here
Same ruling as /reading/: motion is allowed when the visitor's hand causes it and the content never depends on it. Ganis asked for a game that plays. This one plays only when pressed, and at rest (before Start, after Exit, with no JS, in print) the page is byte-for-byte today's page.

## Unanimous (7/7)
- **One piece, one verb:** a red ink pawn walks the nine-level spine. The visitor advances it.
- **The route inks behind it**, a red line growing over the ink spine.
- **Stamps** land on levels as the pawn passes, in the shelf's stamp grammar.
- **Nothing moves on load or scroll.** No storage, no sound, no tracking, no library, no new colours or faces.
- **Content parity:** all nine levels in HTML, never hidden or dimmed below AA. Pawn, HUD, stamps are JS-only (`hidden` until enhanced).
- **Reduced motion keeps the game:** same moves, zero duration.
- **Ends at Prove ("You are here")**, then the Continue block, then Play again. No score, XP, achievements, "game over", exclamation marks.

## Rulings
| Question | Ruling | Why |
|---|---|---|
| Start | **`Press start`** button under the lede (mono, 44px, red border). No global Space key. | Explicit opt-in; nobody has to play to read (BB, SEO). |
| Controls | A **HUD** bar, `position: sticky; bottom: 0` inside the levels column while playing: `Back` · `Level 4 of 9` · `Next level` · `Exit`. Buttons ≥ 44px. | Works one-thumb on a phone (IxD) and never floats over the essay chrome. |
| Keys (only while playing, never with modifiers or in inputs) | `→` / `J` next, `←` / `K` back, `1`–`9` jump, `Esc` exit. **Up/Down/Space never captured.** | Native scrolling stays native (IxD, PM). |
| Tap to jump | Each node gets a JS-made 44px button over the dot, `aria-label="Go to level 4, Yogyakarta"`. | IxD, SEO. |
| Swipe | **No.** | Fights vertical scroll (IxD, PM, V, SEO). |
| Pawn | 16px red disc, 3px paper ring, `translateY` only. Duration 260ms + 60ms per level crossed, max 700ms, `cubic-bezier(.2,.7,.2,1)`. Lands with scale 1.25 → 1, 120ms. Measured from each `li`'s `offsetTop` on start and on resize, never on scroll. | SD, IxD, TY. |
| Stamp text | **`CLEARED`** on levels the pawn has left; never on Prove. Absolutely positioned in the label row (no CLS). Tilt seeded per level ±3°. | It describes the visitor's progress, not a claim about Ganis (V, BB ok). |
| Dialogue | Arriving level's text **sets word by word**: words wrapped in spans once on Start (text nodes only, links kept), opacity 0 → 1, 22ms stagger, capped at 900ms. Any key or click finishes it. Spans carry no ARIA changes, so readers get the text whole. **No per-letter spans.** | IxD, SD, TY over V (letters) and SEO (clip-path): words keep kerning and ligatures and stay accessible. |
| Title ink | Arriving level's Fraunces h2 inks **`wght` 300 → 600, `SOFT` 100 → 0** over 360ms. Real variable axes (loaded 300..900, SOFT 0..100), no reflow risk at fixed size. | TY's typesetting idea; it's the "print" part of the game. |
| HUD numerals | Tabular, lining; no odometer roll. | Cut for scope (TY nice-to-have). |
| Camera | Arrived level scrolls to centre, smooth; instant under reduced motion. Focus moves to the `li` (`tabindex=-1`), `aria-current="step"`, polite live line "Level 4 of 9: Yogyakarta". | IxD, SEO. |
| End | At Prove, `Next level` becomes **`Continue?`**. Pressing it scrolls to the Continue block, whose slug counts `Continue? 5 4 3 2 1` once (1s a step, skipped under reduced motion), then settles. A **`Play again`** button appears there. Email, Synetica and Letters are never gated. | V's one deadpan joke, PM's payoff. |
| Hidden code | **`mlbb`**, typed anywhere: a red rule strikes through "Mobile Legends" in Prove (400ms, left to right) and a stamp `UNINSTALLING` lands (ruled in loop 2: the page says "still uninstalling"). Typing it again lifts it ("still uninstalling"). Repeats a line already on the page. | PM, TY. One code only; `run` cut. |
| Hash | Moves use `history.replaceState('#id')` (no history spam). Arriving with a hash does not auto-start play. | SEO wants linkable levels; nothing moves on load. |
| Exit | `Esc` or `Exit`: pawn, route, stamps, HUD go; page returns to resting state. | BB's stop button. |

## Microcopy (V, exact)
Press start · hint under it: `Arrow keys work. So does tapping a level.` · `Back` / `Next level` / `Exit` · HUD `Level 4 of 9` · stamp `CLEARED` · at Prove the HUD note `That's as far as the map goes.` · `Continue? 5 4 3 2 1` · `Play again`.

## Must-nots (merged)
No auto-advance, scroll-jacking, scroll-snap, interstitial, confetti, glow, bounce on type, sound, storage. No sprite or face for Ganis or his family. No "boss", "unlocked", "achievement". No dimming unvisited copy. No layout shift (CLS 0): pawn, route, stamps are absolutely positioned.

## Budget
Vanilla JS in `assets/js/global.js`, about 150 lines, `node -e` syntax-checked. CSS about 60 lines.
