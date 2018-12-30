module.exports = function saudacao(nome){
    //Retorna uma função Middleware
    return function(req,res,next){
        console.log(`Seja bem Vindo ${nome}`)
        next()
    }
}