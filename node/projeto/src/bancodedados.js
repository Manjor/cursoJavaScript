const sequence = {
    _id: 1,
    get() {return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    if(!produti.id) produto.id = sequence.id
    produto[produto.id] = produto
    return produto
}

function getProduto(id){
    return produto[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports =  {salvarProduto,getProduto,getProdutos}