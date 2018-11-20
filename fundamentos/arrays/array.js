const valores  = [7.7,8.9,7.2]
console.log(valores[0],valores[2])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
console.log('Elementos:',valores.length)
valores.push({id: 3},false,null,'teste') // Permite misturar vários tipos de dados em uma array
console.log(valores)
console.log(valores.pop()) // Remove o ultimo elemento de uma array
delete valores[0] // remove um item de array no inice informado
console.log(valores)
console.log(typeof valores)