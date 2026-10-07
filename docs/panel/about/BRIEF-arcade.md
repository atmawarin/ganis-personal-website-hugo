# Brief: make /about/ a real JavaScript video game

**Tier: L.** New page-level interaction, a canvas or DOM game engine, new JS module. Panel is **eight seats** this round: the usual seven plus **GD, a senior game designer**.

**Ganis's ask (verbatim):** "Can you be more creative than this? Kinda like make it javascript video game? Run the idea with /design-panel but make sure to include game designer."

## Where we are
The red pawn (`PLAN-game.md`, commit `0a42ad7`) is a board-game layer over the list: press start, step a pawn down nine levels, stamps, word-by-word text. Ganis's verdict: not creative enough. It's a slideshow with a token, not a game. There's no skill, no challenge, no character, no game feel.

Screens of the current state: `docs/panel/about/screens/g-*.jpg`, `g3-375-prove-mlbb.jpg`, `v2-about-1280.png`.

## The material (all facts already on the page, signed off)
Nine levels: Papua (patrol car *Garnisun*, the name) · Malang (KM Rinjani, five days four nights, grandparents) · On the move (Papua and Jakarta back and forth, SMA 2 and SMA 3 Malang) · Yogyakarta 2002 (came to study, found the bridge Tante Tiwik took him across in a becak at four) · Jakarta 2010 to 2013 (Circle Indonesia, Akubu, met Mas Surya) · SoftwareSeni 2013 to 2025 (employee #13, PM for Villalet, GM at ninety people, one desk for every six, Director) · The long run 2021 (42 km around the Kraton, family car as water station, last 11 km after dinner) · Synetica 2025 · Prove 2026 (still running, reading, uninstalling Mobile Legends).
Player card: runner, reader, trees, typography, single-origin coffee, phone in a drawer 6 to 9 PM, chicken at parties, lion at ping-pong. Bonus: Mythic rank in MLBB, studied Economics, ran a marathon. Photo: thumbs up.
Ganis is a runner, an ex-MLBB player, a typography nerd, and builds products.

## What may bend (Ganis asked for it explicitly)
- The "print vocabulary only" rule from loop 1. The panel decides how far toward a real video-game look this page goes: canvas, sprites, a character, parallax, particles, sound. It must still feel like *this* site's game, not a stock template.
- The "no motion until the visitor acts" rule: still, nothing auto-plays on load. A game screen can animate once someone presses start.

## Hard constraints (not up for debate)
- **Content parity:** the nine levels, player card, bonus stage and Continue block stay as real HTML (today's page). The game is something you launch from it (Press start / Play), and closing it returns you to the page. Crawlers, no-JS and print see today's page.
- **Never invent facts.** Anything the game says about Ganis comes from the material above. Mechanics can be playful (jump a deadline, dodge a phone notification) but captions and stats can't claim new facts.
- **Privacy and grace:** no sprites of Gita, Zen, Zia or real colleagues. SoftwareSeni, Akubu, Circle Indonesia and Synetica are never enemies or bosses to beat.
- **Accessibility:** keyboard and touch both play. Pause, quit (Esc), and a "skip to the page" are always one press away. `prefers-reduced-motion` gets a calm mode (no screen shake, no parallax, no flashing) that still plays. No flashing above 3 per second. Sound off by default.
- **Performance:** a separate module (e.g. `assets/js/about-game.js`, built with Hugo `js.Build`), loaded only on /about/ and only when the visitor presses Play (dynamic import). No impact on page load. No libraries over ~15 KB gz; vanilla canvas preferred. 60 fps on a mid phone. Pauses when the tab is hidden.
- Works at 375px portrait and on desktop, in light and dark.
- No storage beyond an optional local best time; no tracking, no network.

## The question for loop 1
What game is this? Genre, core verb, one-minute loop, how the nine levels become the world, controls on phone and keyboard, how it starts and ends, what the visitor learns about Ganis by playing, and why it's worth a second play. GD pitches **three distinct concepts** and recommends one; every other seat pitches one concept or backs one, plus its own lane spec.
