function obtenerDatos() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  // Imprimir en consola
  document.querySelector("#formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(`Nombre: ${nombre} 
Email: ${email} 
Mensaje: ${mensaje}`);

    // Imprimir en DOM
    let body = ``;
    body += `
<div>
    <h3>Resumen de datos enviados</h3>
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Mensaje: ${mensaje}</p>
    
</div>
`;
    document.getElementById("print-results").innerHTML = body;
  });
}
