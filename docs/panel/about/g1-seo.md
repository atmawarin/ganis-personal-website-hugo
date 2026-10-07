# G1 · SEO lead · "The Pawn"

## Pitch: signature mechanic **Pawn** (press start, walk the spine)
The page ships as it is: nine levels in HTML, red spine, "You are here" on Prove. A **Press start** button (server-rendered inside a reserved 44px row, un-dimmed by JS) sends a red ink pawn (a 14px disc, `aria-hidden`, JS-created) to Level 1. Then the visitor plays:
- **Move:** Down/Up, J/K, or swipe-free tap on "Next level" / "Back" buttons (the same row, 44px). Tapping a level's red node jumps there. Arrows are captured only after Start and released on Esc or End, so normal scrolling is never hijacked.
- **What moves:** the pawn slides to the next node (transform only, 420ms, `cubic-bezier(.2,.7,.2,1)`). A red overlay on the spine inks behind it (`scaleY` 0→n, same timing, `transform-origin: top`). Behind the pawn a dotted route (CSS `repeating-linear-gradient`) turns solid.
- **Stamps:** leaving a level lands a mono **CLEARED** stamp in a reserved slot beside its label (scale 1.2→1, 120ms, as on the shelf). Decorative, `aria-hidden`; no counters, no scores, no claims about Ganis.
- **Dialogue:** the active level's text gets `clip-path` set in `steps()` over ~900ms, once, only on arrival. The full text is always in the DOM, never split into per-letter spans. Esc or a second key press completes it.
- **End:** pawn reaches Prove; the **Continue?** block gets a red ring pulse (one 600ms ring, then still). "Play again" resets the route. Resting state equals the no-JS page.

**Degrades:** no JS = today's page, Start row empty and invisible. Reduced motion = every state applies instantly, mechanic intact. Touch = buttons plus node taps. Keyboard = focus moves to the arrived `li` (`tabindex="-1"`, `aria-current="step"`), visible focus ring. Print = no pawn, no stamps.

## My lane: SEO, crawl, performance
**Spec**
- **One h1, unchanged.** Levels stay `h2`; no new headings, no widgets with their own h1/h2.
- **All nine levels in HTML, visible, all the time.** Never `display:none`, `visibility`, `content-visibility:auto`, `<details>`, or text swapped by JS. The game moves a marker over content; it does not reveal content.
- **Zero layout shift.** Pawn, route and stamps are `position:absolute` inside `.levels`, animated with `transform` and `opacity` only. Start row and stamp slots have reserved size in CSS, so `.is-enhanced` changes nothing in flow. Pawn position is measured from `offsetTop` on Start and on `resize` (debounced), never on scroll.
- **No work on load or scroll.** No `requestAnimationFrame` loop, no scroll listener, no IntersectionObserver. Animation is CSS transitions or one WAAPI call per move, fired only from a visitor event. `will-change` set during a move, removed on `transitionend`.
- **Budget.** Vanilla JS in `global.js`, ≤ 2.5 KB gzipped added, no library, no new request, no fonts, no images. CSS ≤ 1.2 KB gz. Lighthouse perf and CLS 0.00 must not move versus current.
- **A11y that crawlers and screen readers share.** Decorative parts `aria-hidden`. One `aria-live="polite"` line only: "Level 3 of 9: On the move". No announcement per letter.

**Must-nots**
- No content generated, truncated or reordered by JS; no per-letter spans; no tracking, storage or sound. No intro gate or overlay before the page (no interstitial, no "press start to read").
- No scroll-jacking, no sticky full-height game stage, no `scroll-snap` forced.
- No animation that hides the lede or the h1 on first paint.

**Top 3 must-haves**
1. **Content parity:** with JS off, or while the pawn is parked, the HTML text, order and `h2` structure are byte-identical to today's.
2. **CLS 0, no scroll or load work:** every moving part is transform/opacity, triggered only by Start, key, tap or node click.
3. **Linkable levels:** hash updates per move, ids unchanged, focus lands on the arrived level, reduced motion applies states instantly.

**Verdict on ideas:** adopt pawn, inking route, stamps, Start, continue ring, hidden code. Rewrite dialogue as clip-path (no spans). Swipe is optional; buttons are mandatory, and I would skip swipe because it collides with vertical scroll.
