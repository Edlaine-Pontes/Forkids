const express = require("express")
const router = express.Router()
const estabelecimentoController = require('../controllers/estabelecimentoController')
// const reviewController = require('../controllers/reviewController')
// const authAdm = require('../middlewares/authAdm')
// const authUser = require('../middlewares/authUser')

router.post('/create', estabelecimentoController.addEstabelecimento)
router.put('/id', estabelecimentoController.atualizar)


module.exports = router