# A1 · PM seat · Loop 1: Propose

**I back: "The Long Run", a one-button auto-runner in nine micro-stages.** Ganis is a runner; the core verb is the one thing he does daily. Not a stepper: you can fail, and the page text is the reward for passing.

## Concept
- **Genre:** auto-runner / side-scroller, one button. **Verb:** jump. Tap, Space or Up = hop; hold = higher (max hold 220 ms).
- **Character:** a red ink runner glyph, 24px, no face, no likeness. Ink-on-paper world, red for the player, with parallax of 3 layers (off in calm mode).
- **Numbers:** run speed 180 px/s (stage 1) ramping to 260 px/s; gravity 2200 px/s2; jump 640 px/s; coyote time 80 ms; input buffer 100 ms (forgiving, mid-phone friendly). Fixed 60 Hz step, canvas 2D, DPR capped at 2.
- **Fail = soft.** Hit an obstacle: 400 ms stumble, back to the last checkpoint (every ~8 s). No lives, no "game over". Three stumbles in a stage and the stage offers "Slower?" (speed -25%). Everyone finishes.
- **The reading hook:** each stage ends at a **gate** that opens a card with that level's real text, copied at runtime from the existing `li` (zero new facts). Typed word by word, tap skips. You cannot reach the next stage without the card appearing; you can tap through in 1 s.

## The nine stages (about 25 s each, ~4 min total)
| # | Level | Twist (mechanic tied to the fact) |
|---|---|---|
| 1 | Papua | Patrol car on a dirt road, hop potholes. Tutorial. Gate card: the name Garnisun |
| 2 | Malang | **KM Rinjani:** deck swells; hold to brace, release to hop. Sky cycles through five days and four nights in 25 s (counter 1 to 5) |
| 3 | On the move | Direction **flips** at midpoint (Papua to Jakarta and back); two school gates (SMA 2, SMA 3) as checkpoints |
| 4 | Yogyakarta | **Becak over the bridge.** Breather stage: no hazards, tap the bell. "It hadn't changed." |
| 5 | Jakarta | Two lanes of traffic; swipe-free lane toggle by second tap zone (left/right half of screen) |
| 6 | SoftwareSeni | **Desks:** one desk per six people; the crowd counter climbs 13 to 90 and speed rises with it. Hazards are generic "inbox" stacks, never the company |
| 7 | The long run | **42 km:** the km counter runs 1 to 42 in 25 s; stamina bar; pick up the family car (water station) to refill; last 11 km go dark (after dinner) |
| 8 | Synetica | Hazards are crates labelled "assumption"; hopping one flips it to "tested". Never a company enemy |
| 9 | Prove | Notification pings fly in; the Mobile Legends icon is a hazard you hop to "uninstall" it. Ends: "That's as far as the map goes." |

## Start, end, replay
- **Start:** existing `Press start` button (page unchanged until pressed). Dynamic `import('about-game.js')`, fullscreen-in-page overlay, `Skip to the page` link first in tab order.
- **End:** Continue? 5 4 3 2 1, email and Synetica link rendered in the overlay and on the page, then Play again.
- **Replay hook:** optional local best time (the only storage); `Speed run` toggle; `mlbb` code kept. Stage select after one clear.

## Degradation
No JS / crawler / print: today's page. Reduced motion: no shake, no parallax, no flash; speed -25%, same play. Tab hidden: pause. Esc = pause menu (Resume, Skip to the page, Quit).

## My lane: scope and risk
**v1 ships:** engine (loop, input, collision, checkpoints), 4 mechanics reused across 9 stages (hop, brace, lane toggle, pickup), cards, pause/quit/skip, calm mode. **Cut to v2:** sound, stage select, speed run, per-stage art beyond a palette and 2 silhouettes.
- **Build risk:** about 450 lines JS in one module, under 12 KB gz, no library. Biggest risk is touch feel; ship with a debug slider for speed and jump, playtest on one real phone.
- **Does it make people skip About?** Risk is real. Mitigations: cards are the only way forward, the page content stays directly under the overlay, and "Skip to the page" is one press. Success metric: after play, the player has seen all nine texts.
- **Four jobs:** entertain (yes), second read (card text plus replay), newsletter and Synetica (end-card, never gating).

## Must-nots
- No fact not on the page (stats, counts like "13 to 90" are existing facts only).
- No sprite of Gita, Zen, Zia or colleagues; no company as enemy or boss.
- No autoplay, no load-time cost, no sound by default, no flashing above 3 per second, no hard fail state, no network.

## Top 3 must-haves
1. **Cards with real page text gate every stage**, so playing equals reading.
2. **Forgiving one-button feel** (coyote, buffer, soft fail, Slower?) that works on a 375px phone.
3. **Pause, Esc and "Skip to the page" always one press away**, with the HTML page intact beneath.
