# A1 · TY (typography): loop 1 proposal

## Backed concept: "Baseline" (a runner where the world is set in type)

**Genre:** one-button side-scrolling runner, 60 to 90 s per run, nine stages. Ganis is a runner and a type nerd, so the ground is a **typographic baseline** and the terrain is **letterforms**.

**Core verb:** run and jump (Space / Up / tap anywhere). Hold = higher jump. Mid-air tap = none (keep it learnable in one screen).

**Why type is the game, not the skin:**
- The ground is a hairline baseline. Platforms and hazards are giant glyphs from the level's own title, set in Fraunces: you hop the stem of the "P" in Papua, slide under the bowl, land on the crossbar.
- Obstacles per stage stay tied to the fact (GD owns the mechanics): KM Rinjani = a deck rocking on a swell, Yogyakarta = the bridge glyph "H", the long run = a 42 km distance counter that you chase, Prove = the Mobile Legends notification dodge.
- Collectibles are **the words of the level's sentence**, one per pickup. Collect all and the real HTML sentence is "set" in the caption bar. Miss some: the gaps show as underscores and fill on the next try. Replay hook = complete sentences.

## Lane: all type in the game

**Where each thing is rendered**
| Element | Layer | Face / setting |
|---|---|---|
| Giant level glyphs (terrain) | Canvas | Fraunces 700, 160 to 220 px, `ctx.font`, drawn once to an offscreen canvas per stage, then blitted (no per-frame text) |
| Level card (title + label) | **DOM overlay** | Fraunces, `font-variation-settings: "wght" 300 -> 650, "SOFT" 100 -> 0` over 360 ms. Canvas cannot animate SOFT/opsz, DOM can |
| Sentence / dialogue | **DOM caption bar**, `aria-live=polite`, the real text from the page | Newsreader 18 px / 1.45, words fade in (22 ms stagger, max 900 ms), any key finishes |
| HUD (level n of 9, distance, pause, quit) | DOM | IBM Plex Mono 12 to 13 px caps, `tabular-nums lining-nums` |
| Stamps ("CLEARED", "UNINSTALLING") | DOM | Plex Mono 700, 0.14em tracking, red border, ±3° tilt |

**Rules**
1. Fonts must be ready before the first frame: `await Promise.all([document.fonts.load('700 200px Fraunces'), document.fonts.load('18px Newsreader'), document.fonts.load('12px "IBM Plex Mono"')])` inside the dynamic import. No fallback glyph ever shows in the world; on timeout (1.5 s) the game does not start and the page stays as is.
2. Canvas text is baked, never measured per frame. Backing store = CSS size x min(devicePixelRatio, 2). Re-bake on resize/orientation only.
3. **Minimum sizes at 375 px:** caption 17 px, HUD 12 px (caps, tracked), level card title 40 px. Nothing the player must read sits in the moving area; reading text is in DOM bars that do not scroll with the world.
4. **Reading never races the run.** Caption sets while the pawn is in a safe "breath" zone (1.2 s with no obstacles). A sentence never needs more than 2 s to read in full once complete; the full text is also on the page and under "Skip to the page".
5. Contrast: world glyphs are ink on paper at AA (4.5:1) in light and dark, via CSS custom properties read once with `getComputedStyle` and re-read on `prefers-color-scheme` change. Obstacle glyphs differ by **shape and a 2 px outline**, not colour alone.
6. Numerals: Plex Mono tabular, so the distance counter does not jitter. No odometer roll.
7. Reduced motion: card axes snap, words appear whole, no glyph wobble; the game keeps playing.
8. Words come from the page text only. Pickup labels are literally the words of each level's sentence. No new copy except system UI ("Start", "Pause", "Skip to the page", "Play again", "Continue?").

## Must-nots
- No per-letter DOM spans on real content (kerning, a11y). Word spans only, text nodes only, links kept.
- No text rendered inside the per-frame draw loop; no `measureText` in the loop.
- No new typefaces, no pixel/arcade font (it would break the site's voice; Plex Mono caps already reads as "arcade label"). No faux-bold, no `text-shadow` glow, no CRT scanlines over type.
- No text under 12 px, no type below AA, no centred paragraphs, no ALL CAPS beyond HUD and stamps.
- No variable-axis animation on canvas (unsupported SOFT/opsz): do it in DOM only.
- No exclamation marks, no "GAME OVER". Failure line: "Again." in Plex Mono.

## Top 3 must-haves
1. **Fonts gated before frame one**, glyph terrain baked offscreen, DOM for all readable text. Legible and 60 fps at 375 px.
2. **Words-as-pickups** assemble the real level sentence in a DOM caption bar (the one place the player reads), so type is the reward and the replay hook.
3. **Level card ink-in** (Fraunces wght/SOFT) at every stage entry: the single signature typographic moment, DOM-only, skippable, instant under reduced motion.

## Risks
- Giant glyph terrain can make obstacle shapes ambiguous (a "g" bowl vs a gap). Mitigation: GD/IxD pick glyphs by silhouette (P, H, T, I, L, N), and every hitbox is drawn as a flat rectangle under the glyph.
- Fraunces 700 at 200 px is ~big in bytes only if subset; reuse the already-loaded variable file, no new font download.

**Backing:** Baseline (glyph-terrain runner). Would also accept GD's choice if it keeps a DOM caption bar and gated fonts.
