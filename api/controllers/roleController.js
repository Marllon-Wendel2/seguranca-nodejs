const RoleService = require('../services/roleService')

const roleService = new RoleService()

class RoleController {
    static async cadastrar(req, res) {
        const { nome, descricao } = req.body

        try {
            const role = await roleService.cadastrar({ nome, descricao })

            res.status(201).send(role)

        } catch (error) {
            res.status(400).send({message: error.message})
        }};

    static async buscarTodasRoles(req, res) {
        
        try {
        
            const todasRoles = await roleService.buscarTodasRoles()

            res.status(200).send(todasRoles) 

        } catch (error) {

            res.status(500).send({message: error.message})
        }};
    
    static async buscarRoleId(req, res) {

        try {
            const { id } = req.params;

            const role = await roleService.buscarPorRoleId(id)
            res.status(200).json(role);

        } catch (error) {
            console.log('Erro:', error.message);
            res.status(400).send({message:error.message})

        }
    }

    static async deletaRole (req, res) {

        try {
            const { id } = req.params;

            await roleService.deletaRole(id);
            res.status(200).send({ message: 'Role deletada'})

        } catch (error) {

            res.status(400).send({message: error.message})

        }

    };

    static async atualizaRole(req, res) {
        
        const { id } = req.params;
        const { nome, descricao } = req.body;
        try {

            const role = await roleService.atualizaRole({ id, nome, descricao });
            res.status(200).send(role);

        } catch (error) {
            res.status(400).send({message: error.message})

        }
    }

}

module.exports = RoleController