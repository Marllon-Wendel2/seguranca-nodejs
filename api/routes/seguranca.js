const { Router } = require('express');
const SegurancaController = require('../controllers/segurancaController')

const router = Router();

router
    .post('/seguranca', SegurancaController.cadastrarAcl)


module.exports = router