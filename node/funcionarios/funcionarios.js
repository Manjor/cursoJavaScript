const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulhers = f => f.genero === 'F'
const menorSalario = (func,funcAtual) =>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulhers)
        .reduce(menorSalario)

    console.log(func)

},error =>{
    console.log('Não Foi possivel realizar a requisição. Verifique a URL')
})


