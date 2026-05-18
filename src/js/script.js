import './script.js'
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".hide");
  const brands = document.querySelector(".brands");
  const text = btn.querySelector("p");
  let swiper = null;

  function initSwiper() {
    if (window.innerWidth < 768 && swiper === null) {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.2,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    if (window.innerWidth >= 768 && swiper !== null) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }

  btn.addEventListener("click", () => {
    brands.classList.toggle("show-midle");
    text.textContent = brands.classList.contains("show-midle")
      ? "Скрыть"
      : "Показать все";
  });

  // initSwiper();
  window.addEventListener("resize", initSwiper);
});