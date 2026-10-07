# G1 · TY (type): "Set in Type"

**Verdict on today:** the page is typeset, not played. The type never reacts to anything. A game made of print should be a game *of typesetting*: the pawn moves, and the page gets set behind it.

## Signature mechanic: **Set in Type**
A red ink pawn walks the spine. Each level is a proof that gets *set* when you arrive.

**What the visitor does**
- JS adds a mono button above the lede: **Press start** (also reads "Start at Level 1"). Click, Enter, or Space.
- Then: `↓ / → / J` next level, `↑ / ← / K` back, `Home / End`, number keys 1 to 9. Touch: tap any level's dot (44px target), or swipe vertically on the spine; a mono "Next level" button sits under the active level for one-thumb play.
- Tap or press any key while text is setting: it finishes instantly.

**What moves**
- **Pawn:** the existing red dot, enlarged to 18px, a `transform: translateY` between levels. 420ms, `cubic-bezier(.3,.7,.2,1)`, scaled to distance (max 700ms). Lands with a 2px squash, 90ms.
- **Route:** a red 2px line over the ink spine, inking down as `scaleY` from 0 to the pawn, same timing. Visited stretch stays red; going back un-inks it.
- **Arrival, in order:**
  1. Label: mono, set character by character, 14ms each (monospace has no kerning to break).
  2. Title (Fraunces): not typed. It **inks**: `wght` 300 to 600 and `SOFT` 100 to 30 over 360ms ease-out, transform and font-variation only, no size change, no reflow.
  3. Text (Newsreader): sets **by word**, 22ms stagger, cap 1.0s total. Per-word spans, never per-letter, because letter spans break kerning and ligatures in Safari.
  4. **CLEARED** stamp lands beside the label: Plex Mono 500, 1.5px red border, tilt seeded per level (±2°), scale 1.2 to 1 in 120ms hard ease-out, the shelf's grammar.
- **HUD:** a sticky mono readout `LEVEL 04 / 09`. Digits roll like an odometer: a stacked 01 to 09 column in a `1lh` overflow-hidden box, translated 220ms. Lining + tabular nums so nothing jitters.
- **Prove (the end):** the pawn stops, **YOU ARE HERE** stamps, then `.continue` ("Continue?") sets in as the credits screen. No fake score.
- **Hidden code:** type `mlbb` anywhere and a red rule inks left to right across "Mobile Legends" in the Prove text (400ms), struck through. It repeats a line already on the page; it claims nothing new.

**Starts and ends:** nothing moves on load or scroll. First input starts it. "Replay" (mono, after Prove) returns the pawn to Level 1 and clears stamps.

**Degrades**
- **No JS / print / crawlers:** all nine levels fully set, spine and dots static. No button appears.
- **Reduced motion:** every state applies instantly: pawn jumps, text is just there, stamps are present, HUD digit swaps. Mechanic still plays.
- **Resting state with JS, before Start:** identical to today. Unvisited levels are never dimmed or hidden; only the arrived level replays its setting.
- **Keyboard:** the list is one roving-tabindex widget, visible 2px red focus ring, `aria-current="step"` on the active level, HUD `aria-live="polite"` (announces "Level 4 of 9, The long run"). Animated spans are `aria-hidden`; a visually hidden copy carries the text.

## My lane: type spec
- Faces only: Fraunces (titles, `opsz` auto, `WONK` 1), Newsreader (text), Plex Mono (label, HUD, stamp, button).
- `font-synthesis: none` everywhere. No faux bold from the `wght` ramp: start at the face's real minimum (check Fraunces axis range loaded; if the subset has no `wght` axis, use opacity ink-in instead and tell me).
- Mono 11px floor, `tracking .12em`, uppercase labels. Numerals lining + tabular in HUD and labels.
- Giant numerals: none added. Adding a second display voice would fight the h1.
- Stamp ink: `mix-blend-mode: multiply` light, `screen` dark, matching the shelf.

## Must-nots
- No reflow: spans are present from the start; reveal uses opacity/clip only, never inserting text.
- No per-letter spans in Newsreader or Fraunces.
- No blinking caret, no glow, no text-shadow, no bounce easing on type.
- No animating `font-size`, `letter-spacing` or `line-height`.
- No typing on load. No sound.
- No dimming unvisited text below AA contrast.

## Top 3 must-haves
1. **Content never depends on the animation:** full text in the HTML, instant under reduced motion, readable before Start.
2. **Titles ink via variable axes, body sets by word,** each capped (360ms / 1.0s), skippable by any key or tap.
3. **One stamp grammar** (120ms, tilt, multiply) reused from the shelf, so /about/ and /reading/ read as one press.
