const porta = 3003
const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyParse.urlencoded({ extended: true }))
app.get('/produtos', (req,res,next) =>{
    res.send(bancodedados.getProdutos())
})

app.get('./produtos/:id',(req,res,next)=>{
    res.send(bancodedados.getProduto(req.params.id))
})

app.post('/produtos',(req,res,next) =>{
    const produto = bancodedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    console.log(produto)
    res.send(produto) //JSON
})

app.listen(porta,() =>{
    console.log(`Servidor está executando na porta ${porta}.`)
})