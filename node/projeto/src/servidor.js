const porta = 3003
const express = require('express')
const app = express()

app.get('/produtos', (req,res,next) =>{
    console.log('Middleware 1...')
    next()
})

app.get('/produtos', (req,res,next) =>{
    res.send({nome: 'Notebook',preco:123.74}) //Converter para JSON
})

app.listen(porta,() =>{
    console.log(`Servidor está executando na porta ${porta}.`)
})