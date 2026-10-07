# G1 · BB (brand): "Press Start"

## Signature mechanic: **The Ink Pawn**
The spine is a board and one red ink pawn walks it. Print game, not video game: a pawn, a dotted route, rubber stamps.

**What the visitor does**
- A mono button, **Press start**, sits under the lede (JS only). Press it and the page enters play mode; the pawn drops onto Level 1.
- Move with **Next level / Back** buttons (44px, always visible), **arrow keys / J / K**, or **swipe up/down on the spine** (touch-action only on the spine strip). Click a level's numeral to jump.
- Each move: the pawn travels the spine, the dotted route behind it inks solid red, the destination level takes a stamp, the others dim to `--ink-soft` (never opacity on text).

**Motion**
- Pawn: 12px red disc, transform only, 420ms `cubic-bezier(.4,0,.2,1)`, distance-scaled up to 700ms. Route ink: `stroke-dashoffset`/scaleY in step, same easing.
- Stamp: lands scale 1.2 to 1 in 120ms ease-out (the shelf's exact stamp). Text is a plain level numeral, **LEVEL 5**, not "cleared".
- Dialogue: on arrival the level text sets letter by letter (about 18ms per char, max 1.2s). It is already in the DOM; the effect only unhides it with a CSS clip. Any key or tap finishes it instantly.
- Nothing moves on load or scroll. Only visitor input.

**End**
- Arriving at Level 9 (Prove) the pawn stops on "You are here". The existing **Continue?** block gets a stamp, **CONTINUE?** with a Restart (Esc) button. No score, no "game over", no XP.

**Hidden code:** typing `garnisun` (or Konami) swaps the player card photo caption for the patrol-car line, which is already on the page in Level 1. Reveals nothing new; no invented facts.

## Degradation
- **No JS / print / crawlers:** all nine levels, static red spine, "You are here", no buttons.
- **Reduced motion:** pawn teleports, ink and stamp set instantly, text appears whole. Every verb still works.
- **Keyboard:** roving focus on levels, visible focus ring, `aria-current="step"` moves with the pawn, live region announces "Level 5 of 9, Jakarta". Shortcuts never fire with modifiers or in inputs.
- **Touch:** buttons are the primary path; swipe is a bonus. Hover only under `(hover:hover)`.

## My lane: brand, privacy, dignity
**Spec**
- The pawn is an abstract disc. It never becomes a face, avatar or silhouette of Ganis, and **no sprite, token or icon for Gita, Zen or Zia**. They stay as the text row "Party".
- Stamps carry numerals or neutral nouns (LEVEL n, FINISHED for the marathon only because he finished it). Hard facts only.
- Level copy stays verbatim. Papua (birth), Malang (a childhood spent away from parents), and the long run are told straight; the game layer adds no jokes to them.
- SoftwareSeni and Synetica are levels, not "bosses", "worlds to conquer" or "unlocked" prizes. Twelve years of colleagues are not an enemy.
- Dialogue effect never edits the words, only reveals them.
- No storage, cookies or tracking. State lives in memory; Restart clears it. Optional hash `#synetica` on arrival to deep-link a level, no animation.
- Sound off, no sound option.

**Must-nots**
1. No achievements, badges, XP, ranks, percentages or "unlocked" that imply claims about Ganis. (Mythic rank is only in the ttol quiz, which keeps its truthful verdict.)
2. No real names added for gag: Mas Surya, Tante Tiwik and others stay as already written, no pawn or stamp over them.
3. No death, lives, game-over, grief or loss framing. Gita's father is not on this page and must not appear.
4. No gating: nothing is hidden behind progress; level 9 is reachable by jump.

**Top 3 must-haves**
1. **Content parity.** Every word is in static HTML; JS only moves and unhides. Prove it with JS off.
2. **Restraint of voice.** Game labels stay few and dry (Press start, Level n, Continue?). No "Congratulations", no exclamation marks, no emoji.
3. **A stop button.** Esc and a visible "Skip the game" exit instantly to the plain list, so a recruiter or client never has to play to read.
