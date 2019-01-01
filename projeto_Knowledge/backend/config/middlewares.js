//Interpretador do corpo das resquisições, BodyParser
const bodyParser = require('body-parser')
//Cors permite outras aplicações usarem a API
const cors = require('cors')
//Consign ajuda a fazer as dependências dentro da aplicação

module.exports = app => {
    app.use(bodyParser.json())
    app.use(cors())
}