//É permitido criar uma função sem parametros e usá-la com parametros
function soma(){
    let soma = 0
    //arguments é um array interno da função
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}


console.log(soma())
console.log(soma(1))
console.log(soma(1.1,3,3.4))

console.log(soma(1.1,3,3.4,"Teste"))
console.log(soma('a','b','c',"Teste"))