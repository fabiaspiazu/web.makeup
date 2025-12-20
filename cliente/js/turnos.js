
async function cargarDatos() {

   const body = document.getElementById("datos")
   const res = await fetch('http://localhost:3000/turnos/listado')
   const datos = await res.json()

   datos.forEach(turno => {
      const fila = document.createElement("tr")
      fila.innerHTML = `<tr class="style-fila">
    <td class="style-dato">${turno.nombre}</td>
    <td class="style-dato">${turno.comentario} </td>
    <td class="style-dato">${turno.email}</td>
    <td class="style-dato">${turno.fecha.split("T")[0]}</td>
    <td class="style-dato">${turno.hora}</td>
    <td class="style-dato">${turno.lugar}</td>
    <td class="style-dato">${turno.servicio}</td>
    <td class="style-dato">${turno.contacto}</td>
    <td class="style-dato container"> <button class="btn btn-danger" id="boton-eliminar">eliminar</button></tr>
     <button class="btn btn-warning" id="boton-modificar"data-bs-toggle="modal" data-bs-target="#exampleModal">modificar</button></td></tr>`





      const botonEliminar = fila.querySelector("#boton-eliminar")
      botonEliminar.addEventListener("click", async function () {
         await fetch(`http://localhost:3000/turnos/eliminar/${turno.id}`, {
            method: "DELETE",



         })
            .then(res => res.json())
            .then(data => {
               alert("eliminado")
               body.innerHTML = ""
               cargarDatos()
            })
            .catch(error => console.log(error))


      }
      )
      const botonModificar = fila.querySelector("#boton-modificar")
      botonModificar.addEventListener("click", async function () {
         await fetch(`http://localhost:3000/turnos/buscar/${turno.id}`, {
            method: "GET",



         })
            .then(res => res.json())
            .then(data => {
               console.log(data)
               const datosCliente = data[0] 
               const inputNombre = document.querySelector("#nombre-cliente")
               inputNombre.value = datosCliente.nombre
               const inputComentario = document.querySelector("#comentario")
               inputComentario.value = datosCliente.comentario
               const inputEmail = document.querySelector("#email")
               inputEmail.value = datosCliente.email
               const inputFechaTurno = document.querySelector("#fecha-turno")
               inputFechaTurno.value = datosCliente.fecha.split("T")[0]
               const inputHoraTurno = document.querySelector("#hora-turno")
               inputHoraTurno.value = datosCliente.hora
               const inputLugar = document.querySelector("#lugar")
               inputLugar.value = datosCliente.lugar
               const inputServicio = document.querySelector("#servicio")
               inputServicio.value = datosCliente.servicio
               const inputContactoCliente = document.querySelector("#contacto-cliente")
               inputContactoCliente.value = datosCliente.contacto
            })
            .catch(error => console.log(error))


      }
      )
      body.appendChild(fila)
   })


} cargarDatos()
