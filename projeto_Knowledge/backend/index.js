//Cria uma instância do express
const app = require('express')()
const consign = require('consign')

//Consig irá carregar para toda a aplicação os midlewares congigurados
consign()
    .then('./config/middlewares.js')
    .into(app)

app.listen(3000,()=>{
    console.log('Backend Executando...')
})