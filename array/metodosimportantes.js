const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //remove o ultimo elemento do array

console.log(pilotos)
pilotos.push('Vertappen') //Adiciona um elemento no array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adicina no indice 0
console.log(pilotos)

//Splice adiciona e remove

//adicionar
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//remove
pilotos.splice(3,1) 
console.log(pilotos)

//Gera no array apartir de um indice
const algunsPilotos = pilotos.splice(2)
console.log(algunsPilotos)