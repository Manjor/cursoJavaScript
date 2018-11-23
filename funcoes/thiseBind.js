const pessoa = {
    saudacao: 'Bom Dia',
    //Recurso ES2015 sem a necessidade de chave valor para
    //metodos
    falar(){
        //Acessa o atributo do objeto
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar //Undefine, pois não referencia mais o this do objeto
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //Resolve o conflito e referencia o this de pessoa
falarDePessoa()

const falar2 = pessoa.falar.bind(pessoa)

falar2()