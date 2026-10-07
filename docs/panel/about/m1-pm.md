# m1 · PM (product) · Loop 1 proposal

**I back: "The Question Pile".** A 2-minute stack of index cards. Each card is one of his thoughts, and the 10-second micro-round on it is the thought turned into a verb. Baseline's shell stays; its CV spine goes.

## The four jobs

| Job | How the game does it |
|---|---|
| Entertain / feel like Ganis | Absurdly specific rules (stop at 8:33, apologise at 5:00). Deadpan, no jokes written on top. |
| Second read | Every card that is an essay or question ends "Filed" with a link. The end screen routes to one of them. |
| Newsletter | One line after the pile: more odd thoughts, one email at a time. Points at the existing subscribe form. No network from the game. |
| Quiet Synetica | One plain sentence on the end card, plus the Bahasa card on tech stack (row 21). No logo, no banner. |

## Concept

- **Genre:** micro-rounds on index cards, calm and untimed-feeling. Not WarioWare chaos, and no speed ramp.
- **Three verbs only:** TAP at a moment, PICK one of 2-3, HOLD. Phone is tap and hold. Keyboard is Space (tap/hold) and 1/2/3 (pick). Esc pauses. S skips the card.
- **Loop:** card slides in (his words, in the DOM) -> 10-12 s round -> stamped FILED or STILL OPEN -> next. Stumbling is fine: a miss gets the stamp STILL OPEN, never "fail".
- **Per play:** 6 cards drawn at random from the 9 v1 rounds. 6 thoughts appear in play. The other 3 show as face-down cards on the end screen, titled.
- **Ending:** the pile is spread out. You keep ONE card, and it becomes the link to that essay or question. Under it: newsletter line, Synetica line, Play again.
- **Why twice:** a different 6 of 9, and the face-down cards. No scores, no storage, no tracking.
- **Degrade:** the thoughts already exist as a list on the page, so no-JS loses nothing. Calm mode makes every round untimed and static. Any card skips in one press.

## v1 rounds (published rows only; each mechanic is the thought)

| # | Row | Verb | You do |
|---|---|---|---|
| 1 | 1 · 8:33 | TAP | Stop a plain clock at 8:33. Dull times (9:00, 8:30) hang around as decoys. |
| 2 | 7 · Librarian | HOLD | Requests keep arriving. At 5:00 hold to apologise and go home. Serving after 5 costs you. |
| 3 | 8 · Notary | PICK | Which of 3 notary pages is set in typewriter monospace? |
| 4 | 13 · 25-45% | TAP | Strike lines in a report. The "I guess" band lands at 25-45%. |
| 5 | 5 · Default share | PICK | Same pile of notes twice. Private default: 9 taps. Share default: 2 taps to hide. You feel the flip. |
| 6 | 15 · Mobile Legends | HOLD | Hold to uninstall. The icon quietly comes back. Self-joke, no dig at players. |
| 7 | 17 · Water station | TAP | One-button hop around the Kraton wall; tap at the car for water. This is Baseline's runner, kept as a cameo. |
| 8 | 22 · Dunia kecil (BI) | PICK | Invitations arrive. Decline. The circle around you shrinks. |
| 9 | 21 · Tech stack (BI) | PICK | Sort what the client chose you for. Check the essay's own list before building. |

Keyboards (14), Bat to chicken (18) and Different not better (19) are v1.1. Obese doctor (2) is a read-only pile card, no mechanic.

## Scope and Baseline decision

- **Replace, don't rebuild.** Keep the canvas loop, input, overlay, focus, calm mode and dynamic import. Delete the 9 zones and level cards. Baseline lives on only as round 7.
- **Budget:** 9 rounds x about 2.5 KB gz, plus shell, must come to 30 KB gz or less. If it runs over, cut in this order: 9, 7, 6.
- The row 23-28 lines are out of v1. Nothing unpublished ships without Ganis approving that exact line.

## Risks

- **Reads like a quiz.** Fix: no right-answer sounds, and no score or leaderboard.
- **Nine bespoke rounds is real scope.** Fix: the three verbs share one input layer.
- **A mechanic implies a claim he never made.** Fix: each round carries a trace line (row id, his words). Ganis signs off the table.
- **Tone drifts toward arcade.** Fix: paper and ink, the Baseline look, one red accent.

## My lane spec

- Ship the table above, with a trace comment per round in the source.
- Pick pool: all 9 rounds, random 6, never the same 6 twice in a row.
- End card: keep-one link, one newsletter line, one Synetica sentence, Back to the page.
- Bahasa cards use the essay's own `lang`.

## Must-nots

- No invented thoughts or numbers (9 taps and 2 taps are counts of the game's own notes, not claims).
- No jokes on top of his words; no mocking health or insects as targets.
- No timers that punish on a phone; no flashing; no sound by default.
- No two games shipped at once: Baseline's content goes.

## Top 3 must-haves

1. **Mechanic is the thought.** Each round is traceable to its row, and it plays without the caption.
2. **The end routes.** The kept card links to its essay or question, and the newsletter line is present.
3. **Two minutes, one press out.** Playable by tap alone, skip or quit always visible, 30 KB gz or less.
