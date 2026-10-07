# A1 · SEO and performance lead: "Nine Levels", a one-button runner

**Backing: a side-scrolling one-button runner** (jump / duck-roll, one input), nine 25 to 40 s stages, each with one twist drawn from the real fact. Procedural vector art only, no image or audio files. I back it because it is the cheapest genre to ship at 60 fps and the easiest to keep out of the page's critical path.

## The game in brief
- **Genre and verb:** auto-run, one verb: **jump** (tap, Space, Up). Hold = higher, short press = hop. A second input, **duck** (Down, or swipe-down is NOT used; a bottom-right 56px button), appears from level 5.
- **Controls:** phone = tap anywhere on the canvas to jump + one duck button; keyboard = Space/Up, Down, P pause, Esc quit. A "Skip to the page" link is the first focusable element.
- **Feel numbers:** logical canvas 480x270, scaled by CSS; run speed 150 px/s rising to 210; gravity 1400 px/s2; jump v0 -440 (hold up to 180 ms for +25%); coyote time 80 ms; jump buffer 100 ms; fixed 60 Hz update; hit = 400 ms rewind to last checkpoint, never a hard fail.
- **Stages (twist tied to fact):**
  1. **Papua:** ride the patrol car *Garnisun*; lane-hop potholes.
  2. **Malang:** deck of the KM Rinjani; jump swells; five day/night fades in 35 s for "five days, four nights" (slow fades, no flash).
  3. **On the move:** tap to flip Papua/Jakarta lane; schools SMA 2 / SMA 3 as gates.
  4. **Yogyakarta 2002:** becak over the bridge; gap-jumps; it is identical on every replay ("it hadn't changed").
  5. **Jakarta:** commuter crowd; duck unlocks.
  6. **SoftwareSeni:** collect desks; counter 13 to 90, one desk per six. Nobody is an enemy.
  7. **The long run:** 0 to 42 km meter, family-car water stations refill stamina; dusk at 31 km (last 11 after dinner).
  8. **Synetica:** short; test a block before stacking it.
  9. **Prove 2026:** run on; MLBB notifications fly in, dodge them; "Still uninstalling."
- **Start / end:** Press start overlay; ends at Prove with the Continue block link and Play again. Replay hook: best time (optional localStorage), stage select after first clear, `mlbb` code.

## Degrade
No JS or crawler: today's page, untouched. Reduced motion: no shake, no parallax, slower fades, same gameplay. Tab hidden: auto-pause.

## My lane: SEO / performance spec
1. **Zero load cost.** `assets/js/about-game.js` built by a second `js.Build` (format esm, minified, fingerprinted) only in `layouts/about/list.html`. `global.js` gets a ~10-line launcher that on click does `import(url)` where `url` sits in a `data-src` on the Play button. Warm it on `pointerenter`/`focus`/`touchstart` of the button only (one `modulepreload` link injected then), never on load or idle.
2. **Budget:** module <= 30 KB gz total, no library, no fonts or images fetched, no network, no WebAudio.
3. **Content parity and indexing:** the nine levels, player card and Continue stay as server-rendered HTML. The game **reads titles and labels from the DOM** so it adds no second copy of facts. The overlay is `hidden`/not in HTML; created at Play. No canvas text is a ranking surface; JSON-LD and meta unchanged.
4. **CLS 0, LCP unchanged:** overlay is `position:fixed; inset:0`, created on Play; no layout of the page changes, scroll position saved and restored on exit; Play button already sized.
5. **Frame discipline:** fixed-timestep loop with accumulator, one canvas, DPR capped at 2, static layers pre-rendered to an offscreen canvas, zero allocations per frame (pooled obstacles), no `getBoundingClientRect` in the loop. Budget 6 ms/frame on a mid Android. Cancel rAF on exit and on `visibilitychange`.
6. **Core Web Vitals guard:** INP: the launcher handler must return in <50 ms (import is async, show "Loading" state). Check with Lighthouse before/after: TBT, JS transfer on /about/ unchanged to within 1 KB.
7. **Crawlers:** Play is a `<button>`, not a link; no `#play` hash states, no extra URLs, no `noindex` games route. Hash updates per level stay `replaceState`.

## Must-nots
- No `import()` or `modulepreload` on load; no game code in `global.js` beyond the launcher.
- No client-rendered content that the page lacks; no new facts in the canvas.
- No autoplay, no sound by default, no flashing above 3 per second, no `localStorage` beyond best time.
- No scroll-lock that shifts layout (no `overflow:hidden` toggling without scrollbar compensation).
- Existing pawn code is removed from `global.js` (or moved into the module): dead weight on every page is a regression.

## Top 3 must-haves
1. **Dynamic import on Play only**, <= 30 KB gz, with a measured before/after Lighthouse run on /about/.
2. **Fixed-timestep, allocation-free canvas loop** holding 60 fps on a mid phone, pausing when hidden.
3. **Page HTML unchanged and complete**; the game derives its text from it, and no-JS, print and crawlers see exactly today's page.
