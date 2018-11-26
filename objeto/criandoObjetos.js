//Usando a notação Literal
const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome,preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * ( 1- desc )
    }
}

const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('Notebook',2899.99,0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criaFuncionario(nome,salario,faltas){
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30 ) * (30 - faltas)
        }
    }
}

const f1 = criaFuncionario('Manoel',1500,3)
console.log(`${f1.nome}, esse mês seu salário é: R$ ${f1.getSalario()}`)

const f2 = criaFuncionario('Adria',11400,1)
console.log(`${f2.nome}, esse mês seu salário é: R$ ${f2.getSalario()}`)


//Object.create
const filho = Object.create(null)
filho.nome = 'Junior'
console.log(filho.nome)

//Uma Função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)