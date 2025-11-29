
async function cargarDatos() {
   
    const body=document.getElementById("datos")
    const res=await fetch('http://localhost:3000/turnos/listado')
 const datos=await res.json()

   datos.forEach(turno =>{
      const fila= document.createElement("tr")
    fila.innerHTML=`<tr class="style-fila">
    <td class="style-dato">${turno.nombre}</td>
    <td class="style-dato">${turno.comentario} </td>
    <td class="style-dato">${turno.email}</td>
    <td class="style-dato">${turno.fecha.split("T")[0]}</td>
    <td class="style-dato">${turno.hora}</td>
    <td class="style-dato">${turno.lugar}</td>
    <td class="style-dato">${turno.servicio}</td>
    <td class="style-dato">${turno.contacto}</td>
    <td class="style-dato"> <button class="boton-eliminar" id="boton-eliminar">eliminar</button></td></tr>`



    

  const botonEliminar=fila.querySelector(".boton-eliminar")
botonEliminar.addEventListener("click",async function () {
   await fetch (`http://localhost:3000/turnos/eliminar/${turno.id}`,{
    method:"DELETE",
   


  })
  .then(res=>res.json())
  .then(data=>{
   alert("eliminado")
   body.innerHTML=""
   cargarDatos()
  })
  .catch(error=>console.log(error))

   
}
)
body.appendChild(fila)
   })


}cargarDatos()
