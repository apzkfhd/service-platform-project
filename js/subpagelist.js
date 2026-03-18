const regions = document.querySelectorAll(".land");
const cards = document.querySelectorAll(".spot-card");

regions.forEach((region) => {
  region.addEventListener("mouseenter", () => {
    const id = region.id;

    cards.forEach((card) => {
      if (card.dataset.region === id) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  });
});
