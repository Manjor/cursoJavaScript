//par Nome/Valor
const saudacao = 'Opa' //Contexto léxico 1
function exec (){
    const saudacao = 'Fala' //Contexto léxico 2
    return saudacao
}
//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Quadra 303',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.nome)
console.log(cliente.idade)
console.log(cliente.peso)
console.log(cliente.endereco.logradouro)