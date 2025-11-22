import { conection } from "../../index.js";


    const guardarTurno= async (req,res) => {
        const infoTurno= req.body

        const contacto=infoTurno.contacto
        const email=infoTurno.email
        const nombre=infoTurno.nombre
        const fecha=infoTurno.fecha
        const hora=infoTurno.hora
        const comentario=infoTurno.comentario
        const lugar=infoTurno.lugar
        const servicio=infoTurno.servicio


const sql="INSERT INTO makeup.turnos(`nombre`,`comentario`,`email`,`fecha`,`hora`,`lugar`,`servicio`,`contacto`)VALUES(?,?,?,?,?,?,?,?);"
   conection.query(sql,[nombre,comentario,email,fecha,hora,lugar,servicio,contacto],(error,resultado)=>{
    if(error) {
       
        return res.status(500).send("error del servidor")
        
    }
    res.status(201).json({send:'creado'})

   })


}

    export default guardarTurno
   