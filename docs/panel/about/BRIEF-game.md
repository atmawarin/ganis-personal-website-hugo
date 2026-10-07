# Brief: make /about/ play like a game

**Tier: L.** New interaction, animation and JS on a chrome page.

**Ganis's ask (verbatim intent):** "When I say game, I feel like there should be more creativity and animation, and javascript. Run this through with the panel."

## Current state (shipped on `develop`, loops 1 to 5)
Screens: `docs/panel/about/screens/v2-about-1280.png`, `v2-about-dark-bonus.jpg`, `v1-about-375-dark-card.jpg`.
- `content/about/_index.md`: heading (verbatim, never changes), lede "Nine levels so far. Still playing.", `portrait`, `player` (7 rows), `levels` (9: Papua, Malang, On the move, Yogyakarta, Jakarta, SoftwareSeni, The long run, Synetica, Prove [here]), `ttol`.
- `layouts/about/list.html`: `.journey` grid. Main: lede, `ol.levels` (mono label, Fraunces h2, text), `.continue`. Aside: `.player` card. Then `.ttol.journey__bonus`.
- CSS `assets/css/main.css` (`.journey`, `.levels`, `.player`, `.continue`, `.ttol`). JS `assets/js/global.js`: ttol (~line 72), shelf pattern (~86+) is the precedent for a richer, JS-enhanced page.
- Today the game is only a skin: labels, a red spine, "You are here". It does not *play*.

## What's allowed to bend
The 2026 redesign set: one signature interaction (home's name-setter), no scroll animations, no fade-ins. **Ganis now explicitly asks for animation and JS here.** The reading page (`docs/panel/reading/PLAN.md`) already bent the rule: richer interaction, but only triggered by the visitor (click, drag, key), never on load or scroll, and everything readable without JS. The panel decides how far /about/ bends, and must justify it.

## Hard constraints (not up for debate)
- All content stays in the HTML. JS enhances, never renders content. No-JS, print and crawlers see the full nine levels.
- `prefers-reduced-motion`: every mechanic still works, states apply instantly.
- Keyboard and touch both play. Targets ≥ 40px. Visible focus. Hover only under `@media (hover:hover)`.
- Site palette and faces only (paper, ink, one red; Fraunces, Newsreader, Plex Mono). A game made of print: ink, stamps, rules, numerals, paper. Not neon, not pixel art, no sprites of real people, no sound by default.
- No invented facts, no achievements that claim things about Ganis, no tracking.
- No new libraries unless tiny and justified; vanilla JS in `assets/js/global.js`, syntax-checked.
- Must work at 375px and in dark mode.

## The question for loop 1
What should the visitor *do* on this page, and what moves when they do it? Each seat pitches one signature mechanic (the "game") plus its spec for its own lane.
