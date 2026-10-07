# N2 / SEO + perf seat: review of "Hmm."

**SCORE 8.5/10 | SIGN-OFF yes** (no must-fix; two small improvements below)

## What works (verified against the dev server, not just the diff)
- **Budget met with room.** `about-game.js` is 25.8 KB raw, **6.1 KB gz minified** (esbuild). Deck CSS is 14.4 KB raw, **3.5 KB gz**. Total about **9.7 KB gz against the 30 KB cap**. No images, fonts or audio.
- **Dynamic import only.** `global.js` calls `import(play.dataset.src)` on hover/focus/touchstart/click. Nothing game-shaped loads on first paint. Load failure is caught and the page is untouched. No Baseline code left in the bundle.
- **No thought text in JS.** The module reads `#thoughts` and filters by round id. Remaining strings in the JS are round prompts and UI chrome, which the plan allows. Bahasa `lang` is carried through (2 rows).
- **JSON in /about/ is correct.** One `<script type="application/json" id="thoughts">`, exactly one on the page, `jsonify` escapes `<`, so no `</script>` break. About 2.5 KB raw (<1 KB gz).
- **Anchors resolve.** I fetched every `href` in `data/thoughts.yaml`: all 6 question/idea fragments exist as `id` on `/questions-and-ideas/`, and all 6 essay URLs return 200. Ids come from `.File.ContentBaseName`, so they are stable slugs. IDs starting with a digit (`15-is-too-short`) are valid in HTML5 and work as fragments.
- **No CLS.** `.play-start[hidden]` is forced to `display:flex; visibility:hidden`, so the row is reserved before JS un-hides it. The game is a `position:fixed; inset:0` overlay, so page height never changes.
- **Content is not trapped.** Every thought stays reachable as a real page, and the end card's list is real `<a href>`s with escaped text. 12 rows, no unpublished journal lines in source or output.

## MUST-FIX
None.

## Should-fix (small, safe)
1. **`layouts/about/list.html`, the `<script type="application/json">` line.** It ships `kind`, `when` and `pattern` for all 12 rows. If the JS never reads `kind`/`when`, drop them from the YAML-to-JSON step with `{{ range hugo.Data.thoughts }}{{ $out = $out | append (dict "id" .id "href" .href "text" .text "pattern" .pattern "lang" .lang) }}{{ end }}` and `jsonify` that. Saves about 25 percent of the payload. Skip if the card shows kind or date.
2. **`assets/js/about-game.js` line 310.** `JSON.parse(document.getElementById("thoughts").textContent)` throws if the node is missing, for example a cached old /about/ HTML paired with a new bundle. `global.js` catches it silently, but the button then does nothing. Wrap it: `const node = document.getElementById("thoughts"); if (!node) throw new Error("no thoughts")` is not enough alone. Better, have `global.js` `catch` set `play.textContent = "Couldn't load. Try again"` so the failure is visible.

## Nice-to-have
- The crawlable link layer from my pitch (a static list of the 12 links on /about/) was ruled out, so /about/ gets no new internal links from this. If you want the SEO value, add a one-line `<noscript>` or a footer link to `/questions-and-ideas/` near Press start. Zero perf cost.
- Add `<link rel="modulepreload">` only if you want hover-less warm start. Not needed; hover preload already covers desktop.
- Fingerprinted bundle plus Netlify immutable cache header for `/js/*` would make Play again free. Check `netlify.toml`.
- Questions page ids: if a question title is renamed, its anchor changes and the game's `href` silently 404s on the hash. A Hugo build check that every `href` fragment exists would catch this.

Confidence 8/10 (not measured: Lighthouse run, real-network load of the module).
