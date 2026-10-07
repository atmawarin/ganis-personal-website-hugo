# n3 · IxD · Mind round, Loop 3 (verify)

**SCORE 8.5/10 · SIGN-OFF: yes**

## My n2 must-fixes
1. End card focus: **FIXED.** `showCard()` now does `querySelector("button")`, so focus lands on Play again, not a list link.
2. Stuck hold state: **FIXED.** `blur` and every hold are released by `pause()`. Uninstall uses `aria-disabled` and `start` refuses while it is set. Pause verified at 65, stable after resume.
3. Live-region spam: **FIXED.** The only `aria-live` left are the card region and the uninstall note. Key moments go through `say()`: "5 PM.", "10 left.", "Uninstalled.", "It's back."
4. Typewriter labels: **FIXED.** "Serif / Sans serif / Monospace: ...", with `lang="id"` on the quoted span.
5. Focus lost on disabled controls: **FIXED.** Garnisun and uninstall use `aria-disabled` with an early return. Garnisun says "Keep the R." on a wrong tap, and the dropped letter is relabelled.
6. Resume refocus: **FIXED.** `lastFocus` is saved before pause and restored. Alarm labels carry ", ringing".

## BLOCKERS
None.

## Residual (not blocking, post-ship)
- Uninstall: the `.hm-note` has `aria-live` and `say()` fires too, so "Uninstalled" may announce twice. Drop the note's `aria-live`.
- Still open from my should-fix list: no separate "No timer" switch (calm follows the OS setting only), no two-press path for holds in calm mode, and no 250 ms guard against a held Enter carrying into the next round (cards are guarded, rounds are not).
- Release at about 1.2 s can race the `later()` tick. Cosmetic.
- Berbeda labels checked in `berbeda.png`. They read well.
