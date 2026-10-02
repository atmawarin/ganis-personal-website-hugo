# Round 2 review: v2 → v3

**Outcome:** the panel agrees v2 "reads as one book with distinct chapters". Round 2 found 41 issues, mostly polish. One was a real bug: the Water Station timestamps were pulling bold phrases out of the middle of sentences. The panel also asked for one new feature, the proof sheet.

<svg viewBox="0 0 760 150" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace" font-size="12">
  <rect width="760" height="150" fill="#f4efe6"/>
  <text x="20" y="28" font-weight="700" fill="#1b1a17">NEW-ESSAY SCORES (PM, ENTERTAINING + AUTHENTIC, /10)</text>
  <g fill="#1b1a17">
    <text x="20" y="60">Water Station</text><rect x="230" y="48" width="400" height="16" fill="#c23a20"/><text x="640" y="60">8.0</text>
    <text x="20" y="84">Silver Is Incompetence</text><rect x="230" y="72" width="375" height="16" fill="#c23a20"/><text x="640" y="84">7.5</text>
    <text x="20" y="108">Garnisun</text><rect x="230" y="96" width="350" height="16" fill="#c23a20"/><text x="640" y="108">7.0</text>
    <text x="20" y="132">Twelve Years and a Fancy Pen</text><rect x="230" y="120" width="300" height="16" fill="#c23a20"/><text x="640" y="132">6.0</text>
  </g>
</svg>

| Lane | Finding | Action |
|---|---|---|
| Designer | The Water Station margin timestamps caught bold phrases mid-sentence | Only real timestamps are bold now |
| Designer + Typography | Texturina at title size read as a semibold roman | Titles use **Grenze Gotisch**; Texturina stays for initials |
| Designer | Rams looked like a SaaS dashboard; Muji text was faint; nothing in Aldus said Venice; the specimen card was a grey callout | Rams has square corners and hairlines; Muji ink darkened; Aldus italic dek and subheads; the card is now a printed label (double rule, accent kicker) |
| Designer | Rand and Aicher repeated their dek as the opening quote | New deks |
| Typography | Straight quotes across the chrome | Every title, dek and note is converted to curly quotes |
| Typography | Morris body was still IM Fell | Body is now Goudy Bookletter 1911; IM Fell kept for italics |
| Typography | Penguin at 900 matched Gill Sans UltraBold on a Mac | Weight 400, matching the essay |
| Typography | Indented paragraphs after breaks; lining figures in text; spaced em dashes | Flush after breaks, old-style figures in text and tabular in the index, spaced en dashes |
| Typography | The essay-page font subset could still collide with the essay's own face | Essay pages now load only the three related essays' faces |
| PM | Two letters asks on the home page; decks cut off mid-clause; essays reading like a CV | The home page footer now points elsewhere; a hand-written ≤100-character `dek` on all 24 essays; Musmus section and the office-move paragraph cut down |
| Interactive | The caption sometimes named the wrong face; TRUE stamp contrast; mobile meta wrapping; "24 of 24" stranded on mobile | `display_name` added to the registry, contrast fixed, wrap rules, live count reads "of 24 essays" |
| Interactive | **New: proof sheet** | "See all 24 at once": "Ganis" in every face, each linking to its essay |
| SEO | Race and category stubs 404 | 301s (placed below the /running/log proxy) |
| SEO | Every essay shared one OG card | **24 generated OG cards**, each set in its essay's own face |
| SEO | Extra RSS feeds; long titles; a broken cover image | Feeds are now essays only; `seo_title` added; cover fixed |
| Brand | "Those clients" pointed back to nothing; Sagan dates ran backwards; "running a software company" overclaimed; the Sales Essentials summary sounded like hustle copy | Rewritten |
