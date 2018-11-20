//Recuso do ES2015
//Operador de Desestruturação
//Remove de dentro de um objet/array um atributo

const pessoa = {
    nome: 'Ana',
    idade: 12,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

//Busca do objeto pessoa, os atributos nome e idade
const { nome, idade} = pessoa
console.log(nome, idade)


const { nome: n , idade: i} = pessoa
console.log(n,i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)