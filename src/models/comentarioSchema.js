const mongoose = require("mongoose")
const Schema = mongoose.Schema

const comentarioSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    estabelecimento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'estabelecimento'
    }, 
    comentario: {
        type: String,
        required: true
    },
})

const ComentarioCollection = mongoose.model('comentario', comentarioSchema)

module.exports = ComentarioCollection
