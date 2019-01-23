const authSecret  = process.env.AUTHSECRET
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{
    const signin = async (req,res) =>{
        //Verifica se foi informado email e senha na requisição
        if(!req.body.email || !req.body.password){
            return res.status(400).send('Informe usuário e Senha')
        }
        //Passa o email como parametro para a consulta no banco
        const user = await app.db('users')
            .where({email: req.body.email})
            .first()

            //Verifica se o usuario existe
            if(!user) return res.status(400).send('Usuário não encontrado')
            //Verifica se a senha está correta
            const isMatch = bcrypt.compareSync(req.body.password,user.password)
            if(!isMatch) return res.status(401).send('Email/Senha inválidos')

            //Captura a data atual
            const now = Math.floor(Date.now() / 1000)
            //Configura o conteudo do token
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin,
                //Data de geração do Token Issued at (Emitido em )
                ait: now,
                exp: now + (60 * 60 * 24 * 3)//Validade por 3 dia
            }

            res.json({
                ...payload,
                token: jwt.encode(payload,authSecret)
            })
        }


        const validateToken = async (req,res) =>{
            const userData = req.body || null
            try {
                if(userData) {
                    const token = jwt.decode(userData.token, authSecret)
                    if(new Date(token.exp * 1000) > new Date()) {
                        return res.send(true)
                    }
                }
            } catch(e) {
            // problema com o token
            }
            res.send(false)
        }

    return { signin , validateToken}
}