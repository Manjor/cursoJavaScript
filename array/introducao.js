console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])

for(ap in aprovados){
    console.log(aprovados[ap])
}

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
aprovados[9] = 'Rafael'

console.log(aprovados[8] === undefined)

console.log(aprovados)

//Função Sorte ordena os elementos, seja por Letras ou Numeros
aprovados.sort()
console.log(aprovados)
//Delete não reordena o array
delete aprovados[1]
console.log(aprovados)

//Serve para adicionar ou remover elementos no indice
aprovados.splice(1,3,'Novo Elemento1')
console.log(aprovados)
