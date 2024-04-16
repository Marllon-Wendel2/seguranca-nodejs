const database = require('../models');
const uuid = require('uuid')

class RoleService {
    async cadastrar(dto) {
        const role =  await database.roles.findOne({
            where: {
                nome: dto.nome
            }
        })

        if(role) {
            throw new Error('Role já cadastrada');
        }

        try {
            const newRole = await database.roles.create({
                id: uuid.v4(),
                nome: dto.nome,
                descricao: dto.descricao
            })

            return newRole
        } catch (error) {
            throw new Error('Erro ao cadastrar');
        }
    }

    async buscarTodasRoles() {

        try {
            const roles = await database.roles.findAll();
            return roles;
        } catch (error) {

            throw new Error('Erro na requisição')
        }
    }


    async buscarPorRoleId(id) {
        const role = await database.roles.findOne({
            where: {
                id: id
            }
        })

        if(!role) {
            throw new Error('Role não encontrada');
        }

        return role
    }

    async deletaRole(id) {
        const role = await database.roles.findOne({
            where: {
                id:id
            }
        });

        if(!role) {
            throw new Error ('Role não encontrada')
        };

        try {
            await database.roles.destroy({
                where: {
                    id:id
                }
            })

        } catch (error) {
            throw error
        }
    }

    async atualizaRole(dto) {
        const role = await database.roles.findOne({
            where: {
                id: dto.id
            }
        })

        if(!role) {
            throw new Error('Role não encontrada');

        }

        try {
            role.nome = dto.nome
            role.descricao = dto.descricao

            await role.save();
            return await role.reload()

        } catch (error) {
            throw error
        }
    }
}

module.exports = RoleService