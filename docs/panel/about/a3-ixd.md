# A3 · IxD verify (arcade loop 3)

**SCORE 9/10 · SIGN-OFF: yes**

## My a2 must-fixes
1. Card skipped by accident: **FIXED.** `armed = now + 600` set in levelCard (line 271) and the click guard covers next/again/page (line 176).
2. Space hijacks bar buttons: **FIXED.** `onButton` check in `key()` (line 206).
3. Focus escapes dialog: **FIXED.** Page children made `inert` on open, restored in `close()` after `el.remove()`; `trap()` handles `i < 0` for Tab and Shift+Tab (line 219).
4. Card clips top in short viewport: **FIXED.** `.bl__card` is flex with `overflow-y: auto`; `.bl__panel` has `margin: auto` (main.css 691-692).

## Should-fix status
- Launcher retry after failed import: **FIXED** (`warm = null` on catch).
- Fonts before first frame: **FIXED**, with the PM's 1.5 s fallback (**SUPERSEDED** my "wait" in favour of "start anyway", fine).
- `overscroll-behavior`, `-webkit-touch-callout`, safe-area left/right: not done.
- Right-click jump (`e.button`) and `setPointerCapture`: not done.
- Esc pauses first: not done (plan says quit, so correct).

## BLOCKERS
None.

## Screenshots
Phone dark card: bar wraps cleanly, panel fits, 44 px targets. Hint reads "Space to keep running" because headless is not `pointer: coarse`; the touch branch exists (line 304).

## Next step
Ship. Follow-up (small): the not-done items above are a four-line CSS and pointer patch, worth doing before a wide announce, not before merge.
