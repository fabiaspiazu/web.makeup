import { conection } from "../../index.js";


 const eliminarTurno= async (req,res) => {
 const sql='DELETE FROM makeup.turnos WHERE id = ?';
const id= req.params.id
 conection.query(sql, [id], (err, resultado) => {
    if (err) {
    return res.status(500).send("error del servidor")
      return;
    }
   res.status(201).json({send:'eliminado'})
  });
}

 
 export {eliminarTurno} 