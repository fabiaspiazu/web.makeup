import { Router } from "express";
const rutaCliente= Router()
rutaCliente.get("/listado",(req,res)=>{
    res.send("listado de cliente")
})
export default rutaCliente