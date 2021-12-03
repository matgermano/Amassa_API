const { Router} = require('express');
const BebidasController = require ('../controllers/BebidasController')

const router = Router();

router.get('/bebidas', BebidasController.index);
router.get('/bebidas/:id', BebidasController.show);
router.post('/bebidas', BebidasController.save);
router.put('/bebidas/:id', BebidasController.update);
router.delete('/bebidas/:id', BebidasController.remove);



module.exports = router;