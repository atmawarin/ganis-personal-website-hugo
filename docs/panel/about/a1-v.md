# A1, V (voice): in-game copy for the arcade round

**Backs: the one-button runner ("Nine levels", side-scrolling, jump only).** Reason for voice: a runner is the only genre where the player does what Ganis actually does (keeps going), and one verb means every line of copy can stay short. Every line below is a caption, never a stat claim.

## Concept (as I need it for copy)
- **Genre:** auto-runner. The runner is a plain ink figure, no face. Core verb: **jump** (Space, Up, tap anywhere). Hold = higher jump, max 0.55 s. Phone and keyboard identical.
- **Loop:** about 40 s per level, nine levels, about 6 min total. Three hits ("stumbles") per level, then the level restarts. No "lives", no score. Level ends at a finish line, then the real level text from the page sets itself on a card.
- **Twists tied to the real fact** (my lane needs them as titles of each stage):
  1. Papua: a patrol car on a road, jump potholes. Title card: the name.
  2. Malang: KM Rinjani deck, jump swells. A counter runs `Day 1` to `Day 5`, nights dim the screen.
  3. On the move: two lanes, Papua and Jakarta, tap to hop lanes. Ends at a school gate.
  4. Yogyakarta: becak over a bridge, rhythm jumps. The bridge never changes, so this stage is calm and the layout repeats once.
  5. Jakarta: commuter traffic, jump scooters.
  6. SoftwareSeni: hurdles are desks. The corner counter climbs from `#13` to `90`.
  7. The long run: a `km 1` to `km 42` counter, the family car appears as a water station every 10 km (grab = no stumble). The last 11 km start at dusk.
  8. Synetica: the obstacles are labelled `assumption`. You jump them. Nothing is a company or a person.
  9. Prove: endless. Notifications drift in, jump them. One of them is the Mobile Legends icon and it shrinks away as you pass.
- **Ends:** at Prove it never ends, it just says so, then offers the page.
- **Replay hook:** best time per level in memory only (optional local best time as the brief allows), and the `mlbb` code.

## Exact strings (sentence case, no em dashes, no exclamation marks)

| Where | String |
|---|---|
| Title | `Nine levels` |
| Subtitle | `A short run through the story so far.` |
| Start button | `Press start` |
| Hint desktop | `Space to jump. Esc to quit.` |
| Hint phone | `Tap to jump. Hold to jump higher.` |
| Skip link | `Skip to the page` |
| Pause | `Paused` / `Resume` / `Quit` |
| Level card kicker | `Level 4 of 9` |
| Level cleared | `Cleared` |
| Stumble | `Ouch.` (one per run, then silent) |
| Retry | `Again. Same level.` |
| Level 1 title | `Papua` (card text: the real page text, verbatim) |
| Level 2 counter | `Day 1 of 5` ... `Day 5 of 5` |
| Level 6 counter | `Employee #13` rising to `Ninety people` |
| Level 7 counter | `km 12 of 42`; at water station: `Water.`; at km 31: `The last 11 km.` |
| Level 8 obstacle label | `assumption` |
| Level 9 end bar | `That's as far as the map goes.` |
| Continue | `Continue? 5 4 3 2 1` then `Play again` and `Back to the page` |
| Reduced motion | `Calm mode is on. Same run, less movement.` |
| Hidden code | `Uninstalling` (stamp, kept from the page) |

All level card text is pulled from the HTML `<li>`, never retyped, so facts cannot drift.

## Must-nots (voice)
- No facts that are not on the page: no distances, days, rank numbers, or names beyond the material. `Day 1 of 5` and `km 42` are only the page's own numbers.
- No "boss", "enemy", "game over", "you died", "high score", "unlocked", "level up", "epic".
- No sprites or lines naming Gita, Zen, Zia, Mas Surya, Tante Tiwik, SoftwareSeni, Akubu, Circle Indonesia or Synetica as something to beat. Desks, scooters, potholes, swells and assumptions only.
- No em dashes, no exclamation marks, no emoji, no second-person nagging ("Try again!").
- Stumble line never repeats, never scolds.

## Top 3 must-haves
1. **Every on-screen sentence is either the page's own text or one of the strings above.** Anything else comes back to me.
2. **Level 8's `assumption` obstacles are the only joke that touches Synetica's pitch**, and it must read as a nod to testing before building, never as a sales line.
3. **Quit and Skip to the page are plain words, one press away, and the end screen's last line is the page, not a score.**

## Risk to flag
Level 9 with the Mobile Legends icon: it is the one place the game jokes about a real habit. It stays because the page already says "still uninstalling". The icon is jumped, not shot.
