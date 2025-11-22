
async function cargarDatos() {
   
    const body=document.getElementById("datos")
    const res=await fetch('http://localhost:3000/turnos/listado')
 const datos=await res.json()

   datos.forEach(turno =>{
    body.innerHTML+=`<tr class="style-fila">
    <td class="style-dato">${turno.nombre}</td>
    <td class="style-dato">${turno.comentario} </td>
    <td class="style-dato">${turno.email}</td>
    <td class="style-dato">${turno.fecha.split("T")[0]}</td>
    <td class="style-dato">${turno.hora}</td>
    <td class="style-dato">${turno.lugar}</td>
    <td class="style-dato">${turno.servicio}</td>
    <td class="style-dato">${turno.contacto}</td>
    <td class="style-dato"> <button onclick="${eliminar(turno.id)}" id="boton-eliminar">eliminar</button></td></tr>`



    

  const botonEliminar=document.getElementById("boton-eliminar")
botonEliminar.addEventListener("click",async function eliminar(params) {
   await fetch (`http://localhost:3000/turnos/eliminar/${params}`,{
    method:"DELETE",
   


  })
  .then(res=>res.json())
  .then(data=>console.log(data))
  .catch(error=>console.log(error))

   console.log(params)
}
)
   })


}cargarDatos()
