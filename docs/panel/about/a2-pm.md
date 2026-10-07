# A2 · PM seat · Arcade loop 2: Review of "Baseline"

**SCORE: 8/10 · SIGN-OFF: yes**, once the one MUST-FIX below lands (a 4-line change).

## Verdict
This now reads as a game, not a slideshow with a token. It has a verb, a body (red runner, car, becak), a fail state that never punishes, and a payoff (the page's own sentence) at every gate. Scope held: about 7.5 KB gz against a 30 KB budget, no library, no network, no load cost.

## The four jobs
| Job | Status |
|---|---|
| Entertain | Yes. One verb, nine twists, about 2 minutes. |
| Second read | Yes. Every level card is the real `li` text, so playing equals reading. |
| Synetica | Yes, and honest. Crates labelled `assumption` turn `tested`; no logo, no banner. |
| Letters / contact | Adequate. `Back to the page` lands on the Continue block with focus. |

## What works
- **Twists carry the facts:** GARNISUN shortening to GANIS, the becak pattern repeating ("it hadn't changed"), Akubu granting the double hop, the dusk at km 31, the `ML` tile uninstalling.
- **Soft fail is real:** no restarts, quiet assist after 4 stumbles, so everyone reaches Prove.
- **Exits are always one press away:** Pause, Skip to the page, Quit, Esc, and focus returns to Press start.
- **Prove ends the right way:** "That's as far as the map goes." fits the page's last line.

## MUST-FIX (1)
**1. Replay has no hook, because time barely varies.** There is no speed-up, so a clean run and a sloppy run differ by only a few seconds. "Best time" is not a skill signal, and a visitor has no reason for a second play. Add a stumble count: a factual stat that invents nothing about Ganis.

File `/Users/ganis/Code/ganis-personal-website-hugo/assets/js/about-game.js`:
- In `begin()`, add `this.hits = 0;` after `this.ouch = false;`.
- In `stumble(o)`, add `this.hits += 1;` after `this.stumbles += 1;`.
- In `endCard()`, replace the note line with:
  `<p class="bl__note">Your time ${fmt(t)} · ${this.hits ? this.hits + (this.hits === 1 ? " stumble" : " stumbles") : "no stumbles"}${isBest ? "" : ` · best ${fmt(this.best)}`}</p>`

## Nice-to-haves (not blocking)
1. **Phone portrait dead space.** In `m-z1-run-375-dark.png` the world fills about a third of the height. In `resize()`, use `const minW = this.cssW < 500 ? 200 : TUNE.minW;` and `this.scale = Math.min(r.height / TUNE.H, r.width / minW)`. That gives scale 1.9 at 375 px and still shows about 150 u ahead, which is more than the 0.9 s telegraph needs. Playtest it on a real phone first.
2. **Prove payoff only on a clean clear.** If the player hits `ML`, there is no `Uninstalling` stamp. Consider setting `o.gone = true` and flashing the stamp on a hit as well.
3. **First-run teaching.** The title card note is the only instruction. This is fine because zone 1 is gentle, but watch one phone visitor to confirm.
4. **v2 backlog:** sound (off by default), zone select after one clear, word pickups.

## Next step
Apply MUST-FIX 1, re-run the nine-zone bot, then ship to a Netlify preview and playtest on one real phone.
