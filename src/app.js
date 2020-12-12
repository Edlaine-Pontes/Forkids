const express = require('express')
const app = express()
const cors = require('cors')

const estabelecimentosRoute = require('./routes/estabelecimentoRoutes')

const database = require('./configs/database')
database.connect()

app.use(cors())
app.use(express.json())

app.use('/', (req, res) => {
    res.send('Eu estou vivo!')
})
app.use('/estabelecimentos', estabelecimentosRoute)

module.exports = app