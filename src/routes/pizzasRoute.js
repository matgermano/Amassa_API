const { Router } = require('express')
const PizzaController = require('../controllers/PizzaController')
const router = Router()
router.get('/pizza', PizzaController.pegaTodasAsPizzas)
router.get('/pizza/:id', PizzaController.pegaUmaPizza)
router.post('/pizza', PizzaController.criaPizza)
router.put('/pizza/:id', PizzaController.atualizaPizza)
router.delete('/pizza/:id', PizzaController.apagaPizza)

module.exports=router