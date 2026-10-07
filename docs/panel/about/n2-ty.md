# n2-ty: TY review, Hmm., loop 2

**SCORE 7.5/10 | SIGN-OFF: no (five small fixes, all type)**

## What works
- All thought text is DOM, verbatim from data/thoughts.yaml, none in the JS. Quotes set in the display face at 1.35 to 1.75rem with `text-wrap: balance` hold a good measure at 375.
- Bahasa quotes and end-list items carry `lang="id"`; typewriter round lines are in Bahasa with `lang="id"`, which suits the notary joke.
- Face logic is right: mono only on clock, counter, doors, alarms; Fraunces for prompts and quotes; stamps are mono caps.
- Timer is a bar, never digits. No reveal animation. Cards armed 600 ms.

## MUST-FIX
1. **Straight apostrophes in prompts** (about-game.js, ROUNDS): `"It's 5 PM. Apologise. Go home."`, `"It's 7:40. Find a cafe that's open."`, `"Who's proud of the 20-year-old?"`. The end card already uses a curly one. Change to `It’s`, `that’s`, `Who’s` (use the real character). Do not touch yaml text (verbatim).
2. **Card kicker breaks inside the date at 375** (m-r2-card: "JULY / 2022"). In `finish()` change the kicker to `${esc(T.kind)} · ${esc(T.when)}` (drop "Thought N of 8"; the bar already says it) and add `white-space: nowrap` to a `<span>` around `T.when`, or `.bl__kicker` `text-wrap: balance`.
3. **Bahasa kicker has no lang.** about-game.js: in `next()` set `this.kicker.lang = T.lang || ""`; in `finish()` add `${T.lang ? ` lang="${T.lang}"` : ""}` on the card kicker element. "Esai", "Juli 2019" are read with an English voice otherwise.
4. **GARNISUN splits mid-word at 375.** 8 x 52px + gaps > 343px, so it wraps to GARNIS / UN. main.css: `.hm-letters { flex-wrap: nowrap; gap: 4px; width: 100%; }` and `.hm-letter { flex: 1 1 0; min-width: 0; width: auto; max-width: 52px; padding: 0; }` (`.hm-btn` min-width 48px must be overridden; 40px wide by 48px tall is fine).
5. **Typewriter round is unanswerable by screen reader**: three identical buttons. about-game.js typewriter: add `aria-label="Line set in ${{serif:"a serif",sans:"a sans",mono:"monospace"}[f]}"` on each button. Spoils nothing for sighted players; SR users get the same task.

## SHOULD-FIX (small, real)
- `.hm-mini` (main.css) is 0.66rem (10.5px) muted: below the 11px floor. Set 0.72rem. In `end()` also put `lang="en"` on the `.hm-mini` span, else "Filed" is read as Bahasa inside the `lang="id"` item.
- `.hm-alarm` border is `var(--rule)`: at rest the three alarms are near invisible on dark (m-r3). Use `border-color: var(--muted)`; keep the red ring for ringing.
- `.hm-note` 0.78rem muted ("Served 0") is the only live status in librarian; raise to 0.8rem and `var(--ink-2)`.

## Nice-to-have
- End kicker `Mostly: friction. · Met 9 of 12` has a stray full stop before the dot; `Mostly: friction · Met 9 of 12` reads cleaner.
- Title note says "Esc to quit" on touch; hide under `(hover: none)`.
- End list is long at 375 (about two screens); consider `.hm-list` 0.95rem and 6px gap.
- Berbeda prices could use `lang="id"` on the cup text.

## Not checked
berbeda render (code only; 2-col cups at 375 look fine by CSS). Contrast of muted on paper in light not measured.
