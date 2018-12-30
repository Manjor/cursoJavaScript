const express = require('express')
const app = express()

//Use atende todos os tipos de requisições, seja ela, GET, POST, PUT...
/*app.use('/opa',(req,res)=>{
    res.send('<h1>Estou Bem</h1>')
})*/
app.all('/opa',(req,res)=>{
    res.send('<h1>Requisição</h1>')
})

app.listen(3000,()=>{
    console.log('Backend Executando...')
})
