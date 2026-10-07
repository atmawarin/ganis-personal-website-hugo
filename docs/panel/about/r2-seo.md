# R2: SEO lead

**SCORE 8/10 | SIGN-OFF: yes (two small must-fixes, no rework)**

## What works
- One h1 (verbatim). Six h2 level titles with ids (#papua, #softwareseni, #synetica), then the bonus h2. No heading skips. Server-rendered, JS off is fully readable.
- Description is 153 chars, names Ganis, SoftwareSeni, Synetica, Yogyakarta. Title "About · Ganis Angger Atmawarin" is under 60.
- ProfilePage with mainEntity Person, image = portrait absolute URL, no birth year, no kids.
- Portrait: width/height set, fetchpriority="high", no lazy, 127 KB, descriptive alt naming the person, no GPS/camera EXIF found.
- No text baked into images. Fact duplication removed; visible words well down from ~640.

## MUST-FIX
1. **OG/Twitter metadata is thin.** Rendered page has `og:title="About"`, `og:image:alt="About"`, `og:type=website`.
   - File: front matter `content/about/_index.md`, plus the head partial if it reads a different key. Add `seo_title: "About Ganis Angger Atmawarin"` (or whichever key the head partial uses for og:title) so og:title becomes "About Ganis Angger Atmawarin".
   - `og:image:alt` should fall back to the portrait alt: "Ganis Angger Atmawarin at his desk, grinning with both thumbs up at the camera." If og:image stays og-default.png, set alt to "Ganis Angger Atmawarin, Yogyakarta."
   - `og:type` on /about/ should be `profile` (optional `profile:first_name` Ganis, `profile:last_name` Atmawarin).
2. **ProfilePage JSON-LD lacks description and Person lacks identity detail.** File: `layouts/partials/schema.html`, line 12 area. In the about branch add `"description" (.Params.description | plainify)` to `$d`, and to `$p`: `"alternateName" "Ganis"` and `"description"` of the same string. (`sameAs` is only synetica.co, which duplicates worksFor. Add LinkedIn/other real profile URLs from `site.Params` if they exist; do not invent any.)

## Nice-to-have
- Use the portrait as og:image only if you add a 1200x630 crop (`static/images/og-about.jpg`); a 4:3 960x720 will be cropped badly by cards. Default is acceptable.
- `<title>` could be "About Ganis Angger Atmawarin | Yogyakarta" to carry the location; current form is fine.
- Add `dateModified` to ProfilePage.
- Level 3 label "2013 to 2025" with the essay link text "Twelve years": make the anchor "Twelve years at SoftwareSeni" for a better internal-link anchor if it fits the word budget.
- Portrait could be served at 2x of its rendered width (about 640 px) to save bytes; 127 KB is already under the 150 KB cap.
