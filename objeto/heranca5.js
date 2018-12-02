console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([1,2,3,4].first())
console.log(['a','b','c','4'].first())

//Jamais sobrescrever metodos do proprio js
/*String.prototype.toString = function (){
    return 'Lascou Tudo'
}*/

console.log('Escola Cod3r'.reverse())
