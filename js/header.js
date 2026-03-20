// const menuItems = document.querySelectorAll(".menu-item");
// const megaMenu = document.querySelector(".mega-menu");
// const menuContent = document.querySelector(".menu-content");

// let currentMenu = "";

// const menuData = {
//   movie: [
//     { name: "전체보기", link: "subpagelist.html" },
//     { name: "최신장소", link: "errorpage.html" },
//     { name: "인기장소", link: "errorpage.html" },
//     { name: "유명장소", link: "errorpage.html" },
//   ],
//   drama: [
//     { name: "전체보기", link: "subpagelist.html" },
//     { name: "최신장소", link: "errorpage.html" },
//     { name: "인기장소", link: "errorpage.html" },
//     { name: "유명장소", link: "errorpage.html" },
//   ],
// };

// // 메뉴 hover
// menuItems.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     const newMenu = item.dataset.menu;

//     if (currentMenu === newMenu) return;
//     currentMenu = newMenu;

//     // active 초기화
//     menuItems.forEach((el) => el.classList.remove("active"));
//     item.classList.add("active");

//     // 메뉴 표시
//     megaMenu.classList.add("show");

//     // 콘텐츠 변경 (a 태그 포함)
//     menuContent.innerHTML = menuData[newMenu]
//       .map((menu) => `<li><a href="${menu.link}">${menu.name}</a></li>`)
//       .join("");
//   });
// });

// // mega-menu 유지 (hover 끊김 방지)
// megaMenu.addEventListener("mouseenter", () => {
//   megaMenu.classList.add("show");
// });

// // 전체 영역 벗어나면 닫기
// document.querySelector(".header").addEventListener("mouseleave", () => {
//   megaMenu.classList.remove("show");
//   menuItems.forEach((el) => el.classList.remove("active"));
//   currentMenu = "";
// });
