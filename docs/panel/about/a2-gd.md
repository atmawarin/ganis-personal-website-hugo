# a2-gd: Game design, loop 2 (REVIEW of "Baseline")

**SCORE 7/10 · SIGN-OFF: no** (three small fixes, all in `assets/js/about-game.js`).

## What works
- **Feel numbers are right.** Hop v0 360 / g 1150 gives a 56 u apex and a 0.63 s hop (66 u at 105 u/s), so it clears every hazard (tallest 30 u) with margin. The 45% release cut makes a 100 ms tap about 35 u. Buffer 110 ms is generous, and the 60 ms hit-stop is felt but not annoying.
- **Fair.** The player sits 67-87 u in, so hazards show 1.6 to 2.1 s ahead (spec was 0.9 s). Hazard gaps are 1.1 s or more. The hitbox is narrow with a 2 u inset. A stumble costs about 0.35 s and never a restart. Assist at stumble 4 works.
- **Fixed 120 Hz step with a 50 ms clamp.** Frame-rate independent, and a tab-hide pause is wired in.
- **Zone 3 (direction flip) and zone 4 (same pattern twice)** are carried by mechanics, not captions.
- **Onboarding by doing:** 2.5 s of empty road before the first pothole, and one idea per zone.

## MUST-FIX

1. **Short taps become full-height hops (variable jump is bypassed).** `release()` only cuts `vy` if `vy < 0`. A tap released before the buffered jump fires has `vy = 0`, so no cut happens. This hits a press in the air that lands within the 110 ms buffer, a press during the 60 ms hit-stop, and any tap shorter than a frame.
   - File: `assets/js/about-game.js`, `update()`, the jump block.
   - Change: after the ground-jump line `p.vy = -TUNE.hop; ...` add `if (!p.hold) p.vy *= TUNE.cut;`. Do the same after the air-hop line (`p.vy = -TUNE.hop * 0.85;`).

2. **Zone 5's twist (double jump) is cosmetic.** Nothing needs it: `tall` is 30 u and a single hop reaches 56 u. "Akubu: double jump" is therefore a caption, not a mechanic.
   - File: `assets/js/about-game.js`.
   - In `SIZE`, add `wall: [10, 66]`.
   - In ZONES[4] change the kind to `i > 4 && i % 2 ? "wall" : "scooter"`.
   - Raise ZONES[4] `len` to 14 and use hazard times `[1.5, 2.8, 4.0, 5.2, 7.4, 9.0, 10.4, 12.0]`, so the walls come at 9.0 and 12.0 with room to learn after the 6.0 s gate.
   - Change the flash text to `"Akubu: tap again in the air"`.
   - A double hop peaks at about 96 u, so walls clear only with it. The fall-back cost is a 1 s stumble, so it stays fair. The `tall` entry in `SIZE` can go.

3. **Replay hook is dead: "time" is nearly constant.** Zone length is fixed in seconds at run speed, so a perfect run and a sloppy one differ by about 1 s. Best time then means nothing.
   - File: `assets/js/about-game.js`.
   - In `begin()` add `this.total = 0;`.
   - In `nextZone()` and `endCard()` add `this.total += this.stumbles` before the zone resets. In `endCard()` this must happen before the note is built.
   - In `endCard()` change the note to `Your time ${fmt(t)} · ${this.total ? this.total + " stumbles" : "no stumbles"}${isBest ? "" : ...}`.
   - Store best as a clean-run flag if you want it. At minimum, show the stumble count so a second run has a goal.

## Nice-to-have (not blocking)
- **Coyote (90 ms) is dead code.** The ground is flat and there are no ledges. Keep it harmless, or drop it from `TUNE` to avoid a false claim in the docs.
- **Zones 2, 8 and 9 are reskinned hops.** Waves are plain hazards, crates only count, and `ML` is cleared by jumping. For v2: a "hold = ride the swell" zone 2, and a tap on the `ML` tile to strike it.
- **Zone 7 is 11 identical kerbs over 22 s.** Vary two gaps (a pair at 12.6 and 13.4 s) so the centrepiece has a rhythm change.
- **Takeoff has no stretch and no dust.** Add 0.9x / 1.12y for 60 ms on the jump, skipped when `still.matches`.
- **Letters in zone 1 give no pickup feedback** beyond the HUD. A 0.1 s alpha pop on the glyph would be enough.
- **No hint on the first hazard of zone 1 for touch users** who skipped the title note. A one-frame "Tap" ghost near the player in the first 2 s is optional.
