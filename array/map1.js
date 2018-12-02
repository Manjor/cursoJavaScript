//Tranformação no Array, mapeando o array para um outro array do mesmo
//tamanho no qual cada elementro sofrerá alguma transformação
const num = [1,2,3,4,5]
//For com propósito
let dobro = num.map(function(valor,indice){
    return `Dobro de ${valor} = ${valor * 2}`
})

console.log(dobro)

//Map não transforma o array atual, gera outro
console.log(num)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`


let mais10 = num.map(soma10).map(triplo).map(paraDinheiro)
console.log(mais10)