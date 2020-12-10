const { request, response } = require('../app')
const estabelecimentoCollection = require('../models/estabelcimentoSchema')


const addEstabelecimento = async (req, res) => {
    try {
        const estabelecimento = await estabelecimentoCollection.create({...req.body})
        return res.status(201).send(estabelecimento)
    } catch (error){
        return res.status(400).send({message: error.message})
    }
}

const atualizar = async (req, res) => {
    try {
        const param = req.params.id
        const body = req.body
        const update = {new: true}

        const estabelecimento = await estabelecimentoCollection.findByIdAndUpdate(param, body, update)
        return res.status(200).send(estabelecimento)
    } catch (error) {
        return res.status(400).send({message: error.message})
    }
}




module.exports = {
    addEstabelecimento,
    atualizar,
}