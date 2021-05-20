const navEl = document.getElementById("nav");
const hamburgarEl = document.getElementById("hamburgar");

hamburgarEl.addEventListener("click", () =>
  navEl.classList.toggle("nav-active")
);

window.addEventListener("scroll", (e) =>
  window.scrollY > window.innerHeight
    ? navEl.classList.remove("nav-active")
    : false
);

window.addEventListener("click", (e: any) =>
  e.target !== hamburgarEl && !e.target.closest(".menu")
    ? navEl.classList.remove("nav-active")
    : false
);

class Curousel {
  constructor(private slideWrapper, private navigationWrapper) {
    this.slideWrapper =
      this.slideWrapper instanceof Element
        ? this.slideWrapper
        : document.querySelector(slideWrapper);

    this.showSlide();
    this.leftBtn.addEventListener("click", () => this.moveSlide("left"));
    this.rightBtn.addEventListener("click", () => this.moveSlide("right"));

    this.addIndicators();
  }

  slides = [...this.slideWrapper.querySelectorAll(".slide")];
  leftBtn = this.navigationWrapper.querySelector("#leftBtn");
  rightBtn = this.navigationWrapper.querySelector("#rightBtn");

  indicators = this.navigationWrapper.querySelector(".indicators");

  index: number = 0;
  isSliding: boolean = false;

  showSlide() {
    this.slides.forEach((slide) =>
      slide.classList.remove("active", "prev", "next")
    );

    this.getSlidePosition();
  }

  moveSlide(direction: string) {
    if (!this.isSliding) {
      if (direction === "left")
        this.index = this.index <= 0 ? this.slides.length - 1 : --this.index;
      if (direction === "right")
        this.index = this.index >= this.slides.length - 1 ? 0 : ++this.index;
      this.showSlide();
      this.isSliding = true;
    }
    this.setActiveIndicators();
  }

  getSlidePosition() {
    this.slides[this.index].classList.add("active");

    this.slides[
      this.index >= this.slides.length - 1 ? 0 : this.index + 1
    ].classList.add("next");

    this.slides[
      this.index <= 0 ? this.slides.length - 1 : this.index - 1
    ].classList.add("prev");

    this.slideWrapper.addEventListener(
      "transitionend",
      (e) => (this.isSliding = false)
    );
  }

  setActiveIndicators() {
    const AllIndicators = [
      ...this.navigationWrapper.querySelectorAll(".indicators .dot"),
    ];

    AllIndicators.forEach((dot) => dot.classList.remove("active"));

    AllIndicators[this.index].classList.add("active");
  }

  addIndicators() {
    this.slides.forEach((slide, i) => {
      const dot = document.createElement("div");
      dot.className = `dot dot${i + 1}`;
      this.indicators.appendChild(dot);
    });

    this.setActiveIndicators();
  }
}

const slidesEl: Element = document.getElementById("slides");
const navigationEl: Element = document.getElementById("navigation");
new Curousel(slidesEl, navigationEl);
