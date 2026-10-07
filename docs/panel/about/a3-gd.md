# a3-gd: Game design, loop 3 (VERIFY)

**SCORE 9/10 · SIGN-OFF: yes** · No blockers.

## My a2 must-fixes

1. **Short taps become full hops: FIXED.** `update()` now cuts after either jump line, `if (!p.hold && p.vy < 0) p.vy *= TUNE.cut`. It sits in the buffer block, so it covers the ground jump, the air hop and a sub-frame tap. The `vy < 0` guard is safe.
2. **Zone 5 double jump is cosmetic: FIXED (flash text SUPERSEDED).**
   - `wall: [10, 66]` is in `SIZE`, and `doubleAt: 8.0`.
   - Hazard times are `[1.5 … 9.0, 10.4, 12.0]` with `i > 4 && i % 2` giving walls at 9.0 and 12.0.
   - `len` is 14.
   - A 66 u wall needs the air hop (about 96 u peak), so the twist is now a mechanic. The flash reads "Jump twice." per the PM merge. That is fine, it names the action.
3. **Replay hook is dead: FIXED, better than I proposed.** `this.hits` is reset in `begin()`, incremented in `stumble()`, and the end card shows "Your time · N stumbles / no stumbles · best". Verified on the z9 card ("34 stumbles" in a deliberately sloppy run). That gives a second run a goal.

## Observations (non-blocking)
- `tall` is still in `SIZE`, unused. Harmless.
- Coyote (90 ms) is still dead code on flat ground. Harmless.
- Zones 2, 8 and 9 are still reskinned hops. This is v2 material, not a ship gate.
- The z5 screenshot is at 8.0 s or earlier, so I confirmed the walls from code, not from a frame.

## Next step
Ship. Log "wave strike / ML tap" and the zone 7 rhythm change as v2.
