# Round 3: verdicts and ship

**Outcome:** four reviewers said ship, two said ship with fixes. The fixes are in v4. The average score is 8.3 out of 10.

<svg viewBox="0 0 760 210" xmlns="http://www.w3.org/2000/svg" font-family="IBM Plex Mono, monospace" font-size="12">
  <rect width="760" height="210" fill="#f4efe6"/>
  <text x="20" y="28" font-weight="700" fill="#1b1a17">FINAL SCORES (OUT OF 10)</text>
  <line x1="230" y1="40" x2="230" y2="196" stroke="#1b1a17"/>
  <g fill="#1b1a17">
    <text x="20" y="62">Senior designer</text><rect x="230" y="50" width="425" height="16" fill="#c23a20"/><text x="665" y="62">8.5</text>
    <text x="20" y="88">Product manager</text><rect x="230" y="76" width="400" height="16" fill="#c23a20"/><text x="640" y="88">8.0</text>
    <text x="20" y="114">Interactive designer</text><rect x="230" y="102" width="400" height="16" fill="#c23a20"/><text x="640" y="114">8 (9 after the fix)</text>
    <text x="20" y="140">Typography expert</text><rect x="230" y="128" width="400" height="16" fill="#c23a20"/><text x="640" y="140">8.0</text>
    <text x="20" y="166">SEO master</text><rect x="230" y="154" width="400" height="16" fill="#c23a20"/><text x="640" y="166">8.0</text>
    <text x="20" y="192">Brand &amp; business</text><rect x="230" y="180" width="425" height="16" fill="#c23a20"/><text x="665" y="192">8.5</text>
  </g>
</svg>

| Reviewer | Verdict | In their words |
|---|---|---|
| Senior designer | Ship with fixes | "An index where every title is set in its own designer's face, opened by a name you can reset in 24 typefaces." |
| Product manager | Ship with fixes | The home page does all four jobs in one scroll. |
| Interactive designer | Ship (after the proof-link bug, now fixed) | "The proof sheet adds no JS." |
| Typography expert | Ship | Best-set page: *Silver Is Incompetence* (Gutenberg). Runner-up: *Twelve Years* (Caslon). |
| SEO master | Ship | One schema image fix, now done. |
| Brand & business | Ship | "No remaining reputational risk around SoftwareSeni, Davo, Ryan or clients." |

## Fixed in v4
- **Proof sheet:** every link went to `/`. Each face now links to its own essay, and the essay title is shown.
- **Typographer's quotes:** applied at render time, so the source stays straight-quoted (as `/unslop` requires) and the page shows curly quotes.
- **Carter theme:** the margin timestamps use a `.ts` class instead of `strong:first-child`.
- **Images:** OG image width, height and alt text added. The schema reads each essay's own OG card.
- **Muji:** contrast raised.
- **Aldus:** the watermarked cover is removed.
- **Proof-sheet disclosure:** it now shows open or closed state.

## Left for Ganis
1. Turn on analytics: `params.analytics.ga4` or `.plausible` in `hugo.yaml`.
2. Confirm `ganis@atmawarin.com` still receives mail, and that the Mailchimp list is live. Then send the first letter.
3. Sign-offs: the Zen *Mario Party* line, the *Garnisun* family backstory, and *Twelve Years* (ideally sent to Davo first).
4. Search Console:
   - Verify the domain and submit the sitemap.
   - Run Change of Address from atmawarin.com.
   - Check that the Cloudflare 301s keep the path.

## Final pass: /unslop
- **What was covered:** all 24 essays plus the site copy.
- **What changed:**
  - Every em dash removed from the prose.
  - Headings in sentence case.
  - AI-padded passages from the 2025 "expand to 1000+ words" pass trimmed by 2–15% per essay.
  - Straight quotes in the source; Hugo renders them curly.
- **Attributions fixed:**
  - The "say no to a hundred good ideas" quote is now credited to Steve Jobs (WWDC 1997), not Jony Ive.
  - Buffett's "25-5 rule" is now marked as apocryphal.
- **Keyboards:** *Silver Is Incompetence* now uses the real Browntosaurus figures: 71 keyboards, and medals that disagree with the rankings.
- **Left for Ganis:** in the 180-hours essay, "8 + 104 + 60" adds up to 172, not 180. It's your original text, so it hasn't been changed.
