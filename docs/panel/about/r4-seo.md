# R4 SEO: verify

**SCORE 9/10 | SIGN-OFF: yes**

## Item status (curl http://localhost:1316/about/)
- `og:image:alt` = "Ganis Angger Atmawarin, Yogyakarta". FIXED (r3 nice-to-have closed).
- Title "About Ganis · Ganis Angger Atmawarin", description (full name, SoftwareSeni, Synetica, Yogyakarta), canonical: intact.
- og:type `profile`, og:title, og:description, og:url, 1200x630 image dims, twitter summary_large_image: present.
- JSON-LD ProfilePage: valid; Person has alternateName, description, absolute image, worksFor, alumniOf. No invented sameAs.
- One h1; h2s only below it, no skips.

## BLOCKERS
None.

## Remaining nice-to-have
- `dateModified` on ProfilePage.
- og:image is still the default card, not the portrait.
