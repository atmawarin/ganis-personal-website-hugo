# n2 · PM · Mind round, loop 2 review of "Hmm."

**SCORE 8.5/10 · SIGN-OFF: yes, with the two MUST-FIX below (both are one-line changes)**

## What works

- **It is the game he asked for.** Each round turns a thought into a rule: 8:33, the 5 PM apology, uninstall that comes back. You think the way he thinks, then read his words. That matches "think the weird things I think", and it does not read as a CV.
- **Plan followed.** Twelve rounds, eight per play. 8:33 is always first and uninstall always last. The middle six are random, with no repeated verb and at most one Bahasa round (`deal()`). Cafe, doctor and uninstall always end "Still open", which is the personality.
- **Never invented.** `data/thoughts.yaml` carries only published lines. I checked every essay line against its front matter (`dek` or `description`) and the question titles against their files. Rows 23 to 28 are absent. No thought text lives in the JS bundle.
- **Second read is real.** Every card links to its source. All seven question anchors resolve, since the question list renders 21 `id`s. The end screen lists the eight with their stamps.
- **Newsletter and questions routes are on the end card** (`/newsletter/` exists). No Synetica pitch inside a toy, as BB asked.
- **Replay hook:** the "Met N of 12" shelf in localStorage with try/catch. Controls: pause, skip and quit stay one press away, calm mode has no timer. The bot's three clean runs and no overflow back that up.

## MUST-FIX

1. **"Read it" on a card throws the player out of the run.**
   - File: `assets/js/about-game.js`, `finish()`, the line `<a class="hm-read" href="${esc(T.href)}">Read it</a>`.
   - Change: add `target="_blank" rel="noopener"`.
   - Why: second read is a job, but a same-tab click kills the run at thought 3 of 8 and the visitor never reaches the end card, which holds the newsletter route. A new tab serves both jobs. Do the same for the `<a>` inside the `end()` list (`hm-list`), so the eight links don't leave the end card.

2. **`deal()` can silently ship a run that breaks its own rules.**
   - File: `assets/js/about-game.js`, `deal()`.
   - Change: after the 60-try loop, if `ok` was never true, fall back to a fixed valid order (for example `[FIRST, ...a known good mid, LAST]`) instead of using the last failed shuffle. The simplest form is to track `ok` and, when false, reuse the last run that passed.
   - Why: the constraint is soft today, so two Bahasa rounds or a repeated verb can occur. This is rare, but the plan says "at most one Bahasa" and "no same verb twice".

## Nice-to-haves (not blocking)

- **"Mostly: …" ties.** `Object.entries(...).sort` picks the first key on a tie (friction wins). With eight rounds, 3/3/2 is common. Either say "Mostly: friction and myself." on ties, or leave it. It is a small, honest joke.
- **Berbeda was never seen rendered.** Please play it once by hand before pushing, because only code review covers it.
- **Bahasa on the card.** The kicker says "Esai · Juli 2019" in Bahasa, which is right. The "Filed / Still open" stamp and "Next thought." stay English. This is acceptable for v1, and it is a note for V.
- **v2 pool** (weed-out, insects, theme park, bot, to-do list, pranks) stays parked. Add one only if replay data shows people hit "Met 12 of 12".
- **Row 24** (Mobile Legends "make it matter") stays out until Ganis approves that exact line. The uninstall round already covers the self-joke from the published essay.

## Scope check

Nothing missing for v1. The four jobs are covered: feel like Ganis, second read, newsletter, and a quiet page. No tracking, no network, no sound.
