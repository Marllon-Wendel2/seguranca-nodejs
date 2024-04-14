const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const jsonScret = require('../config/jsonSecret.js')

class AuthService {
    async login(dto) {
        const usuario =  await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha'],
            where: {
                email: dto.email
            }
        })

        if(!usuario) {
            throw new Error(`O ${usuario} não cadastrado`);
        }
        const senhaIguais = compare(dto.senha, usuario.senha)

        if(!senhaIguais) {
            throw new Error('Usuário ou senha incorretos')
        }

        const accessToken =  sign ({
            id: usuario.id,
            email: usuario.email
        }, jsonScret.secret, {
            expiresIn: 86400
        })

        return { accessToken }
    }
}

module.exports = AuthService