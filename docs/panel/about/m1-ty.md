# m1-ty: TY (type), loop 1

**Backing: "Shift" (a WarioWare-style run of 8-second microgames, one per thought).** Type is the material, so it fits. Baseline's runner stays as the shell only if cheap; the runner genre cannot carry text.

## Why this one
Typography is the only medium in which Ganis's thoughts *are* the object. #8 (typewriter font), #1 (8:33), #12 (cafe sign), #16 (GARNISUN to GANIS) are all type problems. A runner turns them into captions. A microgame makes the visitor perform the thought.

## Concept (my pitch, for GD to fold in)
- **Genre:** microgame sequence, "a shift at Ganis's desk". Each thought is one 6-8 s task with one verb: tap, drag, hold, wait.
- **Loop:** 8 thoughts per play, drawn from the 24 published (shuffled, 2 fixed openers). Between tasks a one-line DOM card: the thought in his words, a link icon to its page. Speed rises 10% per task; no lives, a missed task only drops a "stamp".
- **Controls:** tap/click or Space+Arrows; every task works with one thumb. Pause/Skip/Quit stay in a fixed top bar.
- **End:** after 8, a "desk report" card: stamps earned, the 3 thoughts you met as links, newsletter line. Play twice: different 8 of 24, plus 2 secret tasks unlocked by perfect stamps.
- **Degrades:** calm mode removes the speed ramp and timers (tasks wait for you); no JS = Press start stays a link to the questions page.

## Task mechanics (all taken from a real row)
| # | Task | Verb |
|---|---|---|
| 1 | Dial a stand-up to **8:33** before the timer (23 beats 15/30/60) | drag dial |
| 7 | Serve requests until 5:00; at 5:00 stop, tapping now costs a stamp | tap, then not |
| 8 | Four notary lines, one set in a modern face; spot the odd one out among the typewriter-monospace lines | tap |
| 12 | Cafe signs in Jogja; find one open before 8 | tap |
| 14 | Rank five keyboards; keep five of 71 | drag |
| 16 | GARNISUN: tap R, U, N off to leave GANIS | tap |
| 18 | Three alarms: a bat becomes a chicken (Bahasa) | hold |
| 19 | Two identical price tags: be different, not cheaper (Bahasa) | choose |

## My lane: type spec
1. **All thought text is DOM, never canvas.** Task stages are absolutely positioned DOM nodes with `transform` motion only. Canvas is for ambient paper texture at most. Reason: crisp at 375px, selectable, readable by screen readers, correct `lang`.
2. **Moving text rules:** body ≥ 16px, task words ≥ 20px; text that must be read does not move faster than 40 px/s or is static while the player acts. Never move a sentence; move a *target word*, max 3 words.
3. **Faces:** IBM Plex Mono only where the thought is about monospace (#8, #1, #14). Fraunces for thought cards. Site sans for UI. No pixel font.
4. **Bahasa:** the five Bahasa thoughts (18 to 22) render with `lang="id"` on the node, in his exact words, never translated. English UI chrome stays English around them. Ask: add the thought's source page as a link in the card so the essay carries the translation question.
5. **Card measure:** 28-34 characters per line at 375px, 1.35 line height, thought max 22 words. Long ones use the page `li` text, not retyped.
6. **Tap targets** 44px; task text never under thumb zone traps (keep words in top 70% of stage).
7. **Light/dark:** use site tokens; AA contrast ≥ 4.5 for the moving target against stage.

## Must-nots
- No text in canvas, no bitmap or retyped copies of thoughts.
- No marquee, no scrolling sentence, no letter-by-letter reveal longer than 600 ms (calm mode: instant).
- No flashing timers; a countdown is a shrinking bar, not blinking digits.
- No unpublished row (23 to 28) on screen without Ganis approving that exact line; #24 never ships without his ok.
- No machine-translated Bahasa; no invented thought text.

## Top 3 must-haves
1. **Every task is a type object in DOM** (target word, dial, sign), readable at 375px with one thumb.
2. **Each card shows his words verbatim plus a link** to the source page; the Bahasa ones with `lang="id"`.
3. **Calm mode makes every task untimed and static**, still fully playable.

## Risk
The 8-task game costs more art than Baseline: eight stages, not nine zones, but each simple DOM. Budget 30 KB gz holds if stages are CSS and the engine is a 6 KB task runner. Confidence 7/10.
