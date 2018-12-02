function meuObjeto(){}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){console.log(`Bom dia! Meu nome é: ${this.nome}!`)}

const ob3 = new meuObjeto;

ob3.nome = 'Manoel'
ob3.falar()

const obj4 = {}
obj4.__proto__ = meuObjeto.prototype
obj4.nome = 'Obj4'
obj4.falar()

console.log((new meuObjeto).__proto__ == meuObjeto.prototype)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
