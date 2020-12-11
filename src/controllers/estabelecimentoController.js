const estabelecimentoCollection = require('../models/estabelcimentoSchema')

const getAll = async(req, res) => {
    const { categoria, uf, cidade } = req.query
    
    const filters = {}

    if (categoria) {
        filters.categoria = categoria
    }

    if (uf) {
        filters.estado = uf
    }

    if (cidade) {
        filters.cidade = cidade
    }

    const estabelecimento = await estabelecimentoCollection.find(filters)
    return res.status(200).send(estabelecimento)
}

const get = async (req, res) => {
    try {
        const { id } = req.params

        const estabelecimento = await estabelecimentoCollection.findById(id)

        return res.status(200).send(estabelecimento)
    } catch (error) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }
}

const create = async (req, res) => {
    try {
        const estabelecimento = await estabelecimentoCollection.create(req.body)
        return res.status(201).send(estabelecimento)
    } catch (error){
        return res.status(400).send({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const update = {new: true}

        const estabelecimento = await estabelecimentoCollection.findByIdAndUpdate(id, body, update)
        return res.status(200).send(estabelecimento)
    } catch (error) {
        return res.status(404).send({message: 'Estabelecimento não encontrado'})
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params

        await estabelecimentoCollection.findByIdAndDelete(id)

        return res.status(204).send()
    } catch (error) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }
}

const like = async (req, res) => {
    try {
        const { id } = req.params
        estabelecimento = await estabelecimentoCollection.findById(id)

        estabelecimento.likes += 1

        await estabelecimentoCollection.updateOne(estabelecimento)
        return res.status(200).send(estabelecimento)
    } catch(error) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }
}

const dislike = async (req, res) => {
    try {
        const { id } = req.params
        estabelecimento = await estabelecimentoCollection.findById(id)

        estabelecimento.likes -= 1

        await estabelecimentoCollection.updateOne(estabelecimento)
        return res.status(200).send(estabelecimento)
    } catch(error) {
        return res.status(404).send({ message: 'Estabelecimento não encontrado' })
    }
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
    like,
    dislike,
}