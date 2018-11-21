function tratarErroeLancar(erro){
    throw new Error('Erro de Processamento. Estamos analisado.')
    //throw 10
    //throw true
    /*throw{
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }*/
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroeLancar(e)
    } finally{
        console.log('Final da Execução')
    }
}

const obj = {nome: 'Manoel'}
imprimirNome(obj)