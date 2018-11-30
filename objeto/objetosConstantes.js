//Pessoa -> Endereço de memoria(2456511) -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//Pessoa -> 456445 -> {...} 
//pessoa = {nome: 'Ana'}

//Por ser constante ele sempre apontará para o objeto inicial
//Não sendo possível colocar um objeto com nome 'Ana' dentro de pessoa
//Freeze congela o estado do objeto até a linha freeze, não sendo possível,
//mudar nenhum atributo do objeto, nem adicionar, nem excluir
Object.freeze(pessoa)

pessoa.nome= 'Maria'
console.log(pessoa.nome) //irá imprimir Pedro, pois é o ultimo nome atribuído antes do freeze

