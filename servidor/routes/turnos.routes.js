import listar from "../controllers/turnos/listarTurnos.js";
import { Router } from "express";
import guardarTurno from "../controllers/turnos/guardarTurnos.js"
const rutaTurnos= Router()
rutaTurnos.get("/listado",listar)
//METODOS HTTP:
//rutaTurnos.get obtenemos datos del servidor GET
//rutaturnos.post creamos datos en el servidor POST
//rutaTurnos.patch arregla o actualiza, cambia datos en el servidor PATCH
//rutaTurnos.delete elimina datos en el servidor DELETE

rutaTurnos.post("/guardar",guardarTurno)
export default rutaTurnos