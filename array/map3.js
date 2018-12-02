Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i< this.length; i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.50}',
    '{"nome":"Lapis", "preco": 0.15}',
    '{"nome":"Caneta", "preco": 7.50}'
]
//Retornar um array apenas com os preços
//Desafio feito
const precos = carrinho.map(function(valor,indice){
    const obj = JSON.parse(valor)
    return `R$ ${obj.preco}`
})

//Implementado no curso
const paraObjeto = json =>JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

//Minha Maneira
console.log(precos)
//Maneira Curso
console.log(resultado)