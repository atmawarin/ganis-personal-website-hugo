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
    caption.innerHTML = `Set in <em>${f.n}</em>, after <strong>${f.d}</strong>, ${f.y}. <span class="titlepage__hint">${i + 1} of ${faces.length - 1}.</span>`;
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
    if (count) count.textContent = `${shown} of ${rows.length}`;
  };
  const fromHash = { "#english": "en", "#bahasa": "id" }[location.hash] || "all";
  apply(fromHash);
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
