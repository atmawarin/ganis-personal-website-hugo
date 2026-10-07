// Hmm.: the about page as a deck of microgames, one of Ganis's thoughts per
// round. You do the thought, then read it in his words with a link to where
// he wrote it. Loaded only when someone presses start. The words come from
// data/thoughts.yaml via the page; none of them live in this file.

const PER_PLAY = 8;
const FIRST = "clock";
const LAST = "uninstall";
const ARM = 600;
const SAFE = ["typewriter", "ages", "share", "garnisun", "doctor", "librarian"]; // a known-good middle six // ms before a card's buttons answer, so a mashed key can't skip it

const still = matchMedia("(prefers-reduced-motion: reduce)");
const html = document.documentElement;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

let game = null;

export async function start(button) {
  if (game) return;
  if (!document.getElementById("thoughts")) throw new Error("No thoughts on this page");
  game = new Hmm(button);
}

// ---------- the rounds ----------
// Each gets an api and calls api.done(true|false) once. `verb` keeps two of
// the same kind from following each other; `open` rounds always end
// "Still open", because the thought has no answer yet.
const ROUNDS = {
  clock: {
    verb: "set",
    secs: 12,
    prompt: "Start the meeting at 8:33.",
    play(api) {
      const tol = api.index === 0 ? 3 : 1;
      api.area.innerHTML = `
        <p class="hm-clock" aria-hidden="true">8:<span>00</span></p>
        <div class="hm-dial">
          <button type="button" class="hm-btn hm-btn--sq" data-d="-1" aria-label="One minute earlier">&minus;</button>
          <input type="range" min="0" max="59" value="0" aria-label="Minutes past eight" aria-valuetext="8:00">
          <button type="button" class="hm-btn hm-btn--sq" data-d="1" aria-label="One minute later">+</button>
        </div>
        <button type="button" class="play-btn" data-go>Start it</button>`;
      const range = api.area.querySelector("input");
      const out = api.area.querySelector(".hm-clock span");
      const show = () => { const m = String(range.value).padStart(2, "0"); out.textContent = m; range.setAttribute("aria-valuetext", `8:${m}`); };
      range.addEventListener("input", show);
      api.area.querySelectorAll("[data-d]").forEach((b) => b.addEventListener("click", () => { range.value = +range.value + +b.dataset.d; show(); }));
      api.area.querySelector("[data-go]").addEventListener("click", () => api.done(Math.abs(range.value - 33) <= tol));
      api.focus(range);
    },
  },

  librarian: {
    verb: "stop",
    secs: 0, // it keeps its own clock
    prompt: "It’s 5 PM. Apologise. Go home.",
    play(api) {
      api.area.innerHTML = `
        <p class="hm-clock">4:57 PM</p>
        <p class="hm-note" data-served>Served 0</p>
        <div class="hm-row">
          <button type="button" class="play-btn" data-serve>Serve the next one</button>
          <button type="button" class="play-btn" data-home disabled>Apologise and go home</button>
        </div>`;
      const clock = api.area.querySelector(".hm-clock");
      const served = api.area.querySelector("[data-served]");
      const home = api.area.querySelector("[data-home]");
      let min = 57;
      let n = 0;
      const set = () => {
        clock.textContent = min < 60 ? `4:${min} PM` : `5:0${min - 60} PM`;
        home.disabled = min < 60;
      };
      const tick = () => { min += 1; set(); if (min === 60) api.say("5 PM."); if (min >= 63) api.done(false); };
      if (!api.calm) api.every(1300, tick);
      api.area.querySelector("[data-serve]").addEventListener("click", () => {
        if (min >= 60) return api.done(false); // serving past five is the only way to lose
        n += 1;
        served.textContent = `Served ${n}`;
        if (api.calm) tick();
      });
      home.addEventListener("click", () => api.done(true));
      api.focus(api.area.querySelector("[data-serve]"));
    },
  },

  typewriter: {
    verb: "spot",
    secs: 8,
    prompt: "Find the typewriter.",
    play(api) {
      const faces = shuffle(["serif", "sans", "mono"]);
      api.area.innerHTML = `<div class="hm-stack">${faces.map((f) => `
        <button type="button" class="hm-btn hm-line hm-line--${f}" data-f="${f}" aria-label="${{ serif: "Serif", sans: "Sans serif", mono: "Monospace" }[f]}: Yang bertanda tangan di bawah ini"><span lang="id">Yang bertanda tangan di bawah ini</span></button>`).join("")}</div>`;
      api.area.querySelectorAll("[data-f]").forEach((b) => b.addEventListener("click", () => api.done(b.dataset.f === "mono")));
      api.focus(api.area.querySelector("[data-f]"));
    },
  },

  share: {
    verb: "sort",
    secs: 10,
    prompt: "Everything is shared. Hide what you must.",
    play(api) {
      const items = shuffle(["Breakfast photo", "Run log", "Draft essay", "Bank PIN", "Meeting notes", "Password"]);
      const secret = ["Bank PIN", "Password"];
      api.area.innerHTML = `<div class="hm-grid">${items.map((t) => `
        <button type="button" class="hm-btn hm-chip" aria-pressed="false" data-t="${t}">${t}<small>Shared</small></button>`).join("")}</div>`;
      api.area.querySelectorAll("[data-t]").forEach((b) => b.addEventListener("click", () => {
        const hidden = b.getAttribute("aria-pressed") !== "true";
        b.setAttribute("aria-pressed", String(hidden));
        b.querySelector("small").textContent = hidden ? "Hidden" : "Shared";
        const now = [...api.area.querySelectorAll('[aria-pressed="true"]')].map((x) => x.dataset.t);
        if (secret.every((s) => now.includes(s))) api.done(true);
      }));
      api.focus(api.area.querySelector("[data-t]"));
    },
  },

  keyboards: {
    verb: "hold",
    secs: 14,
    prompt: "71 keyboards. Keep five.",
    play(api) {
      api.area.innerHTML = `
        <p class="hm-big"><span>71</span> <small>kept</small></p>
        <button type="button" class="play-btn hm-hold" data-hold>Hold to let go</button>`;
      const out = api.area.querySelector(".hm-big span");
      const btn = api.area.querySelector("[data-hold]");
      let n = 71;
      let held = false;
      // Fast through the pile, slow near the end, so landing on five is a skill.
      let acc = 0;
      api.every(20, () => {
        if (!held) return;
        acc += 20;
        const step = n > 10 ? 45 : api.calm ? 400 : 320;
        if (acc < step) return;
        acc = 0;
        n -= 1;
        out.textContent = n;
        if (n === 10) api.say("10 left.");
        if (n <= 0) api.done(false);
      });
      api.hold(btn, () => (held = true), () => {
        held = false;
        if (n === 5) api.done(true);
        else if (n < 5) api.done(false);
      });
      api.focus(btn);
    },
  },

  garnisun: {
    verb: "tap",
    secs: 10,
    prompt: "Make a name out of this.",
    play(api) {
      const word = "GARNISUN".split("");
      const drop = new Set([2, 6, 7]); // R, U and the last N: GARNISUN becomes GANIS
      api.area.innerHTML = `<div class="hm-letters">${word.map((ch, i) => `
        <button type="button" class="hm-btn hm-letter" data-i="${i}" aria-label="Drop ${ch}">${ch}</button>`).join("")}</div>`;
      const gone = new Set();
      api.area.querySelectorAll("[data-i]").forEach((b) => b.addEventListener("click", () => {
        const i = +b.dataset.i;
        if (b.getAttribute("aria-disabled") === "true") return;
        if (!drop.has(i)) { b.classList.remove("is-no"); void b.offsetWidth; b.classList.add("is-no"); api.say(`Keep the ${word[i]}.`); return; }
        gone.add(i);
        b.classList.add("is-gone");
        b.setAttribute("aria-disabled", "true");
        b.setAttribute("aria-label", `${word[i]}, dropped`);
        if (gone.size === drop.size) api.done(true);
      }));
      api.focus(api.area.querySelector("[data-i]"));
    },
  },

  cafe: {
    verb: "tap",
    secs: 8,
    open: true,
    prompt: "It’s 7:40. Find a cafe that’s open.",
    play(api) {
      const signs = shuffle(["Opens 8", "Opens 9", "Opens 9", "Opens 10", "Opens 10", "Opens 11"]);
      api.area.innerHTML = `<div class="hm-grid hm-grid--3">${signs.map((s, i) => `
        <button type="button" class="hm-btn hm-door" data-s="${s}" aria-label="Cafe ${i + 1}">Cafe</button>`).join("")}</div>`;
      let left = signs.length;
      api.area.querySelectorAll("[data-s]").forEach((b) => b.addEventListener("click", () => {
        if (b.classList.contains("is-shut")) return;
        b.classList.add("is-shut");
        b.textContent = b.dataset.s;
        b.setAttribute("aria-label", b.dataset.s);
        if (--left === 0) api.later(500, () => api.done(false));
      }));
      api.focus(api.area.querySelector("[data-s]"));
    },
  },

  ages: {
    verb: "pick",
    secs: 7,
    prompt: "Who’s proud of the 20-year-old?",
    play(api) {
      api.area.innerHTML = `<div class="hm-row">${[20, 25, 35].map((a) => `
        <button type="button" class="hm-btn hm-age" data-a="${a}">${a}</button>`).join("")}</div>`;
      api.area.querySelectorAll("[data-a]").forEach((b) => b.addEventListener("click", () => api.done(b.dataset.a === "35")));
      api.focus(api.area.querySelector("[data-a]"));
    },
  },

  doctor: {
    verb: "strike",
    secs: 9,
    open: true,
    prompt: "Rule out the obvious.",
    play(api) {
      api.area.innerHTML = `<div class="hm-stack">${["Knowledge", "Motivation", "Willpower"].map((t) => `
        <button type="button" class="hm-btn hm-line" data-t="${t}">${t}</button>`).join("")}
        <p class="hm-line hm-line--blank">?</p></div>`;
      let left = 3;
      api.area.querySelectorAll("[data-t]").forEach((b) => b.addEventListener("click", () => {
        if (b.classList.contains("is-struck")) return;
        b.classList.add("is-struck");
        b.setAttribute("aria-label", `${b.dataset.t}, ruled out`);
        if (--left === 0) api.later(700, () => api.done(false));
      }));
      api.focus(api.area.querySelector("[data-t]"));
    },
  },

  alarms: {
    verb: "catch",
    secs: 0, // the alarms keep their own time
    prompt: "Wake up. Three alarms.",
    play(api) {
      api.area.innerHTML = `<div class="hm-row">${[1, 2, 3].map((n) => `
        <button type="button" class="hm-btn hm-alarm" data-n="${n}">Alarm ${n}</button>`).join("")}</div>`;
      const btns = [...api.area.querySelectorAll("[data-n]")];
      let ringing = -1;
      let caught = 0;
      const ring = (i) => {
        btns.forEach((b, j) => {
          b.classList.toggle("is-ringing", j === i);
          b.setAttribute("aria-label", `Alarm ${j + 1}${j === i ? ", ringing" : ""}`);
        });
        ringing = i;
        api.focus(btns[i]);
        if (!api.calm) api.later(1500, () => { if (ringing === i) next(); });
      };
      const next = () => (ringing + 1 < btns.length ? ring(ringing + 1) : api.done(caught === btns.length));
      btns.forEach((b, j) => b.addEventListener("click", () => {
        if (j !== ringing) return;
        caught += 1;
        b.classList.add("is-off");
        next();
      }));
      api.later(api.calm ? 0 : 1000, () => ring(0));
    },
  },

  berbeda: {
    verb: "pick",
    secs: 8,
    prompt: "Don’t be better. Be different.",
    play(api) {
      const cups = shuffle([["Rp 25.000", 0], ["Rp 24.000", 0], ["Rp 23.000", 0], ["?", 1]]);
      api.area.innerHTML = `<div class="hm-grid hm-grid--4">${cups.map(([p, odd]) => `
        <button type="button" class="hm-btn hm-cup${odd ? " hm-cup--odd" : ""}" data-odd="${odd}" aria-label="${odd ? "Something else" : `Coffee, ${p}`}">${p}</button>`).join("")}</div>`;
      api.area.querySelectorAll("[data-odd]").forEach((b) => b.addEventListener("click", () => api.done(b.dataset.odd === "1")));
      api.focus(api.area.querySelector("[data-odd]"));
    },
  },

  uninstall: {
    verb: "hold",
    secs: 10,
    open: true,
    prompt: "Uninstall it. Again.",
    play(api) {
      api.area.innerHTML = `
        <button type="button" class="hm-btn hm-app" data-app aria-label="Mobile Legends. Hold to uninstall."><span>ML</span><i></i></button>
        <p class="hm-note">Hold to uninstall</p>`;
      const app = api.area.querySelector("[data-app]");
      const note = api.area.querySelector(".hm-note");
      let times = 0;
      let t0 = 0;
      let wait = 0;
      const gone = () => {
        times += 1;
        app.classList.add("is-gone");
        app.setAttribute("aria-disabled", "true");
        note.textContent = "Uninstalled";
        api.say("Uninstalled.");
        api.later(900, () => {
          if (times >= 2) return api.done(false);
          app.classList.remove("is-gone", "is-holding");
          app.removeAttribute("aria-disabled");
          note.textContent = "It’s back. Hold to uninstall";
          api.say("It’s back.");
        });
      };
      api.hold(app, () => {
        t0 = performance.now();
        app.classList.add("is-holding");
        wait = api.later(1200, gone);
      }, () => {
        if (performance.now() - t0 < 1200) { api.cancel(wait); app.classList.remove("is-holding"); }
      });
      api.focus(app);
    },
  },
};

// ---------- the deck ----------
class Hmm {
  constructor(button) {
    this.button = button;
    const data = JSON.parse(document.getElementById("thoughts").textContent);
    this.thoughts = Object.fromEntries(data.filter((t) => ROUNDS[t.id]).map((t) => [t.id, t]));
    this.met = read();
    this.timers = new Map();
    this.build();
    this.bind();
    this.open();
    this.title();
  }

  build() {
    const el = document.createElement("div");
    el.className = "bl hm";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Hmm. Two minutes inside a head that asks why");
    el.innerHTML = `
      <div class="bl__bar">
        <p class="bl__where">Hmm.</p>
        <div class="bl__btns">
          <button type="button" data-bl="pause" hidden>Pause</button>
          <button type="button" data-bl="skip" hidden>Skip this one</button>
          <button type="button" data-bl="quit">Quit</button>
        </div>
        <div class="hm__time" aria-hidden="true" hidden><i></i></div>
      </div>
      <div class="bl__stage">
        <section class="hm__round" hidden>
          <p class="bl__kicker"></p>
          <h2 class="hm__prompt"></h2>
          <div class="hm__area"></div>
        </section>
        <div class="bl__card" hidden></div>
      </div>
      <p class="visually-hidden" aria-live="polite"></p>`;
    document.body.append(el);
    this.el = el;
    this.where = el.querySelector(".bl__where");
    this.time = el.querySelector(".hm__time");
    this.bar = this.time.querySelector("i");
    this.roundEl = el.querySelector(".hm__round");
    this.kicker = this.roundEl.querySelector(".bl__kicker");
    this.prompt = this.roundEl.querySelector(".hm__prompt");
    this.area = this.roundEl.querySelector(".hm__area");
    this.card = el.querySelector(".bl__card");
    this.live = el.querySelector("[aria-live]");
    this.pauseBtn = el.querySelector('[data-bl="pause"]');
    this.skipBtn = el.querySelector('[data-bl="skip"]');
  }

  bind() {
    const on = (t, e, f, o) => { t.addEventListener(e, f, o); (this.offs ||= []).push(() => t.removeEventListener(e, f, o)); };
    on(this.el, "click", (e) => {
      const b = e.target.closest("[data-bl]");
      if (!b) return;
      const a = b.dataset.bl;
      if (["next", "again", "page"].includes(a) && performance.now() < this.armed) return;
      if (a === "pause") this.paused ? this.resume() : this.pause();
      else if (a === "skip") this.finish(false, true);
      else if (a === "quit") this.close();
      else if (a === "go" || a === "again") this.deal();
      else if (a === "next") this.next();
      else if (a === "page") this.close(document.querySelector(".continue"));
    });
    on(document, "keydown", (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "Escape") { e.preventDefault(); this.close(); }
      else if (e.key === "Tab") this.trap(e);
      else if ((e.key === "p" || e.key === "P") && this.state === "round") this.paused ? this.resume() : this.pause();
    });
    on(document, "visibilitychange", () => document.hidden && this.pause());
  }

  trap(e) {
    const f = [...this.el.querySelectorAll("button:not([disabled]), a[href], input")].filter((n) => !n.closest("[hidden], [inert]"));
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
    if (still.matches) return;
    const r = this.button.getBoundingClientRect();
    this.el.animate(
      [{ clipPath: `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px)` }, { clipPath: "inset(0px 0px 0px 0px)" }],
      { duration: 320, easing: "cubic-bezier(.2,.7,.2,1)" },
    );
  }

  close(target) {
    this.stopRound();
    this.offs.forEach((off) => off());
    const done = () => {
      this.el.remove();
      this.inerted.forEach((n) => (n.inert = false));
      html.style.overflow = "";
      html.style.paddingRight = "";
      game = null;
      if (target) {
        target.tabIndex = -1;
        target.scrollIntoView({ block: "center" });
        target.focus({ preventScroll: true });
      } else {
        scrollTo(0, this.scrollY);
        this.button.focus({ preventScroll: true });
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

  showCard(inner) {
    this.armed = performance.now() + ARM;
    this.roundEl.hidden = true;
    this.card.innerHTML = `<div class="bl__panel">${inner}</div>`;
    this.card.hidden = false;
    this.card.querySelector("button")?.focus({ preventScroll: true });
  }

  chrome(playing) {
    this.pauseBtn.hidden = this.skipBtn.hidden = !playing;
    this.time.hidden = !playing || still.matches || !this.total;
  }

  title() {
    this.state = "title";
    this.chrome(false);
    const total = Object.keys(this.thoughts).length;
    this.showCard(`
      <p class="bl__kicker">${PER_PLAY} of ${total} thoughts</p>
      <h2 class="bl__title is-ink">Hmm.</h2>
      <p class="bl__text">Two minutes inside a head that asks why.</p>
      <p class="bl__note">Tap, hold or pick. One thing at a time. Esc to quit.${still.matches ? "<br>Calm mode is on. Same thoughts, no timer." : ""}</p>
      <div class="bl__actions"><button type="button" class="play-btn" data-bl="go">Press start</button></div>`);
  }

  // Eight thoughts: 8:33 first, uninstall last, six from the rest with no
  // verb twice in a row and at most one in Bahasa.
  deal() {
    const ids = Object.keys(this.thoughts).filter((id) => id !== FIRST && id !== LAST);
    let mid = [];
    for (let tries = 0; tries < 60; tries++) {
      // Thoughts you haven't met yet come first, so "Met n of 12" can fill up.
      const pool = shuffle(ids.slice()).sort((a, b) => this.met.has(a) - this.met.has(b));
      mid = shuffle(pool.slice(0, PER_PLAY - 2 + (tries > 30 ? 4 : 1))).slice(0, PER_PLAY - 2);
      if (this.valid([FIRST, ...mid, LAST])) break;
      mid = null;
    }
    if (!mid) mid = SAFE.filter((id) => this.thoughts[id]);
    this.run = [FIRST, ...mid, LAST].filter((id) => this.thoughts[id]);
    this.results = [];
    this.i = -1;
    this.next();
  }

  valid(run) {
    return run.every((id, i) => i === 0 || ROUNDS[id].verb !== ROUNDS[run[i - 1]].verb)
      && run.filter((id) => this.thoughts[id].lang === "id").length <= 1;
  }

  next() {
    this.i += 1;
    if (this.i >= this.run.length) return this.end();
    const id = this.run[this.i];
    const R = ROUNDS[id];
    const T = this.thoughts[id];
    this.state = "round";
    this.paused = false;
    this.settled = false;
    this.card.hidden = true;
    this.card.innerHTML = "";
    this.roundEl.hidden = false;
    this.roundEl.inert = false;
    this.left = still.matches ? 0 : R.secs;
    this.total = this.left;
    this.chrome(true);
    this.where.textContent = `Hmm. ${this.i + 1}/${this.run.length}`;
    this.kicker.innerHTML = `${esc(T.kind)} · <span class="hm-when">${esc(T.when)}</span>`;
    if (T.lang) this.kicker.lang = T.lang; else this.kicker.removeAttribute("lang");
    this.holds = [];
    this.prompt.textContent = R.prompt;
    this.area.innerHTML = "";
    this.say(`Thought ${this.i + 1} of ${this.run.length}. ${R.prompt}`);
    this.bar.style.transform = "scaleX(1)";
    if (this.total) this.every(100, () => {
      this.left -= 0.1;
      this.bar.style.transform = `scaleX(${Math.max(0, this.left / this.total)})`;
      if (this.left <= 0) this.finish(false);
    });
    this.area.inert = true;
    setTimeout(() => (this.area.inert = false), 250);
    R.play(this.api());
  }

  api() {
    const self = this;
    return {
      area: this.area,
      index: this.i,
      calm: still.matches,
      done: (won) => self.finish(won),
      say: (m) => self.say(m),
      focus: (n) => setTimeout(() => n && !self.settled && !self.paused && n.focus({ preventScroll: true }), self.area.inert ? 260 : 0),
      every: (ms, fn) => self.every(ms, fn),
      later: (ms, fn) => self.later(ms, fn),
      cancel: (id) => self.cancel(id),
      hold: (btn, down, up) => {
        let on = false;
        const start = (e) => {
          if (on || self.paused || self.settled || btn.getAttribute("aria-disabled") === "true") return;
          on = true; e.preventDefault(); down();
        };
        const stop = () => { if (!on) return; on = false; if (!self.settled) up(); };
        self.holds.push(stop); // a pause or blur mid-hold lets go
        btn.addEventListener("pointerdown", (e) => { btn.setPointerCapture?.(e.pointerId); start(e); });
        btn.addEventListener("pointerup", stop);
        btn.addEventListener("pointercancel", stop);
        btn.addEventListener("lostpointercapture", stop);
        btn.addEventListener("blur", stop);
        btn.addEventListener("keydown", (e) => {
          if (e.key !== " " && e.key !== "Enter") return;
          e.preventDefault();
          if (!e.repeat) start(e);
        });
        btn.addEventListener("keyup", (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); stop(); } });
        btn.addEventListener("contextmenu", (e) => e.preventDefault());
      },
    };
  }

  every(ms, fn) {
    const t = setInterval(() => { if (!this.paused) fn(); }, ms);
    this.timers.set(t, true);
    return t;
  }

  // A pausable timeout: it waits out a pause instead of firing behind it.
  later(ms, fn) {
    let left = ms;
    const t = setInterval(() => {
      if (this.paused) return;
      left -= 50;
      if (left <= 0) { this.cancel(t); fn(); }
    }, 50);
    this.timers.set(t, true);
    return t;
  }

  cancel(t) { clearInterval(t); this.timers.delete(t); }

  stopRound() {
    this.timers.forEach((_, t) => clearInterval(t));
    this.timers.clear();
  }

  finish(won, skipped) {
    if (this.state !== "round" || this.settled) return;
    this.settled = true;
    this.stopRound();
    if (this.paused) { this.paused = false; this.pauseBtn.textContent = "Pause"; this.roundEl.classList.remove("is-paused"); }
    const id = this.run[this.i];
    const T = this.thoughts[id];
    const filed = won && !ROUNDS[id].open;
    this.results.push({ id, filed, skipped });
    if (!skipped) { this.met.add(id); write(this.met); }
    this.state = "card";
    this.chrome(false);
    const lang = T.lang ? ` lang="${T.lang}"` : "";
    const last = this.i === this.run.length - 1;
    const stamp = skipped ? "Skipped" : filed ? "Filed" : "Still open";
    this.showCard(`
      <p class="bl__kicker"${lang}>${esc(T.kind)} · <span class="hm-when">${esc(T.when)}</span></p>
      <p class="hm-stamp${filed ? "" : " hm-stamp--open"}">${stamp}</p>
      <blockquote class="hm-quote"${lang}><p>${esc(T.text)}</p></blockquote>
      <div class="bl__actions">
        <button type="button" class="play-btn" data-bl="next">${last ? "That was eight." : "Next thought."}</button>
        <a class="hm-read" href="${esc(T.href)}" target="_blank" rel="noopener">Read it</a>
      </div>`);
    this.say(`${stamp}. ${T.text}`);
  }

  end() {
    this.state = "end";
    this.chrome(false);
    this.where.textContent = "Hmm.";
    const count = { friction: 0, myself: 0, smaller: 0 };
    this.results.forEach(({ id }) => (count[this.thoughts[id].pattern] += 1));
    const most = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
    const total = Object.keys(this.thoughts).length;
    const list = this.results.map(({ id, filed, skipped }) => {
      const T = this.thoughts[id];
      return `<li${T.lang ? ` lang="${T.lang}"` : ""}><a href="${esc(T.href)}" target="_blank" rel="noopener">${esc(T.text)}</a> <span class="hm-mini${filed ? "" : " hm-mini--open"}" lang="en">${skipped ? "Skipped" : filed ? "Filed" : "Still open"}</span></li>`;
    }).join("");
    this.showCard(`
      <p class="bl__kicker">Mostly: ${most} · Met ${this.met.size} of ${total}</p>
      <h2 class="bl__title is-ink">That was eight.</h2>
      <p class="bl__text">The rest are on the page. Some of them I still can&rsquo;t answer.</p>
      <ol class="hm-list">${list}</ol>
      <div class="bl__actions">
        <button type="button" class="play-btn" data-bl="again">Play again</button>
        <button type="button" class="play-btn" data-bl="page">Back to the page</button>
        <a class="hm-read" href="/questions-and-ideas/">Read the questions</a>
        <a class="hm-read" href="/newsletter/">Get the newsletter</a>
      </div>`);
    this.say(`That was eight. Mostly ${most}.`);
  }

  pause() {
    if (this.state !== "round" || this.paused) return;
    this.lastFocus = this.area.contains(document.activeElement) ? document.activeElement : null;
    (this.holds || []).forEach((stop) => stop());
    this.pauseBtn.focus({ preventScroll: true });
    this.paused = true;
    this.pauseBtn.textContent = "Resume";
    this.roundEl.inert = true;
    this.roundEl.classList.add("is-paused");
    this.say("Paused");
  }

  resume() {
    if (!this.paused) return;
    this.paused = false;
    this.pauseBtn.textContent = "Pause";
    this.roundEl.inert = false;
    this.roundEl.classList.remove("is-paused");
    (this.lastFocus && this.lastFocus.isConnected ? this.lastFocus : this.area.querySelector("button:not([disabled]), input"))?.focus({ preventScroll: true });
  }
}

function read() {
  try { return new Set(JSON.parse(localStorage.getItem("hmm-met") || "[]")); } catch { return new Set(); }
}

function write(set) {
  try { localStorage.setItem("hmm-met", JSON.stringify([...set])); } catch { /* private window */ }
}
