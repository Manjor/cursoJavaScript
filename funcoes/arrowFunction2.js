function Pessoa(){
    this.idade = 0
    //Ao utilizar arrow function, não é necessário usar o Bind
    setInterval(() =>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa