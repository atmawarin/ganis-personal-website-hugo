// Two small things, nothing else: the name that resets itself in another
// face, and the language filter on the essay index.

const setter = document.querySelector(".namesetter");
if (setter) {
  const faces = JSON.parse(setter.dataset.faces || "[]");
  const caption = document.getElementById("namesetter-caption");
  let i = -1;
  setter.addEventListener("click", () => {
    if (!faces.length) return;
    i = (i + 1) % faces.length;
    const f = faces[i];
    setter.style.fontFamily = f.f;
    setter.style.fontVariationSettings = "normal";
    caption.innerHTML = `Set after <strong>${f.d}</strong>, ${f.y}. <span class="titlepage__hint">${i + 1} of ${faces.length}. Again?</span>`;
  });
  // shuffle so returning visitors don't always meet Gutenberg first
  for (let j = faces.length - 1; j > 0; j--) {
    const k = Math.floor(Math.random() * (j + 1));
    [faces[j], faces[k]] = [faces[k], faces[j]];
  }
}

const filters = document.querySelectorAll(".filters button[data-filter]");
filters.forEach((btn) =>
  btn.addEventListener("click", () => {
    const want = btn.dataset.filter;
    filters.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    document.querySelectorAll(".specimen-index .specimen-row").forEach((row) => {
      row.hidden = want !== "all" && row.dataset.lang !== want;
    });
  })
);

const ttol = document.querySelector(".ttol");
if (ttol) {
  const verdict = ttol.querySelector(".ttol__verdict");
  ttol.querySelectorAll(".ttol__opts button").forEach((b) =>
    b.addEventListener("click", () => {
      ttol.querySelectorAll(".ttol__opts button").forEach((x) => x.removeAttribute("data-picked"));
      b.setAttribute("data-picked", "");
      verdict.textContent = b.dataset.verdict;
    })
  );
}
