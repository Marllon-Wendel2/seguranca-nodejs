const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./usuarioRoutes')

module.exports = app => {
  app.use(
    bodyParser.json(),
    produto,
    usuario
  )
}
