# r2 TY (loop 2, built /running/)

SCORE 9/10
SIGN-OFF yes

r1 must-nots met: `lining-nums tabular-nums` on `.bignum b` and `.race__dist`; weight 700 upright (no italic 800); "42 km" unit used uniformly via template (`K$` -> " km"), no mixed styles; red only on the distance column; month and year only on dates; no foreign faces added; measure: prose 38rem (~60ch at 1.2rem), race body 62ch, race titles have a wide column (minmax(0,1fr)). Stats 341.9 / 127.6 / 944 / 1:02 all in one face and figure style.

MUST-FIX
- none

Nits (not blocking)
- `.asof`, stat captions and `.race__where` are 0.72rem (11.5px) mono, muted. Legible in the screenshots and consistent with the site's captions; do not shrink further.
- `.race__name` lacks `text-wrap: balance` (r1 SD spec); "The Kraton Marathon (of one)" wraps with an orphan "(of one)" at 390. Optional: add `text-wrap: balance;` to `.race__name` in assets/css/main.css.
