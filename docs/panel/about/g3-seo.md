# G3 · SEO · Loop 3 verify

**SCORE 9/10 · SIGN-OFF: yes**

## My g2 must-fixes
| # | Item | Status | Evidence |
|---|---|---|---|
| 1 | Word-wrap only on Start | **FIXED** | `wrapWords()` guarded by `wrapped`, called from `begin()` and the `mlbb` code only. Curl of /about/: 0 `.w` spans. |
| 2 | Nine "Go to level" buttons live at rest | **FIXED** | Buttons are JS-made with `go.hidden = true`, shown in `begin()`, re-hidden in `end()`. Not in served HTML. |
| 3 | J/K with Caps Lock | **FIXED** | `e.key.toLowerCase()` for single characters (global.js ~579); `mlbb` buffer lowercased too. |

## Nice-to-haves
- Fonts-ready re-place: **FIXED** (`document.fonts?.ready.then(() => place(true))`).
- `end()` still uses `location.pathname`, dropping a query string: **NOT FIXED**, harmless (the page has no query use).
- Title-ink `wght` 300 start: **NOT FIXED**, no reflow reported at 375.

## Parity check (curl)
- One `h1`, nine `h2`s, all level text served, including "still uninstalling Mobile Legends".
- Title, description, canonical and ProfilePage JSON-LD intact.
- Pawn, route, HUD, stamps, Start and Play again are all `hidden` or `aria-hidden` in the HTML, so crawlers and no-JS see today's page.
- The inline mlbb stamp ("Uninstalling") is JS-only, so no duplicate or odd text is indexed.

## BLOCKERS
None.

## Next step
Ship. Optionally fix the `search` drop in `end()` later.
