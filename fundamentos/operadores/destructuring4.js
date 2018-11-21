function rand([ min = 0, max = 1000]){
    //Se o minimo for maior que o maximo, inverte
    //usando o Destructuring
    if(min > max) [min,max] = [max,min]

    const valor = Math.random() * (max - min) + min
    //Aredonda o valor pra baixo
    return Math.floor(valor)
}

console.log(rand([40,50]))
console.log(rand([992]))
console.log(rand([]))