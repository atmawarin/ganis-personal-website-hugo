# R2 memo: BB (brand), About journey

SCORE 8.5/10 | SIGN-OFF yes (no must-fixes)

## What works
- Page is ~250 words, each fact once. Prose body and duplicate timeline are gone.
- Synetica gets exactly one level line plus the existing "same person, with a calendar" line. No pricing, no boss metaphor, no CTA button.
- SoftwareSeni reads warm and fair: employee #13, Director, "Twelve years" essay link, no complaints.
- Channels are email and Letters only. No social links.
- Privacy: solo photo, 960x720, 127 KB. Background is blinds, a wall and a dark laptop back; no readable screen, badge, sign or location. Dimensions are 4:3 and sips shows no GPS/camera/date tags; the 128-byte EXIF stub holds resolution tags only.
- Family: names only (Gita, Zen and Zia), already published. No ages, no birth year. Stats row is playful and traceable to the brief.
- Game frame stays in print vocabulary (mono labels, hollow rings, one filled red node). No XP, neon or emoji.
- Caption "The author, agreeing with you." and the factual alt both pass.
- JSON-LD ProfilePage now carries the portrait image.

## MUST-FIX
None in my lane.

## Nice-to-have (not blocking)
1. EXIF block is 128 bytes: resolution tags plus an empty ExifIFD pointer, no GPS (0x8825), no make/model. Verified clean; optional `exiftool -all=` only for tidiness.
2. OG/Twitter image on /about/ still resolves to `/images/og-default.png`. If sharing the About link should show the thumbs-up, set it in the head partial for the about section (`.Params.portrait.src | absURL`). Cropped to 1200x630 it would work; the 4:3 original is acceptable. Low priority: a goofy face as the default link preview is Ganis's call, and the default is the safer brand choice.
3. Level 3 label "2013 to 2025" overlaps Level 4 (2021) and Level 5 (2025) chronologically. Reads as a span, so fine. If it ever confuses, label it "Twelve years".
4. "Stats: chicken at parties, lion at ping-pong" is the one line with no source of seriousness; it is signed off on the old page, so keep it.
5. Continue block mentions Synetica as a link in both Level 5 and the email line. Acceptable by PLAN ruling; do not add a third mention.
