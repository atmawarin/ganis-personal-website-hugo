# A2 · BB (brand) · Loop 2 review of "Baseline"

**SCORE 8.5/10 · SIGN-OFF: no, until the one must-fix below lands (one-line copy change).**

## What works (my vetoes hold)

- **No person is a sprite.** The runner is faceless. The becak rolls empty, desks are empty, the family car is a glyph marked `Water.`. Mas Surya, Tante Tiwik, grandparents and family never appear.
- **No company is an enemy.** Circle Indonesia and Akubu are signposts. SoftwareSeni's hazards are desks, with no exit fight. Synetica is dotted `ASSUMPTION` crates that turn `TESTED`, with no logo and no banner. Correct.
- **Patrol car.** A plain silhouette with no insignia, you drive it, and the hazards are potholes. The `GARNISUN` to `GANIS` letter drop matches "Shortened, it became my name."
- **MLBB.** A bare `ML` tile, no game art, struck with `Uninstalling` (not "uninstalled"). Touching it is an ordinary stumble.
- **Numbers.** Every HUD label is on the page: `Day n of 5`, `Employee #13`, `Ninety people`, `Director`, `km n of 42`, `The last 11 km.`. Level text is read from the page `li`.
- **Soft fail.** No game over, and `Ouch.` appears once per run.

## MUST-FIX (1)

**"Akubu: double jump" is an invented claim.** The page says only that Ganis met Mas Surya at Akubu. The game says Akubu gave him a skill, and the flash arrives together with the `Akubu` sign.

- File `assets/js/about-game.js`, line 429: change `this.flashText("Akubu: double jump", 1.6)` to `this.flashText("Double jump", 1.6)`.
- Same file, zone 5 definition (about line 48): change `doubleAt: 6.0` to `doubleAt: 8.0`. The sign sits at t=6.0, so the upgrade no longer reads as coming from it.
- Reword the two code comments that attribute it ("Akubu is where the second hop comes from", "after Akubu").
- Check: `grep -n Akubu assets/js/about-game.js` returns only the `signs` entry.

## Nice-to-haves

- Keep the `The bridge, again` meter. It echoes "It hadn't changed".
- Keep `Director` flipping at f > 0.8 so it reads as "by the end".
- Best time stays in `localStorage` only, with no leaderboard or names.
- If word pickups return in v2, use only strings already on the page, never a person's name.

## Next step

Apply the change, run the grep, and I sign off.
