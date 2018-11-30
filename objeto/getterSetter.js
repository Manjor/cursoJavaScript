const sequencia ={
    _valor: 1, //convenção
    get valor(){return this._valor++},
    set valor(value){
        if(value > this._valor){
            this._valor = value
        }
    }
}


console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor,sequencia.valor)