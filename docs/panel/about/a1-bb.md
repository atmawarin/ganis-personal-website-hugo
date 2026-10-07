# A1 · BB (brand) · Loop 1 proposal

**Backed concept: "The Long Run", a one-button side-scrolling runner in nine zones.** One continuous run, left to right, a single verb (jump, with a hold for height). It is the only concept where the genre is also the biography: Ganis is a runner, the page ends on a 42 km run and a year called Prove, and "still running" is the closing line. A runner needs no combat, so nobody on the page ever has to be beaten.

## Why this one, from the brand seat

- **No enemies by construction.** A runner's hazards are terrain and weather, not people or institutions. SoftwareSeni, Akubu, Circle Indonesia and Synetica appear only as places you pass through (a signpost, a building silhouette, a colour field), never as obstacles.
- **Tone match.** The site is calm, dry, self-deprecating. A runner you can play with one thumb, with a forgiving fail state, fits "Stay light." A boss fight or shooter does not.
- **The joke is allowed to be the game.** The only thing in the world that behaves like an enemy is the phone: a notification chime-bubble you hop over (MLBB is the page's own running gag, already signed off). That is the single "antagonist", and it is self-directed, not a person.

## The character: ruling

**Yes to an abstract, stylised Ganis. No to anything that reads as a likeness.**

- **Allowed:** a faceless runner built from 6 to 8 flat shapes in Midnight Purple `#200654`, with one Striking Pink `#DB1363` accent (a headband or shoe). Glasses-and-cap style signifiers are fine only if they stay generic; default is none. It reads as "a runner", and the HUD calls it "Player: Ganis", matching the existing player card.
- **Not allowed:** the thumbs-up photo as a sprite or avatar, a face, a caricature, pixel-art portrait, or any voiceover or speech bubble in "his voice" that says something not already on the page.
- **Why it is OK:** it is the same move as the red pawn: a token, not a depiction. It is also the author's own page and his own opt-in game.

## Must-nots (binding for every seat's spec)

1. **No sprites or silhouettes of Gita, Zen, Zia, Tante Tiwik, grandparents, Mas Surya or any colleague.** Where a person matters to a level, show their *object*: the becak, the family car with a water bottle, the desk. Mas Surya is a name in a caption, never a character. The "family car as water station" is a car glyph at a checkpoint, empty.
2. **No company as enemy, boss, gate to defeat or thing to "escape".** Leaving SoftwareSeni is not a jailbreak. The SoftwareSeni zone is the longest, calmest, most colourful stretch (twelve years), and the exit into Synetica is a door held open, not smashed.
3. **No invented achievements, scores or stats.** No "ranks", no "Level 99", no fake XP, no unlock called "Director" that implies a game mechanic the page didn't state. Allowed numbers: only those on the page (42 km, 11 km, five days, four nights, ninety people, one desk per six, employee #13, nine levels). Distance counter may show real kilometres only inside The Long Run zone; elsewhere show the zone name, not a made-up metre count.
4. **No invented dialogue or captions.** On-screen text is the existing level copy, verbatim or trimmed, plus UI words (Start, Pause, Skip to the page). No new jokes about people. New copy about Ganis needs his approval, same as the earlier approval list.
5. **No death, no "Game Over", no failure stamp on anything biographical.** A miss costs two seconds ("Stumble", you keep going). Nothing in the real-life zones can end the run.
6. **No monetisation gestures, no leaderboards, no names entered, no network.** Optional local best time only, as the brief allows.
7. **MLBB gag restraint:** the phone appears as a hop-over bubble in the final zone and as the `mlbb` code. No game-over for touching it, no mocking of other players, no logo or art from the real game.

## Lane spec: brand-correct zone treatments (what BB signs off)

| Zone | Brand-safe treatment | Watch for |
|---|---|---|
| Papua | Patrol-car silhouette cruises past at the start; the word "Garnisun" appears once as a title card | Not a vehicle you drive; no military imagery beyond the word |
| Malang | Ship crossing: waves rise and fall, hold-to-balance. Five day-night ticks, four nights, then land | No grandparent figures; land shows a house outline only |
| On the move | Two runways, Papua and Jakarta, with a plane-less hop between (a tile swap). SMA 2 / SMA 3 as two signs | No uniforms, no school-bully tropes |
| Yogyakarta | The bridge, a becak wheel rolls beside you, passes under you | No child sprite; the becak is empty |
| Jakarta | Skyline of generic towers; two signposts, Circle Indonesia and Akubu | No logos, no NGO-as-obstacle; "I owe him a lot" appears as caption only |
| SoftwareSeni | Longest zone, warm colour; desks as platforms (one per six is a visual rhythm, not a count of people) | Desks are empty; employee #13 shown as a plain number sign |
| The long run | 42 km counter, Kraton wall silhouette, family car glyph at a checkpoint, dusk for the last 11 km | Real figures only: 42, 11 |
| Synetica | Open door, brand purple, the lone zone with the Synetica logo from the real SVG asset | Link the real file; never redraw the logo |
| Prove | Open-ended; the road continues past the screen edge; the phone bubbles appear; `mlbb` strikes through the bubble | "Uninstalling", not "uninstalled" (page logic) |

## Palette and look (brand lane)

- Backgrounds from the site paper/ink tokens in light and dark; accents `#200654`, `#BF16F2`, `#DB1363` used sparingly. Icy Gray `#E2E9FF` only on dark. No stock neon-arcade palette, no CRT filter gimmick.
- Typography: IBM Plex Mono for HUD and zone titles, the site body face for captions. No pixel font.
- Synetica logo only via `synetica-logo-light-bg.svg` or `-dark-bg.svg` from the Brand Kit, embedded as a file, once, in the Synetica zone.

## Top 3 must-haves

1. **No person is a sprite and no company is an enemy.** Hazards are terrain, weather and the phone only. This is the veto I will hold.
2. **Every word the game shows about Ganis is already on the page** (or carries his explicit approval), and no number appears that the page did not already state.
3. **Fail is soft and nothing biographical can be lost.** A stumble is two seconds and the run always reaches Prove. A visitor who plays badly must still read the nine levels in order and come out liking him.

## Hooks I support (not mine to specify)

- Replay: a second-pass "night run" with the last 11 km colours; optional local best time.
- Degrade: no JS or print sees today's page; reduced motion gets a calm mode with no shake or parallax.

**Next step:** GD fixes the mechanics; BB reviews the zone art list and caption set against the table above in loop 2.
