const almacenamiento=JSON.parse(localStorage.getItem("listado"))
console.log(almacenamiento)
function cargarDatos() {
    const almacenamiento=JSON.parse(localStorage.getItem("listado"))   
    const body=document.getElementById("datos")
    
   almacenamiento.forEach(turno =>{
    body.innerHTML+=`<tr class="style-fila">
    <td class="style-dato">${turno.nombre}</td>
    <td class="style-dato">${turno.comentario} </td>
    <td class="style-dato">${turno.correo}</td>
    <td class="style-dato">${turno.fecha}</td>
    <td class="style-dato">${turno.hora}</td>
    <td class="style-dato">${turno.lugar}</td>
    <td class="style-dato">${turno.servicio}</td>
    <td class="style-dato">${turno.celular}</td></tr>`

  
   })


}cargarDatos()