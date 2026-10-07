# PLAN (arcade round): "Baseline"

Synthesis of `a1-*.md` (eight seats, with GD). Binding for the build.

## Unanimous (8/8)
- **Genre: a one-button side-scrolling runner.** Ganis is a runner, the page ends on "still running", and a runner needs no enemies. Tap / Space / Up / W = hop, hold = higher.
- **Nine zones, one per level, each zone's twist taken from its real fact.** One engine; zones change what the hop meets, not the controls.
- **Soft fail:** a hit is a stumble (about 1 s), never death, lives or "game over". Everyone reaches Prove.
- **Launch from the page, close back to it.** Page HTML untouched; the game loads by dynamic import only on Press start.
- **Pause, Skip to the page and Quit** always one press away. Calm mode under reduced motion still plays.
- No sprites of family or colleagues; no company is an enemy; no invented numbers or captions.

## Rulings
| Question | Ruling | Why |
|---|---|---|
| Name | **Baseline**. Subtitle: `A short run through the story so far.` | GD + TY: the ground is a typographic baseline. V's subtitle. |
| Look | Canvas ink line art on the site's paper, **one red runner** (a red figure, no face). Dark mode swaps paper/ink tokens. Two parallax layers (trees and skyline). No pixel font, CRT, neon. | SD over BB's Synetica-purple palette: this is Ganis's site, not Synetica's. |
| Synetica logo in zone 8 | **No.** | Loop 1 rule: Synetica gets one honest line, never a banner. |
| Length | Zones about 12 s each, The long run about 22 s, about 2 min total. | GD and IxD: a phone visitor's budget. PM's 4 min and V's 6 min are too long. |
| Fail | Stumble: 60 ms hit-stop, knocked back, 1 s invulnerable (alpha 0.5, no flicker). After 4 stumbles in a zone, hazards space out 20% silently. **No restarts.** | GD over V's "restart after three". |
| Reading | DOM **level card** between zones: `Level n of 9`, Fraunces title inking in, the level's real sentence read from the page `li` (never retyped). Tap / Space continues. HUD shows the zone label while running. | PM + TY: playing equals reading; text stays in DOM, crisp at 375px. |
| Word pickups (TY) | Cut to v2, except zone 1's letters. | Moving text is hard to read at 375px; scope. |
| Zone 1 twist | You drive the patrol car (plain rounded silhouette, no insignia). Letters G A R N I S U N float along the road; the gate card shows the name shortening to GANIS. | GD; BB's concern was military imagery, so none. |
| SoftwareSeni | Stays horizontal (no vertical climb): desks are platforms; counter rises `#13` to `90`. | Scope (one engine). |
| The long run | `km` counter 0 → 42; an empty car at km 21 and km 31 marked `Water.`; from km 31 the world dims to dusk over 2 s. No stamina bar. | GD + BB, cut stamina for scope. |
| Synetica | Dotted crates labelled `assumption`; each one you clear turns solid with a `tested` stamp. | PM + V: test before you build, nobody beaten. |
| Prove | Notification bubbles drift in; one is a phone tile marked `ML`. Clearing it strikes it with an `Uninstalling` stamp. The road runs on; after about 12 s: `That's as far as the map goes.` | No real MLBB art (BB). |
| The red pawn | **Replaced.** Press start now launches Baseline. Pawn markup, CSS and JS are removed; `global.js` keeps only a launcher. The page-level `mlbb` code goes with it. | SEO: no dead weight on every page. |
| End | End card: run time, `Play again`, `Back to the page` (scrolls to the Continue block, focus there). Best time kept in `localStorage` (try/catch). | |
| Sound | None in v1. | |

## Feel numbers (start values, tuned in one `TUNE` object)
Logical height 180 u, width by aspect. Fixed 120 Hz step, dt clamped to 50 ms. Run 105 u/s (calm 80). Gravity 1150 u/s², hop v0 360, release cuts vy to 45%. Coyote 90 ms, buffer 110 ms. Land squash 1.2x / 0.82y for 90 ms. Stumble knockback 18 u. Hazards telegraphed at least 0.9 s ahead. DPR capped at 2.

## Chrome
- `role="dialog"` overlay, `position: fixed; inset: 0`, paper background, grows from the button with `clip-path` (320 ms; instant in calm mode). Focus trapped; restored on close. Body scroll is locked without layout shift.
- Top bar (Plex Mono caps): `Level 4 of 9 · Yogyakarta` on the left; `Pause`, `Skip to the page`, `Quit` on the right, each 44 px.
- Pauses on `visibilitychange`, `blur` and `P`; `Esc` quits.

## Exact strings (V)
Title `Baseline` · `A short run through the story so far.` · `Press start` · hints `Space to jump. Hold to jump higher.` / `Tap to jump. Hold to jump higher.` · `Paused` / `Resume` · `Skip to the page` · `Quit` · card kicker `Level 4 of 9` · `Tap to keep running` / `Space to keep running` · stumble `Ouch.` (once per run) · `Day 1 of 5` … · `Employee #13` → `Ninety people` · `km 12 of 42`, `Water.`, `The last 11 km.` · `assumption` / `tested` · `Uninstalling` · `That's as far as the map goes.` · end `Your time` · `Play again` · `Back to the page` · calm note `Calm mode is on. Same run, less movement.`

## Budget
`assets/js/about-game.js`, separate `js.Build`, dynamic import from a `data-src` on Press start, ≤ 30 KB gz, no library, no assets fetched. Fonts awaited with `document.fonts.load` before the first frame.
