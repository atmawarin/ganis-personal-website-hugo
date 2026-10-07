# m1-sd: Design seat, loop 1 (propose)

**I back: "Plates", a micro-game per thought, played on specimen sheets.** Baseline's runner has one verb for nine facts. His mind has thirty different verbs. Give each thought its own verb.

## The concept
- **Genre:** WarioWare-style micro-games, dressed as a specimen book. Each thought is one **plate**: a paper card, one ink drawing, one red thing to act on, 8 to 15 seconds.
- **One play = 8 plates**, drawn at random from the published 24 (the gated six only after Ganis approves each line). Every plate is introduced by its thought, set in Fraunces, in his words, with a link on the end card to its page.
- **Controls:** one pointer gesture per plate (tap, drag, hold). Keyboard equivalents: Tab/arrows to move, Space/Enter to act. Always one verb, never two.
- **Fail:** none. A miss gets an ink stamp ("Too short.", "Not quite.") and the plate resets once, then resolves itself and moves on. Nobody is punished for a weird mind.
- **End:** the **Index page**: your 8 plates as a typeset contents list (title, thought, link). The one thing you take away is a page, not a score. `Play again` deals 8 different plates; best of all, `Back to the page`.
- **Replay:** 24 plates, 8 per play, so about three plays before repeats. Some plates have two variants.

## Thoughts as mechanics (examples)
| # | Verb | Plate |
|---|---|---|
| 1 | Drag clock hands | Land on 8:33. 15, 30 and 60 get a stamp. |
| 8 | Tap to re-set | A notary page in monospace; tap each line and it re-sets in Newsreader. |
| 7 | Serve, then stop | Request slips arrive; at 5:00 press `Apologise`, the rest stay in the tray. |
| 14 | Sort | Score keys, keep five of 71. The winner scores 23. |
| 12 | Tap shutters | Every cafe in Yogyakarta is shut at 7:40. Find one open. |
| 23 | Drag a ruler | Shrink 5 km to 1 km. |
| 4 | Tap a timeline | 20, 25, 35: the 35 forgives. |
| 15 | Hold | Hold to uninstall; it comes back. Self-joke only. |

## Look (my lane)
- **Rule: red is the verb.** On every plate exactly one thing is red, and it is the thing you act on. Everything else is ink on paper.
- **Plate anatomy:** paper card with a hairline, Plex Mono caps kicker (`Plate 3 of 8 · Question`, source date), thought in Fraunces 24 to 28 px, ink drawing in SVG strokes, 1.5 px, no fills except the red.
- **Between plates:** the sheet turns (a 280 ms clip-path wipe, instant in calm mode). The 8 plates assemble the Index, so the game is also a book being made.
- **Dark mode:** paper and ink swap by token; red lifts one step (about `#E8503A`) for contrast; hairlines at 30% ink.
- **Chrome:** keep the Baseline overlay (top bar `Pause`, `Skip to the page`, `Quit`, 44 px). Replace `Level n of 9` with `Plate n of 8`.

## Degrade
- Calm mode: no wipes, no wobble; plates are tap-only, no timers (timers become "take your time").
- No JS or load failure: the Press start button stays, and the thoughts already live as the questions-and-ideas pages.
- 375 px: one plate fills the card; drag targets 48 px; no horizontal drag over 280 px of travel.

## Must-nots
- No second red element on a plate; no gradients, neon, pixel fonts, CRT, confetti.
- No flashing, shake, or hit-stop. Wobble at most 2 px, 400 ms, never looping.
- No scoreboard, timer-shame, or "Game over". No sprites of people; the runner is gone.
- No thought text under 16 px; no moving text.
- No invented thought or caption beyond the stamps; stamps are verbs and shrugs ("Too short.") and each needs V's sign-off.
- No emoji. No images; line art is inline SVG, reused as `<symbol>`.

## Top 3 must-haves
1. **One red verb per plate**, one drawing each, one template for all 24 (cost control and the whole look).
2. **The Index page as the ending**: typeset, linked, shareable in the eye, the memory of the visit.
3. **Both themes and calm mode designed first**, not patched; contrast 4.5:1 for the red on both papers.

## Risk
24 bespoke drawings is the cost. Mitigation: ship 12 plates in v1 (the 8 best verbs: 1, 7, 8, 12, 14, 23, 4, 15, plus four), same template, add the rest later.
