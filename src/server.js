
// importar pacotes
const express = require('express')
const path = require('path')
const pages = require('./pages.js')

// iniciando o express
const server = express()
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


//ligar o servidor
server.listen(5500)