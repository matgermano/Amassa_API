const { Router} = require('express');
const SobremesasController = require ('../controllers/SobremesasController')

const router = Router();

router.get('/sobremesas', SobremesasController.index);
router.get('/sobremesas/:id', SobremesasController.show);
router.post('/sobremesas', SobremesasController.save);
router.put('/sobremesas/:id', SobremesasController.update);
router.delete('/sobremesas/:id', SobremesasController.remove);



module.exports = router;