# R1 IxD memo: /about/ as a journey

## Thesis
The journey is a **printed stage-select, not an animated game**. The page is a strategy-guide level list: seven numbered "stages" as plain `<ol>` rows, each one line. Interaction is native (`<details>` or anchors), keyboard-first, zero scroll effects. The only mechanic kept is two truths and a lie, reframed as the **bonus stage**. Nothing moves unless the visitor presses.

## Spec

**Structure (all content in HTML, JS optional):**
- Title block unchanged (heading verbatim).
- `<ol class="stages">`, 7 rows, mono label + one line each. No second timeline, no prose block. Stages:
  1. `STAGE 1 · Day one` Born in Papua, driven home in a patrol vehicle. The name stuck.
  2. `STAGE 2 · Age two` Five days on the KM Rinjani. Raised in Malang.
  3. `STAGE 3 · 2013` Employee #13 at SoftwareSeni.
  4. `STAGE 4 · 2016` General Manager. Ninety people, one desk per six.
  5. `STAGE 5 · 2021` 42 km solo around the Kraton.
  6. `STAGE 6 · 2025` Left after twelve years. Started Synetica.
  7. `STAGE 7 · 2026` Theme: Prove. Still uninstalling Mobile Legends.
- Row = `<details name="stages">` (exclusive accordion, native, no JS). `<summary>` is the stage line; opening reveals max one extra sentence (the 2008 Multiply blog, 2019 Director fold in here). Closed by default, so the page reads in one screen.
- `<summary>`: min-height 44px, full-width hit area, `cursor:pointer`, marker replaced by mono `+`/`-` in red.
- Current stage (2026) gets a red `YOU ARE HERE` mono tag (static text, not animated). A visited-state is not persisted: no localStorage, no "save" gimmick.
- **Bonus stage** (ttol): keep existing markup/JS. Slug becomes `BONUS STAGE`, h2 unchanged. Buttons: raise to `min-height:44px`; keep `aria-pressed` and `aria-live`. Verdict text after "Continue?" is not added.
- End: `CONTINUE?` mono slug, then email + Synetica line, shelf and colophon links as two plain links.

**CSS values:**
- `.stages summary{min-height:44px;display:flex;gap:16px;align-items:baseline;padding:10px 0;border-top:1px solid var(--rule);list-style:none}`
- Label: `font:500 .78rem var(--f-mono);color:var(--red);letter-spacing:.08em;min-width:5.5rem`
- Hover only inside `@media (hover:hover)`: row text goes red. Touch gets no hover state.
- `summary:focus-visible{outline:2px solid var(--red);outline-offset:3px}` (matches line 58).
- `details[open] summary` marker flips to `-`; no height transition.
- Reduced motion: existing global rule at line 694 already kills stamp; add nothing new. The stamp stays the only animation (0.25s, user-triggered).
- Mobile 390px: label stacks above text (`flex-direction:column` under 600px).

**Keyboard:** Tab reaches each summary, Space/Enter toggles, arrow keys not hijacked. Bonus buttons reachable in DOM order after stage 7.

## Must-nots
- No scroll-triggered reveal, progress bar, parallax, fade-in, auto-advance, typewriter.
- No pixel fonts, health bars, XP numbers, sound, localStorage "progress".
- No JS required for stages; do not replace `<details>` with custom ARIA widgets.
- No hover-only information. No targets under 40px.
- No second route/map page; no horizontal-scroll map (fails at 390px).
- No invented facts or stats ("character stats" invented from nothing is out; traits must come from the brief table).

## Top 3 must-haves
1. Native `<details name>` stage rows, 44px targets, zero JS, content visible to no-JS and print.
2. Static, quiet game vocabulary only (STAGE n, YOU ARE HERE, BONUS STAGE, CONTINUE?) in mono red; the stamp stays the sole animation.
3. TTOL kept as the bonus stage with 44px buttons, focus ring, `aria-live` verdict, hover under `@media (hover:hover)`.
