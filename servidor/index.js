import mysql from "mysql2"
import express from "express";
const server= express()
const puerto=3000

const conection=mysql.createConnection({ 
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"prueba.web"
})

conection.connect(error=>{ 
    console.log (error)
    console.log("conectado a la base de datos")
})

server.listen(puerto,()=>{
    console.log("servidor corriendo")
})