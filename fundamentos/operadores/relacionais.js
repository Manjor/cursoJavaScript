//Se os valores são iguais
console.log('01)', '1' == 1) // True
//Se o tipo e os valores são iguais
console.log('02)', '1' === 1) // False
//Se os valores são diferentes
console.log('03)', '3' != 3) // False
//Se os tipos e os valores são diferentes
console.log('04)','3' !== 3 ) // True

console.log('05)', 3 < 2)
console.log('06)', 3 < 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
//Compara os endereços de memoria
console.log('09)', d1 === d2) // false
console.log('10)', d1 == 2) // false
//Compara o valor da data, que vem em number e possuem o mesmo valor
console.log('11)', d1.getTime() === d2.getTime()) //true
console.log('12)',undefined == null) // true
console.log('13)', undefined === null) //false