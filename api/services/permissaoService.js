const database = require('../models');
const uuid = require('uuid');

class PermissaoService {
    async cadastrar(dto) {
        const permissao = await database.permissoes.findOne({
            where: {
                nome: dto.nome
            }
        })
    
        if(permissao) {
            throw new Error('Permissão já existente');
        }

        try {
            const newPermissao = await database.permissoes.create({
                id: uuid.v4(),
                nome: dto.nome,
                descricao: dto.descricao
            });

            return newPermissao;
        } catch (erro) {
            throw new Error('Erro ao cadastrar nova permissão')
        }
    };

    async buscarTodasPermissoes() {
        const todasPermissoes = await database.permissoes.findAll()
        return todasPermissoes
    }

    async buscaPermissaoId(id) {
        const permissao = await database.permissoes.findOne({
            where: {
                id: id
            }
        });

        if(!permissao) {
            throw new Error('Permissão não encontrada');
        }

        return permissao;
    };

    async deletaPermissao(id) {
        const permissao = await database.permissoes.findOne({
            where: {
                id: id
            }
        });

        if(!permissao) {
            throw new Error('Permissão não encontrada');
        }

        try {
            await database.permissoes.destroy({
                where: {
                    id: id
                }
            })


        } catch (error) {
            throw error
        }
    }

    async atualizaPermissao(dto) {
        const permissao = await database.permissoes.findOne({
            where: {
                id: dto.id
            }
        });

        
        if(!permissao) {
            throw new Error('Permissão não encontrada');
        }
        
        try {
            permissao.nome = dto.nome,
            permissao.descricao = dto.descricao

           await permissao.save();
           return await permissao.reload();
        } catch (error) {
            throw error
        }
    }

}

module.exports =  PermissaoService