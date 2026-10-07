# Brief: redesign /reading/ ("The shelf")

**Tier: L.** New interaction and a page-level redesign. Text-only phase: Ganis asked for **10 options, discussed by the panel, no code changes yet.**

**Ganis's ask (verbatim intent):** redesign the reading page so it wows and is not boring. Be really creative, especially in interaction and animation. Give 10 options.

## Current state
Screens: `docs/panel/reading/screens/reading-1280.png`, `reading-390.png`, and `home-1280.png` (home's "On the shelf" spines block).

- Template: `layouts/reading/list.html` → `layouts/partials/shelf.html`. CSS: `assets/css/main.css` lines ~494–505 (`.shelf`, `.book`), home spines ~304–330.
- It's a cover grid (auto-fill 150px), grouped by year with a big Fraunces year heading, then title / author (mono) / italic quote truncated to 140 chars. It reads like a Goodreads export: 104 near-identical cards.
- Book pages are **not rendered** (`build.render: never`; `/reading/*` 301s to `/reading/`). Everything must live on this one page.

## The data (per book, in `content/reading/*.md`)
| Field | Notes |
|---|---|
| `title` | Stars are encoded as ⭐️ prefixes in the title. 24 books are starred, 33 stars in total; *The Elements of Typographic Style* has five. The template only checks "has a star". |
| `description` | A one-line takeaway or a quote, mixed English/Bahasa, some long (Nagabumi). Inconsistent: some are Ganis's words, some are blurbs. |
| `cover` | Image in `static/images/reading/`. Covers vary wildly in style and quality. |
| `publishDate` | When read. 2016: 7 · 2017: 2 · 2018: 7 · **2019: 27** · 2020: 13 · 2021: 11 · 2022: 15 · 2023: **0** · 2024: 8 · 2025: 14 |
| `authors` | Free text. |
| `categories` | 5 real buckets: business & leadership 40, stories & narratives 31, science & systems 13, self-mastery 12, design & creativity 5 (+2 strays). |
| `status` | 🟢 97 finished, 🟡 2 in progress. |

## Known defects (fix regardless of option)
1. *Why We Die*'s cover file `why-we-die.jpeg` is actually the *Infinite Country* cover.
2. The category filter row renders only "All" (taxonomy terms not built; `/categories/*` 301s to `/reading/`).
3. The grid's right edge stops short of the `--edge` rule above it.
4. Several titles carry full subtitles (*The Sales Acceleration Formula: Using Data, Technology…*), and the long titles wreck the rhythm.
5. The header says 104 books; there are 105 book files plus `sapiens` and `sapiens-vol-1-&-2` look like a duplicate.

## Constraints from earlier decisions (`docs/redesign/`)
- The chrome is quiet (paper, ink, one red; Fraunces / Newsreader / Plex Mono); the essays are the loud part. **The reading page is chrome**, so how loud it may get is an open question the panel must rule on.
- **The "one signature interaction" rule** (the home name-setter) and "no scroll animations, no fade-ins" were set for the redesign. Ganis now explicitly asks for creative interaction and animation on this page. The panel must decide how far to bend that rule and justify it, not ignore it.
- No client-side rendering of content: all 104 books must be in the HTML for SEO and no-JS readers. JS may only enhance.
- `prefers-reduced-motion`, touch, keyboard, 390px width, dark mode all required.
- Never invent facts about the books or what Ganis thought of them. New copy (e.g. per-book notes) must come from Ganis.

## Sources of truth
Book data: the front matter. Ganis's taste: `content/colophon`, `AGENTS.md`, the essays. The site's identity: a specimen book of typography and print history.
