document.addEventListener("click", (e) => {
  const element = e.target;
  const card = element.closest(".card");

  if (element.matches(".variedades img")) {
    // Get the modal
    let modal = card.querySelector(".modal");

    let modalImg = card.querySelector(".modal-content");
    // img.onclick = function () {
    modalImg.src = element.src;
    modal.style.display = "block";
    // };

    // Get the <span> element that closes the modal
    let span = card.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };
  }
});

console.log("hola");
