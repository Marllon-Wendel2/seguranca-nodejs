const { Router } = require('express');

const router = Router()

router
    .post('/permissao')
    .get('/permissao')
    .get('/permissao/id/:id')
    .delete('/permissao')
    .put('/permissao/id/:id')

module.exports = router