function teste1(num){
    if(num > 7)
    //Apenas a primeira sentença está associada ao if, caso nao use chaves
        console.log(num)
        //A segunda senteça nao está relacionada ao if
    console.log('final')
}
teste1(6)
teste1(8)

function teste2(num){
    //Sentença de Codigo Vazia
    if(num > 7)
        ;
    
    {
        console.log(num)
    }
}
//Sempre vai imprimir a senteça console.log()
teste2(6)
teste2(8)