# M1 / SEO + perf seat

**Backing: GD-style microgame cabinet ("Odd Jobs": 8 thoughts per run, one verb each, drawn from 24 published). Not a runner.**

## Why this concept suits my lane
- A shuffled set of short rounds gives **the second read for free** (different 8 of 24) and every round is one thought = one **link target**.
- Thoughts are data, not code. Data can live in the HTML, so the game stays a **renderer of page content**, never the owner of it.
- Small rounds are tiny modules: cheap to budget, easy to cut.

## The concept as I back it
- **Genre:** microgame run (WarioWare-shaped), about 2 min. Eight rounds of 6 to 9 s, each a single verb on one thought.
- **Controls:** one pointer (tap, drag) or arrow keys + Space. No second input type per round.
- **Examples (published rows only):**
  - 1: drag a clock hand to 8:33; 23 min is the only "stick".
  - 8: spot the typewriter monospace among five notary lines; tap it.
  - 7: it is 5 PM; tap "sorry" on 3 inbox cards, then the door.
  - 14: score keyboards by tapping 1 to 5; stop at five kept.
  - 12: a cafe sign flips open at 8; tap the one open earlier.
  - 23 (gated) 1 km: drag a 5 km bar down to 1 km. Playable only if Ganis approves.
- **End:** a receipt listing the 8 thoughts you met, each a **real link** (question or essay page), plus newsletter line. Play again reshuffles.
- **Degrades:** no JS = the static list below. Reduced motion = rounds untimed (turn-based). JS fails mid-run = the receipt still renders from DOM.

## HTML changes that carry SEO (internal links from a canvas game are not crawled)
1. **A server-rendered "Thoughts" list on /about/**: 24 `<li>`, each a sentence in his words + `<a href>` to the question or essay (rows 1 to 22, 29, 30; plain text for 25 to 28 only after approval). This is the crawlable link layer and the **only source of truth**.
2. Each `<li>` carries `data-round="clock|font|..."` and `data-id`. The game reads text and `href` from the DOM at start. **No thought text in the JS bundle.**
3. Wrap in `<details>` or a real section below the fold so it is visible, indexable and not hidden (no `display:none` tricks).
4. Bahasa items keep their own `lang="id"`.
5. Optional: reverse link, a one-line "You can play with this thought on About" on question pages. Cost near zero; I would skip unless Ganis wants it.
6. Do not add FAQ/Game schema. `Person` JSON-LD stays.

(Note: item 1 to 3 touch About HTML, which the brief says stays as is. This is a flagged exception; the page already has a thoughts-adjacent section, so the lowest-cost route is to extend it. Needs Ganis's OK.)

## Perf and budget
- Dynamic import on Press start only; zero bytes on first load beyond the launcher.
- **Budget: 30 KB gz total JS+CSS**, split core engine (about 8 KB, reuse Baseline loop/input/overlay) + 8 to 10 round modules at about 1 KB each, lazy-loaded per round via `import()` if size forces it. Delete Baseline's zones when replaced; do not ship both.
- No fonts, images or audio: canvas/DOM only, system and site fonts. Round graphics are drawn.
- Overlay is DOM text (crisp, selectable, translatable), not canvas text.
- No layout shift: game mounts in a fixed overlay; page height unchanged. No network, no tracking.

## Must-nots
- No thought text, URLs or counts hard-coded in JS or in client-built DOM.
- No content only reachable inside the game; every thought also in static HTML.
- No hidden or off-screen text for crawlers.
- Unpublished rows 23 to 28 never in source, build output or JSON until approved line by line; the game must pass with 24.
- No dual bundles (Baseline + new).

## Top 3 must-haves
1. **Static, crawlable thought list with real links, game reads from it.**
2. **Dynamic import only, under 30 KB gz, Baseline code removed.**
3. **Receipt screen with real `<a>` links to each met thought, plus a "Back to the page" focus return to the list.**

Confidence 8/10 on the SEO approach; 6/10 that eight distinct rounds fit 30 KB (cut to 6 rounds if over).
