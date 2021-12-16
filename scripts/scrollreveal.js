window.sr = ScrollReveal();

const accordionButton = document.querySelector(".accordion-button");
accordionButton.onclick = (e) => {
  console.log(e);
  sr.reveal(".principal-h1", {
    duration: 2000,
    origin: "top",
    distance: "200px",
  });

  sr.reveal(".principal-p", {
    duration: 2000,
    origin: "top",
    distance: "200px",
  });

  sr.reveal(".principal-img", {
    duration: 2000,
    origin: "bottom",
    distance: "300px",
  });

  sr.reveal(".accordion-item h3", {
    delay: 200,
    duration: 450,
    reset: false,
  });

  sr.reveal(".accordion-item .caracteristicas", {
    delay: 200,
    duration: 450,
    reset: false,
  });

  sr.reveal(".card", {
    delay: 300,
    duration: 450,
    reset: false,
  });
};
