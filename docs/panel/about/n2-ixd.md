# n2 · IxD · Mind round, Loop 2

**SCORE 7.5/10 · SIGN-OFF: no** (six small fixes, all in `assets/js/about-game.js`; then yes)

## What works
- DOM controls, not canvas: native buttons, a real range with `aria-valuetext`, and − / + beside it. The right call.
- Holds take pointer capture and Space/Enter, ignore key repeat, and block the context menu.
- Pause is a real pause: `later()` waits out a pause, the round goes `inert`, focus moves to Resume. `visibilitychange` pauses too.
- Armed cards (600 ms) stop a mashed key from skipping a card. Skip, Quit and Esc work in every round.
- Calm mode is a full game: no bar, librarian turns on Serve, alarms wait, keyboards slows near five.
- The focus trap skips hidden and inert nodes. Quit returns focus to Press start.

## MUST-FIX

1. **End card focuses a list link, not a button.** `showCard()` runs `querySelector("button, a")`. On the end card the first match is the first `<a>` in `.hm-list`, so one held or repeated Enter leaves the game. Change it to `this.card.querySelector("button")?.focus(...)`. That puts focus on Play again.

2. **Hold state sticks after a disable or a pause.** The `on` flag in `api.hold` only resets on pointerup, keyup or lostpointercapture.
   - Uninstall calls `app.disabled = true` while the key or finger is down. The keyup is lost, `on` stays true, and when the app "comes back" the keyboard hold can't start.
   - Pause during a hold does the same.
   - Fix: add `btn.addEventListener("blur", stop)`. Make `pause()` blur the active element before it sets `inert`. In `uninstall`, replace `app.disabled` with `aria-disabled` and a `gone` flag.

3. **Live regions spam the screen reader.** `.hm-clock` in librarian (`aria-live="polite"`) announces every 1.3 s. The keyboards count announces every 45 ms during a hold. Remove both `aria-live` attributes. Use `api.say()` only for 16:59, 17:00 and the released count, so expose `say` on the api.

4. **Typewriter can't be played by ear.** The three buttons read identically ("Yang bertanda tangan…"), and only the font differs. Add `aria-label="Serif type"`, `"Sans type"` and `"Monospace type"` per face, using `lang="id"` on the quoted text only.

5. **Focus is lost on disabled controls.** Garnisun letters (`b.disabled = true`) and uninstall go disabled while focused. Firefox and Safari drop focus to body, and the next Tab restarts at Pause.
   - Use `aria-disabled="true"` with an early return, or move focus to the next live letter.
   - Garnisun also has no non-visual feedback: the wrong-tap shake is CSS only. Call `api.say("Dropped R. GAUNISUN")` or `api.say("Keep that one")`.

6. **Resume refocuses the wrong control.** `resume()` focuses the first `button, input` in the area. In clock that is "−", not the range. In alarms it is Alarm 1, not the ringing one. In garnisun it is the first letter. Save `document.activeElement` before pausing and restore it. Fall back to `.is-ringing`, then the first control. The alarm ringing state is also visual only: set `aria-label="Alarm n, ringing"` in `ring()`.

## Should-fix (cheap)
- **Uninstall release race:** `later(1200)` counts 50 ms ticks that drift. A release at 1.2 s by `performance.now()` skips the cancel, and `gone` fires after release. In `up`, cancel unless the `gone` flag is set.
- **Held-Enter carry-over:** a held Enter repeats onto the next round's focused control (typewriter, ages) and answers it. Ignore `done()` for 250 ms after `next()`.
- **Time limits:** calm mode follows only the OS reduced-motion setting. Add a "No timer" checkbox on the title card that sets calm timing separately. The alarms' 1.5 s window is tight for switch and screen-reader users.
- **Calm hold:** pitch promised press-to-confirm. Keyboards (about 3 s of hold) and uninstall (1.2 s) still need a sustained press. Add a two-press path in calm. With `transition:none`, `.is-holding i` also jumps to full at press with no progress cue.
- **Share:** drop `aria-pressed` and let the Shared/Hidden text carry the state, or the name and the state contradict.

## Nice-to-have
- A clock range at 4 px per minute is tight on a phone. The first-round tolerance of ±3 saves it. `tol` is always 3 because clock is always index 0.
- `say()` with identical text twice won't re-announce. Append a zero-width space or clear first.
- Esc quits with no confirm mid-round. This matches the plan, but a one-line "Esc again to quit" would cost nothing.

Berbeda is read from code only. Its labels are good: "Something else" and "Coffee, Rp …".
