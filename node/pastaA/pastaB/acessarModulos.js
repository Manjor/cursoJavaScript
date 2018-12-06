const moduloA = require('../../moduloA')
console.log(moduloA)

//Quando o arquivo está dentro de node_modules, não precisa colocar o 
//caminho relativo
const saudacao = require('saudacao')
console.log(saudacao)


const c = require('./pastaC')
console.log(c.ola2)

//Modulo Core Node
const http = require('http')
http.createServer((req,res)=>{
    res.write('Bom Dia')
    res.end()
}).listen(8080)
