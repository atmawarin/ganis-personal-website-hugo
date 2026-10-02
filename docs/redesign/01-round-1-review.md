# Round 1 review: v1 → v2

**Outcome:** 58 findings from six reviewers. The MUSTs from each lane are fixed; three are waiting on Ganis (see the end).

<svg viewBox="0 0 760 170" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace" font-size="12">
  <rect width="760" height="170" fill="#f4efe6"/>
  <text x="20" y="28" font-weight="700" fill="#1b1a17">ROUND 1 FINDINGS BY LANE (MUST / SHOULD / NICE)</text>
  <g fill="#1b1a17">
    <text x="20" y="62">Senior designer</text><rect x="170" y="50" width="20" height="16" fill="#c23a20"/><rect x="190" y="50" width="120" height="16"/><rect x="310" y="50" width="40" height="16" fill="#9b9282"/>
    <text x="20" y="84">Product manager</text><rect x="170" y="72" width="60" height="16" fill="#c23a20"/><rect x="230" y="72" width="100" height="16"/><rect x="330" y="72" width="20" height="16" fill="#9b9282"/>
    <text x="20" y="106">Interactive</text><rect x="170" y="94" width="40" height="16" fill="#c23a20"/><rect x="210" y="94" width="100" height="16"/><rect x="310" y="94" width="60" height="16" fill="#9b9282"/>
    <text x="20" y="128">Typography</text><rect x="170" y="116" width="60" height="16" fill="#c23a20"/><rect x="230" y="116" width="120" height="16"/><rect x="350" y="116" width="20" height="16" fill="#9b9282"/>
    <text x="20" y="150">SEO + Brand</text><rect x="170" y="138" width="120" height="16" fill="#c23a20"/><rect x="290" y="138" width="200" height="16"/><rect x="490" y="138" width="40" height="16" fill="#9b9282"/>
  </g>
  <text x="560" y="62" fill="#c23a20">■ MUST</text><text x="560" y="84" fill="#1b1a17">■ SHOULD</text><text x="560" y="106" fill="#9b9282">■ NICE</text>
</svg>

## What changed

| Lane | Finding | Action |
|---|---|---|
| Typography | The subset `&text=` fonts were overriding each essay's full face (the last `@font-face` wins) | Subset link now loads first and the essay's faces last. Subsets only load on index pages and essays |
| Typography | Gutenberg set in fraktur (from around 1513), not textura | Swapped to **Texturina** |
| Typography | Morris set in IM Fell (1670s), not the Golden Type | Swapped to **Goudy Bookletter 1911** |
| Typography | Indonesian text justified with no `id` hyphenation dictionary | KR 1945 is now ragged-right, two columns only at ≥1100px |
| Typography | Seven dates and attributions wrong in the notes (SK 4 1956, Hamilton 1880, Edward Young's band, Rogers' "spoon to the city", …) | Corrected in `data/styles.yaml` |
| Designer + Typography + PM | Rodchenko's monospace title spaced out every apostrophe | **Big Shoulders Display 900** |
| Designer | Chrome rules stopped 48px short of the edge | Masthead and footer rules run full-bleed; every block shares one text edge |
| Designer | Morris looked like a barber's pole; the Carson dek was unreadable; Crouwel's cover filled the screen; Carter's essay looked like a default blog; Tufte felt lopsided | Each theme fixed (see `assets/css/themes/`) |
| Designer | Deks repeated as the first paragraph (Kare, Lubalin) | New deks written |
| Interactive | Name-setter overflowed in wide faces and faked bold weights | Fits itself to the width, uses each face's real weight, names the face, and returns to Fraunces at the end |
| Interactive | Hover stuck on touch; rows jumped on hover; touch targets were 29px | `@media (hover:hover)`, transform instead of padding, targets ≥40px |
| Interactive | The Two-Truths game had no payoff | All three options get stamped **TRUE** |
| PM | "Start here" led with an insider thank-you; the home page repeated itself | Featured is now *Garnisun* + *Water Station*; Latest leaves out the featured two; a deck line on every row; one letters ask on the home page; no doubled asks on essays |
| PM | The same anecdotes appeared in two essays | The UGM run lives only in *Water Station*; "Buy pen" lives only in *Twelve Years* |
| SEO | OG image 404; baseURL tied to `$URL`; no sitemap line; multiple h1s; 180 thin URLs; RSS mixed every section | OG card, fixed production baseURL, `robots.txt`, heading hook, stubs no longer rendered (301 to their lists), essays-only RSS, `noindex` on taxonomies |
| Brand | Ryan read as a dig; "the company I wish my clients had had" read as a jab at SoftwareSeni; client names were identifiable; title grammar | Rewritten |

## Open (for Ganis)
- **Analytics:** no GA4 or Plausible tag was ever in the templates. Set `params.analytics.ga4` or `params.analytics.plausible` in `hugo.yaml`.
- **Contact:** confirm `ganis@atmawarin.com` still receives mail after the domain move.
- **Family:** sign off on the Zen *Mario Party* line in *Silver Is Incompetence* and the family backstory in *Garnisun*.
