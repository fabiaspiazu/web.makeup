// script.js
document.getElementById("formularioMakeup").addEventListener("submit", function (evento) {
    evento.preventDefault()//evitamos el comportamiento para evitar el redireccionamiento
const celular=    document.getElementById("celular") .value
const email= document.getElementById("correo").value
const nombre= document.getElementById("nombre").value
const fecha= document.getElementById("fecha").value;
const hora = document.getElementById("hora").value;
const servicio = document.getElementById("servicio").value;
const lugar = document.getElementById("lugar").value;
const comentario= document.getElementById("comentarios").value
if (nombre && email && celular && fecha && hora && servicio && lugar) {
const listadoTurnos= JSON.parse(localStorage.getItem("listado"))??[]
  const turno={celular:celular,correo:email,nombre:nombre,fecha:fecha,hora:hora,lugar:lugar,comentario:comentario,servicio:servicio}
  listadoTurnos.push(turno)
  localStorage.setItem("listado",JSON.stringify(listadoTurnos))
  alert("¡Turno reservado con éxito!");
console.table(listadoTurnos)
  // Podés enviar la info a un servidor o guardarla
} else {
  alert("Por favor, completá todos los campos obligatorios.");
}
 
})

