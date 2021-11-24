const { Router} = require('express');
const EntradasController = require ('../controllers/EntradasController')

const router = Router();

router.get('/entradas', EntradasController.index);
router.get('/entradas/:id', EntradasController.show);
router.post('/entradas', EntradasController.save);
router.put('/entradas/:id', EntradasController.update);
router.delete('/entradas/:id', EntradasController.remove);



module.exports = router;
