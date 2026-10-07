# g1 · V (voice): propose

## Signature mechanic: **The Red Pawn**
The visitor plays the route. A red ring token (the same ring as the level dots, 20px) travels the spine, inks the road behind it, stamps each level it leaves, and speaks the next level's text as dialogue.

**What the visitor does**
- Presses **Press start** (a mono button in the lede, rendered by JS only).
- Moves with **Next level / Back** (two 44px buttons in a small HUD pinned to the spine), **arrow keys / J K** while the level list has focus, or **taps any level** to send the pawn there.
- Ends on Level 9, where the pawn lands on "You are here".

**What moves**
- **Pawn:** `translateY` to the target level, 420ms, `cubic-bezier(.3,.7,.2,1)`, with a hop (scale 1 to 1.25 to 1 over the same 420ms). Start: drops onto Level 1, scale 1.6 to 1, 160ms ease-out.
- **Route:** a red 2px line grows behind the pawn (`scaleY`, 420ms linear). Left of it the ink spine stays; ahead of the pawn the spine turns dotted.
- **Stamp:** `CLEARED` lands on a level as the pawn leaves it. Shelf grammar: Plex Mono 500, 1.5px red border, tilt seeded per level (±2°), scale 1.2 to 1 in 120ms, multiply blend. Never on Level 9.
- **Dialogue:** the arriving level's text sets letter by letter, 14ms a character, capped at 900ms. Spans toggle opacity, so no reflow. Any key or click finishes it.
- **Scroll:** the pawn's level eases to mid-viewport (smooth).

**Start and end**
- Start is the visitor's click. Nothing moves on load or scroll.
- End: the pawn stops, the HUD reads "Level 9 of 9", and the existing Continue block gets one beat: its mono slug swaps to "Continue? 5 4 3 2 1" counting once per second, then settles to the normal text. Button becomes **Play again** (pawn returns to Level 1, stamps clear).

**Degrades**
- **No JS / print / crawlers:** the nine levels as today. No button, no pawn.
- **Reduced motion:** every mechanic works, states apply instantly. No hop, no typing, no count, stamps appear in place, scroll jumps.
- **Touch:** tap level, tap Next. No swipe (it fights scroll).
- **Keyboard:** list is `tabindex=0`; arrows act only while focused so the page still scrolls. Visible focus ring. HUD is `aria-live="polite"`: "Level 4 of 9, Yogyakarta."

**Hidden code:** typing `run` while playing jogs the pawn through the whole route at 120ms a level. A nod to the morning run; it claims nothing.

## My lane: microcopy (exact)
| Slot | Copy |
|---|---|
| Start button | Press start |
| Hint, under it | Arrow keys work. So does tapping a level. |
| Buttons | Back / Next level |
| HUD | Level 4 of 9 |
| Stamp | CLEARED |
| Last-level note | That's as far as the map goes. |
| Continue slug (counting) | Continue? 5 4 3 2 1 |
| Replay | Play again |
| Reduced-motion note | none (it just works) |

Dialogue text is the existing level copy, untouched. No new facts anywhere.

## Must-nots
- No "Congratulations", "Achievement unlocked", "Game over", XP, score, timer, or any number that implies a fact about Ganis.
- No exclamation marks, no em dashes, no Title Case buttons.
- No stamp text other than CLEARED.
- No JS-written content that is not already in the HTML (counter and button labels excepted, and they carry no facts).
- Nothing animates on load or scroll.

## Top 3 must-haves
1. **Every state is readable without JS and without motion.** Typing is an opacity toggle over real text; reduced motion skips all of it.
2. **Visitor-triggered only, and finishable.** Any key or click completes the dialogue; Play again always works; arrows never trap page scroll.
3. **The microcopy stays deadpan and factual.** The game is the page's framing, not a claim. One joke (the countdown), delivered flat.

## Why bending the rule is justified
Same ruling as /reading/: motion is allowed when the visitor's hand causes it and the content never depends on it. Ganis asked for a game that plays; this one plays only when pressed.
