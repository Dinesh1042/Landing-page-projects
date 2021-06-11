const headerNavEl = document.getElementById("header-nav");
const menuEl = document.getElementById("menu");

menuEl.addEventListener("click", () =>
  headerNavEl.classList.toggle("nav-active")
);

new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  pagination: false,
  breakpoints: {
    750: {
      perPage: 1,
    },
    930: {
      perPage: 2,
    },
  },
}).mount();
