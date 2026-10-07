# R2 · SD (design) · About as a journey

SCORE 8.5/10
SIGN-OFF yes (with the two small fixes below, neither blocks)

## What works
- Prose body gone. The level spine reuses the timeline vocabulary; one red, hollow rings, filled node plus "You are here" on Level 6. Reads as a strategy-guide chapter list, not a skin.
- Hierarchy is clean: mono label, Fraunces title, 52ch Newsreader. Rhythm (28px between levels) is even; left edge sits on --edge and the Continue rule closes the column.
- Player card and bonus stage share the 2px ink box, so the aside reads as one system. The thumbs-up crop (grayscale, 127 KB) is strong in light and dark; dark mode holds with no stray colours.
- Mobile card-first order works: portrait, stats, then lede and levels.

## MUST-FIX
1. Orphaned wraps in the player card (visible desktop and mobile: "6 to / 9 PM") and Level 4 ("11 / km").
   - File: content/about/_index.md
   - player Save point v: "Phone in a drawer, 6 to 9 PM" -> use non-breaking spaces: "Phone in a drawer, 6&nbsp;to&nbsp;9&nbsp;PM"
   - level the-long-run t: "...the last 11 km after dinner." -> "...the last 11&nbsp;km after dinner."
   - (the dd and levels__text both go through markdownify, so the entity survives.)
2. Portrait offset shadow crowds the card border on mobile (10px shadow in 20px padding, shadow nearly touches the 2px rule at 375).
   - File: assets/css/main.css, add after line 672:
     `.player .about-portrait img { box-shadow: 0 0 0 1px var(--rule), 6px 6px 0 var(--paper-2); }`

## Nice-to-have (not blocking)
- Bonus slug wraps to two lines on desktop ("...WITH / NEW HIRES"). Shorter: "Bonus stage · new-hire game" (layouts/about/list.html). The PLAN fixed the longer copy, so leave it unless Ganis agrees.
- The H1 breaks 4 lines with "today." alone; this predates the work and is the heading's character. Leave.
- Desktop: levels text stops at 52ch, leaving ~250px of air before the aside gutter. Intentional measure; fine.
