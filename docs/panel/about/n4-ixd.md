# n4 · IxD · Mind round, Loop 4

**SCORE 9/10 · SIGN-OFF: yes**

- Uninstall note double announce: **FIXED.** `.hm-note` has no `aria-live`; `say()` announces once.
- 250 ms round guard: **FIXED.** `area.inert` for 250 ms per round; `api.focus` waits 260 ms while inert, so focus lands after the guard.
- Calm-mode two-press hold, separate "No timer" switch: **NOT FIXED**, accepted post-ship.
- Cosmetic: the 250 ms re-enable timeout is not tied to pause. Harmless.

**BLOCKERS:** None.
