// Three small things, nothing else: the name that resets itself in another
// face, the language filter on the essay index, and the about-page game.

const setter = document.querySelector(".namesetter");
if (setter) {
  const faces = JSON.parse(setter.dataset.faces || "[]");
  const caption = document.getElementById("namesetter-caption");
  // shuffle so returning visitors don't always meet the same face first,
  // then end the cycle back where we started
  for (let j = faces.length - 1; j > 0; j--) {
    const k = Math.floor(Math.random() * (j + 1));
    [faces[j], faces[k]] = [faces[k], faces[j]];
  }
  faces.push({ f: "", n: "Fraunces", d: "Undercase Type", y: 2020, home: true });
  let i = -1;

  const fit = () => {
    setter.style.fontSize = "";
    const room = setter.parentElement.clientWidth;
    if (setter.scrollWidth > room) {
      const now = parseFloat(getComputedStyle(setter).fontSize);
      setter.style.fontSize = Math.floor((now * room) / setter.scrollWidth) + "px";
    }
  };

  setter.addEventListener("click", () => {
    i = (i + 1) % faces.length;
    const f = faces[i];
    if (f.home) {
      setter.removeAttribute("style");
      caption.innerHTML = `Set in <em>Fraunces</em>, Undercase Type, 2020. <span class="titlepage__hint">Back where we started. Press again for another round.</span>`;
      return;
    }
    setter.style.fontFamily = f.f;
    setter.style.fontWeight = f.w || 400;
    setter.style.fontStyle = f.i ? "italic" : "normal";
    setter.style.letterSpacing = "0";
    setter.style.fontVariationSettings = "normal";
    fit();
    caption.innerHTML = `Set in <em>${f.n}</em>, after <strong>${f.d.replace(/^The /, "the ")}</strong>, ${f.y}. <span class="titlepage__hint">${i + 1} of ${faces.length - 1}.</span>`;
  });
  // fonts arrive late on slow connections; re-fit when they do
  if (document.fonts) document.fonts.addEventListener("loadingdone", () => i >= 0 && !faces[i].home && fit());
  window.addEventListener("resize", () => i >= 0 && !faces[i].home && fit());
}

const filters = document.querySelectorAll(".filters button[data-filter]");
if (filters.length) {
  const rows = document.querySelectorAll(".specimen-index .specimen-row");
  const count = document.querySelector(".filters__count");
  const apply = (want) => {
    let shown = 0;
    filters.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === want)));
    rows.forEach((row) => {
      row.hidden = want !== "all" && row.dataset.lang !== want;
      if (!row.hidden) shown++;
    });
    if (count) count.textContent = `${shown} of ${rows.length} essays`;
  };
  const fromHash = () => ({ "#english": "en", "#bahasa": "id" })[location.hash] || "all";
  apply(fromHash());
  window.addEventListener("hashchange", () => apply(fromHash()));
  filters.forEach((btn) =>
    btn.addEventListener("click", () => {
      const want = btn.dataset.filter;
      apply(want);
      history.replaceState(null, "", want === "all" ? location.pathname : want === "en" ? "#english" : "#bahasa");
    })
  );
}

const ttol = document.querySelector(".ttol");
if (ttol) {
  const verdict = ttol.querySelector(".ttol__verdict");
  const opts = ttol.querySelectorAll(".ttol__opts button");
  opts.forEach((b) => {
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", () => {
      opts.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      ttol.setAttribute("data-done", "");
      verdict.textContent = b.dataset.verdict;
    });
  });
}

// The shelf: a library lending card, and the visitor holds the stamp.
// Everything is already in the HTML; this only lands the red ink. Nothing
// moves on load or scroll, only when someone touches, drags or presses a key.
const shelf = document.querySelector(".shelf-cards");
if (shelf) {
  const root = document.documentElement;
  root.classList.add("is-enhanced");
  document.querySelectorAll(".shelf-hint, .shelf-tools, .shelf-subjects, .card__stamp").forEach((el) => (el.hidden = false));

  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const canHover = matchMedia("(hover: hover)");
  const rows = [...shelf.querySelectorAll(".row")];
  const cards = [...shelf.querySelectorAll(".card")];
  const tally = document.querySelector(".shelf-tally");
  const favBtn = document.querySelector('[data-act="favs"]');
  const pickBtn = document.querySelector('[data-act="pick"]');
  const count = document.querySelector(".shelf-subjects .filters__count");

  // the same small tilt for the same book on every visit
  const seed = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
  const visible = () => rows.filter((r) => !r.hidden && !r.closest(".card").hidden);
  const inView = (el) => { const b = el.getBoundingClientRect(); return b.bottom > 0 && b.top < innerHeight; };

  rows.forEach((row) => {
    const s = seed(row.id);
    row.style.setProperty("--tilt", ((s % 41) - 20) / 10 + "deg");
    const ink = row.querySelector(".row__ink");
    ink.dataset.stamp = row.dataset.stamp;
    // the title becomes the row's one control; the stamp zone is a second, separate target
    const cite = row.querySelector(".row__title cite");
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "row__toggle";
    toggle.tabIndex = -1;
    toggle.setAttribute("aria-expanded", "false");
    cite.replaceWith(toggle);
    toggle.append(cite);
    const strike = document.createElement("button");
    strike.type = "button";
    strike.className = "row__strike";
    strike.tabIndex = -1;
    strike.setAttribute("aria-label", `Stamp ${cite.textContent} again`);
    row.querySelector(".row__date").append(strike);
  });
  const toggles = () => visible().map((r) => r.querySelector(".row__toggle"));
  const rove = (t) => { rows.forEach((r) => (r.querySelector(".row__toggle").tabIndex = -1)); if (t) t.tabIndex = 0; };
  rove(toggles()[0]);

  // one impression of the stamp. `ink` runs from 1 down to .7 as the pad dries.
  const press = (row, { animate = true, ink = 1, text } = {}) => {
    const n = +(row.dataset.strikes || 0);
    if (n >= 6) return;
    const s = document.createElement("span");
    s.className = "stamp" + (n === 5 ? " stamp--enough" : "");
    s.textContent = n === 5 ? "Enough." : text || row.dataset.stamp;
    const r = seed(row.id + n);
    s.style.setProperty("--tilt", n ? ((r % 61) - 30) / 10 + "deg" : getComputedStyle(row).getPropertyValue("--tilt"));
    if (n) { s.style.setProperty("--sx", (r % 7) - 3 + "px"); s.style.setProperty("--sy", ((r >> 3) % 7) - 3 + "px"); }
    s.style.setProperty("--ink-left", String(Math.max(0.7, ink - n * 0.06)));
    if (!animate || still.matches) s.style.animation = "none";
    row.querySelector(".row__ink").append(s);
    row.dataset.strikes = n + 1;
    row.classList.add("is-stamped");
    if (navigator.vibrate && n && animate) navigator.vibrate(8);
  };
  const lift = (row) => {
    row.querySelectorAll(".stamp").forEach((s) => s.remove());
    delete row.dataset.strikes;
    delete row.dataset.rolled;
    row.classList.remove("is-stamped");
  };

  const open = (row, on, { animate = true } = {}) => {
    if (on) rows.forEach((r) => r !== row && r.classList.contains("is-open") && open(r, false));
    row.classList.toggle("is-open", on);
    if (!on) row.classList.remove("is-preview");
    row.querySelector(".row__toggle").setAttribute("aria-expanded", String(on));
    if (on && !row.classList.contains("is-stamped")) press(row, { animate });
  };

  // hover and focus only preview: stamp and cover, no layout change
  rows.forEach((row) => {
    row.addEventListener("pointerenter", (e) => e.pointerType === "mouse" && canHover.matches && row.classList.add("is-preview"));
    row.addEventListener("pointerleave", () => row.classList.remove("is-preview"));
    row.addEventListener("focusin", (e) => e.target.matches(":focus-visible") && row.classList.add("is-preview"));
    row.addEventListener("focusout", () => row.classList.remove("is-preview"));
    row.addEventListener("click", (e) => {
      if (e.target.closest(".row__strike")) { press(row); return; }
      if (e.target.closest("a") || getSelection().toString()) return;
      open(row, !row.classList.contains("is-open"));
      rove(row.querySelector(".row__toggle"));
    });
  });

  // arrow keys walk the card; right steps onto the stamp zone
  shelf.addEventListener("keydown", (e) => {
    const t = e.target.closest(".row__toggle, .row__strike");
    if (!t) return;
    const list = toggles();
    const i = list.indexOf(t.closest(".row").querySelector(".row__toggle"));
    const go = (j) => { e.preventDefault(); const n = list[Math.max(0, Math.min(list.length - 1, j))]; rove(n); n.focus(); };
    if (e.key === "ArrowDown") go(i + 1);
    else if (e.key === "ArrowUp") go(i - 1);
    else if (e.key === "Home") go(0);
    else if (e.key === "End") go(list.length - 1);
    else if (e.key === "ArrowRight" && t.classList.contains("row__toggle")) { e.preventDefault(); t.closest(".row").querySelector(".row__strike").focus(); }
    else if (e.key === "ArrowLeft" && t.classList.contains("row__strike")) { e.preventDefault(); t.closest(".row").querySelector(".row__toggle").focus(); }
  });

  // roll the stamp: drag down a year and every row you pass gets inked
  const counter = (card) => {
    const c = card.querySelector(".card__count");
    if (!c) return;
    const all = [...card.querySelectorAll(".row")].filter((r) => !r.hidden);
    const done = all.filter((r) => r.classList.contains("is-stamped")).length;
    c.textContent = done ? `${done} / ${all.length}` : "";
  };
  cards.forEach((card) => {
    const handle = card.querySelector(".card__roller");
    const list = [...card.querySelectorAll(".row")];
    if (!list.length) return;
    let rolling = false, y = 0, raf = 0;
    const roll = () => {
      let k = 0;
      list.filter((r) => !r.hidden).forEach((row) => {
        const b = row.getBoundingClientRect();
        if (y > b.top + b.height / 2) {
          if (!row.classList.contains("is-stamped")) { row.dataset.rolled = "1"; press(row, { ink: 1 - k * 0.06 }); }
          k++;
        } else if (row.dataset.rolled) lift(row);
      });
      counter(card);
    };
    const edge = () => {
      if (!rolling) return;
      if (y > innerHeight - 64) { scrollBy(0, still.matches ? 24 : 10); roll(); }
      else if (y < 64) { scrollBy(0, still.matches ? -24 : -10); roll(); }
      raf = requestAnimationFrame(edge);
    };
    handle.addEventListener("pointerdown", (e) => {
      if (e.button) return;
      rolling = true; y = e.clientY;
      handle.setPointerCapture(e.pointerId);
      raf = requestAnimationFrame(edge);
    });
    handle.addEventListener("pointermove", (e) => { if (rolling) { y = e.clientY; roll(); } });
    const stop = () => { rolling = false; cancelAnimationFrame(raf); };
    handle.addEventListener("pointerup", stop);
    handle.addEventListener("pointercancel", stop);
  });

  // stamp the year: a drumroll down the card, the pad drying as it goes
  const stampYear = (card) => {
    const list = [...card.querySelectorAll(".row")].filter((r) => !r.hidden);
    if (!list.length) return;
    if (list.every((r) => r.classList.contains("is-stamped"))) { list.forEach(lift); counter(card); return; }
    let animated = 0;
    list.forEach((row, k) => {
      if (row.classList.contains("is-stamped")) return;
      const ink = 1 - k * 0.06;
      if (inView(row) && animated < 12 && !still.matches) {
        const d = animated++ * 30;
        setTimeout(() => { press(row, { ink }); counter(card); }, d);
      } else press(row, { ink, animate: false });
    });
    counter(card);
  };
  cards.forEach((card) => card.querySelector(".card__stamp")?.addEventListener("click", () => stampYear(card)));
  const currentCard = () => {
    const mid = innerHeight / 3;
    return cards.filter((c) => !c.hidden && c.querySelector(".row")).find((c) => c.getBoundingClientRect().bottom > mid);
  };

  // favourites: the red pen down the margin, then the tally stamp
  let tallyTimer = 0;
  const favs = (on) => {
    document.body.classList.toggle("favs-on", on);
    favBtn.setAttribute("aria-pressed", String(on));
    clearTimeout(tallyTimer);
    tally.classList.remove("is-on");
    tally.textContent = "";
    if (on) tallyTimer = setTimeout(() => {
      tally.classList.add("is-on");
      const [a, b] = tally.dataset.tally.replace("★ ", "").split(" / ");
      tally.innerHTML = `<span class="visually-hidden">${a} of ${b} books are favourites</span>`;
    }, still.matches ? 0 : 450);
  };
  favBtn.addEventListener("click", () => favs(!document.body.classList.contains("favs-on")));

  // subjects: a plain in-page filter, no new URLs
  const subjects = [...document.querySelectorAll(".shelf-subjects button")];
  const filter = (cat) => {
    subjects.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.cat === cat)));
    rows.forEach((r) => (r.hidden = !!cat && r.dataset.cat !== cat));
    cards.forEach((c) => {
      const list = c.querySelectorAll(".row");
      c.hidden = !!cat && (!list.length || [...list].every((r) => r.hidden));
      counter(c);
    });
    document.querySelectorAll(".shelf-rail__year").forEach((a) => {
      const off = !!cat && document.querySelector(a.getAttribute("href")).hidden;
      if (off) { a.setAttribute("aria-disabled", "true"); a.tabIndex = -1; }
      else { a.removeAttribute("aria-disabled"); a.removeAttribute("tabindex"); }
    });
    const shown = rows.filter((r) => !r.hidden).length;
    count.textContent = cat ? `${shown} of ${rows.length} books` : "";
    rove(toggles()[0]);
  };
  subjects.forEach((b) => b.addEventListener("click", () => filter(b.dataset.cat)));

  // stamp one for me: a random favourite, never the same one twice running
  let last = null;
  const pick = () => {
    let pool = visible().filter((r) => r.dataset.favs !== "0" && r !== last);
    if (!pool.length) { filter(""); pool = rows.filter((r) => r.dataset.favs !== "0" && r !== last); }
    const row = pool[Math.floor(Math.random() * pool.length)];
    last = row;
    rows.forEach((r) => r.classList.contains("is-open") && open(r, false));
    history.replaceState(null, "", "#" + row.id);
    row.scrollIntoView({ block: "center", behavior: still.matches ? "auto" : "smooth" });
    const land = () => { open(row, true); rove(row.querySelector(".row__toggle")); row.querySelector(".row__toggle").focus({ preventScroll: true }); };
    if (still.matches) land();
    else {
      let done = false;
      const once = () => { if (!done) { done = true; setTimeout(land, 200); } };
      addEventListener("scrollend", once, { once: true });
      setTimeout(once, 900);
    }
    pickBtn.textContent = "Stamp another ";
    pickBtn.insertAdjacentHTML("beforeend", "<kbd>N</kbd>");
  };
  pickBtn.addEventListener("click", pick);

  // arriving on /reading/#slug (a home-page spine, a shared pick): stamped and open, no motion
  const arrive = () => {
    const row = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!row || !row.classList.contains("row")) return;
    if (row.hidden) filter("");
    open(row, true, { animate: false });
    rove(row.querySelector(".row__toggle"));
    row.scrollIntoView({ block: "center" });
    row.querySelector(".row__toggle").focus({ preventScroll: true });
  };
  arrive();
  addEventListener("hashchange", arrive);

  // single keys, only bare and never while typing
  document.addEventListener("keydown", (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.isComposing) return;
    if (e.target.closest("input, textarea, select, [contenteditable]")) return;
    const k = e.key.toLowerCase();
    if (k === "f") favs(!document.body.classList.contains("favs-on"));
    else if (k === "n") pick();
    else if (k === "s") { const c = currentCard(); if (c) stampYear(c); }
    else if (e.key === "Escape") {
      const o = rows.find((r) => r.classList.contains("is-open"));
      if (o) { open(o, false); o.querySelector(".row__toggle").focus(); return; }
      favs(false);
      rows.forEach(lift);
      cards.forEach(counter);
    } else return;
  });
}

// The about page: Press start loads Baseline, the runner, only when asked.
// Nothing about the game is downloaded until someone hovers or presses.
const play = document.querySelector('[data-play="start"]');
if (play) {
  play.closest(".play-start").hidden = false;
  let warm = null;
  const preload = () => (warm = warm || import(play.dataset.src).catch((e) => { warm = null; throw e; }));
  ["pointerenter", "focus", "touchstart"].forEach((e) => play.addEventListener(e, () => preload().catch(() => {}), { once: true, passive: true }));
  play.addEventListener("click", async () => {
    play.setAttribute("aria-busy", "true");
    try {
      const game = await preload();
      await game.start(play);
    } catch {
      // The game didn't load. The page is all still here, so the button goes.
      play.closest(".play-start").hidden = true;
    } finally {
      play.removeAttribute("aria-busy");
    }
  });
}
