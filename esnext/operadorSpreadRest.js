//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametros da funcao

//usar spread com objeto
const funcionario = {
    nome: 'Maria',
    salario: 123456
}
//Pega todos os atributos de funcionário
const clone = {ativo:true,...funcionario}

console.log(funcionario)
console.log(clone)

//usar spread com array
const grupA = ['joao','pedro','gloria']
const grupFinal = ['maria',...grupA,'rafaela']
console.log(grupFinal)