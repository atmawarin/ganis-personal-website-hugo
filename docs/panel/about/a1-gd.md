# a1-gd: Game design, loop 1 (PROPOSE)

**I back Concept A, "Baseline": one input, nine zones, one 2-minute run.** Three pitches, then the spec.

## The three concepts

| | A. Baseline (recommended) | B. Nine Seconds | C. The Crossing |
|---|---|---|---|
| Genre | One-button runner/platformer (Alto, Celeste's tight jump) | Microgame sprint (WarioWare) | Route-drawing sim (Mini Metro, Florence) |
| Core verb | **Tap to hop, hold to stretch the hop**; each zone re-skins what the hop means | Nine different 5 s verbs | Drag a line through Papua, Malang, Jakarta, Yogyakarta |
| Session | ~2 min, replay for letters and time | ~1.5 min | ~3 min |
| Strength | One engine, real game feel, a character you steer, learnable | Every fact gets its own mechanic | Beautiful, calm, very on-brand |
| Weakness | Zones 2 and 8 need clever reskins | Nine tiny games means nine times the bugs and nine tutorials | Weak skill loop; fails the "is it a game" test Ganis already gave |
| Risk | Medium | High (scope) | Low, but repeats the pawn's sin |

**Why A.** The pawn failed for lack of skill, character and feel. A gives a body with weight, a clear fail-and-retry loop, and a twist per level so the facts become mechanics, not captions. B is the fallback if the panel wants shorter bursts: it can reuse A's engine as "zone = microgame".

## Concept A in full

**Identity.** Ink on paper, no new colours. The ground is a **typographic baseline**; hazards are glyphs; distance is set in the site's mono. Ganis is a small red runner (8x12 px, 4 frames), the only red thing on screen except hazards that can hurt. No family or colleague sprites.

**Controls (one input).** Tap, Space, Up or W to hop; hold for a higher hop. Phone: tap anywhere on the canvas. Esc quits, P pauses, "Skip to the page" is a visible link. The control surface never needs two thumbs.

**Screen.** Logical canvas 144 px high, width by aspect (about 256 desktop, 192 on a 375 phone), integer-scaled, nearest-neighbour. Overlay dialog, focus trapped, `100dvh`.

**Feel numbers (60 Hz fixed step).** Run 84 px/s. Gravity 900 px/s2, hop v0 300, release cuts vy to 40%. Coyote 90 ms, input buffer 110 ms. Land squash 1.25x/0.8y for 80 ms. Stumble: 50 ms hit-stop, back 20 px, 1.2 s of 50% flicker-free fade (no flashing above 3 Hz). Footstep dust, 3 particles max. Camera lead 24 px, critically damped. No death, no lives.

**One-minute loop.** Zone (about 12 s) -> hazards in a seeded pattern -> glyph pickup -> gate stamp. Six stumbles in one zone silently shortens hazards 15% (assist, never announced).

## The nine zones (every twist from a real fact)

1. **Papua.** You are the patrol car. Road, potholes, hop. Pickups spell G-A-R-N-I-S-U-N on the road; at the gate the word **shortens** to GANIS. Tutorial by doing: first hazard is 2 s of empty road, no text.
2. **Malang.** KM Rinjani. Deck, swells. **Hold = ride the swell, tap = brace.** Sky runs five suns and four moons across the 12 s ("Day 3" counter in mono).
3. **On the move.** Run right to a gate, the world flips, run left. Papua then Jakarta, back and forth; SMA 2 then SMA 3 as the two gates. Twist: **direction reverses**.
4. **Yogyakarta 2002.** The bridge by becak. The hazard pattern is shown once, then repeats identically. "It hadn't changed" is the mechanic: **learn it, then it is the same.**
5. **Jakarta.** Two jobs: Circle Indonesia, then Akubu. The Akubu gate grants **double hop**. No person sprites.
6. **SoftwareSeni.** Vertical climb. Platforms are desks, one per six; headcount counter climbs 13 to 90. Camera rises to "Director". Nothing is an enemy; hazards are neutral (scrolling lists).
7. **The long run.** The centrepiece. 42 km markers pass in about 25 s. **Hold to push pace, drains a stamina bar, a parked car (empty, no figures) refills it.** At km 31 the world dims to a lamp circle: the last 11 km after dinner. Dimming eases, never flashes.
8. **Synetica.** Some hazards are dotted outlines. **Tap-hold "tests" one before you commit**: real ones solidify, fake ones dissolve. It is the product: test before you build.
9. **Prove.** Phone-icon hazards. **Press on one to uninstall it** (it strikes through, as the page says). The run has no finish line. At the end the bar says "That's as far as the map goes."

## Start, end, replay

- **Start:** Press start on the page opens the overlay on a title card, "Baseline", a single prompt "Tap to run". Nothing animates before that.
- **End:** run time, glyphs found, then "Back to the page" and Continue. Returns focus to the Press start button.
- **Replay hook:** **par time per zone** and a local-only best total. Ghost of your last run, in memory only. Seeded zones so skill transfers. The `mlbb` code works in zone 9.
- **What you learn:** each zone teaches its fact by playing it, using only the page's own words.

## Degrade

- No JS, print, crawlers: today's page unchanged.
- `prefers-reduced-motion`: no shake, no parallax, no dust, speed 70%, hazards 25% wider-spaced, camera locked. Still a game.
- Assist toggle: auto-hop. Pauses on `visibilitychange`. Frame over 20 ms for 2 s drops particles and parallax. 2D canvas, one `rAF`, target 12 KB gz, no library.

## My lane spec (game design)

- **Single input rule:** every mechanic resolves to tap or hold. No D-pads.
- **Fairness:** hazards telegraphed 0.9 s ahead at base speed; no blind jumps; deterministic seeds; failure costs 1 s, never a restart.
- **Onboarding:** zero text walls; zone 1 teaches hop, zone 2 teaches hold, zone 3+ add one idea each.
- **Tuning table** lives at the top of the module as one const object so numbers can be tuned in a loop.

## Must-nots

No lives, game over, boss, score pop-ups, confetti, auto-play, sound by default, strobing, storage beyond best time, any enemy named after a real company or person, any invented stat.

## Top 3 must-haves

1. **Feel first:** coyote, buffer, variable hop, squash and hit-stop shipped before any zone art. If the hop is dull, nothing else matters.
2. **Skip and quit always visible:** Esc, "Skip to the page", pause, assist; calm mode is a real mode.
3. **Zone twists carried by mechanic, not caption:** zones 2, 4, 7, 8 must be playable in under 3 s of instruction with zero added text.

**Decision needed:** green-light A, with B as the scope-reduction fallback; confirm 2-minute target.
