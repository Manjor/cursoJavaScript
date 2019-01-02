//Cria uma instância do express
const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

//Consig irá carregar para toda a aplicação os midlewares congigurados
consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000,()=>{
    console.log('Backend Executando...')
})