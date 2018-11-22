const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x == 5){
        break
    }
    console.log(`x = ${nums[x]}`)
}
//Interrompe a execução atual e pula pra proxima
//Ou seja, quando chegar no indice 5 irá interromper e ir para a proxima
//execução. Não irá mostrar no console o valor do indice 5
for(y in nums){
    if(y == 5) continue
    console.log(`C: ${y} = ${nums[y]}`)
}

//faz com que o break haja sobre o laço externo e não sobre o interno
externo: for (a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim')