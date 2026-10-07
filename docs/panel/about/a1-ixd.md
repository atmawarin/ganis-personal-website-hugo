# A1 · IxD · "One button, nine stages"

**Backing:** a side-on, one-button **momentum runner** ("Keep Running"). Ganis is a runner; the verb is the identity. The red ink character from the page runs left to right through nine stages. Every stage keeps the same single input and changes only what the input does. I'd reject anything needing two hands, aim, or precise timing: the page's audience is a hiring or client reader on a phone, and 90 seconds is the budget.

## Core verb and controls
- **One action: press = act, release = settle.** Tap or hold anywhere on the canvas, `Space`, `Enter`, `Up` or `W`. Nothing else is required to finish.
- Extras, never required: `Left/Right` nudge, `P` pause, `M` mute (sound off by default, may ship silent).
- `Esc` quits. A persistent top-right cluster of 44px buttons: **Pause · Skip to the page · Quit**. Skip jumps to that level's HTML `li`.
- Touch: whole canvas is the button, plus a 56px bottom bar on phones for Pause/Skip. Landscape and portrait both work; portrait uses a 9:16 crop with the same world.

## Feel numbers (60 fps fixed-timestep 1/120 s, dt clamped to 50 ms)
- Run speed 220 px/s (stage-scaled); jump apex 120 px in 0.42 s, gravity 2100 px/s², variable height by hold (cut at 40% on release).
- **Coyote time 90 ms, input buffer 120 ms.** Forgiving by design.
- **No death.** A miss costs 0.8 s of stumble and a 1-in-3 slowdown; the stage always completes. Stage length 8 to 12 s, total about 90 s. Failure never gates content.

## Nine stages (mechanic twist tied to the real fact)
| # | Stage | Twist on the one button |
|---|---|---|
| 1 | Papua | Patrol car *Garnisun*: tap to hop potholes; the car's name paints on the hood at the end |
| 2 | Malang | KM Rinjani: deck rocks; hold to brace on the swell, release between waves. Counter "5 days, 4 nights" ticks by day on a fast sea |
| 3 | On the move | Papua to Jakarta flight lanes: tap swaps lane (2 lanes) for the two schools, SMA 2 and SMA 3 gates |
| 4 | Yogyakarta | Becak over the bridge: hold to pedal up the arch, release on the descent. A small girl-sized passenger is NOT drawn; becak is empty |
| 5 | Jakarta | Commuter dodge: jump gaps between traffic; a "Mas Surya" doorway is a thank-you checkpoint, not an obstacle |
| 6 | SoftwareSeni | Desks: collect six desks per team (one desk for every six) by jump arcs; no enemy anywhere |
| 7 | The long run | 42 km: hold to keep stride rhythm (rhythm bar), car as water station at km 21 and 31, last 11 km after dinner turns the sky dark. Pure running, the emotional peak |
| 8 | Synetica | Build a platform stair: each jump places a block that a test user then crosses (test before build) |
| 9 | Prove | Open road, still running; Mobile Legends icon appears and you jump over it into the trash. Ends at the open line |

## Start and end
- Start: **Press play** button on the page under the lede (existing `play-start`), dynamic `import()`, canvas dialog opens with focus moved in.
- End: runner reaches "You are here", camera stops, stage list closes, focus returns to the Play button, the Continue block counts down as built today. **Play again** replays; optional best time in `localStorage`.

## Replay hook
Per-stage ghost of your previous time (one number, local only), and a "calm run" and "full run" toggle. Hidden `mlbb` still strikes the icon.

## My lane spec (interaction, focus, comfort)
1. **Focus:** on open, move focus into the dialog (`role="dialog"`, `aria-modal`, `aria-label`). Trap Tab among Pause, Skip, Quit and the canvas. On close, restore focus to the Play button that opened it.
2. **Pause:** `visibilitychange`, `blur`, orientation change, and `Esc` all pause with a visible overlay "Paused. Space to resume". Auto-resume never.
3. **Reduced motion (live `matchMedia`)**: no shake, no parallax, no particles, camera snaps, backgrounds static. The game still plays; speed drops to 160 px/s and the rocking in stage 2 becomes a slow 1 Hz vertical bob of at most 6 px.
4. **Flashing:** no luminance change over 3 per second and none over 10 percent full-frame. Stumble feedback is a 120 ms tint at 15 percent, not a flash.
5. **Targets:** 44px minimum; 56px bar on phones with safe-area insets. `touch-action: none` only on the canvas, so page scroll stays native outside it.
6. **Resize:** debounced; recompute canvas at `devicePixelRatio` capped at 2; world units are fixed, only the scale changes.
7. **Assist:** a "Slower" toggle (speed 70 percent, bigger gaps) in the pause overlay; screen-reader announcement per stage in a polite live region: "Stage 4 of 9, Yogyakarta, completed".
8. **Skip is a first-class path:** a visitor who skips every stage still lands at the page content with no penalty.

## Must-nots
- No auto-play on load, no start without a press, no keyboard capture before play (only `Space` inside the dialog).
- No fail state, lives, timers that gate content, or "game over".
- No enemy that is a real employer or person; no sprites of family or colleagues.
- No flashing, shake in calm mode, sound on by default, or network, tracking, or libraries.
- No hijacking of page scroll, pinch zoom, or browser back.

## Top 3 must-haves
1. **One-button play that can't be lost**, with Pause, Skip and Quit always visible and keyboard reachable.
2. **Focus and visibility discipline:** trapped in, restored out, paused on tab-hidden, blur, resize or orientation change.
3. **A calm mode that still plays** under `prefers-reduced-motion`, with no flashing above 3 per second at any setting.
