import { conection } from "../../index.js";
const buscarTurno= async (req,res) => {
 const sql='select * FROM makeup.turnos WHERE id = ?';
const id= req.params.id
 conection.query(sql, [id], (err, resultado) => {
    if (err) {
    return res.status(500).send("error del servidor")
      return;
    }
   res.status(201).json(resultado)
  });
}
export default buscarTurno