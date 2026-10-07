# A3 · BB (brand) · Loop 3 verify of "Baseline"

**SCORE 9/10 · SIGN-OFF: yes. No blockers.**

## My a2 must-fix

**"Akubu: double jump" invented claim: FIXED.**
- `grep -n Akubu assets/js/about-game.js` returns one hit, the `signs` entry on line 50 (a plain signpost).
- The flash is now `Jump twice.` (line 448, PM merge, V's wording over my "Double jump"). It carries no company name.
- `doubleAt: 8.0` sits 2 s after the Akubu sign at 6.0. The two walls at 9.0 and 12.0 are the only things that need the hop.
- The upgrade no longer reads as a gift from Akubu or from Mas Surya.

## Vetoes re-checked (still hold)

- **No person is a sprite.** The runner is a faceless red figure, the becak is empty, desks are empty. In the sheet, zones 1 to 9 show no one else.
- **No company is an enemy.** Circle Indonesia and Akubu are signs. SoftwareSeni is desks. Synetica is dotted `assumption` crates and carries no logo.
- **Prove card.** The page's own words, then `Your time 2:19.7 · 34 stumbles`. Stumbles are counted, not scolded. This is honest, it is not a "game over", and it is fine.
- **MLBB.** A bare `ML` tile and `Uninstalling`, with no game art.
- **Palette.** One red on paper, no Synetica purple. Right for Ganis's own site.

## Non-blocking

- Timeout fallback (start anyway with fallback faces) is acceptable brand-wise. Georgia fallbacks are on-voice.
- Nit: the end card note `34 stumbles` reads slightly heavy at 2:19. Optional: show it only below 20. Not a blocker.

## Next step

Ship.
