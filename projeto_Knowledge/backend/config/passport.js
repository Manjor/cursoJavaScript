const { authSecret } = require('../.env')
const passport = require('passport')
const passportjwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportjwt

module.exports = app =>{
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    //Cria a estratégia, passandos os parametros o payload e chama o done se ocorrer tudo certo
    const strategy = new Strategy(params, (payload,done) =>{

        app.db('users')
            .where({ id: payload.id})
            .first()
            .then(user => done(null, user ? {...payload }: false))
            .catch(err => done(err,false))
            //True e false são para o retorno da validação
    })

    passport.use(strategy)

    //Filtra as requisições e não permite as requisições feitas sem o usuário logado
    return{
        authenticate: () => passport.authenticate('jwt', {session: false})
    }
}