const { Router } = require('express');
const Pratos_principaisController = require('../controllers/Pratos_principaisController');

const router = Router();

router.get('/pratos-principais', Pratos_principaisController.pegaPprincipais);
router.get('/pratos-principais/:id', Pratos_principaisController.show);
router.post('/pratos-principais', Pratos_principaisController.save);
router.put('/pratos-principais/:id', Pratos_principaisController.update);
router.delete('/pratos-principais/:id', Pratos_principaisController.remove);

module.exports = router;