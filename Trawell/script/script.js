const headerEl = document.getElementById("header");
const hamburgarEl = document.getElementById("hamburgar");

hamburgarEl.addEventListener("click", () =>
  headerEl.classList.toggle("nav-active")
);
