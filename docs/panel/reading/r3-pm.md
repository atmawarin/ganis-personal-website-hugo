# R3 · PM verdict on PLAN.md ("Date Due")

**SCORE 8 / WOW 7.5 / SIGN-OFF no** (two small fixes from yes)

The plan is coherent, honest and shippable. Locked rulings are sound. But it drops two of my four jobs and has one internal contradiction on its best moment.

## Must-fix (4)

1. **Newsletter and Synetica route are missing.** Add a section "Foot of the page": one email field, label "New books land in the letter first.", one quiet mono line "I build products at Synetica" linking to the existing home route. No modal, no tracking, no sticky bar. Place after the 2019 card (the last in DOM), outside the year rail.
2. **"What should I read?" has no answer.** Option 8, my second job (visitor leaves with one book), vanished. Add to the Design list: **"Stamp one for me"** button beside "Show what I read again", drawing only from the starred set (see Idea). Without it the second-read job rests on a dim toggle.
3. **Contradiction in item 3 vs "send-to-a-friend".** AGAIN stamps are "always visible static marks", yet the friend moment says "watch five stamps pile up on hover". Change item 3 to: *resting state shows one small stamp plus a count (x5); on hover/focus/tap the five stamps drop in a 60ms stagger, overlapping, transform and opacity only.*
4. **Keyboard shortcuts R and S need guards.** Add to Base requirements: *single-key shortcuts ignore events with ctrl/meta/alt, or when focus is in an input/textarea/select (the newsletter field), and each button shows its key as a visible `kbd` hint (R, S, N).* Cmd+R must still reload.
   Also: **hover stamps only after an 80ms dwell, once per row per visit**, so sweeping the mouse down 104 rows doesn't spray stamps and covers.

## Idea: "Stamp one for me" (raises WOW, breaks no ruling)
- **Trigger:** button or `N` key (visitor input only).
- **Motion:** pick a random starred row, not the previous one. Scroll it to centre (instant if reduced motion, otherwise smooth, user-caused). At 200ms the row takes the red stamp (120ms, 1.2 to 1, seeded tilt), then the cover slides from the pocket (220ms). Total ≤ 450ms after scroll settles. Press again: the previous row un-stamps instantly, next one lands. A "Pull another" label replaces the first label.
- **Same grammar:** it is just the stamp.
- **Fallback:** no JS means the button is absent. Under reduced motion: scroll and stamp apply instantly, no slide.
- **Honesty:** only starred books; the label says "from my read-again list", never "recommended".
- Add `#<slug>` to the URL on each pull so a visitor can share that exact stamped row. That is the screenshot-and-send moment.

## Did the plan treat my r2 fairly?
Mostly: arrival-motion reversal, chips-to-toggle, and the home-spine bridge honour my concessions and my spine position. But it cut Option 8 and the newsletter/Synetica lane entirely, which I had made part of the shipping spec.

## WOW, honestly
Hover stamping is a pleasant thunk; the red margin rule is the real hit. Neither is "never seen before" for a first-time visitor. The random stamp plus the five-stamp pile gives two shareable moments instead of one. With fixes I'd score 9 / WOW 8.
