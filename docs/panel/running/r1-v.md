# R1 · V seat (Editor, voice) · /running/

## Thesis

**The page is a diary entry that happens to have a dashboard behind it. Lead with 2026 numbers, keep Ganis's prose almost untouched, and let the log keep its own loud voice.**
The existing copy is the best thing on the page: deadpan, specific, ends on a quiet turn. What fails is the numbers (stale, and two of the four contradict the log). Fix facts, not voice.

## Facts audit (sources: data/stats.json, data/summary.json, race stubs)

| Page says | Log says | Verdict |
|---|---|---|
| 1,123 km in 2021 | stats.json full_year_2021 = **944.4 km, 180 runs**. summary.json 2021 months sum to 944.4. | **Conflicts.** Cut. Do not "correct" it silently either; 1,123 may be a pre-Strava-merge figure. Ganis to confirm. |
| 99 runs, Jan to Jul 2019 | summary.json Jan to Jul 2019 = **135 runs** | **Conflicts.** Cut. |
| 1:02 best 10K | Ambarrukmo stub says the same ("1:02. My best 10K so far") | Real, in the site's own text. Keep. |
| 5:17 | Only the 2022 wish ("Run earlier: 5:17") | Real as a wish, not a result. Keep as the joke it is. |

Real current facts (stats.json, `updated_at` 2026-09-27, ten days old today):
- 2026 YTD: **90 runs, 341.9 km, 52.2 h**.
- Same point in 2025: 57 runs, 127.6 km. Full 2025: 68 runs, 153.6 km.
- Best year 2021: 180 runs, 944.4 km, 122.0 h. Same period of 2021: 141 runs, 683.4 km.
- Last run 2026-09-26, 13.95 km (pace field "9.40", unit unverified, do not print).
- All time (summing summary.json months, Oct 2017 to Sep 2026): 1,006 runs, 4,225 km, about 603 h. **Derived by me, not stored anywhere; flag, or read it from the log at build time.**
- weekly_goal 3 (per week). Week figures (6 runs, 34.8 km) go stale in days: **do not show.**

## Exact copy spec for /running/

**Slug (pretitle):** keep, "The one thing that holds the day together".

**Dek (description):** keep verbatim. "Slow miles, mostly before six in the morning, mostly around Yogyakarta. Not for performance, not really for health. Running is just running."
Flag: "before six" and "Yogyakarta" are consistent with the 5:17 wish and the stubs. Fine.

**Stats block (four cells, in this order):**

| n | label | source | status |
|---|---|---|---|
| 341.9 | km so far in 2026, over 90 runs | stats.json ytd_2026 | real; fed from the log, not hand-typed |
| 127.6 | km in the same stretch of 2025. I'm up, which I did not plan | stats.json ytd_2025_same_period | real; the quip is evaluative only, no new fact |
| 944 | km in 2021, my best year so far. The bar | stats.json full_year_2021 (rounded from 944.4) | real; replaces 1,123 |
| 1:02 | best 10K, which I will now defend forever | stub | keep verbatim |

Drop the 5:17 cell from the stats; it lives in the list below. Drop "99 runs".
Formatting: label sentence case, no trailing period, straight quotes, no em dashes.
**Needs Ganis:** (1) confirm 944 km is the 2021 truth versus 1,123; (2) approve printing a "so far" number that is only as fresh as the last sync. If the numbers are build-time snapshots, add a quiet line under the block: "As of 27 Sep 2026, from the log." (date from `updated_at`, never hard-coded).

**CTA (replace "Open the live running log →"):** "See every run in the live log →"
Reason: names what is behind the click. Keep the arrow, keep it a text link at 40px+ target. Second option if Ganis wants sharper: "Check whether I actually ran today →" (closer to the dashboard's "did you run? let's see"). I recommend the first for the button, the second only as the closing line (see below).

**Intro paragraphs:**
- P1 ("I run alone, early...") **keep verbatim.** The "first thing I negotiate my way out of" line is the page's best sentence.
- P2 ("When the run happens...") **keep verbatim.** Matches CLAUDE.md's stated pattern; the "hasn't stopped me checking the phone first" turn lands.
- 2022 list: **reframe, keep list verbatim.** Change only the lead-in to "**What I wanted in 2022**, kept as a public record of my optimism:" (drop "here"; tighter). Do not edit any item. Keep "I managed some of these. I'm not saying which." Note: the log does not let anyone verify these, which is the joke; do not add a verdict.
- Closing paragraph: tighten to "The live log is where my phone posts every run as it happens. It's very honest, which is more than I can say for my memory." Same joke, one clause shorter. Then the CTA.

## Ruling: does the dashboard voice fit?

**It jars in register, not in spirit. Verdict: leave it, bridge it with one line.**
- Shared DNA: deadpan self-mockery ("No judgment. (Okay, maybe a little.)", "Let's see if past-you was lying to future-you again", "We don't talk about 2022").
- Difference: the dashboard is second person, shouty, ALL CAPS nav, arcade-coach energy. The site is first person, quiet, sentence case. The visitor is addressed as "you" the runner, but the runner is Ganis. Slightly confusing, mostly charming.
- Do not rewrite dashboard copy as part of this task. The Bayer / Schmidt / Moholy-Nagy tributes are design-nerd credits and fit the site's own love of Bauhaus references; keep.
- Bridge: the closing paragraph above already primes "very honest"; that is enough. Optional: a one-line handoff before the CTA, "It talks to me in the second person. Ignore that." **Only if Ganis wants it; it is a new joke, flag as his call.**
- One fact check for the log's own copy (not for this task): "when you only ran 18 times the whole year ... 2022" is stated as fact. I did not verify it against summary.json; if Ganis owns the log copy, check before it is amplified by a bigger page.

## Race log copy

Six stubs are clean, factual, deadpan. Keep all verbatim. Notes only: "Ambarrukmo" stub is where 1:02 lives, so the stats cell and the stub agree. Volcano Run 2020 "3:45, my third half marathon" is consistent with 2019 Volcano + Waduk Sermo = 2 before it. Good. No edits.

## Must-nots

- No em dashes, no semicolon-stuffed taglines, no straight "wins" language ("crushing it", "on track"). No hype about being up on 2025; 341.9 vs 127.6 gets one wry label and stops.
- Do not invent any number, date, pace, location or comparison. Pace "9.40" and week figures stay out.
- Do not print precise run dates, times or locations on this page (BB owns privacy; copy must not imply them).
- No "journey", "passion", "consistency is key", no motivational closer. No emoji.
- No "x% better" derived stats unless Ganis asks; 2.7x is arithmetic but not a stored fact.
- Do not rewrite dashboard headlines inside this change.
- Do not reorder the page so the 2022 list or the stubs become a feature; they are the texture, the numbers are the hook.

## Top 3 must-haves

1. **Replace the two contradicted stats** (1,123 km, 99 runs) with 2026 YTD and 2021 944.4 from the log, plus build-time "as of" date. Wrong numbers on a page that says "it's very honest" is the one real embarrassment.
2. **Keep P1, P2 and the 2022 list word for word.** That is the voice. Edit only the lead-in and the closing paragraph.
3. **CTA that says what is behind it** ("See every run in the live log →"), positioned right after the stats and again after the closing paragraph, not a lone small button.

## Recommendation

Ship the copy above. Confidence 8/10 on voice calls, 6/10 on the 2021 figure until Ganis confirms 944 vs 1,123.
Next step for Ganis: (a) confirm 944 km, (b) say yes or no to the optional "second person" handoff line, (c) decide snapshot versus live fetch for the stats, with the as-of date if snapshot.
