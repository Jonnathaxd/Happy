
require('dotenv').config()
// importar pacotes
const express = require('express')
const path = require('path')
const pages = require('./pages.js')
const cors = require('cors')
const PORT = process.env.PORT


// iniciando o express
const server = express()
// utilizando corpo da requisição
.use(express.json(), express.urlencoded({extended: true}))
//configurando cors
    // lista de ips que poderão acessar
    let opt = {origin: ["http://localhost:5500", "http://192.168.0.5"]}
    // iniciando de fato o cors
        server.use(cors(opt))
//utilizando os arquivos estáticos
server.use(express.static('public'))


//configurando template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// criando uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save_orphanage', pages.save_orphanage)

//ligar o servidor
server.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT)
})