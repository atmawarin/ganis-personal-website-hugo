# PLAN (mind round): "Hmm."

Synthesis of `m1-*.md`. Binding for the build.

## Unanimous (8/8)
- **Genre: a deck of microgames, one thought per round, one verb per round.** The thought is the rule; you *do* it, then read it in his words. WarioWare in shape, a specimen book in look.
- **8 rounds a play**, drawn from published thoughts only. No lives, no score, no game over. A miss is a stamp, not a failure.
- **Every round ends on a card**: his words verbatim, the right `lang`, and a link to the page it came from.
- **Baseline is replaced, not kept.** Its overlay, focus trap, pause/quit/skip, calm mode and dynamic import are reused; the runner goes.
- Unpublished journal rows (23 to 28) are **not in the source at all** until Ganis approves each exact line.

## Rulings
| Question | Ruling | Why |
|---|---|---|
| Name | **Hmm.** Subtitle `Two minutes inside a head that asks why.` | GD + V. |
| Canvas or DOM | **DOM.** Native buttons, ranges and holds; SVG/CSS for props. No per-frame loop. | IxD, TY, SEO: text is the material, so it must be crisp, readable by screen readers, zoomable, `lang`-correct. |
| Where the thoughts live | **`data/thoughts.yaml`**, emitted into /about/ as one `<script type="application/json">`. The game reads it; no thought text in the JS bundle. | SEO's "content owns the words" without adding a 24-item list to a page Ganis just asked to make shorter. |
| Crawlable links | Question items on /questions-and-ideas/ get **anchor ids**, so a round can deep-link (`/questions-and-ideas/#15-is-too-short`). Essays link to their own URL. | Second read; the question pages themselves aren't rendered. |
| Rounds in v1 | **12**: 8:33 · librarian · typewriter · default share · keep five · uninstall · Garnisun · cafe · 35 looks back · obvious answers · three alarms (id) · different (id). | Best verbs (GD, SD, IxD, TY lists). Weed-out, insects, theme park, bot, to-do list, pranks: v2. |
| Order | Round 1 is always **8:33** (it teaches itself; ±3 min tolerance). Round 8 is always **uninstall**. Middle six random, no same verb twice in a row, at most one Bahasa round per play. | GD bookends; V/BB Bahasa limit. |
| Timing | Soft timer as a shrinking bar (6 to 10 s), no speed ramp. Calm mode: no timer, rounds wait. | PM over GD's ramp: legibility over chaos. |
| Stamps | `Filed` (done) / `Still open` (missed, or a question that has no answer). Uninstall, cafe and obvious answers **always** end `Still open`: that's the joke and it's true. | GD's "open thoughts are the personality" + PM's wording. |
| End | `That was eight.` · `The rest are on the page. Some of them I still can't answer.` · the eight as a linked list with their stamps · `Mostly: friction.` / `myself.` / `smaller.` · `Read the questions`, `Get the newsletter`, `Play again`, `Back to the page`. | V + PM + SD's index. |
| Replay | A local shelf: `Met 9 of 12` (localStorage, try/catch). | GD + BB. |
| Synetica | Not in the game. The page already has its one line. | BB: no pitch inside a toy. |
| Tone | Obese doctor = strike out *knowledge, motivation, willpower* (his own three); no body drawn. Notary/cafe target the ritual, never a person or venue. Mobile Legends is a self-joke. No brand logos. | BB. |

## Round specs
| # | Row | Prompt | Verb | Win |
|---|---|---|---|---|
| clock | 1 | `Start the meeting at 8:33.` | drag a minute range (or − / +), then `Start it` | 8:33 (±3 first round) |
| librarian | 7 | `It's 5 PM. Apologise. Go home.` | `Serve` until 5:00, then `Apologise and go home` | apologise after 5:00; serving after 5:00 misses |
| typewriter | 8 | `Find the typewriter.` | tap one of three lines (serif, sans, mono) | the mono line |
| share | 5 | `Everything is shared. Hide what you must.` | tap to hide | both secrets hidden |
| keyboards | 14 | `71 keyboards. Keep five.` | hold `Let go`, count drains, release | release on 5 |
| garnisun | 16 | `Make a name out of this.` | tap letters to drop | GARNISUN → GANIS |
| cafe | 12 | `It's 7:40. Find a cafe that's open.` | tap doors; every one opens later | always `Still open` |
| ages | 4 | `Who's proud of the 20-year-old?` | pick 20 / 25 / 35 | 35 |
| doctor | 2 | `Rule out the obvious.` | strike three answers | always `Still open` (the blank stays) |
| alarms | 18 | `Wake up. Three alarms.` | tap each alarm while it rings | all three |
| berbeda | 19 | `Don't be better. Be different.` | pick one of four cups | the different one; a cheaper one is a price war |
| uninstall | 15 | `Uninstall it. Again.` | hold 1.2 s; it comes back | always `Still open` |

Every result card shows the thought exactly as published (question titles without the leading emoji; essay deks), with `Read it` linking to its source.

## Controls and chrome
Top bar: `Hmm. · Thought 3 of 8`, then `Pause`, `Skip this one`, `Quit` (44 px). P pauses, Esc quits, focus moves to each round's first control. Holds work with pointer and with Space/Enter held. Every timed round has an untimed path in calm mode. Cards are armed for 600 ms so a mashed key can't skip them.

## Budget
Same module path (`assets/js/about-game.js`), dynamic import on Press start, ≤ 30 KB gz, DOM only, no assets.
