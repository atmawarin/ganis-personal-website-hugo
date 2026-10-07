# G1 · SD (design): propose

## Signature mechanic: "Roll the Route"
The page becomes a printed board game. A **red ink pawn** sits on the spine at Level 1. The visitor moves it, level by level, and the route **inks itself behind it**. Nothing moves until they act.

**What the visitor does**
- Taps **Press start** (a 44px mono button in the lede, red 2px border, hidden without JS), or presses `Space`.
- Then `→` / `↓` / `J` / swipe left / the on-screen **Next** button moves one level. `←` / `↑` / `K` / swipe right / **Back** retreats. `1`-`9` jump. `Esc` ends play.
- Pawn moves only on input. Never on load, never on scroll.

**What moves (all CSS transitions driven by a `data-level` attribute; JS only sets state)**
| Beat | Motion | Time / easing |
|---|---|---|
| Route inks | dotted segment between dots grows (`scaleY` 0 to 1, origin top, red 2px dotted via repeating gradient) | 420ms `cubic-bezier(.5,0,.2,1)` |
| Pawn travels | `translateY` to next dot; 4px overshoot, settle | 460ms same curve, +90ms settle `ease-out` |
| Level lands | dot fills red; **CLEARED** stamp (mono, 2px red border, rotate -6deg) slams scale 1.5 to 1, opacity 0 to 1 | 220ms `ease-out`, reuse `@keyframes stamp`, delay 380ms |
| Dialogue sets | active level's text reveals **word by word**, 28ms/word, capped 700ms | JS toggles `.is-set` on word spans; `Enter`/tap skips |
| Page follows | active `li` scrolled to centre | smooth; instant under reduced motion |
| Pip row | 9 pips in a sticky HUD fill red | instant |

**Start and end**
- Start: Press start fades nothing; it simply inks Level 1's dot and replaces the button with the HUD strip `LEVEL 1 / 9 · ← → MOVE · ESC EXIT`.
- End: pawn reaches **Prove**, which already says "You are here". Pawn parks, the Continue block gets a red rule, a mono counter ticks `9 8 7 ... 0` at 600ms each (the continue screen), and **Play again** appears next to the email. Counter is decoration; the email is never gated.

**Degradation**
- **No JS / print / crawlers:** current page, all nine levels, untouched. Button, HUD, pawn are `hidden` by default, un-hidden by JS (shelf precedent).
- **Reduced motion:** every move, stamp, route and dialogue state applies instantly. Same mechanic.
- **Touch:** Prev/Next buttons, 44px. Swipe is a bonus: horizontal only, 48px threshold, `touch-action: pan-y` so scrolling is never captured.
- **Keyboard:** HUD is a `role="group"`; announces `Level 3 of 9, SoftwareSeni` via a polite live region. Visible focus ring, 2px red, offset 3px.

**Hidden code:** type `RUN` and the pawn takes the nine levels in one 2.4s sweep. Mention nowhere. Cut first if budget tight.

## My lane: layout, rhythm, dark mode
- **Pawn:** 16px red disc, 3px paper ring (`box-shadow: 0 0 0 3px var(--paper)`), sits on the 2px spine, `left:-8px`. A 1px ink offset shadow, like a misregistered print. Not a sprite, not an emoji.
- **Spine:** keep the ink rule. Inked route is a *second* red dotted line over it, so unplayed track stays ink, played track turns red.
- **Unreached levels:** text stays full ink (AA). Only dot and label change. No dimming of copy.
- **HUD:** sticky below header, paper background, hairline above and below, mono 0.72rem caps, same grid as `.levels__label`. Not a floating toolbar.
- **Stamp:** sits in the label row, right-aligned beside the existing `You are here` box, same border weight. No overlap with text at 375px; it wraps under the label.
- **Dark mode:** tokens only (`--red`, `--ink`, `--paper`). No new hex. Stamp ring uses `--paper` so it reads on both.
- **Rhythm:** no change to the 28px level pitch. HUD adds one 44px band; Press start sits in the 28px gap under the lede.

## Must-nots
- No neon, glow, pixel art, confetti, bouncing, parallax, sound.
- No animation on load or scroll. No hiding or collapsing content.
- No dimming below AA; no new colours or faces; no layout shift when the pawn moves (it is `position:absolute`).
- Never gate the email or links behind the game.
- No achievement copy that claims facts about Ganis.

## Top 3 must-haves
1. **Content is always in the HTML**; the game is a layer. No-JS and print identical to today.
2. **Every effect is visitor-triggered and has an instant reduced-motion equivalent.**
3. **Route inks + pawn travels + stamp lands** reads as one printed gesture, tuned together, in one 700ms beat. If only one thing ships, it is this.
