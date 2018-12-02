Array.prototype.forEach2 = function(callback){
    for(let i = 0; i< this.length; i++){
        callback(this[i],i, this)
    }
}


const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']
//uma função callback de um forEach rece até 3 parametros
//sendo eles, 0-nome, 1-indice, 2-array
aprovados.forEach2(function(nome,indice,array){
    console.log(`${indice + 1}) ${nome}`)
})