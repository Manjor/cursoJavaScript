function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

//area(5,5)

console.log(area(2,2))
console.log(area(1,1))
area(5,5)