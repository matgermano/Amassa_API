const { Router } = require('express');
const Pratos_principaisController = require('../controllers/Pratos_principaisController');

const router = Router();

router.get('/pratos-principais', Pratos_principaisController.pegaPprincipais)

module.exports = router;