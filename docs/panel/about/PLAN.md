# PLAN: /about/ as a printed stage select

Synthesis of `r1-*.md`. Rulings are binding for the build.

## Unanimous (7/7)
- **Delete the prose body.** The seven paragraphs and the nine-step timeline duplicate each other. One level list carries the facts; each fact appears once.
- **Heading verbatim:** `Hi, I'm Ganis, and I think you're looking amazing today.`
- **The game lives in structure and mono labels**, in the site's print vocabulary (a strategy-guide chapter list). No pixel fonts, neon, XP or health bars, emoji, sound, scroll effects or fade-ins.
- **Two truths and a lie stays**, relabelled as the bonus stage; its JS is untouched. The stamp remains the page's only animation, and it's user-triggered.
- **Close on "Continue?"** with the email line and the quiet Synetica line.
- No new facts. Every line traces to the BRIEF fact table.

## Rulings on disagreements
| Question | Options | Ruling | Why |
|---|---|---|---|
| How many levels | 9 (BB), 7 (IxD), 6 (PM, SD, V) | **6** | Collapsing SoftwareSeni 2013/2016/2019 into one level is the single biggest cut. Multiply 2008 goes. |
| Hide detail in `<details>` (IxD) | accordion vs all visible (SEO, SD, V) | **All visible** | At ~25 words a level there's nothing to hide; hidden text is discounted and adds a second interaction. |
| Level label | World 1-1 / Stage / Level | **`Level 1 · Day one`** (mono caps, red) + a short Fraunces **h2** place title (Papua, Malang, …) | SEO wants real h2 anchors; TY wants a Fraunces title; V's place names are both. |
| Synetica as "boss level" (SD) | | **No** (BB) | Synetica gets one level line plus the existing "same person, with a calendar" line. No boss metaphor for any company. |
| Player card vs save-point lines | `dl` card (PM, SD, TY, SEO) vs prose lines (V) | **`dl` player card** with portrait, 6 rows, dotted leaders | Kills the trait paragraphs in the fewest words. Facts already in the bonus stage (Mythic, Economics, marathons) are not repeated in it. |
| Layout | single column (SD) vs keep sidebar | **Keep the two-column grid.** Main: lede, levels, Continue. Aside: player card, bonus stage. On mobile the card comes first (DOM order: aside then main, placed with grid areas on desktop). | Keeps the existing `--edge` and rhythm; the card is the "character select" you see before the levels on a phone. |
| Current level | | Level 6 gets a **filled red node** and a mono `You are here` tag. Cleared levels: hollow ring. | Only extra red on the list. |
| Newsletter | form (PM) vs link (BB) | **Link to Letters** in the Continue block | Stay light; the footer already carries the subscribe partial. |
| Lede | | `Six levels so far. Still playing.` | Shortest of the proposals. |

## Copy (exact, from V with rulings applied)
Slug: `About · Yogyakarta, Indonesia`
1. `Level 1 · Day one` **Papua.** Driven home from the hospital in a military patrol vehicle called a *Garnisun*. Shortened, it became my name.
2. `Level 2 · Age two` **Malang.** Shipped west on the KM Rinjani, five days and four nights, to be raised by my grandparents.
3. `Level 3 · 2013 to 2025` **SoftwareSeni.** Employee #13, hired as Product Manager for Villalet. General Manager at ninety people, one desk for every six. Director by the end. (link to the twelve-years essay)
4. `Level 4 · 2021` **The long run.** 42 km around the Kraton, the family car as a water station, the last 11 km after dinner.
5. `Level 5 · 2025` **Synetica.** Left SoftwareSeni after twelve years. Started [Synetica](https://synetica.co), to test products before anyone builds them.
6. `Level 6 · 2026` **Prove.** The year's theme. Still running, still reading, still uninstalling Mobile Legends. `You are here`

Player card (`dl`, mono keys, Newsreader values): Player: Ganis · Home: Yogyakarta · Party: Gita, Zen and Zia · Daily quest: a slow morning run · Loadout: trees, typography, single-origin coffee · Save point: phone in a drawer, 6 to 9 PM · Stats: chicken at parties, lion at ping-pong.

Bonus stage slug: `Bonus stage · a game I play with new hires`. h2, options and verdict unchanged.

Continue?: email line unchanged. Below it, one mono row: `Pause menu: the shelf · the colophon · Letters`.

## Photo
`IMG_0478` (2021, a favourite): both thumbs up, mouth open, at his desk. It's the greeting's answer. Crop to 4:5 portrait around the face and thumbs, grayscale via the existing filter, ≤ 150 KB, EXIF stripped. Caption: `The author, agreeing with you.` Alt: `Ganis Angger Atmawarin at his desk, grinning with both thumbs up at the camera.` Set as `image:` so JSON-LD ProfilePage and OG pick it up. Above the fold on mobile: no `loading="lazy"`, `fetchpriority="high"`. The old Bowser portrait stays in `static/` (used nowhere else? check) but is no longer referenced here.

## SEO
- description: `Ganis Angger Atmawarin: named after a patrol car, twelve years at SoftwareSeni, now building Synetica in Yogyakarta. The journey so far, in six levels.`
- One h1. Level titles are h2 with ids. JSON-LD unchanged in shape; gains `image`.

## Interaction / CSS
- No new JS. `.ttol__opts button { min-height: 44px }`.
- `.levels`: reuse the `.timeline` spine (2px ink left rule, 12px ring nodes). Label: Plex Mono 500 .72rem, caps, .12em, red. Title: Fraunces 600, `clamp(1.35rem, 1.1rem + 1.2vw, 1.75rem)`, `text-wrap: balance`. Text: Newsreader 1.0625rem/1.5, 52ch.
- Player card: 2px ink border box like `.ttol`; `dl` grid `7.5rem 1fr`, dotted `--rule` leaders.
- Tokens only; dark mode inherits.

Target: under 300 visible words, down from ~640.
