//Função sem retorno
function imprimirSoma(a,b){
    console.log(a + b)
}
//Função com valor padão
function imprimiSoma2(a, b = 1){
    return a +b
}

imprimirSoma(2,3)
console.log(imprimiSoma2(2))
