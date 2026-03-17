// hero swiper
const heroSwiper = new Swiper(".hero-swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 24,
  loop: true,
  speed: 600,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 300,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 100,
    },
  },
});

// review swiper
const reviewSwiper = new Swiper(".review-swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  speed: 600,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const menuItems = document.querySelectorAll(".menu-item");
const megaMenu = document.querySelector(".mega-menu");
const menuContent = document.querySelector(".menu-content");

let currentMenu = "";

const menuData = {
  movie: ["전체보기", "최신장소", "인기장소", "유명장소"],
  drama: ["전체보기", "최신장소", "인기장소", "유명장소"],
};

menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const newMenu = item.dataset.menu;

    if (currentMenu === newMenu) return;
    currentMenu = newMenu;

    //  active 초기화
    menuItems.forEach((el) => el.classList.remove("active"));

    //  현재 메뉴 active 추가
    item.classList.add("active");

    // 콘텐츠 변경
    menuContent.innerHTML = menuData[newMenu].map((text) => `<li>${text}</li>`).join("");

    // 애니메이션 재실행
    megaMenu.classList.remove("active");
    void megaMenu.offsetWidth;
    megaMenu.classList.add("active");
  });
});

document.querySelector(".header").addEventListener("mouseleave", () => {
  menuItems.forEach((el) => el.classList.remove("active"));
  currentMenu = "";
});

//
//
// history Gsap
let panels = gsap.utils.toArray(".history-item");
panels.forEach((panel, index) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});
