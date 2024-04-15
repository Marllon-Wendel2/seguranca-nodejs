const { Router } = require('express');
const RoleController = require('../controllers/roleController')

const router = Router();

router
    .post('/roles', RoleController.cadastrar)
    .get('/roles', RoleController.buscarTodasRoles)
    .get('/roles/id/:id', RoleController.buscarRoleId)
    .delete('/roles/id/:id', RoleController.deletaRole)
    .put('/roles/id/:id', RoleController.atualizaRole)

module.exports = router