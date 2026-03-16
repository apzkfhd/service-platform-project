// hero swiper
const heroSwiper = new Swiper(".hero-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  watchSlidesProgress: true,
  spaceBetween: 24,
  loop: true,
  speed: 600,

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 70,
    },
  },
});

// review swiper
var reviewSwiper = new Swiper(".review-swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
});
