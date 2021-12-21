//validate email input form
function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const form = document.querySelector(".form-card");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  let company = document.querySelector("#company").value;
  let phone = document.querySelector("#phone").value;
  let city = document.querySelector("#city").value;
  let country = document.querySelector("#country").value;
  const errorElement = document.querySelector(".error");
  const successElement = document.querySelector(".success");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "./registro.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(
    `name=${name}&email=${email}&message=${message}&company=${company}&phone=${phone}&city=${city}&country=${country}`
  );
  xhr.onload = function () {
    if (this.status == 200) {
      successElement.classList.remove("disp-none");
      successElement.classList.add("disp-block");
      form.reset();
    } else {
      successElement.classList.remove("disp-none");
      errorElement.classList.add("disp-block");
      console.log("no enviado");
    }
  };
});
