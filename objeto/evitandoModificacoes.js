//Object.preventExtensions = evita a adicão de novos atributos ao objeto
const produto = Object.preventExtensions({
   nome: 'Qualquer', preco: 1.99, tag: 'promocao' 
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
//A remoção de atributos é possível
delete produto.tag
console.log(produto)


//Object.seal
//Não consegue adiciona, nem excluir atributos
//Mas pode alterar os valores dos atributos
const pessoa = {nome: 'Juliana',idade: 35}
Object.seal(pessoa)
console.log('Selado: ',Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes
//Não consegue, adicinar, nem excluir, nem alterar os atributos
