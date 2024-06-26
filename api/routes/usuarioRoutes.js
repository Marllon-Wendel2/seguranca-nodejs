const { Router } = require ('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticadoJs = require('../middleware/autenticado.Js');
//const autenticado = require('../middleware/autenticado')


const router = Router();
router.use(autenticadoJs)

router
    .post('/usuarios', UsuarioController.cadastrar)
    .get('/usuarios', UsuarioController.buscarTodosUsuarios)
    .get('/usuarios/id/:id', UsuarioController.buscarUsuarioPorId)
    .put('/usuarios/id/:id', UsuarioController.editarUsuario)
    .delete('/usuarios/id/:id', UsuarioController.deletarUsuario)

module.exports = router