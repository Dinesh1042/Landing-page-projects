const navEl = document.getElementById("nav");
const menuBtnEl = document.getElementById("menu-btn");
const closeBtnEl = document.getElementById("close-btn");
const menuEl = document.querySelectorAll(".menu__container li a");
const spyEl = document.querySelector(".spy");
const menuContainerEl = document.getElementById("menu__container");
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("usernameEl");
const useremailEl = document.getElementById("useremailEl");

menuBtnEl.addEventListener("click", () => navEl.classList.toggle("nav-active"));

closeBtnEl.addEventListener("click", () =>
  navEl.classList.remove("nav-active")
);

formEl.addEventListener("submit", verifyUserData);

menuEl.forEach((menu) => {
  menu.addEventListener("mouseenter", activateSpy);
});

menuContainerEl.addEventListener("mouseout", deactivateSpy);

function activateSpy() {
  const currentEl = this.getBoundingClientRect();
  const parentEl = this.parentElement.parentElement.parentElement.getBoundingClientRect();
  const chords = {
    left: currentEl.left - parentEl.left,
    width: currentEl.width,
  };

  spyEl.style.visibility = `visible`;
  spyEl.style.left = `${chords.left}px`;
  spyEl.style.width = `${chords.width - chords.width / 3}px`;
}
function deactivateSpy() {
  spyEl.style.visibility = `hidden`;
}

function verifyUserData(e) {
  e.preventDefault();

  verifyMail();
  verifyUserName();
}

function verifyUserName() {
  const inputEl = usernameEl.querySelector("input");
  const inputValue = inputEl.value.trim();
  inputValue
    ? usernameEl.classList.remove("error")
    : usernameEl.classList.add("error");
}

function verifyMail() {
  const inputEl = useremailEl.querySelector("input");
  const inputValue = inputEl.value.trim();
  if (inputValue) {
    const isValid = emailValidation(inputValue);
    isValid
      ? useremailEl.classList.remove("error")
      : useremailEl.classList.add("error");
  } else useremailEl.classList.add("error");
}

function emailValidation(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
