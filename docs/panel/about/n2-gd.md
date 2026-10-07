# N2 / GD: review of "Hmm." build

**SCORE 7.5/10 · SIGN-OFF: no** (four small fixes, then yes)

## What works
- **Verbs are the thoughts.** Librarian (serving past 5 is the loss), keyboards (hold, release on 5), garnisun (drop R, U, N), uninstall (it comes back) are the thought, not a caption on it.
- **The "always Still open" trio is a joke that lands.** Cafe, doctor and uninstall play fair, then end honestly. Uninstall is always last, so every play ends on the joke.
- **Pacing.** Rounds run 3 to 8 s, cards ~5 s, about 100 to 120 s a play. Calm mode resolves every round in a step. The 600 ms card arming is right.
- **Deal rules hold:** 8:33 first, no verb twice running, at most one Bahasa round.

## MUST-FIX
1. **A hold can get stuck through Pause.** `assets/js/about-game.js`, `api().hold`: pressing P, or switching tabs (visibilitychange), while Space or a finger is held never fires keyup or pointerup, so `on` and `held` stay true. After Resume, keyboards drains to 0 with no input and loses. Fix: in `api()`, keep `self.holds = []` (reset in `next()`), have `hold()` push `stop`, and have `pause()` call every `stop` before setting `paused`.
2. **Alarm 1 rings before the player has read the prompt.** `alarms.play`: `api.later(api.calm ? 0 : 500, () => ring(0))`. Change 500 to 1000. The only cue is a colour change, so alarm 1 is unfair on a first read.
3. **Replay has no pull.** `Hmm.deal()`: `Met 8 of 12` is a collection, but the middle six are random, so completion is a grind (8:33 and uninstall are always 2 of the 8). Fix: after `shuffle(ids.slice())`, sort unmet first, e.g. `.sort((a, b) => this.met.has(a) - this.met.has(b))` (stable), then slice. Keep the verb and Bahasa checks.
4. **Keyboards endgame is tight.** `keyboards.play`: `n > 12 ? 45 : ... 240`. A ~200 ms reaction overshoots by one, and going under 5 ends the round on one try. Change to `n > 10 ? 45 : api.calm ? 400 : 320`, so the slowdown is a visible cue and 5 is landable.

## Should fix
- **Comment is wrong:** `librarian` says serving past five is the only loss, but `min >= 63` also loses. Fix the comment.
- **`clock` tol:** `api.index === 0 ? 3 : 1`; the clock is always first, so use 3.
- **Reduced motion, `uninstall`:** `transition: none` makes the fill jump to full on press. In `assets/css/main.css` hide `.hm-app.is-holding i` under reduced motion.

## Nice-to-have
- `ages`: answer is always the last button; shuffle.
- `garnisun`: add "Five letters." to the prompt.
- `share`: hiding everything also wins.
- Skip: show "Skipped", don't add to `met`.
- Last card button "That was eight." repeats the next title; use "See the eight."
