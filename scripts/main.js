import scrollTop from "./scroll_top.js";

document.addEventListener("DOMContentLoaded", () => {
  scrollTop(".scroll-top-btn");

  document.addEventListener("click", (e) => {
    /* language change */
    if (e.target.matches(".lang")) {
      const esp = document.querySelector("#esp");
      const china = document.querySelector("#china");
      if (e.target.matches("#esp")) {
        esp.classList.add("active");
        china.classList.remove("active");
      } else {
        china.classList.add("active");
        esp.classList.remove("active");
      }
    }
  });

  window.addEventListener("scroll", () => {
    let header = document.querySelector("header nav");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
});
