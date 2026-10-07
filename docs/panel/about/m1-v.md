# M1 · V (voice) · loop 1

**I back: "Hmm." a stack of one-button microgames, each one a thought from THOUGHTS.md.** Reject: another runner with a card per zone (that is Baseline's captions again).

## Concept (voice lens)
- **Genre:** WarioWare-style microgames, 6 to 9 seconds each. **The thought is the rule.** The prompt is one imperative, the result line is his words.
- **Core verbs:** tap, hold, drag. One verb per thought, taught by the prompt alone.
- **Controls:** phone = tap / hold / drag one slider. Keyboard = Space / Enter, Left/Right for the slider, P pause, Esc quit, S skip thought.
- **Loop:** prompt (1 s, DOM text) -> play (6 to 9 s) -> result line with his sentence and a tiny "read it" link -> next. No fail state: miss and the thought just lands anyway.
- **One play:** 8 thoughts drawn from the 24 published rows (never fewer than one from each of his three patterns: friction, himself, shrink-the-unit). Pool of 24 means about 3 plays before repeats.
- **End:** the board of 8 as a list of his sentences, each linked. One line, one newsletter link. Nothing scored against the visitor.
- **Why twice:** different 8, speed ups, and a hidden "weird-o-meter" that is just which pattern you played most ("Mostly: friction").
- **Degrades:** calm mode = no timers, same verbs untimed; JS off = the page's own list stays.

## Microgame to row map (all published)
| Row | Prompt (exact) | Mechanic |
|---|---|---|
| 1 | `Start the meeting at 8:33.` | Drag a dial to 8:33 (not 8:30). Result: "Say 'the 8.23 meeting'. It sounds better than 'daily scrum'." |
| 8 | `Find the typewriter.` | Tap the one monospace line among serif notary text. |
| 7 | `It is 5 PM. Apologise. Go home.` | Queue of asks grows; tap Apologise once at 17:00. |
| 12 | `Find a cafe open before 8.` | Tap doors; every sign says closed. Result gives his guess about looks vs fuel. |
| 10 | `Wait for the rare one.` | Hold watch; tap when the item pings. |
| 17 | `Be the water station.` | Tap to drop water as a runner passes the car. |
| 14 | `Score the keyboard.` | Drag a slider, five keyboards, keep five of seventy-one. No invented scores. |
| 4 | `Tell the 20-year-old.` | Hold: 25 scowls, 35 beams. Release at 35. |
| 5 | `Choose the default.` | Toggle share/private; the rest of the screen fills accordingly. |
| 15 | `Uninstall it. Again.` | Tap-hold an icon; it comes back. Self-joke. |
| 18, 19, 20, 22 | Bahasa result lines only, unchanged. |

## Exact strings
- **Title:** `Hmm.`
- **Subtitle:** `Two minutes inside a head that asks why.`
- **Start button:** `Press start`
- **Hint (keyboard / touch):** `Space or tap. Esc to quit.` / `Tap, hold or drag. One thing at a time.`
- **Between-thought line:** `Next thought.`
- **Pause:** `Paused` / `Resume` / `Skip this one` / `Quit`
- **Calm:** `Calm mode is on. Same thoughts, no timer.`
- **End title:** `That was eight.`
- **End body:** `The rest are on the page. Some of them I still can't answer.`
- **End actions:** `Read the questions` (to /questions-and-ideas/), `Get the newsletter` (existing subscribe), `Play again` (new eight), `Back to the page`.
- **Pattern tag (end):** `Mostly: friction.` / `Mostly: myself.` / `Mostly: smaller.`
- **Result line rule:** his sentence verbatim from the page, max 18 words, ends with `Read it` link to the essay or question. Questions keep their "?"; no em dashes anywhere.

## Bahasa rule
Rows 18, 19, 20, 22 render only as the result line, in Indonesian, with `lang="id"` on that element. English prompt, Indonesian reward: `Saya kelelawar yang memutuskan jadi ayam.` The prompt in English is allowed to be a game cue only (`Wake up. Again.`), never a translation of his sentence.

## Must-nots
1. No invented thought, number or score. Every result line is lifted from the row's source page.
2. No caption-only screens: a thought with no verb is cut.
3. No dig at Mobile Legends players, doctors, notaries, cafes or insects; the joke is on him ("Uninstall it. Again.").
4. No em dashes, no hype ("weird!", "mind-blowing"), no "you got X%".
5. No unpublished rows (23 to 28) live without Ganis's okay on the exact line; row 24 stays out.

## Top 3 must-haves
1. **Every thought is a verb.** If the visitor can't play it in one sentence of prompt, it is not in.
2. **Result line is his sentence plus a link**, so the second read happens.
3. **The end screen states the pattern, not a score**, and offers the questions page and newsletter in plain words.
