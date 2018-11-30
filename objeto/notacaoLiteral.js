const a = 1
const b = 2
const c = 3

//antes ES15
const obj1 = {a:a,b:b,c:c}
//apos ES15
const obj2 = {a,b,c}
console.log(obj1,obj2)

const nomeAttr = 'nota'
const valorAttr = 7.8

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)

const obj5 ={
    //Antes
    funcao1: function(){
        //....
    },
    //Depois
    funcao2(){

    }
}
console.log(obj5)