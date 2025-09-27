// script.js
document.getElementById("formularioMakeup").addEventListener("submit", async function (evento) {
  evento.preventDefault()//evitamos el comportamiento para evitar el redireccionamiento
  const celular = document.getElementById("celular").value
  const email = document.getElementById("correo").value
  const nombre = document.getElementById("nombre").value
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const servicio = document.getElementById("servicio").value;
  const lugar = document.getElementById("lugar").value;
  const comentario = document.getElementById("comentarios").value
  if (nombre && email && celular && fecha && hora && servicio && lugar) {
    
    const turno = { contacto: celular, email: email, nombre: nombre, fecha: fecha, hora: hora, lugar: lugar, comentario: comentario, servicio: servicio }
  await fetch ("http://localhost:3000/turnos/guardar",{
    method:"POST",
    body:JSON.stringify(turno)

  })
  
    
    // Podés enviar la info a un servidor o guardarla
  } else {
    alert("Por favor, completá todos los campos obligatorios.");
  }

})

