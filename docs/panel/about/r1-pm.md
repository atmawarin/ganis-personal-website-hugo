# R1 PM memo: About as a printed game manual

## Thesis
The wordiness is duplication: seven paragraphs and a nine-step timeline say the same things twice. Kill the prose body, make the timeline the page, and dress it as a strategy-guide stage list ("Stage 1 of 6") in mono labels, with no pixels, no neon, no motion. The journey is the structure; the voice lives in one sentence per stage. Target: under 300 words on the page, down from 643.

## Spec
**Order (one column on mobile, two on desktop):**
1. Title block unchanged. Heading verbatim: "Hi, I'm Ganis, and I think you're looking amazing today." Slug becomes `About · Yogyakarta, Indonesia · Stage select`.
2. One intro line (max 20 words), replacing all body paragraphs: "Six stages so far. No cheat codes, a lot of respawns." Aside: portrait + caption, unchanged markup.
3. **The route**: single `<ol class="route">`, front matter `route:` replaces `timeline:`. Each `<li>`: mono slug `STAGE 1 · DAY ONE`, one sentence (max 25 words), no sub-bullets. Merge the 9 timeline items into 6 stages:
   - 1 Day one: patrol car *Garnisun*, became my name. (Papua)
   - 2 Age two: KM Rinjani, five days, grandparents in Malang. (merge 2008 Multiply into one clause or cut it)
   - 3 2013 to 2019: employee #13 to Director at SoftwareSeni. Collapses 2013, 2016, 2019; keep "one desk for every six" only.
   - 4 2021: solo 42 km around the Kraton, family car as water station.
   - 5 2025: left after twelve years, started Synetica (link).
   - 6 2026, current stage: theme *Prove*. Marker `YOU ARE HERE` in red mono stamp, the only red on the list.
4. **Player card** (replaces trait paragraphs): `<dl class="card">`, 2px ink border like `.ttol`, 5 rows, mono key and serif value: Class: product person; Party: Gita, Zen, Zia; Daily quest: run slowly; Loadout: trees, typography, single-origin coffee; Weakness: Mobile Legends; Off-hours: phone in a drawer 6 to 9 PM. Cap at 6 rows.
5. **Bonus round**: existing ttol, relabel slug "Bonus round", keep JS and verdict as is. It already carries the Mythic and Economics facts, so none repeat in the card.
6. **Continue?** closing block: mono slug "Continue?", email link, one line pointing to Synetica ("same person, with a calendar"), plus colophon, shelf and newsletter links in a single mono row. Newsletter signup form (existing partial) sits here, one line of copy.

**CSS:** reuse `.timeline` rules; rename to `.route`; add a `.route li::before` rule drawing a 1px ink vertical connector with a 7px ring node (filled red on the current stage). No transitions. Label `font: 500 .72rem var(--f-mono); letter-spacing:.12em`.

## Must-nots
- No pixel fonts, XP bars, progress animations, scroll effects, sound, or new JS. Ttol JS stays untouched.
- No new facts, birth year, or extra kid details. Don't expand family beyond names already published.
- No em dashes, no title-case headings, no emoji.
- Don't keep body paragraphs "for SEO"; the meta description carries it.
- Don't repeat a fact between route, card and ttol.
- Don't drop heading line, email, Synetica link, shelf or colophon links.

## Top 3 must-haves
1. Delete the prose body and merge nine timeline entries to six stages, one sentence each; the page lands near 300 words.
2. "Stage N" mono labels plus a vertical route line with a red "YOU ARE HERE" on 2026 is the whole game metaphor, expressed in print vocabulary.
3. End on "Continue?" holding email, the quiet Synetica route and newsletter signup; the player card and bonus round keep the Ganis voice (chicken at parties, lion at ping-pong may live in the card as one row if space).
