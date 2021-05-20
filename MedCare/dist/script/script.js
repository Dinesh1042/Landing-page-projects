var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var navEl = document.getElementById("nav");
var hamburgarEl = document.getElementById("hamburgar");
hamburgarEl.addEventListener("click", function () {
    return navEl.classList.toggle("nav-active");
});
window.addEventListener("scroll", function (e) {
    return window.scrollY > window.innerHeight
        ? navEl.classList.remove("nav-active")
        : false;
});
window.addEventListener("click", function (e) {
    return e.target !== hamburgarEl && !e.target.closest(".menu")
        ? navEl.classList.remove("nav-active")
        : false;
});
var Curousel = /** @class */ (function () {
    function Curousel(slideWrapper, navigationWrapper) {
        var _this = this;
        this.slideWrapper = slideWrapper;
        this.navigationWrapper = navigationWrapper;
        this.slides = __spreadArray([], this.slideWrapper.querySelectorAll(".slide"));
        this.leftBtn = this.navigationWrapper.querySelector("#leftBtn");
        this.rightBtn = this.navigationWrapper.querySelector("#rightBtn");
        this.indicators = this.navigationWrapper.querySelector(".indicators");
        this.index = 0;
        this.isSliding = false;
        this.slideWrapper =
            this.slideWrapper instanceof Element
                ? this.slideWrapper
                : document.querySelector(slideWrapper);
        this.showSlide();
        this.leftBtn.addEventListener("click", function () { return _this.moveSlide("left"); });
        this.rightBtn.addEventListener("click", function () { return _this.moveSlide("right"); });
        this.addIndicators();
    }
    Curousel.prototype.showSlide = function () {
        this.slides.forEach(function (slide) {
            return slide.classList.remove("active", "prev", "next");
        });
        this.getSlidePosition();
    };
    Curousel.prototype.moveSlide = function (direction) {
        if (!this.isSliding) {
            if (direction === "left")
                this.index = this.index <= 0 ? this.slides.length - 1 : --this.index;
            if (direction === "right")
                this.index = this.index >= this.slides.length - 1 ? 0 : ++this.index;
            this.showSlide();
            this.isSliding = true;
        }
        this.setActiveIndicators();
    };
    Curousel.prototype.getSlidePosition = function () {
        var _this = this;
        this.slides[this.index].classList.add("active");
        this.slides[this.index >= this.slides.length - 1 ? 0 : this.index + 1].classList.add("next");
        this.slides[this.index <= 0 ? this.slides.length - 1 : this.index - 1].classList.add("prev");
        this.slideWrapper.addEventListener("transitionend", function (e) { return (_this.isSliding = false); });
    };
    Curousel.prototype.setActiveIndicators = function () {
        var AllIndicators = __spreadArray([], this.navigationWrapper.querySelectorAll(".indicators .dot"));
        AllIndicators.forEach(function (dot) { return dot.classList.remove("active"); });
        AllIndicators[this.index].classList.add("active");
    };
    Curousel.prototype.addIndicators = function () {
        var _this = this;
        this.slides.forEach(function (slide, i) {
            var dot = document.createElement("div");
            dot.className = "dot dot" + (i + 1);
            _this.indicators.appendChild(dot);
        });
        this.setActiveIndicators();
    };
    return Curousel;
}());
var slidesEl = document.getElementById("slides");
var navigationEl = document.getElementById("navigation");
new Curousel(slidesEl, navigationEl);
