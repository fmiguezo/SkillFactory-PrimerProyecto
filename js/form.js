function obtenerDatos() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  document.querySelector("#formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(`Nombre: ${nombre} 
Email: ${email} 
Mensaje: ${mensaje}`);
  });
}
