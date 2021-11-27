document.addEventListener("click", (e) => {
  const element = e.target;
  const card = element.closest(".card");

  if (element.matches(".variedades img")) {
    let modal = card.querySelector(".modal");

    let modalImg = card.querySelector(".modal-content");

    modalImg.src = element.src;
    modal.style.display = "block";

    let span = card.getElementsByClassName("close")[0];

    span.onclick = function () {
      modal.style.display = "none";
    };
  }
});
