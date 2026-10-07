# G1 · PM seat: propose

**Headline: make the page a board you walk, not a list you scroll. One red pawn, nine squares, visitor moves it.**

## Verdict on the ask
Ganis is right: today's "game" is labels on a timeline. A game needs a verb, a piece, feedback and an ending. We have none. The fix is one verb (advance), one piece (the pawn), one payoff (the Continue screen that leads to the signup and Synetica).

## Signature mechanic: "The Red Pawn"
**What the visitor does:** presses **Press start** (a JS-revealed button under the lede), then advances the pawn level by level with **Next level** (button, Space or Enter, or ArrowDown/ArrowRight while focus is inside the board). Tapping any level's numeral jumps the pawn there. "Skip to level 9" always exists.

**What moves, and how**
- **Pawn:** a 14px red ink disc on the spine. Glides to the next dot in 480ms, `cubic-bezier(.5,0,.2,1)`, with a 120ms overshoot-settle (scale 1.25 to 1). Transform only.
- **Dotted route:** the segment behind the pawn inks itself solid red (stroke-dashoffset, 400ms, ease-out). Unvisited segments stay dotted ink.
- **Stamp:** as the pawn leaves a level it takes a rotated mono "CLEARED" stamp (reuse the `@keyframes stamp`, 250ms, -6deg). Level 9 gets no stamp: it keeps "You are here".
- **Camera:** the new level scrolls to centre (smooth ~400ms, instant under reduced motion). Visitor-triggered only.
- **Text:** the active level's text gets full ink; cleared levels settle to normal; **unvisited levels never hide or fade below AA**. Content stays in the DOM and readable.

**Start / end:** Start state is the pawn on Level 1, route dotted. Press start turns the lede into "Level 1 of 9". Reaching Level 9 triggers the **Continue? screen**: the existing `.continue` block gets a ruled frame and three choices: **Write to me**, **Letters** (the newsletter, our signup), **Replay**. Synetica stays as the one quiet line. No countdown, no fake urgency.

**Degrade**
- **No JS / print / crawlers:** pawn, buttons and stamps never render; static spine, nine levels, "You are here", Continue block as today.
- **Reduced motion:** every move still works; pawn jumps, route and stamps appear instantly.
- **Touch:** no swipe hijack (it fights scroll). A 44px sticky "Next level" button plus tappable numerals.
- **Keyboard:** native buttons, visible focus, no global key capture. An `aria-live=polite` line announces "Level 4 of 9: The long run". The pawn is `aria-hidden`.

## My lane: scope and cuts
**Keep:** pawn, route inking, stamps, Press start, Next level, jump-by-numeral, Continue screen, replay.
**Cut or demote**
- **Letter-by-letter dialogue:** cut. It slows reading, punishes a second visit and does nothing for the four jobs. If Ganis insists, one line only, on-demand "Talk" button, never auto.
- **Hidden code:** optional, last. One only: type `mlbb` and "UNINSTALLED" stamps Level 9. It repeats a line already on the page, so no invented facts. Cheap, ship if budget allows.
- **Sound, saved progress, score, achievements, level-select map:** cut. No storage, no tracking.

## Four jobs check
| Job | How it's served |
|---|---|
| Entertain / feels like Ganis | A print board game: ink, stamps, one red piece |
| Second read | Replay, plus the hidden code for repeat visitors |
| Newsletter | Letters is a named choice on the end screen, not a footer link |
| Quiet Synetica route | One line on the same end screen |

## Must-nots
- No scroll-linked or on-load motion. Every move is a visitor action.
- No content only in JS. No hiding unvisited levels from keyboard, screen reader or crawlers.
- No new libraries, no neon, no pixel art, no sound, no storage, no analytics.
- Pawn is not a portrait or sprite of Ganis.

## Top 3 must-haves
1. **The pawn actually moves with a visible cause and effect** (glide + route inks + stamp) and the whole thing works with keyboard, touch and reduced motion.
2. **No-JS fallback is the current page, untouched**; JS only adds the board layer.
3. **The Continue screen is the payoff** and carries Letters and Synetica; without it the game ends in nothing.

**Confidence: 8/10** that this reads as "a game" to Ganis; main risk is pawn alignment on 375px, so the pawn must anchor to each `li::before` dot via measured offsets, not hard-coded px.
