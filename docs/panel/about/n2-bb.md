# N2 · BB (brand): loop 2, review of "Hmm."

**SCORE 9/10 · SIGN-OFF yes** (no brand or privacy blocker; one small must-fix on honesty of the stamps)

## What works
- **Gated rows: clean.** `data/thoughts.yaml` holds 12 items, all published questions, ideas and essays. "Journal" appears only in a comment saying they stay out. Nothing from rows 23 to 28 is in the YAML, JS, layout or JSON script.
- **Words are his, verbatim.** Checked all 7 question/idea titles (emoji stripped) and the essay deks/descriptions (keyboards, garnisun, uninstall, both Bahasa) against `content/`. All match. `lang="id"` is set on the card and the end list. No verdict line is invented; the only new copy is stamps, the end line and prop labels.
- **Obese doctor:** no body drawn. The props are his own three, Knowledge, Motivation, Willpower, struck out, and the blank `?` stays. It always ends `Still open`. That is the right tone.
- **Notary and cafe:** the target is the ritual. No profession mocked, no venue named, no Yogyakarta claim made in the round.
- **Mobile Legends:** a self-joke only. The "ML" tile is plain mono lettering, no logo or game art, and the card quote is his own dek.
- **Share props:** "Bank PIN" and "Password" are generic labels. Hiding them is the lesson, and no real data is read or stored.
- **Berbeda prices:** Rp 23.000 to 25.000 with no brand or shop name. The odd cup is a bare `?`. It reads as a prop, not a claim.
- **Privacy:** no network call, and localStorage holds only the met-ids, in try/catch. No Synetica pitch. The newsletter link appears once, on the end card.
- **Bahasa cap:** `deal()` enforces at most one `id` round.

## MUST-FIX
1. **Skips are stamped as if the thought stayed open.**
   - File: `assets/js/about-game.js`, `finish(won, skipped)`, around lines 569 to 570. The end list at about line 596 repeats the problem.
   - Today a skipped round gives `filed = false`, so the card says `Still open` and `met.add(id)` still runs. That tells the visitor the thought is unanswered when they never played it. It also inflates "Met 8 of 12".
   - Change: when `skipped` is true, store `{ id, filed: false, skipped: true }`, show the stamp `Skipped` (reuse the `hm-stamp--open` style), and only call `this.met.add(id)` and `write(this.met)` when `!skipped`.
   - Do the same on the end-list label: `r.skipped ? "Skipped" : …`.
   - Why it matters for brand: `Still open` is the personality line. It should be reserved for thoughts that really have no answer.

## Nice-to-have
- **Tie on "Mostly:"** (`end()`, `sort` on `count`): ties always resolve to `friction` because of key order. Break ties at random, or lead with the pattern of the last round.
- **Typewriter round** shows an Indonesian sample line, `Yang bertanda tangan di bawah ini`, in an English round. It is on-theme and has `lang="id"`. It sits outside the one-Bahasa cap, so a play can show three Indonesian strings. I accept it; if you want it tighter, give it an English line.
- **`berbeda`** has no cheaper-cup feedback, though PLAN-mind promised "a price war". One line, `Rp 23.000. Everyone did that.`, would carry his own "perang harga" tone. Keep it generic and name no one.
- **Berbeda aria-labels** say "Coffee, Rp …". That is fine; just keep it from drifting to a named shop in v2.
- **Share round:** consider a short result note, `Hidden by you, not by default.`, to echo the question. Optional.
- **Keep the `ML` tile out of any share image or OG card** so it stays a text self-joke.

## Verdict
Ship after the skip-stamp fix, which is about 6 lines. Everything else is polish.
