//Arrow Functions
const soma = (a,b) => a + b
console.log(soma(1,2))

//Arrow Funcion (this)
const lexico = ()=> console.log(this === exports)
const lexico2 = ()=> lexico.bind({})
lexico()
lexico2()

//Parametros Default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Não é mais node')

//Operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n=> total +=n )
    return total
}

console.log(total(2,4,6,8))