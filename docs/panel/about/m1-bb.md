# M1 · BB (brand): loop 1, propose

## Concept I back

**A stream of 5-second microgames, one per thought, called "Fix it." (working title).** Think WarioWare with a deadpan narrator. Each thought is a rule you obey, not a caption you read. Visitor plays 8 thoughts drawn from the 24 published rows, then gets a "How you think" card. Runner Baseline is dropped as the spine (keep its engine: canvas, loop, overlay, calm mode).

- **Core verbs:** tap/click one target, drag one slider, pick one of three. One input per microgame, same on phone and keyboard (Tap / Space or 1-2-3 / arrow keys).
- **Loop:** thought sentence (his words, DOM text) -> 5 s rule -> instant verdict line -> next. Miss and it simply shows "Not quite. Next." No lives, no fail.
- **One play:** 8 thoughts, about 90 s. Always opens with row 1 (8:33) as the tutorial, so the first thing you do is set a meeting to 8:33. Other 7 shuffled, at most 1 Bahasa row per play, which links out.
- **End:** "How you think" card: three patterns from THOUGHTS.md (friction as design, himself as puzzle, shrink the unit), the visitor's closest one highlighted, plus links to the 8 pages they played.
- **Links:** every played published thought ends with `Read it ->` to its page. End card carries the newsletter line once.
- **Play twice:** different 7 each time (24 pool), plus a "collect all 24" shelf kept in localStorage (try/catch).
- **Degrades:** no canvas needed; microgames are DOM. Calm mode: no timers moving, 5 s becomes "take your time". Skip, Pause, Quit always present.

## Mechanics for the safe thoughts (BB approved list)

| # | Mechanic |
|---|---|
| 1 | Dial the meeting start; only 8:33 clicks "yes". |
| 7 | Inbox bar fills; at 5:00 tap "Sorry, closing" and walk out. |
| 8 | Spot the typewriter-monospace line among three notary pages. The target is the font, never a person. |
| 12 | Tap the cafe signs before 8 AM; most say "opens 9". Deadpan, no venue named. |
| 14 | Score keyboards 1-5 on three criteria; the winner scores only 23. No brand names. |
| 17 | Drag the water-station car to km marks around a palace wall (no uniform imagery). |
| 29 | Order three storage methods: brain, wall, paper. |
| 30 | Pick the safe-for-work prank by cost and time. Only harmless ones. |
| 18 (BI) | Three alarms, bat becomes chicken. Bahasa, essay `lang`. |

Also fine: 3, 4, 5, 6, 9, 10, 11, 13, 15, 16, 19-22 as short pick-one rules.

## Tone: weird in a good way, never mocking

- **Obese doctor (2):** do not draw or name a body, no sprite. Use his own mechanic metaphor: a car with a flashing light, "who fixes the mechanic's car?". Ends on the open question. Never a weight joke.
- **Insects (3):** the joke is the human prejudice ("insect" as insult). Insects can be cute outlines. Never squash, never a kill mechanic. Mechanic: swap the insult for a better word.
- **Notaries (8), cafes (12):** target the ritual, not the profession or any real venue.
- **Keyboards (14):** no brand logos or named products.
- **Tokopedia/Oura (10):** use "a rare thing" and generic marketplace icon. No logo.
- **Patrol car (16):** plain silhouette, no military insignia (arcade-round ruling stays).
- **Mobile Legends (15):** self-joke only: he is the one who uninstalls. No player is the target, no real art.
- **Pranks (30):** nothing that humiliates a person.

## Gated rows 23-28

- **Built in, but default OFF** behind a `PUBLISHED` flag per row. The game must be complete and good with the 24.
- **24 (needs-ganis-ok):** do not ship, do not even draft on-screen copy, until Ganis approves that exact line.
- **25 (writing as thinking):** tempting as the premise. Do not build the game around it; gated rows must not carry the frame.
- 23, 26, 27, 28: each needs a "yes" per exact line; 26 mentions UGM, 28 a film. Low risk, still gated.

## Synetica / business / privacy

- Rows 13, 19, 21 are business-adjacent but published essays. Allowed, no logo, no pitch, no company as enemy. Row 21 as a pick-one ("why do clients choose you?") is fine.
- Row 13: keep "I guess", never state 25-45% as a fact.
- Row 20 (Pakuningratan no. 15): show the thought, no street address, no house image.
- Row 4: ages only, no family. No sprites of family or colleagues anywhere.
- No personal data collected; no network; localStorage only for the shelf.

## Must-nots

- No invented thoughts, scores or punchlines attributed to him; verdict lines only restate the row.
- No gated row live without per-line approval.
- No Synetica banner, no ad, no CTA beyond newsletter once.
- No mockery of a body, profession, venue, product or player.
- No flashing, no sound by default, no timer pressure in calm mode.

## Top 3 must-haves

1. **Per-row `published` and `sensitivity` flags in the data**, with the game built and tested on the 24 alone.
2. **Every played thought links to its page**, and thought text comes from the DOM or data, quoted or faithfully paraphrased.
3. **Tone review of rows 2, 3, 8, 12, 16 before build**: written verdict lines for each, approved by Ganis.
