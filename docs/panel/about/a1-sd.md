# A1 · SD (design): art direction for the game

**Backing:** a one-button runner, "The Specimen Run". Ganis is a runner; the verb is *run and jump*, the world is a printed plate that inks itself as you pass. I will back GD's concept if it is a one-button side-scroller; if GD recommends something else, my lane spec below still applies (palette, plate, transitions).

## Concept (what I pitch)
- **Genre:** side-scrolling runner, one button. Tap = hop, hold = higher (variable jump, up to 180 ms of held lift). No death: a hit costs a 600 ms stumble and 15% speed, never "game over".
- **Character:** a red full stop with two ink legs (a period that runs). Abstract, not a face or likeness of anyone. It is the only red thing that moves.
- **World:** nine plates, each ~20 to 30 s, the long run ~45 s. Total ~4 min.

| # | Plate | Twist tied to the real fact |
|---|---|---|
| 1 | Papua | Letters of GARNISUN scroll by; catch G A N I S, dodge R U N N. Ends spelling GANIS. |
| 2 | Malang | KM Rinjani: swell lanes, hop the waves; five suns and four moons pass in 25 s (paper crossfades to ink over 2 s, no flash). |
| 3 | On the move | Two lanes, Papua and Jakarta, tap to switch; ends at two gates, SMA 2 and SMA 3. |
| 4 | Yogyakarta | Becak over the bridge: calm, hop on the pedal beat; the bridge looks like plate 1's road. "It hadn't changed." |
| 5 | Jakarta | Commuter crowd; pick up two names, Circle Indonesia, Akubu. Never enemies. |
| 6 | SoftwareSeni | Counter climbs 13 to 90 as desks fill in behind you, one desk per six. |
| 7 | The long run | 0 to 42 km, hold-to-pace meter, water-station car at intervals, dusk falls for the last 11 km. |
| 8 | Synetica | Ideas drop; tap to test one before it lands. Tested ones stay, untested crumble. |
| 9 | Prove | Open-ended. Phone notifications fall, you hop them; the Mobile Legends icon is a dodge, never a boss. Ends: "That's as far as the map goes." |

**Feel numbers:** logical height 360 u, scaled to fit. Gravity 2400 u/s2, jump 760 u/s, coyote 90 ms, input buffer 110 ms. Speed 180 u/s rising to 260 across a plate. Fixed 60 Hz step, rAF render, pauses on `visibilitychange`.
**Controls:** Space/Up/W/tap anywhere = hop; `P` pause; `Esc` quit; "Skip to the page" link always visible.
**Start/end:** Press play opens the plate; end shows a CLEARED stamp per plate and a final Play again. Replay hook: par time and "clean run" (no stumbles) stamps, local best only.
**Degradation:** no JS, no canvas, print: today's page. Reduced motion: no shake or parallax, day/night cuts instead of fades, same game.

## My lane: art direction and site fit
1. **Palette is the site's, no new colours.** Paper `#f3eee6` ground, ink `#1b1a17` linework, red `#b5341f` only for the runner and one meaningful object per plate (the letter you must catch, the becak, the 42 km flag). Dark mode inverts ground and ink, red stays.
2. **It is a printed plate, not pixel art.** 1.5 px ink line art, hatch fills for depth, flat shapes, two parallax layers max (back layer drawn at 40% ink, no blur). Parallax off in reduced motion. Looks like a specimen-book engraving that moves.
3. **Type on canvas matches the site:** plate titles in Fraunces (wght 300 to 600 as the plate arrives, same ink-in as the page), HUD in IBM Plex Mono caps, 11 px min scaled. Await `document.fonts.load` before first frame.
4. **Launch/close transition:** a paper rectangle grows from the Press play button via `clip-path: inset()` over 320 ms, the page stays underneath; close reverses it. Reduced motion: instant. The canvas sits in a `role="dialog"` over the page, focus trapped, returns to the button on close.
5. **Plate chrome:** thin ink frame, plate number top left ("Plate 4 of 9"), stage CLEARED stamp in the existing rotated red stamp grammar. No coins, no hearts, no score font, no neon, no glow, no particles beyond ink specks (max 12).
6. **Dark mode and 375 px portrait:** world height fills the viewport, runner sits at 28% from left; touch target is the whole lower two thirds so no tiny buttons; quit and skip are 44 px, top corners.

## Must-nots
- No pixel-art or arcade clichés (CRT scanlines, 8-bit font, neon).
- No face, likeness or sprite of Gita, Zen, Zia, colleagues; no "boss", no enemies named after SoftwareSeni, Akubu, Circle Indonesia or Synetica.
- No flashing over 3 Hz; day/night fades are 2 s minimum.
- No red used decoratively; no new fonts or colours.
- No invented captions or stats: every on-screen number (13, 90, 42 km, 11 km, five days) comes from the page.
- No autoplay, no sound unless toggled, no load-time cost.

## Top 3 must-haves
1. **Red is earned:** one red mover plus one red goal per plate, so the eye always knows where to look.
2. **The plate reads as this site:** paper, ink, Fraunces, Plex Mono, stamp grammar, identical in light and dark.
3. **A calm, instant way out:** Esc, a 44 px quit and "Skip to the page", with the paper-grow transition reversing cleanly and focus restored.
