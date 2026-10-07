# m1 · IxD · Loop 1 (propose)

**Backing: a WarioWare-style deck of nine 10-to-15-second thought toys, built as DOM controls, not a canvas runner.** Working title: *Hold That Thought*.

## Why not Baseline's engine
A canvas with one button can't carry thought-mechanics. Hop is the only verb, and a canvas is invisible to screen readers and awkward at 375px. The thoughts need choosing, dragging, sorting, holding and timing. Those are native controls (buttons, sliders, radios, a list) with a thin pointer-drag layer on top. Keep from Baseline: overlay shell, focus trap, pause, quit, skip, calm mode, dynamic import.

## Concept
- **Genre:** microgame deck. Each toy is one thought turned into one small rule.
- **Verbs by input type:** choose, drag, sort, hold, tap-on-beat, scrub. No toy uses jump.
- **Loop:** card (the thought, in his words, with `lang`) → toy (10 to 15 s) → result line (his punchline, then a link) → next. Nine toys per play, drawn 3 per pattern (friction / own mind / shrink the unit) from the 24 published thoughts. Play 1 is a fixed best-of nine so the first read is sharp. Replays are seeded-random, so different thoughts and a different order.
- **Ends:** the "tray": nine thoughts as a list of links, one per essay or question, plus the newsletter line. Nothing is scored against the visitor. Replay says "Another nine".

## Toy specs (input, phone / keyboard)
| # | Toy | Phone | Keyboard |
|---|---|---|---|
| 1 | **8:33.** Slide the meeting length; 15, 30, 60 each bounce, 23 locks. | drag thumb on a range | Left/Right, Enter |
| 8 | **Notary.** Three document snippets; find the typewriter one. | tap | 1/2/3 or Tab+Enter |
| 14 | **Keyboards.** Score cards 1 to 5; the winner lands on 23. | tap a score chip | number keys |
| 7 | **Librarian.** Queue builds; clock hits 17:00; press Apologise once, then Go home (hold). | tap, then long-press | Space, hold Enter |
| 23* / 5 | **Shrink the unit.** Drag the 5 km route end back to 1 km. | drag handle | Down/Left |
| 5 | **Default share.** Everything starts public; tap to hide. | tap rows | Space on row |
| 10 | **Bot.** Watch a refresh list; tap when the rare item appears. | tap | Space |
| 15 | **Uninstall.** Hold to uninstall; it reinstalls. Deadpan. | hold 1.5 s | hold Enter |
| 2 | **Obese doctor.** Strike out the obvious answers; the gap stays. | tap to strike | Space |

*23 is gated; the 24 published rows alone fill the deck.

## Must-nots
- No input that **only** works by drag or by timing. Every drag has a button/key equivalent; every timing toy has a "wait for me" step.
- No fail state, lives or countdown that ends a run. Timers pace the toy; running out grades gently ("close") and moves on.
- No flashing, shake, or sound by default; no hover-only affordances.
- No vertical scroll inside the game, no scroll hijack. `touch-action: none` only on drag handles.
- No target under 44 px; no text smaller than 16 px.

## Controls, focus, escapes
- **Always on screen, top bar:** Pause, Skip this thought, Quit. Skip to the page is one press from the pause card. Esc = pause; Esc twice = quit. Quit returns focus to Press start.
- Dialog role, focus trap, first control focused per toy. Result and card text in an `aria-live="polite"` region; thought text is real DOM (selectable, zoomable to 200%).
- **Thumb zone:** primary action in the bottom third; Skip top-right, never near the primary button.
- One-handed play works. Landscape works. 375px, light and dark.

## Calm mode (reduced motion)
- No timers at all: toys wait until you act. No easing, no moving parts; state changes are instant. Hold toys become two-press (press, confirm). Beat toys become sequential taps with no tempo.
- Same 9 thoughts, same links. Calm is a full game, not a fallback.

## Degrade
No JS: Press start is hidden and the page reads as today. Import fails: the button reverts and the page is untouched. Narrow: single column. Slow device: no per-frame loop, since toys are event-driven, so the budget is small (est. 12 to 16 KB gz).

## Top 3 must-haves
1. **Every toy playable with a keyboard and with one thumb, with a non-drag, non-timed path.**
2. **Pause, Skip this thought and Quit visible in every state, including the result card.** No state without an exit.
3. **Calm mode removes all time pressure and keeps the full content.**

Confidence the deck beats a runner for IxD: 8/10. Risk: nine rule sets means nine tutorials. Fix: one line of rule on the card, max 8 words ("Find the typewriter.").
