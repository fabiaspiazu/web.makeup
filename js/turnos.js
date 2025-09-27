
async function cargarDatos() {
   
    const body=document.getElementById("datos")
    const res=await fetch('http://localhost:3000/turnos/listado')
 const datos=await res.json()
 console.log(datos)
   datos.forEach(turno =>{
    body.innerHTML+=`<tr class="style-fila">
    <td class="style-dato">${turno.nombre}</td>
    <td class="style-dato">${turno.comentario} </td>
    <td class="style-dato">${turno.email}</td>
    <td class="style-dato">${turno.fecha.split("T")[0]}</td>
    <td class="style-dato">${turno.hora}</td>
    <td class="style-dato">${turno.lugar}</td>
    <td class="style-dato">${turno.servicio}</td>
    <td class="style-dato">${turno.contacto}</td></tr>`

  
   })


}cargarDatos()