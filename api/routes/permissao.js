const { Router } = require('express');
const PermissaoController = require('../controllers/permissaoController');

const router = Router()

router
    .post('/permissao', PermissaoController.cadastrar)
    .get('/permissao',PermissaoController.buscarTodasPermissoes)
    .get('/permissao/id/:id', PermissaoController.buscaPermissaoId)
    .delete('/permissao/id/:id', PermissaoController.deletaPermissao)
    .put('/permissao/id/:id', PermissaoController.atualizaPermissao)

module.exports = router