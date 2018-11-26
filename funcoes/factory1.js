//Factory = Função que retorna um Objeto

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
//Objetivo de fabricar a instacia de um objeto
console.log(criarPessoa())