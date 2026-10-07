# R4 · TY (Typography): verify PLAN.md v2

## 1. r3 must-fixes
1. **Stamp typeface: FIXED.** "Live text, IBM Plex Mono 500, uppercase, 11px floor, tracking .14em, 1.5px red border. `mix-blend-mode: multiply` in light mode, `screen` at lower alpha in dark. Tilt ... applies to the stamp box only." Reserved slot: "the stamp slot, reserved in the date column so nothing shifts."
2. **Dim to 45%: FIXED.** "Unstarred rows switch to `--ink-soft` (>= 4.5:1 in both themes, never opacity on text) while titles stay full ink."
3. **Small caps and figures: FIXED.** "author in small caps (real `smcp`, else uppercase .82em +.06em tracking, `font-synthesis: none`)"; "huge Fraunces with lining figures and high `opsz`"; "`tabular-nums lining-nums`, showing the year only."
4. **Row text rules: FIXED.** "display title (before the colon), in Fraunces italic"; opened row holds "the subtitle"; "58-66ch"; "quotes: curly quotes, Newsreader italic; *my note*: a mono label; *about the book*: set plain." Minor: Bahasa quote marks are not restated, but `lang="id"` is, so this is not a blocker.
5. **Font loading and pile: FIXED.** "No new webfont files. Fallback stacks get `size-adjust`/`ascent-override`." Pile: "offset +/-3px and +/-2deg, each with a different ink value ... One `aria-label` per pile."

## 2. New problems from the wow ideas
- **Ink runs out:** adopted with floor .7 and "still >= 3:1". Fine. The 0.4px bleed and the "slightly smaller" step were dropped, which is fine; opacity alone is enough.
- **Strike again:** up to 5 impressions per row with new tilts reuses the pile rule. The "ENOUGH." mono string is off until approved. Fine.
- **Tally stamp `24 / 104`:** needs `tabular-nums lining-nums` in Plex Mono, same as the date column and the `14 / 27` roller counter. Plan implies it via the mono figures rule. Note for build, not a blocker.
- **Hover preview stamps on every row:** stamps are live text with a reserved slot, so no reflow and no font swap issue.
- **Starred rows at rest:** the only red marks, with different ink values per star. Consistent.
- **Many verbs on one stamp:** PM ruling, and it does not break my lane.

Blockers: none.

## 3. Verdict
**SCORE 9 / 10. WOW 8.5 / 10. SIGN-OFF: yes.**
