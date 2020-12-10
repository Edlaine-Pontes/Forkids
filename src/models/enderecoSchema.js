const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EnderecoSchema = new Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },

    logradouro: {
        type: String,
        required: true
    },

    numero: {
        type: Number,
        required: true
    },

    bairro: {
        type: String,
        required: true
    },

    cidade: {
        type: String,
        required: true
    },

    estado: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 2,
        maxlength: 2
    },
    
})

const EnderecoCollection = mongoose.model('endereco', EnderecoSchema)

module.exports = EnderecoCollection