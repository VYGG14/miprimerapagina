function showAlert() {
  alert("¡hola, esta es una alerta desde javascript!");
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}

function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.ariaValueMax;

  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electronico valido.");
  }
 s else {
    alert("Correo electronico enviado correctamente");
  }
}

if (form) {
  const form = document.getElementById("myForm");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
})

/*alterna la clase "nav-links-responsive" del elemento con la clase ".nav-links"*/
document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
    document.querySelector(".nav-links")
      .classList.toggle("nav-links-responsive")})


    