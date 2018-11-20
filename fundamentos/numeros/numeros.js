const peso1 = 1.0
const peso2 = Number('2.0')


console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Pergunta se a variavel é inteiro
console.log(Number.isInteger(peso2))

const av1 = 9.78
const av2 = 6.87

const total = av1 * peso1 + av2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) //Define a quantidade de casas decimais

console.log(media.toString(2))//Transforma em uma string binária
console.log(typeof media) // retorna o tipo de variavél

