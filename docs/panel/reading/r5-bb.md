# R5 — BB (Brand & business manager)

## 1. Verdict

**SCORE 9 / 10. WOW 9 / 10. SIGN-OFF: yes.**

Taste holds. The page reads as a personal shelf, not a funnel.

- **Favourites:** "Show my favourites" and "A ★ marks a favourite" are in Ganis's voice. Nothing says "recommended".
- **No hustle on the play surface:** no CTA, no share buttons, no affiliate or Goodreads links, no storage.
- **Counts:** the rail counts and the `24 / 104` tally are small mono. The tally is hidden for screen readers apart from one plain sentence. Neither reads as a goal or a streak.
- **2023:** the rail shows a quiet grey zero and the card says "No dated entries." That is honest, and it needs no explanation.
- **Newsletter and Synetica:** the single ask stays in the footer. The shelf's own tools carry no Synetica text, so there is no doubled ask.
- **Privacy:** the schema.html ItemList emits only the book name, author and a local cover URL. It has no ratings or reading dates and no personal data. The home spines link to `/reading/#slug` with no tracking.
- **"Enough."** is a good last line. It is dry and shows no sign of hustle.

## 2. MUST-FIX

None.

## 3. Nice-to-have

- `layouts/partials/shelf.html:41`: "Business & Leadership" is the first chip and reads like a business-first signal. If the first screen still leans business, put the chips in the order Ganis actually reads. Alphabetical order is fine, so this is not a blocker.
- `layouts/partials/shelf.html:17`: the "104 books" slug is the only headline count. Keep it. If anything, drop the "· 104 books" suffix and let the tally carry the number.
- The Why We Die cover is still wrong (it shows Infinite Country). Ganis needs to approve a new image download before it is replaced.
