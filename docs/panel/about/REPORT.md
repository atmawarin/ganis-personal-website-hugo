# /about/ as a stage select: report

**Tier L. Three loops plus one SEO re-check. All seven seats at ≥ 9 and signed off.**

Ganis asked for an About page with fewer words, the greeting kept, a "video game journey" shape, and a better photo from his Photos library. The panel agreed the page was wordy because it said everything twice, once in prose and once in the timeline. It deleted the prose and dressed the timeline as a printed strategy-guide stage list.

## Scores

<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Panel scores per seat across loops 2 and 3">
  <style>
    text { font-family: "IBM Plex Mono", monospace; font-size: 11px; fill: #1b1a17; }
    .r2 { fill: #c9c2b4; } .r3 { fill: #b5341f; } .rule { stroke: #1b1a17; stroke-width: 1; } .bar9 { stroke: #b5341f; stroke-dasharray: 3 3; }
  </style>
  <rect width="640" height="260" fill="#f3eee6"/>
  <line class="rule" x1="60" y1="210" x2="620" y2="210"/>
  <line class="bar9" x1="60" y1="30" x2="620" y2="30"/>
  <text x="8" y="34">9 bar</text>
  <text x="8" y="214">0</text>
  <!-- each seat: r2 bar left, final bar right; scale 20px per point, base y=210 -->
  <g>
    <rect class="r2" x="72"  y="40" width="22" height="170"/><rect class="r3" x="96"  y="30" width="22" height="180"/><text x="80"  y="230">SD</text>
    <rect class="r2" x="152" y="40" width="22" height="170"/><rect class="r3" x="176" y="30" width="22" height="180"/><text x="160" y="230">TY</text>
    <rect class="r2" x="232" y="50" width="22" height="160"/><rect class="r3" x="256" y="30" width="22" height="180"/><text x="236" y="230">IxD</text>
    <rect class="r2" x="312" y="40" width="22" height="170"/><rect class="r3" x="336" y="30" width="22" height="180"/><text x="320" y="230">PM</text>
    <rect class="r2" x="392" y="50" width="22" height="160"/><rect class="r3" x="416" y="30" width="22" height="180"/><text x="396" y="230">SEO</text>
    <rect class="r2" x="472" y="40" width="22" height="170"/><rect class="r3" x="496" y="30" width="22" height="180"/><text x="480" y="230">BB</text>
    <rect class="r2" x="552" y="40" width="22" height="170"/><rect class="r3" x="576" y="30" width="22" height="180"/><text x="564" y="230">V</text>
  </g>
  <rect class="r2" x="60" y="244" width="10" height="10"/><text x="76" y="253">loop 2</text>
  <rect class="r3" x="140" y="244" width="10" height="10"/><text x="156" y="253">final (loop 3, SEO loop 4)</text>
</svg>

| Seat | Loop 2 | Final | Sign-off |
|---|---|---|---|
| SD | 8.5 | 9 | yes |
| TY | 8.5 | 9 | yes |
| IxD | 8 | 9 | yes |
| PM | 8.5 | 9 | yes |
| SEO | 8 | 9 (loop 4) | yes |
| BB | 8.5 | 9 | yes |
| V | 8.5 | 9 | yes |

## What changed
| | Before | After |
|---|---|---|
| Words on the page | ~640 | ~300 |
| Structure | 7 prose paragraphs + 9-step timeline | Lede + 6 levels, each a mono `Level n · when` label, Fraunces h2 place title, one or two sentences |
| Traits (family, coffee, ping-pong) | Two paragraphs | "Player one" card: portrait + 7-row `dl` (Party, Daily quest, Loadout, Save point, Stats…) |
| Two truths and a lie | "A game I play with new hires" | "Bonus stage", same JS, 44px buttons, placed after the levels on mobile |
| Close | Email line in the sidebar | "Continue?": email + Synetica line + a "Pause menu" (shelf, colophon, Letters) |
| Photo | Bowser-laptop frown | `IMG_0478` (2021, a favourite): thumbs up, mouth open. Caption "The author, agreeing with you." 960×720, 127 KB, EXIF stripped |
| SEO | — | description rewritten, `seo_title: About Ganis`, `og:type profile`, OG alt, ProfilePage gains description + Person image/alternateName |

**Rulings worth remembering:** no `<details>` accordion (nothing to hide at 25 words a level); no "boss level" for Synetica or any company; Multiply 2008 and the café anecdote cut; the stamp stays the only animation.

## Files
`content/about/_index.md`, `layouts/about/list.html`, `assets/css/main.css` (`.journey`, `.levels`, `.player`, `.continue`; `.timeline` removed), `layouts/partials/head.html`, `layouts/partials/schema.html`, `static/images/ganis-thumbs-up.jpg`.

## Left for Ganis
- **Approve the photo.** Taken from your "Ganis" album; it's of you alone, at your home desk.
- **Cut copy to confirm:** Multiply 2008, the café and baristas paragraph, "calm person, mostly", the line about the colophon's designers. All recoverable from git.
- New lines that are framing, not facts: "Six levels so far. Still playing.", "to test products before anyone builds them", "The author, agreeing with you."
- The old `ganis-portrait.jpg` is still used on the home page; untouched.
- Push / PR / merge only when you say so.

---

# Round 2: content from Ganis, then the red pawn

## New levels (loop 5: V, BB, PM)
Ganis added Papua/Jakarta childhood, Yogyakarta 2002, Jakarta 2010 to 2013 (Circle Indonesia, Akubu, Mas Surya), back to Yogyakarta 2013. Nine levels now. V: 9, BB: 9, PM: 8.5 (wordiness, revisited below). One fix: "my aunt, Tante Tiwik". No age is printed next to a year, so the birth year can't be computed from this page.

## The game (loops g1 to g4)
Ganis: "when I say game, I feel like there should be more creativity and animation, and javascript." Six of seven seats independently pitched the same mechanic, so it became **The red pawn** (`PLAN-game.md`).

<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Game round scores per seat, loop 2 and final">
  <style>text { font-family: "IBM Plex Mono", monospace; font-size: 11px; fill: #1b1a17; } .a { fill: #c9c2b4; } .b { fill: #b5341f; } .r { stroke: #1b1a17; } .n { stroke: #b5341f; stroke-dasharray: 3 3; }</style>
  <rect width="640" height="230" fill="#f3eee6"/>
  <line class="r" x1="60" y1="190" x2="620" y2="190"/><line class="n" x1="60" y1="28" x2="620" y2="28"/><text x="8" y="32">9 bar</text>
  <rect class="a" x="72" y="55" width="22" height="135"/><rect class="b" x="96" y="28" width="22" height="162"/><text x="80" y="208">SD</text>
  <rect class="a" x="152" y="46" width="22" height="144"/><rect class="b" x="176" y="28" width="22" height="162"/><text x="160" y="208">TY</text>
  <rect class="a" x="232" y="55" width="22" height="135"/><rect class="b" x="256" y="28" width="22" height="162"/><text x="236" y="208">IxD</text>
  <rect class="a" x="312" y="46" width="22" height="144"/><rect class="b" x="336" y="28" width="22" height="162"/><text x="320" y="208">PM</text>
  <rect class="a" x="392" y="55" width="22" height="135"/><rect class="b" x="416" y="28" width="22" height="162"/><text x="396" y="208">SEO</text>
  <rect class="a" x="472" y="46" width="22" height="144"/><rect class="b" x="496" y="28" width="22" height="162"/><text x="480" y="208">BB</text>
  <rect class="a" x="552" y="37" width="22" height="153"/><rect class="b" x="576" y="28" width="22" height="162"/><text x="564" y="208">V</text>
  <rect class="a" x="60" y="216" width="10" height="10"/><text x="76" y="225">g2</text><rect class="b" x="110" y="216" width="10" height="10"/><text x="126" y="225">final (g3, TY g4)</text>
</svg>

| Seat | g2 | Final | Sign-off |
|---|---|---|---|
| SD | 7.5 | 9 | yes |
| TY | 8 | 9 (g4) | yes |
| IxD | 7.5 | 9 | yes |
| PM | 8 | 9 | yes |
| SEO | 7.5 | 9 | yes |
| BB | 8 | 9 | yes |
| V | 8.5 | 9 | yes |

### How it plays
| Beat | What happens |
|---|---|
| Press start | Button under the lede (JS only). Pawn drops onto Level 1; a sticky HUD appears: Back · Level n of 9 · Next level · Exit |
| Move | Buttons, `→`/`J`, `←`/`K`, `1`–`9`, or tap a dot (44px). Pawn glides 260ms + 60ms a level (max 700ms); route inks red behind it; left levels stamp **CLEARED** |
| Arrive | Fraunces title inks `wght` 300→600, `SOFT` 100→0; text sets word by word (≤ 900ms; any key or tap finishes it); scrolls to centre; focus + polite live line |
| End | Prove: "That's as far as the map goes." Next becomes **Continue?** → "Continue? 5 4 3 2 1" over the email line, **Play again** |
| Hidden code | Type `mlbb`: red strike through "Mobile Legends", stamp **UNINSTALLING**. Again to lift |
| Exit / Esc | Page returns to rest; focus back on Press start |

### Rules it keeps
At rest, with no JS, and in print the page is unchanged (0 word spans, dot buttons hidden). Nothing moves on load or scroll. Reduced motion: same moves, zero duration, no countdown. No storage, sound or tracking. CLS-safe (pawn, route and stamps absolutely positioned). Up, Down and Space are never captured.

### Rulings worth remembering
Words not letters (kerning, accessibility). No swipe (fights scroll). Stamp says "Uninstalling", not "Uninstalled" (the page says "still uninstalling"). One hidden code only.

## Left for Ganis
- Play it once: http://localhost:1316/about/ → Press start. Then try `mlbb`.
- Still open from round 1: approve the photo, and the new framing lines.
- Push / PR / merge only when you say so.
