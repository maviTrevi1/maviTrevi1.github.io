document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que la página se recargue

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Aquí puedes agregar la lógica para procesar los datos
  // Por ejemplo, enviar los datos a un servidor o mostrar un mensaje de éxito.
  console.log('Nombre:', nombre);
  console.log('Email:', email);
  console.log('Mensaje:', mensaje);

  alert('Formulario enviado!'); // Mostrar un mensaje de alerta
});

