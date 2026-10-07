# Brief: rewrite /about/ as a journey ("video game" map)

**Tier: L.** Page-level restructure, a new interaction on a chrome page, and how Ganis, his family, SoftwareSeni and Synetica are portrayed.

**Ganis's ask (intent):** the About page is too wordy. Cut it down. Keep the line *"I'm Ganis, and I think you are looking amazing today."* Make it read like a journey, "kind of like a video game journey". Pick a better photo from his Apple Photos library if one fits.

## Current state
Screens: `docs/panel/about/screens/about-1280.png`, `about-390.png`.

- Content: `content/about/_index.md` (643 words incl. front matter). Seven body paragraphs + a nine-step `timeline:` in front matter + a "Two truths and a lie" game (`ttol:`).
- Template: `layouts/about/list.html`. CSS: `assets/css/main.css` ~653–673 (`.about-grid`, `.timeline`, `.ttol`), portrait ~727–731. JS: `assets/js/global.js` ~72–84 (ttol).
- Heading in front matter: `"Hi, I'm Ganis, and I think you're looking amazing today."` (restored by Ganis in commit 00565ca; keep it verbatim).
- Portrait: `static/images/ganis-portrait.jpg`, grayscale, Bowser sticker on laptop, caption "The author, being told the deadline has moved."
- The body and the timeline say the same things twice (patrol car, SoftwareSeni, marathon, Synetica). That's most of the wordiness.

## Facts available (sources: the current page, which Ganis has already signed off; nothing new may be invented)
| Stage | Fact | Source |
|---|---|---|
| Day one | Born in Papua; driven home in a military patrol vehicle, *Garnisun*; became his name | about page |
| Age two | KM Rinjani, 5 days 4 nights, raised by grandparents in Malang | about page |
| 2008 | First blog on Multiply. Gone, as is Multiply | about page |
| 2013 | Employee #13 at SoftwareSeni, PM for Villalet | about page |
| 2016 | General Manager, 90 people, Pakuningratan No.15, one desk per six | about page |
| 2019 | Director; former car dealership on Jl Magelang | about page |
| 2021 | Solo 42 km around the Kraton, family car as water station, last 11 km after dinner | about page |
| — | Two marathons: one race, one solo | about page |
| 2025 | Left SoftwareSeni after 12 years; started Synetica | about page |
| 2026 | Year theme *Prove*; still uninstalling Mobile Legends | about page |
| Traits | Husband to Gita, father to Zen and Zia; phone in a drawer 6–9 PM; runs slowly in mornings; trees, typography, single-origin coffee; chicken at parties, lion at ping-pong; Mythic rank in MLBB; studied Economics | about page |

## Constraints (from `docs/redesign/`, standing rules)
- Chrome stays quiet: paper, ink, one red; Fraunces / Newsreader / Plex Mono. A "video game" read must be done in the site's own print vocabulary (think a printed game manual or a world map in a strategy guide), not pixel-art neon.
- One signature interaction on home; no scroll animations, no fade-ins. JS may only enhance; all content in HTML.
- Keep: heading line, email + Synetica line, the shelf / colophon links somewhere.
- No birth year, no kids' details beyond names already published. Graceful to SoftwareSeni.
- No em dashes in prose, sentence-case headings, never invent facts.

## Photo
Candidates exported from Ganis's Photos album "Ganis" (687 items, 19 favourites) to the scratchpad; the PM picks one and the panel rules on it. Any photo of other people (family, colleagues) is out unless Ganis signs off.

### PM photo pick (from 18 exported candidates; contact sheet in scratchpad)
- **Pick: `IMG_0478` (8 Apr 2021, favourite).** Ganis at his desk, both thumbs up at the camera, mouth wide open. It *is* the greeting: he's reacting to you looking amazing. Reads as "Player 1 ready". Solo, no other people, no badges, no client screens. 3088×2316 landscape.
- Runner-up: `IMG_0477`, same moment, mouth closed (calmer).
- Rejected: kids' photos (privacy), the wedding photo (Gita), `IMG_2977` (company ID badge + a third-party mural), the masked selfie.
- Must strip EXIF/GPS before committing.
