# r2 SD (loop 2, built /running/)

SCORE 9/10
SIGN-OFF yes

Checked 1280 and 390, light and dark. Sidebar gone, ledger full width, essay at 38rem on the edge, CTA on the same edge, "As of" line under a rule. Name and "42 km" share a baseline; no right-edge overhang. At 390 date and distance sit on one line, title wraps cleanly under them. Dark `--red` (#ff7552) reads fine at 1.5rem. No new tokens, `.about-grid` kept.

MUST-FIX
- none

Nits (not blocking)
- 1280: the 4th stat caption ("best 10K, which I will now defend forever") wraps to two lines while the others are one. Optional: `.bignum span { display:block; max-width: 24ch }` is not needed; accept.
- The `.asof` rule sits tight under the strip's bottom border; fine.
