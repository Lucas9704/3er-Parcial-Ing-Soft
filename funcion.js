'use strict'

const express = require('express')

const situacion = require('./models/situacion')

const app = express()

app.get('/' ,(req, res ) =>{
    let Estado = 'hola';
    if (situacion.difCondicion(7)===true) {
        Estado='Aprobaste la instancia de evaluación :)'
    } else {
       Estado='No aprobaste la instancia de evaluación:('
    }
    res.status(200).send(Estado);
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port,()=>{
    console.log( `API REST corriendo en http://localhost:${port}`)
})
