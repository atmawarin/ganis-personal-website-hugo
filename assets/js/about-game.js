// Baseline: the about page as a one-button runner. Nine zones, one per level,
// each one's twist taken from the fact it stands for. Loaded only when someone
// presses start; every word it shows about Ganis is read from the page.

const TUNE = {
  H: 180,            // logical world height
  minW: 240,         // narrowest world we show, so a phone still sees ahead
  ground: 150,       // the baseline
  run: 105,          // u/s
  calmRun: 80,
  gravity: 1150,
  hop: 360,
  cut: 0.45,         // vy kept when the button is released early
  coyote: 0.09,
  buffer: 0.11,
  squash: 0.09,
  hitstop: 0.06,
  knock: 18,
  safe: 1,           // seconds of no-hit after a stumble
  assistAfter: 4,    // stumbles in a zone before hazards quietly space out
  step: 1 / 120,
};

const still = matchMedia("(prefers-reduced-motion: reduce)");
const html = document.documentElement;

// Zones. Times are seconds from the zone's start at run speed.
const ZONES = [
  { // Papua: you are the patrol car; the name is on the road.
    len: 12, car: true,
    hazards: [2.5, 4.2, 5.6, 7.4, 8.6, 10.2].map((t) => ({ t, kind: "pothole" })),
    letters: [[1.2, 0], [2.0, 1], [3.3, 0], [4.9, 1], [6.4, 0], [8.0, 1], [9.4, 0], [11.0, 0]],
  },
  { // Malang: five days and four nights on the KM Rinjani.
    len: 12, ship: true,
    hazards: [1.8, 3.2, 4.3, 5.9, 7.0, 8.6, 9.7, 11.0].map((t) => ({ t, kind: "wave" })),
  },
  { // On the move: back and forth, then high school.
    len: 12, flipAt: 6,
    hazards: [1.6, 3.0, 4.4, 7.4, 8.7, 10.1].map((t) => ({ t, kind: "kerb" })),
    signs: [[0.4, "Papua"], [3.6, "Jakarta"], [6.6, "Papua"], [9.2, "Jakarta"], [10.6, "SMA 2"], [11.5, "SMA 3"]],
  },
  { // Yogyakarta: the bridge. Same pattern twice, because it hadn't changed.
    len: 12, bridge: true,
    hazards: [1.8, 2.8, 4.1, 7.0, 8.0, 9.3].map((t) => ({ t, kind: "stone" })),
  },
  { // Jakarta: two jobs, then a second hop, and two walls that need it.
    len: 14, doubleAt: 8.0,
    hazards: [1.5, 2.8, 4.0, 5.2, 7.4, 9.0, 10.4, 12.0].map((t, i) => ({ t, kind: i > 4 && i % 2 ? "wall" : "scooter" })),
    signs: [[0.6, "Circle Indonesia"], [6.0, "Akubu"]],
  },
  { // SoftwareSeni: desks, one for every six.
    len: 14,
    hazards: [1.4, 2.6, 3.8, 5.0, 6.2, 7.4, 8.6, 9.8, 11.0, 12.2].map((t) => ({ t, kind: "desk" })),
  },
  { // The long run: 42 km, water at the car, the last 11 km after dinner.
    len: 22, longRun: true,
    hazards: [1.5, 3.1, 4.6, 6.2, 7.6, 9.3, 12.6, 14.1, 17.6, 19.0, 20.4].map((t) => ({ t, kind: "kerb" })),
    water: [11.0, 16.2],
  },
  { // Synetica: assumptions, tested by clearing them.
    len: 12,
    hazards: [1.6, 3.0, 4.2, 5.8, 7.0, 8.4, 9.8, 11.0].map((t) => ({ t, kind: "crate" })),
  },
  { // Prove: the notifications, and the road that keeps going.
    len: 12, open: true,
    hazards: [1.4, 2.6, 3.9, 5.1, 6.4, 7.6].map((t, i) => ({ t, kind: i === 3 ? "ml" : "bubble" })),
  },
];

const SIZE = {
  pothole: [16, 5], wave: [14, 11], kerb: [9, 10], stone: [10, 8], scooter: [18, 13],
  tall: [10, 30], wall: [10, 66], desk: [18, 12], crate: [13, 13], bubble: [16, 11], ml: [14, 14],
};

let game = null;

export async function start(button) {
  if (game) return;
  game = true;
  // Canvas text is drawn with the site's faces, so wait for them (briefly).
  const faces = ['600 13px Fraunces', '500 7px "IBM Plex Mono"', '17px Newsreader'];
  await Promise.race([
    Promise.all(faces.map((f) => document.fonts.load(f))).catch(() => {}),
    new Promise((r) => setTimeout(r, 1500)),
  ]);
  game = new Baseline(button);
}

class Baseline {
  constructor(button) {
    this.button = button;
    this.levels = [...document.querySelectorAll(".levels > li")].map((li) => ({
      li,
      label: li.querySelector(".levels__label").firstChild.textContent.trim(),
      title: li.querySelector(".levels__title").textContent,
      text: li.querySelector(".levels__text").innerHTML,
    }));
    this.touch = matchMedia("(pointer: coarse)").matches;
    this.best = read();
    this.build();
    this.colours();
    this.resize();
    this.bind();
    this.open();
    this.title();
  }

  // ---------- DOM ----------
  build() {
    const el = document.createElement("div");
    el.className = "bl";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Baseline, a short run through the story so far");
    el.innerHTML = `
      <div class="bl__bar">
        <p class="bl__where">Baseline</p>
        <p class="bl__meter" aria-hidden="true"></p>
        <div class="bl__btns">
          <button type="button" data-bl="pause">Pause</button>
          <button type="button" data-bl="skip">Skip to the page</button>
          <button type="button" data-bl="quit">Quit</button>
        </div>
      </div>
      <div class="bl__stage">
        <canvas class="bl__canvas" tabindex="0" aria-label="The run. ${this.touch ? "Tap" : "Space"} to jump, hold to jump higher."></canvas>
        <div class="bl__card" hidden></div>
      </div>
      <p class="visually-hidden" aria-live="polite"></p>`;
    document.body.append(el);
    this.el = el;
    this.where = el.querySelector(".bl__where");
    this.meterEl = el.querySelector(".bl__meter");
    this.stage = el.querySelector(".bl__stage");
    this.canvas = el.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.card = el.querySelector(".bl__card");
    this.live = el.querySelector("[aria-live]");
    this.pauseBtn = el.querySelector('[data-bl="pause"]');
  }

  colours() {
    const cs = getComputedStyle(html);
    const v = (n) => cs.getPropertyValue(n).trim();
    this.c = { paper: v("--paper"), paper2: v("--paper-2") || v("--paper"), ink: v("--ink"), red: v("--red"), muted: v("--muted"), rule: v("--rule") };
  }

  resize() {
    const r = this.stage.getBoundingClientRect();
    const dpr = Math.min(devicePixelRatio || 1, 2);
    this.cssW = r.width;
    this.cssH = r.height;
    const narrow = r.width < 600;
    this.scale = Math.min(r.height / (narrow ? 150 : 128), r.width / (narrow ? 170 : TUNE.minW));
    this.W = r.width / this.scale;
    this.viewH = r.height / this.scale;
    this.offY = this.viewH * (narrow ? 0.72 : 0.78) - TUNE.ground;
    this.px = Math.min(this.W * 0.28, 90);
    this.canvas.width = Math.round(r.width * dpr);
    this.canvas.height = Math.round(r.height * dpr);
    this.dpr = dpr;
    this.lw = 1.6 / this.scale;
    this.duskG = this.ctx.createRadialGradient(this.px, TUNE.ground - 10, 14, this.px, TUNE.ground - 10, 70);
    this.duskG.addColorStop(0, "rgba(12,11,10,0)");
    this.duskG.addColorStop(1, "rgba(12,11,10,1)");
    this.draw();
  }

  bind() {
    const on = (t, e, f, o) => { t.addEventListener(e, f, o); (this.offs ||= []).push(() => t.removeEventListener(e, f, o)); };
    on(this.el, "click", (e) => {
      const b = e.target.closest("[data-bl]");
      if (!b) return;
      const a = b.dataset.bl;
      if ((a === "next" || a === "again" || a === "page") && performance.now() < this.armed) return;
      if (a === "pause") this.state === "paused" ? this.resume() : this.pause();
      else if (a === "resume") this.resume();
      else if (a === "skip") this.close(this.zone >= 0 ? this.levels[Math.min(this.zone, 8)].li : null);
      else if (a === "quit") this.close();
      else if (a === "go") this.begin();
      else if (a === "next") this.nextZone();
      else if (a === "again") this.begin();
      else if (a === "page") this.close(document.querySelector(".continue"));
    });
    on(this.canvas, "pointerdown", (e) => { e.preventDefault(); this.canvas.focus({ preventScroll: true }); this.press(); });
    on(this.canvas, "pointerup", () => this.release());
    on(this.canvas, "pointercancel", () => this.release());
    on(document, "keydown", (e) => this.key(e, true));
    on(document, "keyup", (e) => this.key(e, false));
    on(window, "resize", () => this.resize());
    on(document, "visibilitychange", () => document.hidden && this.pause());
    on(window, "blur", () => this.pause());
    const scheme = matchMedia("(prefers-color-scheme: dark)");
    on(scheme, "change", () => { this.colours(); this.draw(); });
  }

  key(e, down) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (down && k === "Escape") { e.preventDefault(); return this.close(); }
    if (down && k === "Tab") return this.trap(e);
    if (down && (k === "p" || k === "P") && (this.state === "run" || this.state === "paused")) {
      return this.state === "paused" ? this.resume() : this.pause();
    }
    const onButton = e.target.closest && e.target.closest("button");
    const jump = (k === " " && !onButton) || k === "ArrowUp" || k === "w" || k === "W";
    if (!jump) return;
    if (this.state === "run") {
      e.preventDefault();
      if (down && !e.repeat) this.press();
      if (!down) this.release();
    }
  }

  trap(e) {
    const f = [...this.el.querySelectorAll("button, a[href], canvas")].filter((n) => !n.closest("[hidden]"));
    const i = f.indexOf(document.activeElement);
    if (i < 0) { e.preventDefault(); (e.shiftKey ? f[f.length - 1] : f[0]).focus(); }
    else if (e.shiftKey && i === 0) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
  }

  open() {
    this.scrollY = scrollY;
    this.inerted = [...document.body.children].filter((n) => n !== this.el && !n.inert);
    this.inerted.forEach((n) => (n.inert = true));
    const gap = innerWidth - html.clientWidth;
    html.style.overflow = "hidden";
    if (gap) html.style.paddingRight = `${gap}px`;
    if (!still.matches) {
      const r = this.button.getBoundingClientRect();
      this.el.animate(
        [{ clipPath: `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px)` }, { clipPath: "inset(0px 0px 0px 0px)" }],
        { duration: 320, easing: "cubic-bezier(.2,.7,.2,1)" },
      );
    }
  }

  close(target) {
    cancelAnimationFrame(this.raf);
    this.offs.forEach((off) => off());
    const done = () => {
      this.el.remove();
      this.inerted.forEach((n) => (n.inert = false));
      html.style.overflow = "";
      html.style.paddingRight = "";
      game = null;
      const t = target || this.button;
      if (target) {
        t.tabIndex = -1;
        t.scrollIntoView({ block: "center" });
        t.focus({ preventScroll: true });
      } else {
        scrollTo(0, this.scrollY);
        t.focus({ preventScroll: true });
      }
    };
    if (still.matches) return done();
    const r = this.button.getBoundingClientRect();
    this.el.animate(
      [{ clipPath: "inset(0px 0px 0px 0px)" }, { clipPath: `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px)` }],
      { duration: 240, easing: "cubic-bezier(.5,0,.8,.3)" },
    ).onfinish = done;
  }

  say(msg) { this.live.textContent = msg; }

  // ---------- cards ----------
  showCard(inner, focus) {
    this.armed = performance.now() + 600; // a mashed jump can't skip a card unread
    this.card.innerHTML = `<div class="bl__panel">${inner}</div>`;
    this.card.hidden = false;
    const b = this.card.querySelector(focus || "button");
    if (b) b.focus({ preventScroll: true });
  }

  hideCard() { this.card.hidden = true; this.card.innerHTML = ""; }

  title() {
    this.state = "title";
    this.zone = -1;
    this.resetWorld(0);
    this.where.textContent = "Baseline";
    this.meterEl.textContent = this.meterText = "";
    this.pauseBtn.hidden = true;
    const hint = this.touch ? "Tap to jump. Hold to jump higher." : "Space to jump. Hold to jump higher.";
    this.showCard(`
      <p class="bl__kicker">Nine levels</p>
      <h2 class="bl__title is-ink">Baseline</h2>
      <p class="bl__text">A short run through the story so far.</p>
      <p class="bl__note">${hint} Esc to quit.${still.matches ? "<br>Calm mode is on. Same run, less movement." : ""}</p>
      <div class="bl__actions"><button type="button" class="play-btn" data-bl="go">Press start</button></div>`);
    this.draw();
  }

  levelCard(n) {
    const L = this.levels[n];
    this.state = "card";
    this.release();
    const name = n === 0
      ? `<p class="bl__name" aria-label="Garnisun, shortened to Ganis">${"GARNISUN".split("").map((ch, i) => `<span${[2, 6, 7].includes(i) ? ' class="drop"' : ""}>${ch}</span>`).join("")}</p>`
      : "";
    const cont = this.touch ? "Tap to keep running" : "Space to keep running";
    this.showCard(`
      <p class="bl__kicker">Level ${n + 1} of 9 · ${L.label.replace(/^Level \d+ · /, "")}</p>
      <h2 class="bl__title is-ink">${L.title}</h2>
      ${name}
      <p class="bl__text">${L.text}</p>
      <div class="bl__actions"><button type="button" class="play-btn" data-bl="next">${cont}</button></div>`);
    this.say(`Level ${n + 1} of 9 cleared: ${L.title}. ${this.card.querySelector(".bl__text").textContent}`);
    if (n === 0) requestAnimationFrame(() => requestAnimationFrame(() => this.card.querySelector(".bl__name")?.classList.add("is-short")));
  }

  endCard() {
    this.state = "end";
    this.release();
    const L = this.levels[8];
    const t = this.time;
    const isBest = !this.best || t < this.best;
    if (isBest) { this.best = t; write(t); }
    this.pauseBtn.hidden = true;
    this.showCard(`
      <p class="bl__kicker">Level 9 of 9 · ${L.label.replace(/^Level \d+ · /, "")} · You are here</p>
      <h2 class="bl__title is-ink">${L.title}</h2>
      <p class="bl__text">${L.text}</p>
      <p class="bl__text">That&rsquo;s as far as the map goes.</p>
      <p class="bl__note">Your time ${fmt(t)} · ${this.hits ? `${this.hits} ${this.hits === 1 ? "stumble" : "stumbles"}` : "no stumbles"}${isBest ? "" : ` · best ${fmt(this.best)}`}</p>
      <div class="bl__actions">
        <button type="button" class="play-btn" data-bl="page">Back to the page</button>
        <button type="button" class="play-btn" data-bl="again">Play again</button>
      </div>`);
    this.say(`That's as far as the map goes. Your time ${fmt(t)}.`);
  }

  pause() {
    if (this.state !== "run") return;
    this.state = "paused";
    this.release();
    this.pauseBtn.textContent = "Resume";
    this.showCard(`
      <p class="bl__kicker">Level ${this.zone + 1} of 9</p>
      <h2 class="bl__title">Paused</h2>
      <div class="bl__actions"><button type="button" class="play-btn" data-bl="resume">Resume</button></div>`);
  }

  resume() {
    if (this.state !== "paused") return;
    this.hideCard();
    this.pauseBtn.textContent = "Pause";
    this.state = "run";
    this.canvas.focus({ preventScroll: true });
    this.loop();
  }

  // ---------- run ----------
  begin() {
    this.time = 0;
    this.hits = 0;
    this.ouch = false;
    this.startZone(0);
  }

  nextZone() {
    if (this.zone >= 8) return this.endCard();
    this.startZone(this.zone + 1);
  }

  startZone(n) {
    this.hideCard();
    this.zone = n;
    this.resetWorld(n);
    this.state = "run";
    this.pauseBtn.hidden = false;
    this.pauseBtn.textContent = "Pause";
    this.where.textContent = `Level ${n + 1} of 9 · ${this.levels[n].title}`;
    this.say(`Level ${n + 1} of 9: ${this.levels[n].title}.`);
    this.canvas.focus({ preventScroll: true });
    this.loop();
  }

  resetWorld(n) {
    const Z = ZONES[n];
    const speed = still.matches ? TUNE.calmRun : TUNE.run;
    const spread = still.matches ? 1.15 : 1;
    this.Z = Z;
    this.speed = speed;
    this.cam = 0;
    this.zt = 0;
    this.end = Z.len * speed;
    this.p = { y: 0, vy: 0, ground: true, coyote: 0, buffer: 0, hold: false, squash: 0, safe: 0, air: 0, phase: 0, slow: 0 };
    this.hitstop = 0;
    this.stumbles = 0;
    this.double = false;
    this.flash = null;
    const lead = this.px;
    this.obs = Z.hazards.map(({ t, kind }) => {
      const [w, h] = SIZE[kind];
      return { x: lead + t * speed * spread, w, h, kind, hit: false, past: false, drift: kind === "bubble" || kind === "ml" ? 22 : 0 };
    });
    this.letters = (Z.letters || []).map(([t, up], i) => ({ x: lead + t * speed * spread, up, ch: "GARNISUN"[i], got: false }));
    this.signs = (Z.signs || []).map(([t, s]) => ({ x: lead + t * speed * spread, s }));
    this.water = (Z.water || []).map((t) => ({ x: lead + t * speed * spread, said: false }));
    this.meter();
  }

  press() {
    if (this.state !== "run") return;
    this.p.hold = true;
    this.p.buffer = TUNE.buffer;
  }

  release() {
    if (!this.p) return;
    this.p.hold = false;
    if (this.p.vy < 0) this.p.vy *= TUNE.cut;
  }

  loop() {
    cancelAnimationFrame(this.raf);
    let last = performance.now();
    let acc = 0;
    const tick = (now) => {
      if (this.state !== "run") return this.draw();
      acc += Math.min((now - last) / 1000, 0.05);
      last = now;
      while (acc >= TUNE.step) { this.update(TUNE.step); acc -= TUNE.step; if (this.state !== "run") break; }
      this.draw();
      if (this.state === "run") this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  update(dt) {
    const p = this.p;
    const Z = this.Z;
    if (this.hitstop > 0) { this.hitstop -= dt; return; }
    this.time += dt;
    this.zt += dt;
    const v = this.speed * (p.slow > 0 ? 0.6 : 1);
    p.slow = Math.max(0, p.slow - dt);
    this.cam += v * dt;
    p.phase += v * dt;

    // Jump: coyote time, input buffer, variable height, one air hop late in Jakarta.
    p.coyote = p.ground ? TUNE.coyote : Math.max(0, p.coyote - dt);
    p.buffer = Math.max(0, p.buffer - dt);
    if (Z.doubleAt && !this.double && this.zt >= Z.doubleAt) { this.double = true; this.flashText("Jump twice.", 1.8); }
    if (p.buffer > 0) {
      if (p.ground || p.coyote > 0) { p.vy = -TUNE.hop; p.ground = false; p.coyote = 0; p.buffer = 0; p.air = this.double ? 1 : 0; }
      else if (p.air > 0) { p.vy = -TUNE.hop * 0.85; p.air -= 1; p.buffer = 0; }
      if (!p.hold && p.vy < 0) p.vy *= TUNE.cut; // a tap shorter than one step is still a short hop
    }
    if (!p.ground) {
      p.vy += TUNE.gravity * dt;
      p.y += p.vy * dt;
      if (p.y >= 0) { p.y = 0; p.vy = 0; p.ground = true; if (!still.matches) p.squash = TUNE.squash; }
    }
    p.squash = Math.max(0, p.squash - dt);
    p.safe = Math.max(0, p.safe - dt);

    // Hazards.
    const me = this.box();
    for (const o of this.obs) {
      o.x -= o.drift * dt;
      const ox = o.x - this.cam;
      if (!o.past && ox + o.w < this.px - 4) {
        o.past = true;
        if (!o.hit && o.kind === "crate") o.tested = true;
        if (!o.hit && o.kind === "ml") { o.gone = true; this.flashText("Uninstalling", 1.8); }
      }
      if (o.hit || p.safe > 0) continue;
      const top = TUNE.ground - o.h - (o.kind === "bubble" || o.kind === "ml" ? 2 : 0);
      if (me.x < ox + o.w - 2 && me.x + me.w > ox + 2 && me.y + me.h > top + 2) this.stumble(o);
    }

    // Letters on the road in Papua.
    for (const l of this.letters) {
      if (l.got) continue;
      const lx = l.x - this.cam;
      const ly = TUNE.ground - (l.up ? 46 : 12);
      if (Math.abs(lx - (me.x + me.w / 2)) < 9 && Math.abs(ly - (me.y + me.h / 2)) < 14) l.got = true;
    }
    for (const w of this.water) if (!w.said && w.x - this.cam < this.px) { w.said = true; this.flashText("Water.", 1.4); }

    if (this.flash) { this.flash.t -= dt; if (this.flash.t <= 0) this.flash = null; }
    if (this.cam >= this.end) this.zone === 8 ? this.endCard() : this.levelCard(this.zone);
  }

  box() {
    const car = this.Z.car;
    const b = (this.bx ||= {});
    b.w = car ? 20 : 8;
    b.h = car ? 11 : 16;
    b.x = this.px - b.w / 2;
    b.y = TUNE.ground - b.h + this.p.y;
    return b;
  }

  stumble(o) {
    const p = this.p;
    o.hit = true;
    this.hitstop = still.matches ? 0 : TUNE.hitstop;
    this.cam -= TUNE.knock;
    p.safe = TUNE.safe;
    p.slow = 0.4;
    this.stumbles += 1;
    this.hits += 1;
    if (!this.ouch) { this.ouch = true; this.flashText("Ouch.", 1.2); }
    if (this.stumbles === TUNE.assistAfter) {
      const at = this.cam + this.px;
      this.obs.forEach((q) => { if (q.x > at) q.x = at + (q.x - at) * 1.2; });
      this.end = at + (this.end - at) * 1.2;
    }
  }

  flashText(text, t) { this.flash = { text, t }; }

  meter() {
    const Z = this.Z;
    const f = Math.min(1, this.cam / this.end);
    let m = "";
    if (Z.car) m = this.letters.map((l) => (l.got ? l.ch : "_")).join("");
    else if (Z.ship) m = `Day ${Math.min(5, 1 + Math.floor(f * 5))} of 5`;
    else if (Z.flipAt) m = "Back and forth";
    else if (Z.bridge) m = this.zt < 6 ? "The bridge" : "It hadn\u2019t changed.";
    else if (this.zone === 5) m = f < 0.4 ? "Employee #13" : f < 0.8 ? "Ninety people" : "Director";
    else if (Z.longRun) m = `km ${Math.min(42, Math.floor(f * 42))} of 42${f * 42 >= 31 ? " · The last 11 km." : ""}`;
    else if (this.zone === 7) m = `${this.obs.filter((o) => o.tested).length} tested`;
    else if (Z.open) m = f > 0.75 ? "That’s as far as the map goes." : "Still running";
    if (this.flash) m = this.flash.text;
    if (m !== this.meterText) { this.meterText = m; this.meterEl.textContent = m; }
  }

  // ---------- drawing ----------
  draw() {
    const { ctx, c } = this;
    if (!ctx || !this.Z) return;
    if (this.state === "run") this.meter();
    const k = this.scale * this.dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = c.paper;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.setTransform(k, 0, 0, k, 0, this.offY * k);
    ctx.lineWidth = this.lw;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const flip = this.Z.flipAt && this.zt >= this.Z.flipAt;
    if (flip) { ctx.translate(this.W, 0); ctx.scale(-1, 1); }
    this.sky();
    this.back();
    this.groundLine();
    this.things(flip);
    this.player();
    if (flip) ctx.setTransform(k, 0, 0, k, 0, this.offY * k);
    this.dusk();
  }

  sky() {
    const { ctx, c, Z } = this;
    if (!Z.ship) return;
    const f = Math.min(1, this.cam / this.end);
    const phase = f * 9; // five days and four nights, alternating
    const night = Math.floor(phase) % 2 === 1;
    const y = 72 - Math.sin((phase % 1) * Math.PI) * 16;
    const x = this.W * (0.15 + (phase % 1) * 0.7);
    ctx.beginPath();
    if (night) { ctx.fillStyle = c.ink; ctx.arc(x, y, 6, 0.3, Math.PI * 1.7); ctx.arc(x + 3, y, 5, Math.PI * 1.6, 0.4, true); ctx.fill(); }
    else { ctx.strokeStyle = c.ink; ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.stroke(); }
  }

  back() {
    const { ctx, c, Z } = this;
    const pr = still.matches ? 0 : 0.3;
    const off = (this.cam * pr) % 400;
    ctx.strokeStyle = c.rule;
    ctx.fillStyle = c.rule;
    if (Z.ship) {
      for (let x = -off % 40; x < this.W + 40; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 118); ctx.quadraticCurveTo(x + 10, 114, x + 20, 118); ctx.stroke();
      }
      return;
    }
    if (this.zone === 4) { // Jakarta: a row of towers
      for (let i = -1; i < this.W / 34 + 2; i++) {
        const x = i * 34 - (this.cam * pr % 34);
        const h = 30 + ((i + Math.floor(this.cam * pr / 34)) * 37 % 5) * 9;
        ctx.strokeRect(x, TUNE.ground - h, 20, h);
      }
      return;
    }
    if (Z.longRun) { // the Kraton wall
      ctx.beginPath();
      for (let x = -(this.cam * pr % 16); x < this.W + 16; x += 16) { ctx.rect(x, TUNE.ground - 26, 10, 6); }
      ctx.moveTo(0, TUNE.ground - 20); ctx.lineTo(this.W, TUNE.ground - 20);
      ctx.stroke();
      return;
    }
    // Trees, because Ganis likes trees.
    ctx.strokeStyle = c.ink;
    ctx.globalAlpha = 0.3;
    for (let i = -1; i < this.W / 52 + 2; i++) {
      const base = Math.floor(this.cam * pr / 52);
      const x = i * 52 - (this.cam * pr % 52);
      const h = 22 + ((i + base) * 53 % 4) * 7;
      ctx.beginPath();
      ctx.moveTo(x, TUNE.ground);
      ctx.lineTo(x, TUNE.ground - h);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x, TUNE.ground - h - 7, 9, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  groundY(x) {
    if (!this.Z.ship || still.matches) return TUNE.ground;
    return TUNE.ground + Math.sin((x + this.cam) / 30 + this.zt * 1.6) * 2.5;
  }

  groundLine() {
    const { ctx, c, Z } = this;
    ctx.strokeStyle = c.ink;
    ctx.beginPath();
    if (Z.ship && !still.matches) {
      for (let x = 0; x <= this.W; x += 4) x ? ctx.lineTo(x, this.groundY(x)) : ctx.moveTo(x, this.groundY(x));
    } else {
      ctx.moveTo(0, TUNE.ground);
      ctx.lineTo(this.W, TUNE.ground);
    }
    ctx.stroke();
    // A baseline wants its descender line: a hairline below, with ticks.
    ctx.strokeStyle = c.rule;
    ctx.beginPath();
    ctx.moveTo(0, TUNE.ground + 14);
    ctx.lineTo(this.W, TUNE.ground + 14);
    for (let x = -(this.cam % 24); x < this.W; x += 24) { ctx.moveTo(x, TUNE.ground + 14); ctx.lineTo(x, TUNE.ground + 18); }
    ctx.stroke();
    if (Z.bridge) { // railings
      ctx.strokeStyle = c.ink;
      ctx.beginPath();
      ctx.moveTo(0, TUNE.ground - 22); ctx.lineTo(this.W, TUNE.ground - 22);
      for (let x = -(this.cam % 14); x < this.W; x += 14) { ctx.moveTo(x, TUNE.ground - 22); ctx.lineTo(x, TUNE.ground); }
      ctx.globalAlpha = 0.35; ctx.stroke(); ctx.globalAlpha = 1;
    }
  }

  text(s, x, y, size, colour, flip, align = "center") {
    const { ctx } = this;
    size = Math.max(size, 11 / this.scale);
    ctx.save();
    ctx.translate(x, y);
    if (flip) ctx.scale(-1, 1);
    ctx.fillStyle = colour;
    ctx.font = `500 ${size}px "IBM Plex Mono", ui-monospace, monospace`;
    ctx.textAlign = align;
    ctx.fillText(s, 0, 0);
    ctx.restore();
  }

  things(flip) {
    const { ctx, c } = this;
    const G = TUNE.ground;
    for (const s of this.signs) {
      const x = s.x - this.cam;
      if (x < -60 || x > this.W + 60) continue;
      ctx.strokeStyle = c.ink;
      ctx.beginPath(); ctx.moveTo(x, G); ctx.lineTo(x, G - 30); ctx.stroke();
      const fs = Math.max(7, 11 / this.scale);
      if (s.fs !== fs) { ctx.font = `500 ${fs}px "IBM Plex Mono", monospace`; s.w = ctx.measureText(s.s.toUpperCase()).width + 8; s.fs = fs; }
      const bh = fs + 5;
      ctx.fillStyle = c.paper;
      ctx.fillRect(x - s.w / 2, G - 32 - bh, s.w, bh);
      ctx.strokeRect(x - s.w / 2, G - 32 - bh, s.w, bh);
      this.text(s.s.toUpperCase(), x, G - 32 - bh / 2 + fs * 0.36, fs, c.ink, flip);
    }
    for (const w of this.water) { // the family car, parked, as a water station
      const x = w.x - this.cam;
      if (x < -40 || x > this.W + 40) continue;
      ctx.strokeStyle = c.ink;
      ctx.beginPath();
      ctx.moveTo(x - 14, G - 4); ctx.lineTo(x - 14, G - 10); ctx.lineTo(x - 7, G - 10); ctx.lineTo(x - 3, G - 16); ctx.lineTo(x + 8, G - 16); ctx.lineTo(x + 12, G - 10); ctx.lineTo(x + 16, G - 10); ctx.lineTo(x + 16, G - 4);
      ctx.stroke();
      ctx.beginPath(); ctx.arc(x - 7, G - 3, 3, 0, Math.PI * 2); ctx.arc(x + 9, G - 3, 3, 0, Math.PI * 2); ctx.stroke();
      this.text("Water.", x, G - 22, 6, c.muted, flip);
    }
    for (const l of this.letters) {
      if (l.got) continue;
      const x = l.x - this.cam;
      if (x < -10 || x > this.W + 10) continue;
      ctx.save();
      ctx.font = `600 13px Fraunces, Georgia, serif`;
      ctx.translate(x, G - (l.up ? 46 : 12) + 5);
      if (flip) ctx.scale(-1, 1);
      ctx.fillStyle = c.ink;
      ctx.textAlign = "center";
      ctx.fillText(l.ch, 0, 0);
      ctx.restore();
    }
    for (const o of this.obs) {
      const x = o.x - this.cam;
      if (x < -30 || x > this.W + 30 || o.gone && x < this.px - 60) continue;
      this.hazard(o, x, flip);
    }
    if (this.Z.bridge) this.becak();
  }

  hazard(o, x, flip) {
    const { ctx, c } = this;
    const G = this.groundY(x + o.w / 2);
    ctx.strokeStyle = c.ink;
    ctx.fillStyle = c.paper;
    ctx.globalAlpha = o.hit ? 0.35 : 1;
    ctx.beginPath();
    switch (o.kind) {
      case "pothole":
        ctx.ellipse(x + o.w / 2, G, o.w / 2, 3, 0, 0, Math.PI * 2);
        ctx.fillStyle = c.ink; ctx.fill();
        ctx.beginPath(); ctx.moveTo(x + 2, G - o.h); ctx.lineTo(x + o.w / 2, G - o.h - 3); ctx.lineTo(x + o.w - 2, G - o.h); ctx.stroke();
        break;
      case "wave":
        ctx.moveTo(x, G); ctx.quadraticCurveTo(x + 2, G - o.h, x + o.w * 0.6, G - o.h); ctx.quadraticCurveTo(x + o.w * 0.4, G - o.h * 0.5, x + o.w, G);
        ctx.fill(); ctx.stroke();
        break;
      case "kerb": case "stone":
        ctx.rect(x, G - o.h, o.w, o.h); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(x, G - o.h / 2); ctx.lineTo(x + o.w, G - o.h / 2); ctx.stroke();
        break;
      case "scooter":
        ctx.moveTo(x + 3, G - 3); ctx.lineTo(x + 14, G - 3); ctx.lineTo(x + 15, G - o.h); ctx.lineTo(x + 12, G - o.h);
        ctx.stroke();
        ctx.beginPath(); ctx.arc(x + 3, G - 3, 3, 0, Math.PI * 2); ctx.arc(x + 15, G - 3, 3, 0, Math.PI * 2); ctx.stroke();
        break;
      case "tall": case "wall":
        ctx.rect(x, G - o.h, o.w, o.h); ctx.fill(); ctx.stroke();
        for (let y = G - o.h + 5; y < G; y += 6) { ctx.moveTo(x + 2, y); ctx.lineTo(x + o.w - 2, y); }
        ctx.stroke();
        break;
      case "desk":
        ctx.moveTo(x, G - o.h); ctx.lineTo(x + o.w, G - o.h);
        ctx.moveTo(x + 2, G - o.h); ctx.lineTo(x + 2, G); ctx.moveTo(x + o.w - 2, G - o.h); ctx.lineTo(x + o.w - 2, G);
        ctx.moveTo(x + 6, G - o.h); ctx.lineTo(x + 6, G - o.h - 6); ctx.lineTo(x + 12, G - o.h - 6); ctx.lineTo(x + 12, G - o.h);
        ctx.stroke();
        break;
      case "crate":
        if (!o.tested) ctx.setLineDash([2 / this.scale * 2, 2 / this.scale * 2]);
        ctx.rect(x, G - o.h, o.w, o.h); ctx.fill(); ctx.stroke();
        ctx.setLineDash([]);
        this.text(o.tested ? "tested" : "assumption", x + o.w / 2, G - o.h - 4, 5.5, o.tested ? c.red : c.muted, flip);
        break;
      case "bubble": case "ml": {
        const y = G - o.h - 2;
        if (ctx.roundRect) ctx.roundRect(x, y, o.w, o.h, 3); else ctx.rect(x, y, o.w, o.h);
        ctx.fill(); ctx.stroke();
        if (o.kind === "ml") {
          this.text("ML", x + o.w / 2, y + o.h / 2 + 2.5, 7, c.ink, flip);
          if (o.gone) {
            ctx.strokeStyle = c.red; ctx.beginPath(); ctx.moveTo(x - 2, y + o.h / 2); ctx.lineTo(x + o.w + 2, y + o.h / 2); ctx.stroke();
            this.text("Uninstalling", x + o.w / 2, y - 5, 5.5, c.red, flip);
          }
        } else {
          ctx.beginPath(); ctx.moveTo(x + 4, y + 4); ctx.lineTo(x + o.w - 4, y + 4); ctx.moveTo(x + 4, y + 7); ctx.lineTo(x + o.w - 7, y + 7); ctx.stroke();
        }
        break;
      }
    }
    ctx.globalAlpha = 1;
  }

  becak() { // empty, rolling along behind
    const { ctx, c } = this;
    const x = this.px - 34;
    const G = TUNE.ground;
    const spin = still.matches ? 0 : this.cam / 5;
    ctx.strokeStyle = c.muted;
    ctx.beginPath();
    ctx.arc(x - 8, G - 5, 5, 0, Math.PI * 2);
    ctx.moveTo(x + 10 + 5, G - 5); ctx.arc(x + 10, G - 5, 5, 0, Math.PI * 2);
    ctx.moveTo(x - 8 + Math.cos(spin) * 5, G - 5 + Math.sin(spin) * 5); ctx.lineTo(x - 8 - Math.cos(spin) * 5, G - 5 - Math.sin(spin) * 5);
    ctx.moveTo(x - 14, G - 10); ctx.lineTo(x - 2, G - 10); ctx.lineTo(x, G - 22); ctx.moveTo(x - 14, G - 10); ctx.lineTo(x - 14, G - 20); ctx.quadraticCurveTo(x - 8, G - 26, x - 2, G - 20);
    ctx.moveTo(x - 2, G - 10); ctx.lineTo(x + 10, G - 5);
    ctx.stroke();
  }

  player() {
    const { ctx, c, p } = this;
    const b = this.box();
    const x = this.px;
    const G = this.groundY(x);
    const s = p.squash > 0 ? 1 : 0;
    const sx = 1 + 0.2 * s;
    const sy = 1 - 0.18 * s;
    ctx.save();
    ctx.translate(x, G + p.y);
    ctx.scale(sx, sy);
    ctx.globalAlpha = p.safe > 0 ? 0.5 : 1;
    ctx.strokeStyle = c.red;
    ctx.fillStyle = c.red;
    if (this.Z.car) { // the patrol car: plain, no insignia
      ctx.beginPath();
      ctx.moveTo(-11, -3); ctx.lineTo(-11, -8); ctx.lineTo(-5, -8); ctx.lineTo(-2, -13); ctx.lineTo(6, -13); ctx.lineTo(9, -8); ctx.lineTo(11, -8); ctx.lineTo(11, -3); ctx.closePath();
      ctx.fill();
      ctx.fillStyle = c.paper;
      ctx.beginPath(); ctx.arc(-6, -2.5, 3, 0, Math.PI * 2); ctx.arc(7, -2.5, 3, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(-6, -2.5, 3, 0, Math.PI * 2); ctx.moveTo(10, -2.5); ctx.arc(7, -2.5, 3, 0, Math.PI * 2); ctx.stroke();
    } else { // a runner: red, faceless, all legs
      const run = p.ground ? Math.sin(p.phase / 7) : 0.6;
      ctx.lineWidth = this.lw * 1.6;
      ctx.beginPath(); ctx.arc(0, -b.h + 2.5, 2.6, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath();
      ctx.moveTo(0, -b.h + 5.5); ctx.lineTo(1, -7);
      ctx.moveTo(1, -7); ctx.lineTo(1 + run * 4, -3.5); ctx.lineTo(run * 5, 0);
      ctx.moveTo(1, -7); ctx.lineTo(1 - run * 4, -3.5); ctx.lineTo(-run * 5 - 1, -0.5);
      ctx.moveTo(0.5, -b.h + 7); ctx.lineTo(-run * 4, -b.h + 11);
      ctx.moveTo(0.5, -b.h + 7); ctx.lineTo(run * 4 + 1, -b.h + 10);
      ctx.stroke();
    }
    ctx.restore();
    if (p.ground && !still.matches && Math.sin(p.phase / 7) > 0.97) { // a speck of dust
      ctx.fillStyle = c.muted;
      ctx.fillRect(x - 6, G - 1.5, 1.2, 1.2);
    }
  }

  dusk() {
    if (!this.Z.longRun) return;
    const f = Math.min(1, this.cam / this.end);
    const from = 31 / 42;
    if (f < from) return;
    const a = still.matches ? 0.55 : Math.min(0.55, ((f - from) * 42 / 2.5) * 0.55);
    const { ctx } = this;
    ctx.globalAlpha = a;
    ctx.fillStyle = this.duskG;
    ctx.fillRect(-10, -this.offY - 10, this.W + 20, this.viewH + 20);
    ctx.globalAlpha = 1;
  }
}

function fmt(t) {
  const m = Math.floor(t / 60);
  const s = (t % 60).toFixed(1).padStart(4, "0");
  return `${m}:${s}`;
}

function read() {
  try { return parseFloat(localStorage.getItem("baseline-best")) || 0; } catch { return 0; }
}

function write(t) {
  try { localStorage.setItem("baseline-best", String(t)); } catch { /* private window */ }
}
