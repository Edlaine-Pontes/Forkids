const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/estabelecimentoRoutes')

const database = require('./configs/database')
database.connect()

app.use('/', router)

// const endereco = require('./models/enderecoSchema')

// endereco.create({
//     logradouro: 'Av. José Benassi',
//     numero: 1698,
//     bairro: 'Distrito Industrial',
//     cidade: 'Jundiaí',
//     estado: 'SP',
// })

// const estabelecimento = require('./models/estabelcimentoSchema')

// estabelecimento.create({
//     nome: 'Bar do Zé Maria',
//     endereco: '5fd1730aeff2e532e0dc7001',
//     site: 'http://bardoze.com.br',
//     rate: 10,
// })

module.exports = app