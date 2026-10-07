# n2-sd: Design seat, mind round, loop 2 (review)

**SCORE 7.5/10 · SIGN-OFF: no (two small CSS must-fixes, then yes)**

## What works
- **It reads as this site.** Fraunces prompts, Plex Mono kickers, ink hairlines, one red. The shared `--red` token holds in both themes (`#c23a20` / `#ff7552`).
- **Rounds are bare paper; the card is the only boxed thing.** The offset-shadow panel (`.bl__panel`) makes the card feel like a filed slip. That is the right rhythm: play loose, read framed.
- **Timer bar is quiet.** 3 px, red, no numbers, no shame (desktop `a-r2`, `b-r6`).
- **Rounds carry real controls.** 48 px hit targets, dashed "shut" doors, struck letters. Type scale is consistent (prompt clamp 1.9 to 3rem, quote 1.35 to 1.75rem).
- **End card.** The numbered, linked list with Filed / Still open tags is the page I wanted from the pitch. 375 dark `m-end` is clean.
- **Dark mode** is designed, not patched; contrast is fine on all screens seen.

## MUST-FIX
1. **Timer track stops short on the right.** In `b-r6` and `m-r5` the grey track ends about 24 px before the edge. `flex-basis: 100%` plus `margin: 0 -12px` does not widen the item.
   - File: `assets/css/main.css`, rule `.hm__time`.
   - Change: replace `flex-basis: 100%; ... margin: 0 -12px;` with `flex: 0 0 calc(100% + 24px); margin: 0 -12px;`.
2. **At 375 the top bar wraps to two rows** (`m-r5`, `m-r7`): `HMM. THOUGHT 5 OF 8` on row 1, `PAUSE / SKIP THIS ONE / QUIT` on row 2. That costs about 44 px of the stage and puts the timer under the second row.
   - File: `assets/css/main.css`, add after `.bl__btns button[data-bl="quit"]`:
     `@media (max-width: 480px) { .bl__bar { gap: 0 6px; letter-spacing: 0.04em; font-size: 0.68rem; } .bl__btns button { padding: 0 6px; } }`
   - File: `assets/js/about-game.js` line 493: use `Hmm. ${this.i + 1}/${this.run.length}` below 480 px (`matchMedia`), or drop the word "Thought" from the bar and keep it on the card kicker. The aim is one row at 375.
3. **Two button languages inside one round** (`a-r7`, `m-r7`). `Serve the next one` is a serif `.hm-btn`; `Apologise and go home` is a mono-caps red `.play-btn`, disabled to grey. They read as unrelated.
   - File: `assets/js/about-game.js` line 61: add `play-btn`-style mono caps to the secondary, or make both `hm-btn`.
   - Simplest: line 62 becomes `class="hm-btn hm-btn--go"` and add `.hm-btn--go:not(:disabled) { border-color: var(--red); color: var(--red); } .hm-btn:disabled { color: var(--muted); border-color: var(--rule); }`.
   - Rule to keep: red mono caps means "commit" (Start it, Hold, Next). Serif boxes mean "choose" or "step".

## Should-fix (clear improvements, not blocking)
- **Alarm buttons before they ring** (`a-r5`) are `--rule` border plus `--muted` text: 3 faint chips that look disabled and are hard to find on first sight. File `main.css` `.hm-alarm`: border `var(--muted)`, keep the text muted. The ringing state still wins through red and 3 px.
- **Desktop empty space.** The round column is 40rem, left-aligned in a 1280 canvas, with the content block floating mid-height. It is calm and on brand, but `a-r2` and `a-r5` feel sparse. Try `.hm__round { max-width: 44rem; }` and nothing else. Do not fill the space.
- **Cafe doors** (`.hm-door`, 0.8rem mono caps `CAFE` x6) read as a form grid, not a street. Fine for v1.

## Nice-to-have
- Match the title-card shadow offset (10 px) to `.player` (6 px) for a single card shadow.
- Hover on `.hm-btn` flips only the border to red; add `color: var(--red)` for consistency with `.play-btn`.
- Berbeda's round is untested visually. Check `.hm-cup--odd` (50% radius, red) at 375 with 4 columns collapsing to 2.

Verdict: the deck looks like the site and the card/round split is right. Fix 1 to 3 and I sign.
