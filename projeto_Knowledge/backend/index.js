//Cria uma instância do express
const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

//Consig irá carregar para toda a aplicação os midlewares congigurados
consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./schedules')
    .then('./config/routes.js')
    .into(app)

app.listen(3000,()=>{
    console.log('Backend Executando em LocalHost:3000')
})