const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')
//Passa a chamada da função
app.use(saudacao('Manoel'))

//Use atende todos os tipos de requisições, seja ela, GET, POST, PUT...
/*app.use('/opa',(req,res)=>{
    res.send('<h1>Estou Bem</h1>')
})*/
//~Padrão de Cadeia de Responsabilidade

app.use('/opa',(req,res,next)=>{
    console.log('Antes...')
    next()
})
app.get('/opa',(req,res,next)=>{
    console.log('Durante...')
    res.json({
        data:[
            {id: 1, nome: 'Manoel',posicao: 1},
            {id: 2, nome: 'Tavares',posicao: 2},
            {id: 3, nome: 'Oliviera',posicao: 3},
            {id: 4, nome: 'Junior',posicao: 4},
        ],
        count: 4,
        skip: 0,
        limit: 3,
        status: 200

    })
    next()
    //res.json({
    //    nome: 'iPad 32GB',
    //    preco: 1988.00,
    //   desconto: '0.15'
    //})

    //res.send('<h1>Requisição</h1><br><br><h2>Deu Certo</h2>')
})


app.use('/opa',(req,res)=>{
    console.log('Depois...')
})
app.listen(3000,()=>{
    console.log('Backend Executando...')
})
