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
    
    endereco: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'endereco',
        required: true,
    },

    site: {
        type: String,
        required: true
    },

    rate: {
        type: Number,
        required: false,
        default: 0
    },

    categoria: {
        type: String,
        required: true,
    }

})

const EstabelecimentoCollection = mongoose.model('estabelecimento', EstabelecimentoSchema)

module.exports = EstabelecimentoCollection
