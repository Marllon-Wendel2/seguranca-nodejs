const PermissaoService = require('../services/permissaoService')
const permissaoService = new PermissaoService()

class PermissaoController {
    
    static async cadastrar(req, res) {
        const {nome, descricao } = req.body
        

        try {
            const permissao = await permissaoService.cadastrar({nome, descricao});

            res.status(201).send(permissao);

        } catch (erro) {
            res.status(400).send({message: erro.message});
        }
    }

    static async buscarTodasPermissoes(req, res) {
        const todasPermissoes = await permissaoService.buscarTodasPermissoes()

        res.status(200).send(todasPermissoes)
    }

    static async buscaPermissaoId(req, res) {
        const { id } = req.params;

        try {
            const permissaoId = await permissaoService.buscaPermissaoId(id)

            res.status(200).json(permissaoId);

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async deletaPermissao(req, res) {
        const { id } = req.params;

        try {
            await permissaoService.deletaPermissao(id);

            res.status(200).send('Permissão deletada!')
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async atualizaPermissao(req, res) {
        const { id } = req.params;
        const { nome, descricao } =  req.body;

        try {
            const permissaoAtualizada = await permissaoService.atualizaPermissao({ id, nome, descricao });

            res.status(200).json(permissaoAtualizada);

        } catch (error) {
            res.status(400).send('Erro na atualização')
        }
    }
}

module.exports =  PermissaoController