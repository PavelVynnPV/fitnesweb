var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
});

const swiper = new Swiper("#mySwiper", {
  autoplay: true,
  slidesPerView: "auto",
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  arrows: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});