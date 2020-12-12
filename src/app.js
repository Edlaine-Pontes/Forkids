const express = require('express')
const app = express()
const cors = require('cors')

const estabelecimentosRoute = require('./routes/estabelecimentoRoutes')

const database = require('./configs/database')
database.connect()

app.use(cors())
app.use(express.json())

app.use('/estabelecimentos', estabelecimentosRoute)

app.get('/', (req, res) => {
    res.send('Eu estou vivo!')
})

module.exports = app