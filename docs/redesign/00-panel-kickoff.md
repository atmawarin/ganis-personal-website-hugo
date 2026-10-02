# Redesign panel, round 0: kickoff

**Decision:** The site becomes *A Specimen Book*: one person, set in many typefaces. The chrome around it stays quiet and classic, and each essay is typeset in the manner of one designer from one era.

Panel: Senior Designer (SD), Product Manager (PM), Interactive Designer (IxD), Typography Expert (TY), SEO Master (SEO), Brand & Business Manager (BB).

<svg viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace" font-size="12">
  <rect width="760" height="250" fill="#f4efe6"/>
  <text x="24" y="34" font-size="15" fill="#1b1a17" font-weight="700">THE SPECIMEN BOOK: INFORMATION ARCHITECTURE</text>
  <rect x="24" y="56" width="140" height="58" fill="#1b1a17"/><text x="38" y="82" fill="#f4efe6">Title page</text><text x="38" y="100" fill="#f4efe6" font-size="10">/ (home)</text>
  <rect x="200" y="56" width="140" height="58" fill="none" stroke="#1b1a17"/><text x="214" y="82" fill="#1b1a17">Specimens</text><text x="214" y="100" fill="#1b1a17" font-size="10">/articles/</text>
  <rect x="376" y="56" width="140" height="58" fill="none" stroke="#1b1a17"/><text x="390" y="82" fill="#1b1a17">Shelf</text><text x="390" y="100" fill="#1b1a17" font-size="10">/reading/</text>
  <rect x="552" y="56" width="180" height="58" fill="none" stroke="#1b1a17"/><text x="566" y="82" fill="#1b1a17">Miles</text><text x="566" y="100" fill="#1b1a17" font-size="10">/running/ + /running/log/</text>
  <rect x="200" y="150" width="140" height="58" fill="#d0402b"/><text x="214" y="176" fill="#fff">Essay × 25</text><text x="214" y="194" fill="#fff" font-size="10">25 designers, 25 eras</text>
  <rect x="376" y="150" width="140" height="58" fill="none" stroke="#1b1a17"/><text x="390" y="176" fill="#1b1a17">Colophon</text><text x="390" y="194" fill="#1b1a17" font-size="10">/colophon/</text>
  <rect x="552" y="150" width="180" height="58" fill="none" stroke="#1b1a17"/><text x="566" y="176" fill="#1b1a17">About + Letters</text><text x="566" y="194" fill="#1b1a17" font-size="10">/about/ · /newsletter/</text>
  <line x1="164" y1="85" x2="200" y2="85" stroke="#1b1a17"/><line x1="270" y1="114" x2="270" y2="150" stroke="#d0402b" stroke-width="2"/><line x1="340" y1="179" x2="376" y2="179" stroke="#1b1a17" stroke-dasharray="3 3"/>
</svg>

## What each panelist pushed for

| Panelist | Position | Accepted? |
|---|---|---|
| **SD** | Get rid of the Webflow template entirely: no stock hero photos, no left nav bar, no AOS fade-ins. Use warm paper, ink and one printer's red. Leave the loud work to the essays. | ✅ Yes |
| **TY** | The chrome needs a typeface with a voice that still won't fight 25 themes. Fraunces (soft, slightly odd old-style) for display, Newsreader for reading, IBM Plex Mono for the slug lines. Every essay theme gets real period-appropriate faces, a measure of 60–72ch, and proper quotes, small caps and figures. | ✅ Yes |
| **IxD** | One signature interaction on the home page: the name is set in a different specimen face on every click, with a caption saying who and when. The essay index shows each title in its own typeface. Nothing more on scroll. | ✅ Yes (one interaction only) |
| **PM** | The jobs are (1) entertain and feel like Ganis, (2) a second read, (3) newsletter signups, (4) a quiet route to Synetica. Cut dated tool reviews. Put the best two essays on the home page. | ✅ Yes |
| **SEO** | Per-article `lang` (id/en), clean titles, absolute OG images, Person + BlogPosting JSON-LD, 301s for every removed URL, drop the Twitter meta, RSS kept, no client-side rendering. | ✅ Yes |
| **BB** | Remove LinkedIn and Twitter. Email and newsletter are the only channels. Synetica gets one honest line, not a banner. The SoftwareSeni and Davo essay should be gracious, not a press release. | ✅ Yes |

## Content decisions

- **Remove** (dated tool reviews; 301 to /articles/): *Buat Presentasi Dengan Beautiful.ai*, *Rekomendasi Note Taking App: Notion*, *6 Alasan Pindah dari WordPress ke Webflow* (the site hasn't run on Webflow for years).
- **Merge** the two "three months" drafts into the field-note version.
- **Add four essays:** one thank-you to SoftwareSeni and Davo (2013–2025), and three personal essays in the David Sedaris mode, built from true material in the vault.

## Specimen map: one designer per essay

| Essay | Designer / tradition | Era | Faces |
|---|---|---|---|
| And by our hands… (trees) | William Morris, Kelmscott Press | 1891 | IM Fell English |
| The Best of Jim Collins | Aldus Manutius, Venetian italic | 1501 | Cardo |
| Pakuningratan No.15 | Yogyakarta letterpress newspapers | 1945 | Old Standard TT |
| Super Power Bernama Buku | Jan Tschichold, Penguin | 1947 | Gill Sans / Lato + Crimson Pro |
| Memberikan Feedback | Josef Müller-Brockmann, Swiss | 1955 | Inter Tight |
| Berbeda Sebagai Strategi | Paul Rand, IBM | 1972 | Zilla Slab |
| Memperkecil Dunia | Dieter Rams, Braun | 1961 | Manrope |
| Dwight Schrute Line | Herb Lubalin, Avant Garde | 1968 | Playfair Display + Questrial |
| Hal Terbaik di 2018 | Wim Crouwel, Stedelijk | 1968 | Major Mono Display + Archivo |
| Tidak Gagal Bangun Pagi | Otl Aicher, Munich Olympics | 1972 | Barlow |
| Be Yourself at Work | Peter Saville, Factory Records | 1979 | Archivo Narrow |
| Teknologi Bukan Advantage | Susan Kare, Macintosh | 1984 | Pixelify Sans + Atkinson |
| The 180 Hours Tether | David Carson, Ray Gun | 1994 | Anton + Courier Prime |
| Annual Review 2020 | Edward Tufte | 1983 | Crimson Pro, sidenotes |
| Muji Notebook | Kenya Hara, Muji | 2002 | Shippori Mincho + Zen Kaku |
| Principle | Massimo Vignelli, Unigrid | 1977 | Bodoni Moda |
| Mr. Krabs | Rodchenko, Constructivism | 1924 | Oswald + Rubik Mono |
| Why I Keep Coming Back to Yogyakarta | A.M. Cassandre, Art Deco | 1932 | Limelight + Josefin Sans |
| Sales Essentials | Indonesian gerobak sign painters | today | Bungee + Rubik |
| Three Months (field note) | Moholy-Nagy, Bauhaus | 1925 | Jost |
| SoftwareSeni & Davo | William Caslon | 1734 | Libre Caslon |
| New essays ×3 | Gutenberg / Victorian wood type / Matthew Carter's Georgia | 1455 / 1870 / 1996 | assigned in round 1 |

## Next step
Build v1: chrome, home, index, essay template, 25 themes, new essays. Then the panel reviews it (round 1).
