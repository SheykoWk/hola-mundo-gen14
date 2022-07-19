const express = require("express");

const app = express()

app.get('/hola', (peticion, respuesta) => {
    respuesta.send('Hola mundo!')
})

app.listen(8000, () => {
    console.log('Server started at port 8000')
})
