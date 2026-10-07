# R3 · TY (Typography): verify PLAN.md

## 1. Verdict
**SCORE 8.5 / 10. WOW 7.5 / 10. SIGN-OFF: no** (yes once the five fixes below are written into PLAN.md).
The grammar is right: one stamp, input-only, year-only dates, no taxonomy. The wow is real but quiet. It lives in two moments (five AGAIN stamps, the red rule). The plan is silent on the type that carries both moments.

## 2. Must-fix
1. **The stamp has no typeface.** Add: "Stamp text is live text, never an image: IBM Plex Mono 500 (already loaded), uppercase, 11px floor on mobile, letter-spacing .14em, 1.5px red border, `mix-blend-mode: multiply` (light) / `screen` at lower alpha (dark). Stamp occupies a reserved slot in the date column, so no layout shift. Tilt is on the stamp box only, never on row text."
2. **Dim to 45% fails legibility.** Replace "dim to 45%" with "dimmed rows switch to a `--ink-soft` colour token that holds 4.5:1 on paper in both themes; no opacity on text." The panel's own "legible" ruling forbids 45% opacity on 80 rows.
3. **Small caps and figures are unspecified.** Add: "Authors: real `smcp` where the face has it; otherwise uppercase at .82em with +.06em tracking. `font-synthesis: none`; no faux small caps. Year in the margin: Fraunces lining figures, `opsz` high, not oldstyle. Mono date column: `tabular-nums lining-nums`. Year-only until dates are confirmed."
4. **Row text rules are missing.** Add: "Title = text before the colon in Fraunces italic; the subtitle after the colon goes in the opened row, not dropped. Description measure 58-66ch, never full card width. Quote-labelled lines use curly quotes (`lang`-aware, Bahasa uses the same marks) and Newsreader italic; *my note* uses a mono label; blurbs set plain."
5. **Font-loading line.** Add: "No new webfont files. Fallback stacks get `size-adjust`/`ascent-override` so the 104 rows do not reflow on swap. The five-stamp pile has one `aria-label` ('Starred five times') and its offsets (±3px, ±2°) keep the top stamp's text fully readable."

## 3. IDEA: Ink runs out
- **Trigger:** the visitor presses `S` or "Stamp the year" (the same input the plan already allows).
- **Motion:** the drumroll keeps its 30ms stagger and 12-row cap. Each successive stamp carries `--ink` from 1.0 down by .06 per row (floor .7). The first row lands saturated, later ones paler and slightly smaller, as if the pad is running dry. Re-inking on the next card resets to 1.0. The AGAIN pile on *Elements of Typographic Style* uses five different `--ink` values, so it reads as five separate impressions.
- **Cost:** opacity only (plus a 0.4px `text-shadow` bleed). It adds no timing and no new mechanism; it is still the single stamp grammar.
- **Fallback:** reduced motion and no-JS show the final state at full ink. Contrast on the palest stamp must still hold 3:1 (it is a graphic mark, not body text).

## 4. Fairness to my r2 position
Fair on substance (no scroll motion, summoned covers, chips gone, year-only dates, provenance all adopted). Option 5 was dropped without its typographic rigour being carried over, which is what fixes 1-5 restore.
