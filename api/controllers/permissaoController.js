const PermissaoService = require('../services/permissaoService')
const permissaoService = new PermissaoService()

class PermissaoController {
    
    static async cadastrar(req, res){
        const {nome, descricao } = req.body


        try {

        } catch (erro) {
            
        }
    }
}

module.exports =  PermissaoController