# r2 IxD (loop 2, built /running/)

SCORE 8/10
SIGN-OFF yes (one small must-fix, safe to apply in the same commit)

Good: no JS, no iframe, no new motion, so reduced motion is moot. CTA is a real link, same-origin, no target=_blank. CTA height is about 42px (12.8px x 1.55 + 20 padding + 2 border), meets 40px. Global `:focus-visible` (line 58) covers the CTA and "The whole story". Rows are not interactive, no hover treatment.

MUST-FIX
1. assets/css/main.css line ~653: `.cta-line:hover { background: var(--ink); color: var(--paper); }` is not gated, so it sticks on touch after a tap. Change to `@media (hover: hover) { .cta-line:hover { background: var(--ink); color: var(--paper); } }`. (Pre-existing rule, but this page now leans on it and r1 asked for hover-only-under-hover.)

Nit
- Inline "The whole story" link inside race body is a text link in a 62ch paragraph; target is line-height tall (~27px), acceptable for inline prose links.
