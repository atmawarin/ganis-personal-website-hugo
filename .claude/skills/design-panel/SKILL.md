---
name: design-panel
description: Run the seven-seat senior review panel (design, typography, interaction, product, SEO, brand, voice) on any change to ganisatmawarin.com, the Hugo "Specimen Book" site. Use whenever a page, layout, partial, essay theme, interaction, essay or site copy is added or changed, before it is pushed to Netlify.
---

# Specimen Book review panel

Ganis's standing rule: **every change to the site goes through this panel before it ships.** Claude acts as product manager. Seven senior reviewers each own one lane. Claude synthesizes, builds, and loops until every seat in the tier is satisfied.

The panel ran the 2026 redesign (v1 → v4). Read `docs/redesign/00-panel-kickoff.md` → `03-round-3-and-ship.md` for the decisions it already made, and don't relitigate them without a reason.

## The panel (fixed roster)
| Seat | Persona | Owns |
|---|---|---|
| **SD** (design) | Senior designer, editorial/print background | layout, text edges, rhythm, chrome vs. essay balance, dark mode, each theme looking like its designer and not a default blog |
| **TY** (type) | Typography expert, type historian | period-accurate faces and honest substitutes, measure, quotes/figures/small caps, font loading order, dates and attributions in `data/styles.yaml` |
| **IxD** (interaction) | Interactive designer | the one signature interaction, hover/touch, targets, keyboard and focus, reduced motion, no JS where CSS works |
| **PM** (product) | Product manager | the site's four jobs (below), home/index structure, duplication across pages and essays, what to cut |
| **SEO** | SEO lead | per-page `lang`, titles/descriptions, OG cards, JSON-LD, 301s, RSS, sitemap/robots, thin pages, no client-side rendering |
| **BB** (brand) | Brand & business manager | how Ganis, Synetica, SoftwareSeni, Davo, clients and family come across; reputational and privacy risk; channels |
| **V** (voice) | Editor for Ganis's voice, English and Bahasa | `AGENTS.md`, the Indonesian voice guide, `/unslop` rules, facts and names, no invented anecdotes |

**The four jobs (PM):** (1) entertain and feel like Ganis, (2) earn a second read, (3) newsletter signups, (4) a quiet route to Synetica.

## Size the change first
Pick the tier before running anything, and state it in the brief. When unsure, go one tier up.

| Tier | What counts | Which steps run | Agents (approx.) |
|---|---|---|---|
| **S: small** | A copy line or factual fix, one value (colour, spacing, timing), a bug fix that doesn't change the design | Brief → Build → **one** verify loop (step 7) with only the seats that own the change (copy/facts → V, + BB if a real person is named; a colour → SD, …). Skip steps 2, 3 and 5. | 1–2 |
| **M: medium** | A change to an existing layout, partial, theme or interaction; an edited essay; one page's structure | Brief → Build → loop 2 review with all seven seats → apply → loop 3 with the seats still below 9 | 7–10 |
| **L: large** | A new section, page type, essay theme, new essay, or interaction; anything touching URLs, redirects, schema, or how a real person is portrayed | The full loop below, steps 1–9 | 14–30 |

Each tier still closes on the same bar: every seat in that tier scores ≥ 9 and signs off. If an S-tier verify raises a BLOCKER outside its seats, move up to M.

## Running the seats
- **Preferred: Workflow** with one agent per seat, all in parallel. This only works when Ganis typed `/design-panel` himself, or asked for a workflow in his own words.
- **Fallback: Agent tool.** When I picked up this skill on my own (through the standing rule), launch the seats as parallel `Agent` calls in **one message**, one per seat, using the same prompt and output file. Don't wait for a Workflow, and don't skip the panel.
- Each seat's prompt includes its persona row from the table above, the standing rules for its lane, the brief, the screenshot paths, the changed file paths, and the memo file it must write.

## The loop (hard cap: 5 loops; close early when every seat scores ≥ 9 AND signs off)
1. **Brief.** Write `docs/panel/<topic>/BRIEF.md`: what is changing, why, the tier, and the pages affected. If real facts are involved (dates, names, numbers, quotes), list their sources (the essay, the vault, Ganis) first.
   Capture the current state with the `hugo` preview server running on :1316 (`preview_start name:hugo`):
   ```bash
   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1280,2400 --screenshot=docs/panel/<topic>/screens/<page>-1280.png http://localhost:1316/<path>/
   ```
   Repeat at `--window-size=390,2400` for `-390.png`. Same naming as `docs/redesign/screens/`.
2. **Loop 1: propose.** Run the seven seats in parallel. Each writes `docs/panel/<topic>/r1-<seat>.md` with: a thesis, an exact spec for its lane, the must-nots, and its top 3 must-haves.
3. **PM synthesis.** Write `docs/panel/<topic>/PLAN.md`: what was unanimous, and a ruling with a reason for each disagreement. The rulings are binding.
4. **Build.** Implement it. Verify in the browser pane (Claude_Browser tools): light and dark, 1280 and 390 widths, console clean, `preview_logs` clean. Re-shoot the screens.
5. **Loop 2: review.** Seven agents score the work (SCORE x/10, SIGN-OFF yes/no) and list MUST-FIX items with exact file and change, in `docs/panel/<topic>/r2-<seat>.md`.
6. **Apply** every must-fix (merge conflicting values into one coherent set) and verify live.
7. **Loop 3+: verify.** Seats mark each must-fix FIXED or NOT FIXED and raise BLOCKERs only for things that are actually wrong. Later loops can include only the seats still below 9.
8. **Ship.**
   1. Run `hugo --gc --minify` and confirm it builds with no errors or warnings.
   2. If URLs moved or were removed, add the 301 in `netlify.toml`, **above** any catch-all for that section (e.g. `/running/*`).
   3. Commit on `develop`, one commit per logical change, in the repo's message style (`content: …`, `home: …`, `design: …`).
   4. Pushing, opening a PR to `main`, and merging are outward-facing: do them only when Ganis says so. A PR gets a Netlify deploy preview; merging to `main` deploys ganisatmawarin.com.
9. **Report.** Write `docs/panel/<topic>/REPORT.md` in the style of `docs/redesign/03-round-3-and-ship.md` (an SVG score chart in the site palette, a verdict table, what changed, what's left for Ganis). Then tell Ganis the scores per seat, what changed, and the open items (sign-offs from real people, facts only he can confirm).

## Standing rules the panel enforces
- **Chrome (SD, TY):**
  - Warm paper `--paper`, near-black `--ink`, and **one red** `--red`; all colours as tokens in `assets/css/main.css`, with dark mode under `prefers-color-scheme` and `[data-theme]`.
  - Fraunces for display, Newsreader for reading, IBM Plex Mono for labels and slug lines. The chrome stays quiet; the essays are loud.
  - Rules and blocks share one text edge (`--edge`); masthead and footer rules run full-bleed.
- **Essay themes (TY, SD):**
  - One designer, one place, one year per essay. Register it in `data/styles.yaml` and style it in `assets/css/themes/<key>.css`; select it with `style:` in the essay's front matter.
  - Faces are period-accurate, or the nearest honest open-source substitute, and the colophon says so. Check dates and attributions in the `note`.
  - Measure 60–72ch. Ragged-right for Indonesian (no `id` hyphenation). Real weights only, no faux bold.
  - Font loading: index subsets (`&text=`) load first and the essay's full faces last.
- **Interaction (IxD):**
  - One signature interaction on the home page (the name-setter). No scroll animations, no fade-ins.
  - Hover only under `@media (hover:hover)`; transform instead of layout shifts; touch targets ≥ 40px; visible focus.
  - `prefers-reduced-motion` turns transitions off. Prefer CSS to JS; no client-side rendering of content.
- **SEO:**
  - `lang` per essay (id/en). One h1 per page. Absolute OG images with width, height and alt; JSON-LD Person + BlogPosting reads each essay's own card.
  - Every removed URL gets a 301. Stubs (books, races, notes) are not rendered as pages. RSS is essays only. Taxonomies are `noindex`.
- **Brand (BB):**
  - Email and the newsletter are the only channels: no LinkedIn, no Twitter, no comments, no trackers (analytics only if Ganis turns them on in `hugo.yaml`).
  - Synetica gets one honest line, never a banner.
  - SoftwareSeni, Davo, former colleagues and clients are written about graciously; nothing reads as a dig or identifies a client.
  - Privacy: no birth year, no kids' details beyond what Ganis already published. Real people's lines need Ganis's sign-off.
- **Voice (V):**
  - English: Ganis's own voice, specific, deadpan, self-deprecating, ending on a quiet turn. Bahasa: follow `docs/redesign/04-indonesian-voice-guide.md`.
  - **Never invent** anecdotes, quotes, people, numbers or facts. Spell names exactly as Ganis gives them. A dated essay keeps its date and gets no hindsight.
  - No em dashes in prose. Headings in sentence case. Straight quotes in the source (Hugo's typographer curls them). No AI tells or motivational-listicle patterns.
  - Front matter: only `description:` and `dek:` may be rewritten; `dek` ≤ 100 characters.

## Practical notes
- Keep each workflow under 10 agents (seven seats per loop).
- Write all panel memos to `docs/panel/<topic>/`. The redesign series in `docs/redesign/` is the precedent to learn from.
- After editing `assets/js/global.js`, syntax-check with `node -e "new Function(require('fs').readFileSync('assets/js/global.js','utf8'))"`. Hugo fingerprints assets, so no manual cache-busting is needed.
- Content-only S-tier fixes from Ganis ("Stella, not Setella") still get the V seat, but one quick pass is enough.
