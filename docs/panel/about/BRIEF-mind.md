# Brief: a game made of how Ganis thinks

**Tier: L.** Replaces or reshapes Baseline (commit `1474ac5`). Eight seats: the usual seven plus **GD** (game designer).

**Ganis's ask (verbatim):** "Hmm… is that going to good to tell story about me. Its kinda boring yes? Should we create a game where it would think all the weird thing I thought or I think? You can use my Obsidian for list of it. Run through it again with /design-panel."

## Why Baseline isn't enough
Baseline plays well but tells a CV in order: born, moved, worked, ran. The page already says that. It doesn't show the thing people remember about Ganis: **how his mind works**. The new game should make the visitor *think like him* for a few minutes.

## The material: `docs/panel/about/THOUGHTS.md`
30 curated thoughts, sourced from his published questions-and-ideas, his essays and his Obsidian journals (privacy-limited sweep; credentials, health, legal, people, money, relationships excluded). Read it in full. Three patterns:
1. **Everyday friction as a design problem.** The 8:33 meeting, the librarian's 5 PM apology, notary documents in typewriter monospace, cafes that don't open before 8.
2. **His own mind as the favourite puzzle.** The 25-year-old angry at the 20-year-old; is there a true self; making Mobile Legends matter.
3. **Shrink the unit, flip the default.** 1 km instead of 5, share instead of private, different instead of better, a smaller world.

Plus odd questions (why obese doctors, why we hate insects, who made the first to-do list), odd projects (seventy-one keyboards, a bot hunting Tokopedia, a theme park of houses with their own weather, a course on pranks) and deadpan origins (the patrol car, the car as a water station, the bat who became a chicken).

**Rows 23 to 28 are unpublished journal lines.** They can be built in, but they're gated: nothing unpublished goes live without Ganis approving that exact line. Row 24 is flagged `needs-ganis-ok`. The game must work with only the 24 published ones.

## What may stay from Baseline
The engine (canvas, fixed-step loop, input, overlay, focus, calm mode, dynamic import) is reusable. The runner genre isn't sacred. The panel decides: a new game, a rebuilt Baseline, or Baseline with a new spine.

## Hard constraints (unchanged)
- Page HTML stays as is; the game launches from Press start and closes back. Loaded by dynamic import only.
- **Never invent thoughts.** Every thought in the game traces to a THOUGHTS.md row, in his words or a faithful paraphrase. Mechanics can be playful; claims can't be new.
- Thoughts that are published essays or questions should **link to their page** (second read is one of the four jobs).
- No sprites of family or colleagues; no company is an enemy; Mobile Legends is a self-joke, not a dig at players.
- Keyboard and touch; pause, quit, skip one press away; calm mode under reduced motion; no flashing; sound off by default; works at 375px, light and dark; ≤ 30 KB gz; no tracking, no network.
- English by default; the five Bahasa thoughts appear in Bahasa (with the essay's own `lang`), never machine-translated on screen.

## The question for loop 1
What game lets a stranger spend two minutes inside Ganis's head and come out going "this person is weird in a good way"? Genre, core verb, loop, how thoughts become mechanics (not captions), how it ends, how it routes to the essays and the newsletter, why someone plays twice. **GD pitches three distinct concepts and recommends one.** Every other seat pitches or backs one, plus its own lane spec.
