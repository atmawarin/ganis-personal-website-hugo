# N2 · V (voice) · loop 2

**SCORE 8.5/10 · SIGN-OFF: yes, with one small fix recommended**

## What works
- **All 12 thought texts are verbatim.** Checked `data/thoughts.yaml` against each source file. The six question and idea titles match with only the leading emoji stripped, including his grammar ("Why there is an obese doctor?", "Is default share would be a good idea?"). The six essay lines match their `dek` or `description` exactly. Kind and month match too (Idea vs Question, Juli/Agustus 2019 for the Bahasa pair).
- **Bahasa is handled correctly.** `lang="id"` is set on the quote and on the end-list `li`. The prompts for those rounds stay English and are game cues, not translations.
- **No em or en dashes** in `about-game.js`, `thoughts.yaml` or `list.html`. The only dash in the CSS is an escaped en dash in the existing `.proof` summary, which is unrelated.
- **The new strings all sound like him.** "Served 0", "Serve the next one", "Hold to let go", "Uninstalled", "It's back. Hold to uninstall", "Make a name out of this.", "Opens 9" and "8 of 12 thoughts" are plain, dry and short. The "Still open" stamp on cafe, doctor and uninstall is the right joke. The end copy matches PLAN-mind exactly.
- **The doctor round strikes out only his own three words** (Knowledge, Motivation, Willpower), and the blank stays. Mobile Legends is a self-joke. No rule in BB's tone ruling is broken.

## MUST-FIX
None. This one is recommended and takes a minute:

1. **Librarian clock mixes 24-hour time with "5 PM".**
   - File: `assets/js/about-game.js`, the librarian round (about lines 58 to 70).
   - Problem: the prompt says "It's 5 PM" but the clock reads `16:57` then `17:0x`. He writes "5 PM" in the source, and the 8:33 round uses 12-hour time.
   - Change: render `4:57 PM` and `5:0${min - 60} PM` instead. Change `16:${min}` to `4:${min} PM` and `17:0${min - 60}` to `5:0${min - 60} PM`. The win logic does not change.

## Nice-to-have
- **End kicker punctuation.** `Mostly: friction. · Met 8 of 12` puts a period next to a middle dot (about line 601). Put `Mostly: friction.` on its own line, or write `Met 8 of 12` as a separate `bl__note` line.
- **Kicker language.** The card kicker "Esai · Juli 2019" sits outside the `lang="id"` blockquote, so screen readers read it with an English voice. Wrap `${esc(T.kind)} · ${esc(T.when)}` in a `<span${lang}>`. Do the same for the round kicker at about line 494.
- **"Get the newsletter" vs "Letters".** The site's own nav and page title say "Letters" (`content/newsletter/_index.md`). PLAN-mind specifies "Get the newsletter", so this is allowed as is. "Get the letters" would be more consistent with the rest of the site, if you want it.
- **Typewriter prop line.** `Yang bertanda tangan di bawah ini` is a stock notary phrase, not his sentence. That is fine as a prop and it is not shown as a quote. It does mean a Bahasa string appears in an English round that may also have a Bahasa card. I am not blocking on it.
- **Berbeda cups.** The labels `Rp 25.000`, `Rp 24.000`, `Rp 23.000` are invented props. They are harmless, because they are not presented as his thought. I could not check the berbeda round's render, since the screens do not show it.

## Not checked
- The berbeda render, because it is in the code only.
- The live dev server. I read the files and the end screen only.
