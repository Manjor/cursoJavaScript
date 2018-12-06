console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma Função')
    console.log(this === exports)
    console.log(this === module.exports)
    //Dentro de uma função o this aponta para global
    //e não para o modulo
    console.log(this === global)
}

logThis()