const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EstabelecimentoSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    nome: {
        type: String,
        required: true
    }, 
    site: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: false,
        default: 0
    },
    categoria: {
        type: String,
        required: true,
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

const EstabelecimentoCollection = mongoose.model('estabelecimento', EstabelecimentoSchema)

module.exports = EstabelecimentoCollection
