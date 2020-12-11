const express = require("express")
const router = express.Router()
const controller = require('../controllers/estabelecimentoController')
const comentariosRoute = require('./comentarioRoute')

router.get('/', controller.getAll)
router.get('/:id', controller.get)
router.post('/', controller.create)
router.put('/:id', controller.update)
router.delete('/:id', controller.remove)

router.post('/:id/like', controller.like)
router.post('/:id/dislike', controller.dislike)

// Middlewre de redirecionameno do ID do estabelecimento
const redirectParam = (req, res, next) => {
    const {id} = req.params
    req.estabelecimento = id
    next()
}

router.use('/:id/comentarios', redirectParam, comentariosRoute)

module.exports = router