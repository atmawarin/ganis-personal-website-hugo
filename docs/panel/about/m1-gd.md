# M1 / GD: three concepts for a game made of how Ganis thinks

**Headline: stop running through his life; make the visitor do his thoughts, 5 seconds at a time.** Baseline is a CV on a treadmill. The thoughts are *verbs in disguise* (set the time, hold the line at 5 PM, shrink the unit, flip the default), so the game should be built from those verbs.

## Concept A: "Hmm." (microgame stream) -- RECOMMENDED
**Genre:** WarioWare-style microgames, one per thought. **Verb:** one gesture per game (tap, hold, drag, flick). The "rule" is shown as a 2-word imperative the instant it starts: `SET 8:33`, `SPOT THE TYPEWRITER`, `5 PM. APOLOGISE.`

**Controls:** phone = tap / drag / flick on the canvas. Keyboard = Space (tap/hold), arrows (move/flick). Every game plays on both with one input model.

**Loop:** 10 microgames per play, drawn at random from the published pool, 4-6 s each, speed creeping 5% per game. After each, a DOM card (real `li` text, link) shows the thought, then "Next". Fail never ends anything: a missed game leaves the thought stamped `?` (still open), because that is true to the thoughts. ~2 minutes.

**Sample mechanics (all trace to rows):**
| # | Game | Mechanic |
|---|---|---|
| 1 | 8:33 | Dial a clock; land within a minute of 8:33. Overshoot to 15, 30 or 60 and a dull bell rings. |
| 7 | 5 PM | A queue of requests; serve until the clock hits 17:00, then you must hit **Apologise** and walk off. Serving past five is the only way to lose. |
| 8 | Typewriter | Four notary lines; tap the one in monospace. |
| 5 | Default | Six items start shared; you can only tap to *hide*. Curate, don't publish. |
| 13 | Weed | Swipe away reports; a band marks 25-45%. Under or over, the "value" gauge sags. |
| 14 | Keyboards | Score five boards; keep five of 71 shown as a shrinking stack. |
| 15 | Uninstall | Hold to uninstall an `ML` tile. It reinstalls itself. Hold again. |
| 17 | Water station | Park the car at each wall corner before the runner arrives. |
| 18 | Alarm | Tap three alarms in rhythm. Bat becomes chicken. Bahasa caption. |
| 19 | Different | Two identical stalls; the only winning tap is on the odd one. Bahasa caption. |
| 6 | True self | Sort cards into mine / borrowed. Cards flip while you decide. Never finishes; 3 s timer is the joke. |
| 2 | Obese doctor | Strike out obvious answers one by one; the last slot stays blank. |

**Thoughts per play:** 10 of ~14 built, ~10 distinct thoughts seen. **Ending:** a "shelf" card: 10 thoughts, `closed 7, open 3`, each linked to its essay; then one newsletter line and `Back to the page`. **Why twice:** random draw, rising speed, and a localStorage shelf of cards you have met (`14 of 24`). Collection pull, not score pull. **Degrades:** reduced motion = no timers; each game becomes a one-tap-to-resolve still (step, not speed). No JS or import failure = page untouched.

## Concept B: "Inside" (walkable mind)
**Genre:** Inside Out / Townscaper mind-world. Verb: tap to build, drag to walk a tiny cutaway head of nine rooms; each room hosts one thought as a machine (a clock that wants 8:33, a library at 5 PM, a house park with weather: igloo snow, joglo rain, honai fog). Beautiful, very on-brief for "inside his head". **Against:** two minutes is too short to explore, 375px fights a map, thoughts become scenery again (captions with props), and tuning toy-world feel is the most expensive thing on this list. 7/10 charm, 4/10 fit for a two-minute stranger.

## Concept C: "Rewrite" (Baba Is You, lite)
**Genre:** sentence puzzles. Words are slidable tiles; you rewrite a rule: `MEETING IS 15` becomes `MEETING IS 8:33`. `SHARE IS PRIVATE` flips. `5 KM IS 1 KM` (row 23, gated). Thematic spine (shrink the unit, flip the default) is the best of the three. **Against:** needs a 20 s teach, text-heavy at 375px, Bahasa and moving words clash with the typography seat, and only ~6 thoughts fit. Great second mode, weak first two minutes.

## Why A
- **Mechanics, not captions:** every row is a different verb, so the stranger *feels* the weirdness as variety. Weird in a good way requires range.
- **Cheap to scale and cut:** ~1 KB gz per game; ship 12 and stay under 30 KB, add later. Pool is independent of gated rows.
- **Fail is on-brand:** unresolved thoughts are the personality.
- **Fits the engine:** reuse canvas, fixed step, input, overlay, calm mode. Replace `ZONES` with a `GAMES` table.
- Steal C's idea as game 11: one "rewrite the rule" tile (`SHARE` over `PRIVATE`).

## My lane: spec
- **Game table:** `{id, row, verb, secs, run(ctx), calm}`. Each game ~30-60 lines, one function.
- **Judging:** 6 s max, one clear win state, one clear loss state, **both show the same thought card**. Win = `closed`, miss = `open`.
- **Feel:** 60 ms hit-stop on result, bell/stamp visuals only (sound off by default), no flashing, no screen shake.
- **Onboarding:** none; first game is 8:33 with a one-line hint, since the prompt *is* the tutorial. Game 1 never fails: tolerance +-3 min.
- **Pool:** 24 published only. Unpublished rows (23-28) are a `gated` flag on data, off by default; Row 24 never ships without Ganis's yes.
- **Order rules:** no two same gestures in a row; at most one Bahasa game per 5; first and last games fixed (8:33, uninstall) so the arc has a bookend.

## Must-nots
- No score, lives, timers visible in calm mode, leaderboard, or "game over".
- No invented stories or claims; props can be playful (the bell, the stack), text is only his words.
- No family, colleague or company sprites; ML is a self-joke only.
- No game needing precision under 44 px or two-finger input.
- No more than 2 gestures taught; no text over moving objects.

## Top 3 must-haves
1. **Every game ends on its thought card with link** (the real DOM text, `lang="id"` for the Bahasa two); this is the route to the essays.
2. **One-tap Skip game / Pause / Quit** at all times; calm mode resolves each game in a single step.
3. **Variety is guaranteed by the draw rules** (no repeated gesture, fixed bookends); that is what makes the stranger say "this person is weird in a good way", and why they play twice.
