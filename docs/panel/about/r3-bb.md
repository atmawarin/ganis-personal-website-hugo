# R3 memo: BB (brand), About, verify

SCORE 9/10 | SIGN-OFF yes

## R2 must-fixes
None were raised in r2. Nothing to mark FIXED / NOT FIXED.

## Verified against current files and render
- Content: six levels, dl player card, bonus stage, Continue block. Copy matches PLAN. Heading verbatim.
- Rendered /about/ (localhost:1316): ~280 words in main, one h1, portrait 960x720 with `fetchpriority="high"` and the factual alt.
- Synetica: one level line plus the "same person, with a calendar" line. No pricing, no CTA, no boss metaphor. Level 3 stays fair to SoftwareSeni.
- Family: first names only, no ages or birth years. Photo is solo, no readable screen or location (EXIF verified in r2).
- Screenshots (v2 1280, dark bonus): print vocabulary holds. Mono labels, hollow rings, one filled red node plus "You are here". No XP bars, neon or emoji.
- Head: og:type is `profile` on about. JSON-LD ProfilePage carries the portrait.

## BLOCKERS
None.

## Still open (not blocking, unchanged from r2)
- og:image on /about/ is still `og-default.png`. Safer brand default, Ganis's call.
- Level 3 "2013 to 2025" overlaps levels 4 and 5. Reads as a span.

Next step: ship.
