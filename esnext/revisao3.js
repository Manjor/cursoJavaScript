const objt = {a:1,b:2,c:3}
console.log(Object.values(objt))
console.log(Object.keys(objt))

//Melhorias na Notacao Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au'
    }
}

console.log(new Cachorro().falar())