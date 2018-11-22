//Função em JS é First-Class Object (Citizens)
//Higher-order function

//Criar de forme literal
//Retorno de uma função é opcional
function fun1(){}

//Armazenar em uma variavel
//Função anonima
const fun2 = function() {}

//Armazenar em um array
const array = [function (a,b) {return a + b}, fun1,fun2]

console.log(array[0](2,3))

//Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () {return 'Opa'}

console.log(obj.falar())

//Função como parametros
function run(fun){
    fun()
}
//Chamada da Função passando uma função
run(function() {console.log('Executando')})

// Uma função pode retornar/contrer uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c);
    }
}
//Chamada da função com parametros e passando os parametros para a função
//externa
soma(1,2)(5)
//Ou
const cincoMais = soma(2,3)
cincoMais(4)
