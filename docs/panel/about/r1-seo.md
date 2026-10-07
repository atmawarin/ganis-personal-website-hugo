# R1 memo: SEO lead

## Thesis
A game journey is a **structure**, not a script. Express it as a server-rendered `<ol>` of "stages" in static HTML, styled like a strategy-guide world map. Fewer words help SEO if the words that remain are the entities (Ganis, Yogyakarta, SoftwareSeni, Synetica) in real text, under one h1, with no JS needed to read any of it.

## Spec
**Head**
- `<title>`: "About Ganis Angger Atmawarin | Yogyakarta" (under 60 chars; keep the site-suffix pattern the head partial already applies).
- `description` (140-155 chars), replace: "Ganis Angger Atmawarin: named after a patrol car, twelve years at SoftwareSeni, now building Synetica in Yogyakarta. A short journey, level by level." Drop "typography nerd" filler; keep the journey hook.
- OG title/description inherit from front matter; OG image stays the site default unless the new portrait is 1200x630-croppable. Do not point OG at an illustrative map graphic.
- JSON-LD: keep the Person block in `schema.html`; on /about/ add `@type: ProfilePage` with `mainEntity` = that Person (name, alternateName "Ganis", jobTitle "Founder, Synetica", worksFor Synetica url, alumniOf/previous employer SoftwareSeni, address Yogyakarta, image = new portrait absolute URL, sameAs unchanged). No birth year, no kids.

**Markup**
- One `h1` (the heading, verbatim). Stages as `<ol class="journey">`, each `<li>` containing `<h2>` (sentence case, e.g. "World 1: Papua", "World 3: SoftwareSeni", "World 5: Synetica") and one or two sentences. Real headings give crawlers anchors; real `id`s (`#softwareseni`, `#synetica`) allow sitelinks.
- Stage label ("World 3", "Level 2024") is a mono `<span>` before the h2 text, not an image or CSS `content`.
- Real `<a>` links retained: Synetica, the SoftwareSeni essay, /reading/, /colophon/, mailto. The Synetica link is plain (no nofollow), others internal.
- Portrait: `<img>` with descriptive alt naming the person, width/height set (CLS), `loading="lazy"` removed if it is above the fold (LCP); `fetchpriority="high"` instead. Serve JPG/WebP under 150 KB at 2x of 20rem.
- "Player card" stats (Mythic rank, 2 marathons, Economics) as a `<dl>`: indexable and quote-able, and replaces the ttol game text.
- "Continue?" closing = the email and Synetica line as plain text links.

**Rendering**
- All journey content in HTML. JS may only add a "stage select" highlight or keyboard focus; no content injected, no tabs hiding stages (`hidden` content is discounted). Stage select, if any, is `<a href="#id">` anchors, which work without JS.
- Map line connecting stages: CSS border or inline SVG with `aria-hidden="true"`, `role="presentation"`, no text inside SVG.

**Word budget:** about 220-260 words visible, down from ~640. Cut duplicated facts (patrol car, SoftwareSeni, marathon said once each).

## Must-nots
- No text in images (map, "LEVEL UP" banners, portrait overlays).
- No JS-built or JS-revealed stages; no accordion that hides copy; no scroll-triggered reveals.
- No second h1, no h2s that are only "Level 1"; no heading-level skips.
- No duplicated paragraph plus timeline versions of the same fact (thin and repetitive).
- No birth year or children's details in JSON-LD; no invented facts or claims in schema.
- No game vocabulary in `title` or `description` that crowds out the name and role.

## Top 3 must-haves
1. **Journey = server-rendered `<ol>` with real `h2` per world and anchor ids**, fully readable with JS off.
2. **Title, description and ProfilePage/Person JSON-LD updated** to name Ganis, Yogyakarta, SoftwareSeni and Synetica, with the new portrait as `image`.
3. **Portrait performance and alt**: above-fold `fetchpriority="high"`, explicit dimensions, compressed, descriptive alt; no text baked into any image.
