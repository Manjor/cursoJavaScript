let valor // não inicializa a variavel
console.log(valor) // valor indefinido 
//console.log(valor2) // valor não declarado
valor = null // aponta para nada, nula
console.log(valor)
console.log()

const produto = {}
console.log(produto.preco) // o preco dentro do produto nao está definido

produto.preco = 3.50
console.log(produto.preco)
delete produto.preco; // deleta um atributo do produto
console.log(produto.preco)
