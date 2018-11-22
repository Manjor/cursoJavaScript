//Usando if e else
const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

//Usando codinção Ternaria
const resultadoArrow = (num) =>
    console.log((num >=7)? 'Aprovado' : 'Reprovado')

    imprimirResultado(6.9)
    imprimirResultado(7.1)

    resultadoArrow(6.9)
    resultadoArrow(7.1)
