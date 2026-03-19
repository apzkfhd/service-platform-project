// hero swiper
const heroSwiper = new Swiper(".hero-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
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
      spaceBetween: 130,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
  },
});

// review swiper
const reviewSwiper = new Swiper(".review-swiper", {
  slidesPerView: 4,
  spaceBetween: 100,
  loop: true,
  speed: 600,
  // autoplay: {
  //   delay: 500,
  //   disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

//
//
// history Gsap
let panels = gsap.utils.toArray(".history-item");
panels.forEach((panel, index) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    end: "+=100%",
    pin: true,
    pinSpacing: false,
    scrub: 1,
    anticipatePin: 1,
  });
});
