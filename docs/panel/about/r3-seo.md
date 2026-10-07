# R3 SEO: verify

**SCORE 8.5/10 | SIGN-OFF: yes**

## My r2 must-fixes
1. **OG/Twitter metadata: PARTLY FIXED (not blocking).**
   - `og:type` is now `profile` on /about/. FIXED.
   - `og:title` is "About Ganis" (seo_title added). Acceptable; "About Ganis Angger Atmawarin" would carry the full name, but the title tag and description already do.
   - `og:image:alt` still equals "About Ganis" and og:image is the default card. Not what I asked, but the alt is a non-empty, truthful label for the default image. Downgraded to nice-to-have.
2. **ProfilePage JSON-LD: FIXED.** Page-level `description` present; Person carries `alternateName: "Ganis"`, `description`, and `image` (absolute portrait URL). No invented `sameAs`.

## Re-checks
- One h1 (verbatim), six level h2s plus bonus h2. No skips. Server-rendered, readable without JS.
- Meta description intact (153 chars). Screenshot 1280 shows the nbsp fixes landed ("6 to 9 PM" no longer orphans, "11 km" holds).
- Level 3 link text is now "The full story". Voice's call; weaker as an internal-link anchor than "Twelve years at SoftwareSeni", but the link sits inside a SoftwareSeni level, so context carries it.

## BLOCKERS
None.

## Nice-to-have
- Set `og:image:alt` to the portrait alt (or "Ganis Angger Atmawarin, Yogyakarta") in `layouts/partials/head.html`.
- Add `dateModified` to ProfilePage.
