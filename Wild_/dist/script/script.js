const headerEl = document.getElementById("header");
const hamburgarEL = document.getElementById("hamburgar_menu");

hamburgarEL.addEventListener("click", () =>
  headerEl.classList.toggle("nav-active")
);
