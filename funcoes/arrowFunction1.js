let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Retorno implicito
console.log(dobro(Math.PI))

console.log(dobro(3))

let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //pussui parametro
console.log(ola())
