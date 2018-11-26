function criarProduto(nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Desktop', 3199.49))
console.log(criarProduto('Iphone', 1000.49))
console.log(criarProduto('IMAC', 7000.49))
console.log(criarProduto('Notebook3', 1999.49))
