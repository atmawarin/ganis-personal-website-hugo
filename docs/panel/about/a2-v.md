# A2, V (voice): review of Baseline

**SCORE 7.5/10 · SIGN-OFF: no (five small string fixes, all in about-game.js)**

## What works
- Every plan string is present and exact: title, subtitle, `Press start`, both hints, `Paused`/`Resume`, `Skip to the page`, `Quit`, `Level n of 9`, `Tap/Space to keep running`, `Ouch.` once per run, `Day n of 5`, `Employee #13` / `Ninety people`, `km n of 42`, `The last 11 km.`, `Uninstalling`, `That's as far as the map goes.`, `Your time`, `Play again`, `Back to the page`, calm note.
- Card text is read from the page `li`, never retyped. The Garnisun to GANIS letters match the page fact.
- Zero em dashes, no exclamation marks, no "game over", no one is an enemy, family and colleagues not drawn.
- Tone is quiet. End card closes on the page, not a score.

## MUST-FIX (invented text, all in `assets/js/about-game.js`)
1. **Line 429**: `this.flashText("Akubu: double jump", 1.6)` is invented and puts Akubu in a mechanic label. Change to `this.flashText("Jump twice.", 1.6)`. Keep the `Akubu` road sign (page word).
2. **Line 502**: `"Papua to Jakarta"` / `"And back"` are invented. Replace the line with `else if (Z.flipAt) m = "Back and forth";` (page's own words).
3. **Line 503**: `"The bridge, again"` is invented. Change to `m = this.zt < 6 ? "The bridge" : "It hadn’t changed.";` (page's sentence).
4. **Line 271**: kicker `Nine levels · about two minutes` makes a time claim that stumbles and card reading break, and is not in the plan. Change to `<p class="bl__kicker">Nine levels</p>`.
5. **Canvas labels vs plan strings.** `WATER` (line 657) duplicates the flash and is not `Water.`; `ASSUMPTION`/`TESTED` (line 721) and `UNINSTALLING` (line 731) are shouted versions of the plan's `assumption` / `tested` / `Uninstalling`. Change:
   - line 657: `this.text("Water.", x, G - 22, 6, c.muted, flip);`
   - line 721: `o.tested ? "tested" : "assumption"`
   - line 731: `"Uninstalling"`
   The HUD meter is already uppercased by CSS, so the canvas should carry the real casing.

## Should-fix (small)
- **Line 505, `${n} tested` meter**: a count not in the plan. Acceptable, but if you want it strictly on-plan, show `assumption` before the first clear and `tested` after (`this.obs.some((o) => o.tested) ? "tested" : "assumption"`).
- **Line 507**: `Still running` is the page's phrase, fine. Keep.
- **Zone 5 and zone 2 HUD**: zone 5 shows no meter until `Akubu` flashes. Fine, no invention. Leave.

## Nice-to-have
- Pause card kicker could read `Level 4 of 9 · Yogyakarta` to match the top bar; not required.
- Title note `Esc to quit.` is not in the plan hint strings; it is useful and honest, keep it, but record it in PLAN.
- Screen-reader line says `cleared`; fine for aria-live only, it never shows.

## Verdict
After items 1 to 5 (about ten lines), the copy is 100 percent page facts or plan strings. Sign-off yes on re-check.
