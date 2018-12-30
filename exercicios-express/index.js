const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const saudacao = require('./saudacaoMid')
//Passa a chamada da função
//app.use(saudacao('Manoel'))
app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//Use atende todos os tipos de requisições, seja ela, GET, POST, PUT...
/*app.use('/opa',(req,res)=>{
    res.send('<h1>Estou Bem</h1>')
})*/
//~Padrão de Cadeia de Responsabilidade
app.get('/clientes/relatorio',(req,res)=>{
    //Query usa-se quando for necessário passar como parametro, a chave e o valor
    //exemplo: url?completo=true&ano=2018
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.get('/clientes/:id',(req,res)=>{
    //request.params.nomeparam pega o parametro enviado na url
    res.send(`Cliente ${req.params.id} selecionado!`)
})

app.post('/corpo',(req,res)=>{
    /*let corpo = ''
    req.on('data', function(parte){
        corpo += parte
    })
    req.on('end',function(){
        res.send(corpo)
        //res.json(JSON.parse(corpo))
    })*/
    res.send(req.body)
})

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
