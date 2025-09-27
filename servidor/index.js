import cors from 'cors'
import rutaCliente from "./routes/clientes.routes.js";
import rutaTurnos from "./routes/turnos.routes.js";
import mysql from "mysql2"
import express from "express";
const server= express()
const puerto=3000
server.use(cors({
    origin:'*'
})) 
server.use(express.json())
export const conection=mysql.createConnection({ 
    host:"localhost",
    user:"root",
    password:"root",
    port:3306,
    database:"makeup"
})

conection.connect(error=>{ 
    
    console.log("conectado a la base de datos")
})

server.use("/clientes",rutaCliente)
server.use("/turnos",rutaTurnos)
server.listen(puerto,()=>{
    console.log("servidor corriendo")
})
