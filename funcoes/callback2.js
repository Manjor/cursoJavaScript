const notas = [7.7,6.5,8.2,,4.2,8.9,7.1,9.0]

//Sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com Callback
const notasBaixas2 = notas.filter((nota)=> nota < 7)
console.log(notasBaixas2)