document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form').addEventListener('submit', submitForm);
});

function submitForm(event) {
  event.preventDefault();
  // obtener los datos del formulario
  const formData = new FormData(event.target);
  // enviar la solicitud de formulario mediante AJAX
  fetch("/warryorsgym1post1", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text()) // obtener la respuesta del servidor
    .then((result) => console.log(result)) // mostrar la respuesta del servidor en la consola
    .catch((error) => console.error(error)); // manejar cualquier error
}
