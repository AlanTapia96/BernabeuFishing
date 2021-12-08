document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card__inner");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("appear");
      card.addEventListener("click", function (e) {
        card.classList.toggle("is-flipped");
      });
    }, i * 500);
  });
});
