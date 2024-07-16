// Script para cuando enviemos formulario no nos reenvie a la pagina de Formspree y redireccione a lander
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    fetch(event.target.action, {
    method: 'POST',
    body: new FormData(form)
    })
    .then(function(response) {
    form.reset();
    window.location.reload();
    })
    .catch(function(error) {
    console.error('Error:', error);
    });
});