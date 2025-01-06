(() => {
  // <stdin>
  !function(o, c) {
    var n = c.documentElement, t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch");
  }(window, document);
  AOS.init();
  var navButton = document.getElementById("nav-button");
  var nav = document.getElementById("navigation");
  navButton.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  function openMenu() {
    nav.classList.add("open");
  }
  function closeMenu() {
    nav.classList.remove("open");
  }
})();
