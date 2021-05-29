const nav__wrapperEl = document.getElementById("nav__wrap");
const menu_btnEl = document.getElementById("menu__btn");

menu_btnEl.addEventListener("click", () =>
  nav__wrapperEl.classList.toggle("nav-active")
);
