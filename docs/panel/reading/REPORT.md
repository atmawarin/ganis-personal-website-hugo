# /reading/ panel: report (text phase)

**Outcome:** Ten options were debated over four loops. The panel converged on **"Date Due"**: the shelf is a library card, and the visitor holds the stamp. All seven seats scored the plan 9/10 and signed off, with wow at 8–9. No code has changed.

<svg viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace" font-size="12">
  <rect width="760" height="250" fill="#f4efe6"/>
  <text x="20" y="28" font-weight="700" fill="#1b1a17">PLAN SCORE BY SEAT: LOOP 3 (v1) → LOOP 4 (v2), OUT OF 10</text>
  <line x1="200" y1="40" x2="200" y2="236" stroke="#1b1a17"/>
  <line x1="650" y1="40" x2="650" y2="236" stroke="#c23a20" stroke-dasharray="3 3"/><text x="656" y="52" fill="#c23a20" font-size="10">ship bar 9</text>
  <g fill="#1b1a17">
    <text x="20" y="62">Senior designer</text><rect x="200" y="52" width="400" height="8" fill="#9b9282"/><rect x="200" y="62" width="450" height="8" fill="#c23a20"/>
    <text x="20" y="90">Typography</text><rect x="200" y="80" width="425" height="8" fill="#9b9282"/><rect x="200" y="90" width="450" height="8" fill="#c23a20"/>
    <text x="20" y="118">Interaction</text><rect x="200" y="108" width="400" height="8" fill="#9b9282"/><rect x="200" y="118" width="450" height="8" fill="#c23a20"/>
    <text x="20" y="146">Product</text><rect x="200" y="136" width="400" height="8" fill="#9b9282"/><rect x="200" y="146" width="450" height="8" fill="#c23a20"/>
    <text x="20" y="174">SEO</text><rect x="200" y="164" width="400" height="8" fill="#9b9282"/><rect x="200" y="174" width="450" height="8" fill="#c23a20"/>
    <text x="20" y="202">Brand &amp; business</text><rect x="200" y="192" width="400" height="8" fill="#9b9282"/><rect x="200" y="202" width="450" height="8" fill="#c23a20"/>
    <text x="20" y="230">Voice</text><rect x="200" y="220" width="400" height="8" fill="#9b9282"/><rect x="200" y="230" width="450" height="8" fill="#c23a20"/>
  </g>
  <text x="560" y="28" fill="#9b9282" font-size="10">■ loop 3</text><text x="620" y="28" fill="#c23a20" font-size="10">■ loop 4</text>
</svg>

## How the panel got there
| Loop | What happened | File |
|---|---|---|
| 1 | Seven seats pitched 21 concepts; 3D shelf, carousel and cover wall killed unanimously | `r1-*.md` |
| — | PM merged them into ten options, plus one wildcard (physics) | `OPTIONS.md` |
| 2 | Scored and debated. Date Due + Rubricator's Pass led; arrival motion dropped unanimously | `r2-*.md`, `PLAN-v1.md` |
| 3 | v1 scored 8–8.5 with wow 7–8. 33 must-fixes and 7 wow ideas | `r3-*.md` |
| 4 | v2 applied every fix and adopted 5 ideas. **All 9, all signed off** | `r4-*.md`, `PLAN.md` |

## Final verdicts
| Seat | Score | Wow | Sign-off |
|---|---|---|---|
| Senior designer | 9 | 8 | ✅ |
| Typography | 9 | 8.5 | ✅ |
| Interaction | 9 | 9 | ✅ |
| Product | 9 | 8.5 | ✅ |
| SEO | 9 | 8 | ✅ |
| Brand & business | 9 | 9 | ✅ |
| Voice | 9 | 8 | ✅ |

## Left for Ganis
See `PLAN.md` §8. Each item has a safe default, so none of them blocks the build:
- which dates are real
- whether the 2019/2025 batch years are real
- what ★ means
- whether 2023 is a true zero
- quote / note / blurb flags
- approving "ENOUGH."
- the Synetica line

## Next step
Build on Ganis's go. Fix the data first, then the skeleton, then the stamp, then the verbs. Then run loop 5 against the live page.

---

# Build phase (loops 5–6)

**Outcome:** Built on `develop`. The panel reviewed the live page: loop 5 scored 8–9 with 10 must-fixes, and every one was applied or formally deferred. Loop 6: **all seven seats ≥ 9 and signed off.**

| Seat | Loop 5 | Loop 6 | Wow | Sign-off |
|---|---|---|---|---|
| Senior designer | 8.5 | 9 | 8 | ✅ |
| Typography | 8.5 | 9 | 8 | ✅ |
| Interaction | 8 (no) | 9 | 9 | ✅ |
| Product | 8 | 9 | 8.5 | ✅ |
| SEO | 9 | — | 8 | ✅ |
| Brand & business | 9 | — | 9 | ✅ |
| Voice | 9 | — | 8 | ✅ |

## Ganis's decisions applied
These override PLAN v2 where the two conflict.
- **★ means favourite.** The F key runs "Show my favourites", which ends with a `★ 24 / 104` tally stamp.
- **The subject filter is fixed rather than removed.** It's an in-page filter: alphabetical, no counts, no new URLs.
- **The 2019 and 2025 batch dates are spread across their year.** Only the year is shown, so the rail is sized by count.
- **2023:** Amazon shows no orders that year, and the only Kindle item is a *Meditations* translation bought in March 2023. Readwise and Audible needed a sign-in. The card reads "No dated entries."
- **"Enough." on the sixth strike:** the call was delegated to PM, who kept it.

## Data fixes
- **Sapiens:** the original and the graphic history are two books. The graphic one now has its full title and the "Hahari" typo is fixed.
- **Wrong authors:**
  - *21 Lessons* now credits Harari, not Jim Collins.
  - *Thinking Fast and Slow* now credits Kahneman; it had a category in its author field.
- **14 other name and title typos** fixed, among them Adams, Tolle, Keller, Shepherd, Paramahansa, H. Jon Benjamin, Ferriss, Greenberg, *Organizational*, *Exercises*, *The Elements of Typographic Style*, *Siddhartha*, *Simple Numbers…!* and *Selling the Invisible*.
- **Stray categories:** the two category formats are normalised, and *Why We Die* is merged into science & systems thinking.

## Deferred (logged, not blocking)
- Size-adjusted fallback `@font-face` blocks for Fraunces and Newsreader. They are site-wide, so they belong to a separate change.
- Real small caps for author names, which needs a face with `smcp`.
- Esc lifting every stamp without confirmation. Single-key shortcuts are mitigated by the visible buttons.
- The 💩 marker on three titles is stripped on display, the same as on the old page.

## Left for Ganis
1. **The *Why We Die* cover:** the file is the *Infinite Country* cover. A replacement image needs Ganis's approval to download.
2. **2023:** whether he read anything that year. If Readwise or Audible are signed in, the check can be re-run.
3. **Whether *Meditations* (on the shelf as 2019) was actually the March 2023 Kindle translation.**
