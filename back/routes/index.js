const routes = require('express').Router()


const signup = require('./signup')
const signin = require('./signin')
const post = require('./posts')
const session = require('./session')

routes.use(signup)
routes.use(signin)
routes.use(session)
routes.use(post)


routes.get('/', function (req, res) {
    res.send("Uhuu, tá funcionando.")
  })


module.exports = routes;