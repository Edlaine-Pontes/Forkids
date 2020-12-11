const comentarioCollection = require('../models/comentarioSchema')

const getAll = async(req, res) => {
    const { estabelecimento } = req

    const comentario = await comentarioCollection.find({estabelecimento})
    return res.status(200).send(comentario)
}

const get = async (req, res) => {
    try {
        const { estabelecimento } = req
        const _id = req.params.id

        const comentario = await comentarioCollection.findOne({_id, estabelecimento})

        return res.status(200).send(comentario)
    } catch (error) {
        return res.status(404).send({ message: 'Comentário não encontrado' })
    }
}

const create = async (req, res) => {
    try {
        const { estabelecimento } = req
        
        const body = req.body
        body.estabelecimento = estabelecimento

        const comentario = await comentarioCollection.create(body)
        return res.status(201).send(comentario)
    } catch (error){
        return res.status(400).send({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        
        const body = req.body
        const update = {new: true}

        const comentario = await comentarioCollection.findByIdAndUpdate(id, body, update)
        return res.status(200).send(comentario)
    } catch (error) {
        return res.status(404).send({message: 'Comentário não encontrado'})
    }
}

const remove = async (req, res) => {
    try {
        const { id } = req.params

        await comentarioCollection.findByIdAndDelete(id)

        return res.status(204).send()
    } catch (error) {
        return res.status(404).send({ message: 'Comentário não encontrado' })
    }
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
}