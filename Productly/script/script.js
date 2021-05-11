const navContainerEl = document.getElementById("nav__container");
const hamburgarEl = document.getElementById("hamburgar");
const formEl = document.getElementById("form");

hamburgarEl.addEventListener("click", handleNav);

function handleNav() {
  navContainerEl.classList.toggle("nav-active");
}

formEl.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  const inputEl = this.querySelector("input");
  const inputValue = inputEl.value.trim();
  if (inputValue) {
    const isValidMail = emailValidation(inputValue);
    if (isValidMail) this.classList.remove("error");
    else this.classList.add("error");
  } else this.classList.add("error");
}

function emailValidation(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

window.addEventListener("scroll", () =>
  window.scrollY > window.innerWidth
    ? navContainerEl.classList.remove("nav-active")
    : null
);

window.addEventListener("resize", (e) =>
  window.innerWidth > 900 ? navContainerEl.classList.remove("nav-active") : null
);
